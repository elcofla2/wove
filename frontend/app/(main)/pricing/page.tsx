"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Zap, Star } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-wovio-snow w-full pb-20">
      
      {/* Hero Section */}
      <section className="w-full bg-wovio-charcoal py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wovio-lavender/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-wovio-coral/20 rounded-full blur-[100px] pointer-events-none"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl sm:text-6xl font-display font-bold text-white mb-6">
            Priced for <span className="text-wovio-coral">Growth.</span>
          </h1>
          <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Get the full power of our AI Engine for free. Upgrade only when you are ready to scale your content volume.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full max-w-7xl mx-auto px-4 -mt-10 relative z-20 mb-24">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* FREE PLAN */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 border border-wovio-zinc shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-wovio-zinc/50 text-wovio-charcoal text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              No Credit Card
            </div>
            <h3 className="text-2xl font-display font-bold text-wovio-charcoal mb-2">Free</h3>
            <p className="text-wovio-slate text-sm mb-6 h-10">Real results in 3 months. Auto-publish included.</p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-wovio-charcoal">$0</span>
              <span className="text-wovio-slate font-medium">/ forever</span>
            </div>
            <Link href="/signup?plan=free" className="block mb-8">
              <Button className="w-full bg-wovio-charcoal hover:bg-wovio-charcoal/90 text-white font-bold py-6 rounded-xl">
                Start for Free
              </Button>
            </Link>
            
            <div className="space-y-4">
              <p className="font-bold text-sm text-wovio-charcoal uppercase tracking-wider">What you get:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-wovio-charcoal">8 AI posts/month (2/week) auto-published</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-wovio-charcoal">WordPress auto-publish included</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-wovio-charcoal">3 basic daily schedule tasks active</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-wovio-charcoal">SEO, AEO & GEO formatting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-wovio-charcoal">Growth Engine preview (30-day plan)</span>
                </li>
              </ul>

              <p className="font-bold text-sm text-zinc-400 uppercase tracking-wider">Upgrade to unlock:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-wovio-zinc flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-400">9 advanced daily automation tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-wovio-zinc flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-400">Competitor intelligence & GEO optimizer</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-wovio-zinc flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-400">Old content refresh & link planning</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* PRO PLAN */}
          <motion.div variants={itemVariants} className="bg-wovio-charcoal rounded-3xl p-8 shadow-2xl relative overflow-hidden transform md:-translate-y-4 border border-wovio-lavender/30">
            <div className="absolute top-0 right-0 bg-wovio-lavender text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" /> Most Popular
            </div>
            <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-wovio-lavender/20 rounded-full blur-[80px]"></div>
            
            <h3 className="text-2xl font-display font-bold text-white mb-2 relative z-10">Growth</h3>
            <p className="text-zinc-400 text-sm mb-6 h-10 relative z-10">Full autopilot. 12 daily tasks. Zero intervention.</p>
            <div className="mb-6 relative z-10">
              <span className="text-5xl font-bold text-white">$149</span>
              <span className="text-zinc-400 font-medium">/ month</span>
            </div>
            <Link href="/signup?plan=growth" className="block mb-8 relative z-10">
              <Button className="w-full bg-wovio-coral hover:bg-wovio-coral/90 text-white font-bold py-6 rounded-xl shadow-lg shadow-wovio-coral/20 w-full">
                Start Growing
              </Button>
            </Link>
            
            <div className="space-y-4 relative z-10">
              <p className="font-bold text-sm text-wovio-lavender uppercase tracking-wider">Full Autopilot Engine:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-wovio-lavender flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">12 automated daily tasks (SEO·AEO·GEO)</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-wovio-lavender flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Competitor intelligence scanning</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-wovio-lavender flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Up to 24 posts/month auto-published</span>
                </li>
              </ul>

              <p className="font-bold text-sm text-wovio-lavender uppercase tracking-wider">Everything in Free, plus:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Auto-publish directly to CMS</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Technical health monitoring</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom Brand Voice + AI Images</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* AGENCY PLAN */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 border border-wovio-zinc shadow-xl relative overflow-hidden">
            <h3 className="text-2xl font-display font-bold text-wovio-charcoal mb-2">Agency</h3>
            <p className="text-wovio-slate text-sm mb-6 h-10">For agencies managing multiple client portfolios.</p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-wovio-charcoal">$299</span>
              <span className="text-wovio-slate font-medium">/ month</span>
            </div>
            <Link href="/contact" className="block mb-8">
              <Button variant="outline" className="w-full border-2 border-wovio-charcoal text-wovio-charcoal hover:bg-wovio-snow font-bold py-6 rounded-xl">
                Contact Sales
              </Button>
            </Link>
            
            <div className="space-y-4">
              <p className="font-bold text-sm text-wovio-charcoal uppercase tracking-wider">Capacity Limits:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-charcoal flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-wovio-charcoal">Unlimited Companies / Workspaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-charcoal flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-wovio-charcoal">Unlimited posts per month</span>
                </li>
              </ul>

              <p className="font-bold text-sm text-wovio-charcoal uppercase tracking-wider">Everything in Growth, plus:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-wovio-slate">Custom Image Models (BYOK)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-wovio-slate">REST API Access</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-wovio-slate">Dedicated Account Manager</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* Detailed Feature Comparison Table */}
      <section className="w-full max-w-5xl mx-auto px-4 mt-10">
        <div className="text-center mb-12">
          <Zap className="w-10 h-10 text-wovio-lavender mx-auto mb-4" />
          <h2 className="text-3xl font-display font-bold text-wovio-charcoal">Compare Features</h2>
          <p className="text-wovio-slate mt-2">See exactly what you get with each plan.</p>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl border border-wovio-zinc shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-wovio-snow border-b border-wovio-zinc">
                <th className="p-6 font-display font-bold text-wovio-charcoal w-1/3">Feature</th>
                <th className="p-6 font-display font-bold text-wovio-charcoal text-center w-1/5">Free</th>
                <th className="p-6 font-display font-bold text-wovio-charcoal text-center w-1/5 bg-wovio-lavender/5">Growth</th>
                <th className="p-6 font-display font-bold text-wovio-charcoal text-center w-1/5">Agency</th>
              </tr>
            </thead>
            <tbody className="text-sm text-wovio-slate">
              {/* Category */}
              <tr>
                <td colSpan={4} className="bg-wovio-snow/50 p-4 font-bold text-wovio-charcoal uppercase tracking-wider text-xs">AI Engine & Research</td>
              </tr>
              <tr className="border-b border-wovio-zinc/50 hover:bg-wovio-snow/50 transition-colors">
                <td className="p-4 pl-6 font-medium text-wovio-charcoal">Pre-publish Deep Research</td>
                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-wovio-mint mx-auto" /></td>
                <td className="p-4 text-center bg-wovio-lavender/5"><CheckCircle2 className="w-5 h-5 text-wovio-mint mx-auto" /></td>
                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-wovio-mint mx-auto" /></td>
              </tr>
              <tr className="border-b border-wovio-zinc/50 hover:bg-wovio-snow/50 transition-colors">
                <td className="p-4 pl-6 font-medium text-wovio-charcoal">SEO, GEO, AEO Formatting</td>
                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-wovio-mint mx-auto" /></td>
                <td className="p-4 text-center bg-wovio-lavender/5"><CheckCircle2 className="w-5 h-5 text-wovio-mint mx-auto" /></td>
                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-wovio-mint mx-auto" /></td>
              </tr>
              <tr className="border-b border-wovio-zinc/50 hover:bg-wovio-snow/50 transition-colors">
                <td className="p-4 pl-6 font-medium text-wovio-charcoal">Real-time Quality Score</td>
                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-wovio-mint mx-auto" /></td>
                <td className="p-4 text-center bg-wovio-lavender/5"><CheckCircle2 className="w-5 h-5 text-wovio-mint mx-auto" /></td>
                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-wovio-mint mx-auto" /></td>
              </tr>
              <tr className="border-b border-wovio-zinc/50 hover:bg-wovio-snow/50 transition-colors">
                <td className="p-4 pl-6 font-medium text-wovio-charcoal">Image Generation</td>
                <td className="p-4 text-center text-xs font-bold text-wovio-slate">Unsplash (Stock)</td>
                <td className="p-4 text-center bg-wovio-lavender/5 text-xs font-bold text-wovio-lavender">DALL-E 3 & Flux</td>
                <td className="p-4 text-center text-xs font-bold text-wovio-coral">Custom Models / BYOK</td>
              </tr>
              <tr className="border-b border-wovio-zinc/50 hover:bg-wovio-snow/50 transition-colors">
                <td className="p-4 pl-6 font-medium text-wovio-charcoal">Custom Brand Voice Training</td>
                <td className="p-4 text-center"><XCircle className="w-5 h-5 text-wovio-zinc mx-auto" /></td>
                <td className="p-4 text-center bg-wovio-lavender/5"><CheckCircle2 className="w-5 h-5 text-wovio-mint mx-auto" /></td>
                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-wovio-mint mx-auto" /></td>
              </tr>

              {/* Category */}
              <tr>
                <td colSpan={4} className="bg-wovio-snow/50 p-4 font-bold text-wovio-charcoal uppercase tracking-wider text-xs border-t border-wovio-zinc/50">Publishing & Limits</td>
              </tr>
              <tr className="border-b border-wovio-zinc/50 hover:bg-wovio-snow/50 transition-colors">
                <td className="p-4 pl-6 font-medium text-wovio-charcoal">Companies / Workspaces</td>
                <td className="p-4 text-center font-bold">1</td>
                <td className="p-4 text-center bg-wovio-lavender/5 font-bold text-wovio-lavender">3</td>
                <td className="p-4 text-center font-bold text-wovio-coral">Unlimited</td>
              </tr>
              <tr className="border-b border-wovio-zinc/50 hover:bg-wovio-snow/50 transition-colors">
                <td className="p-4 pl-6 font-medium text-wovio-charcoal">Posts per Month</td>
                <td className="p-4 text-center font-bold">8/month</td>
                <td className="p-4 text-center bg-wovio-lavender/5 font-bold text-wovio-lavender">24/month</td>
                <td className="p-4 text-center font-bold text-wovio-coral">Unlimited</td>
              </tr>
              <tr className="border-b border-wovio-zinc/50 hover:bg-wovio-snow/50 transition-colors">
                <td className="p-4 pl-6 font-medium text-wovio-charcoal">Auto-publish to CMS</td>
                <td className="p-4 text-center text-xs font-bold text-wovio-slate">WordPress only</td>
                <td className="p-4 text-center bg-wovio-lavender/5"><CheckCircle2 className="w-5 h-5 text-wovio-mint mx-auto" /></td>
                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-wovio-mint mx-auto" /></td>
              </tr>

              {/* Category */}
              <tr>
                <td colSpan={4} className="bg-wovio-snow/50 p-4 font-bold text-wovio-charcoal uppercase tracking-wider text-xs border-t border-wovio-zinc/50">Integrations & Support</td>
              </tr>
              <tr className="border-b border-wovio-zinc/50 hover:bg-wovio-snow/50 transition-colors">
                <td className="p-4 pl-6 font-medium text-wovio-charcoal">CMS Integrations</td>
                <td className="p-4 text-center font-medium">1 Connection</td>
                <td className="p-4 text-center bg-wovio-lavender/5 font-medium">Multiple</td>
                <td className="p-4 text-center font-medium">Unlimited</td>
              </tr>
              <tr className="border-b border-wovio-zinc/50 hover:bg-wovio-snow/50 transition-colors">
                <td className="p-4 pl-6 font-medium text-wovio-charcoal">API Access</td>
                <td className="p-4 text-center"><XCircle className="w-5 h-5 text-wovio-zinc mx-auto" /></td>
                <td className="p-4 text-center bg-wovio-lavender/5"><XCircle className="w-5 h-5 text-wovio-zinc mx-auto" /></td>
                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 text-wovio-mint mx-auto" /></td>
              </tr>
              <tr className="border-b border-wovio-zinc/50 hover:bg-wovio-snow/50 transition-colors">
                <td className="p-4 pl-6 font-medium text-wovio-charcoal">Support Level</td>
                <td className="p-4 text-center">Community</td>
                <td className="p-4 text-center bg-wovio-lavender/5">Priority Email</td>
                <td className="p-4 text-center">Dedicated AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
