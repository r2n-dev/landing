"use client";

import { useMemo, useState } from "react";
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
  showMoreLabel: string;
  showLessLabel: string;
  experience: LandingExperienceItem[];
  resumeAction: LandingAction;
}

const DEFAULT_VISIBLE_EXPERIENCE_ITEMS = 3;

export function ExperienceCard({
  title,
  showMoreLabel,
  showLessLabel,
  experience,
  resumeAction,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldShowToggle = experience.length > DEFAULT_VISIBLE_EXPERIENCE_ITEMS;
  const visibleExperience = useMemo(
    () =>
      isExpanded ? experience : experience.slice(0, DEFAULT_VISIBLE_EXPERIENCE_ITEMS),
    [experience, isExpanded],
  );

  return (
    <Card padding="xl" id="experience">
      <Title order={2} size="h3" className={styles.heading}>
        {title}
      </Title>

      <Timeline active={visibleExperience.length} bulletSize={22} lineWidth={2}>
        {visibleExperience.map((item) => (
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

      {shouldShowToggle ? (
        <Button
          variant="subtle"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          className={styles.expandButton}
        >
          {isExpanded ? showLessLabel : showMoreLabel}
        </Button>
      ) : null}

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
