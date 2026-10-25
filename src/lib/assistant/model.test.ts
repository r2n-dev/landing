import { describe, expect, it } from "vitest";
import { toModelJsonSchema } from "./model";

describe("toModelJsonSchema", () => {
  it("drops $schema, pattern and unsupported formats but keeps date formats", () => {
    const result = toModelJsonSchema({
      $schema: "x",
      type: "object",
      properties: {
        email: { type: "string", format: "email", pattern: "^a" },
        day: { type: "string", format: "date" },
      },
    });
    expect(result).toEqual({
      type: "object",
      properties: { email: { type: "string" }, day: { type: "string", format: "date" } },
    });
  });
});
