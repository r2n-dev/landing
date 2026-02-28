import { Card, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import {
  IconCode,
  IconDeviceDesktopAnalytics,
  IconRocket,
} from "@tabler/icons-react";
import type { LandingPrinciple } from "../landing.types";
import styles from "./PrinciplesCard.module.scss";

const principleIcons = [IconCode, IconDeviceDesktopAnalytics, IconRocket];

interface PrinciplesCardProps {
  title: string;
  principles: LandingPrinciple[];
}

export function PrinciplesCard({ title, principles }: PrinciplesCardProps) {
  return (
    <Card className={styles.card} padding="xl">
      <Title order={2} size="h3" className={styles.heading}>
        {title}
      </Title>

      <Stack gap="lg">
        {principles.map((principle, index) => {
          const Icon = principleIcons[index % principleIcons.length];

          return (
            <div key={principle.title} className={styles.item}>
              <ThemeIcon size="lg" variant="light" radius="xl">
                <Icon size={18} />
              </ThemeIcon>
              <div className={styles.text}>
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
  );
}
