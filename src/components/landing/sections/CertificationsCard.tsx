import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LandingCertificationItem } from "../landing.types";

interface CertificationsCardProps {
  title: string;
  verifyLabel: string;
  items: LandingCertificationItem[];
}

export function CertificationsCard({ title, verifyLabel, items }: CertificationsCardProps) {
  return (
    <Card padding="xl">
      <h2 className="mb-4 font-heading text-h3">{title}</h2>

      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <div key={item.verificationUrl} className="flex flex-nowrap items-start gap-4">
            {/* Decorative: the credential name is rendered as text next to it */}
            <Image
              src={item.badgeImageUrl}
              alt=""
              width={80}
              height={80}
              className="size-20 shrink-0"
            />
            <div className="flex flex-col items-start">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.issuer}</p>
              <p className="text-xs text-muted-foreground">{item.validity}</p>
              <Button asChild variant="secondary" size="sm" className="mt-3">
                <a href={item.verificationUrl} target="_blank" rel="noreferrer">
                  {verifyLabel}
                  <IconArrowUpRight size={14} data-icon="inline-end" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
