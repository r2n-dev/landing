"use client";

import { IconAccessible } from "@tabler/icons-react";
import type { LandingLocale } from "@/components/landing/i18n";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { a11yCopy } from "./a11y-copy";
import { textSizes, type A11ySettings, type TextSize } from "./a11y-settings";
import { useA11ySettings } from "./useA11ySettings";

interface A11yPanelProps {
  locale: LandingLocale;
}

type FlagKey = Exclude<keyof A11ySettings, "textSize">;

export function A11yPanel({ locale }: A11yPanelProps) {
  const copy = a11yCopy[locale];
  const { settings, update, reset } = useA11ySettings();

  const flags: { key: FlagKey; label: string; hint?: string }[] = [
    { key: "highContrast", label: copy.highContrast },
    { key: "underlineLinks", label: copy.underlineLinks },
    { key: "wideSpacing", label: copy.wideSpacing },
    { key: "readableFont", label: copy.readableFont },
    { key: "reduceMotion", label: copy.reduceMotion, hint: copy.reduceMotionHint },
  ];

  function changeTextSize(value: string) {
    const next = textSizes.find((size) => String(size) === value);
    if (next) {
      update({ textSize: next satisfies TextSize });
    }
  }

  return (
    <Sheet>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label={copy.open}>
                <IconAccessible size={18} aria-hidden />
              </Button>
            </SheetTrigger>
          </TooltipTrigger>
          <TooltipContent>{copy.open}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{copy.title}</SheetTitle>
          <SheetDescription>{copy.description}</SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-5 overflow-y-auto px-4 pb-4">
          <div className="flex flex-col gap-2">
            <Label id="a11y-text-size">{copy.textSize}</Label>
            <ToggleGroup
              type="single"
              variant="segmented"
              value={String(settings.textSize)}
              onValueChange={changeTextSize}
              aria-labelledby="a11y-text-size"
            >
              {textSizes.map((size) => (
                <ToggleGroupItem key={size} value={String(size)} variant="segmented">
                  {copy.textSizeOption(size)}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {flags.map(({ key, label, hint }) => (
            <div key={key} className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor={`a11y-${key}`}>{label}</Label>
                {hint ? (
                  <p id={`a11y-${key}-hint`} className="text-xs text-muted-foreground">
                    {hint}
                  </p>
                ) : null}
              </div>
              <Switch
                id={`a11y-${key}`}
                checked={settings[key]}
                onCheckedChange={(checked) => update({ [key]: checked } as Partial<A11ySettings>)}
                aria-describedby={hint ? `a11y-${key}-hint` : undefined}
              />
            </div>
          ))}

          <Button variant="outline" onClick={reset} className="mt-auto self-start">
            {copy.reset}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
