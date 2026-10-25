import { describe, expect, it } from "vitest";
import { defaultA11ySettings, parseA11ySettings } from "./a11y-settings";

describe("parseA11ySettings", () => {
  it("returns defaults for empty, malformed or non-object input", () => {
    expect(parseA11ySettings(null)).toEqual(defaultA11ySettings);
    expect(parseA11ySettings("{nope")).toEqual(defaultA11ySettings);
    expect(parseA11ySettings("null")).toEqual(defaultA11ySettings);
  });

  it("keeps valid values and drops invalid ones", () => {
    const parsed = parseA11ySettings(JSON.stringify({ highContrast: true, textSize: 130, readableFont: "yes", wideSpacing: 1 }));
    expect(parsed).toEqual({ ...defaultA11ySettings, highContrast: true, textSize: 130 });
  });

  it("rejects text sizes outside the supported steps", () => {
    expect(parseA11ySettings(JSON.stringify({ textSize: 200 })).textSize).toBe(100);
  });
});
