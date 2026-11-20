import type { ReactNode } from "react";
import { cx } from "../../lib/utils";

const tones = {
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  blue: "bg-brand-50 text-brand",
  purple: "bg-ai text-ai-text",
  gray: "bg-slate-100 text-muted",
} as const;
export type Tone = keyof typeof tones;

export function Badge({ tone = "gray", children, className }: { tone?: Tone; children: ReactNode; className?: string }) {
  return (
    <span className={cx("inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-medium", tones[tone], className)}>
      {children}
    </span>
  );
}
