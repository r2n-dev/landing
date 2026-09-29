import type { ResumeData } from "@/lib/resume/schema";

export type {
  LocalizedCopy,
  ProfileCertification,
  ProfileEducation,
  ProfileExperience,
  ProfileLanguage,
  ProfileLink,
} from "@/lib/resume/schema";

export type CandidateProfile = ResumeData;

export const andresProfileData: CandidateProfile = {
  name: "Andres Artunduaga",
  role: {
    en: "Senior Frontend Engineer",
    es: "Ingeniero Frontend Senior",
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
    whatsapp: {
      label: "WhatsApp",
      href: "https://wa.me/573195036643",
    },
    website: {
      label: "r2n.dev",
      href: "https://r2n.dev/",
    },
  },
  resumeAssets: {
    en: "/resume-en.pdf",
    es: "/resume-es.pdf",
  },
  experiences: [
    {
      id: "proxet",
      period: {
        en:
          "Aug 2023 - Present",
        es:
          "Agosto 2023 - Presente",
      },
      role: {
        en:
          "Senior Frontend Engineer",
        es:
          "Ingeniero Frontend Senior",
      },
      company: "Proxet",
      companyUrl: "https://www.proxet.com/",
      location: {
        en:
          "Bogotá D.C (Hybrid Role)",
        es:
          "Bogotá D.C (Híbrido)",
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
            "Manage and enhance a critical Angular 13 application built with NX, implementing new features and keeping the user experience smooth.",
          es:
            "Administro y mejoro una aplicación crítica en Angular 13 construida con NX, implementando nuevas funcionalidades y cuidando una experiencia de usuario fluida.",
        },
        {
          en:
            "Played a key role in shaping the architecture and design of the new application, standardizing components and establishing a Design System that improved design consistency and development efficiency.",
          es:
            "Participé de forma clave en la arquitectura y el diseño de la nueva aplicación, estandarizando componentes y estableciendo un Design System que mejoró la consistencia visual y la eficiencia del desarrollo.",
        },
        {
          en:
            "Delivered reusable frontend components and a browser extension with autocomplete, removing dependency on external software.",
          es:
            "Desarrollé componentes reutilizables y una extensión web con autocompletar que eliminó la dependencia de software externo.",
        },
        {
          en:
            "Designed Figma mockups and prototypes that modernize the look of the application while keeping its essence, aligned with business goals and UX improvements.",
          es:
            "Diseñé maquetas y prototipos en Figma que modernizan la apariencia de la aplicación conservando su esencia, alineados con objetivos de negocio y mejoras de UX.",
        },
        {
          en:
            "Continue driving migrations, library upgrades, code refactors, and frontend performance optimization.",
          es:
            "Actualmente continúo con migraciones, actualización de librerías, refactorización de código y optimización de rendimiento.",
        },
      ],
      aiUsage: {
        en:
          "GitHub Copilot is my main day-to-day AI tool. I created prompts, rules, and other context documents so AI agents understand the codebase, its architecture, and the project's basic rules, making their suggestions consistent with how the team builds.",
        es:
          "GitHub Copilot es mi herramienta de AI principal en el día a día. Creé prompts, reglas y otros documentos de contexto para que los agentes de AI comprendan la base de código, su arquitectura y las reglas básicas del proyecto, logrando sugerencias coherentes con la forma de trabajo del equipo.",
      },
      stack: ["Angular 13", "NX", "React", "TypeScript", "Design System", "Figma", "Browser extensions", "GitHub Copilot"],
    },
    {
      id: "newfire",
      period: {
        en:
          "May 2023 - Aug 2023",
        es:
          "Mayo 2023 - Agosto 2023",
      },
      role: {
        en:
          "Senior Angular Developer",
        es:
          "Desarrollador Angular Senior",
      },
      company: "Newfire Global Partners",
      companyUrl: "https://www.newfireglobal.com/",
      location: {
        en:
          "Remote",
        es:
          "Remoto",
      },
      summary: {
        en:
          "Developed, maintained, and released TruCare functionality with Angular 13, sustaining product continuity and roadmap delivery.",
        es:
          "Desarrollé, mantuve y desplegué funcionalidades de TruCare en Angular 13, asegurando continuidad operativa y evolución del producto.",
      },
      highlights: [
        {
          en:
            "Took charge of the development and maintenance of an Angular-based application, guaranteeing seamless functionality and improving the overall user experience.",
          es:
            "Asumí el desarrollo y mantenimiento de una aplicación basada en Angular, garantizando su correcto funcionamiento y mejorando la experiencia de usuario.",
        },
        {
          en:
            "Maintained and released TruCare product features under tight delivery schedules.",
          es:
            "Mantuve y desplegué funcionalidades del producto TruCare bajo calendarios de entrega ajustados.",
        },
      ],
      stack: ["Angular 13", "TypeScript"],
    },
    {
      id: "terminal",
      period: {
        en:
          "Jan 2022 - Mar 2023",
        es:
          "Enero 2022 - Marzo 2023",
      },
      role: {
        en:
          "Senior Software Engineer",
        es:
          "Ingeniero de Software Senior",
      },
      company: "Terminal Inc.",
      companyUrl: "https://www.terminal.io/",
      location: {
        en:
          "Remote",
        es:
          "Remoto",
      },
      summary: {
        en:
          "Implemented therapist-facing Angular 12+ features and maintained an embedded Flutter app, partnering with QA and design to ensure smooth releases.",
        es:
          "Implementé funcionalidades con Angular 12+ para plataformas dirigidas a terapeutas y di mantenimiento a una app embebida en Flutter, colaborando con QA y diseño para entregas fluidas.",
      },
      highlights: [
        {
          en:
            "Implemented therapist-facing features in Angular 12+ for healthcare platform workflows.",
          es:
            "Implementé funcionalidades dirigidas a terapeutas en Angular 12+ para flujos de trabajo en plataformas de salud.",
        },
        {
          en:
            "Migrated Angular applications to the latest version.",
          es:
            "Migré aplicaciones Angular a la versión más reciente.",
        },
        {
          en:
            "Ran proofs of concept to replace the testing libraries and the styling libraries.",
          es:
            "Realicé pruebas de concepto para reemplazar las librerías de testing y de estilos.",
        },
        {
          en:
            "Maintained an embedded Flutter application, collaborating across QA and design teams.",
          es:
            "Mantuve una aplicación embebida en Flutter, colaborando con equipos de QA y diseño.",
        },
      ],
      stack: ["Angular 12+", "Flutter", "TypeScript"],
    },
    {
      id: "commure-engineer-ii",
      period: {
        en:
          "Sep 2021 - Jan 2022",
        es:
          "Septiembre 2021 - Enero 2022",
      },
      role: {
        en:
          "Engineer II",
        es:
          "Ingeniero II",
      },
      company: "Commure",
      companyUrl: "https://www.commure.com/",
      location: {
        en:
          "Remote",
        es:
          "Remoto",
      },
      summary: {
        en:
          "Led microfrontend research with SingleSPA and implemented reusable Angular/React components in StencilJS for scalable delivery.",
        es:
          "Lideré investigación de micro frontends con SingleSPA e implementé componentes reutilizables en Angular/React con StencilJS para escalar el desarrollo.",
      },
      highlights: [
        {
          en:
            "Researched SingleSPA, a tool to manage micro frontends.",
          es:
            "Investigué SingleSPA, una herramienta para gestionar micro frontends.",
        },
        {
          en:
            "Built a proof-of-concept app with single-spa combining multiple micro frontends written in different versions of Angular and React.",
          es:
            "Construí una aplicación de prueba de concepto con single-spa que combinaba varios micro frontends escritos en distintas versiones de Angular y React.",
        },
        {
          en:
            "Developed reusable Angular and React components using StencilJS.",
          es:
            "Desarrollé componentes reutilizables en Angular y React usando StencilJS.",
        },
        {
          en:
            "Supported the Listrunner React platform, resolving issues and improving reliability.",
          es:
            "Brindé soporte a la plataforma Listrunner en React, resolviendo problemas y mejorando la confiabilidad.",
        },
      ],
      stack: ["SingleSPA", "StencilJS", "Angular", "React", "TypeScript"],
    },
    {
      id: "commure-engineer-i",
      period: {
        en:
          "Sep 2020 - Aug 2021",
        es:
          "Septiembre 2020 - Agosto 2021",
      },
      role: {
        en:
          "Engineer I",
        es:
          "Ingeniero I",
      },
      company: "Commure",
      companyUrl: "https://www.commure.com/",
      location: {
        en:
          "Remote",
        es:
          "Remoto",
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
            "Supported the Listrunner app and fixed the integration with the Sentry and Intercom services.",
          es:
            "Di soporte a la aplicación Listrunner y corregí la integración con los servicios Sentry e Intercom.",
        },
        {
          en:
            "Created the base app integrated with the Commure platform for the analytics-dashboard project.",
          es:
            "Creé la aplicación base integrada con la plataforma de Commure para el proyecto analytics-dashboard.",
        },
        {
          en:
            "Researched and compared Tailwind CSS against other CSS frameworks to guide scalable component library decisions and maintainable UI standards.",
          es:
            "Investigué y comparé Tailwind CSS con otros frameworks CSS para guiar decisiones de librerías de componentes escalables y una interfaz mantenible.",
        },
        {
          en:
            "Researched testing libraries and best testing practices for the component library.",
          es:
            "Investigué librerías de testing y buenas prácticas de pruebas para la librería de componentes.",
        },
        {
          en:
            "Created base files, boilerplate components, and Storybook configuration for the component library.",
          es:
            "Creé los archivos base, componentes boilerplate y la configuración de Storybook para la librería de componentes.",
        },
      ],
      stack: ["React", "Sentry", "Intercom", "Tailwind CSS", "Storybook"],
    },
    {
      id: "merlin",
      period: {
        en:
          "Sep 2019 - Aug 2020",
        es:
          "Septiembre 2019 - Agosto 2020",
      },
      role: {
        en:
          "Frontend Engineer",
        es:
          "Desarrollador Frontend",
      },
      company: "Merlin",
      companyUrl: "https://merlinjobs.com/",
      location: {
        en:
          "Bogotá D.C",
        es:
          "Bogotá D.C",
      },
      summary: {
        en:
          "Built responsive Angular 7+ interfaces and generated static pages with Python + Jinja v2 to improve performance and search ranking.",
        es:
          "Diseñé y optimicé interfaces en Angular 7+ y páginas estáticas con Python + Jinja v2 para mejorar rendimiento y posicionamiento en buscadores.",
      },
      highlights: [
        {
          en:
            "Developed responsive desktop and mobile pages with cross-browser compatibility, working with the design team to turn designs into functional web apps.",
          es:
            "Desarrollé páginas web responsivas para escritorio y móvil con compatibilidad entre navegadores, trabajando con el equipo de diseño para convertir diseños en aplicaciones funcionales.",
        },
        {
          en:
            "Applied SEO and performance optimization practices to increase visibility and loading speed.",
          es:
            "Apliqué buenas prácticas de SEO y optimización de rendimiento para aumentar visibilidad y velocidad de carga.",
        },
        {
          en:
            "Implemented internationalization (i18n) and wrote and maintained unit tests to keep quality.",
          es:
            "Implementé internacionalización (i18n) y escribí y mantuve pruebas unitarias para asegurar la calidad.",
        },
        {
          en:
            "Provided general support and fixed bugs when required.",
          es:
            "Brindé soporte general y resolví errores cuando fue necesario.",
        },
      ],
      stack: ["Angular 7+", "Python", "Jinja2", "SEO", "i18n"],
    },
    {
      id: "alert-logic-associate",
      period: {
        en:
          "Oct 2017 - Sep 2019",
        es:
          "Octubre 2017 - Septiembre 2019",
      },
      role: {
        en:
          "Associate Engineer",
        es:
          "Ingeniero Asociado",
      },
      company: "Alert Logic",
      companyUrl: "https://www.alertlogic.com/",
      location: {
        en:
          "Santiago de Cali",
        es:
          "Santiago de Cali",
      },
      summary: {
        en:
          "Built responsive Angular 5+ interfaces for customer-facing products and supported legacy AngularJS to Angular 2+ migrations.",
        es:
          "Diseñé interfaces responsivas con Angular 5+ y apoyé migraciones de AngularJS a Angular 2+ para productos orientados al cliente.",
      },
      highlights: [
        {
          en:
            "Delivered the Incidents and Health customer-facing consoles and contributed to several other projects.",
          es:
            "Entregué con éxito las consolas Incidents y Health orientadas al cliente y contribuí en varios proyectos adicionales.",
        },
        {
          en:
            "Supported and maintained applications built with PHP, Symfony, AngularJS, and Angular, and presented demos requested by stakeholders.",
          es:
            "Di soporte y mantenimiento a aplicaciones en PHP, Symfony, AngularJS y Angular, y presenté demos solicitadas por stakeholders.",
        },
        {
          en:
            "Contributed to migrating legacy AngularJS apps to Angular 2+ and made visual and performance improvements across multiple products.",
          es:
            "Contribuí a la migración de aplicaciones legacy en AngularJS a Angular 2+ e hice mejoras visuales y de rendimiento en varios productos.",
        },
        {
          en:
            "Wrote well-tested code with Jasmine, created e2e tests with Protractor, and helped build a continuous integration pipeline with Jenkins.",
          es:
            "Escribí código bien probado con Jasmine, creé pruebas e2e con Protractor y ayudé a construir un pipeline de integración continua con Jenkins.",
        },
        {
          en:
            "Mentored new interns and led a group of them to raise unit-test coverage and e2e testing across several apps.",
          es:
            "Fui mentor de nuevos pasantes y lideré un grupo de ellos para aumentar la cobertura de pruebas unitarias y e2e en varias aplicaciones.",
        },
      ],
      stack: ["Angular 5+", "AngularJS", "PHP", "Symfony", "Jasmine", "Protractor", "Jenkins", "SCRUM"],
    },
    {
      id: "alert-logic-intern",
      period: {
        en:
          "Jul 2016 - Jul 2017",
        es:
          "Julio 2016 - Julio 2017",
      },
      role: {
        en:
          "Web Developer Intern",
        es:
          "Pasantía Desarrollador Web",
      },
      company: "Alert Logic",
      companyUrl: "https://www.alertlogic.com/",
      location: {
        en:
          "Santiago de Cali",
        es:
          "Santiago de Cali",
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
            "Contributed to two main modules of the new Cloud Defender UI and built AngularJS modules backed by RESTful microservices.",
          es:
            "Contribuí al desarrollo de dos módulos principales de la nueva interfaz de Cloud Defender y desarrollé módulos en AngularJS con microservicios RESTful.",
        },
        {
          en:
            "Supported defects and feature requests in the Cloud Defender and Cloud Insight applications (AngularJS and PHP).",
          es:
            "Atendí defectos y solicitudes de funcionalidades en las aplicaciones Cloud Defender y Cloud Insight (AngularJS y PHP).",
        },
        {
          en:
            "Automated user story documentation with Robo + LaTeX using data from the Rally API to increase team productivity.",
          es:
            "Automaticé la documentación de historias de usuario con Robo + LaTeX usando datos de la API de Rally para aumentar la productividad del equipo.",
        },
        {
          en:
            "Mentored two new interns in common practices and the agile methodology used by the team.",
          es:
            "Fui mentor de dos nuevos pasantes en las prácticas comunes y la metodología ágil del equipo.",
        },
      ],
      stack: ["AngularJS", "PHP", "RESTful APIs", "Robo", "LaTeX", "Rally API", "SCRUM"],
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
      "StencilJS",
      "SingleSPA",
      "Flutter",
      "Python",
      "Mantine",
      "Bootstrap",
      "MUI",
      "NX",
      "Tailwind CSS",
      "Storybook",
      "PHP",
      "Sentry",
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
        levels: [
          {
            en: "Native",
            es: "Nativo",
          },
        ],
      },
      {
        language: {
          en: "English",
          es: "Inglés",
        },
        levels: [
          {
            en: "Advanced",
            es: "Avanzado",
          },
          {
            en: "C1",
            es: "C1",
          },
        ],
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
  certifications: [
    {
      name: "Claude Certified Developer – Foundations",
      issuer: "Anthropic",
      issuedOn: "2026-09-11",
      expiresOn: "2027-09-11",
      badgeImageUrl: "/assets/certifications/claude-certified-developer-foundations.png",
      verificationUrl: "https://www.credly.com/badges/b7c1ad14-f61a-4d58-b6e3-df30b17f366d",
    },
  ],
};
