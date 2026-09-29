import type { LandingLocale } from "@/components/landing/i18n";

/** Server-side messages returned by the public assistant actions. */
export interface AssistantServerCopy {
  genericError: string;
  conversationInvalid: string;
  chatLimit: string;
  jobMatchLimit: string;
  jobMatchEmpty: string;
  jobMatchInvalid: string;
  pdfTooLarge: string;
  jobMatchFailed: string;
  notAJobDescription: string;
  offTopic: string;
}

export const assistantServerCopy: Record<LandingLocale, AssistantServerCopy> = {
  en: {
    genericError: "Something went wrong.",
    conversationInvalid: "The conversation is too long or empty. Clear it and try again.",
    chatLimit: "You've reached the hourly limit for questions. Please try again later.",
    jobMatchLimit: "You've reached the hourly limit for job matches. Please try again later.",
    jobMatchEmpty: "Paste a job description or attach a PDF.",
    jobMatchInvalid: "Invalid job description.",
    pdfTooLarge: "That PDF is too large (max 4 MB).",
    jobMatchFailed: "Could not score that job description. Try pasting it as text instead.",
    notAJobDescription: "That doesn't look like a job description. Paste the full job posting and try again.",
    offTopic: "I can only answer questions about my profile and professional experience.",
  },
  es: {
    genericError: "Algo salió mal.",
    conversationInvalid: "La conversación está vacía o es demasiado larga. Bórrala e inténtalo de nuevo.",
    chatLimit: "Alcanzaste el límite de preguntas por hora. Inténtalo de nuevo más tarde.",
    jobMatchLimit: "Alcanzaste el límite de comparaciones por hora. Inténtalo de nuevo más tarde.",
    jobMatchEmpty: "Pega una descripción del puesto o adjunta un PDF.",
    jobMatchInvalid: "Descripción del puesto no válida.",
    pdfTooLarge: "Ese PDF es demasiado grande (máx. 4 MB).",
    jobMatchFailed: "No se pudo evaluar esa descripción. Prueba pegándola como texto.",
    notAJobDescription: "Eso no parece una descripción de puesto. Pega la oferta completa e inténtalo de nuevo.",
    offTopic: "Solo puedo responder preguntas sobre mi perfil y mi experiencia profesional.",
  },
};

export function isLocale(value: unknown): value is LandingLocale {
  return value === "en" || value === "es";
}
