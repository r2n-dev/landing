import { Card } from "@/components/ui/card";
import type { LandingAction } from "../landing.types";
import { LandingActions } from "./LandingActions";

interface ContactCardProps {
  title: string;
  intro: string;
  actions: LandingAction[];
}

export function ContactCard({ title, intro, actions }: ContactCardProps) {
  return (
    <Card padding="xl" id="contact">
      <div className="flex flex-col gap-4">
        <h2 className="font-heading text-h2">{title}</h2>
        <p className="text-lg text-muted-foreground">{intro}</p>
        <LandingActions actions={actions} />
      </div>
    </Card>
  );
}
