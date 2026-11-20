import { ChevronDown } from "lucide-react";
import { cx } from "../../lib/utils";

type Props = { label: string; value: string; select?: boolean; className?: string };

export function Field({ label, value, select, className }: Props) {
  return (
    <label className={cx("block", className)}>
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {select ? (
        <div className="flex h-12 items-center justify-between rounded-xl border border-line bg-white px-4 text-sm">
          {value}
          <ChevronDown size={14} className="text-muted" />
        </div>
      ) : (
        <input defaultValue={value} className="h-12 w-full rounded-xl border border-line bg-white px-4 text-sm outline-none focus:border-brand" />
      )}
    </label>
  );
}
