"use client";

import React from "react";
import { useTheme } from "@/design-system/theme";
import styles from "./ThemeSwitcher.module.scss";

type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = "" }) => {
  const { theme, setTheme, themes } = useTheme();

  return (
    <label className={[styles.switcher, className].filter(Boolean).join(" ")}>
      <span className={styles.label}>Theme</span>
      <select
        className={styles.select}
        value={theme}
        onChange={(event) => setTheme(event.target.value as typeof theme)}
        aria-label="Select site theme"
      >
        {themes.map((themeOption) => (
          <option key={themeOption.name} value={themeOption.name}>
            {themeOption.label}
          </option>
        ))}
      </select>
    </label>
  );
};
