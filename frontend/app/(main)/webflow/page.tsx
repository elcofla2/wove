"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Box, ArrowRight, Zap, Plug, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function WebflowIntegration() {
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-8 border border-blue-500/20">
            <Box className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-display font-bold text-white mb-6">
            Wovio for <span className="text-blue-500">Webflow</span>
          </h1>
          <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Keep your pixel-perfect design. Let Wovio handle the content. Seamlessly sync AI-generated articles directly into your Webflow CMS Collections.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-6 rounded-full">
            Connect Webflow <ArrowRight className="ml-2 w-5 h-5" />
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
              Integrate directly from the Webflow Apps Directory with a single click. No technical setup required.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-wovio-mint flex-shrink-0" />
                <span><strong>Official Webflow App:</strong> Find Wovio in the Webflow Integrations Directory, click "Add to Site", and authorize securely via OAuth.</span>
              </li>
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-wovio-mint flex-shrink-0" />
                <span><strong>Schema Detection:</strong> Wovio automatically reads your CMS Collections (like "Blog Posts") and understands your custom fields.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl border border-wovio-zinc shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-blue-500" />
              <h2 className="text-2xl font-display font-bold text-wovio-charcoal">How it Works</h2>
            </div>
            <p className="text-wovio-slate mb-6">
              We respect your custom fields. Wovio maps its AI outputs directly to your specific Webflow architecture.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span><strong>Rich Text Sync:</strong> Articles are delivered as native Webflow Rich Text blocks, keeping your typography flawless.</span>
              </li>
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span><strong>Custom Field Mapping:</strong> Wovio can auto-fill Summary, Author, Categories, and Meta tags natively.</span>
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
            <h3 className="font-bold text-lg text-wovio-charcoal mb-2">Will it break my Webflow design?</h3>
            <p className="text-wovio-slate">Never. Wovio only creates CMS items. It does not touch your static pages, styles, or classes. Your design remains 100% yours.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-wovio-zinc">
            <h3 className="font-bold text-lg text-wovio-charcoal mb-2">Are posts staged or published immediately?</h3>
            <p className="text-wovio-slate">Wovio creates items as "Staged" by default so you can review them in the Webflow Designer, but you can toggle auto-publishing if your plan allows it.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-wovio-zinc">
            <h3 className="font-bold text-lg text-wovio-charcoal mb-2">Can Wovio map to Reference fields?</h3>
            <p className="text-wovio-slate">Yes. If your "Blog Post" references an "Author" collection, Wovio will automatically link the newly generated post to the correct author ID.</p>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
