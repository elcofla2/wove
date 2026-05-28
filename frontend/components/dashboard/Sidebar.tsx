"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  CreditCard, 
  PenTool, 
  Link as LinkIcon,
  Rocket,
  CalendarClock
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Content Hub", href: "/dashboard", icon: LayoutDashboard },
    { name: "Growth Engine", href: "/dashboard/seo-plan", icon: Rocket },
    { name: "Schedule", href: "/dashboard/schedule", icon: CalendarClock },
    { name: "Brand Voice", href: "/dashboard/brand", icon: PenTool },
    { name: "Integrations", href: "/dashboard/integrations", icon: LinkIcon },
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-wovio-charcoal text-white h-screen fixed left-0 top-0 flex flex-col border-r border-white/10">
      
      <div className="h-16 flex items-center px-6 border-b border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-display font-bold tracking-tight">
            Wovio<span className="text-wovio-lavender">.io</span>
          </span>
        </Link>
      </div>

      <div className="p-4">
        <div className="bg-wovio-snow/10 rounded-xl p-3 mb-6">
          <p className="text-xs text-wovio-lavender font-bold uppercase tracking-wider mb-1">Current Workspace</p>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Acme Roofing Ltd</p>
            <span className="bg-white/20 text-[10px] px-2 py-0.5 rounded text-white font-bold uppercase">Free</span>
          </div>
        </div>

        <nav className="space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  isActive 
                    ? "bg-wovio-lavender/20 text-wovio-lavender" 
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-white/10">
        <Link 
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium text-zinc-400 hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </Link>
      </div>
    </aside>
  );
}
