"use client";

import { useEffect, useState } from "react";
import { IconMoonStars, IconSunHigh } from "@tabler/icons-react";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
  labels?: {
    switchToLightMode: string;
    switchToDarkMode: string;
  };
}

const defaultLabels: NonNullable<ThemeToggleProps["labels"]> = {
  switchToLightMode: "Switch to light mode",
  switchToDarkMode: "Switch to dark mode",
};

export function ThemeToggle({ labels = defaultLabels }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;
  const label = isDark ? labels.switchToLightMode : labels.switchToDarkMode;

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex size-8.5 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-input bg-surface text-surface-foreground hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:translate-y-px"
    >
      {isDark ? <IconSunHigh size={18} /> : <IconMoonStars size={18} />}
    </button>
  );
}
