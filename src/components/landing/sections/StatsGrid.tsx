import { Card, SimpleGrid, Text } from "@mantine/core";
import type { LandingStat } from "../landing.types";
import styles from "./StatsGrid.module.scss";

interface StatsGridProps {
  stats: LandingStat[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
      {stats.map((item) => (
        <Card key={item.label} className={styles.card} padding="lg">
          <Text fw={700} size="xl">
            {item.value}
          </Text>
          <Text c="dimmed" size="sm">
            {item.label}
          </Text>
        </Card>
      ))}
    </SimpleGrid>
  );
}
