import { BarChart3, Bell, Building2, CalendarDays, FileText, LayoutGrid, Package, Settings, Sparkles, Upload } from "lucide-react";

export const navItems = [
  { to: "/", label: "Dashboard", title: "Dashboard", icon: LayoutGrid },
  { to: "/business-profile", label: "Business Profile", title: "Business Profile", icon: Building2 },
  { to: "/sales", label: "Sales & Data Import", title: "Sales & Data Import", icon: Upload },
  { to: "/contracts", label: "Contracts", title: "Contracts", icon: FileText },
  { to: "/tax-calendar", label: "Tax Calendar", title: "Tax Calendar", icon: CalendarDays },
  { to: "/analytics", label: "Financial Analytics", title: "Financial Analytics", icon: BarChart3 },
  { to: "/trends", label: "AI Trend Signals", title: "AI Trend Signals", icon: Sparkles },
  { to: "/stock", label: "Stock & Price Recommendations", title: "Stock & Pricing", icon: Package },
  { to: "/notifications", label: "Notifications", title: "Notifications", icon: Bell },
  { to: "/settings", label: "Settings", title: "Settings", icon: Settings },
];
