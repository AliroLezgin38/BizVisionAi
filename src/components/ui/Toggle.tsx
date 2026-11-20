import { useState } from "react";
import { cx } from "../../lib/utils";

export function Toggle({ defaultOn = false, onChange }: { defaultOn?: boolean; onChange?: (v: boolean) => void }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={() => { setOn(!on); onChange?.(!on); }}
      className={cx("relative h-7 w-[52px] shrink-0 rounded-full transition-colors", on ? "bg-brand" : "bg-slate-200")}
    >
      <span className={cx("absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all", on ? "left-[28px]" : "left-1")} />
    </button>
  );
}
