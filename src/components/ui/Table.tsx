import type { ReactNode } from "react";

export function Table({ head, children }: { head: string[]; children: ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[620px] text-left text-sm">
        <thead>
          <tr className="bg-surface text-[11px] font-medium uppercase tracking-wide text-muted">
            {head.map((h) => (
              <th key={h} className="px-4 py-3.5 font-medium first:rounded-l-xl last:rounded-r-xl">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="[&_td]:px-4 [&_td]:py-5 [&_tr]:border-b [&_tr]:border-line/70 last:[&_tr]:border-0">{children}</tbody>
      </table>
    </div>
  );
}
