import { generateText, jsonSchema, NoObjectGeneratedError, Output, type FilePart, type ModelMessage, type TextPart } from "ai";
import type { JSONSchema7 } from "json-schema";
import { z } from "zod";
import { getModel, toModelJsonSchema } from "@/lib/assistant/model";
import type { LandingLocale } from "@/components/landing/i18n";
import { assistantServerCopy } from "@/lib/assistant/copy";
import { JOB_MATCH_CATEGORY_KEYS, MAX_JOB_DESCRIPTION_PDF_BYTES } from "@/lib/assistant/job-match-constants";
import type { ResumeData } from "@/lib/resume/schema";

const MAX_JOB_MATCH_OUTPUT_TOKENS = 1500;

export interface JobMatchInput {
  /** Pasted job description text. */
  text?: string;
  /** Base64-encoded PDF bytes (no data: URL prefix). */
  pdfBase64?: string;
}

const jobMatchCategorySchema = z.strictObject({
  score: z.number().min(0).max(100),
  summary: z.string().describe("1-2 sentences: concrete strengths first, then any gap named plainly but tactfully. Plain text, no markdown."),
});

const jobMatchResultSchema = z.strictObject({
  isJobDescription: z.boolean().describe("False when the input is not really a job description."),
  overallScore: z.number().min(0).max(100),
  headline: z.string().describe("One encouraging but honest sentence summarizing the fit. Plain text, no markdown."),
  categories: z.strictObject(
    Object.fromEntries(JOB_MATCH_CATEGORY_KEYS.map((key) => [key, jobMatchCategorySchema])) as Record<
      (typeof JOB_MATCH_CATEGORY_KEYS)[number],
      typeof jobMatchCategorySchema
    >,
  ),
  gaps: z.array(z.string()).max(3).describe("Real, material gaps only -- empty array if none. Never invented. Plain text, no markdown."),
});

export type JobMatchResult = z.infer<typeof jobMatchResultSchema>;

const jobMatchOutputSchema = jsonSchema<JobMatchResult>(
  toModelJsonSchema(z.toJSONSchema(jobMatchResultSchema)) as JSONSchema7,
  {
    validate: (value) => {
      const result = jobMatchResultSchema.safeParse(value);
      return result.success ? { success: true, value: result.data } : { success: false, error: result.error };
    },
  },
);

const instructions = `You are evaluating how well a candidate's resume matches a job description, to show the
visiting recruiter or hiring manager a fair, confidence-building summary.

Rules:
- Ground every claim only in the resume JSON provided. Never invent skills, years of
  experience, or achievements not present in it.
- Where the candidate is a strong match, say so plainly and specifically, citing the actual
  experience.
- Where there is a genuine gap, name it in one factual sentence without hedging or apologizing;
  note adjacent or transferable experience where reasonable, but never spin a missing skill
  into a strength.
- Always score all five categories, every time: technicalSkills, seniorityScope,
  domainExperience, softSkills, languages. If the job description says nothing about a
  category, score it against a sensible default expectation and say so in its summary.
- Keep summaries to 1-2 sentences and "gaps" to at most 3 short items.
- If the input isn't really a job description, set isJobDescription to false and use zeros.
- Use plain text only in every field: no markdown, no asterisks, no bullets, no formatting.
- Write headline, summaries and gaps in the language requested by the user message.`;

function buildContent(text: string | undefined, pdfBytes: Uint8Array | undefined, locale: LandingLocale): Array<TextPart | FilePart> {
  const parts: Array<TextPart | FilePart> = [{ type: "text", text: `Evaluate the job description below (text and/or attached PDF) against the candidate's resume. Write your response in ${locale === "es" ? "Spanish" : "English"}.` }];
  if (pdfBytes) {
    parts.push({ type: "file", data: pdfBytes, mediaType: "application/pdf" });
  }
  if (text) {
    parts.push({ type: "text", text: `Job description:\n${text}` });
  }
  return parts;
}

/** Compares `input` (pasted text and/or a PDF) against `resume` and returns a structured match. */
export async function matchJob(
  resume: ResumeData,
  input: JobMatchInput,
  locale: LandingLocale = "en",
  model = getModel(),
): Promise<JobMatchResult> {
  const text = input.text?.trim() || undefined;
  const pdfBytes = input.pdfBase64 ? new Uint8Array(Buffer.from(input.pdfBase64, "base64")) : undefined;
  const copy = assistantServerCopy[locale];
  if (!text && !pdfBytes) {
    throw new Error(copy.jobMatchEmpty);
  }
  if (pdfBytes && pdfBytes.byteLength > MAX_JOB_DESCRIPTION_PDF_BYTES) {
    throw new Error(copy.pdfTooLarge);
  }

  const messages: ModelMessage[] = [
    {
      role: "user",
      content: buildContent(text, pdfBytes, locale),
    },
    {
      role: "user",
      content: `Candidate resume JSON:\n\`\`\`json\n${JSON.stringify(resume, null, 2)}\n\`\`\``,
    },
  ];

  try {
    const { output } = await generateText({
      model,
      instructions,
      messages,
      maxOutputTokens: MAX_JOB_MATCH_OUTPUT_TOKENS,
      temperature: 0,
      output: Output.object({ schema: jobMatchOutputSchema, name: "job_match" }),
    });
    if (!output.isJobDescription) {
      throw new Error(copy.notAJobDescription);
    }
    return output;
  } catch (error) {
    if (NoObjectGeneratedError.isInstance(error)) {
      throw new Error(copy.jobMatchFailed);
    }
    throw error;
  }
}
