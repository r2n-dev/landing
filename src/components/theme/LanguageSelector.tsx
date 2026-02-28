"use client";

import { SegmentedControl } from "@mantine/core";
import { landingLocales, type LandingLocale } from "@/components/landing/i18n";

interface LanguageSelectorProps {
  value: LandingLocale;
  ariaLabel: string;
  onChange: (locale: LandingLocale) => void;
}

export function LanguageSelector({ value, ariaLabel, onChange }: LanguageSelectorProps) {
  return (
    <SegmentedControl
      size="sm"
      aria-label={ariaLabel}
      value={value}
      onChange={(nextLocale) => {
        if (landingLocales.includes(nextLocale as LandingLocale)) {
          onChange(nextLocale as LandingLocale);
        }
      }}
      data={[
        { value: "en", label: "🇺🇸 EN" },
        { value: "es", label: "🇨🇴 ES" },
      ]}
    />
  );
}
