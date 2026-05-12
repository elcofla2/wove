"use client";

import { useState } from "react";
import { Search, Eye, MoreHorizontal, X, ExternalLink, RefreshCw, CheckCircle2, TrendingUp, MapPin, Mic2, Link as LinkIcon, Image, Sparkles } from "lucide-react";

export default function ContentHubPage() {
  const [selectedPost, setSelectedPost] = useState<number | null>(1);
  const [isFullArticleOpen, setIsFullArticleOpen] = useState(false);
  const isFreePlan = true; // Simulated free user state

  const posts = [
    {
      id: 1,
      title: "The Future of Solar Energy in 2026",
      keyword: "solar energy trends",
      status: "Published",
      score: 98,
      date: "Today, 10:45 AM"
    },
    {
      id: 2,
      title: "How to Reduce Commercial Energy Costs",
      keyword: "commercial energy savings",
      status: "Generating",
      score: 0,
      date: "In Progress"
    },
    {
      id: 3,
      title: "Top 5 Renewable Energy Innovations",
      keyword: "renewable innovations",
      status: "Scheduled",
      score: 0,
      date: "Tomorrow, 8:00 AM"
    },
    {
      id: 4,
      title: "Solar Panel Maintenance Guide",
      keyword: "solar maintenance",
      status: "Published",
      score: 95,
      date: "Oct 10, 2025"
    }
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-[#80ED99]/20 text-[#2b7a3d]"; // Verde Menta
      case "Scheduled":
        return "bg-[#B28DFF]/20 text-[#6d3bbd]"; // Lavanda Cibernética
      case "Generating":
        return "bg-yellow-100 text-[#a37c00]"; // Amarillo pastel
      default:
        return "bg-zinc-100 text-[#71717A]";
    }
  };

  const getScoreColor = (score: number) => {
    if (score === 0) return "bg-zinc-200";
    if (score >= 90) return "bg-[#80ED99]";
    if (score >= 70) return "bg-yellow-300";
    return "bg-red-400";
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto flex">
      {/* Contenido Principal */}
      <div className={`flex-1 transition-all duration-300 space-y-8 ${selectedPost ? "pr-[520px]" : ""}`}>
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-jakarta font-bold text-[#18181B]">Content Hub</h1>
            <p className="text-[#71717A] mt-1">Monitor your autonomous AI agent operations.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search posts..." 
                className="pl-9 pr-4 py-2 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-[#B28DFF] focus:ring-1 focus:ring-[#B28DFF] transition-all"
              />
            </div>
            <button className="flex items-center gap-2 bg-white hover:bg-zinc-50 border border-zinc-200 text-[#18181B] px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-sm">
              <RefreshCw className="w-4 h-4" />
              Force Sync
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-2xl shadow-lg shadow-zinc-200/50 border border-zinc-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-zinc-100 bg-[#FAFAFA]/50">
                  <th className="py-4 px-6 text-xs font-semibold text-[#71717A] uppercase tracking-wider">Post Title</th>
                  <th className="py-4 px-6 text-xs font-semibold text-[#71717A] uppercase tracking-wider">Status</th>
                  <th className="py-4 px-6 text-xs font-semibold text-[#71717A] uppercase tracking-wider">SEO Score</th>
                  <th className="py-4 px-6 text-xs font-semibold text-[#71717A] uppercase tracking-wider">Date</th>
                  <th className="py-4 px-6 text-xs font-semibold text-[#71717A] uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {posts.map((post) => (
                  <tr 
                    key={post.id} 
                    onClick={() => setSelectedPost(post.id)}
                    className={`hover:bg-[#FAFAFA] transition-colors group cursor-pointer ${selectedPost === post.id ? 'bg-[#FAFAFA]' : ''}`}
                  >
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="font-medium text-[#18181B]">{post.title}</span>
                        <span className="text-xs text-[#71717A] mt-0.5">{post.keyword}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(post.status)}`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      {post.status === "Generating" ? (
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold text-[#71717A]">-</span>
                          <div className="w-24 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-300 w-[45%] rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      ) : post.status === "Scheduled" ? (
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold text-[#71717A]">-</span>
                          <div className="w-24 h-1.5 bg-zinc-100 rounded-full overflow-hidden"></div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold text-[#18181B]">{post.score}</span>
                          <div className="w-24 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${getScoreColor(post.score)}`} style={{ width: `${post.score}%` }}></div>
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-[#71717A]">{post.date}</span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-[#71717A] hover:text-[#B28DFF] p-1.5 rounded-md hover:bg-[#B28DFF]/10 transition-colors" title="Preview">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-[#71717A] hover:text-[#18181B] p-1.5 rounded-md hover:bg-zinc-100 transition-colors" title="More">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Preview Drawer */}
      {selectedPost !== null && (
        <div className="fixed right-0 top-16 bottom-0 w-[500px] bg-white shadow-2xl border-l border-zinc-200 z-20 flex flex-col animate-in slide-in-from-right-full duration-300">
          
          {/* Header */}
          <div className="p-6 pb-5 border-b border-zinc-100 flex items-start justify-between">
            <div className="pr-4">
              <h3 className="text-xl font-jakarta font-semibold text-[#18181B] leading-tight mb-4">
                {posts.find(p => p.id === selectedPost)?.title}
              </h3>
              {posts.find(p => p.id === selectedPost)?.status === "Published" && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#80ED99]/15 border border-[#80ED99]/30 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#2b7a3d]" />
                  <span className="text-xs font-semibold text-[#2b7a3d]">Optimization Score: 98/100 - Excellent</span>
                </div>
              )}
            </div>
            <button 
              onClick={() => setSelectedPost(null)}
              className="p-1 rounded-md text-[#71717A] hover:bg-zinc-100 transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Body */}
          <div className="flex-1 p-6 overflow-y-auto space-y-8">
            
            {/* 1. Live Content Preview & AI Adjustments */}
            <div>
              <p className="text-[11px] font-semibold text-[#71717A] uppercase tracking-wider mb-3">Live Content Preview</p>
              <div className="rounded-xl border border-zinc-200 overflow-hidden bg-white mb-6">
                {/* Simulated Image */}
                <div className="h-48 w-full bg-zinc-100 flex items-center justify-center relative group">
                  <img 
                    src="/images/solar_roof_preview.png" 
                    alt="Hero preview" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-[#18181B] px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2">
                      <Image className="w-3 h-3" /> Regenerate Image
                    </button>
                  </div>
                </div>
                {/* Simulated Text */}
                <div className="p-5">
                  <h4 className="font-bold text-[#18181B] mb-2">{posts.find(p => p.id === selectedPost)?.title}</h4>
                  <p className="text-sm text-[#71717A] leading-relaxed line-clamp-3">
                    As we move deeper into the decade, the landscape of renewable energy continues to evolve at a breakneck pace. For commercial property owners, understanding the trajectory of solar technology is no longer just about environmental stewardship—it's a critical financial strategy. In this comprehensive guide, we explore the emerging trends...
                  </p>
                  <button onClick={() => setIsFullArticleOpen(true)} className="text-[#B28DFF] font-semibold text-xs mt-3 hover:underline">Read full article</button>
                </div>
              </div>

              {/* AI Adjustments Box */}
              <div className="bg-[#B28DFF]/5 rounded-xl p-5 border border-[#B28DFF]/20">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-bold text-[#18181B] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#B28DFF]" /> AI Adjustments
                  </p>
                </div>
                <textarea 
                  className="w-full bg-white border border-[#B28DFF]/30 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#B28DFF]/50 text-[#18181B] resize-none"
                  placeholder="E.g., Make the tone more professional and add a paragraph about tax credits in Texas..."
                  rows={3}
                ></textarea>
                <div className="flex justify-end mt-3">
                  <button className="bg-[#18181B] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-zinc-800 transition-colors shadow-sm">
                    Adjust & Republish
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Content Structure */}
            <div>
              <p className="text-[11px] font-semibold text-[#71717A] uppercase tracking-wider mb-3">Content Structure (H1-H3)</p>
              <div className="space-y-3 font-medium text-sm text-[#18181B] bg-[#FAFAFA] border border-zinc-100 p-5 rounded-xl">
                <div className="flex items-start gap-3">
                  <span className="text-[10px] uppercase bg-[#B28DFF]/20 text-[#6d3bbd] px-1.5 py-0.5 rounded font-bold mt-0.5 shrink-0">H1</span>
                  <span>{posts.find(p => p.id === selectedPost)?.title}</span>
                </div>
                <div className="flex items-start gap-3 pl-2 ml-3 border-l-2 border-zinc-200">
                  <span className="text-[10px] uppercase bg-zinc-200 text-[#71717A] px-1.5 py-0.5 rounded font-bold mt-0.5 shrink-0">H2</span>
                  <span>Strategic Introduction</span>
                </div>
                <div className="flex items-start gap-3 pl-2 ml-3 border-l-2 border-zinc-200">
                  <span className="text-[10px] uppercase bg-zinc-200 text-[#71717A] px-1.5 py-0.5 rounded font-bold mt-0.5 shrink-0">H2</span>
                  <span>Key Technical Benefits</span>
                </div>
                <div className="flex items-start gap-3 pl-6 ml-3 border-l-2 border-zinc-200">
                  <span className="text-[10px] uppercase border border-zinc-200 text-[#71717A] px-1.5 py-0.5 rounded font-bold mt-0.5 shrink-0">H3</span>
                  <span className="text-[#71717A]">ROI Analysis & Projections</span>
                </div>
                <div className="flex items-start gap-3 pl-2 ml-3 border-l-2 border-zinc-200">
                  <span className="text-[10px] uppercase bg-zinc-200 text-[#71717A] px-1.5 py-0.5 rounded font-bold mt-0.5 shrink-0">H2</span>
                  <span>Implementation Roadmap</span>
                </div>
                <div className="flex items-start gap-3 pl-2 ml-3 border-l-2 border-zinc-200">
                  <span className="text-[10px] uppercase bg-zinc-200 text-[#71717A] px-1.5 py-0.5 rounded font-bold mt-0.5 shrink-0">H2</span>
                  <span>Frequently Asked Questions (FAQ)</span>
                </div>
              </div>
            </div>

            {/* 2. Tri-Factor Optimization */}
            <div>
              <p className="text-[11px] font-semibold text-[#71717A] uppercase tracking-wider mb-3">Deep Optimization Analysis</p>
              <div className="space-y-3">
                <div className="flex items-start gap-4 bg-[#FAFAFA] border border-zinc-100 p-4 rounded-xl hover:border-zinc-200 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#FF8FA3]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4 text-[#FF8FA3]" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-[#18181B]">SEO Excellence</span>
                    <span className="block text-[13px] text-[#71717A] mt-1 leading-relaxed">Perfect keyword density (1.5%). LSI terms successfully mapped.</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-[#FAFAFA] border border-zinc-100 p-4 rounded-xl hover:border-zinc-200 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#80ED99]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#2b7a3d]" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-[#18181B]">GEO Targeting</span>
                    <span className="block text-[13px] text-[#71717A] mt-1 leading-relaxed">Local entities injected. Regional relevance activated for target markets.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#FAFAFA] border border-zinc-100 p-4 rounded-xl hover:border-zinc-200 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#B28DFF]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mic2 className="w-4 h-4 text-[#B28DFF]" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-[#18181B]">AEO Readiness</span>
                    <span className="block text-[13px] text-[#71717A] mt-1 leading-relaxed">FAQ Schema (JSON-LD) successfully generated for Voice Search and Answer Engines.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Technical Proof */}
            <div>
              <p className="text-[11px] font-semibold text-[#71717A] uppercase tracking-wider mb-3">Technical Setup</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#FAFAFA] border border-zinc-100 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <LinkIcon className="w-4 h-4 text-[#18181B]" />
                    <span className="text-sm font-semibold text-[#18181B]">Links</span>
                  </div>
                  <p className="text-[13px] text-[#71717A] leading-relaxed">
                    <span className="font-semibold text-[#18181B]">8 Internal</span> (Contextual anchors) / <span className="font-semibold text-[#18181B]">3 External</span> (High-Authority)
                  </p>
                </div>
                <div className="bg-[#FAFAFA] border border-zinc-100 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Image className="w-4 h-4 text-[#18181B]" />
                    <span className="text-sm font-semibold text-[#18181B]">Media</span>
                  </div>
                  <p className="text-[13px] text-[#71717A] leading-relaxed">
                    <span className="font-semibold text-[#18181B]">1 Hero Image</span> (Sourced from Unsplash, Alt-text auto-generated)
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="p-6 border-t border-zinc-100 bg-white flex justify-end">
            {posts.find(p => p.id === selectedPost)?.status === "Published" ? (
              <button className="flex items-center gap-2 bg-[#B28DFF] hover:bg-[#a074f7] text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-transform active:scale-95 shadow-sm">
                <ExternalLink className="w-4 h-4" />
                View Live URL
              </button>
            ) : (
              <button disabled className="flex items-center gap-2 bg-zinc-100 border border-zinc-200 text-[#71717A] px-6 py-2.5 rounded-xl text-sm font-medium opacity-70 cursor-not-allowed">
                URL not available yet
              </button>
            )}
          </div>
        </div>
      )}
      {/* Full Article Modal */}
      {isFullArticleOpen && selectedPost !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#18181B]/40 backdrop-blur-sm"
            onClick={() => setIsFullArticleOpen(false)}
          ></div>
          
          {/* Modal Container */}
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative z-10 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-100">
              <div>
                <h2 className="text-xl font-jakarta font-bold text-[#18181B]">
                  {posts.find(p => p.id === selectedPost)?.title}
                </h2>
                <p className="text-xs text-[#71717A] mt-1">Full Generated Content Preview</p>
              </div>
              <button 
                onClick={() => setIsFullArticleOpen(false)}
                className="p-2 rounded-lg text-[#71717A] hover:bg-zinc-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-8 prose prose-zinc max-w-none prose-h2:font-jakarta prose-h2:text-[#18181B] prose-h3:text-[#18181B] prose-p:text-[#71717A] prose-strong:text-[#18181B] prose-a:text-[#B28DFF]">
              <img 
                src="/images/solar_roof_preview.png" 
                alt="Modern solar panels on a commercial roof at sunset" 
                className="w-full h-80 object-cover rounded-xl mb-8 shadow-sm"
              />
              
              <p className="lead text-xl text-[#18181B] font-medium leading-relaxed mb-8">
                As we move deeper into the decade, the landscape of renewable energy continues to evolve at a breakneck pace. For commercial property owners, understanding the trajectory of solar technology is no longer just about environmental stewardship—it's a critical financial strategy. In this comprehensive guide, we explore the emerging trends that will define solar energy in 2026 and beyond, specifically tailored for the Texas commercial real estate market.
              </p>

              <h2>1. The Shift to High-Efficiency Bifacial Panels</h2>
              <p>
                Traditional solar panels capture sunlight from one side. However, 2026 marks the widespread commercial adoption of <strong>bifacial solar panels</strong>. These advanced modules capture sunlight from both the front and the rear (absorbing reflected light from the roof surface), increasing overall energy yield by up to 30%. For sprawling commercial flat roofs, particularly those with highly reflective TPO membranes, this technology is an absolute game-changer.
              </p>

              <h2>2. AI-Driven Energy Storage Systems</h2>
              <p>
                Generating power is only half the equation. The new standard for commercial solar installations includes smart battery storage systems managed by artificial intelligence. These systems automatically store excess energy during peak sunlight hours and discharge it during peak billing hours to maximize cost savings. 
              </p>
              <p>
                By predicting grid demand spikes using real-time weather and consumption data, AI systems ensure that your commercial facility never pays premium energy rates again.
              </p>

              <h3>ROI Analysis & Projections</h3>
              <p>
                With the extension of federal tax credits and localized incentives (such as the Texas Solar Property Tax Exemption), the ROI timeline for commercial solar has dropped dramatically. What used to be a 7-9 year payback period has now plummeted to <strong>4-5 years</strong>. Consequently, property values increase exponentially while operating expenses remain fixed.
              </p>

              <h2>3. Implementation Roadmap for Commercial Buildings</h2>
              <p>
                Transitioning a large commercial facility to solar power requires strategic planning. Here is the standard implementation roadmap for 2026:
              </p>
              <ol className="text-[#71717A] font-medium">
                <li><strong>Phase 1: Structural Audit (Weeks 1-2):</strong> Assessing roof integrity and weight-bearing capacity. Often paired with a TPO or PVC roof overlay.</li>
                <li><strong>Phase 2: Energy Profiling (Week 3):</strong> Using smart meters to establish baseline energy consumption.</li>
                <li><strong>Phase 3: Design & Permitting (Weeks 4-8):</strong> Engineering the bifacial array and securing local municipality permits.</li>
                <li><strong>Phase 4: Installation & Commissioning (Weeks 9-12):</strong> Physical installation, grid connection, and activation of AI battery management.</li>
              </ol>

              <h2>Frequently Asked Questions (FAQ)</h2>
              <div className="bg-[#FAFAFA] border border-zinc-200 rounded-xl p-6 mt-6 not-prose">
                <div className="mb-4">
                  <h4 className="font-bold text-[#18181B] text-lg mb-2">Q: How much does commercial solar cost in 2026?</h4>
                  <p className="text-[#71717A] text-sm leading-relaxed">
                    A: On average, a 100kW commercial solar system costs between $150,000 and $200,000 before tax incentives. After applying the 30% Federal Investment Tax Credit (ITC) and MACRS depreciation, the net cost drops closer to $70,000.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-[#18181B] text-lg mb-2">Q: Does solar damage a commercial roof?</h4>
                  <p className="text-[#71717A] text-sm leading-relaxed">
                    A: No. Modern commercial installations utilize "ballasted" racking systems that do not penetrate the roof membrane. In fact, the panels protect the underlying roof from UV degradation, extending its lifespan.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#18181B] text-lg mb-2">Q: What happens on cloudy days?</h4>
                  <p className="text-[#71717A] text-sm leading-relaxed">
                    A: Thanks to bifacial panels and AI-driven battery storage, systems capture diffused light efficiently and deploy stored energy to keep the building powered without drawing from the grid.
                  </p>
                </div>
              </div>

            </div>

            {/* Modal Footer (AI Adjustments) */}
            <div className="p-6 border-t border-zinc-100 bg-[#FAFAFA] rounded-b-2xl">
              <div className="bg-white rounded-xl p-4 border border-[#B28DFF]/20 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <p className="text-sm font-bold text-[#18181B] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#B28DFF]" /> Refine with AI
                  </p>
                  <span className={`text-[11px] font-semibold px-2 py-1 rounded-md ${isFreePlan ? 'bg-red-50 text-red-600' : 'bg-zinc-100 text-[#71717A]'}`}>
                    {isFreePlan ? '0/1 Revisions Remaining' : '2/3 Revisions Remaining'}
                  </span>
                </div>

                {isFreePlan ? (
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 flex flex-col items-center justify-center text-center relative z-10">
                    <Lock className="w-5 h-5 text-slate-400 mb-2" />
                    <p className="text-sm font-bold text-[#18181B]">Revision Limit Reached</p>
                    <p className="text-xs text-[#71717A] mt-1 max-w-sm">
                      Free accounts are limited to 1 AI revision per article. Upgrade to Pro to unlock advanced AI editing and perfection.
                    </p>
                    <button className="mt-3 bg-[#B28DFF] hover:bg-[#a074f7] text-white px-5 py-2 rounded-lg text-xs font-bold shadow-sm transition-transform active:scale-95 flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5" /> Upgrade to Pro ($99/mo)
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3 relative z-10">
                    <textarea 
                      className="flex-1 bg-[#FAFAFA] border border-zinc-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#B28DFF] focus:ring-1 focus:ring-[#B28DFF] text-[#18181B] resize-none"
                      placeholder="E.g., Make the tone more aggressive, add a paragraph about Texas tax credits, and shorten the intro..."
                      rows={2}
                    ></textarea>
                    <button className="bg-[#18181B] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-sm flex-shrink-0 self-end h-[74px]">
                      Rewrite Article
                    </button>
                  </div>
                )}
                
                {!isFreePlan && (
                  <p className="text-[10px] text-[#71717A] mt-2 text-right relative z-10">
                    *To protect quality and prevent abuse, each article is limited to 3 major AI rewrites.
                  </p>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
