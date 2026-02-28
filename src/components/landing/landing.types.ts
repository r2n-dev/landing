export type LandingActionVariant = "filled" | "light" | "default";

export interface LandingAction {
  href: string;
  label: string;
  external?: boolean;
  variant?: LandingActionVariant;
  icon?: string;
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

export interface LandingSkillsSection {
  title: string;
  technicalLabel: string;
  softLabel: string;
  languagesLabel: string;
  technical: string[];
  soft: string[];
  languages: { language: string; level: string }[];
}

export interface LandingSectionCopy {
  principlesTitle: string;
  experienceTitle: string;
  skillsTitle: string;
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
  skills: LandingSkillsSection;
  resumeAction: LandingAction;
  contactActions: LandingAction[];
}
