import {
  IconBolt,
  IconCode,
  IconDeviceDesktopAnalytics,
  IconGauge,
  IconRocket,
  IconShieldCheck,
  IconUsers,
} from "@tabler/icons-react";
import { Card } from "@/components/ui/card";
import { IconBadge } from "@/components/ui/icon-badge";
import type { LandingPrinciple } from "../landing.types";

const principleIcons = [
  IconRocket,
  IconCode,
  IconBolt,
  IconGauge,
  IconUsers,
  IconShieldCheck,
  IconDeviceDesktopAnalytics,
];

interface PrinciplesCardProps {
  title: string;
  principles: LandingPrinciple[];
}

export function PrinciplesCard({ title, principles }: PrinciplesCardProps) {
  return (
    <Card padding="xl">
      <h2 className="mb-4 font-heading text-h3">{title}</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {principles.map((principle, index) => {
          const Icon = principleIcons[index % principleIcons.length];

          return (
            <div
              key={principle.title}
              className="flex items-start gap-3 rounded-lg border border-border bg-background p-3 transition-[border-color,transform] duration-200 ease-[ease] hover:-translate-y-px hover:border-primary-light-foreground"
            >
              <IconBadge size="lg">
                <Icon size={18} />
              </IconBadge>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{principle.title}</p>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
