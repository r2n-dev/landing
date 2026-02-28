import type { LandingContent } from "./landing.types";

export const landingContent: LandingContent = {
  role: "Frontend Engineer",
  name: "Andres Artunduaga",
  intro:
    "I design and ship resilient product interfaces with React, TypeScript, and component-driven architecture.",
  about:
    "I focus on scalable frontend systems, accessible interaction patterns, and high-quality delivery with strong design collaboration.",
  portraitUrl: "https://andres-artunduaga.github.io/resume/assets/Andres.png",
  actions: [
    {
      href: "#experience",
      label: "View experience",
      variant: "filled",
    },
    {
      href: "#contact",
      label: "Start a conversation",
      variant: "light",
    },
    {
      href: "https://www.linkedin.com/in/andres-artunduaga/",
      label: "LinkedIn",
      external: true,
      variant: "default",
    },
  ],
  stats: [
    {
      value: "8+ years",
      label: "Building production frontend applications",
    },
    {
      value: "React + Angular",
      label: "Experience modernizing enterprise interfaces",
    },
    {
      value: "Design systems",
      label: "Reusable components and standards at scale",
    },
  ],
  principles: [
    {
      title: "System-first architecture",
      description:
        "Build reusable primitives and patterns that accelerate delivery while preserving consistency.",
    },
    {
      title: "Accessible interaction",
      description:
        "Design keyboard-friendly, readable interfaces that remain reliable under real-world constraints.",
    },
    {
      title: "Pragmatic execution",
      description:
        "Balance product deadlines with engineering quality through clear tradeoffs and maintainable code.",
    },
  ],
  experience: [
    {
      period: "Aug 2023 - Present",
      role: "Senior Frontend Engineer",
      company: "Proxet",
      summary:
        "Led migration work from Angular to React + TypeScript and delivered reusable components for product teams.",
    },
    {
      period: "May 2023 - Aug 2023",
      role: "Senior Angular Developer",
      company: "Newfire Global Partners",
      summary:
        "Implemented and released features for healthcare workflows in the TruCare platform.",
    },
    {
      period: "Jan 2022 - Mar 2023",
      role: "Senior Software Engineer, Frontend",
      company: "Terminal Inc",
      summary:
        "Delivered therapist-facing frontend features and collaborated closely with QA and design.",
    },
    {
      period: "Sep 2021 - Jan 2022",
      role: "Engineer II",
      company: "Commure",
      summary:
        "Researched micro-frontend architecture and implemented reusable UI components.",
    },
  ],
  contactActions: [
    {
      href: "mailto:andresartunduaga@gmail.com",
      label: "Email",
      variant: "filled",
    },
    {
      href: "https://www.linkedin.com/in/andres-artunduaga/",
      label: "LinkedIn",
      external: true,
      variant: "light",
    },
    {
      href: "https://github.com/andres-artunduaga",
      label: "GitHub",
      external: true,
      variant: "default",
    },
  ],
};
