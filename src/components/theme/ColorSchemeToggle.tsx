"use client";

import {
  ActionIcon,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoonStars, IconSunHigh } from "@tabler/icons-react";

interface ColorSchemeToggleProps {
  labels?: {
    switchToLightMode: string;
    switchToDarkMode: string;
  };
}

const defaultLabels: NonNullable<ColorSchemeToggleProps["labels"]> = {
  switchToLightMode: "Switch to light mode",
  switchToDarkMode: "Switch to dark mode",
};

export function ColorSchemeToggle({ labels = defaultLabels }: ColorSchemeToggleProps) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const isDark = computedColorScheme === "dark";
  const label = isDark ? labels.switchToLightMode : labels.switchToDarkMode;

  return (
    <Tooltip label={label} withArrow>
      <ActionIcon
        aria-label={label}
        variant="default"
        size="lg"
        onClick={() => setColorScheme(isDark ? "light" : "dark")}
      >
        {isDark ? <IconSunHigh size={18} /> : <IconMoonStars size={18} />}
      </ActionIcon>
    </Tooltip>
  );
}
