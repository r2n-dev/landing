import type { LandingLocale } from "@/components/landing/i18n";

export interface A11yCopy {
  open: string;
  title: string;
  description: string;
  highContrast: string;
  underlineLinks: string;
  textSize: string;
  textSizeOption: (percent: number) => string;
  wideSpacing: string;
  reduceMotion: string;
  reduceMotionHint: string;
  readableFont: string;
  reset: string;
}

export const a11yCopy: Record<LandingLocale, A11yCopy> = {
  en: {
    open: "Accessibility settings",
    title: "Accessibility",
    description: "Adjust how this site looks. Your choices are saved in this browser.",
    highContrast: "High contrast",
    underlineLinks: "Underline links",
    textSize: "Text size",
    textSizeOption: (percent) => `${percent}%`,
    wideSpacing: "Wider text spacing",
    reduceMotion: "Reduce motion",
    reduceMotionHint: "Your system's reduced-motion setting is always respected.",
    readableFont: "Readable font",
    reset: "Reset to defaults",
  },
  es: {
    open: "Ajustes de accesibilidad",
    title: "Accesibilidad",
    description: "Ajusta cómo se ve este sitio. Tus elecciones se guardan en este navegador.",
    highContrast: "Alto contraste",
    underlineLinks: "Subrayar enlaces",
    textSize: "Tamaño del texto",
    textSizeOption: (percent) => `${percent}%`,
    wideSpacing: "Mayor espaciado del texto",
    reduceMotion: "Reducir movimiento",
    reduceMotionHint: "Siempre se respeta la preferencia de movimiento reducido de tu sistema.",
    readableFont: "Fuente legible",
    reset: "Restablecer valores",
  },
};
