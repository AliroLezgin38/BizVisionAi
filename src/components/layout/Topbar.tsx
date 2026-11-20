import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import { Avatar } from "./Avatar";

export function Topbar({ title, onMenu }: { title: string; onMenu: () => void }) {
  return (
    <header className="sticky top-0 z-20 flex h-[76px] items-center gap-3 border-b border-line bg-white px-4 sm:h-[87px] sm:px-8">
      <button className="rounded-lg p-2 lg:hidden" onClick={onMenu} aria-label="Menyu"><Menu size={22} /></button>
      <div className="min-w-0 flex-1">
        <div className="hidden text-sm text-muted sm:block">Workspace / {title}</div>
        <div className="truncate text-lg font-semibold sm:text-xl">{title}</div>
      </div>
      <div className="hidden h-[50px] w-[270px] items-center gap-3 rounded-xl bg-surface px-4 text-sm text-muted md:flex">
        <Search size={18} /> <span className="flex-1">Hər yerdə axtar...</span> <span className="text-xs">⌘ K</span>
      </div>
      <button className="relative rounded-lg p-2" aria-label="Bildirişlər"><Bell size={22} /><i className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand" /></button>
      <Avatar size={44} />
      <ChevronDown size={16} className="hidden text-muted sm:block" />
    </header>
  );
}
