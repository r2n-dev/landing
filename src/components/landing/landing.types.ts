export type LandingActionVariant = "filled" | "light" | "default";
export type LandingActionIcon =
  | "mail"
  | "linkedin"
  | "github"
  | "whatsapp"
  | "briefcase"
  | "message";

export interface LandingAction {
  href: string;
  label: string;
  external?: boolean;
  variant?: LandingActionVariant;
  icon?: LandingActionIcon;
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
  companyUrl?: string;
  location?: string;
  summary: string;
  highlights?: string[];
}

export interface LandingEducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export interface LandingEducationSection {
  title: string;
  items: LandingEducationItem[];
}

export interface LandingCertificationItem {
  name: string;
  issuer: string;
  /** Localized validity line, e.g. "Issued Sep 2026 · Expires Sep 2027" */
  validity: string;
  badgeImageUrl: string;
  verificationUrl: string;
}

export interface LandingCertificationsSection {
  title: string;
  verifyLabel: string;
  items: LandingCertificationItem[];
}

export interface LandingSkillsSection {
  title: string;
  technicalLabel: string;
  softLabel: string;
  languagesLabel: string;
  technical: string[];
  soft: string[];
  languages: { language: string; levels: string[] }[];
}

export interface LandingSectionCopy {
  principlesTitle: string;
  experienceTitle: string;
  experienceShowMoreLabel: string;
  experienceShowLessLabel: string;
  educationTitle: string;
  certificationsTitle: string;
  skillsTitle: string;
  contactTitle: string;
  contactIntro: string;
}

export interface LandingControlCopy {
  languageSelectorLabel: string;
  switchToLightMode: string;
  switchToDarkMode: string;
}

export interface LandingContactLinks {
  email: string;
  linkedinHref: string;
  githubHref: string;
  whatsappHref: string;
}

export interface LandingFooterCopy {
  madeWithLabel: string;
  inCountryLabel: string;
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
  contact: LandingContactLinks;
  footer: LandingFooterCopy;
  actions: LandingAction[];
  stats: LandingStat[];
  principles: LandingPrinciple[];
  experience: LandingExperienceItem[];
  education: LandingEducationSection;
  certifications: LandingCertificationsSection;
  skills: LandingSkillsSection;
  resumeAction: LandingAction;
  contactActions: LandingAction[];
}
