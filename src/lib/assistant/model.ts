import { anthropic } from "@ai-sdk/anthropic";
import { google } from "@ai-sdk/google";
import type { LanguageModel } from "ai";

/** `provider:model`, e.g. `google:gemini-3.8-flash` or `anthropic:claude-opus-5`. */
const DEFAULT_AI_MODEL = "google:gemini-3.8-flash";

export function getModel(): LanguageModel {
  const [provider, ...rest] = (process.env.AI_MODEL || DEFAULT_AI_MODEL).split(":");
  const modelId = rest.join(":");
  if (!modelId) {
    throw new Error(`Invalid AI_MODEL "${process.env.AI_MODEL}". Use provider:model, e.g. ${DEFAULT_AI_MODEL}.`);
  }
  switch (provider) {
    case "google":
      return google(modelId);
    case "anthropic":
      return anthropic(modelId);
    default:
      throw new Error(`Unsupported AI provider "${provider}". Use "google" or "anthropic".`);
  }
}

// Gemini accepts only a subset of JSON Schema. Send it a copy without the unsupported
// keywords and keep validating the response against the full Zod schema.
const MODEL_SUPPORTED_FORMATS = new Set(["date", "date-time", "time"]);

export function toModelJsonSchema(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(toModelJsonSchema);
  }
  if (!value || typeof value !== "object") {
    return value;
  }
  return Object.fromEntries(
    Object.entries(value)
      .filter(([key, item]) => key !== "$schema" && key !== "pattern" && !(key === "format" && !MODEL_SUPPORTED_FORMATS.has(String(item))))
      .map(([key, item]) => [key, toModelJsonSchema(item)]),
  );
}
