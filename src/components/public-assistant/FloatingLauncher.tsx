"use client";

import { useState } from "react";
import { IconMessageChatbot } from "@tabler/icons-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ChatPanel } from "./ChatPanel";
import { JobMatchPanel } from "./JobMatchPanel";

type Mode = "chat" | "job-match";

export function FloatingLauncher() {
  const [mode, setMode] = useState<Mode>("chat");

  function changeMode(next: string) {
    if (next === "chat" || next === "job-match") {
      setMode(next);
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Ask about me"
          className="fixed right-5 bottom-5 z-100 flex size-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <IconMessageChatbot size={24} />
        </button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Ask about me</SheetTitle>
          <ToggleGroup type="single" variant="segmented" value={mode} onValueChange={changeMode} aria-label="Assistant mode" className="mt-1">
            <ToggleGroupItem value="chat" variant="segmented">
              Chat
            </ToggleGroupItem>
            <ToggleGroupItem value="job-match" variant="segmented">
              Job match
            </ToggleGroupItem>
          </ToggleGroup>
        </SheetHeader>

        <div className="flex flex-1 flex-col overflow-hidden px-4 pb-4">
          {mode === "chat" ? <ChatPanel /> : <JobMatchPanel />}
        </div>
      </SheetContent>
    </Sheet>
  );
}
