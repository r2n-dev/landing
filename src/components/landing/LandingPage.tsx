"use client";

import type { LandingLocale } from "@/components/landing/i18n";
import type { LandingContent } from "./landing.types";
import { useLocaleManager } from "./hooks/useLocaleManager";
import { andresProfileData } from "./profile-data";
import {
  CertificationsCard,
  ContactCard,
  EducationCard,
  ExperienceCard,
  HeroSection,
  PageFooter,
  PageHeader,
  PrinciplesCard,
  SkillsCard,
  StatsGrid,
} from "./sections";

interface LandingPageProps {
  initialLocale: LandingLocale;
  contentByLocale: Record<LandingLocale, LandingContent>;
}

export function LandingPage({ initialLocale, contentByLocale }: LandingPageProps) {
  const { locale, setLocale } = useLocaleManager(initialLocale);
  const content = contentByLocale[locale];

  return (
    <div className="flex min-h-screen flex-col">
      <PageHeader
        locale={locale}
        controls={content.controls}
        onLocaleChange={setLocale}
      />

      <main className="relative flex-1 pt-[clamp(2rem,4vw,4rem)] pb-[clamp(3rem,5vw,5rem)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_0%_10%,var(--primary-light)_0%,transparent_45%),radial-gradient(circle_at_90%_20%,var(--cyan-light)_0%,transparent_30%)] before:opacity-75">
        <div className="relative z-1 mx-auto max-w-page px-4">
          <div className="flex flex-col gap-8">
            <HeroSection
              availabilityBadge={content.availabilityBadge}
              role={content.role}
              name={content.name}
              intro={content.intro}
              about={content.about}
              portraitUrl={content.portraitUrl}
              actions={content.actions}
            />

            <StatsGrid stats={content.stats} />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-5">
                <PrinciplesCard
                  title={content.sections.principlesTitle}
                  principles={content.principles}
                />
                <EducationCard
                  title={content.sections.educationTitle}
                  items={content.education.items}
                />
                <CertificationsCard
                  title={content.sections.certificationsTitle}
                  verifyLabel={content.certifications.verifyLabel}
                  items={content.certifications.items}
                />
              </div>

              <div className="flex flex-col gap-5">
                <ExperienceCard
                  title={content.sections.experienceTitle}
                  showMoreLabel={content.sections.experienceShowMoreLabel}
                  showLessLabel={content.sections.experienceShowLessLabel}
                  experience={content.experience}
                  resumeAction={content.resumeAction}
                />
                <SkillsCard skills={content.skills} />
              </div>
            </div>

            <ContactCard
              title={content.sections.contactTitle}
              intro={content.sections.contactIntro}
              actions={content.contactActions}
            />
          </div>
        </div>
      </main>

      <PageFooter
        name={content.name}
        email={andresProfileData.email}
        linkedinHref={andresProfileData.links.linkedin.href}
        githubHref={andresProfileData.links.github.href}
        whatsappHref={andresProfileData.links.whatsapp.href}
        madeWithLabel={content.footer.madeWithLabel}
        inCountryLabel={content.footer.inCountryLabel}
      />
    </div>
  );
}
