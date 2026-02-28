"use client";

import React, { createContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_THEME,
  isThemeName,
  THEME_OPTIONS,
  THEME_STORAGE_KEY,
} from "./theme.constants";
import { ThemeContextValue, ThemeName } from "./theme.types";

export const ThemeContext = createContext<ThemeContextValue | null>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
};

const applyTheme = (theme: ThemeName) => {
  document.documentElement.setAttribute("data-theme", theme);
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeName>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_THEME;
    }

    const initialTheme = document.documentElement.getAttribute("data-theme");
    return isThemeName(initialTheme) ? initialTheme : DEFAULT_THEME;
  });

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isThemeName(storedTheme)) {
      setTheme(storedTheme);
      return;
    }

    const htmlTheme = document.documentElement.getAttribute("data-theme");
    const fallbackTheme = isThemeName(htmlTheme) ? htmlTheme : DEFAULT_THEME;
    setTheme(fallbackTheme);
    applyTheme(fallbackTheme);
  }, []);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const contextValue = useMemo(
    () => ({ theme, setTheme, themes: THEME_OPTIONS }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
  );
};
