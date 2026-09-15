import type { LandingLocale } from "./i18n";
import type { CandidateProfile } from "./profile-data";

/** Replaces every `{ en, es }` copy object in the value with the string for `locale`. */
function localize(value: unknown, locale: LandingLocale): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => localize(item, locale));
  }
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    const keys = Object.keys(record);
    if (keys.length === 2 && "en" in record && "es" in record) {
      return record[locale];
    }
    return Object.fromEntries(keys.map((key) => [key, localize(record[key], locale)]));
  }
  return value;
}

export function getLocalizedProfile(profile: CandidateProfile, locale: LandingLocale) {
  return localize(profile, locale);
}
