import { Card, Group, SimpleGrid, Text, ThemeIcon } from "@mantine/core";
import {
  IconCode,
  IconDeviceDesktopAnalytics,
  IconRocket,
} from "@tabler/icons-react";
import type { LandingStat } from "../landing.types";
import styles from "./StatsGrid.module.scss";

interface StatsGridProps {
  stats: LandingStat[];
}

const statIcons = [IconCode, IconDeviceDesktopAnalytics, IconRocket];
const statVariantClasses = [styles.cardBlue, styles.cardTeal, styles.cardGrape];

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
      {stats.map((item, index) => {
        const Icon = statIcons[index % statIcons.length];
        const variantClass = statVariantClasses[index % statVariantClasses.length];

        return (
          <Card key={item.label} className={`${styles.card} ${variantClass}`} padding="lg">
            <Group justify="space-between" align="flex-start" wrap="nowrap">
              <div className={styles.copy}>
                <Text fw={800} className={styles.value}>
                  {item.value}
                </Text>
                <Text c="dimmed" size="sm" className={styles.label}>
                  {item.label}
                </Text>
              </div>
              <ThemeIcon size={40} radius="xl" variant="light" className={styles.icon}>
                <Icon size={20} />
              </ThemeIcon>
            </Group>
          </Card>
        );
      })}
    </SimpleGrid>
  );
}
