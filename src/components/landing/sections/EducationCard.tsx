import { Card, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconSchool } from "@tabler/icons-react";
import type { LandingEducationItem } from "../landing.types";

interface EducationCardProps {
  title: string;
  items: LandingEducationItem[];
}

export function EducationCard({ title, items }: EducationCardProps) {
  return (
    <Card padding="xl">
      <Title order={2} size="h3" mb="md">
        {title}
      </Title>

      <Stack gap="lg">
        {items.map((item) => (
          <Group key={`${item.institution}-${item.period}`} gap="sm" align="flex-start" wrap="nowrap">
            <ThemeIcon size="lg" variant="light" radius="xl">
              <IconSchool size={18} />
            </ThemeIcon>
            <div>
              <Text fw={600}>{item.degree}</Text>
              <Text size="sm" c="dimmed">
                {item.institution}
              </Text>
              <Text size="xs" c="dimmed">
                {item.period} · {item.location}
              </Text>
            </div>
          </Group>
        ))}
      </Stack>
    </Card>
  );
}
