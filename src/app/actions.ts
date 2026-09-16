"use server";

import { z } from "zod";
import { askAboutMe as askAboutMeModel, chatTurnSchema, MAX_CHAT_TURNS, type ChatTurn } from "@/lib/assistant/chat";
import { matchJob as matchJobModel, type JobMatchInput, type JobMatchResult } from "@/lib/assistant/job-match";
import { MAX_JOB_DESCRIPTION_LENGTH } from "@/lib/assistant/job-match-constants";
import { checkAndRecordUsage } from "@/lib/assistant/rate-limit";
import { getResume } from "@/lib/resume/get-resume";

export type ActionResult<T = undefined> = { ok: true; data: T } | { ok: false; error: string };

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "Something went wrong.";
}

const chatTurnsInputSchema = z.array(chatTurnSchema).min(1).max(MAX_CHAT_TURNS * 2);

/** Answers a visitor's question about the resume owner. Public, rate-limited. */
export async function askAboutMe(turns: unknown): Promise<ActionResult<string>> {
  const parsedTurns = chatTurnsInputSchema.safeParse(turns);
  if (!parsedTurns.success) {
    return { ok: false, error: "The conversation is too long or empty. Clear it and try again." };
  }

  if (!(await checkAndRecordUsage("chat"))) {
    return { ok: false, error: "You've reached the hourly limit for questions. Please try again later." };
  }

  try {
    const resume = await getResume();
    const reply = await askAboutMeModel(resume, parsedTurns.data as ChatTurn[]);
    return { ok: true, data: reply };
  } catch (error) {
    return { ok: false, error: errorMessage(error) };
  }
}

const jobMatchInputSchema = z
  .strictObject({
    text: z.string().max(MAX_JOB_DESCRIPTION_LENGTH).optional(),
    pdfBase64: z.string().optional(),
  })
  .refine((value) => Boolean(value.text?.trim() || value.pdfBase64), {
    message: "Paste a job description or attach a PDF.",
  });

/** Scores a job description (text and/or PDF) against the resume. Public, rate-limited. */
export async function matchJob(input: unknown): Promise<ActionResult<JobMatchResult>> {
  const parsedInput = jobMatchInputSchema.safeParse(input);
  if (!parsedInput.success) {
    return { ok: false, error: parsedInput.error.issues[0]?.message ?? "Invalid job description." };
  }

  if (!(await checkAndRecordUsage("job_match"))) {
    return { ok: false, error: "You've reached the hourly limit for job matches. Please try again later." };
  }

  try {
    const resume = await getResume();
    const result = await matchJobModel(resume, parsedInput.data as JobMatchInput);
    return { ok: true, data: result };
  } catch (error) {
    return { ok: false, error: errorMessage(error) };
  }
}
