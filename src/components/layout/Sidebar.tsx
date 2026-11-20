import { NavLink } from "react-router-dom";
import { ArrowRight, ChevronDown, Sparkles, X } from "lucide-react";
import { cx } from "../../lib/utils";
import { Avatar } from "./Avatar";
import { Logo } from "./Logo";
import { navItems } from "./navItems";

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-navy/50 lg:hidden" onClick={onClose} />}
      <aside className={cx("fixed inset-y-0 left-0 z-40 flex w-[248px] flex-col bg-navy px-5 py-6 transition-transform lg:translate-x-0", open ? "translate-x-0" : "-translate-x-full")}>
        <div className="flex items-center justify-between">
          <Logo />
          <button className="text-white lg:hidden" onClick={onClose}><X size={20} /></button>
        </div>

        <div className="mt-8 px-2 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">Workspace</div>
        <nav className="sidebar-scroll mt-3 flex-1 space-y-1 overflow-y-auto pr-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end
              onClick={onClose}
              className={({ isActive }) =>
                cx("flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] leading-tight", isActive ? "bg-navy-soft font-medium text-white" : "text-slate-300 hover:bg-navy-soft/60 hover:text-white")
              }
            >
              <Icon size={20} strokeWidth={1.6} className="shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-4 rounded-2xl bg-navy-soft p-4">
          <div className="flex items-center gap-2 text-sm text-slate-200"><Sparkles size={16} className="text-indigo-300" /> Biznesiniz üçün AI</div>
          <div className="mt-2 font-semibold text-white">BizVision Pro</div>
          <div className="mt-1 text-xs text-slate-400">Bütün imkanlar bir yerdə.</div>
          <a href="#" className="mt-3 inline-flex items-center gap-2 text-xs text-white">Planı idarə et <ArrowRight size={14} /></a>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Avatar size={40} />
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-white">Elvin Məmmədov</div>
            <div className="text-xs text-slate-400">Biznes sahibi</div>
          </div>
          <ChevronDown size={16} className="text-slate-400" />
        </div>
      </aside>
    </>
  );
}