import { describe, expect, it } from "vitest";
import { andresProfileData } from "@/components/landing/profile-data";
import { resumeDataSchema } from "./schema";

describe("resumeDataSchema", () => {
  it("accepts the bundled profile data", () => {
    expect(resumeDataSchema.safeParse(andresProfileData).success).toBe(true);
  });

  it("rejects unknown top-level keys", () => {
    expect(resumeDataSchema.safeParse({ ...andresProfileData, extra: true }).success).toBe(false);
  });

  it("rejects a localized field missing a language", () => {
    const broken = { ...andresProfileData, role: { en: "Engineer" } };
    expect(resumeDataSchema.safeParse(broken).success).toBe(false);
  });
});
