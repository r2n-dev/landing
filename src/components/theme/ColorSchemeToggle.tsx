"use client";

import {
  ActionIcon,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoonStars, IconSunHigh } from "@tabler/icons-react";

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const isDark = computedColorScheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

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
