import { describe, expect, it, vi } from "vitest";

vi.mock("next/headers", () => ({ headers: vi.fn() }));
vi.mock("@/lib/supabase/server", () => ({ getSupabaseClient: vi.fn() }));

import { clientIpFromForwardedFor, MemoryRateLimiter } from "./rate-limit";

describe("clientIpFromForwardedFor", () => {
  it("returns unknown without a header", () => {
    expect(clientIpFromForwardedFor(null)).toBe("unknown");
    expect(clientIpFromForwardedFor("")).toBe("unknown");
  });

  it("ignores client-supplied entries on the left", () => {
    expect(clientIpFromForwardedFor("6.6.6.6, 203.0.113.9")).toBe("203.0.113.9");
  });

  it("skips additional trusted proxies", () => {
    expect(clientIpFromForwardedFor("6.6.6.6, 203.0.113.9, 10.0.0.2", 2)).toBe("203.0.113.9");
  });

  it("falls back to the first entry when the chain is shorter than the hop count", () => {
    expect(clientIpFromForwardedFor("203.0.113.9", 3)).toBe("203.0.113.9");
  });
});

describe("MemoryRateLimiter", () => {
  it("blocks after the limit and recovers when the window passes", () => {
    const limiter = new MemoryRateLimiter();
    expect(limiter.allow("a", 2, 1000, 0)).toBe(true);
    expect(limiter.allow("a", 2, 1000, 100)).toBe(true);
    expect(limiter.allow("a", 2, 1000, 200)).toBe(false);
    expect(limiter.allow("a", 2, 1000, 1101)).toBe(true);
  });

  it("tracks keys independently", () => {
    const limiter = new MemoryRateLimiter();
    expect(limiter.allow("a", 1, 1000, 0)).toBe(true);
    expect(limiter.allow("b", 1, 1000, 0)).toBe(true);
  });
});
