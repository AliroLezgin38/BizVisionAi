import { Card } from "./Card";
import { cx } from "../../lib/utils";

type Props = { label: string; value: string; strong?: string; note?: string; tone?: string };

export function StatCard({ label, value, strong, note, tone = "text-emerald-700" }: Props) {
  return (
    <Card>
      <div className="text-sm text-muted">{label}</div>
      <div className="mt-3 text-[32px] font-semibold leading-none tracking-tight">{value}</div>
      <div className="mt-4 flex flex-wrap items-center gap-x-2 text-xs text-muted">
        {strong && <span className={cx("font-medium", tone)}>{strong}</span>}
        {note && <span>{note}</span>}
      </div>
    </Card>
  );
}
