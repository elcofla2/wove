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
            <h3 className="text-2xl font-display font-bold text-wovio-charcoal mb-2">Hobby</h3>
            <p className="text-wovio-slate text-sm mb-6 h-10">Experience the full AI brain with limited volume.</p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-wovio-charcoal">$0</span>
              <span className="text-wovio-slate font-medium">/ forever</span>
            </div>
            <Link href="/signup?plan=hobby" className="block mb-8">
              <Button className="w-full bg-wovio-charcoal hover:bg-wovio-charcoal/90 text-white font-bold py-6 rounded-xl">
                Start for Free
              </Button>
            </Link>
            
            <div className="space-y-4">
              <p className="font-bold text-sm text-wovio-charcoal uppercase tracking-wider">Capacity Limits:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-coral flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-wovio-charcoal">1 Company / Workspace</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-coral flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-wovio-charcoal">Publish 2 days a week (Max 1 post/day)</span>
                </li>
              </ul>

              <p className="font-bold text-sm text-wovio-charcoal uppercase tracking-wider">Included AI Power:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-wovio-slate">Pre-publish Deep SERP Research</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-wovio-slate">Stock Photography (Unsplash)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-wovio-slate">SEO, GEO, and AEO formatting applied</span>
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
            
            <h3 className="text-2xl font-display font-bold text-white mb-2 relative z-10">Pro</h3>
            <p className="text-zinc-400 text-sm mb-6 h-10 relative z-10">For serious brands scaling their organic pipeline.</p>
            <div className="mb-6 relative z-10">
              <span className="text-5xl font-bold text-white">$99</span>
              <span className="text-zinc-400 font-medium">/ month</span>
            </div>
            <Link href="/signup?plan=pro" className="block mb-8 relative z-10">
              <Button className="w-full bg-wovio-coral hover:bg-wovio-coral/90 text-white font-bold py-6 rounded-xl shadow-lg shadow-wovio-coral/20 w-full">
                Upgrade to Pro
              </Button>
            </Link>
            
            <div className="space-y-4 relative z-10">
              <p className="font-bold text-sm text-wovio-lavender uppercase tracking-wider">Capacity Limits:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-wovio-lavender flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">3 Companies / Workspaces</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-wovio-lavender flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Unlimited publishing days</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-wovio-lavender flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">Up to 3 posts per day (90/mo)</span>
                </li>
              </ul>

              <p className="font-bold text-sm text-wovio-lavender uppercase tracking-wider">Everything in Hobby, plus:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Premium AI Images (DALL-E 3)</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Auto-publish directly to CMS</span>
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-wovio-mint flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom Brand Voice Training</span>
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

              <p className="font-bold text-sm text-wovio-charcoal uppercase tracking-wider">Everything in Pro, plus:</p>
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
                <th className="p-6 font-display font-bold text-wovio-charcoal text-center w-1/5">Hobby</th>
                <th className="p-6 font-display font-bold text-wovio-charcoal text-center w-1/5 bg-wovio-lavender/5">Pro</th>
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
                <td className="p-4 text-center font-bold">8 (2/week)</td>
                <td className="p-4 text-center bg-wovio-lavender/5 font-bold text-wovio-lavender">90 (3/day)</td>
                <td className="p-4 text-center font-bold text-wovio-coral">Unlimited</td>
              </tr>
              <tr className="border-b border-wovio-zinc/50 hover:bg-wovio-snow/50 transition-colors">
                <td className="p-4 pl-6 font-medium text-wovio-charcoal">Auto-publish to CMS</td>
                <td className="p-4 text-center"><XCircle className="w-5 h-5 text-wovio-zinc mx-auto" /></td>
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
