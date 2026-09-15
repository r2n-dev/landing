"use client";

import { useEffect, useRef } from "react";
import { useMantineColorScheme, type MantineColorScheme } from "@mantine/core";
import { useTheme } from "next-themes";

/**
 * Temporary bridge while Mantine and next-themes coexist: keeps Mantine's color
 * scheme and the next-themes theme in step, so Mantine components and Tailwind
 * `dark:` variants always agree whichever toggle is used. Delete with Mantine.
 */
export function ColorSchemeSync() {
  const { colorScheme, setColorScheme, clearColorScheme } = useMantineColorScheme();
  const { theme, setTheme } = useTheme();
  const lastSyncedScheme = useRef<MantineColorScheme | null>(null);

  useEffect(() => {
    if (!theme) {
      return;
    }

    const themeScheme: MantineColorScheme = theme === "system" ? "auto" : (theme as MantineColorScheme);

    if (themeScheme === colorScheme) {
      lastSyncedScheme.current = colorScheme;
      return;
    }

    if (lastSyncedScheme.current === colorScheme) {
      // next-themes changed since the last sync. Clearing (instead of saving
      // "auto") keeps next-themes from ever reading Mantine's "auto" value.
      if (themeScheme === "auto") {
        clearColorScheme();
      } else {
        setColorScheme(themeScheme);
      }
    } else {
      setTheme(colorScheme === "auto" ? "system" : colorScheme);
    }
  }, [theme, colorScheme, setColorScheme, clearColorScheme, setTheme]);

  return null;
}
