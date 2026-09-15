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
import { Button } from "@/components/ui/button";
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
    <div className="flex flex-wrap items-center gap-3 max-xs:w-full">
      {actions.map((action) => {
        const variant = action.variant ?? "filled";
        const Icon = action.icon ? actionIconMap[action.icon] : undefined;
        return (
          <Button
            key={`${action.label}-${action.href}`}
            asChild
            variant={variant === "filled" ? "cta" : "cta-secondary"}
            size="lg"
            className="max-xs:w-full"
          >
            <a
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noreferrer" : undefined}
            >
              {Icon ? <Icon size={18} data-icon="inline-start" /> : null}
              {action.label}
              {action.external ? <IconArrowUpRight size={16} data-icon="inline-end" /> : null}
            </a>
          </Button>
        );
      })}
    </div>
  );
}
