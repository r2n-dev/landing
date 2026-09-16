"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { IconPaperclip, IconX } from "@tabler/icons-react";
import { matchJob } from "@/app/actions";
import type { JobMatchResult as JobMatchResultData } from "@/lib/assistant/job-match";
import { MAX_JOB_DESCRIPTION_LENGTH, MAX_JOB_DESCRIPTION_PDF_BYTES } from "@/lib/assistant/job-match-constants";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { JobMatchResult } from "./JobMatchResult";

const MAX_PDF_MB = Math.round(MAX_JOB_DESCRIPTION_PDF_BYTES / (1024 * 1024));

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.slice(result.indexOf(",") + 1));
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export function JobMatchPanel() {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<JobMatchResultData | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0] ?? null;
    setError(null);
    if (!selected) {
      setFile(null);
      return;
    }
    if (selected.type !== "application/pdf") {
      setError("Please attach a PDF file.");
      event.target.value = "";
      return;
    }
    if (selected.size > MAX_JOB_DESCRIPTION_PDF_BYTES) {
      setError(`That PDF is too large (max ${MAX_PDF_MB} MB).`);
      event.target.value = "";
      return;
    }
    setFile(selected);
  }

  function clearFile() {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (pending || (!text.trim() && !file)) {
      return;
    }
    setPending(true);
    setError(null);
    setResult(null);

    const pdfBase64 = file ? await fileToBase64(file) : undefined;
    const response = await matchJob({ text: text.trim() || undefined, pdfBase64 });
    setPending(false);

    if (!response.ok) {
      setError(response.error);
      return;
    }
    setResult(response.data);
  }

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
      <p className="text-sm text-muted-foreground">
        Paste a job description, attach it as a PDF, or both — I&apos;ll compare it against my
        real experience and show you how well it fits.
      </p>

      <form onSubmit={submit} className="flex flex-col gap-3">
        <Textarea
          value={text}
          onChange={(event) => setText(event.target.value.slice(0, MAX_JOB_DESCRIPTION_LENGTH))}
          placeholder="Paste the job description here…"
          rows={6}
          disabled={pending}
          aria-label="Job description"
        />

        <div className="flex items-center gap-2">
          <Button type="button" variant="outline" size="sm" disabled={pending} onClick={() => fileInputRef.current?.click()}>
            <IconPaperclip size={16} data-icon="inline-start" />
            Attach PDF
          </Button>
          <input ref={fileInputRef} type="file" accept="application/pdf" onChange={handleFileChange} className="hidden" />
          {file ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs">
              {file.name}
              <button type="button" onClick={clearFile} aria-label="Remove attached PDF" className="text-muted-foreground hover:text-foreground">
                <IconX size={12} />
              </button>
            </span>
          ) : null}
        </div>

        <Button type="submit" disabled={pending || (!text.trim() && !file)}>
          {pending ? "Matching…" : "See my match"}
        </Button>
      </form>

      {error ? (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}

      {result ? <JobMatchResult result={result} /> : null}
    </div>
  );
}
