import { IconSchool } from "@tabler/icons-react";
import { Card } from "@/components/ui/card";
import { IconBadge } from "@/components/ui/icon-badge";
import type { LandingEducationItem } from "../landing.types";

interface EducationCardProps {
  title: string;
  items: LandingEducationItem[];
}

export function EducationCard({ title, items }: EducationCardProps) {
  return (
    <Card padding="xl">
      <h2 className="mb-4 font-heading text-h3">{title}</h2>

      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <div key={`${item.institution}-${item.period}`} className="flex flex-nowrap items-start gap-3">
            <IconBadge size="lg">
              <IconSchool size={18} />
            </IconBadge>
            <div>
              <p className="font-semibold">{item.degree}</p>
              <p className="text-sm text-muted-foreground">{item.institution}</p>
              <p className="text-xs text-muted-foreground">
                {item.period} · {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
