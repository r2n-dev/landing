"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { landingLocales, type LandingLocale } from "@/components/landing/i18n";

interface LanguageSelectorProps {
  value: LandingLocale;
  ariaLabel: string;
  onChange: (locale: LandingLocale) => void;
}

const options: { value: LandingLocale; label: string }[] = [
  { value: "en", label: "🇺🇸 EN" },
  { value: "es", label: "🇨🇴 ES" },
];

export function LanguageSelector({ value, ariaLabel, onChange }: LanguageSelectorProps) {
  return (
    <ToggleGroup
      type="single"
      variant="segmented"
      size="segmented"
      aria-label={ariaLabel}
      value={value}
      onValueChange={(nextLocale) => {
        // Radix allows deselecting the active item; keep one locale selected.
        if (landingLocales.includes(nextLocale as LandingLocale)) {
          onChange(nextLocale as LandingLocale);
        }
      }}
    >
      {options.map((option) => (
        <ToggleGroupItem key={option.value} value={option.value} className="flex-1">
          {option.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
