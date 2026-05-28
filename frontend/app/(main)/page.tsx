"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Globe, Sparkles, Star, Zap, Search, FileText, UploadCloud, Rocket, Target } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] bg-wovio-snow w-full relative">
      
      {/* Abstract Video Background */}
      <div className="absolute inset-0 w-full h-[80vh] overflow-hidden -z-10 bg-wovio-snow">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wovio-snow/50 to-wovio-snow z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30 mix-blend-multiply filter blur-sm"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-networking-web-of-connections-27420-large.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="w-full px-4 sm:px-8 max-w-7xl mx-auto flex flex-col items-center overflow-hidden">
        
        {/* 1. EL SLOGAN (Hero Section) */}
        <section className="flex flex-col items-center text-center mt-20 sm:mt-32 mb-20 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wovio-lavender/10 text-wovio-lavender border border-wovio-lavender/20 font-medium text-sm mb-8">
              <Sparkles className="w-4 h-4" /> The New Standard for B2B Growth
            </div>
            <h1 className="text-5xl sm:text-7xl font-display font-bold tracking-tight text-wovio-charcoal mb-6 leading-tight">
              Turn Keywords into Customers on <span className="text-wovio-coral">Autopilot.</span>
            </h1>
            <p className="text-wovio-slate text-lg sm:text-xl max-w-2xl mb-10 font-sans">
              We research your niche, write hyper-optimized articles, and publish them directly to your CMS. Zero prompts. Zero headaches. 100% organic growth.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/signup?plan=hobby">
              <Button size="lg" className="bg-wovio-coral hover:bg-wovio-coral/90 text-white font-medium shadow-lg shadow-wovio-coral/30 px-8 py-6 text-lg rounded-full group">
                Start your Engine <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* 2. EL EJEMPLO (Show, Don't Tell) */}
        <section className="w-full max-w-6xl mx-auto mb-32">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-wovio-charcoal max-w-3xl mx-auto leading-tight">
              Just enter your domain, select your topics, and watch the posts generate automatically.
            </h2>
            <p className="text-wovio-slate mt-4 text-lg">
              You provide the target. We handle the research, writing, SEO, and publishing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Input Side */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 border border-wovio-zinc shadow-xl shadow-zinc-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-wovio-mint/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-wovio-zinc/50 relative z-10">
                <div className="w-10 h-10 rounded-full bg-wovio-mint/10 flex items-center justify-center">
                  <span className="text-wovio-mint font-bold">1</span>
                </div>
                <h3 className="font-display font-bold text-xl text-wovio-charcoal">You give us a target</h3>
              </div>
              
              <div className="space-y-4 relative z-10">
                <div className="bg-wovio-snow p-4 rounded-xl border border-wovio-zinc flex items-center gap-3">
                  <Search className="text-wovio-slate w-5 h-5" />
                  <span className="text-wovio-charcoal font-medium">"Commercial Roofing Costs in Texas"</span>
                </div>
                <div className="bg-wovio-snow p-4 rounded-xl border border-wovio-zinc flex items-center gap-3">
                  <Globe className="text-wovio-slate w-5 h-5" />
                  <span className="text-wovio-charcoal font-medium">Target: Dallas, TX (GEO)</span>
                </div>
                <Button className="w-full bg-wovio-charcoal hover:bg-wovio-charcoal/90 text-white mt-4 py-6 rounded-xl text-lg">
                  <Zap className="w-5 h-5 mr-2 text-wovio-lavender" /> Generate Content
                </Button>
              </div>
            </motion.div>

            {/* Output Side */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-wovio-charcoal rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-wovio-lavender/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10 relative z-10">
                <div className="w-10 h-10 rounded-full bg-wovio-lavender/20 flex items-center justify-center">
                  <span className="text-wovio-lavender font-bold">2</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white">We deliver the result</h3>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 relative z-10 hover:border-wovio-lavender/50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 bg-wovio-mint/20 text-wovio-mint px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    <CheckCircle2 className="w-3 h-3" /> Published to WordPress
                  </div>
                  <span className="text-wovio-lavender text-sm font-medium">SEO Score: 98/100</span>
                </div>
                <h4 className="text-white font-display font-bold text-lg mb-2">The Ultimate Guide to Commercial Roofing Costs in Dallas (2026)</h4>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                  If you manage a commercial property in Dallas, understanding roofing costs is critical for your budget. In this guide, we break down material costs, labor, and local Dallas regulations...
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-white/10 text-zinc-300 px-2 py-1 rounded">2,400 words</span>
                  <span className="text-xs bg-white/10 text-zinc-300 px-2 py-1 rounded">AEO Optimized</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      {/* 3. TESTIMONIOS (Social Proof) */}
      <section className="w-full py-24 bg-wovio-pure border-t border-wovio-zinc/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wovio-mint/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-wovio-charcoal mb-4">Trusted by teams that care about ROI.</h2>
            <p className="text-wovio-slate">Don't just take our word for it.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "VP of Marketing, TechFlow", text: "Wovio replaced our entire content pipeline. Organic traffic grew 315% in two months without writing a single prompt." },
              { name: "David Chen", role: "Founder, RoofLeads", text: "We were spending $4,000/mo on freelance writers. Wovio gives us better quality, fully localized, at a fraction of the cost." },
              { name: "Elena Rodriguez", role: "SEO Director, Horizon", text: "The AEO (Answer Engine Optimization) formatting is flawless. We are capturing Featured Snippets we never thought possible." }
            ].map((testimonial, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-wovio-snow p-8 rounded-2xl border border-wovio-zinc hover:border-wovio-lavender/50 hover:shadow-xl hover:shadow-wovio-lavender/5 transition-all">
                <div className="flex gap-1 mb-6 text-wovio-coral">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-wovio-charcoal font-medium mb-8">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-wovio-charcoal rounded-full flex items-center justify-center text-white font-display font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-wovio-charcoal">{testimonial.name}</p>
                    <p className="text-xs text-wovio-slate">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH ENGINE FEATURE CALLOUT */}
      <section className="w-full py-24 bg-gradient-to-b from-wovio-pure to-wovio-snow px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wovio-lavender/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wovio-coral/10 text-wovio-coral border border-wovio-coral/20 font-medium text-sm mb-6">
              <Target className="w-4 h-4" /> NEW: Growth Engine — SEO · AEO · GEO
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-wovio-charcoal mb-4 leading-tight">
              Dominate Search, AI Answers,<br />and <span className="text-wovio-lavender">Generative Results</span>.
            </h2>
            <p className="text-wovio-slate text-lg max-w-2xl mx-auto">
              Enter your URL or describe your business. Wovio builds a 30-day growth plan optimized for traditional search (SEO), AI answer engines (AEO), and generative AI results (GEO) — then executes it automatically.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Search, title: "SEO Optimization", desc: "Keyword targeting, internal linking, and content planning to dominate Google organic results.", color: "text-wovio-lavender" },
              { icon: FileText, title: "AEO Readiness", desc: "Schema markup, FAQ structuring, and answer-first formatting for AI engines like ChatGPT and Perplexity.", color: "text-wovio-coral" },
              { icon: Target, title: "GEO Visibility", desc: "Local optimization, citation building, and geo-targeted content to win in your market.", color: "text-wovio-mint" },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-wovio-zinc shadow-sm hover:shadow-xl hover:border-wovio-lavender/30 transition-all group">
                <feature.icon className={`w-10 h-10 ${feature.color} mb-5 group-hover:scale-110 transition-transform`} />
                <h3 className="font-display font-bold text-lg text-wovio-charcoal mb-2">{feature.title}</h3>
                <p className="text-sm text-wovio-slate">{feature.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
            <Link href="/signup?plan=hobby">
              <Button size="lg" className="bg-wovio-coral hover:bg-wovio-coral/90 text-white font-medium shadow-lg shadow-wovio-coral/30 px-8 py-6 text-lg rounded-full group">
                Launch Your Growth Engine <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. SUGERENCIAS: THE "WHY IT WORKS" (Features / Setup) */}
      <section className="w-full py-24 bg-wovio-charcoal px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-wovio-lavender/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-wovio-coral/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              A complex engine. <br/>A dangerously simple setup.
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors cursor-pointer">
              <UploadCloud className="w-10 h-10 text-wovio-mint mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">1. Connect</h3>
              <p className="text-zinc-400">Link your WordPress, Webflow, or Shopify securely. We sync with your architecture.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors cursor-pointer">
              <FileText className="w-10 h-10 text-wovio-lavender mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">2. Train</h3>
              <p className="text-zinc-400">Give us an example of your writing. Wovio learns your brand voice perfectly.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors cursor-pointer">
              <Rocket className="w-10 h-10 text-wovio-coral mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">3. Scale</h3>
              <p className="text-zinc-400">Set a publishing frequency. Sit back and watch organic leads roll in automatically.</p>
            </motion.div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
             <Link href="/signup?plan=hobby">
               <Button size="lg" className="bg-white hover:bg-zinc-100 text-wovio-charcoal font-bold px-10 py-7 text-lg rounded-full shadow-2xl shadow-white/20 hover:scale-105 transition-transform">
                Get Started for Free
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
