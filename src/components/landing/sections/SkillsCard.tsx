import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { LandingSkillsSection } from "../landing.types";

interface SkillsCardProps {
  skills: LandingSkillsSection;
}

export function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <Card padding="xl">
      <h2 className="mb-4 font-heading text-h3">{skills.title}</h2>

      <div className="flex flex-col gap-5">
        <div>
          <p className="mb-3 font-semibold">{skills.technicalLabel}</p>
          <div className="flex flex-wrap items-center gap-2.5">
            {skills.technical.map((skill) => (
              <Badge key={skill} variant="secondary" size="lg">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 font-semibold">{skills.softLabel}</p>
          <div className="flex flex-wrap items-center gap-2.5">
            {skills.soft.map((skill) => (
              <Badge key={skill} variant="primary-outline" size="lg">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 font-semibold">{skills.languagesLabel}</p>
          <div className="flex flex-col gap-2.5">
            {skills.languages.map((lang) => (
              <div key={lang.language} className="flex flex-wrap items-center gap-2.5">
                <p className="text-sm">{lang.language}</p>
                {lang.levels.map((level) => (
                  <Badge key={level} variant="outline" size="sm">
                    {level}
                  </Badge>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
