"use client";

import { useState } from "react";
import { IconInfoCircle, IconMessageChatbot } from "@tabler/icons-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { LandingLocale } from "@/components/landing/i18n";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { assistantCopy } from "./assistant-copy";
import { ChatPanel } from "./ChatPanel";
import { JobMatchPanel } from "./JobMatchPanel";

type Mode = "chat" | "job-match";

interface FloatingLauncherProps {
  locale: LandingLocale;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function FloatingLauncher({ locale, open, onOpenChange }: FloatingLauncherProps) {
  const copy = assistantCopy[locale];
  const [mode, setMode] = useState<Mode>("chat");

  function changeMode(next: string) {
    if (next === "chat" || next === "job-match") {
      setMode(next);
    }
  }

  return (
    <Sheet modal={false} open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label={copy.launcherLabel}
          className="fixed right-5 bottom-5 z-100 flex size-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <IconMessageChatbot size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="floating" onInteractOutside={(event) => event.preventDefault()}>
        <SheetHeader>
          <div className="flex items-center gap-2">
            <SheetTitle>{copy.title}</SheetTitle>
            <Badge variant="secondary" size="sm">
              {copy.betaBadge}
            </Badge>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    aria-label={copy.betaTooltip}
                    className="flex size-5 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <IconInfoCircle size={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="whitespace-normal">{copy.betaTooltip}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <ToggleGroup type="single" variant="segmented" value={mode} onValueChange={changeMode} aria-label={copy.modeLabel} className="mt-1">
            <ToggleGroupItem value="chat" variant="segmented">
              {copy.chatTab}
            </ToggleGroupItem>
            <ToggleGroupItem value="job-match" variant="segmented">
              {copy.jobMatchTab}
            </ToggleGroupItem>
          </ToggleGroup>
        </SheetHeader>

        <div className="flex flex-1 flex-col overflow-hidden px-4 pb-4">
          {mode === "chat" ? <ChatPanel locale={locale} /> : <JobMatchPanel locale={locale} />}
        </div>
      </SheetContent>
    </Sheet>
  );
}
