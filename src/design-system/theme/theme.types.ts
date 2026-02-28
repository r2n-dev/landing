export type ThemeName =
  | "light-solar"
  | "light-azure"
  | "dark-slate"
  | "dark-ember";

export type ThemeAppearance = "light" | "dark";

export type ThemeOption = {
  name: ThemeName;
  label: string;
  appearance: ThemeAppearance;
};

export type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themes: ThemeOption[];
};
