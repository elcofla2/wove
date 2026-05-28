"use client";

import { useState } from "react";
import {
  Search,
  FileText,
  Settings,
  X,
  Clock,
  Target,
  RotateCcw,
  GripVertical,
  Lock,
  PenTool,
} from "lucide-react";

export default function BrandVoicePage() {
  const [activeTab, setActiveTab] = useState<"scan" | "prompt">("scan");

  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const activeDays = [0, 2, 4]; // M, W, F

  const initialTopics = ["Solar ROI", "Tax Credits", "Commercial Setup"];
  const [topics, setTopics] = useState(initialTopics);

  const removeTopic = (indexToRemove: number) => {
    setTopics(topics.filter((_, idx) => idx !== indexToRemove));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-wovio-charcoal mb-2 flex items-center gap-3">
          <PenTool className="w-8 h-8 text-wovio-lavender" />
          Brand Voice & Autopilot
        </h1>
        <p className="text-wovio-slate">
          Generate your content strategy by scanning your site or describing
          your brand.
        </p>
      </div>

      {/* Tabs & Method Selector */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-wovio-zinc">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Tabs Navigation */}
          <div className="flex bg-wovio-snow p-1.5 rounded-xl border border-wovio-zinc w-full md:w-auto shrink-0">
            <button
              onClick={() => setActiveTab("scan")}
              className={`flex-1 md:w-32 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === "scan"
                  ? "bg-white text-wovio-charcoal shadow-sm"
                  : "text-wovio-slate hover:text-wovio-charcoal"
              }`}
            >
              Scan Website
            </button>
            <button
              onClick={() => setActiveTab("prompt")}
              className={`flex-1 md:w-36 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === "prompt"
                  ? "bg-white text-wovio-charcoal shadow-sm"
                  : "text-wovio-slate hover:text-wovio-charcoal"
              }`}
            >
              Custom Prompt
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 w-full">
            {activeTab === "scan" ? (
              <div className="flex gap-3">
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className="flex-1 bg-wovio-snow border border-wovio-zinc text-wovio-charcoal text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-wovio-lavender focus:ring-1 focus:ring-wovio-lavender"
                />
                <button className="flex items-center gap-2 bg-wovio-lavender hover:bg-wovio-lavender/90 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors shadow-sm whitespace-nowrap">
                  <Search className="w-4 h-4" />
                  Scan & Extract
                </button>
              </div>
            ) : (
              <div className="flex gap-3 items-end">
                <textarea
                  placeholder="Describe your business, target audience, and goals..."
                  className="flex-1 bg-wovio-snow border border-wovio-zinc text-wovio-charcoal text-sm rounded-xl px-4 py-3 min-h-[60px] resize-none focus:outline-none focus:border-wovio-lavender focus:ring-1 focus:ring-wovio-lavender"
                />
                <button className="flex items-center gap-2 bg-wovio-lavender hover:bg-wovio-lavender/90 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors shadow-sm whitespace-nowrap">
                  <FileText className="w-4 h-4" />
                  Generate Strategy
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-2">
        <div className="h-px bg-zinc-200 w-full max-w-sm" />
      </div>

      {/* Configuration Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: System Prompt & Voice */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-wovio-zinc flex flex-col">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-wovio-snow border border-wovio-zinc flex items-center justify-center">
                <Settings className="w-5 h-5 text-wovio-charcoal" />
              </div>
              <h2 className="text-lg font-display font-bold text-wovio-charcoal">
                System Prompt & Voice
              </h2>
            </div>
            <button className="flex items-center gap-2 text-xs font-semibold text-wovio-slate bg-zinc-50 hover:bg-zinc-100 border border-wovio-zinc px-3 py-1.5 rounded-lg transition-colors">
              <RotateCcw className="w-3.5 h-3.5" />
              Regenerate Voice
            </button>
          </div>

          <div className="flex-1">
            <textarea
              className="w-full min-h-[140px] bg-wovio-snow border border-wovio-zinc text-wovio-charcoal text-sm rounded-xl p-5 focus:outline-none focus:border-wovio-lavender focus:ring-1 focus:ring-wovio-lavender resize-none"
              defaultValue={
                "Tone: Professional and data-driven. Focus on B2B decision makers in the renewable sector.\n\nStructure: Actionable introductions, bulleted insights, and clear ROI-focused conclusions. Use industry-standard terminology like 'Tax Credits', 'CAPEX', and 'Grid Parity' without being overly academic."
              }
            />
          </div>
        </div>

        {/* Card 2: Content Pillars (Topic Matrix) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-wovio-zinc flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-wovio-snow border border-wovio-zinc flex items-center justify-center">
              <Target className="w-5 h-5 text-wovio-charcoal" />
            </div>
            <h2 className="text-lg font-display font-bold text-wovio-charcoal">
              Topic Matrix
            </h2>
          </div>

          <div className="flex-1 space-y-5">
            <div>
              <p className="text-xs text-wovio-slate mb-3">
                Drag to set generation priority.
              </p>
              <div className="space-y-2">
                {topics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-wovio-snow border border-wovio-zinc px-3 py-2.5 rounded-lg group hover:border-wovio-lavender/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <GripVertical className="w-4 h-4 text-zinc-400 cursor-grab active:cursor-grabbing" />
                      <div className="w-5 h-5 rounded-full bg-wovio-lavender flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                        {idx + 1}
                      </div>
                      <span className="text-sm text-wovio-charcoal font-medium">
                        {topic}
                      </span>
                    </div>
                    <button
                      onClick={() => removeTopic(idx)}
                      className="text-wovio-slate opacity-60 hover:opacity-100 hover:text-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative pt-2">
              <input
                type="text"
                placeholder="Upgrade to add unlimited topics..."
                disabled
                className="w-full bg-slate-50 border border-slate-200 text-slate-400 placeholder:text-slate-400 text-sm rounded-xl pl-4 pr-24 py-2.5 cursor-not-allowed focus:outline-none"
              />
              <div className="absolute right-2.5 top-[calc(50%+4px)] -translate-y-1/2 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span className="px-2 py-0.5 rounded-md bg-wovio-lavender/20 text-[10px] font-bold text-slate-800 uppercase tracking-wide">
                  Pro
                </span>
              </div>
            </div>
            <p className="text-xs text-wovio-slate mt-2">
              Base plans are limited to 3 core topics.
            </p>
          </div>
        </div>

        {/* Card 3: Publishing Engine */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-wovio-zinc flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-wovio-snow border border-wovio-zinc flex items-center justify-center">
              <Clock className="w-5 h-5 text-wovio-charcoal" />
            </div>
            <h2 className="text-lg font-display font-bold text-wovio-charcoal">
              Autopilot Schedule
            </h2>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-wovio-charcoal mb-2">
                  Publishing Volume
                </label>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-xl border border-wovio-zinc bg-white cursor-pointer hover:border-wovio-lavender/50 transition-colors shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-[5px] border-wovio-lavender bg-white" />
                      <span className="text-sm font-medium text-wovio-charcoal">
                        1 post per day
                      </span>
                    </div>
                  </label>
                  <label className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50 cursor-not-allowed">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-2 border-slate-200 bg-white" />
                      <span className="text-sm font-medium text-slate-400">
                        2 posts per day
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      <span className="px-2 py-0.5 rounded-md bg-wovio-lavender/20 text-[10px] font-bold text-slate-800 uppercase tracking-wide">
                        Pro
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-wovio-charcoal mb-2">
                  Target Days
                </label>
                <div className="flex items-center gap-2">
                  {days.map((day, idx) => {
                    const isWeekend = idx === 5 || idx === 6;
                    if (isWeekend) {
                      return (
                        <div
                          key={idx}
                          className="relative w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 border border-slate-200 cursor-not-allowed"
                        >
                          <span className="text-sm font-medium text-slate-400 opacity-60">
                            {day}
                          </span>
                          <Lock className="w-3 h-3 absolute top-0.5 right-0.5 text-slate-400" />
                        </div>
                      );
                    }
                    return (
                      <button
                        key={idx}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                          activeDays.includes(idx)
                            ? "bg-wovio-charcoal text-white shadow-md"
                            : "bg-wovio-snow border border-wovio-zinc text-wovio-slate hover:bg-zinc-100"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-wovio-slate mt-3">
                  Weekend scheduling and multi-post days are available on Pro
                  plans.
                </p>
              </div>
            </div>

            <div className="h-px bg-zinc-100 w-full my-6" />

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-wovio-charcoal">
                Publishing Window & Pacing
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-wovio-slate mb-1.5">
                    Time Range
                  </label>
                  <select className="w-full appearance-none bg-wovio-snow border border-wovio-zinc text-wovio-charcoal text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:border-wovio-lavender focus:ring-1 focus:ring-wovio-lavender">
                    <option>08:00 AM - 11:00 AM</option>
                    <option>11:00 AM - 02:00 PM</option>
                    <option>02:00 PM - 05:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-wovio-slate mb-1.5">
                    Timezone
                  </label>
                  <select className="w-full appearance-none bg-wovio-snow border border-wovio-zinc text-wovio-charcoal text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:border-wovio-lavender focus:ring-1 focus:ring-wovio-lavender">
                    <option>EST - New York</option>
                    <option>PST - Los Angeles</option>
                    <option>GMT - London</option>
                  </select>
                </div>
              </div>

              <p className="text-[13px] text-wovio-slate leading-relaxed pt-1">
                Posts will be randomly published within this window to simulate
                human pacing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-end pt-4">
        <button className="flex items-center gap-2 bg-wovio-coral hover:bg-wovio-coral/90 text-white px-8 py-3 rounded-xl font-bold transition-transform active:scale-95 shadow-md shadow-wovio-coral/20 text-base">
          Save & Activate Autopilot
        </button>
      </div>
    </div>
  );
}
