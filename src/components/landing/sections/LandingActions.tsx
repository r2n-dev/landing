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
import styles from "./LandingActions.module.scss";

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
    <Group gap="sm" wrap="wrap" className={styles.group}>
      {actions.map((action) => {
        const variant = action.variant ?? "filled";
        const Icon = action.icon ? actionIconMap[action.icon] : undefined;
        return (
          <Button
            key={`${action.label}-${action.href}`}
            component="a"
            href={action.href}
            variant={variant}
            radius="xl"
            size="md"
            className={`${styles.button} ${
              variant === "filled" ? styles.buttonFilled : styles.buttonSecondary
            }`}
            classNames={{ section: styles.section }}
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
