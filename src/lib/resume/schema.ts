import { z } from "zod";

/**
 * Shape of `resume_versions.data`. Bump RESUME_SCHEMA_VERSION when the shape changes
 * in a way older rows don't satisfy.
 */
export const RESUME_SCHEMA_VERSION = 1;

export const localizedCopySchema = z.strictObject({
  en: z.string(),
  es: z.string(),
});

export const profileLinkSchema = z.strictObject({
  label: z.string(),
  href: z.string(),
});

export const profileExperienceSchema = z.strictObject({
  id: z.string(),
  period: localizedCopySchema,
  role: localizedCopySchema,
  company: z.string(),
  companyUrl: z.string().optional(),
  location: localizedCopySchema,
  summary: localizedCopySchema,
  highlights: z.array(localizedCopySchema),
});

export const profileEducationSchema = z.strictObject({
  degree: localizedCopySchema,
  institution: z.string(),
  period: z.string(),
  location: z.string(),
});

export const profileCertificationSchema = z.strictObject({
  name: z.string(),
  issuer: z.string(),
  issuedOn: z.iso.date(),
  expiresOn: z.iso.date().optional(),
  badgeImageUrl: z.string(),
  verificationUrl: z.string(),
});

export const profileLanguageSchema = z.strictObject({
  language: localizedCopySchema,
  levels: z.array(localizedCopySchema),
});

export const resumeDataSchema = z.strictObject({
  name: z.string(),
  role: localizedCopySchema,
  location: z.string(),
  phone: z.string(),
  email: z.email(),
  portraitUrl: z.string(),
  summary: localizedCopySchema,
  links: z.strictObject({
    linkedin: profileLinkSchema,
    github: profileLinkSchema,
    whatsapp: profileLinkSchema,
    website: profileLinkSchema,
  }),
  resumeAssets: z.strictObject({
    en: z.string(),
    es: z.string(),
  }),
  experiences: z.array(profileExperienceSchema),
  skills: z.strictObject({
    technical: z.array(z.string()),
    soft: z.array(localizedCopySchema),
    languages: z.array(profileLanguageSchema),
  }),
  education: z.array(profileEducationSchema),
  certifications: z.array(profileCertificationSchema),
});

export type LocalizedCopy = z.infer<typeof localizedCopySchema>;
export type ProfileLink = z.infer<typeof profileLinkSchema>;
export type ProfileExperience = z.infer<typeof profileExperienceSchema>;
export type ProfileEducation = z.infer<typeof profileEducationSchema>;
export type ProfileCertification = z.infer<typeof profileCertificationSchema>;
export type ProfileLanguage = z.infer<typeof profileLanguageSchema>;
export type ResumeData = z.infer<typeof resumeDataSchema>;
