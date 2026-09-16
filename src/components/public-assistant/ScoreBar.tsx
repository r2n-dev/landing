function clampScore(score: number): number {
  return Math.max(0, Math.min(100, Math.round(score)));
}

interface ScoreBarProps {
  label: string;
  score: number;
  description?: string;
}

export function ScoreBar({ label, score, description }: ScoreBarProps) {
  const clamped = clampScore(score);
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{clamped}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-primary" style={{ width: `${clamped}%` }} />
      </div>
      {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
    </div>
  );
}

interface ScoreRingProps {
  score: number;
  size?: number;
}

export function ScoreRing({ score, size = 96 }: ScoreRingProps) {
  const clamped = clampScore(score);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped / 100);

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="-rotate-90" width={size} height={size}>
        <circle cx="50" cy="50" r={radius} strokeWidth="10" className="fill-none stroke-muted" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="fill-none stroke-primary"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-heading text-h3">{clamped}%</div>
    </div>
  );
}
