"use client";

import { useEffect, useState } from "react";
import { IconMoonStars, IconSunHigh } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;
  const label = isDark ? labels.switchToLightMode : labels.switchToDarkMode;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            aria-label={label}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <IconSunHigh size={18} /> : <IconMoonStars size={18} />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
