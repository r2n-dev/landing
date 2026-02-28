import type { LandingLocale } from "./i18n";
import { andresProfileData, type LocalizedCopy } from "./profile-data";
import type { LandingContent, LandingExperienceItem } from "./landing.types";

type LandingContentByLocale = Record<LandingLocale, LandingContent>;

function getCopy(locale: LandingLocale, copy: LocalizedCopy): string {
  return copy[locale];
}

function getRecentExperience(locale: LandingLocale): LandingExperienceItem[] {
  return andresProfileData.experiences.slice(0, 4).map((item) => ({
    period: getCopy(locale, item.period),
    role: getCopy(locale, item.role),
    company: item.company,
    location: getCopy(locale, item.location),
    summary: getCopy(locale, item.summary),
    highlights: item.highlights.map((highlight) => getCopy(locale, highlight)),
  }));
}

function getLandingContent(locale: LandingLocale): LandingContent {
  const isSpanish = locale === "es";

  return {
    locale,
    availabilityBadge: isSpanish
      ? "Disponible para oportunidades frontend"
      : "Open to frontend opportunities",
    role: getCopy(locale, andresProfileData.role),
    name: andresProfileData.name,
    intro: isSpanish
      ? "Diseño y entrego interfaces resilientes con React, TypeScript y arquitectura basada en componentes."
      : "I design and ship resilient product interfaces with React, TypeScript, and component-driven architecture.",
    about: isSpanish
      ? "Me enfoco en sistemas frontend escalables, patrones accesibles de interacción y entregas de alta calidad con colaboración cercana de diseño."
      : "I focus on scalable frontend systems, accessible interaction patterns, and high-quality delivery with strong design collaboration.",
    portraitUrl: andresProfileData.portraitUrl,
    sections: {
      principlesTitle: isSpanish ? "Cómo trabajo" : "How I Work",
      experienceTitle: isSpanish ? "Experiencia reciente" : "Recent Experience",
      contactTitle: isSpanish
        ? "Construyamos algo valioso"
        : "Let's Build Something Valuable",
      contactIntro: isSpanish
        ? "Busco oportunidades como frontend senior, enfocado en arquitectura, mantenibilidad y resultados de producto."
        : "Looking for senior frontend opportunities focused on architecture, maintainability, and product outcomes.",
    },
    controls: {
      languageSelectorLabel: isSpanish ? "Seleccionar idioma" : "Select language",
      switchToLightMode: isSpanish
        ? "Cambiar a modo claro"
        : "Switch to light mode",
      switchToDarkMode: isSpanish
        ? "Cambiar a modo oscuro"
        : "Switch to dark mode",
    },
    actions: [
      {
        href: "#experience",
        label: isSpanish ? "Ver experiencia" : "View experience",
        variant: "filled",
      },
      {
        href: "#contact",
        label: isSpanish ? "Iniciar conversación" : "Start a conversation",
        variant: "light",
      },
      {
        href: andresProfileData.links.linkedin.href,
        label: andresProfileData.links.linkedin.label,
        external: true,
        variant: "default",
      },
    ],
    stats: [
      {
        value: isSpanish ? "10 años" : "10 years",
        label: isSpanish
          ? "Construyendo aplicaciones frontend en producción"
          : "Building production frontend applications",
      },
      {
        value: "React + Angular",
        label: isSpanish
          ? "Modernizando productos enterprise"
          : "Modernizing enterprise product interfaces",
      },
      {
        value: "Design systems",
        label: isSpanish
          ? "Componentes y estándares reutilizables"
          : "Reusable components and standards at scale",
      },
    ],
    principles: [
      {
        title: isSpanish ? "Arquitectura orientada al sistema" : "System-first architecture",
        description: isSpanish
          ? "Construyo patrones y componentes reutilizables que aceleran la entrega manteniendo consistencia."
          : "Build reusable patterns and components that accelerate delivery while preserving consistency.",
      },
      {
        title: isSpanish ? "Interacción accesible" : "Accessible interaction",
        description: isSpanish
          ? "Diseño experiencias legibles y navegables por teclado, confiables en escenarios reales."
          : "Design keyboard-friendly, readable interfaces that stay reliable under real-world constraints.",
      },
      {
        title: isSpanish ? "Ejecución pragmática" : "Pragmatic execution",
        description: isSpanish
          ? "Balanceo tiempos de producto con calidad de ingeniería mediante decisiones claras y mantenibles."
          : "Balance product delivery speed with engineering quality through clear and maintainable tradeoffs.",
      },
    ],
    experience: getRecentExperience(locale),
    resumeAction: {
      href: andresProfileData.resumeAssets[locale],
      label: isSpanish ? "Descargar hoja de vida" : "Download resume",
      variant: "light",
    },
    contactActions: [
      {
        href: `mailto:${andresProfileData.email}`,
        label: isSpanish ? "Correo" : "Email",
        variant: "filled",
      },
      {
        href: andresProfileData.links.linkedin.href,
        label: andresProfileData.links.linkedin.label,
        external: true,
        variant: "light",
      },
      {
        href: andresProfileData.links.github.href,
        label: andresProfileData.links.github.label,
        external: true,
        variant: "default",
      },
    ],
  };
}

export const landingContentByLocale: LandingContentByLocale = {
  en: getLandingContent("en"),
  es: getLandingContent("es"),
};
