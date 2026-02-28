import { Button, Group } from "@mantine/core";
import {
  IconArrowUpRight,
  IconBrandWhatsapp,
  IconBriefcase,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMessageCircle,
  type TablerIcon,
} from "@tabler/icons-react";
import type { LandingAction } from "../landing.types";

const actionIconMap: Record<NonNullable<LandingAction["icon"]>, TablerIcon> = {
  mail: IconMail,
  linkedin: IconBrandLinkedin,
  github: IconBrandGithub,
  whatsapp: IconBrandWhatsapp,
  briefcase: IconBriefcase,
  message: IconMessageCircle,
};

interface LandingActionsProps {
  actions: LandingAction[];
}

export function LandingActions({ actions }: LandingActionsProps) {
  return (
    <Group gap="sm" wrap="wrap">
      {actions.map((action) => {
        const Icon = action.icon ? actionIconMap[action.icon] : undefined;
        return (
          <Button
            key={`${action.label}-${action.href}`}
            component="a"
            href={action.href}
            variant={action.variant ?? "filled"}
            leftSection={Icon ? <Icon size={18} /> : undefined}
            rightSection={action.external ? <IconArrowUpRight size={16} /> : undefined}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noreferrer" : undefined}
          >
            {action.label}
          </Button>
        );
      })}
    </Group>
  );
}
