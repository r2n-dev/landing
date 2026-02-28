"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  List,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Timeline,
  TimelineItem,
  Title,
} from "@mantine/core";
import {
  IconArrowUpRight,
  IconCode,
  IconDeviceDesktopAnalytics,
  IconRocket,
} from "@tabler/icons-react";
import {
  landingLocaleStorageKey,
  normalizeLandingLocale,
  resolveLandingLocaleFromBrowser,
  type LandingLocale,
} from "@/components/landing/i18n";
import { ColorSchemeToggle } from "@/components/theme/ColorSchemeToggle";
import { LanguageSelector } from "@/components/theme/LanguageSelector";
import type { LandingAction, LandingContent } from "./landing.types";
import styles from "./LandingPage.module.scss";

interface LandingPageProps {
  initialLocale: LandingLocale;
  contentByLocale: Record<LandingLocale, LandingContent>;
}

const principleIcons = [IconCode, IconDeviceDesktopAnalytics, IconRocket];

function LandingActions({ actions }: { actions: LandingAction[] }) {
  return (
    <Group className={styles.actions} wrap="wrap">
      {actions.map((action) => (
        <Button
          key={`${action.label}-${action.href}`}
          component="a"
          href={action.href}
          variant={action.variant ?? "filled"}
          rightSection={action.external ? <IconArrowUpRight size={16} /> : undefined}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noreferrer" : undefined}
        >
          {action.label}
        </Button>
      ))}
    </Group>
  );
}

export function LandingPage({ initialLocale, contentByLocale }: LandingPageProps) {
  const [locale, setLocale] = useState<LandingLocale>(initialLocale);
  const content = contentByLocale[locale];

  useEffect(() => {
    const storedLocale = normalizeLandingLocale(
      window.localStorage.getItem(landingLocaleStorageKey),
    );

    if (storedLocale) {
      setLocale(storedLocale);
      return;
    }

    const browserLocale = resolveLandingLocaleFromBrowser();
    if (browserLocale !== initialLocale) {
      setLocale(browserLocale);
    }
  }, [initialLocale]);

  useEffect(() => {
    window.localStorage.setItem(landingLocaleStorageKey, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <main className={styles.page}>
      <Container size="lg" className={styles.container}>
        <Stack gap="xl">
          <Card className={styles.heroCard} padding="xl">
            <Group justify="space-between" className={styles.heroMeta}>
              <Badge variant="light" size="lg">
                {content.availabilityBadge}
              </Badge>

              <Group gap="xs" wrap="nowrap">
                <LanguageSelector
                  value={locale}
                  ariaLabel={content.controls.languageSelectorLabel}
                  onChange={setLocale}
                />
                <ColorSchemeToggle labels={content.controls} />
              </Group>
            </Group>

            <div className={styles.heroGrid}>
              <Stack gap="md">
                <Text className={styles.role} fw={700} c="dimmed" size="sm">
                  {content.role}
                </Text>
                <Title order={1}>{content.name}</Title>
                <Text size="lg" c="dimmed">
                  {content.intro}
                </Text>
                <Text>{content.about}</Text>
                <LandingActions actions={content.actions} />
              </Stack>

              <div className={styles.portraitFrame}>
                <Image
                  src={content.portraitUrl}
                  alt={content.name}
                  width={540}
                  height={540}
                  priority
                  className={styles.portrait}
                />
              </div>
            </div>
          </Card>

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
            {content.stats.map((item) => (
              <Card key={item.label} className={styles.statCard} padding="lg">
                <Text fw={700} size="xl">
                  {item.value}
                </Text>
                <Text c="dimmed" size="sm">
                  {item.label}
                </Text>
              </Card>
            ))}
          </SimpleGrid>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Card className={styles.principlesCard} padding="xl">
              <Title order={2} size="h3" className={styles.sectionHeading}>
                {content.sections.principlesTitle}
              </Title>

              <Stack gap="lg">
                {content.principles.map((principle, index) => {
                  const Icon = principleIcons[index % principleIcons.length];

                  return (
                    <div key={principle.title} className={styles.principleItem}>
                      <ThemeIcon size="lg" variant="light" radius="xl">
                        <Icon size={18} />
                      </ThemeIcon>
                      <div className={styles.principleText}>
                        <Text fw={600}>{principle.title}</Text>
                        <Text c="dimmed" size="sm">
                          {principle.description}
                        </Text>
                      </div>
                    </div>
                  );
                })}
              </Stack>
            </Card>

            <Card className={styles.experienceCard} padding="xl" id="experience">
              <Title order={2} size="h3" className={styles.sectionHeading}>
                {content.sections.experienceTitle}
              </Title>

              <Timeline active={content.experience.length} bulletSize={22} lineWidth={2}>
                {content.experience.map((item) => (
                  <TimelineItem
                    key={`${item.company}-${item.period}`}
                    title={
                      <Text fw={600} className={styles.timelineItemTitle}>
                        {item.role} - {item.company}
                      </Text>
                    }
                  >
                    <Text size="xs" c="dimmed" mb={4}>
                      {item.period}
                    </Text>
                    {item.location ? (
                      <Text size="xs" c="dimmed" mb={6}>
                        {item.location}
                      </Text>
                    ) : null}
                    <Text size="sm" c="dimmed">
                      {item.summary}
                    </Text>

                    {item.highlights && item.highlights.length > 0 ? (
                      <List size="sm" c="dimmed" mt={8}>
                        {item.highlights.map((highlight) => (
                          <List.Item key={highlight}>{highlight}</List.Item>
                        ))}
                      </List>
                    ) : null}
                  </TimelineItem>
                ))}
              </Timeline>

              <Button
                component="a"
                href={content.resumeAction.href}
                variant={content.resumeAction.variant ?? "light"}
                className={styles.resumeButton}
                download
              >
                {content.resumeAction.label}
              </Button>
            </Card>
          </SimpleGrid>

          <Card className={styles.contactCard} padding="xl" id="contact">
            <Stack gap="md">
              <Title order={2}>{content.sections.contactTitle}</Title>
              <Text c="dimmed" size="lg">
                {content.sections.contactIntro}
              </Text>
              <LandingActions actions={content.contactActions} />
            </Stack>
          </Card>
        </Stack>
      </Container>
    </main>
  );
}
