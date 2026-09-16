import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface ResumeVersionSummary {
  id: number;
  note: string | null;
  createdAt: string;
}

interface VersionHistoryProps {
  versions: ResumeVersionSummary[];
  disabled?: boolean;
  onRestore: (id: number) => void;
}

const dateFormat = new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" });

export function VersionHistory({ versions, disabled = false, onRestore }: VersionHistoryProps) {
  if (versions.length === 0) {
    return <p className="text-sm text-muted-foreground">No versions yet.</p>;
  }

  return (
    <ol className="flex flex-col divide-y divide-border">
      {versions.map((version, index) => (
        <li key={version.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
          <div className="flex min-w-0 flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Version {version.id}</span>
              {index === 0 ? <Badge variant="secondary">Live</Badge> : null}
            </div>
            <p className="text-sm text-muted-foreground">
              {version.note || "No note"} · <time dateTime={version.createdAt}>{dateFormat.format(new Date(version.createdAt))}</time>
            </p>
          </div>
          {index > 0 ? (
            <Button variant="outline" size="sm" disabled={disabled} onClick={() => onRestore(version.id)}>
              Restore
            </Button>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
