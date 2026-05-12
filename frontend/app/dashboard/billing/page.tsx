"use client";

import { CreditCard, Download, ExternalLink, Zap, CheckCircle2 } from "lucide-react";

export default function BillingPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-jakarta font-bold text-[#18181B]">Billing & Payments</h1>
        <p className="text-[#71717A] mt-1">Manage your subscription, payment methods, and billing history.</p>
      </div>

      {/* Current Plan Overview */}
      <div className="bg-white rounded-2xl p-8 shadow-lg shadow-zinc-200/50 border border-[#B28DFF]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#B28DFF]/10 rounded-full blur-[60px] -mr-20 -mt-20 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-jakarta font-bold text-[#18181B]">Pro Plan</h2>
              <span className="px-3 py-1 bg-[#80ED99]/20 text-[#2b7a3d] text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Active
              </span>
            </div>
            <p className="text-[#71717A]">You are currently billed <strong className="text-[#18181B]">$99.00/month</strong>.</p>
            <p className="text-sm text-[#71717A] mt-1">Next payment due on <strong className="text-[#18181B]">June 12, 2026</strong>.</p>
          </div>

          <div className="flex flex-col gap-3">
            <button className="bg-[#B28DFF] hover:bg-[#a074f7] text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors shadow-sm flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" /> Upgrade to Agency
            </button>
            <button className="text-[#71717A] hover:text-[#18181B] text-sm font-medium transition-colors">
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Payment Methods */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-jakarta font-bold text-[#18181B]">Payment Methods</h3>
            <button className="text-sm font-semibold text-[#B28DFF] hover:text-[#916ce6] transition-colors">
              + Add New
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-zinc-200 rounded-xl bg-[#FAFAFA]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-white border border-zinc-200 rounded flex items-center justify-center shadow-sm">
                  {/* Simulating a Visa/Mastercard Logo */}
                  <span className="text-[#1A1F71] font-bold text-xs italic">VISA</span>
                </div>
                <div>
                  <p className="font-semibold text-[#18181B] text-sm">•••• •••• •••• 4242</p>
                  <p className="text-xs text-[#71717A]">Expires 12/28</p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#71717A] uppercase bg-zinc-100 px-2 py-1 rounded">Default</span>
            </div>
          </div>
        </div>

        {/* Billing History (Invoices) */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200">
          <h3 className="text-xl font-jakarta font-bold text-[#18181B] mb-6">Billing History</h3>

          <div className="space-y-4">
            {/* Invoice 1 */}
            <div className="flex items-center justify-between py-3 border-b border-zinc-100 last:border-0">
              <div>
                <p className="font-semibold text-[#18181B] text-sm">Pro Plan - Monthly</p>
                <p className="text-xs text-[#71717A]">May 12, 2026</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-[#18181B]">$99.00</span>
                <button className="text-[#71717A] hover:text-[#18181B] transition-colors p-2 rounded-lg hover:bg-zinc-100">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Invoice 2 */}
            <div className="flex items-center justify-between py-3 border-b border-zinc-100 last:border-0">
              <div>
                <p className="font-semibold text-[#18181B] text-sm">Pro Plan - Monthly</p>
                <p className="text-xs text-[#71717A]">Apr 12, 2026</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-[#18181B]">$99.00</span>
                <button className="text-[#71717A] hover:text-[#18181B] transition-colors p-2 rounded-lg hover:bg-zinc-100">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
            
          </div>
          
          <button className="w-full mt-6 py-2.5 text-sm font-semibold text-[#18181B] border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2">
            View complete history <ExternalLink className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
