"use client";

import { useMemo, useState } from "react";
import { IconLoader2 } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useFileDownload } from "@/hooks/use-file-download";
import { buildResumeFilename } from "@/lib/download";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import type { LandingAction, LandingActionVariant, LandingExperienceItem } from "../landing.types";

interface ExperienceCardProps {
  title: string;
  showMoreLabel: string;
  showLessLabel: string;
  stackLabel: string;
  aiUsageLabel: string;
  experience: LandingExperienceItem[];
  resumeAction: LandingAction;
  name: string;
  locale: string;
}

const DEFAULT_VISIBLE_EXPERIENCE_ITEMS = 3;

const buttonVariantByActionVariant = {
  filled: "default",
  light: "secondary",
  default: "outline",
} as const satisfies Record<LandingActionVariant, string>;

export function ExperienceCard({
  title,
  showMoreLabel,
  showLessLabel,
  stackLabel,
  aiUsageLabel,
  experience,
  resumeAction,
  name,
  locale,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldShowToggle = experience.length > DEFAULT_VISIBLE_EXPERIENCE_ITEMS;
  const visibleExperience = useMemo(
    () =>
      isExpanded ? experience : experience.slice(0, DEFAULT_VISIBLE_EXPERIENCE_ITEMS),
    [experience, isExpanded],
  );

  const { download, isDownloading } = useFileDownload(resumeAction.href, () =>
    buildResumeFilename(name, locale),
  );

  return (
    <Card padding="xl" id="experience">
      <h2 className="mb-4 font-heading text-h3">{title}</h2>

      <Timeline active={visibleExperience.length} bulletSize={22} lineWidth={2}>
        {visibleExperience.map((item) => (
          <TimelineItem
            key={`${item.company}-${item.period}`}
            title={
              <p className="leading-[1.35] font-semibold">
                {item.role} –{" "}
                {item.companyUrl ? (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-anchor hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
              </p>
            }
          >
            <p className="mb-1 text-xs text-muted-foreground">{item.period}</p>
            {item.location ? (
              <p className="mb-1.5 text-xs text-muted-foreground">{item.location}</p>
            ) : null}
            <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>

            {item.highlights && item.highlights.length > 0 ? (
              <ul className="mt-3 list-outside list-disc space-y-1.5 ps-5 text-sm text-muted-foreground">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}

            {item.aiUsage ? (
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{aiUsageLabel}:</span> {item.aiUsage}
              </p>
            ) : null}

            {item.stack && item.stack.length > 0 ? (
              <ul aria-label={stackLabel} className="mt-3 flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <li key={tech}>
                    <Badge variant="secondary" size="sm">
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
            ) : null}
          </TimelineItem>
        ))}
      </Timeline>

      {shouldShowToggle ? (
        <Button
          variant="ghost"
          size="flush"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          className="mt-3"
        >
          {isExpanded ? showLessLabel : showMoreLabel}
        </Button>
      ) : null}

      <Button
        variant={buttonVariantByActionVariant[resumeAction.variant ?? "light"]}
        className="mt-4"
        onClick={download}
        disabled={isDownloading || !resumeAction.href}
        aria-busy={isDownloading}
      >
        {isDownloading ? <IconLoader2 className="size-4 animate-spin" aria-hidden /> : null}
        {resumeAction.label}
      </Button>
    </Card>
  );
}
