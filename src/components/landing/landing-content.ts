import type { LandingLocale } from "./i18n";
import { andresProfileData, type LocalizedCopy } from "./profile-data";
import type {
  LandingContent,
  LandingEducationSection,
  LandingExperienceItem,
  LandingSkillsSection,
} from "./landing.types";

type LandingContentByLocale = Record<LandingLocale, LandingContent>;

function getCopy(locale: LandingLocale, copy: LocalizedCopy): string {
  return copy[locale];
}

function getAllExperience(locale: LandingLocale): LandingExperienceItem[] {
  return andresProfileData.experiences.map((item) => ({
    period: getCopy(locale, item.period),
    role: getCopy(locale, item.role),
    company: item.company,
    companyUrl: item.companyUrl,
    location: getCopy(locale, item.location),
    summary: getCopy(locale, item.summary),
    highlights: item.highlights.map((highlight) => getCopy(locale, highlight)),
  }));
}

function getEducation(locale: LandingLocale): LandingEducationSection {
  const isSpanish = locale === "es";
  return {
    title: isSpanish ? "Educación" : "Education",
    items: andresProfileData.education.map((item) => ({
      degree: getCopy(locale, item.degree),
      institution: item.institution,
      period: item.period,
      location: item.location,
    })),
  };
}

function getSkills(locale: LandingLocale): LandingSkillsSection {
  const isSpanish = locale === "es";
  return {
    title: isSpanish ? "Habilidades" : "Skills",
    technicalLabel: isSpanish ? "Técnicas" : "Technical",
    softLabel: isSpanish ? "Blandas" : "Soft",
    languagesLabel: isSpanish ? "Idiomas" : "Languages",
    technical: andresProfileData.skills.technical,
    soft: andresProfileData.skills.soft.map((s) => getCopy(locale, s)),
    languages: andresProfileData.skills.languages.map((l) => ({
      language: getCopy(locale, l.language),
      level: getCopy(locale, l.level),
    })),
  };
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
      ? "Soy un desarrollador de software bilingüe con más de 10 años de experiencia especializado en la construcción de aplicaciones web escalables y de alto rendimiento. Diseño y entrego interfaces de producto resilientes con React, TypeScript y arquitectura basada en componentes, trabajando eficazmente en equipos ágiles globales."
      : "I am a bilingual software developer with over 10 years of experience specializing in building scalable, high-performance web applications. I design and ship resilient product interfaces with React, TypeScript, and component-driven architecture, collaborating effectively in global agile teams.",
    about: isSpanish
      ? "Me apasiona trabajar con sistemas de diseño, crear componentes reutilizables y construir experiencias de usuario fluidas y accesibles. Utilizo herramientas y tecnologías web modernas para ofrecer soluciones de alta calidad, y actualmente exploro herramientas de inteligencia artificial para integrarlas en mi flujo de trabajo diario y aumentar la productividad."
      : "I am passionate about design systems, creating reusable components, and building seamless, accessible user experiences. I leverage modern web tools and technologies to deliver high-quality solutions, and I am currently exploring artificial intelligence tools to integrate into my daily workflow and boost productivity.",
    portraitUrl: andresProfileData.portraitUrl,
    sections: {
      principlesTitle: isSpanish ? "Cómo trabajo" : "How I Work",
      experienceTitle: isSpanish ? "Experiencia" : "Experience",
      experienceShowMoreLabel: isSpanish ? "Ver experiencia completa" : "Show full experience",
      experienceShowLessLabel: isSpanish ? "Ver menos experiencia" : "Show less experience",
      educationTitle: isSpanish ? "Educación" : "Education",
      skillsTitle: isSpanish ? "Habilidades" : "Skills",
      contactTitle: isSpanish
        ? "Construyamos algo valioso"
        : "Let's Build Something Valuable",
      contactIntro: isSpanish
        ? "Busco oportunidades como frontend senior donde pueda aportar mi experiencia en arquitectura de aplicaciones, sistemas de diseño y migración de plataformas legacy. Mi enfoque está en la mantenibilidad, el rendimiento y los resultados de producto que generen impacto real."
        : "Looking for senior frontend opportunities where I can bring my expertise in application architecture, design systems, and legacy platform migration. My focus is on maintainability, performance, and product outcomes that drive real impact.",
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
    footer: {
      madeWithLabel: isSpanish ? "Hecho con" : "Made with",
      inCountryLabel: isSpanish ? "en Colombia" : "in Colombia",
    },
    actions: [
      {
        href: "#experience",
        label: isSpanish ? "Ver experiencia" : "View experience",
        variant: "filled",
        icon: "briefcase",
      },
      {
        href: "#contact",
        label: isSpanish ? "Iniciar conversación" : "Start a conversation",
        variant: "light",
        icon: "message",
      },
      {
        href: andresProfileData.links.linkedin.href,
        label: andresProfileData.links.linkedin.label,
        external: true,
        variant: "light",
        icon: "linkedin",
      },
      {
        href: andresProfileData.links.whatsapp.href,
        label: andresProfileData.links.whatsapp.label,
        external: true,
        variant: "light",
        icon: "whatsapp",
      },
    ],
    stats: [
      {
        value: "10+",
        label: isSpanish
          ? "Años en producción con React, Angular y TypeScript"
          : "Years shipping production React, Angular & TypeScript applications",
      },
      {
        value: "8+",
        label: isSpanish
          ? "Empresas, desde startups hasta enterprise, en equipos ágiles globales"
          : "Companies, from startups to enterprise, in global agile teams",
      },
      {
        value: "3+",
        label: isSpanish
          ? "Migraciones de plataforma lideradas (AngularJS → Angular → React)"
          : "Platform migrations led (AngularJS → Angular → React)",
      },
    ],
    principles: [
      {
        title: isSpanish ? "Estrategia orientada a producto" : "Product-driven strategy",
        description: isSpanish
          ? "Conecto decisiones técnicas con objetivos de negocio y entrego por incrementos para mover roadmap sin comprometer estabilidad."
          : "I align technical decisions with business outcomes and ship in increments to keep roadmap velocity without sacrificing stability.",
      },
      {
        title: isSpanish
          ? "Arquitectura frontend escalable"
          : "Scalable frontend architecture",
        description: isSpanish
          ? "Organizo aplicaciones con límites claros, tipado fuerte y patrones mantenibles que facilitan crecimiento y ownership entre equipos."
          : "I structure applications with clear boundaries, strong typing, and maintainable patterns that support growth and ownership across teams.",
      },
      {
        title: isSpanish
          ? "Sistemas de componentes reutilizables"
          : "Reusable component systems",
        description: isSpanish
          ? "Construyo librerías y patrones compartidos que aceleran entregas, reducen inconsistencias visuales y mejoran la experiencia de desarrollo."
          : "I build shared libraries and patterns that speed delivery, reduce visual drift, and improve developer experience.",
      },
      {
        title: isSpanish
          ? "Rendimiento y accesibilidad desde el inicio"
          : "Performance and accessibility by default",
        description: isSpanish
          ? "Priorizo interfaces rápidas, navegables por teclado y compatibles entre navegadores para asegurar experiencias confiables en contextos reales."
          : "I prioritize fast, keyboard-friendly, cross-browser interfaces so product experiences stay reliable in real-world conditions.",
      },
      {
        title: isSpanish
          ? "Colaboración de diseño a QA"
          : "Cross-functional collaboration",
        description: isSpanish
          ? "Trabajo de cerca con diseño, producto y QA para reducir riesgos temprano, mejorar handoff y mantener una calidad consistente en cada release."
          : "I work closely with design, product, and QA to reduce risk early, improve handoff quality, and keep releases consistent.",
      },
      {
        title: isSpanish ? "Confiabilidad operativa" : "Operational reliability",
        description: isSpanish
          ? "Fortalezco monitoreo, observabilidad y feedback loops para detectar problemas antes, responder rápido y sostener la calidad en producción."
          : "I strengthen monitoring, observability, and feedback loops to catch issues early, respond quickly, and sustain production quality.",
      },
    ],
    experience: getAllExperience(locale),
    education: getEducation(locale),
    skills: getSkills(locale),
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
        icon: "mail",
      },
      {
        href: andresProfileData.links.linkedin.href,
        label: andresProfileData.links.linkedin.label,
        external: true,
        variant: "light",
        icon: "linkedin",
      },
      {
        href: andresProfileData.links.github.href,
        label: andresProfileData.links.github.label,
        external: true,
        variant: "light",
        icon: "github",
      },
      {
        href: andresProfileData.links.whatsapp.href,
        label: andresProfileData.links.whatsapp.label,
        external: true,
        variant: "light",
        icon: "whatsapp",
      },
    ],
  };
}

export const landingContentByLocale: LandingContentByLocale = {
  en: getLandingContent("en"),
  es: getLandingContent("es"),
};
