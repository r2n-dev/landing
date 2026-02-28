export type LandingActionVariant = "filled" | "light" | "default";

export interface LandingAction {
  href: string;
  label: string;
  external?: boolean;
  variant?: LandingActionVariant;
}

export interface LandingStat {
  label: string;
  value: string;
}

export interface LandingPrinciple {
  title: string;
  description: string;
}

export interface LandingExperienceItem {
  period: string;
  role: string;
  company: string;
  location?: string;
  summary: string;
  highlights?: string[];
}

export interface LandingSectionCopy {
  principlesTitle: string;
  experienceTitle: string;
  contactTitle: string;
  contactIntro: string;
}

export interface LandingControlCopy {
  languageSelectorLabel: string;
  switchToLightMode: string;
  switchToDarkMode: string;
}

export interface LandingContent {
  locale: "en" | "es";
  availabilityBadge: string;
  role: string;
  name: string;
  intro: string;
  about: string;
  portraitUrl: string;
  sections: LandingSectionCopy;
  controls: LandingControlCopy;
  actions: LandingAction[];
  stats: LandingStat[];
  principles: LandingPrinciple[];
  experience: LandingExperienceItem[];
  resumeAction: LandingAction;
  contactActions: LandingAction[];
}
