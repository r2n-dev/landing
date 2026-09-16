import { diffLines } from "diff";

interface JsonDiffProps {
  before: unknown;
  after: unknown;
  /** Unchanged lines to keep around each change. */
  context?: number;
}

type DiffLine = { kind: "added" | "removed" | "same"; text: string };

const lineStyles: Record<DiffLine["kind"], string> = {
  added: "bg-primary-light text-primary-light-foreground",
  removed: "bg-destructive/10 text-destructive",
  same: "text-muted-foreground",
};

const linePrefix: Record<DiffLine["kind"], string> = { added: "+", removed: "-", same: " " };

function toLines(before: unknown, after: unknown): DiffLine[] {
  return diffLines(JSON.stringify(before, null, 2), JSON.stringify(after, null, 2)).flatMap((part) => {
    const kind: DiffLine["kind"] = part.added ? "added" : part.removed ? "removed" : "same";
    return part.value.replace(/\n$/, "").split("\n").map((text) => ({ kind, text }));
  });
}

/** Line diff of two JSON values, collapsing long unchanged stretches. */
export function JsonDiff({ before, after, context = 3 }: JsonDiffProps) {
  const lines = toLines(before, after);
  const changed = lines.map((line) => line.kind !== "same");
  if (!changed.includes(true)) {
    return <p className="text-sm text-muted-foreground">No changes yet.</p>;
  }

  const visible = lines.map((_, index) =>
    changed.slice(Math.max(0, index - context), index + context + 1).includes(true),
  );

  return (
    <div className="max-h-[32rem] overflow-auto rounded-md border border-border">
      <pre className="min-w-fit py-1 font-mono text-xs leading-5">
        {lines.map((line, index) => {
          if (!visible[index]) {
            return visible[index - 1] ? (
              <div key={index} className="px-3 text-muted-foreground select-none">
                ⋯
              </div>
            ) : null;
          }
          return (
            <div key={index} className={`px-3 ${lineStyles[line.kind]}`}>
              <span aria-hidden className="me-2 select-none">
                {linePrefix[line.kind]}
              </span>
              <span className="sr-only">{line.kind === "same" ? "" : `${line.kind}: `}</span>
              {line.text}
            </div>
          );
        })}
      </pre>
    </div>
  );
}
