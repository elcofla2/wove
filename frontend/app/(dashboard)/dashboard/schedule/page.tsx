"use client";

import { useState } from "react";
import {
  CalendarClock,
  CheckCircle2,
  Clock,
  Loader2,
  Circle,
  BarChart3,
  FileText,
  Link2,
  Search,
  Shield,
  Award,
  Sparkles,
  RefreshCw,
  ChevronRight,
  Zap,
  Play,
  Pause,
  MapPin,
  Eye,
  Activity,
  Lock,
} from "lucide-react";
import Link from "next/link";

// Current simulated time: 2:45 PM — so tasks before that are "done", the 2:30 is "running", rest are "upcoming"
type TaskStatus = "done" | "running" | "upcoming" | "skipped";

interface ScheduleTask {
  time: string;
  name: string;
  description: string;
  status: TaskStatus;
  days: string;
  icon: React.ElementType;
  result?: string;
  category: "measurement" | "planning" | "content" | "optimization" | "quality" | "geo" | "intelligence";
  freeTier: boolean;
}

const todaySchedule: ScheduleTask[] = [
  {
    time: "8:30 AM",
    name: "Measurement & Learning Check",
    description: "Analyze yesterday's traffic, rankings, and user behavior. Identify what content is performing and what needs adjustment.",
    status: "done",
    days: "Daily",
    icon: BarChart3,
    result: "Rankings up for 3 keywords. 'Roof Replacement Cost' moved from #8 → #5. Bounce rate down 4% on blog pages.",
    category: "measurement",
    freeTier: true,
  },
  {
    time: "9:00 AM",
    name: "30-Day SEO/AEO/GEO Plan Runner",
    description: "Execute the next step in your 30-day content plan. Check milestones, adjust keyword targets, and update the roadmap.",
    status: "done",
    days: "Daily",
    icon: FileText,
    result: "Day 12/30 complete. 4 posts published, 8 scheduled. On track to hit 24-post target. Added 2 new long-tail keywords.",
    category: "planning",
    freeTier: false,
  },
  {
    time: "9:45 AM",
    name: "Competitor Intelligence Scanner",
    description: "Track what competitors are publishing and ranking for. Identify new keyword opportunities and content strategies they're using that you haven't covered.",
    status: "done",
    days: "Tue / Thu",
    icon: Eye,
    result: "Competitor 'DallasRoofPros' published 2 new posts on insurance claims. Identified 4 keywords they're targeting that we can outrank.",
    category: "intelligence",
    freeTier: false,
  },
  {
    time: "10:00 AM",
    name: "Content Inventory & Gap Check",
    description: "Scan your existing content library, identify topic gaps, and find opportunities your competitors are ranking for that you're missing.",
    status: "done",
    days: "Daily",
    icon: Search,
    result: "Found 3 content gaps: 'emergency roof repair dallas', 'roof warranty texas', 'commercial roofing financing'. Added to pipeline.",
    category: "content",
    freeTier: true,
  },
  {
    time: "11:30 AM",
    name: "Cluster & Internal-Link Planner",
    description: "Map topic clusters and plan internal link architecture. Connect new posts to hub pages for maximum authority flow.",
    status: "done",
    days: "Mon / Wed / Fri",
    icon: Link2,
    result: "Linked 3 new posts to /services/commercial-roofing hub. Created 2 new cross-links between blog articles.",
    category: "optimization",
    freeTier: false,
  },
  {
    time: "12:15 PM",
    name: "GEO & Local Visibility Optimizer",
    description: "Optimize for geographic search: local keyword targeting, NAP consistency check, location-specific content, and Google Business Profile signals.",
    status: "done",
    days: "Mon / Wed / Fri",
    icon: MapPin,
    result: "Updated NAP citations on 3 pages. Added 'Dallas, TX' geo-modifiers to 5 blog posts. Local pack visibility score: 74% (+6%).",
    category: "geo",
    freeTier: false,
  },
  {
    time: "1:30 PM",
    name: "Publishing Candidate Builder",
    description: "Select the next article from the pipeline, finalize the outline, target keywords, and prepare it for auto-publishing.",
    status: "done",
    days: "Mon / Wed / Fri",
    icon: Sparkles,
    result: "Prepared: 'Metal Roofing for Warehouses: Costs, Benefits & ROI' — 2,200 words, 4 internal links, 2 citations. Queued for May 22.",
    category: "content",
    freeTier: false,
  },
  {
    time: "2:30 PM",
    name: "Existing Content Optimizer",
    description: "Refresh and optimize previously published posts. Update stats, improve headings, add new internal links, and boost SEO scores.",
    status: "running",
    days: "Tue / Thu / Sat",
    icon: RefreshCw,
    category: "optimization",
    freeTier: false,
  },
  {
    time: "3:45 PM",
    name: "Schema & AEO Validator",
    description: "Validate structured data, FAQ schema, and Answer Engine Optimization across all published content. Ensure AI readability.",
    status: "upcoming",
    days: "Daily",
    icon: Shield,
    category: "quality",
    freeTier: true,
  },
  {
    time: "4:45 PM",
    name: "Authority & Citation Prep",
    description: "Research and prepare external citations, authority sources, and outbound links for upcoming articles. Build credibility signals.",
    status: "skipped",
    days: "Tue / Thu",
    icon: Award,
    category: "quality",
    freeTier: false,
  },
  {
    time: "5:30 PM",
    name: "Quality Gate Sweep",
    description: "Final daily review. Check all published content for broken links, formatting issues, and SEO compliance. Generate daily report.",
    status: "upcoming",
    days: "Mon / Wed / Fri",
    icon: CheckCircle2,
    category: "quality",
    freeTier: false,
  },
  {
    time: "6:00 PM",
    name: "Technical Health Monitor",
    description: "Check Core Web Vitals, crawl errors, page speed, mobile usability, and sitemap health. Flag issues before they impact rankings.",
    status: "upcoming",
    days: "Daily",
    icon: Activity,
    category: "measurement",
    freeTier: false,
  },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  measurement: { bg: "bg-blue-500/10", text: "text-blue-500", border: "border-blue-500/20" },
  planning: { bg: "bg-wovio-lavender/10", text: "text-wovio-lavender", border: "border-wovio-lavender/20" },
  content: { bg: "bg-wovio-coral/10", text: "text-wovio-coral", border: "border-wovio-coral/20" },
  optimization: { bg: "bg-wovio-mint/10", text: "text-emerald-600", border: "border-wovio-mint/20" },
  quality: { bg: "bg-amber-500/10", text: "text-amber-600", border: "border-amber-500/20" },
  geo: { bg: "bg-cyan-500/10", text: "text-cyan-600", border: "border-cyan-500/20" },
  intelligence: { bg: "bg-violet-500/10", text: "text-violet-600", border: "border-violet-500/20" },
};

const categoryLabels: Record<string, string> = {
  measurement: "Measurement",
  planning: "Planning",
  content: "Content",
  optimization: "Optimization",
  quality: "Quality",
  geo: "GEO",
  intelligence: "Intelligence",
};

function StatusIndicator({ status }: { status: TaskStatus }) {
  switch (status) {
    case "done":
      return <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0" />;
    case "running":
      return (
        <div className="relative flex-shrink-0">
          <Loader2 className="w-5 h-5 text-wovio-lavender animate-spin" />
        </div>
      );
    case "upcoming":
      return <Circle className="w-5 h-5 text-zinc-300 flex-shrink-0" />;
    case "skipped":
      return <Circle className="w-5 h-5 text-zinc-200 flex-shrink-0" />;
  }
}

export default function SchedulePage() {
  const [expandedTask, setExpandedTask] = useState<number | null>(null);
  const [autopilotActive, setAutopilotActive] = useState(true);

  // Simulated: in production, this comes from the user's subscription tier
  const isFreeTier = true;

  const activeTasks = isFreeTier ? todaySchedule.filter((t) => t.freeTier) : todaySchedule;
  const lockedTasks = isFreeTier ? todaySchedule.filter((t) => !t.freeTier) : [];

  const completedCount = activeTasks.filter((t) => t.status === "done").length;
  const runningCount = activeTasks.filter((t) => t.status === "running").length;
  const upcomingCount = activeTasks.filter((t) => t.status === "upcoming").length;

  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-wovio-charcoal mb-2 flex items-center gap-3">
          <CalendarClock className="w-8 h-8 text-wovio-lavender" />
          Schedule
        </h1>
        <p className="text-wovio-slate">
          What Wovio is doing today — automatically. No action needed from you.
        </p>
      </div>

      {/* Autopilot Bar */}
      <div className="bg-gradient-to-r from-wovio-charcoal to-zinc-800 rounded-2xl p-5 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-wovio-lavender/15 rounded-full blur-[60px] -mr-16 -mt-16" />
        <div className="relative z-10 flex items-center gap-4">
          <div className={`w-3 h-3 rounded-full ${autopilotActive ? "bg-wovio-mint animate-pulse" : "bg-zinc-500"}`} />
          <div>
            <h2 className="text-white font-display font-bold">{dateStr}</h2>
            <p className="text-zinc-400 text-sm">
              {completedCount} completed · {runningCount} running · {upcomingCount} remaining
            </p>
          </div>
        </div>
        <button
          onClick={() => setAutopilotActive(!autopilotActive)}
          className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
            autopilotActive
              ? "bg-wovio-mint/20 text-wovio-mint hover:bg-wovio-mint/30"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {autopilotActive ? (
            <><Pause className="w-4 h-4" /> Pause All</>
          ) : (
            <><Play className="w-4 h-4" /> Resume</>
          )}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-2xl border border-wovio-zinc p-5 mb-8 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-wovio-charcoal">Today's Progress</p>
          <p className="text-sm text-wovio-slate">{completedCount}/{activeTasks.length} tasks{isFreeTier ? ` (${lockedTasks.length} locked)` : ""}</p>
        </div>
        <div className="w-full bg-zinc-100 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-wovio-lavender to-wovio-mint h-2.5 rounded-full transition-all duration-1000"
            style={{ width: `${((completedCount + runningCount * 0.5) / todaySchedule.length) * 100}%` }}
          />
        </div>
        <div className="flex items-center gap-6 mt-3 text-xs text-wovio-slate">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-wovio-mint" /> {completedCount} Done</span>
          <span className="flex items-center gap-1.5"><Loader2 className="w-3 h-3 text-wovio-lavender" /> {runningCount} Running</span>
          <span className="flex items-center gap-1.5"><Circle className="w-3 h-3 text-zinc-300" /> {upcomingCount} Upcoming</span>
        </div>
      </div>

      {/* Timeline — Active Tasks */}
      <div className="space-y-0">
        {activeTasks.map((task, i) => {
          const Icon = task.icon;
          const isExpanded = expandedTask === i;
          const catColor = categoryColors[task.category];
          const isRunning = task.status === "running";
          const isDone = task.status === "done";
          const isSkipped = task.status === "skipped";

          return (
            <div key={i} className="relative">
              {i < activeTasks.length - 1 && (
                <div className={`absolute left-[39px] top-[52px] bottom-0 w-px ${
                  isDone ? "bg-wovio-mint/30" : isRunning ? "bg-wovio-lavender/30" : "bg-zinc-200"
                }`} />
              )}

              <button
                onClick={() => setExpandedTask(isExpanded ? null : i)}
                className={`w-full text-left flex items-start gap-4 p-4 rounded-2xl transition-all mb-1 group ${
                  isRunning
                    ? "bg-wovio-lavender/5 border border-wovio-lavender/20 shadow-sm"
                    : isExpanded
                    ? "bg-white border border-wovio-zinc shadow-sm"
                    : "hover:bg-white/60 border border-transparent"
                } ${isSkipped ? "opacity-40" : ""}`}
              >
                <div className="w-[52px] flex-shrink-0 text-right pt-0.5">
                  <p className={`text-sm font-bold ${isDone ? "text-wovio-charcoal" : isRunning ? "text-wovio-lavender" : "text-zinc-400"}`}>
                    {task.time}
                  </p>
                </div>
                <div className="pt-0.5">
                  <StatusIndicator status={task.status} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className={`text-sm font-bold ${isDone ? "text-wovio-charcoal" : isRunning ? "text-wovio-lavender" : isSkipped ? "text-zinc-400" : "text-zinc-500"}`}>
                          {task.name}
                        </h3>
                        {isRunning && (
                          <span className="bg-wovio-lavender/10 text-wovio-lavender text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">
                            Running Now
                          </span>
                        )}
                        {isSkipped && (
                          <span className="bg-zinc-100 text-zinc-400 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                            Not Today
                          </span>
                        )}
                      </div>
                      <p className={`text-xs ${isDone || isRunning ? "text-wovio-slate" : "text-zinc-400"}`}>
                        {task.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider border ${catColor.bg} ${catColor.text} ${catColor.border}`}>
                        {categoryLabels[task.category]}
                      </span>
                      <span className="text-[10px] text-zinc-400 bg-zinc-50 px-2 py-1 rounded-md border border-zinc-100 whitespace-nowrap">
                        {task.days}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-zinc-300 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                    </div>
                  </div>

                  {isExpanded && isDone && task.result && (
                    <div className="mt-3 bg-wovio-mint/5 border border-wovio-mint/15 rounded-xl p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-wovio-mint flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">Completed — Result</p>
                          <p className="text-sm text-wovio-charcoal leading-relaxed">{task.result}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {isExpanded && isRunning && (
                    <div className="mt-3 bg-wovio-lavender/5 border border-wovio-lavender/15 rounded-xl p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="flex items-start gap-2">
                        <Loader2 className="w-4 h-4 text-wovio-lavender animate-spin flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-wovio-lavender uppercase tracking-wider mb-1">In Progress</p>
                          <p className="text-sm text-wovio-charcoal">Optimizing 2 articles: updating stats, improving meta descriptions, adding new internal links...</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Locked Tasks — Upgrade CTA */}
      {isFreeTier && lockedTasks.length > 0 && (
        <>
          {/* Upgrade Banner */}
          <div className="mt-6 mb-4 bg-gradient-to-r from-wovio-lavender/10 to-wovio-coral/10 rounded-2xl border border-wovio-lavender/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-wovio-lavender/20 flex items-center justify-center">
                <Lock className="w-5 h-5 text-wovio-lavender" />
              </div>
              <div>
                <p className="text-sm font-bold text-wovio-charcoal">{lockedTasks.length} advanced tasks waiting to be activated</p>
                <p className="text-xs text-wovio-slate">Competitor intel, GEO optimizer, content refresh & more run automatically on Growth.</p>
              </div>
            </div>
            <Link href="/pricing">
              <button className="px-6 py-2.5 bg-wovio-lavender hover:bg-wovio-lavender/90 text-white text-sm font-bold rounded-xl shadow-md shadow-wovio-lavender/20 transition-colors whitespace-nowrap">
                Upgrade to Growth — $149/mo
              </button>
            </Link>
          </div>

          {/* Locked Tasks (blurred) */}
          <div className="space-y-0 relative">
            {lockedTasks.map((task, i) => {
              const catColor = categoryColors[task.category];
              return (
                <div key={`locked-${i}`} className="relative opacity-40">
                  {i < lockedTasks.length - 1 && (
                    <div className="absolute left-[39px] top-[52px] bottom-0 w-px bg-zinc-200" />
                  )}
                  <div className="w-full text-left flex items-start gap-4 p-4 rounded-2xl mb-1 border border-transparent">
                    <div className="w-[52px] flex-shrink-0 text-right pt-0.5">
                      <p className="text-sm font-bold text-zinc-300">{task.time}</p>
                    </div>
                    <div className="pt-0.5">
                      <Lock className="w-5 h-5 text-zinc-300 flex-shrink-0" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-sm font-bold text-zinc-400">{task.name}</h3>
                            <span className="bg-wovio-lavender/10 text-wovio-lavender text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                              Growth
                            </span>
                          </div>
                          <p className="text-xs text-zinc-300">{task.description}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider border opacity-50 ${catColor.bg} ${catColor.text} ${catColor.border}`}>
                            {categoryLabels[task.category]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Footer note */}
      <div className="mt-8 bg-wovio-snow rounded-2xl border border-wovio-zinc p-6 text-center">
        <Zap className="w-6 h-6 text-wovio-lavender mx-auto mb-3" />
        <p className="text-sm text-wovio-charcoal font-bold mb-1">Wovio runs 24/7 on autopilot</p>
        <p className="text-xs text-wovio-slate max-w-md mx-auto">
          {isFreeTier
            ? "You're on the Free plan with 3 active tasks. Upgrade to Growth to unlock all 12 daily automation tasks."
            : "Every task executes automatically based on your 30-day Growth Engine (SEO · AEO · GEO). No intervention needed. Check back anytime to see progress."
          }
        </p>
      </div>
    </div>
  );
}
