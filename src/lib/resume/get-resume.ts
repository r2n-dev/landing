import { unstable_cache } from "next/cache";
import { andresProfileData, type CandidateProfile } from "@/components/landing/profile-data";
import { getSupabaseClient } from "@/lib/supabase/server";
import { RESUME_SCHEMA_VERSION, resumeDataSchema } from "./schema";

export const RESUME_CACHE_TAG = "resume";

const fetchLatestResume = unstable_cache(
  async (): Promise<CandidateProfile> => {
    const { data, error } = await getSupabaseClient()
      .from("resume_versions")
      .select("id, data, schema_version")
      .order("id", { ascending: false })
      .limit(1)
      .single();

    if (error) {
      throw new Error(`Could not load the latest resume version: ${error.message}`);
    }
    if (data.schema_version !== RESUME_SCHEMA_VERSION) {
      throw new Error(
        `Resume version ${data.id} uses schema ${data.schema_version}, expected ${RESUME_SCHEMA_VERSION}`,
      );
    }
    return resumeDataSchema.parse(data.data);
  },
  ["resume-latest"],
  // Refreshed on demand through revalidateTag; the hourly revalidation is a safety net.
  { tags: [RESUME_CACHE_TAG], revalidate: 3600 },
);

/**
 * Latest resume version from Supabase. Falls back to the bundled profile-data.ts when
 * Supabase is unreachable, not configured, or returns data that fails validation.
 * Failures are not cached, so the next request retries Supabase.
 */
export async function getResume(): Promise<CandidateProfile> {
  try {
    return await fetchLatestResume();
  } catch (error) {
    console.warn(
      "[resume] Falling back to profile-data.ts:",
      error instanceof Error ? error.message : error,
    );
    return andresProfileData;
  }
}
