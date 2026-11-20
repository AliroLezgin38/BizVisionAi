import { cx } from "../../lib/utils";

type Props = { parts: { v: number; color: string }[]; size?: number; className?: string };

export function Donut({ parts, size = 150, className }: Props) {
  const total = parts.reduce((sum, p) => sum + p.v, 0);

  // Dəyişən yenidən mənimsədilmir: hər seqmentin başlanğıcı əvvəlkilərin cəmindən hesablanır
  const segments = parts.map((p, i) => {
    const before = parts.slice(0, i).reduce((sum, q) => sum + q.v, 0);
    return { color: p.color, pct: (p.v / total) * 100, offset: (before / total) * 100 };
  });

  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={cx("-rotate-90", className)}>
      {segments.map((s, i) => (
        <circle
          key={i}
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke={s.color}
          strokeWidth="14"
          pathLength={100}
          strokeDasharray={`${s.pct} ${100 - s.pct}`}
          strokeDashoffset={-s.offset}
        />
      ))}
    </svg>
  );
}