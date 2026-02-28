import { ThemeName, ThemeOption } from "./theme.types";

export const THEME_STORAGE_KEY = "r2n_theme";

export const THEME_OPTIONS: ThemeOption[] = [
  { name: "light-solar", label: "Light Solar", appearance: "light" },
  { name: "light-azure", label: "Light Azure", appearance: "light" },
  { name: "dark-slate", label: "Dark Slate", appearance: "dark" },
  { name: "dark-ember", label: "Dark Ember", appearance: "dark" },
];

export const THEME_NAMES = THEME_OPTIONS.map((theme) => theme.name);

export const DEFAULT_THEME: ThemeName = "light-solar";

export const isThemeName = (value: unknown): value is ThemeName => {
  return typeof value === "string" && THEME_NAMES.includes(value as ThemeName);
};
