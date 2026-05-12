"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Code, ArrowRight, Zap, Plug, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function APIIntegration() {
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-wovio-coral/20 rounded-full blur-[100px] pointer-events-none"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-wovio-coral/10 mb-8 border border-wovio-coral/20">
            <Code className="w-8 h-8 text-wovio-coral" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-display font-bold text-white mb-6">
            Wovio <span className="text-wovio-coral">REST API</span>
          </h1>
          <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Headless AI generation for engineering teams. Integrate our Autopilot into any custom stack, SaaS, or internal tool.
          </p>
          <Button size="lg" className="bg-wovio-coral hover:bg-wovio-coral/90 text-white font-bold px-8 py-6 rounded-full">
            View API Documentation <ArrowRight className="ml-2 w-5 h-5" />
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
              A standard, incredibly fast RESTful API secured by Bearer tokens. Designed for developers.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-wovio-mint flex-shrink-0" />
                <span><strong>API Keys:</strong> Generate secure API keys from your Wovio Dashboard with specific environment scopes.</span>
              </li>
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-wovio-mint flex-shrink-0" />
                <span><strong>Webhooks:</strong> Register webhooks to get notified asynchronously when long-form content generation is complete.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl border border-wovio-zinc shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-wovio-coral" />
              <h2 className="text-2xl font-display font-bold text-wovio-charcoal">How it Works</h2>
            </div>
            <p className="text-wovio-slate mb-6">
              You send us the metadata, we return a fully formatted, SEO-optimized payload ready to be injected into your database.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-wovio-coral flex-shrink-0" />
                <span><strong>JSON Payloads:</strong> Content is returned in structured JSON, including HTML/Markdown strings, Meta Titles, and Keyword arrays.</span>
              </li>
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-wovio-coral flex-shrink-0" />
                <span><strong>Language Agnostic:</strong> Works seamlessly whether your backend is Node.js, Python, Go, or PHP.</span>
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
            <h3 className="font-bold text-lg text-wovio-charcoal mb-2">What is the rate limit for the API?</h3>
            <p className="text-wovio-slate">Rate limits depend on your billing tier. Standard tiers support up to 100 requests per minute. Enterprise tiers offer custom limits and dedicated infrastructure.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-wovio-zinc">
            <h3 className="font-bold text-lg text-wovio-charcoal mb-2">Can I request content in Markdown instead of HTML?</h3>
            <p className="text-wovio-slate">Yes. By passing `format: "markdown"` in your POST request body, the API will return beautifully formatted Markdown perfect for static site generators like Next.js, Hugo, or Gatsby.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-wovio-zinc">
            <h3 className="font-bold text-lg text-wovio-charcoal mb-2">Do you provide SDKs?</h3>
            <p className="text-wovio-slate">We currently offer official SDKs for Node.js/TypeScript and Python. For other languages, our REST API is fully documented with OpenAPI (Swagger).</p>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
