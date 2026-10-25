import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { log } from "@/lib/log";
import { getSupabaseClient } from "@/lib/supabase/server";

export type PublicAiFeature = "chat" | "job_match";

const LIMITS: Record<PublicAiFeature, { limit: number; window: string; windowMs: number }> = {
  chat: { limit: 20, window: "1 hour", windowMs: 60 * 60 * 1000 },
  job_match: { limit: 5, window: "1 hour", windowMs: 60 * 60 * 1000 },
};

/** Total calls per feature per day across all visitors; caps spend if per-IP limits are bypassed. */
const GLOBAL_DAILY_LIMITS: Record<PublicAiFeature, number> = {
  chat: 500,
  job_match: 100,
};
const GLOBAL_KEY = "global";

/**
 * Picks the client IP from `x-forwarded-for`. Every trusted proxy appends the address it saw,
 * so counting `trustedHops` from the right skips whatever a client put at the start of the header.
 */
export function clientIpFromForwardedFor(forwardedFor: string | null, trustedHops = 1): string {
  const chain = (forwardedFor ?? "").split(",").map((part) => part.trim()).filter(Boolean);
  if (chain.length === 0) {
    return "unknown";
  }
  return chain[Math.max(0, chain.length - Math.max(1, trustedHops))];
}

/** Sliding-window counter kept in process memory; used when the database is unreachable. */
export class MemoryRateLimiter {
  private readonly hits = new Map<string, number[]>();

  allow(key: string, limit: number, windowMs: number, now = Date.now()): boolean {
    const recent = (this.hits.get(key) ?? []).filter((time) => time > now - windowMs);
    if (recent.length >= limit) {
      this.hits.set(key, recent);
      return false;
    }
    recent.push(now);
    this.hits.set(key, recent);
    if (this.hits.size > 10_000) {
      for (const [entryKey, times] of this.hits) {
        if (times.every((time) => time <= now - windowMs)) {
          this.hits.delete(entryKey);
        }
      }
    }
    return true;
  }
}

const fallbackLimiter = new MemoryRateLimiter();

async function hashedVisitorIp(): Promise<string> {
  const hops = Number(process.env.TRUSTED_PROXY_HOPS ?? 1);
  const ip = clientIpFromForwardedFor((await headers()).get("x-forwarded-for"), Number.isFinite(hops) ? hops : 1);
  return createHash("sha256").update(ip).digest("hex");
}

async function recordInDatabase(ipHash: string, feature: PublicAiFeature, limit: number, window: string) {
  const { data, error } = await getSupabaseClient().rpc("check_and_record_usage", {
    p_ip_hash: ipHash,
    p_feature: feature,
    p_limit: limit,
    p_window: window,
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

/**
 * Per-IP plus global daily rate limit for a public AI feature. Returns true if the call is allowed
 * (and is recorded), false if the visitor or the site is over the limit. If the database fails it
 * falls back to a per-process limit instead of letting calls through unmetered.
 * Not a security boundary -- the IP comes from a proxy header -- just cost containment.
 */
export async function checkAndRecordUsage(feature: PublicAiFeature): Promise<boolean> {
  const { limit, window, windowMs } = LIMITS[feature];
  const globalLimit = GLOBAL_DAILY_LIMITS[feature];
  const ipHash = await hashedVisitorIp();

  try {
    if (!(await recordInDatabase(ipHash, feature, limit, window))) {
      return false;
    }
    return await recordInDatabase(GLOBAL_KEY, feature, globalLimit, "1 day");
  } catch (error) {
    log("warn", "rate-limit", "check_and_record_usage failed, using the in-memory limiter", { feature, error });
    return (
      fallbackLimiter.allow(`${feature}:${ipHash}`, limit, windowMs) &&
      fallbackLimiter.allow(`${feature}:${GLOBAL_KEY}`, globalLimit, 24 * 60 * 60 * 1000)
    );
  }
}
