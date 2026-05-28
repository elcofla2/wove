"use client";

import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Download,
  ExternalLink,
  Zap,
  CheckCircle2,
} from "lucide-react";

export default function BillingPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-wovio-charcoal mb-2">
          Billing & Payments
        </h1>
        <p className="text-wovio-slate">
          Manage your subscription, payment methods, and billing history.
        </p>
      </div>

      {/* Current Plan Overview */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-wovio-lavender/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-wovio-lavender/10 rounded-full blur-[60px] -mr-20 -mt-20 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-display font-bold text-wovio-charcoal">
                Growth Plan
              </h2>
              <span className="px-3 py-1 bg-wovio-mint/20 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Active
              </span>
            </div>
            <p className="text-wovio-slate">
              You are currently billed{" "}
              <strong className="text-wovio-charcoal">$149.00/month</strong>.
            </p>
            <p className="text-sm text-wovio-slate mt-1">
              Next payment due on{" "}
              <strong className="text-wovio-charcoal">June 12, 2026</strong>.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button className="bg-wovio-lavender hover:bg-wovio-lavender/90 text-white font-bold px-6 py-5 rounded-xl shadow-md shadow-wovio-lavender/20">
              <Zap className="w-4 h-4 mr-2" /> Upgrade to Agency
            </Button>
            <button className="text-wovio-slate hover:text-wovio-charcoal text-sm font-medium transition-colors">
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Payment Methods */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-wovio-zinc">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-display font-bold text-wovio-charcoal">
              Payment Methods
            </h3>
            <button className="text-sm font-bold text-wovio-lavender hover:text-wovio-lavender/80 transition-colors">
              + Add New
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-wovio-zinc rounded-xl bg-wovio-snow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-white border border-zinc-200 rounded flex items-center justify-center shadow-sm">
                  <span className="text-[#1A1F71] font-bold text-xs italic">
                    VISA
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-wovio-charcoal text-sm">
                    •••• •••• •••• 4242
                  </p>
                  <p className="text-xs text-wovio-slate">Expires 12/28</p>
                </div>
              </div>
              <span className="text-xs font-bold text-wovio-slate uppercase bg-zinc-100 px-2 py-1 rounded">
                Default
              </span>
            </div>
          </div>
        </div>

        {/* Billing History (Invoices) */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-wovio-zinc">
          <h3 className="text-xl font-display font-bold text-wovio-charcoal mb-6">
            Billing History
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-zinc-100 last:border-0">
              <div>
                <p className="font-semibold text-wovio-charcoal text-sm">
                  Growth Plan - Monthly
                </p>
                <p className="text-xs text-wovio-slate">May 12, 2026</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-wovio-charcoal">$149.00</span>
                <button className="text-wovio-slate hover:text-wovio-charcoal transition-colors p-2 rounded-lg hover:bg-zinc-100">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-zinc-100 last:border-0">
              <div>
                <p className="font-semibold text-wovio-charcoal text-sm">
                  Growth Plan - Monthly
                </p>
                <p className="text-xs text-wovio-slate">Apr 12, 2026</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-wovio-charcoal">$149.00</span>
                <button className="text-wovio-slate hover:text-wovio-charcoal transition-colors p-2 rounded-lg hover:bg-zinc-100">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full mt-6 rounded-xl border-wovio-zinc text-wovio-charcoal"
          >
            View complete history{" "}
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
