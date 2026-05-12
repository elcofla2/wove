"use client";

import { Terminal, ShoppingCart, LayoutTemplate, Box, Settings, Lock } from "lucide-react";

export default function IntegrationsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-jakarta font-bold text-[#18181B]">Integrations & Channels</h1>
        <p className="text-[#71717A] mt-1">Connect your CMS to enable 100% autonomous publishing.</p>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: WordPress (Connected) */}
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-100 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-[#80ED99]/30 transition-all duration-300 group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] border border-zinc-200 flex items-center justify-center group-hover:bg-[#80ED99]/10 transition-colors">
              <Box className="w-6 h-6 text-[#18181B]" />
            </div>
            <span className="flex items-center gap-2 px-3 py-1.5 bg-[#80ED99]/10 rounded-full border border-[#80ED99]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#80ED99] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#40c057]"></span>
              </span>
              <span className="text-xs font-semibold text-[#2b7a3d]">Connected to acme-solar.com</span>
            </span>
          </div>

          <div className="flex-1 space-y-2">
            <h2 className="text-xl font-jakarta font-semibold text-[#18181B]">WordPress</h2>
            <p className="text-sm text-[#71717A] leading-relaxed">
              Direct publishing via REST API.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-100">
            <button className="w-full flex items-center justify-center gap-2 bg-white border border-zinc-200 hover:bg-zinc-50 text-[#18181B] px-4 py-2.5 rounded-xl text-sm font-medium transition-colors shadow-sm">
              <Settings className="w-4 h-4 text-[#71717A]" />
              Manage Connection
            </button>
          </div>
        </div>

        {/* Card 2: Webflow */}
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-100 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-[#B28DFF]/30 transition-all duration-300 group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] border border-zinc-200 flex items-center justify-center group-hover:bg-[#B28DFF]/10 transition-colors">
              <LayoutTemplate className="w-6 h-6 text-[#18181B]" />
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <h2 className="text-xl font-jakarta font-semibold text-[#18181B]">Webflow</h2>
            <p className="text-sm text-[#71717A] leading-relaxed">
              Publish directly to your Webflow CMS collections.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-100">
            <button disabled className="w-full flex items-center justify-center gap-2 bg-zinc-100 text-zinc-400 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-not-allowed">
              <Lock className="w-4 h-4" /> Upgrade to Unlock
            </button>
          </div>
        </div>

        {/* Card 3: Shopify */}
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-100 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-[#B28DFF]/30 transition-all duration-300 group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] border border-zinc-200 flex items-center justify-center group-hover:bg-[#B28DFF]/10 transition-colors">
              <ShoppingCart className="w-6 h-6 text-[#18181B]" />
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <h2 className="text-xl font-jakarta font-semibold text-[#18181B]">Shopify Blog</h2>
            <p className="text-sm text-[#71717A] leading-relaxed">
              Automate SEO content for your e-commerce store.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-100">
            <button disabled className="w-full flex items-center justify-center gap-2 bg-zinc-100 text-zinc-400 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-not-allowed">
              <Lock className="w-4 h-4" /> Upgrade to Unlock
            </button>
          </div>
        </div>

        {/* Card 4: Custom API */}
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-zinc-200/50 border border-zinc-100 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-100 transition-colors">
              <Terminal className="w-6 h-6 text-[#18181B]" />
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <h2 className="text-xl font-jakarta font-semibold text-[#18181B]">Custom API</h2>
            <p className="text-sm text-[#71717A] leading-relaxed">
              Build your own integration via Webhooks.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-100">
            <button disabled className="w-full flex items-center justify-center gap-2 bg-zinc-100 text-zinc-400 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-not-allowed">
              <Lock className="w-4 h-4" /> Upgrade to Unlock
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
