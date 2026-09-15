"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Same key as Mantine's localStorageColorSchemeManager, so a scheme saved
 * before the migration is still honored. next-themes stores "system" where
 * Mantine stored "auto"; the app never persists "auto" (see ColorSchemeSync).
 */
export const colorSchemeStorageKey = "mantine-color-scheme-value";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey={colorSchemeStorageKey}
    >
      {children}
    </NextThemesProvider>
  );
}
