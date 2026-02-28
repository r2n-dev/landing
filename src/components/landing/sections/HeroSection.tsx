import Image from "next/image";
import { Badge, Card, Group, Stack, Text, Title } from "@mantine/core";
import type { LandingAction } from "../landing.types";
import { LandingActions } from "./LandingActions";
import styles from "./HeroSection.module.scss";

interface HeroSectionProps {
  availabilityBadge: string;
  role: string;
  name: string;
  intro: string;
  about: string;
  portraitUrl: string;
  actions: LandingAction[];
}

export function HeroSection({
  availabilityBadge,
  role,
  name,
  intro,
  about,
  portraitUrl,
  actions,
}: HeroSectionProps) {
  return (
    <Card className={styles.card} padding="xl">
      <Group justify="space-between" className={styles.meta}>
        <Badge variant="light" size="lg">
          {availabilityBadge}
        </Badge>
      </Group>

      <div className={styles.grid}>
        <Stack gap="md">
          <Text className={styles.role} fw={700} c="dimmed" size="sm">
            {role}
          </Text>
          <Title order={1}>{name}</Title>
          <Text size="lg" c="dimmed">
            {intro}
          </Text>
          <Text>{about}</Text>
          <LandingActions actions={actions} />
        </Stack>

        <div className={styles.portraitFrame}>
          <Image
            src={portraitUrl}
            alt={name}
            width={540}
            height={540}
            priority
            className={styles.portrait}
          />
        </div>
      </div>
    </Card>
  );
}
