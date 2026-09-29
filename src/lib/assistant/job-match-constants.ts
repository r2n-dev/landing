// Shared between the server-only job-match model call and the client-side upload form,
// so this file must stay free of server-only imports.
export const MAX_JOB_DESCRIPTION_LENGTH = 8000;
export const MAX_JOB_DESCRIPTION_PDF_BYTES = 4 * 1024 * 1024;

/** Fixed, ordered dimensions every job match is scored on, so results always share one structure. */
export const JOB_MATCH_CATEGORY_KEYS = [
  "technicalSkills",
  "seniorityScope",
  "domainExperience",
  "softSkills",
  "languages",
] as const;

export type JobMatchCategoryKey = (typeof JOB_MATCH_CATEGORY_KEYS)[number];
