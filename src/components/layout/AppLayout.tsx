import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { navItems } from "./navItems";

export default function AppLayout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const current = navItems.find((n) => n.to === pathname) ?? navItems[0];

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="lg:pl-[248px]">
        <Topbar title={current.title} onMenu={() => setOpen(true)} />
        <main className="mx-auto max-w-[1440px] space-y-6 px-4 py-6 sm:px-8 sm:py-8"><Outlet /></main>
      </div>
    </div>
  );
}
