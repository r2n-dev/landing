import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { RESUME_CACHE_TAG } from "@/lib/resume/get-resume";

function isValidSecret(provided: string | null): boolean {
  const expected = process.env.RESUME_REVALIDATE_SECRET;
  if (!expected || !provided) {
    return false;
  }
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Refreshes every page built from the resume. Called by the Supabase webhook on new versions. */
export async function POST(request: Request) {
  if (!isValidSecret(request.headers.get("x-revalidate-secret"))) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  revalidateTag(RESUME_CACHE_TAG);
  return Response.json({ revalidated: true });
}
