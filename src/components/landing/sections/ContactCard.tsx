import { Card, Stack, Text, Title } from "@mantine/core";
import type { LandingAction } from "../landing.types";
import { LandingActions } from "./LandingActions";

interface ContactCardProps {
  title: string;
  intro: string;
  actions: LandingAction[];
}

export function ContactCard({ title, intro, actions }: ContactCardProps) {
  return (
    <Card padding="xl" id="contact">
      <Stack gap="md">
        <Title order={2}>{title}</Title>
        <Text c="dimmed" size="lg">
          {intro}
        </Text>
        <LandingActions actions={actions} />
      </Stack>
    </Card>
  );
}
