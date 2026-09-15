import { createElement, type ReactElement } from "react";
import { renderToBuffer, type DocumentProps } from "@react-pdf/renderer";
import { landingLocales, normalizeLandingLocale } from "@/components/landing/i18n";
import { landingContentByLocale } from "@/components/landing/landing-content";
import { andresProfileData } from "@/components/landing/profile-data";
import { ResumeDocument } from "@/components/resume/ResumeDocument";

// Rendered once per locale at build time; the PDF is served as a static file.
export const dynamic = "force-static";

export function generateStaticParams() {
  return landingLocales.map((locale) => ({ locale }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const locale = normalizeLandingLocale((await params).locale);
  if (!locale) {
    return new Response("Not found", { status: 404 });
  }

  const buffer = await renderToBuffer(
    createElement(ResumeDocument, {
      locale,
      content: landingContentByLocale[locale],
      profile: andresProfileData,
    }) as ReactElement<DocumentProps>,
  );
  const filename = `${andresProfileData.name.replace(/\s+/g, "-")}-Resume-${locale.toUpperCase()}.pdf`;

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${filename}"`,
      "X-Robots-Tag": "noindex",
    },
  });
}
