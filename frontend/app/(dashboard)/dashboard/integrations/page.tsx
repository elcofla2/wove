"use client";

import { Button } from "@/components/ui/button";
import { Layout, ShoppingCart, Box, Code, AlertCircle, Plus, CheckCircle2, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function IntegrationsPage() {
  // Simulating state for the Free Tier
  const isFreeTier = true;
  const activeIntegrations = 1; // Free tier max is 1
  const maxIntegrations = isFreeTier ? 1 : 999;

  return (
    <div className="max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-wovio-charcoal mb-2">Integrations</h1>
        <p className="text-wovio-slate">Manage your CMS connections and API keys.</p>
      </div>

      {/* Free Tier Warning */}
      {isFreeTier && activeIntegrations >= maxIntegrations && (
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex items-start gap-4 mb-8">
          <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-orange-800">Integration Limit Reached</h3>
            <p className="text-sm text-orange-700 mt-1">
              You are currently on the Free (Hobby) plan, which limits you to 1 active integration. To connect multiple channels simultaneously, please upgrade your plan.
            </p>
            <Link href="/pricing">
              <Button size="sm" className="mt-3 bg-orange-500 hover:bg-orange-600 text-white font-bold">
                Upgrade to Pro
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Active Integrations */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-wovio-charcoal mb-4 flex items-center gap-2">
          Active Connections <span className="bg-wovio-zinc text-wovio-slate text-xs px-2 py-0.5 rounded-full">{activeIntegrations} / {isFreeTier ? "1" : "∞"}</span>
        </h2>
        
        <div className="bg-white rounded-2xl border border-wovio-zinc p-6 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-wovio-lavender/10 rounded-xl flex items-center justify-center">
              <Layout className="w-6 h-6 text-wovio-lavender" />
            </div>
            <div>
              <h3 className="font-bold text-wovio-charcoal text-lg flex items-center gap-2">
                WordPress <CheckCircle2 className="w-4 h-4 text-wovio-mint" />
              </h3>
              <p className="text-xs text-wovio-slate">Connected on May 12, 2026 • acmeroofing.com</p>
            </div>
          </div>
          <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300">
            Disconnect
          </Button>
        </div>
      </div>

      {/* Available Integrations */}
      <div>
        <h2 className="text-xl font-bold text-wovio-charcoal mb-4">Available Channels</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Shopify */}
          <div className="bg-white rounded-2xl border border-wovio-zinc p-6 shadow-sm hover:border-wovio-lavender/30 transition-colors flex flex-col items-start opacity-70">
            <div className="w-10 h-10 bg-wovio-mint/10 rounded-xl flex items-center justify-center mb-4">
              <ShoppingCart className="w-5 h-5 text-wovio-mint" />
            </div>
            <h3 className="font-bold text-wovio-charcoal mb-1">Shopify</h3>
            <p className="text-xs text-wovio-slate mb-4 flex-1">Sync your e-commerce product catalog and collections.</p>
            <Button 
              variant="outline" 
              className="w-full" 
              disabled={isFreeTier && activeIntegrations >= maxIntegrations}
            >
              {isFreeTier && activeIntegrations >= maxIntegrations ? (
                <><Lock className="w-4 h-4 mr-2 text-zinc-400" /> Upgrade to Unlock</>
              ) : (
                <><Plus className="w-4 h-4 mr-2" /> Connect</>
              )}
            </Button>
          </div>

          {/* Webflow */}
          <div className="bg-white rounded-2xl border border-wovio-zinc p-6 shadow-sm hover:border-wovio-lavender/30 transition-colors flex flex-col items-start opacity-70">
            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
              <Box className="w-5 h-5 text-blue-500" />
            </div>
            <h3 className="font-bold text-wovio-charcoal mb-1">Webflow</h3>
            <p className="text-xs text-wovio-slate mb-4 flex-1">Push articles directly to your CMS Collections.</p>
            <Button 
              variant="outline" 
              className="w-full" 
              disabled={isFreeTier && activeIntegrations >= maxIntegrations}
            >
              {isFreeTier && activeIntegrations >= maxIntegrations ? (
                <><Lock className="w-4 h-4 mr-2 text-zinc-400" /> Upgrade to Unlock</>
              ) : (
                <><Plus className="w-4 h-4 mr-2" /> Connect</>
              )}
            </Button>
          </div>

          {/* REST API */}
          <div className="bg-white rounded-2xl border border-wovio-zinc p-6 shadow-sm hover:border-wovio-lavender/30 transition-colors flex flex-col items-start opacity-70">
            <div className="w-10 h-10 bg-wovio-coral/10 rounded-xl flex items-center justify-center mb-4">
              <Code className="w-5 h-5 text-wovio-coral" />
            </div>
            <h3 className="font-bold text-wovio-charcoal mb-1">REST API</h3>
            <p className="text-xs text-wovio-slate mb-4 flex-1">Generate master keys for custom architecture.</p>
            <Button 
              variant="outline" 
              className="w-full" 
              disabled={isFreeTier && activeIntegrations >= maxIntegrations}
            >
              {isFreeTier && activeIntegrations >= maxIntegrations ? (
                <><Lock className="w-4 h-4 mr-2 text-zinc-400" /> Upgrade to Unlock</>
              ) : (
                <><Plus className="w-4 h-4 mr-2" /> Generate Key</>
              )}
            </Button>
          </div>

        </div>
      </div>

    </div>
  );
}
