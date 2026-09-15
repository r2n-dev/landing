import type { LandingLocale } from "@/components/landing/i18n";
import { ColorSchemeToggle } from "@/components/theme/ColorSchemeToggle";
import { LanguageSelector } from "@/components/theme/LanguageSelector";
import type { LandingControlCopy } from "../landing.types";
import { LogoLink } from "./LogoLink";

interface PageHeaderProps {
  locale: LandingLocale;
  controls: LandingControlCopy;
  onLocaleChange: (locale: LandingLocale) => void;
}

export function PageHeader({ locale, controls, onLocaleChange }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-100 border-b border-border bg-background py-3">
      <div className="mx-auto max-w-page px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <LogoLink />
          <div className="flex flex-nowrap items-center gap-2.5">
            <LanguageSelector
              value={locale}
              ariaLabel={controls.languageSelectorLabel}
              onChange={onLocaleChange}
            />
            <ColorSchemeToggle labels={controls} />
          </div>
        </div>
      </div>
    </header>
  );
}
