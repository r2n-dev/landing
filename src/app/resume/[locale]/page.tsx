import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { landingLocales, normalizeLandingLocale } from "@/components/landing/i18n";
import { landingContentByLocale } from "@/components/landing/landing-content";
import { andresProfileData } from "@/components/landing/profile-data";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: `${andresProfileData.name} | Resume`,
  robots: { index: false },
};

export function generateStaticParams() {
  return landingLocales.map((locale) => ({ locale }));
}

export default async function ResumePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = normalizeLandingLocale((await params).locale);
  if (!locale) {
    notFound();
  }
  const content = landingContentByLocale[locale];
  const isSpanish = locale === "es";
  const profile = andresProfileData;

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-6 bg-background px-6 py-10 text-sm text-foreground print:max-w-none print:bg-white print:p-0 print:text-black">
      <div className="flex justify-end print:hidden">
        <PrintButton label={isSpanish ? "Guardar como PDF" : "Save as PDF"} />
      </div>

      <header>
        <h1 className="font-heading text-h2">{profile.name}</h1>
        <p className="text-base font-semibold">{content.role}</p>
        <p className="text-muted-foreground print:text-black">
          {profile.location} · {profile.email} · {profile.phone}
        </p>
        <p className="text-muted-foreground print:text-black">
          {profile.links.linkedin.href} · {profile.links.github.href} · {profile.links.website.href}
        </p>
      </header>

      <section>
        <h2 className="mb-2 border-b border-border font-heading text-h3">
          {isSpanish ? "Perfil" : "Profile"}
        </h2>
        <p>{profile.summary[locale]}</p>
      </section>

      <section>
        <h2 className="mb-2 border-b border-border font-heading text-h3">{content.sections.experienceTitle}</h2>
        <div className="flex flex-col gap-4">
          {content.experience.map((item) => (
            <article key={`${item.company}-${item.period}`} className="break-inside-avoid">
              <p className="font-semibold">
                {item.role} — {item.company}
              </p>
              <p className="text-xs text-muted-foreground print:text-black">
                {item.period}
                {item.location ? ` · ${item.location}` : ""}
              </p>
              <p className="mt-1">{item.summary}</p>
              {item.highlights?.length ? (
                <ul className="mt-1 list-disc ps-5">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="break-inside-avoid">
        <h2 className="mb-2 border-b border-border font-heading text-h3">{content.sections.educationTitle}</h2>
        {content.education.items.map((item) => (
          <p key={item.institution}>
            <span className="font-semibold">{item.degree}</span> — {item.institution} · {item.period} ·{" "}
            {item.location}
          </p>
        ))}
      </section>

      <section className="break-inside-avoid">
        <h2 className="mb-2 border-b border-border font-heading text-h3">
          {content.sections.certificationsTitle}
        </h2>
        {content.certifications.items.map((item) => (
          <p key={item.verificationUrl}>
            <span className="font-semibold">{item.name}</span> — {item.issuer} · {item.validity} ·{" "}
            {item.verificationUrl}
          </p>
        ))}
      </section>

      <section className="break-inside-avoid">
        <h2 className="mb-2 border-b border-border font-heading text-h3">{content.skills.title}</h2>
        <p>
          <span className="font-semibold">{content.skills.technicalLabel}:</span>{" "}
          {content.skills.technical.join(", ")}
        </p>
        <p>
          <span className="font-semibold">{content.skills.softLabel}:</span> {content.skills.soft.join(", ")}
        </p>
        <p>
          <span className="font-semibold">{content.skills.languagesLabel}:</span>{" "}
          {content.skills.languages.map((l) => `${l.language} (${l.levels.join(", ")})`).join(", ")}
        </p>
      </section>
    </main>
  );
}
