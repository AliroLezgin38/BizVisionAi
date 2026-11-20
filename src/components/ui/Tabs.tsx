import { useState } from "react";
import { cx } from "../../lib/utils";

export function Tabs({ items, initial = 0, onChange }: { items: string[]; initial?: number; onChange?: (i: number) => void }) {
  const [a, setA] = useState(initial);
  return (
    <div className="flex gap-1 overflow-x-auto">
      {items.map((t, i) => (
        <button
          key={t}
          onClick={() => { setA(i); onChange?.(i); }}
          className={cx("whitespace-nowrap rounded-xl px-5 py-3 text-sm font-medium", i === a ? "bg-brand-50 text-brand" : "text-muted hover:text-ink")}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
