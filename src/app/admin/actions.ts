"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { getAdminUser, isAdminEmail } from "@/lib/admin/session";
import { assistantTurnSchema, MAX_ASSISTANT_TURNS, proposeResumeEdit, type AssistantResponse } from "@/lib/resume/assistant";
import { RESUME_CACHE_TAG } from "@/lib/resume/get-resume";
import { RESUME_SCHEMA_VERSION, resumeDataSchema, type ResumeData } from "@/lib/resume/schema";
import { createAuthClient } from "@/lib/supabase/auth";
import { siteOrigin } from "../seo";

export type ActionResult<T = undefined> = { ok: true; data: T } | { ok: false; error: string };

export interface MagicLinkState {
  status: "idle" | "sent" | "error";
  message?: string;
}

function formatZodError(error: z.ZodError): string {
  return error.issues
    .slice(0, 5)
    .map((issue) => `${issue.path.join(".") || "resume"}: ${issue.message}`)
    .join("\n");
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "Something went wrong.";
}

async function publishResume(data: ResumeData, note: string): Promise<ActionResult<{ id: number }>> {
  const user = await getAdminUser();
  if (!user) {
    return { ok: false, error: "Your session expired. Sign in again." };
  }

  const supabase = await createAuthClient();
  const { data: row, error } = await supabase
    .from("resume_versions")
    .insert({ data, schema_version: RESUME_SCHEMA_VERSION, note: note.trim() || null, created_by: user.id })
    .select("id")
    .single();
  if (error) {
    return { ok: false, error: `Could not save the version: ${error.message}` };
  }

  revalidateTag(RESUME_CACHE_TAG);
  revalidatePath("/admin");
  return { ok: true, data: { id: row.id } };
}

export async function sendMagicLink(_state: MagicLinkState, formData: FormData): Promise<MagicLinkState> {
  const email = String(formData.get("email") ?? "").trim();
  // Same response for any email so the admin address can't be probed.
  const sent: MagicLinkState = { status: "sent", message: "If that email can manage this site, a sign-in link is on its way." };
  if (!isAdminEmail(email)) {
    return sent;
  }

  const origin = (await headers()).get("origin") ?? siteOrigin;
  const supabase = await createAuthClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: `${origin}/auth/callback` },
  });
  if (error) {
    return { status: "error", message: error.message };
  }
  return sent;
}

export async function signOut() {
  const supabase = await createAuthClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function askAssistant(draft: unknown, turns: unknown): Promise<ActionResult<AssistantResponse>> {
  if (!(await getAdminUser())) {
    return { ok: false, error: "Your session expired. Sign in again." };
  }

  const parsedDraft = resumeDataSchema.safeParse(draft);
  if (!parsedDraft.success) {
    return { ok: false, error: `The draft is not valid:\n${formatZodError(parsedDraft.error)}` };
  }
  const parsedTurns = z.array(assistantTurnSchema).min(1).max(MAX_ASSISTANT_TURNS * 2).safeParse(turns);
  if (!parsedTurns.success) {
    return { ok: false, error: "The conversation is too long or empty. Clear it and try again." };
  }

  try {
    return { ok: true, data: await proposeResumeEdit(parsedDraft.data, parsedTurns.data) };
  } catch (error) {
    return { ok: false, error: errorMessage(error) };
  }
}

export async function saveResumeVersion(draft: unknown, note: string): Promise<ActionResult<{ id: number }>> {
  const parsed = resumeDataSchema.safeParse(draft);
  if (!parsed.success) {
    return { ok: false, error: `The draft is not valid:\n${formatZodError(parsed.error)}` };
  }
  return publishResume(parsed.data, note);
}

export async function restoreResumeVersion(versionId: number): Promise<ActionResult<{ id: number }>> {
  if (!(await getAdminUser())) {
    return { ok: false, error: "Your session expired. Sign in again." };
  }

  const supabase = await createAuthClient();
  const { data: version, error } = await supabase
    .from("resume_versions")
    .select("id, data, schema_version")
    .eq("id", versionId)
    .single();
  if (error) {
    return { ok: false, error: `Could not load version ${versionId}: ${error.message}` };
  }
  if (version.schema_version !== RESUME_SCHEMA_VERSION) {
    return { ok: false, error: `Version ${versionId} uses schema ${version.schema_version} and can't be restored.` };
  }
  const parsed = resumeDataSchema.safeParse(version.data);
  if (!parsed.success) {
    return { ok: false, error: `Version ${versionId} is not valid:\n${formatZodError(parsed.error)}` };
  }
  return publishResume(parsed.data, `Restore version ${versionId}`);
}
