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
  summary: string;
}

export interface LandingContent {
  role: string;
  name: string;
  intro: string;
  about: string;
  portraitUrl: string;
  actions: LandingAction[];
  stats: LandingStat[];
  principles: LandingPrinciple[];
  experience: LandingExperienceItem[];
  contactActions: LandingAction[];
}
