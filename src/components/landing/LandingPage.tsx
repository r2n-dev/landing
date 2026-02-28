"use client";

import { Container, SimpleGrid, Stack } from "@mantine/core";
import type { LandingLocale } from "@/components/landing/i18n";
import type { LandingContent } from "./landing.types";
import { useLocaleManager } from "./hooks/useLocaleManager";
import { andresProfileData } from "./profile-data";
import {
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
import styles from "./LandingPage.module.scss";

interface LandingPageProps {
  initialLocale: LandingLocale;
  contentByLocale: Record<LandingLocale, LandingContent>;
}

export function LandingPage({ initialLocale, contentByLocale }: LandingPageProps) {
  const { locale, setLocale } = useLocaleManager(initialLocale);
  const content = contentByLocale[locale];

  return (
    <div className={styles.layout}>
      <PageHeader
        locale={locale}
        controls={content.controls}
        onLocaleChange={setLocale}
      />

      <main className={styles.page}>
        <Container size="lg" className={styles.container}>
          <Stack gap="xl">
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

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
              <PrinciplesCard
                title={content.sections.principlesTitle}
                principles={content.principles}
              />
              <ExperienceCard
                title={content.sections.experienceTitle}
                experience={content.experience}
                resumeAction={content.resumeAction}
              />
            </SimpleGrid>

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
              <EducationCard
                title={content.sections.educationTitle}
                items={content.education.items}
              />
              <SkillsCard skills={content.skills} />
            </SimpleGrid>

            <ContactCard
              title={content.sections.contactTitle}
              intro={content.sections.contactIntro}
              actions={content.contactActions}
            />
          </Stack>
        </Container>
      </main>

      <PageFooter
        name={content.name}
        email={andresProfileData.email}
        linkedinHref={andresProfileData.links.linkedin.href}
        githubHref={andresProfileData.links.github.href}
        madeWithLabel={content.footer.madeWithLabel}
        inCountryLabel={content.footer.inCountryLabel}
      />
    </div>
  );
}
