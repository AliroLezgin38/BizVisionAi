import type { ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";
import { cx } from "../../lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary"; arrow?: boolean };

export function Button({ variant = "primary", arrow, children, className, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={cx(
        "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 text-sm font-medium transition-colors",
        variant === "primary" ? "bg-brand text-white hover:bg-[#3752d8]" : "border border-line bg-white text-ink hover:bg-slate-50",
        className
      )}
    >
      {children}
      {arrow && <ArrowRight size={16} />}
    </button>
  );
}
