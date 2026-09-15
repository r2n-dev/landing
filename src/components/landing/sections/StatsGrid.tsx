import {
  IconCode,
  IconDeviceDesktopAnalytics,
  IconRocket,
} from "@tabler/icons-react";
import { IconBadge } from "@/components/ui/icon-badge";
import type { LandingStat } from "../landing.types";

interface StatsGridProps {
  stats: LandingStat[];
}

const statIcons = [IconCode, IconDeviceDesktopAnalytics, IconRocket];
const statAccentClasses = ["before:bg-blue", "before:bg-teal", "before:bg-grape"];

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((item, index) => {
        const Icon = statIcons[index % statIcons.length];
        const accentClass = statAccentClasses[index % statAccentClasses.length];

        return (
          <div
            key={item.label}
            className={`relative flex flex-col overflow-hidden rounded-2xl border border-border bg-linear-160/srgb from-background from-10% to-surface-hover p-5 text-foreground transition-[transform,box-shadow,border-color] duration-200 ease-[ease] before:absolute before:inset-x-0 before:top-0 before:h-0.75 before:opacity-85 hover:-translate-y-0.5 hover:border-primary-light-foreground hover:shadow-sm ${accentClass}`}
          >
            <div className="flex flex-nowrap items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="mb-2.5 text-[clamp(2rem,2.8vw,2.35rem)] leading-none font-extrabold tracking-[-0.03em]">
                  {item.value}
                </p>
                <p className="max-w-[28ch] text-sm text-muted-foreground">{item.label}</p>
              </div>
              <IconBadge className="ml-3 size-10">
                <Icon size={20} />
              </IconBadge>
            </div>
          </div>
        );
      })}
    </div>
  );
}
