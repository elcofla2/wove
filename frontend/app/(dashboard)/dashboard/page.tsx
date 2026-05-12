"use client";

import { Button } from "@/components/ui/button";
import { Plus, Zap, Activity, Clock, FileText, Settings2 } from "lucide-react";
import Link from "next/link";

export default function DashboardOverviewPage() {
  return (
    <div className="max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-display font-bold text-wovio-charcoal mb-2">Content Hub</h1>
          <p className="text-wovio-slate">Overview of your Autopilot activity for Acme Roofing Ltd.</p>
        </div>
        <Button className="bg-wovio-coral hover:bg-wovio-coral/90 text-white font-bold py-5 px-6 rounded-xl shadow-lg shadow-wovio-coral/20">
          <Plus className="w-5 h-5 mr-2" /> Manual Post
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        
        <div className="bg-white rounded-2xl border border-wovio-zinc p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-wovio-slate uppercase tracking-wider">Posts Generated</h3>
            <div className="w-8 h-8 bg-wovio-lavender/10 rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-wovio-lavender" />
            </div>
          </div>
          <div className="text-3xl font-display font-bold text-wovio-charcoal">2</div>
          <p className="text-xs text-wovio-slate mt-2">Out of 8 limit (Free Plan)</p>
        </div>

        <div className="bg-white rounded-2xl border border-wovio-zinc p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-wovio-slate uppercase tracking-wider">Avg. SEO Score</h3>
            <div className="w-8 h-8 bg-wovio-mint/10 rounded-lg flex items-center justify-center">
              <Activity className="w-4 h-4 text-wovio-mint" />
            </div>
          </div>
          <div className="text-3xl font-display font-bold text-wovio-charcoal">94/100</div>
          <p className="text-xs text-wovio-slate mt-2">Excellent Health</p>
        </div>

        <div className="bg-white rounded-2xl border border-wovio-zinc p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-wovio-slate uppercase tracking-wider">Next Autopilot</h3>
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="w-4 h-4 text-orange-500" />
            </div>
          </div>
          <div className="text-xl font-bold text-wovio-charcoal mt-1">Tomorrow, 9:00 AM</div>
          <p className="text-xs text-wovio-slate mt-2">Topic: Roof Inspections</p>
        </div>

        <div className="bg-wovio-charcoal rounded-2xl border border-wovio-lavender/30 p-6 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-wovio-lavender/20 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none"></div>
          <div className="flex items-center justify-between mb-4 relative z-10">
            <h3 className="text-sm font-bold text-wovio-lavender uppercase tracking-wider">Engine Status</h3>
            <div className="w-8 h-8 bg-wovio-lavender/20 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-wovio-lavender" />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1 relative z-10">
            <div className="w-3 h-3 rounded-full bg-wovio-mint animate-pulse"></div>
            <div className="text-xl font-bold text-white">Active (Hobby)</div>
          </div>
          <Link href="/pricing" className="text-xs text-wovio-slate hover:text-white mt-2 inline-block relative z-10 underline">
            Upgrade to Pro for unlimited
          </Link>
        </div>

      </div>

      {/* Recent Activity Table */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-wovio-charcoal">Recent Publications</h2>
          <Button variant="ghost" className="text-wovio-slate hover:text-wovio-charcoal">
            <Settings2 className="w-4 h-4 mr-2" /> Filter
          </Button>
        </div>

        <div className="bg-white border border-wovio-zinc rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-wovio-snow border-b border-wovio-zinc">
                <th className="p-4 font-bold text-wovio-slate uppercase tracking-wider text-xs w-1/2">Article Title</th>
                <th className="p-4 font-bold text-wovio-slate uppercase tracking-wider text-xs">Date</th>
                <th className="p-4 font-bold text-wovio-slate uppercase tracking-wider text-xs">Status</th>
                <th className="p-4 font-bold text-wovio-slate uppercase tracking-wider text-xs">Score</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-wovio-zinc/50 hover:bg-wovio-snow/50 transition-colors cursor-pointer">
                <td className="p-4 font-medium text-wovio-charcoal">The True Cost of Commercial Roof Replacement in Dallas (2026)</td>
                <td className="p-4 text-wovio-slate">May 10, 2026</td>
                <td className="p-4">
                  <span className="bg-wovio-mint/10 text-wovio-mint font-bold px-2.5 py-1 rounded-md text-xs">Published</span>
                </td>
                <td className="p-4 font-bold text-wovio-lavender">98/100</td>
              </tr>
              <tr className="border-b border-wovio-zinc/50 hover:bg-wovio-snow/50 transition-colors cursor-pointer">
                <td className="p-4 font-medium text-wovio-charcoal">TPO vs PVC Roofing: Which is Better for Texas Weather?</td>
                <td className="p-4 text-wovio-slate">May 03, 2026</td>
                <td className="p-4">
                  <span className="bg-wovio-mint/10 text-wovio-mint font-bold px-2.5 py-1 rounded-md text-xs">Published</span>
                </td>
                <td className="p-4 font-bold text-wovio-lavender">90/100</td>
              </tr>
              <tr className="hover:bg-wovio-snow/50 transition-colors cursor-pointer opacity-60">
                <td className="p-4 font-medium text-wovio-charcoal">How to Identify Early Signs of Flat Roof Damage</td>
                <td className="p-4 text-wovio-slate">Scheduled</td>
                <td className="p-4">
                  <span className="bg-orange-100 text-orange-600 font-bold px-2.5 py-1 rounded-md text-xs">Queued</span>
                </td>
                <td className="p-4 text-wovio-slate">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
