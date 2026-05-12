"use client";

import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-wovio-snow w-full pb-20">
      
      {/* Header */}
      <section className="w-full bg-wovio-charcoal py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wovio-mint/10 rounded-full blur-[100px] pointer-events-none"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-wovio-snow/10 mb-6 border border-white/10">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-400">Last updated: May 2026</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="w-full max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-wovio-zinc shadow-xl prose prose-zinc max-w-none text-wovio-charcoal">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as your name, email address, and payment information when you register for a Wovio account. We also automatically collect certain information about your device and how you interact with our Services, including IP addresses, browser types, and usage data.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to operate, maintain, and improve our Services. This includes processing transactions, providing customer support, sending technical notices, and analyzing usage trends to enhance our AI models and user experience.
          </p>

          <h2>3. Data Sharing and Disclosure</h2>
          <p>
            We do not sell your personal data. We may share information with third-party vendors and service providers who perform services on our behalf, such as payment processing (e.g., Stripe) and secure cloud hosting. We ensure these partners adhere to strict data privacy standards.
          </p>

          <h2>4. AI Data Usage</h2>
          <p>
            Wovio uses large language models. The content you generate is kept private to your workspace. We do not use your proprietary CMS data or generated articles to train our foundational models unless you explicitly opt-in for custom model fine-tuning (available on Enterprise plans).
          </p>

          <h2>5. Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your personal information. You can manage most of your data directly from your Account Dashboard.
          </p>

          <h2>6. Security</h2>
          <p>
            We employ industry-standard security measures, including encryption in transit and at rest, to protect your data. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            For any privacy-related inquiries or data deletion requests, please contact our Data Protection Officer at <strong>privacy@wovio.io</strong>.
          </p>
        </div>
      </section>

    </div>
  );
}
