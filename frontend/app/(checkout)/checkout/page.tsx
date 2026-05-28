"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock, CheckCircle2, CreditCard } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-wovio-snow flex flex-col items-center py-12 px-4 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-wovio-lavender/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <div className="w-full max-w-5xl mb-8 flex items-center justify-between relative z-10">
        <Link href="/signup?plan=pro" className="flex items-center gap-2 text-wovio-slate hover:text-wovio-charcoal font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Account
        </Link>
        <div className="text-2xl font-display font-black tracking-tighter text-wovio-charcoal">
          Wovio.
        </div>
        <div className="flex items-center gap-2 text-wovio-slate text-sm font-medium">
          <Lock className="w-4 h-4" /> Secure Checkout
        </div>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Col: Payment Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-wovio-zinc">
          <h1 className="text-3xl font-display font-bold text-wovio-charcoal mb-2">Payment Details</h1>
          <p className="text-wovio-slate mb-8">Complete your subscription to Wovio Growth.</p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Card Information */}
            <div className="space-y-4">
              <h3 className="font-bold text-wovio-charcoal">Card Information</h3>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Card Number"
                  className="w-full px-4 py-3 pl-12 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-wovio-lavender/50 focus:border-wovio-lavender transition-all"
                />
                <CreditCard className="w-5 h-5 text-zinc-400 absolute left-4 top-3.5" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-wovio-lavender/50 focus:border-wovio-lavender transition-all"
                />
                <input 
                  type="text" 
                  placeholder="CVC"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-wovio-lavender/50 focus:border-wovio-lavender transition-all"
                />
              </div>
            </div>

            {/* Billing Address */}
            <div className="space-y-4 pt-4 border-t border-zinc-100">
              <h3 className="font-bold text-wovio-charcoal">Billing Address</h3>
              
              <input 
                type="text" 
                placeholder="Name on card"
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-wovio-lavender/50 focus:border-wovio-lavender transition-all"
              />
              <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-wovio-lavender/50 focus:border-wovio-lavender transition-all text-wovio-charcoal appearance-none">
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="EU">European Union</option>
                <option value="OTHER">Other</option>
              </select>
            </div>

            <Link href="/dashboard" className="block pt-6">
              <Button className="w-full bg-wovio-charcoal hover:bg-wovio-charcoal/90 text-white font-bold py-7 rounded-xl shadow-lg text-lg">
                Pay $149.00
              </Button>
            </Link>
            
            <p className="text-center text-xs text-wovio-slate mt-4">
              Your payment is processed securely by Stripe.
            </p>
          </form>
        </motion.div>

        {/* Right Col: Order Summary */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-5">
          <div className="bg-wovio-charcoal rounded-3xl p-8 sm:p-10 shadow-xl text-white sticky top-8">
            <h2 className="text-2xl font-display font-bold mb-6">Order Summary</h2>
            
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-700">
              <div>
                <p className="font-bold text-lg">Wovio Growth</p>
                <p className="text-zinc-400 text-sm">Monthly Subscription</p>
              </div>
              <p className="font-bold text-lg">$149.00</p>
            </div>

            <div className="flex justify-between items-center mb-6">
              <p className="text-zinc-400">Total due today</p>
              <p className="text-3xl font-bold">$149.00</p>
            </div>

            <div className="space-y-4">
              <p className="font-bold text-sm text-wovio-lavender uppercase tracking-wider">What's included:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-lavender flex-shrink-0 mt-0.5" />
                  <span className="text-sm">12 automated daily tasks (SEO·AEO·GEO)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-lavender flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Up to 24 posts/month auto-published</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-lavender flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Competitor intelligence scanning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-lavender flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Direct CMS auto-publishing</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
