"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, ShoppingCart, ArrowRight, Zap, Plug, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function ShopifyIntegration() {
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#95BF47]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#95BF47]/10 mb-8 border border-[#95BF47]/20">
            <ShoppingCart className="w-8 h-8 text-[#95BF47]" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-display font-bold text-white mb-6">
            Wovio for <span className="text-[#95BF47]">Shopify</span>
          </h1>
          <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Scale your e-commerce organic traffic. Wovio writes hyper-converting product descriptions and SEO blogs that funnel buyers directly to your checkout.
          </p>
          <Button size="lg" className="bg-[#95BF47] hover:bg-[#85ab3f] text-wovio-charcoal font-bold px-8 py-6 rounded-full">
            Connect Shopify <ArrowRight className="ml-2 w-5 h-5" />
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
              Connect to your Shopify store in seconds. No coding or token generation required.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-wovio-mint flex-shrink-0" />
                <span><strong>Shopify App Store:</strong> Just install the official Wovio App with a single click from the Shopify App Store.</span>
              </li>
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-wovio-mint flex-shrink-0" />
                <span><strong>Instant Sync:</strong> Once installed, Wovio instantly indexes your product catalog, collections, and existing blog structure.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl border border-wovio-zinc shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-[#95BF47]" />
              <h2 className="text-2xl font-display font-bold text-wovio-charcoal">How it Works</h2>
            </div>
            <p className="text-wovio-slate mb-6">
              Wovio is designed specifically to drive sales, not just traffic, seamlessly integrating with your catalog.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-[#95BF47] flex-shrink-0" />
                <span><strong>Smart Internal Linking:</strong> Generated blog posts automatically detect keywords and link directly to your related products.</span>
              </li>
              <li className="flex gap-3 text-wovio-charcoal">
                <CheckCircle2 className="w-6 h-6 text-[#95BF47] flex-shrink-0" />
                <span><strong>Product Description Engine:</strong> Provide a SKU or basic features, and Wovio rewrites the description for maximum SEO and conversion rate.</span>
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
            <h3 className="font-bold text-lg text-wovio-charcoal mb-2">Can Wovio update existing products?</h3>
            <p className="text-wovio-slate">Yes. You can select existing products in bulk, and Wovio will analyze their current descriptions and optimize them for better search rankings.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-wovio-zinc">
            <h3 className="font-bold text-lg text-wovio-charcoal mb-2">Does it support multiple Shopify Blogs?</h3>
            <p className="text-wovio-slate">Absolutely. If you have separate blogs for "News", "Tutorials", and "Lookbooks", Wovio will ask you which blog to publish to.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-wovio-zinc">
            <h3 className="font-bold text-lg text-wovio-charcoal mb-2">How does it handle SEO metadata?</h3>
            <p className="text-wovio-slate">Wovio natively injects optimized Meta Titles, Meta Descriptions, and URL handles directly into the Shopify SEO fields.</p>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
