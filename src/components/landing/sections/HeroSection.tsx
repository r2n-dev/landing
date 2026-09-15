import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { LandingAction } from "../landing.types";
import { LandingActions } from "./LandingActions";

interface HeroSectionProps {
  availabilityBadge: string;
  role: string;
  name: string;
  intro: string;
  about: string;
  portraitUrl: string;
  actions: LandingAction[];
}

export function HeroSection({
  availabilityBadge,
  role,
  name,
  intro,
  about,
  portraitUrl,
  actions,
}: HeroSectionProps) {
  return (
    <Card variant="page" padding="xl">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <Badge variant="secondary" size="lg">
          {availabilityBadge}
        </Badge>
      </div>

      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(220px,320px)]">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-bold tracking-[0.08em] text-muted-foreground uppercase">
            {role}
          </p>
          <h1 className="font-heading text-h1">{name}</h1>
          <p className="text-lg text-muted-foreground">{intro}</p>
          <p>{about}</p>
          <LandingActions actions={actions} />
        </div>

        <div className="w-full max-w-[320px] self-stretch justify-self-center overflow-hidden rounded-2xl border border-border bg-background md:w-auto md:max-w-none md:justify-self-auto">
          <Image
            src={portraitUrl}
            alt={name}
            width={540}
            height={540}
            priority
            className="block h-full w-full object-cover"
          />
        </div>
      </div>
    </Card>
  );
}
