import type { LandingLocale } from "@/components/landing/i18n";
import type { JobMatchCategoryKey } from "@/lib/assistant/job-match-constants";

export interface AssistantCopy {
  launcherLabel: string;
  title: string;
  modeLabel: string;
  chatTab: string;
  jobMatchTab: string;
  betaBadge: string;
  betaTooltip: string;
  chat: {
    intro: string;
    placeholder: string;
    questionLabel: string;
    send: string;
    thinking: string;
    you: string;
    assistant: string;
  };
  jobMatch: {
    intro: string;
    placeholder: string;
    textLabel: string;
    attachPdf: string;
    removePdf: string;
    submit: string;
    submitting: string;
    notPdf: string;
    pdfTooLarge: (maxMb: number) => string;
    worthKnowing: string;
    categories: Record<JobMatchCategoryKey, string>;
  };
}

export const assistantCopy: Record<LandingLocale, AssistantCopy> = {
  en: {
    launcherLabel: "Ask about me",
    title: "Ask about me",
    modeLabel: "Assistant mode",
    chatTab: "Chat",
    jobMatchTab: "Job match",
    betaBadge: "Beta",
    betaTooltip: "This assistant is in beta testing. Its answers may be inaccurate, so please verify anything important.",
    chat: {
      intro: "Ask me anything about my experience, skills, or background — I'll answer from my actual resume.",
      placeholder: "Ask a question…",
      questionLabel: "Your question",
      send: "Send",
      thinking: "Thinking…",
      you: "You: ",
      assistant: "Assistant: ",
    },
    jobMatch: {
      intro:
        "Paste a job description, attach it as a PDF, or both — I'll compare it against my real experience and show you how well it fits.",
      placeholder: "Paste the job description here…",
      textLabel: "Job description",
      attachPdf: "Attach PDF",
      removePdf: "Remove attached PDF",
      submit: "See my match",
      submitting: "Matching…",
      notPdf: "Please attach a PDF file.",
      pdfTooLarge: (maxMb) => `That PDF is too large (max ${maxMb} MB).`,
      worthKnowing: "Worth knowing",
      categories: {
        technicalSkills: "Technical skills",
        seniorityScope: "Seniority & scope",
        domainExperience: "Domain experience",
        softSkills: "Soft skills",
        languages: "Languages",
      },
    },
  },
  es: {
    launcherLabel: "Pregúntame sobre mí",
    title: "Pregúntame sobre mí",
    modeLabel: "Modo del asistente",
    chatTab: "Chat",
    jobMatchTab: "Compatibilidad",
    betaBadge: "Beta",
    betaTooltip:
      "Este asistente está en fase de pruebas beta. Sus respuestas pueden ser inexactas, así que verifica lo importante.",
    chat: {
      intro: "Pregúntame lo que quieras sobre mi experiencia, habilidades o trayectoria — responderé con base en mi hoja de vida real.",
      placeholder: "Escribe una pregunta…",
      questionLabel: "Tu pregunta",
      send: "Enviar",
      thinking: "Pensando…",
      you: "Tú: ",
      assistant: "Asistente: ",
    },
    jobMatch: {
      intro:
        "Pega una descripción de puesto, adjúntala como PDF o ambas — la compararé con mi experiencia real y te mostraré qué tan bien encaja.",
      placeholder: "Pega aquí la descripción del puesto…",
      textLabel: "Descripción del puesto",
      attachPdf: "Adjuntar PDF",
      removePdf: "Quitar PDF adjunto",
      submit: "Ver compatibilidad",
      submitting: "Comparando…",
      notPdf: "Adjunta un archivo PDF.",
      pdfTooLarge: (maxMb) => `Ese PDF es demasiado grande (máx. ${maxMb} MB).`,
      worthKnowing: "Vale la pena saber",
      categories: {
        technicalSkills: "Habilidades técnicas",
        seniorityScope: "Seniority y alcance",
        domainExperience: "Experiencia en el dominio",
        softSkills: "Habilidades blandas",
        languages: "Idiomas",
      },
    },
  },
};
