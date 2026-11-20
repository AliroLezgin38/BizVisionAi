import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function TextLink({ children, href = "#" }: { children: ReactNode; href?: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline">
      {children} <ArrowRight size={14} />
    </a>
  );
}
