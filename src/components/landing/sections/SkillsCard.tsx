import { Badge, Card, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import type { LandingSkillsSection } from "../landing.types";

interface SkillsCardProps {
  skills: LandingSkillsSection;
}

export function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <Card padding="xl">
      <Title order={2} size="h3" mb="md">
        {skills.title}
      </Title>

      <Stack gap="lg">
        <div>
          <Text fw={600} mb="sm">{skills.technicalLabel}</Text>
          <Group gap="xs">
            {skills.technical.map((skill) => (
              <Badge key={skill} variant="light" size="lg">
                {skill}
              </Badge>
            ))}
          </Group>
        </div>

        <div>
          <Text fw={600} mb="sm">{skills.softLabel}</Text>
          <Group gap="xs">
            {skills.soft.map((skill) => (
              <Badge key={skill} variant="outline" size="lg">
                {skill}
              </Badge>
            ))}
          </Group>
        </div>

        <div>
          <Text fw={600} mb="sm">{skills.languagesLabel}</Text>
          <Stack gap="xs">
            {skills.languages.map((lang) => (
              <Group key={lang.language} gap="xs">
                <Text size="sm">{lang.language}</Text>
                <Badge variant="default" size="sm">{lang.level}</Badge>
              </Group>
            ))}
          </Stack>
        </div>
      </Stack>
    </Card>
  );
}
