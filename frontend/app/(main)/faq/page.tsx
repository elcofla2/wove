"use client";

import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How does Wovio ensure the content is SEO-optimized?",
    answer: "Wovio doesn't just write text. It conducts real-time SERP analysis for your target keywords, structures the article with appropriate semantic HTML (H1, H2, H3), optimizes keyword density, and even generates meta titles and descriptions automatically."
  },
  {
    question: "Do I need technical skills to connect my CMS?",
    answer: "Not at all. We offer 1-click native integrations for WordPress, Shopify, and Webflow. You just need to log in to your respective platform and click 'Authorize'. For custom stacks, we provide a developer-friendly REST API."
  },
  {
    question: "Can I review the content before it goes live?",
    answer: "Yes. By default, Wovio sends all generated content to your CMS as a 'Draft' or 'Staged' item. You can review and edit it before hitting publish. If you trust the AI, you can enable auto-publishing in the Pro and Agency plans."
  },
  {
    question: "Is the generated content detectable as AI?",
    answer: "We use advanced prompting and semantic structuring to ensure the content reads naturally and provides genuine value (AEO - Answer Engine Optimization). While we focus on quality over 'evading' detectors, our outputs consistently pass manual human review for tone and helpfulness."
  },
  {
    question: "What languages does Wovio support?",
    answer: "Wovio can generate and optimize content in over 30 languages, including English, Spanish, French, German, and Portuguese, ensuring global reach for your organic campaigns."
  },
  {
    question: "Can I train Wovio on my brand's specific tone of voice?",
    answer: "Yes, available on the Pro and Agency plans. You can provide Wovio with your brand guidelines, past articles, and specific vocabulary, and the AI will adapt its writing style to match your brand identity perfectly."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-wovio-snow w-full pb-20">
      
      {/* Header */}
      <section className="w-full bg-wovio-charcoal py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wovio-coral/10 rounded-full blur-[100px] pointer-events-none"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-wovio-snow/10 mb-6 border border-white/10">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-zinc-400 text-lg">Everything you need to know about the product and billing.</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="w-full max-w-3xl mx-auto px-4 mt-12">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-wovio-zinc shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-wovio-charcoal text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-wovio-slate transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-wovio-slate">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
