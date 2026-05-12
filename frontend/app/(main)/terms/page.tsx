"use client";

import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-wovio-snow w-full pb-20">
      
      {/* Header */}
      <section className="w-full bg-wovio-charcoal py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wovio-lavender/10 rounded-full blur-[100px] pointer-events-none"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-wovio-snow/10 mb-6 border border-white/10">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-zinc-400">Last updated: May 2026</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="w-full max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-wovio-zinc shadow-xl prose prose-zinc max-w-none text-wovio-charcoal">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Wovio. These Terms of Service ("Terms") govern your access to and use of the Wovio website, services, and applications (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms.
          </p>

          <h2>2. Use of Service</h2>
          <p>
            You must use the Service in compliance with all applicable laws. You may not use Wovio to generate illegal, harmful, or deceptive content. Wovio provides AI-assisted content generation, and you are solely responsible for reviewing and approving the content before publishing it to your platforms.
          </p>

          <h2>3. Account Registration</h2>
          <p>
            To use certain features, you must register for an account. You agree to provide accurate information and keep it updated. You are responsible for safeguarding your account credentials.
          </p>

          <h2>4. Subscriptions and Payments</h2>
          <p>
            Certain aspects of the Service are provided for a fee. You agree to pay all applicable fees associated with your chosen subscription plan. Subscriptions auto-renew unless canceled prior to the renewal date.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            Wovio retains all right, title, and interest in and to the Service, including its algorithms, software, and underlying technology. The content you generate using Wovio belongs to you, subject to your payment of applicable fees.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Wovio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the Service.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at <strong>legal@wovio.io</strong>.
          </p>
        </div>
      </section>

    </div>
  );
}
