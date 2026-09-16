import type { JobMatchResult as JobMatchResultData } from "@/lib/assistant/job-match";
import { ScoreBar, ScoreRing } from "./ScoreBar";

interface JobMatchResultProps {
  result: JobMatchResultData;
}

export function JobMatchResult({ result }: JobMatchResultProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <ScoreRing score={result.overallScore} />
        <p className="text-sm">{result.headline}</p>
      </div>

      <div className="flex flex-col gap-3">
        {result.categories.map((category) => (
          <ScoreBar key={category.name} label={category.name} score={category.score} description={category.summary} />
        ))}
      </div>

      {result.gaps.length > 0 ? (
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Worth knowing</p>
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
