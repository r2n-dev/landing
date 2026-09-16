import { generateText, jsonSchema, NoObjectGeneratedError, Output, type FilePart, type ModelMessage, type TextPart } from "ai";
import type { JSONSchema7 } from "json-schema";
import { z } from "zod";
import { getModel, toModelJsonSchema } from "@/lib/assistant/model";
import { MAX_JOB_DESCRIPTION_PDF_BYTES } from "@/lib/assistant/job-match-constants";
import type { ResumeData } from "@/lib/resume/schema";

const MAX_JOB_MATCH_OUTPUT_TOKENS = 1500;

export interface JobMatchInput {
  /** Pasted job description text. */
  text?: string;
  /** Base64-encoded PDF bytes (no data: URL prefix). */
  pdfBase64?: string;
}

const jobMatchCategorySchema = z.strictObject({
  name: z.string().describe("Short label for this dimension, e.g. 'Technical skills', 'Seniority & scope', 'Domain experience'."),
  score: z.number().min(0).max(100),
  summary: z.string().describe("1-3 sentences: concrete strengths first, then any gap named plainly but tactfully."),
});

const jobMatchResultSchema = z.strictObject({
  overallScore: z.number().min(0).max(100),
  headline: z.string().describe("One encouraging but honest sentence summarizing the fit."),
  categories: z.array(jobMatchCategorySchema).min(3).max(6),
  gaps: z.array(z.string()).max(3).describe("Real, material gaps only -- empty array if none. Never invented."),
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
- Pick 3 to 6 categories that are actually relevant to this job description (e.g. technical
  skills, seniority and scope, domain experience, soft skills, language requirements) -- don't
  force irrelevant categories in.
- If the input isn't really a job description, or is mostly unrelated to the candidate's field,
  say so plainly in "headline" and keep scores low rather than fabricating relevance.`;

function buildContent(text: string | undefined, pdfBytes: Uint8Array | undefined): Array<TextPart | FilePart> {
  const parts: Array<TextPart | FilePart> = [{ type: "text", text: "Evaluate the job description below (text and/or attached PDF) against the candidate's resume." }];
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
  model = getModel(),
): Promise<JobMatchResult> {
  const text = input.text?.trim() || undefined;
  const pdfBytes = input.pdfBase64 ? new Uint8Array(Buffer.from(input.pdfBase64, "base64")) : undefined;
  if (!text && !pdfBytes) {
    throw new Error("Paste a job description or attach a PDF.");
  }
  if (pdfBytes && pdfBytes.byteLength > MAX_JOB_DESCRIPTION_PDF_BYTES) {
    throw new Error("That PDF is too large (max 4 MB).");
  }

  const messages: ModelMessage[] = [
    {
      role: "user",
      content: buildContent(text, pdfBytes),
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
      output: Output.object({ schema: jobMatchOutputSchema, name: "job_match" }),
    });
    return output;
  } catch (error) {
    if (NoObjectGeneratedError.isInstance(error)) {
      throw new Error("Could not score that job description. Try pasting it as text instead.");
    }
    throw error;
  }
}
