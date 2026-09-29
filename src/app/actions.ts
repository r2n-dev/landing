"use server";

import { z } from "zod";
import { askAboutMe as askAboutMeModel, chatTurnSchema, MAX_CHAT_TURNS, type ChatTurn } from "@/lib/assistant/chat";
import { matchJob as matchJobModel, type JobMatchInput, type JobMatchResult } from "@/lib/assistant/job-match";
import { MAX_JOB_DESCRIPTION_LENGTH } from "@/lib/assistant/job-match-constants";
import { assistantServerCopy, isLocale } from "@/lib/assistant/copy";
import type { LandingLocale } from "@/components/landing/i18n";
import { checkAndRecordUsage } from "@/lib/assistant/rate-limit";
import { getResume } from "@/lib/resume/get-resume";

export type ActionResult<T = undefined> = { ok: true; data: T } | { ok: false; error: string };

function errorMessage(error: unknown, locale: LandingLocale): string {
  return error instanceof Error ? error.message : assistantServerCopy[locale].genericError;
}

function toLocale(value: unknown): LandingLocale {
  return isLocale(value) ? value : "en";
}

const chatTurnsInputSchema = z.array(chatTurnSchema).min(1).max(MAX_CHAT_TURNS * 2);

/** Answers a visitor's question about the resume owner. Public, rate-limited. */
export async function askAboutMe(turns: unknown, localeInput?: unknown): Promise<ActionResult<string>> {
  const locale = toLocale(localeInput);
  const copy = assistantServerCopy[locale];
  const parsedTurns = chatTurnsInputSchema.safeParse(turns);
  if (!parsedTurns.success) {
    return { ok: false, error: copy.conversationInvalid };
  }

  if (!(await checkAndRecordUsage("chat"))) {
    return { ok: false, error: copy.chatLimit };
  }

  try {
    const resume = await getResume();
    const reply = await askAboutMeModel(resume, parsedTurns.data as ChatTurn[], locale);
    return { ok: true, data: reply };
  } catch (error) {
    return { ok: false, error: errorMessage(error, locale) };
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
export async function matchJob(input: unknown, localeInput?: unknown): Promise<ActionResult<JobMatchResult>> {
  const locale = toLocale(localeInput);
  const copy = assistantServerCopy[locale];
  const parsedInput = jobMatchInputSchema.safeParse(input);
  if (!parsedInput.success) {
    return { ok: false, error: copy.jobMatchInvalid };
  }

  if (!(await checkAndRecordUsage("job_match"))) {
    return { ok: false, error: copy.jobMatchLimit };
  }

  try {
    const resume = await getResume();
    const result = await matchJobModel(resume, parsedInput.data as JobMatchInput, locale);
    return { ok: true, data: result };
  } catch (error) {
    return { ok: false, error: errorMessage(error, locale) };
  }
}
