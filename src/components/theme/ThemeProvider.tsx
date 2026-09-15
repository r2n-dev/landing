"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Same key the Mantine version of the site used, so a light/dark choice saved
 * before the migration is still honored.
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
