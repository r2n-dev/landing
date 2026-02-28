import type { LandingLocale } from "./i18n";

export interface LocalizedCopy {
  en: string;
  es: string;
}

export interface ProfileLink {
  label: string;
  href: string;
}

export interface ProfileExperience {
  id: string;
  period: LocalizedCopy;
  role: LocalizedCopy;
  company: string;
  companyUrl?: string;
  location: LocalizedCopy;
  summary: LocalizedCopy;
  highlights: LocalizedCopy[];
}

export interface ProfileEducation {
  degree: LocalizedCopy;
  institution: string;
  period: string;
  location: string;
}

export interface ProfileLanguage {
  language: LocalizedCopy;
  level: LocalizedCopy;
}

export interface CandidateProfile {
  name: string;
  role: LocalizedCopy;
  location: string;
  phone: string;
  email: string;
  portraitUrl: string;
  summary: LocalizedCopy;
  links: {
    linkedin: ProfileLink;
    github: ProfileLink;
    website: ProfileLink;
  };
  resumeAssets: Record<LandingLocale, string>;
  experiences: ProfileExperience[];
  skills: {
    technical: string[];
    soft: LocalizedCopy[];
    languages: ProfileLanguage[];
  };
  education: ProfileEducation[];
}

export const andresProfileData: CandidateProfile = {
  name: "Andres Artunduaga",
  role: {
    en: "Frontend Engineer",
    es: "Ingeniero Frontend",
  },
  location: "Bogotá D.C, Colombia",
  phone: "+57 3195036643",
  email: "andres@r2n.dev",
  portraitUrl: "https://andres-artunduaga.github.io/resume/assets/Andres.png",
  summary: {
    en:
      "I am a bilingual software developer with 10 years of experience in the design and implementation of scalable, user-friendly web applications. I specialize in frontend development using React, Angular, JavaScript, and TypeScript. I am passionate about design systems, reusable components, and seamless user experiences. I collaborate effectively in global agile teams and use modern web tools to deliver high-quality solutions. I am currently exploring artificial intelligence tools to integrate into my daily workflow and improve productivity.",
    es:
      "Soy un desarrollador de software bilingüe con 10 años de experiencia en el diseño e implementación de aplicaciones web escalables y fáciles de usar. Me especializo en el desarrollo frontend utilizando React, Angular, JavaScript y TypeScript. Me apasiona trabajar con sistemas de diseño, crear y reutilizar componentes, y construir experiencias de usuario fluidas. Colaboro eficazmente en equipos ágiles globales y utilizo herramientas web modernas para ofrecer soluciones de alta calidad. Actualmente exploro herramientas de inteligencia artificial para integrarlas en mi trabajo diario y aumentar mi productividad.",
  },
  links: {
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/andres-artunduaga/",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/andres-artunduaga",
    },
    website: {
      label: "r2n.dev",
      href: "https://r2n.dev/",
    },
  },
  resumeAssets: {
    en: "/assets/resume/Andres-Artunduaga-CV-EN.pdf",
    es: "/assets/resume/Andres-Artunduaga-CV-ES.pdf",
  },
  experiences: [
    {
      id: "proxet",
      period: {
        en: "Aug 2023 - Present",
        es: "Agosto 2023 - Presente",
      },
      role: {
        en: "Senior Frontend Engineer",
        es: "Ingeniero Frontend Senior",
      },
      company: "Proxet",
      companyUrl: "https://www.proxet.com/",
      location: {
        en: "Bogotá D.C (Hybrid Role)",
        es: "Bogotá D.C (Híbrido)",
      },
      summary: {
        en:
          "Led migration initiatives from Angular 13 to React + TypeScript while modernizing architecture and increasing maintainability.",
        es:
          "Lideré migraciones de Angular 13 a React + TypeScript, modernizando la arquitectura y mejorando la mantenibilidad.",
      },
      highlights: [
        {
          en:
            "Delivered reusable frontend components and a browser extension with autocomplete, removing dependency on external software.",
          es:
            "Desarrollé componentes reutilizables y una extensión web con autocompletar que eliminó la dependencia de software externo.",
        },
        {
          en:
            "Designed Figma mockups and prototypes for new features aligned with business goals and UX improvements.",
          es:
            "Diseñé maquetas y prototipos en Figma para nuevas funcionalidades, alineadas con objetivos de negocio y mejoras de UX.",
        },
        {
          en:
            "Continue driving migrations, library upgrades, code refactors, and frontend performance optimization.",
          es:
            "Actualmente continúo con migraciones, actualización de librerías, refactorización de código y optimización de rendimiento.",
        },
      ],
    },
    {
      id: "newfire",
      period: {
        en: "May 2023 - Aug 2023",
        es: "Mayo 2023 - Agosto 2023",
      },
      role: {
        en: "Senior Angular Developer",
        es: "Desarrollador Angular Senior",
      },
      company: "Newfire Global Partners",
      companyUrl: "https://www.newfireglobal.com/",
      location: {
        en: "Remote",
        es: "Remoto",
      },
      summary: {
        en:
          "Developed, maintained, and released TruCare functionality with Angular 13, sustaining product continuity and roadmap delivery.",
        es:
          "Desarrollé, mantuve y desplegué funcionalidades de TruCare en Angular 13, asegurando continuidad operativa y evolución del producto.",
      },
      highlights: [],
    },
    {
      id: "terminal",
      period: {
        en: "Jan 2022 - Mar 2023",
        es: "Enero 2022 - Marzo 2023",
      },
      role: {
        en: "Senior Software Engineer",
        es: "Ingeniero de Software Senior",
      },
      company: "Terminal Inc.",
      companyUrl: "https://www.terminal.io/",
      location: {
        en: "Remote",
        es: "Remoto",
      },
      summary: {
        en:
          "Implemented therapist-facing Angular 12+ features and maintained an embedded Flutter app, partnering with QA and design to ensure smooth releases.",
        es:
          "Implementé funcionalidades con Angular 12+ para plataformas dirigidas a terapeutas y di mantenimiento a una app embebida en Flutter, colaborando con QA y diseño para entregas fluidas.",
      },
      highlights: [],
    },
    {
      id: "commure-engineer-ii",
      period: {
        en: "Sep 2021 - Jan 2022",
        es: "Septiembre 2021 - Enero 2022",
      },
      role: {
        en: "Engineer II",
        es: "Ingeniero II",
      },
      company: "Commure",
      companyUrl: "https://www.commure.com/",
      location: {
        en: "Remote",
        es: "Remoto",
      },
      summary: {
        en:
          "Led microfrontend research with SingleSPA and implemented reusable Angular/React components in StencilJS for scalable delivery.",
        es:
          "Lideré investigación de micro frontends con SingleSPA e implementé componentes reutilizables en Angular/React con StencilJS para escalar el desarrollo.",
      },
      highlights: [
        {
          en: "Supported the Listrunner React platform, resolving issues and improving reliability.",
          es: "Brindé soporte a la plataforma Listrunner en React, resolviendo problemas y mejorando la confiabilidad.",
        },
      ],
    },
    {
      id: "commure-engineer-i",
      period: {
        en: "Sep 2020 - Aug 2021",
        es: "Septiembre 2020 - Agosto 2021",
      },
      role: {
        en: "Engineer I",
        es: "Ingeniero I",
      },
      company: "Commure",
      companyUrl: "https://www.commure.com/",
      location: {
        en: "Remote",
        es: "Remoto",
      },
      summary: {
        en:
          "Built new List Runner features, solved critical production issues, and integrated Sentry + Intercom for monitoring and user communication.",
        es:
          "Desarrollé funcionalidades para List Runner, resolví errores críticos e integré Sentry + Intercom para monitoreo y comunicación con usuarios.",
      },
      highlights: [
        {
          en:
            "Researched CSS frameworks to guide scalable component library decisions and maintainable UI standards.",
          es:
            "Investigué frameworks CSS para guiar decisiones de librerías de componentes escalables y una interfaz mantenible.",
        },
      ],
    },
    {
      id: "merlin",
      period: {
        en: "Sep 2019 - Aug 2020",
        es: "Septiembre 2019 - Agosto 2020",
      },
      role: {
        en: "Frontend Engineer",
        es: "Desarrollador Frontend",
      },
      company: "Merlin",
      companyUrl: "https://merlinjobs.com/",
      location: {
        en: "Bogotá D.C",
        es: "Bogotá D.C",
      },
      summary: {
        en:
          "Built responsive Angular 7+ interfaces and generated static pages with Python + Jinja v2 to improve performance and search ranking.",
        es:
          "Diseñé y optimicé interfaces en Angular 7+ y páginas estáticas con Python + Jinja v2 para mejorar rendimiento y posicionamiento en buscadores.",
      },
      highlights: [
        {
          en: "Applied SEO and performance optimization practices to increase visibility and loading speed.",
          es: "Apliqué buenas prácticas de SEO y optimización de rendimiento para aumentar visibilidad y velocidad de carga.",
        },
      ],
    },
    {
      id: "alert-logic-associate",
      period: {
        en: "Oct 2017 - Sep 2019",
        es: "Octubre 2017 - Septiembre 2019",
      },
      role: {
        en: "Associate Engineer",
        es: "Ingeniero Asociado",
      },
      company: "Alert Logic",
      companyUrl: "https://www.alertlogic.com/",
      location: {
        en: "Santiago de Cali",
        es: "Santiago de Cali",
      },
      summary: {
        en:
          "Built responsive Angular 5+ interfaces for customer-facing products and supported legacy AngularJS to Angular 2+ migrations.",
        es:
          "Diseñé interfaces responsivas con Angular 5+ y apoyé migraciones de AngularJS a Angular 2+ para productos orientados al cliente.",
      },
      highlights: [
        {
          en: "Contributed to Incidents and Health consoles and led initiatives to improve unit/e2e test coverage.",
          es: "Contribuí a las consolas de Incidents y Health y lideré iniciativas para elevar la cobertura de pruebas unitarias y e2e.",
        },
        {
          en: "Supported existing apps and trained interns.",
          es: "Brindé soporte continuo a aplicaciones existentes y entrené pasantes.",
        },
      ],
    },
    {
      id: "alert-logic-intern",
      period: {
        en: "Jul 2016 - Jul 2017",
        es: "Julio 2016 - Julio 2017",
      },
      role: {
        en: "Web Developer Intern",
        es: "Pasantía Desarrollador Web",
      },
      company: "Alert Logic",
      companyUrl: "https://www.alertlogic.com/",
      location: {
        en: "Santiago de Cali",
        es: "Santiago de Cali",
      },
      summary: {
        en:
          "Increased testing coverage to 80%, supported defect resolution in PHP and AngularJS applications, and delivered features in a SCRUM workflow.",
        es:
          "Aumenté la cobertura de pruebas al 80%, apoyé la resolución de defectos en PHP y AngularJS, e implementé funcionalidades bajo metodología SCRUM.",
      },
      highlights: [
        {
          en:
            "Automated user story documentation with Robo + LaTeX to streamline project workflows.",
          es:
            "Automaticé documentación de historias de usuario con Robo + LaTeX para agilizar los flujos de trabajo del proyecto.",
        },
      ],
    },
  ],
  skills: {
    technical: [
      "React",
      "Angular",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Bootstrap",
      "MUI",
      "Figma",
      "UX",
      "SEO",
    ],
    soft: [
      {
        en: "Problem solving",
        es: "Resolución de problemas",
      },
      {
        en: "Team collaboration",
        es: "Colaboración en equipo",
      },
      {
        en: "Communication",
        es: "Comunicación",
      },
      {
        en: "Leadership",
        es: "Liderazgo",
      },
      {
        en: "Time management",
        es: "Gestión del tiempo",
      },
      {
        en: "Adaptability",
        es: "Adaptabilidad",
      },
    ],
    languages: [
      {
        language: {
          en: "Spanish",
          es: "Español",
        },
        level: {
          en: "Native",
          es: "Nativo",
        },
      },
      {
        language: {
          en: "English",
          es: "Inglés",
        },
        level: {
          en: "C1",
          es: "C1",
        },
      },
    ],
  },
  education: [
    {
      degree: {
        en: "Computer Science",
        es: "Ingeniería de sistemas",
      },
      institution: "Universidad del Valle",
      period: "2011 - 2017",
      location: "Santiago de Cali",
    },
  ],
};
