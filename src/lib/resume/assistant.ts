import { anthropic } from "@ai-sdk/anthropic";
import { google } from "@ai-sdk/google";
import { generateText, jsonSchema, NoObjectGeneratedError, Output, type LanguageModel, type ModelMessage } from "ai";
import type { JSONSchema7 } from "json-schema";
import { z } from "zod";
import { resumeDataSchema, type ResumeData } from "./schema";

/** `provider:model`, e.g. `google:gemini-3.8-flash` or `anthropic:claude-opus-5`. */
const DEFAULT_AI_MODEL = "google:gemini-3.8-flash";

export const MAX_ASSISTANT_TURNS = 12;
export const MAX_ASSISTANT_MESSAGE_LENGTH = 4000;

export interface AssistantTurn {
  role: "user" | "assistant";
  text: string;
}

export const assistantTurnSchema = z.strictObject({
  role: z.enum(["user", "assistant"]),
  text: z.string().min(1).max(MAX_ASSISTANT_MESSAGE_LENGTH),
});

const assistantResponseSchema = z.strictObject({
  reply: z.string().describe("Short message to the resume owner explaining what changed, or answering their question."),
  note: z
    .string()
    .describe("One-line summary of the change for the version history, e.g. 'Add AWS certification'. Empty if nothing changed."),
  resume: resumeDataSchema.describe("The complete resume after applying the request. Return it unchanged if no edit was requested."),
});

export type AssistantResponse = z.infer<typeof assistantResponseSchema>;

// Gemini accepts only a subset of JSON Schema. Send it a copy without the unsupported
// keywords and keep validating the response against the full Zod schema.
const MODEL_SUPPORTED_FORMATS = new Set(["date", "date-time", "time"]);

function toModelJsonSchema(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(toModelJsonSchema);
  }
  if (!value || typeof value !== "object") {
    return value;
  }
  return Object.fromEntries(
    Object.entries(value)
      .filter(([key, item]) => key !== "$schema" && key !== "pattern" && !(key === "format" && !MODEL_SUPPORTED_FORMATS.has(String(item))))
      .map(([key, item]) => [key, toModelJsonSchema(item)]),
  );
}

const assistantOutputSchema = jsonSchema<AssistantResponse>(
  toModelJsonSchema(z.toJSONSchema(assistantResponseSchema)) as JSONSchema7,
  {
    validate: (value) => {
      const result = assistantResponseSchema.safeParse(value);
      return result.success ? { success: true, value: result.data } : { success: false, error: result.error };
    },
  },
);

const instructions = `You help the owner of a personal portfolio keep their resume up to date.
You receive the current resume as JSON and a request. Return the complete updated resume.

Rules:
- Change only what the request asks for; keep every other field exactly as it is.
- Every { "en", "es" } field must have both languages. Write natural, professional English and Spanish (Latin American), translating when the owner writes in only one language.
- Never invent facts (companies, dates, metrics, certifications). If information is missing, ask for it in "reply" and leave the resume unchanged.
- Experiences are ordered newest first. New experience ids are short kebab-case slugs of the company.
- Dates in certifications are ISO dates (YYYY-MM-DD). Period labels follow the existing style ("Aug 2023 - Present" / "Agosto 2023 - Presente").
- Keep "reply" brief. Reply in the language the owner used.`;

function getModel(): LanguageModel {
  const [provider, ...rest] = (process.env.AI_MODEL || DEFAULT_AI_MODEL).split(":");
  const modelId = rest.join(":");
  if (!modelId) {
    throw new Error(`Invalid AI_MODEL "${process.env.AI_MODEL}". Use provider:model, e.g. ${DEFAULT_AI_MODEL}.`);
  }
  switch (provider) {
    case "google":
      return google(modelId);
    case "anthropic":
      return anthropic(modelId);
    default:
      throw new Error(`Unsupported AI provider "${provider}". Use "google" or "anthropic".`);
  }
}

/** Asks the model to apply the latest request in `turns` to `resume`. */
export async function proposeResumeEdit(
  resume: ResumeData,
  turns: AssistantTurn[],
  model: LanguageModel = getModel(),
): Promise<AssistantResponse> {
  const history = turns.slice(-MAX_ASSISTANT_TURNS);
  const request = history.at(-1);
  if (!request || request.role !== "user") {
    throw new Error("The last message must come from the user.");
  }

  const messages: ModelMessage[] = [
    ...history.slice(0, -1).map((turn): ModelMessage =>
      turn.role === "user"
        ? { role: "user", content: turn.text }
        : { role: "assistant", content: turn.text },
    ),
    {
      role: "user",
      content: `Current resume JSON:\n\`\`\`json\n${JSON.stringify(resume, null, 2)}\n\`\`\`\n\nRequest: ${request.text}`,
    },
  ];

  try {
    const { output } = await generateText({
      model,
      instructions,
      messages,
      output: Output.object({ schema: assistantOutputSchema, name: "resume_edit" }),
    });
    return output;
  } catch (error) {
    if (NoObjectGeneratedError.isInstance(error)) {
      throw new Error("The assistant returned a resume that doesn't match the schema. Try rephrasing the request.");
    }
    throw error;
  }
}
