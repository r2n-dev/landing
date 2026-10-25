type Level = "info" | "warn" | "error";

function serialize(error: unknown): unknown {
  return error instanceof Error ? { name: error.name, message: error.message } : error;
}

/** One JSON line per event so the host's log collector can filter by scope and level. */
export function log(level: Level, scope: string, message: string, context: Record<string, unknown> = {}) {
  const line = JSON.stringify({
    level,
    scope,
    message,
    ...context,
    ...("error" in context ? { error: serialize(context.error) } : {}),
    time: new Date().toISOString(),
  });
  (level === "info" ? console.log : console[level])(line);
}
