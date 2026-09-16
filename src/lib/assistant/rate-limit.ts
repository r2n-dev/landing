import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { getSupabaseClient } from "@/lib/supabase/server";

export type PublicAiFeature = "chat" | "job_match";

const LIMITS: Record<PublicAiFeature, { limit: number; window: string }> = {
  chat: { limit: 20, window: "1 hour" },
  job_match: { limit: 5, window: "1 hour" },
};

async function hashedVisitorIp(): Promise<string> {
  const forwardedFor = (await headers()).get("x-forwarded-for") ?? "unknown";
  const ip = forwardedFor.split(",")[0].trim();
  return createHash("sha256").update(ip).digest("hex");
}

/**
 * Best-effort per-IP rate limit for a public AI feature. Returns true if the call is allowed
 * (and is recorded), false if the visitor is over the limit for the current window.
 * Not a security boundary -- the IP comes from a spoofable header -- just cost containment.
 */
export async function checkAndRecordUsage(feature: PublicAiFeature): Promise<boolean> {
  const { limit, window } = LIMITS[feature];
  const ipHash = await hashedVisitorIp();

  const { data, error } = await getSupabaseClient().rpc("check_and_record_usage", {
    p_ip_hash: ipHash,
    p_feature: feature,
    p_limit: limit,
    p_window: window,
  });

  if (error) {
    console.warn("[rate-limit] check_and_record_usage failed, allowing the request:", error.message);
    return true;
  }
  return data;
}
