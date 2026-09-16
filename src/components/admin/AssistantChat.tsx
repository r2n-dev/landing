"use client";

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { IconSend } from "@tabler/icons-react";
import type { AssistantTurn } from "@/lib/resume/assistant";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AssistantChatProps {
  turns: AssistantTurn[];
  pending: boolean;
  onSend: (text: string) => Promise<boolean>;
}

export function AssistantChat({ turns, pending, onSend }: AssistantChatProps) {
  const [text, setText] = useState("");
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
    if (!(await onSend(message))) {
      setText(message);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      void submit();
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex max-h-[28rem] min-h-40 flex-col gap-3 overflow-y-auto" aria-live="polite">
        {turns.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Describe a change, e.g. &ldquo;Add the AWS Solutions Architect certification issued on 2026-10-01&rdquo; or
            &ldquo;Shorten my Proxet summary&rdquo;. The assistant updates the draft; nothing is published until you save.
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
        <div ref={endRef} />
      </div>

      <form onSubmit={submit} className="flex flex-col gap-2">
        <Label htmlFor="assistant-message">Message</Label>
        <Textarea
          id="assistant-message"
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What should change?"
          disabled={pending}
        />
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-muted-foreground">⌘/Ctrl + Enter to send</span>
          <Button type="submit" disabled={pending || !text.trim()}>
            <IconSend size={16} data-icon="inline-start" />
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
