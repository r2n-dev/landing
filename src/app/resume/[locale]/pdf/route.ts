import { createElement, type ReactElement } from "react";
import { unstable_cache } from "next/cache";
import { renderToBuffer, type DocumentProps } from "@react-pdf/renderer";
import { normalizeLandingLocale, type LandingLocale } from "@/components/landing/i18n";
import { getLandingContentByLocale } from "@/components/landing/landing-content";
import type { CandidateProfile } from "@/components/landing/profile-data";
import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { RESUME_CACHE_TAG, getResume } from "@/lib/resume/get-resume";

// Served on demand so the PDF follows the latest resume version.
export const dynamic = "force-dynamic";

// The profile is part of the cache key, so a new resume version renders a new PDF.
const renderResumePdf = unstable_cache(
  async (locale: LandingLocale, profile: CandidateProfile): Promise<string> => {
    const buffer = await renderToBuffer(
      createElement(ResumeDocument, {
        locale,
        content: getLandingContentByLocale(profile)[locale],
        profile,
      }) as ReactElement<DocumentProps>,
    );
    return buffer.toString("base64");
  },
  ["resume-pdf"],
  { tags: [RESUME_CACHE_TAG] },
);

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const locale = normalizeLandingLocale((await params).locale);
  if (!locale) {
    return new Response("Not found", { status: 404 });
  }

  const profile = await getResume();
  const pdf = Buffer.from(await renderResumePdf(locale, profile), "base64");
  const filename = `${profile.name.replace(/\s+/g, "-")}-Resume-${locale.toUpperCase()}.pdf`;

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${filename}"`,
      "X-Robots-Tag": "noindex",
    },
  });
}
