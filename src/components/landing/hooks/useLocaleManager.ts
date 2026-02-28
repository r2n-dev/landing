import { useEffect, useState } from "react";
import {
  landingLocaleStorageKey,
  normalizeLandingLocale,
  resolveLandingLocaleFromBrowser,
  type LandingLocale,
} from "@/components/landing/i18n";

export function useLocaleManager(initialLocale: LandingLocale) {
  const [locale, setLocale] = useState<LandingLocale>(initialLocale);

  useEffect(() => {
    const storedLocale = normalizeLandingLocale(
      window.localStorage.getItem(landingLocaleStorageKey),
    );

    if (storedLocale) {
      setLocale(storedLocale);
      return;
    }

    const browserLocale = resolveLandingLocaleFromBrowser();
    if (browserLocale !== initialLocale) {
      setLocale(browserLocale);
    }
  }, [initialLocale]);

  useEffect(() => {
    window.localStorage.setItem(landingLocaleStorageKey, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  return { locale, setLocale } as const;
}
