"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Fingerprint, Blocks, Settings, Sparkles, ChevronsUpDown, Lock, CreditCard, Code2, Target } from "lucide-react";

const links = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "SEO Plan", href: "/dashboard/seo-plan", icon: Target },
  { name: "Content Hub", href: "/dashboard/content-hub", icon: FileText },
  { name: "Brand Identity", href: "/dashboard/brand-identity", icon: Fingerprint },
  { name: "Integrations", href: "/dashboard/integrations", icon: Blocks },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "Developer API", href: "/dashboard/developer", icon: Code2 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-zinc-200 h-screen sticky top-0 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-zinc-100">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#FF8FA3] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-jakarta font-bold text-xl text-[#18181B] tracking-tight">Wovio</span>
        </Link>
      </div>

      {/* Workspace Switcher */}
      <div className="px-4 pt-4">
        <div className="relative">
          {/* Active Brand */}
          <div className="flex items-center justify-between bg-white border border-zinc-200 rounded-xl p-2 shadow-sm hover:border-zinc-300 transition-colors cursor-pointer">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center text-white font-bold text-sm">
                AS
              </div>
              <span className="font-medium text-sm text-[#18181B]">Acme Solar</span>
            </div>
            <ChevronsUpDown className="w-4 h-4 text-zinc-400" />
          </div>

          {/* Dropdown Menu (Simulated Open) */}
          <div className="absolute top-full left-0 w-full mt-2 bg-white border border-zinc-200 rounded-xl shadow-lg shadow-zinc-200/50 p-1 z-20">
            <div className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-zinc-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-md bg-zinc-50 border border-zinc-200 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-slate-500" />
                </div>
                <span className="text-sm font-medium text-slate-600">Add New Brand</span>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-[#B28DFF]/20 text-[10px] font-bold text-slate-800 uppercase tracking-wide">
                Pro Feature
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 mt-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? "bg-[#B28DFF]/15 text-[#B28DFF]" 
                  : "text-[#71717A] hover:text-[#18181B] hover:bg-zinc-50"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-[#B28DFF]" : "text-[#71717A]"}`} />
              {link.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-zinc-100">
        <div className="bg-[#FAFAFA] rounded-xl p-4 border border-zinc-200">
          <p className="text-xs font-semibold text-[#18181B] mb-1 uppercase tracking-wider">Pro Plan</p>
          <p className="text-xs text-[#71717A] mb-3">14/15 posts generated this month.</p>
          <button className="w-full py-2 px-3 bg-[#FF8FA3] hover:bg-[#ff7a91] text-white rounded-lg text-sm font-medium transition-colors">
            Upgrade Plan
          </button>
        </div>
      </div>
    </aside>
  );
}
