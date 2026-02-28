import { Button, Group } from "@mantine/core";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import type { LandingAction } from "../landing.types";

const contactIconMap: Record<string, typeof IconMail> = {
  mail: IconMail,
  linkedin: IconBrandLinkedin,
  github: IconBrandGithub,
};

interface LandingActionsProps {
  actions: LandingAction[];
}

export function LandingActions({ actions }: LandingActionsProps) {
  return (
    <Group gap="sm" wrap="wrap">
      {actions.map((action) => {
        const Icon = action.icon ? contactIconMap[action.icon] : undefined;
        return (
          <Button
            key={`${action.label}-${action.href}`}
            component="a"
            href={action.href}
            variant={action.variant ?? "filled"}
            leftSection={Icon ? <Icon size={18} /> : undefined}
            rightSection={action.external && !action.icon ? <IconArrowUpRight size={16} /> : undefined}
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
