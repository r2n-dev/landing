import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";
import { getSupabaseEnv } from "./env";

let client: SupabaseClient<Database> | undefined;

/**
 * Server-side Supabase client for reading public resume content.
 * Reads env vars at call time so the Docker image can be configured at runtime.
 */
export function getSupabaseClient(): SupabaseClient<Database> {
  if (client) {
    return client;
  }

  const { url, key } = getSupabaseEnv();
  client = createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}
