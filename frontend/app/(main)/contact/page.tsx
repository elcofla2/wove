"use client";

import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-wovio-snow w-full pb-20">
      
      {/* Hero Section */}
      <section className="w-full bg-wovio-charcoal py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-wovio-mint/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-wovio-lavender/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl sm:text-6xl font-display font-bold text-white mb-6">
            Let's build your <span className="text-wovio-mint">organic engine.</span>
          </h1>
          <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Whether you have a technical question about our API or want to discuss an Enterprise plan, our team is ready to help you scale.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-6xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl border border-wovio-zinc shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Column: Contact Info */}
          <div className="w-full md:w-5/12 bg-wovio-charcoal p-10 sm:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-wovio-lavender/10 rounded-full blur-[60px] pointer-events-none -mr-10 -mt-10"></div>
            
            <h3 className="text-3xl font-display font-bold mb-6 relative z-10">Get in touch</h3>
            <p className="text-zinc-400 mb-12 relative z-10">
              Fill out the form and our growth team will get back to you within 24 hours.
            </p>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-wovio-mint/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-wovio-mint" />
                </div>
                <div>
                  <p className="font-bold text-white mb-1">Chat with Sales</p>
                  <p className="text-zinc-400 text-sm">sales@wovio.io</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-wovio-lavender/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-wovio-lavender" />
                </div>
                <div>
                  <p className="font-bold text-white mb-1">Technical Support</p>
                  <p className="text-zinc-400 text-sm">support@wovio.io</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-wovio-coral/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-wovio-coral" />
                </div>
                <div>
                  <p className="font-bold text-white mb-1">Global HQ</p>
                  <p className="text-zinc-400 text-sm">1200 Tech Ave, Suite 400<br/>San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full md:w-7/12 p-10 sm:p-14 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-wovio-charcoal uppercase tracking-wider">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane"
                    className="w-full px-4 py-3 rounded-xl border border-wovio-zinc bg-wovio-snow focus:outline-none focus:ring-2 focus:ring-wovio-lavender/50 focus:border-wovio-lavender transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-wovio-charcoal uppercase tracking-wider">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl border border-wovio-zinc bg-wovio-snow focus:outline-none focus:ring-2 focus:ring-wovio-lavender/50 focus:border-wovio-lavender transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-wovio-charcoal uppercase tracking-wider">Work Email</label>
                <input 
                  type="email" 
                  placeholder="jane@yourcompany.com"
                  className="w-full px-4 py-3 rounded-xl border border-wovio-zinc bg-wovio-snow focus:outline-none focus:ring-2 focus:ring-wovio-lavender/50 focus:border-wovio-lavender transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-wovio-charcoal uppercase tracking-wider">Company Size</label>
                <select className="w-full px-4 py-3 rounded-xl border border-wovio-zinc bg-wovio-snow focus:outline-none focus:ring-2 focus:ring-wovio-lavender/50 focus:border-wovio-lavender transition-all appearance-none">
                  <option value="" disabled selected>Select an option...</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201+">201+ employees</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-wovio-charcoal uppercase tracking-wider">How can we help?</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your content goals..."
                  className="w-full px-4 py-3 rounded-xl border border-wovio-zinc bg-wovio-snow focus:outline-none focus:ring-2 focus:ring-wovio-lavender/50 focus:border-wovio-lavender transition-all resize-none"
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-wovio-charcoal hover:bg-wovio-charcoal/90 text-white font-bold py-6 rounded-xl shadow-lg mt-4 group">
                Send Message <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
