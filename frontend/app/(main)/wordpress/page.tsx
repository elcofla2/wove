"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Layout, ArrowRight, Zap, Plug, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function WordPressIntegration() {
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-wovio-lavender/10 mb-8 border border-wovio-lavender/20">
            <Layout className="w-8 h-8 text-wovio-lavender" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-display font-bold text-white mb-6">
            Wovio for <span className="text-wovio-lavender">WordPress</span>
          </h1>
          <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Transform your WordPress blog into an autonomous organic traffic engine. Wovio connects directly to your WP Admin and handles the entire editorial flow.
          </p>
          <Button size="lg" className="bg-wovio-coral hover:bg-wovio-coral/90 text-white font-bold px-8 py-6 rounded-full">
            Connect WordPress <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>

      {/* Connection & Application */}
      <section className="w-full max-w-6xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl border border-wovio-zinc shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <Plug className="w-8 h-8 text-wovio-mint" />
              <h2 className="text-2xl font-display font-bold text-wovio-charcoal">How it Connects</h2>
            </div>
            <p className="text-wovio-slate mb-6">
              Connect your site exactly how you prefer. We offer two seamless methods depending on your technical comfort.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-wovio-mint flex-shrink-0" />
                <span><strong>1-Click Plugin:</strong> Download the official Wovio plugin. Click "Connect" and you're instantly synced. Perfect for non-technical teams.</span>
              </li>
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-wovio-mint flex-shrink-0" />
                <span><strong>Native REST API:</strong> Don't want another plugin? Generate a secure Application Password directly in WP Admin. Zero plugin bloat.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl border border-wovio-zinc shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-wovio-coral" />
              <h2 className="text-2xl font-display font-bold text-wovio-charcoal">How it Works</h2>
            </div>
            <p className="text-wovio-slate mb-6">
              Once connected, Wovio acts as your ghostwriter and editor right inside your WordPress dashboard.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-wovio-coral flex-shrink-0" />
                <span><strong>Native Formatting:</strong> Generates beautiful Gutenberg-ready blocks (H2s, H3s, Lists, Tables).</span>
              </li>
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-wovio-coral flex-shrink-0" />
                <span><strong>SEO Plugin Ready:</strong> Automatically populates Meta Titles and Descriptions for Yoast or RankMath.</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* FAQ & Key Points */}
      <section className="w-full max-w-4xl mx-auto px-4 mt-24">
        <div className="text-center mb-12">
          <Settings className="w-10 h-10 text-wovio-slate mx-auto mb-4" />
          <h2 className="text-3xl font-display font-bold text-wovio-charcoal">Key Points & FAQ</h2>
        </div>
        
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-wovio-zinc">
            <h3 className="font-bold text-lg text-wovio-charcoal mb-2">Does Wovio publish automatically or save as drafts?</h3>
            <p className="text-wovio-slate">It's up to you. You can set the Autopilot to push directly to "Published" or save them as "Drafts" for your manual review before going live.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-wovio-zinc">
            <h3 className="font-bold text-lg text-wovio-charcoal mb-2">Can it handle custom post types?</h3>
            <p className="text-wovio-slate">Yes! Wovio detects standard "Posts" but can easily be configured to publish to any Custom Post Type (CPT) exposed via your WP REST API.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-wovio-zinc">
            <h3 className="font-bold text-lg text-wovio-charcoal mb-2">What about featured images?</h3>
            <p className="text-wovio-slate">Wovio can automatically assign relevant royalty-free featured images from Unsplash, or you can use your own media library.</p>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
