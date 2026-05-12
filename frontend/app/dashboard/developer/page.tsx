"use client";

import { Key, Copy, Plus, AlertCircle, Eye, EyeOff, Trash2 } from "lucide-react";
import { useState } from "react";

export default function DeveloperApiPage() {
  const [showKey, setShowKey] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-jakarta font-bold text-[#18181B]">Developer API</h1>
        <p className="text-[#71717A] mt-1">Manage your API keys for custom integrations and headless CMS architecture.</p>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-blue-900">API Documentation</h3>
          <p className="text-sm text-blue-800 mt-1">
            Use these keys to authenticate your requests to the Wovio REST API. 
            Remember to never expose these keys in client-side code (like frontend React apps). 
            Always keep them secure in your backend environment variables.
          </p>
          <a href="#" className="text-sm font-bold text-blue-700 hover:text-blue-900 mt-3 inline-block underline">
            Read the API Docs &rarr;
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-zinc-100 pb-6">
          <div>
            <h2 className="text-xl font-jakarta font-bold text-[#18181B]">Secret API Keys</h2>
            <p className="text-sm text-[#71717A] mt-1">These keys allow full programmatic access to your workspace.</p>
          </div>
          <button className="bg-[#18181B] hover:bg-zinc-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" /> Create new secret key
          </button>
        </div>

        {/* Key List */}
        <div className="space-y-4">
          
          {/* Key Item */}
          <div className="border border-zinc-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-zinc-300 transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <p className="font-bold text-[#18181B]">Production Key</p>
                <span className="px-2 py-0.5 bg-[#80ED99]/20 text-[#2b7a3d] text-[10px] font-bold uppercase tracking-wide rounded">Active</span>
              </div>
              <p className="text-xs text-[#71717A]">Created May 01, 2026 • Last used: Today</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center bg-[#FAFAFA] border border-zinc-200 rounded-lg overflow-hidden">
                <div className="px-3 py-2 border-r border-zinc-200 bg-white">
                  <Key className="w-4 h-4 text-zinc-400" />
                </div>
                <div className="px-4 py-2 font-mono text-sm text-[#18181B] w-64 select-all">
                  {showKey ? "wv_prod_9f8d7c6b5a4123456789" : "wv_prod_••••••••••••••••••••"}
                </div>
                <button 
                  onClick={() => setShowKey(!showKey)}
                  className="px-3 py-2 hover:bg-zinc-100 text-zinc-500 transition-colors border-l border-zinc-200"
                  title="Toggle visibility"
                >
                  {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <button className="p-2.5 rounded-lg border border-zinc-200 text-[#71717A] hover:bg-zinc-50 hover:text-[#18181B] transition-colors" title="Copy to clipboard">
                <Copy className="w-4 h-4" />
              </button>
              <button className="p-2.5 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 transition-colors" title="Revoke Key">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Key Item 2 */}
          <div className="border border-zinc-200 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-zinc-300 transition-colors opacity-60">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <p className="font-bold text-[#18181B]">Staging Key</p>
              </div>
              <p className="text-xs text-[#71717A]">Created April 15, 2026 • Never used</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center bg-[#FAFAFA] border border-zinc-200 rounded-lg overflow-hidden">
                <div className="px-3 py-2 border-r border-zinc-200 bg-white">
                  <Key className="w-4 h-4 text-zinc-400" />
                </div>
                <div className="px-4 py-2 font-mono text-sm text-[#71717A] w-64">
                  wv_test_••••••••••••••••••••
                </div>
              </div>
              <button className="p-2.5 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 transition-colors" title="Revoke Key">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
