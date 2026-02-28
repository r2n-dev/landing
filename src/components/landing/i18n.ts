export const landingLocaleStorageKey = "landing-locale";

export const landingLocales = ["en", "es"] as const;

export type LandingLocale = (typeof landingLocales)[number];

export const defaultLandingLocale: LandingLocale = "en";

interface HeaderReader {
  get(name: string): string | null;
}

export function normalizeLandingLocale(value: string | null | undefined): LandingLocale | null {
  if (!value) {
    return null;
  }

  const normalized = value.toLowerCase();
  if (normalized.startsWith("es")) {
    return "es";
  }

  if (normalized.startsWith("en")) {
    return "en";
  }

  return null;
}

function resolveLocaleFromCountryCode(countryCode: string | null | undefined): LandingLocale | null {
  if (!countryCode) {
    return null;
  }

  const normalizedCountry = countryCode.trim().toUpperCase();
  if (normalizedCountry === "CO") {
    return "es";
  }

  if (normalizedCountry === "US") {
    return "en";
  }

  return null;
}

function resolveLocaleFromAcceptLanguage(acceptLanguage: string | null): LandingLocale | null {
  if (!acceptLanguage) {
    return null;
  }

  const acceptedLanguages = acceptLanguage.split(",");
  for (const languageToken of acceptedLanguages) {
    const rawLanguage = languageToken.split(";")[0]?.trim();
    const locale = normalizeLandingLocale(rawLanguage);
    if (locale) {
      return locale;
    }
  }

  return null;
}

export function resolveLandingLocaleFromHeaders(headers: HeaderReader): LandingLocale {
  const byCountry =
    resolveLocaleFromCountryCode(headers.get("x-vercel-ip-country")) ??
    resolveLocaleFromCountryCode(headers.get("cf-ipcountry")) ??
    resolveLocaleFromCountryCode(headers.get("x-country-code"));

  if (byCountry) {
    return byCountry;
  }

  return (
    resolveLocaleFromAcceptLanguage(headers.get("accept-language")) ?? defaultLandingLocale
  );
}

export function resolveLandingLocaleFromBrowser(): LandingLocale {
  if (typeof navigator === "undefined") {
    return defaultLandingLocale;
  }

  const browserLanguages = [navigator.language, ...(navigator.languages ?? [])];
  for (const browserLanguage of browserLanguages) {
    const region = browserLanguage.split("-")[1]?.toUpperCase();
    const byRegion = resolveLocaleFromCountryCode(region);
    if (byRegion) {
      return byRegion;
    }
  }

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timeZone === "America/Bogota") {
    return "es";
  }

  for (const browserLanguage of browserLanguages) {
    const byLanguage = normalizeLandingLocale(browserLanguage);
    if (byLanguage) {
      return byLanguage;
    }
  }

  return defaultLandingLocale;
}
