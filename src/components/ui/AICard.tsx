import type { ReactNode } from "react";
import { cx } from "../../lib/utils";

export function AICard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("rounded-2xl border border-ai-line bg-ai p-5 sm:p-6", className)}>{children}</div>;
}
