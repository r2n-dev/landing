import {
  Anchor,
  Button,
  Card,
  List,
  Text,
  Timeline,
  TimelineItem,
  Title,
} from "@mantine/core";
import type { LandingAction, LandingExperienceItem } from "../landing.types";
import styles from "./ExperienceCard.module.scss";

interface ExperienceCardProps {
  title: string;
  experience: LandingExperienceItem[];
  resumeAction: LandingAction;
}

export function ExperienceCard({ title, experience, resumeAction }: ExperienceCardProps) {
  return (
    <Card padding="xl" id="experience">
      <Title order={2} size="h3" className={styles.heading}>
        {title}
      </Title>

      <Timeline active={experience.length} bulletSize={22} lineWidth={2}>
        {experience.map((item) => (
          <TimelineItem
            key={`${item.company}-${item.period}`}
            title={
              <Text fw={600} className={styles.timelineTitle}>
                {item.role} –{" "}
                {item.companyUrl ? (
                  <Anchor href={item.companyUrl} target="_blank" rel="noreferrer" inherit>
                    {item.company}
                  </Anchor>
                ) : (
                  item.company
                )}
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
        href={resumeAction.href}
        variant={resumeAction.variant ?? "light"}
        className={styles.resumeButton}
        download
      >
        {resumeAction.label}
      </Button>
    </Card>
  );
}
