import { Card, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core";
import {
  IconBolt,
  IconCode,
  IconDeviceDesktopAnalytics,
  IconGauge,
  IconRocket,
  IconShieldCheck,
  IconUsers,
} from "@tabler/icons-react";
import type { LandingPrinciple } from "../landing.types";
import styles from "./PrinciplesCard.module.scss";

const principleIcons = [
  IconRocket,
  IconCode,
  IconBolt,
  IconGauge,
  IconUsers,
  IconShieldCheck,
  IconDeviceDesktopAnalytics,
];

interface PrinciplesCardProps {
  title: string;
  principles: LandingPrinciple[];
}

export function PrinciplesCard({ title, principles }: PrinciplesCardProps) {
  return (
    <Card padding="xl">
      <Title order={2} size="h3" className={styles.heading}>
        {title}
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {principles.map((principle, index) => {
          const Icon = principleIcons[index % principleIcons.length];

          return (
            <div key={principle.title} className={styles.item}>
              <ThemeIcon size="lg" variant="light" radius="xl" className={styles.icon}>
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
      </SimpleGrid>
    </Card>
  );
}
