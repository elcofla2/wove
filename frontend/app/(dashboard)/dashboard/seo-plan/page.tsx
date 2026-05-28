"use client";

import { Button } from "@/components/ui/button";
import {
  Target,
  Globe,
  Search,
  TrendingUp,
  FileText,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lock,
  Link2,
  Lightbulb,
  Clock,
  Loader2,
  CalendarDays,
  Zap,
  Eye,
  BarChart3,
  ArrowUpRight,
  Play,
  Pause,
  ChevronRight,
  PenLine,
} from "lucide-react";
import { useState } from "react";

// --- Mock: The generated SEO content plan ---
const mockPlan = {
  domain: "acmeroofing.com",
  status: "active",
  postsPublished: 4,
  postsScheduled: 8,
  totalPlanned: 24,
  nextPost: {
    title: "How Much Does a Commercial Roof Replacement Cost in Dallas? (2026 Guide)",
    slug: "/blog/commercial-roof-replacement-cost-dallas",
    publishDate: "May 19, 2026 — 9:00 AM CST",
    estimatedWords: 2400,
    primaryKeyword: "commercial roof replacement cost dallas",
    secondaryKeywords: ["flat roof replacement price", "TPO roofing cost texas", "commercial roofing estimate"],
    internalLinks: [
      { text: "Our Commercial Roofing Services", url: "/services/commercial-roofing" },
      { text: "Free Roof Inspection in Dallas", url: "/contact" },
    ],
    externalLinks: [
      { text: "IBC Building Code Requirements", url: "https://codes.iccsafe.org" },
      { text: "NRCA Roofing Standards", url: "https://www.nrca.net" },
    ],
    outline: [
      "Introduction: Why Dallas property managers need to budget for roof replacement",
      "Average costs by roofing material (TPO, PVC, EPDM, Metal)",
      "Labor costs & Dallas-specific factors",
      "Hidden costs most contractors won't tell you",
      "How to get an accurate estimate (CTA: Free inspection)",
      "FAQ section (AEO optimized)",
    ],
  },
  contentPipeline: [
    { title: "How Much Does a Commercial Roof Replacement Cost in Dallas?", status: "next", date: "May 19", keyword: "commercial roof replacement cost dallas", wordCount: 2400 },
    { title: "TPO vs PVC Roofing: Which Is Better for Texas Heat?", status: "scheduled", date: "May 22", keyword: "tpo vs pvc roofing texas", wordCount: 2100 },
    { title: "5 Signs Your Flat Roof Needs Immediate Repair", status: "scheduled", date: "May 26", keyword: "flat roof repair signs", wordCount: 1800 },
    { title: "The Complete Guide to Roof Inspections for Commercial Properties", status: "scheduled", date: "May 29", keyword: "commercial roof inspection guide", wordCount: 2600 },
    { title: "Metal Roofing for Warehouses: Costs, Benefits & ROI", status: "queued", date: "Jun 02", keyword: "metal roofing warehouse cost", wordCount: 2200 },
    { title: "How to File a Commercial Roof Insurance Claim in Texas", status: "queued", date: "Jun 05", keyword: "commercial roof insurance claim texas", wordCount: 1900 },
    { title: "Energy-Efficient Roofing Options for Dallas Businesses", status: "queued", date: "Jun 09", keyword: "energy efficient roofing dallas", wordCount: 2000 },
    { title: "Preventive Roof Maintenance Checklist for Property Managers", status: "queued", date: "Jun 12", keyword: "roof maintenance checklist commercial", wordCount: 1700 },
  ],
  authorityPillars: [
    { name: "Commercial Roofing Costs", posts: 6, authority: 72, trend: "+18%" },
    { name: "Roof Materials & Comparisons", posts: 5, authority: 58, trend: "+12%" },
    { name: "Maintenance & Inspections", posts: 4, authority: 45, trend: "+8%" },
    { name: "Local Dallas Guides", posts: 9, authority: 81, trend: "+24%" },
  ],
  linkStrategy: {
    internalLinksPlanned: 48,
    internalLinksBuilt: 12,
    externalCitations: 32,
    externalCitationsBuilt: 8,
    hubPages: [
      { name: "/services/commercial-roofing", linksTo: 6 },
      { name: "/services/roof-repair", linksTo: 4 },
      { name: "/about", linksTo: 3 },
    ],
  },
};

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    next: "bg-wovio-coral/10 text-wovio-coral border-wovio-coral/20",
    scheduled: "bg-wovio-lavender/10 text-wovio-lavender border-wovio-lavender/20",
    queued: "bg-zinc-100 text-zinc-500 border-zinc-200",
    published: "bg-wovio-mint/10 text-emerald-600 border-wovio-mint/20",
  };
  const labels: Record<string, string> = {
    next: "⚡ Up Next",
    scheduled: "Scheduled",
    queued: "In Queue",
    published: "Published",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export default function SEOPlanPage() {
  const [inputMode, setInputMode] = useState<"url" | "describe">("url");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [planGenerated, setPlanGenerated] = useState(false);
  const [autopilotActive, setAutopilotActive] = useState(true);

  const canGenerate = inputMode === "url" ? url.trim() : description.trim();

  const handleGenerate = () => {
    if (!canGenerate) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setPlanGenerated(true);
    }, 3000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-wovio-charcoal mb-3 flex items-center gap-3">
          <Target className="w-8 h-8 text-wovio-lavender" />
          Growth Engine
        </h1>
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-wovio-lavender/10 text-wovio-lavender text-xs px-2.5 py-1 rounded-md font-bold border border-wovio-lavender/20">SEO</span>
          <span className="bg-wovio-coral/10 text-wovio-coral text-xs px-2.5 py-1 rounded-md font-bold border border-wovio-coral/20">AEO</span>
          <span className="bg-wovio-mint/10 text-emerald-600 text-xs px-2.5 py-1 rounded-md font-bold border border-wovio-mint/20">GEO</span>
          <span className="text-xs text-zinc-400">Search · Answer · Generative Engine Optimization</span>
        </div>
        <p className="text-wovio-slate">
          Your automated content strategy. See what's being published, when, and how it builds your visibility across all search engines.
        </p>
      </div>

      {/* Input Section with Tabs */}
      <div className="bg-white rounded-2xl border border-wovio-zinc p-6 shadow-sm mb-8">
        {/* Tab Toggle */}
        <div className="flex items-center gap-4 mb-5">
          <div className="flex bg-wovio-snow p-1 rounded-xl border border-wovio-zinc">
            <button
              onClick={() => setInputMode("url")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                inputMode === "url"
                  ? "bg-white text-wovio-charcoal shadow-sm"
                  : "text-wovio-slate hover:text-wovio-charcoal"
              }`}
            >
              <Globe className="w-4 h-4" /> Website URL
            </button>
            <button
              onClick={() => setInputMode("describe")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                inputMode === "describe"
                  ? "bg-white text-wovio-charcoal shadow-sm"
                  : "text-wovio-slate hover:text-wovio-charcoal"
              }`}
            >
              <PenLine className="w-4 h-4" /> Describe Your Business
            </button>
          </div>
        </div>

        {/* URL Input */}
        {inputMode === "url" && (
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://yourwebsite.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-200 bg-wovio-snow text-wovio-charcoal placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-wovio-lavender/30 focus:border-wovio-lavender transition-all text-sm"
                  onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                />
              </div>
              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !url.trim()}
                className="bg-wovio-lavender hover:bg-wovio-lavender/90 text-white font-medium px-6 rounded-xl shadow-md shadow-wovio-lavender/20 disabled:opacity-50"
              >
                {isGenerating ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Generating...</>
                ) : (
                  <><Sparkles className="w-4 h-4 mr-2" /> Generate Plan</>
                )}
              </Button>
            </div>
            <p className="text-xs text-zinc-400">
              We'll crawl your site, analyze your pages, and build a 30-day publishing roadmap with keywords, links, and scheduling.
            </p>
          </div>
        )}

        {/* Description Input */}
        {inputMode === "describe" && (
          <div className="space-y-3">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Example: We are a commercial roofing company in Dallas, TX. We specialize in flat roof repairs and TPO installations for warehouses and office buildings. Our target audience is property managers and facility directors..."
              className="w-full min-h-[120px] bg-wovio-snow border border-zinc-200 text-wovio-charcoal text-sm rounded-xl p-4 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-wovio-lavender/30 focus:border-wovio-lavender transition-all resize-none"
            />
            <div className="flex items-center justify-between">
              <p className="text-xs text-zinc-400">
                Describe your business, niche, target audience, and location. We'll generate a custom 30-day content plan.
              </p>
              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !description.trim()}
                className="bg-wovio-lavender hover:bg-wovio-lavender/90 text-white font-medium px-6 rounded-xl shadow-md shadow-wovio-lavender/20 disabled:opacity-50"
              >
                {isGenerating ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Generating...</>
                ) : (
                  <><Sparkles className="w-4 h-4 mr-2" /> Generate Plan</>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Loading */}
      {isGenerating && (
        <div className="bg-white rounded-2xl border border-wovio-zinc p-12 shadow-sm mb-8 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-full border-4 border-wovio-lavender/20 border-t-wovio-lavender animate-spin" />
            <Sparkles className="w-6 h-6 text-wovio-lavender absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h3 className="text-lg font-bold text-wovio-charcoal mb-2">Building your content plan...</h3>
          <p className="text-sm text-wovio-slate max-w-md">
            Researching keywords, mapping content pillars, planning internal links, and scheduling your first 8 posts.
          </p>
        </div>
      )}

      {/* === GENERATED PLAN === */}
      {planGenerated && !isGenerating && (
        <div className="space-y-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">

          {/* Autopilot Status Bar */}
          <div className="bg-gradient-to-r from-wovio-charcoal to-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-wovio-lavender/15 rounded-full blur-[60px] -mr-16 -mt-16" />
            <div className="relative z-10 flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${autopilotActive ? "bg-wovio-mint animate-pulse" : "bg-zinc-500"}`} />
              <div>
                <h2 className="text-white font-display font-bold text-lg">
                  Autopilot {autopilotActive ? "Active" : "Paused"}
                </h2>
                <p className="text-zinc-400 text-sm">
                  {mockPlan.postsPublished} published · {mockPlan.postsScheduled} scheduled · {mockPlan.totalPlanned} total planned
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
              {autopilotActive ? <><Pause className="w-4 h-4" /> Pause</> : <><Play className="w-4 h-4" /> Resume</>}
            </button>
          </div>

          {/* NEXT POST PREVIEW */}
          <div className="bg-white rounded-2xl border-2 border-wovio-coral/30 p-0 shadow-sm overflow-hidden">
            <div className="bg-wovio-coral/5 px-6 py-4 border-b border-wovio-coral/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-wovio-coral" />
                <h2 className="font-display font-bold text-wovio-charcoal">Next Post — Auto-Publishing Soon</h2>
              </div>
              <div className="flex items-center gap-2 text-sm text-wovio-slate">
                <Clock className="w-4 h-4" />
                {mockPlan.nextPost.publishDate}
              </div>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <h3 className="text-xl font-display font-bold text-wovio-charcoal mb-1">
                  {mockPlan.nextPost.title}
                </h3>
                <p className="text-xs text-wovio-slate font-mono">{mockPlan.nextPost.slug}</p>
              </div>

              {/* Keywords */}
              <div>
                <h4 className="text-xs font-bold text-wovio-charcoal uppercase tracking-wider mb-2">Target Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-wovio-coral/10 text-wovio-coral text-xs px-3 py-1.5 rounded-lg font-bold border border-wovio-coral/15">
                    🎯 {mockPlan.nextPost.primaryKeyword}
                  </span>
                  {mockPlan.nextPost.secondaryKeywords.map((kw, i) => (
                    <span key={i} className="bg-wovio-lavender/10 text-wovio-lavender text-xs px-3 py-1.5 rounded-lg font-medium border border-wovio-lavender/15">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Outline */}
              <div>
                <h4 className="text-xs font-bold text-wovio-charcoal uppercase tracking-wider mb-2">Article Outline</h4>
                <ol className="space-y-1.5">
                  {mockPlan.nextPost.outline.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-wovio-slate">
                      <span className="w-5 h-5 rounded-full bg-wovio-snow border border-wovio-zinc flex items-center justify-center text-[10px] font-bold text-wovio-charcoal flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-wovio-snow rounded-xl p-4 border border-zinc-100">
                  <h4 className="text-xs font-bold text-wovio-charcoal uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Link2 className="w-3.5 h-3.5 text-wovio-lavender" /> Internal Links
                  </h4>
                  {mockPlan.nextPost.internalLinks.map((link, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-wovio-slate mb-1.5 last:mb-0">
                      <ArrowRight className="w-3 h-3 text-wovio-lavender flex-shrink-0" />
                      <span className="font-medium text-wovio-charcoal">{link.text}</span>
                      <span className="text-xs text-zinc-400 font-mono">→ {link.url}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-wovio-snow rounded-xl p-4 border border-zinc-100">
                  <h4 className="text-xs font-bold text-wovio-charcoal uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5 text-wovio-mint" /> External Citations
                  </h4>
                  {mockPlan.nextPost.externalLinks.map((link, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-wovio-slate mb-1.5 last:mb-0">
                      <ArrowUpRight className="w-3 h-3 text-wovio-mint flex-shrink-0" />
                      <span className="font-medium text-wovio-charcoal">{link.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs text-zinc-400 bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-100">
                  ~{mockPlan.nextPost.estimatedWords.toLocaleString()} words
                </span>
                <span className="text-xs text-zinc-400 bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-100">
                  AEO Optimized
                </span>
                <span className="text-xs text-zinc-400 bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-100">
                  Auto-publish to WordPress
                </span>
              </div>
            </div>
          </div>

          {/* CONTENT PIPELINE */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-wovio-charcoal flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-wovio-lavender" />
                Plan for the Next 30 Days
              </h2>
              <span className="text-xs text-wovio-slate bg-wovio-snow px-3 py-1.5 rounded-lg border border-wovio-zinc">
                {mockPlan.contentPipeline.length} posts planned
              </span>
            </div>
            <div className="bg-white rounded-2xl border border-wovio-zinc shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-wovio-snow border-b border-wovio-zinc">
                    <th className="p-4 text-xs font-bold text-wovio-slate uppercase tracking-wider">Post Title</th>
                    <th className="p-4 text-xs font-bold text-wovio-slate uppercase tracking-wider">Keyword</th>
                    <th className="p-4 text-xs font-bold text-wovio-slate uppercase tracking-wider">Date</th>
                    <th className="p-4 text-xs font-bold text-wovio-slate uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {mockPlan.contentPipeline.map((post, i) => (
                    <tr key={i} className={`border-b border-wovio-zinc/50 hover:bg-wovio-snow/50 transition-colors cursor-pointer ${post.status === "next" ? "bg-wovio-coral/[0.02]" : ""}`}>
                      <td className="p-4">
                        <p className="font-medium text-wovio-charcoal">{post.title}</p>
                        <p className="text-xs text-zinc-400 mt-0.5">{post.wordCount.toLocaleString()} words</p>
                      </td>
                      <td className="p-4 font-mono text-xs text-wovio-slate">{post.keyword}</td>
                      <td className="p-4 text-wovio-slate font-medium">{post.date}</td>
                      <td className="p-4"><StatusBadge status={post.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* AUTHORITY & LINK STRATEGY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Authority Pillars */}
            <div className="bg-white rounded-2xl border border-wovio-zinc p-6 shadow-sm">
              <h2 className="text-lg font-bold text-wovio-charcoal mb-1 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-wovio-lavender" />
                Authority Building
              </h2>
              <p className="text-xs text-wovio-slate mb-5">Topic clusters growing your domain authority</p>
              <div className="space-y-3">
                {mockPlan.authorityPillars.map((pillar, i) => (
                  <div key={i} className="bg-wovio-snow rounded-xl p-4 border border-zinc-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium text-sm text-wovio-charcoal">{pillar.name}</p>
                      <span className="text-xs font-bold text-wovio-mint">{pillar.trend}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-wovio-slate">
                      <span>{pillar.posts} posts planned</span>
                      <span>Authority: {pillar.authority}%</span>
                    </div>
                    <div className="w-full bg-zinc-200 rounded-full h-1.5 mt-2">
                      <div className="bg-gradient-to-r from-wovio-lavender to-wovio-mint h-1.5 rounded-full" style={{ width: `${pillar.authority}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Link Strategy */}
            <div className="bg-white rounded-2xl border border-wovio-zinc p-6 shadow-sm">
              <h2 className="text-lg font-bold text-wovio-charcoal mb-1 flex items-center gap-2">
                <Link2 className="w-5 h-5 text-wovio-coral" />
                Link Strategy
              </h2>
              <p className="text-xs text-wovio-slate mb-5">Internal & external links being built automatically</p>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-wovio-snow rounded-xl p-4 border border-zinc-100 text-center">
                  <p className="text-2xl font-display font-bold text-wovio-charcoal">{mockPlan.linkStrategy.internalLinksBuilt}<span className="text-zinc-400 text-sm font-normal">/{mockPlan.linkStrategy.internalLinksPlanned}</span></p>
                  <p className="text-[10px] text-wovio-slate uppercase tracking-wider mt-1">Internal Links</p>
                </div>
                <div className="bg-wovio-snow rounded-xl p-4 border border-zinc-100 text-center">
                  <p className="text-2xl font-display font-bold text-wovio-charcoal">{mockPlan.linkStrategy.externalCitationsBuilt}<span className="text-zinc-400 text-sm font-normal">/{mockPlan.linkStrategy.externalCitations}</span></p>
                  <p className="text-[10px] text-wovio-slate uppercase tracking-wider mt-1">External Citations</p>
                </div>
              </div>

              <h4 className="text-xs font-bold text-wovio-charcoal uppercase tracking-wider mb-3">Hub Pages (Link Magnets)</h4>
              <div className="space-y-2">
                {mockPlan.linkStrategy.hubPages.map((hub, i) => (
                  <div key={i} className="flex items-center justify-between bg-wovio-snow rounded-lg p-3 border border-zinc-100">
                    <span className="text-sm font-mono text-wovio-slate">{hub.name}</span>
                    <span className="text-xs font-bold text-wovio-lavender">{hub.linksTo} posts linking here</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upsell */}
          <div className="bg-gradient-to-r from-wovio-lavender/10 via-wovio-coral/5 to-wovio-mint/10 rounded-2xl p-8 border border-wovio-lavender/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-wovio-lavender/20 flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-wovio-lavender" />
              </div>
              <div>
                <h3 className="font-bold text-wovio-charcoal text-lg mb-1">Scale to 30+ Posts / Month</h3>
                <p className="text-sm text-wovio-slate max-w-lg">
                  Upgrade to Pro for unlimited content pillars, weekend scheduling, and multi-post days. Let Wovio dominate your niche on full autopilot.
                </p>
              </div>
            </div>
            <Button className="bg-wovio-lavender hover:bg-wovio-lavender/90 text-white font-bold px-8 py-6 rounded-xl shadow-lg shadow-wovio-lavender/20 flex-shrink-0">
              Upgrade Now <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!planGenerated && !isGenerating && (
        <div className="bg-white rounded-2xl border border-dashed border-zinc-300 p-16 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-wovio-lavender/10 flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-wovio-lavender" />
          </div>
          <h3 className="text-lg font-bold text-wovio-charcoal mb-2">No SEO Plan Generated Yet</h3>
          <p className="text-sm text-wovio-slate max-w-md mb-6">
            Enter your website URL or describe your business above and click <strong>"Generate Plan"</strong> to get a 30-day content strategy with scheduled posts, keyword targeting, and link building — all on autopilot.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5 bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-100"><CalendarDays className="w-3 h-3" /> Content Calendar</span>
            <span className="flex items-center gap-1.5 bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-100"><Link2 className="w-3 h-3" /> Link Strategy</span>
            <span className="flex items-center gap-1.5 bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-100"><TrendingUp className="w-3 h-3" /> Authority Building</span>
            <span className="flex items-center gap-1.5 bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-100"><Zap className="w-3 h-3" /> Auto-Execution</span>
          </div>
        </div>
      )}
    </div>
  );
}
