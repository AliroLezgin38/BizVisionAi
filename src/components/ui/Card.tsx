import type { ReactNode } from "react";
import { cx } from "../../lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6", className)}>{children}</div>;
}
