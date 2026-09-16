"use client";

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { IconSend } from "@tabler/icons-react";
import { askAboutMe } from "@/app/actions";
import type { ChatTurn } from "@/lib/assistant/chat";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ChatPanel() {
  const [turns, setTurns] = useState<ChatTurn[]>([]);
  const [text, setText] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "nearest" });
  }, [turns.length, pending]);

  async function submit(event?: FormEvent) {
    event?.preventDefault();
    const message = text.trim();
    if (!message || pending) {
      return;
    }
    setText("");
    setError(null);
    const nextTurns: ChatTurn[] = [...turns, { role: "user", text: message }];
    setTurns(nextTurns);
    setPending(true);
    const result = await askAboutMe(nextTurns);
    setPending(false);

    if (!result.ok) {
      setTurns(turns);
      setText(message);
      setError(result.error);
      return;
    }
    setTurns([...nextTurns, { role: "assistant", text: result.data }]);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void submit();
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-3 overflow-hidden">
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto" aria-live="polite">
        {turns.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Ask me anything about my experience, skills, or background — I&apos;ll answer from my
            actual resume.
          </p>
        ) : null}
        {turns.map((turn, index) => (
          <div
            key={index}
            className={
              turn.role === "user"
                ? "ms-8 self-end rounded-lg bg-primary-light px-3 py-2 text-sm whitespace-pre-wrap text-primary-light-foreground"
                : "me-8 self-start rounded-lg bg-muted px-3 py-2 text-sm whitespace-pre-wrap"
            }
          >
            <span className="sr-only">{turn.role === "user" ? "You: " : "Assistant: "}</span>
            {turn.text}
          </div>
        ))}
        {pending ? <p className="text-sm text-muted-foreground">Thinking…</p> : null}
        {error ? (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        ) : null}
        <div ref={endRef} />
      </div>

      <form onSubmit={submit} className="flex items-end gap-2">
        <Textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question…"
          rows={1}
          disabled={pending}
          aria-label="Your question"
          className="min-h-9 resize-none"
        />
        <Button type="submit" size="icon" disabled={pending || !text.trim()} aria-label="Send">
          <IconSend size={16} />
        </Button>
      </form>
    </div>
  );
}
