"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { askAssistant, restoreResumeVersion, saveResumeVersion } from "@/app/admin/actions";
import type { AssistantTurn } from "@/lib/resume/assistant";
import { resumeDataSchema, type ResumeData } from "@/lib/resume/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { AssistantChat } from "./AssistantChat";
import { JsonDiff } from "./JsonDiff";
import { VersionHistory, type ResumeVersionSummary } from "./VersionHistory";

interface ResumeAdminProps {
  published: ResumeData;
  /** Id of the live version; null when the table is empty and the fallback data is shown. */
  publishedVersionId: number | null;
  versions: ResumeVersionSummary[];
}

type Feedback = { tone: "success" | "error"; text: string } | null;

const toJson = (value: unknown) => JSON.stringify(value, null, 2);

export function ResumeAdmin({ published, publishedVersionId, versions }: ResumeAdminProps) {
  const router = useRouter();
  const [draft, setDraft] = useState<ResumeData>(published);
  const [turns, setTurns] = useState<AssistantTurn[]>([]);
  const [note, setNote] = useState("");
  const [view, setView] = useState<"changes" | "json">("changes");
  const [jsonText, setJsonText] = useState("");
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [assistantPending, setAssistantPending] = useState(false);
  const [publishing, startPublishing] = useTransition();
  const [syncedVersionId, setSyncedVersionId] = useState(publishedVersionId);

  // A new live version (publish or restore) becomes the starting point of the draft.
  if (publishedVersionId !== syncedVersionId) {
    setSyncedVersionId(publishedVersionId);
    setDraft(published);
  }

  const hasChanges = toJson(draft) !== toJson(published);
  const busy = assistantPending || publishing;

  async function sendMessage(text: string): Promise<boolean> {
    const nextTurns: AssistantTurn[] = [...turns, { role: "user", text }];
    setTurns(nextTurns);
    setFeedback(null);
    setAssistantPending(true);
    const result = await askAssistant(draft, nextTurns);
    setAssistantPending(false);

    if (!result.ok) {
      setTurns(turns);
      setFeedback({ tone: "error", text: result.error });
      return false;
    }
    setTurns([...nextTurns, { role: "assistant", text: result.data.reply }]);
    setDraft(result.data.resume);
    if (view === "json") {
      setJsonText(toJson(result.data.resume));
    }
    if (result.data.note) {
      setNote(result.data.note);
    }
    return true;
  }

  function changeView(next: string) {
    if (next !== "changes" && next !== "json") {
      return;
    }
    if (next === "json") {
      setJsonText(toJson(draft));
      setJsonError(null);
    }
    setView(next);
  }

  function applyJson() {
    try {
      const parsed = resumeDataSchema.safeParse(JSON.parse(jsonText));
      if (!parsed.success) {
        setJsonError(parsed.error.issues.slice(0, 5).map((issue) => `${issue.path.join(".")}: ${issue.message}`).join("\n"));
        return;
      }
      setDraft(parsed.data);
      setJsonError(null);
      setView("changes");
    } catch (error) {
      setJsonError(error instanceof Error ? error.message : "Invalid JSON");
    }
  }

  function discard() {
    setDraft(published);
    setTurns([]);
    setNote("");
    setJsonError(null);
    setFeedback(null);
    setView("changes");
  }

  function publish() {
    startPublishing(async () => {
      const result = await saveResumeVersion(draft, note);
      if (!result.ok) {
        setFeedback({ tone: "error", text: result.error });
        return;
      }
      setNote("");
      setTurns([]);
      setFeedback({ tone: "success", text: `Published version ${result.data.id}. The site updates within a few seconds.` });
      router.refresh();
    });
  }

  function restore(id: number) {
    if (hasChanges && !window.confirm("Restoring discards your unsaved draft. Continue?")) {
      return;
    }
    if (!window.confirm(`Publish a copy of version ${id} as the live resume?`)) {
      return;
    }
    startPublishing(async () => {
      const result = await restoreResumeVersion(id);
      if (!result.ok) {
        setFeedback({ tone: "error", text: result.error });
        return;
      }
      setTurns([]);
      setNote("");
      setFeedback({ tone: "success", text: `Restored version ${id} as version ${result.data.id}.` });
      router.refresh();
    });
  }

  return (
    <div className="flex flex-col gap-6">
      {feedback ? (
        <p role={feedback.tone === "error" ? "alert" : "status"} className={feedback.tone === "error" ? "rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm whitespace-pre-wrap text-destructive" : "rounded-md border border-border bg-primary-light px-3 py-2 text-sm text-primary-light-foreground"}>
          {feedback.text}
        </p>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Assistant</CardTitle>
            <CardDescription>Ask for changes in English or Spanish.</CardDescription>
          </CardHeader>
          <CardContent className="mt-4">
            <AssistantChat turns={turns} pending={assistantPending} onSend={sendMessage} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Draft</CardTitle>
            <CardDescription>Review the changes against the live resume before publishing.</CardDescription>
          </CardHeader>
          <CardContent className="mt-4">
            <div className="flex flex-col gap-4">
              <ToggleGroup type="single" variant="segmented" value={view} onValueChange={changeView} aria-label="Draft view">
                <ToggleGroupItem value="changes" variant="segmented">Changes</ToggleGroupItem>
                <ToggleGroupItem value="json" variant="segmented">Edit JSON</ToggleGroupItem>
              </ToggleGroup>

              {view === "changes" ? (
                <JsonDiff before={published} after={draft} />
              ) : (
                <div className="flex flex-col gap-2">
                  <Label htmlFor="resume-json">Resume JSON</Label>
                  <Textarea
                    id="resume-json"
                    variant="code"
                    value={jsonText}
                    onChange={(event) => setJsonText(event.target.value)}
                    spellCheck={false}
                    aria-invalid={jsonError ? true : undefined}
                  />
                  {jsonError ? <p role="alert" className="text-sm whitespace-pre-wrap text-destructive">{jsonError}</p> : null}
                  <Button variant="secondary" onClick={applyJson} className="self-start">
                    Apply to draft
                  </Button>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <Label htmlFor="version-note">Version note</Label>
                <Input id="version-note" value={note} onChange={(event) => setNote(event.target.value)} placeholder="What changed?" maxLength={200} />
              </div>

              <div className="flex flex-wrap justify-end gap-2">
                <Button variant="outline" onClick={discard} disabled={busy || (!hasChanges && turns.length === 0)}>
                  Discard
                </Button>
                <Button onClick={publish} disabled={busy || !hasChanges}>
                  {publishing ? "Publishing…" : "Publish"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>History</CardTitle>
          <CardDescription>Every publish is a new version. Restoring publishes a copy of an older one.</CardDescription>
        </CardHeader>
        <CardContent className="mt-2">
          <VersionHistory versions={versions} disabled={busy} onRestore={restore} />
        </CardContent>
      </Card>
    </div>
  );
}
