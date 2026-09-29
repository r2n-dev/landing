import type { JobMatchResult as JobMatchResultData } from "@/lib/assistant/job-match";
import type { LandingLocale } from "@/components/landing/i18n";
import { JOB_MATCH_CATEGORY_KEYS } from "@/lib/assistant/job-match-constants";
import { assistantCopy } from "./assistant-copy";
import { ScoreBar, ScoreRing } from "./ScoreBar";

interface JobMatchResultProps {
  result: JobMatchResultData;
  locale: LandingLocale;
}

export function JobMatchResult({ result, locale }: JobMatchResultProps) {
  const copy = assistantCopy[locale].jobMatch;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <ScoreRing score={result.overallScore} />
        <p className="text-sm">{result.headline}</p>
      </div>

      <div className="flex flex-col gap-3">
        {JOB_MATCH_CATEGORY_KEYS.map((key) => (
          <ScoreBar
            key={key}
            label={copy.categories[key]}
            score={result.categories[key].score}
            description={result.categories[key].summary}
          />
        ))}
      </div>

      {result.gaps.length > 0 ? (
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">{copy.worthKnowing}</p>
          <ul className="list-disc ps-5 text-sm text-muted-foreground">
            {result.gaps.map((gap) => (
              <li key={gap}>{gap}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
