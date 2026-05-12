"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Layout, ShoppingCart, Box, Code, ArrowRight, CheckCircle2, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Channel = "wordpress" | "shopify" | "webflow" | "api" | null;

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [selectedChannel, setSelectedChannel] = useState<Channel>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleChannelSelect = (channel: Channel) => {
    setSelectedChannel(channel);
    setTimeout(() => setStep(2), 300); // Small delay for visual feedback
  };

  const handleConnectAction = () => {
    setIsConnecting(true);
    // Simulate connection delay
    setTimeout(() => {
      setIsConnecting(false);
      setStep(3);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-wovio-snow flex flex-col justify-center items-center py-12 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-wovio-lavender/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-wovio-mint/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-3xl relative z-10 mb-8 text-center">
        <div className="text-3xl font-display font-black tracking-tighter text-wovio-charcoal mb-8">
          Wovio.
        </div>
        
        {/* Progress Dots */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <div className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-wovio-charcoal" : "bg-zinc-300"} transition-colors`}></div>
          <div className={`w-12 h-1 rounded-full ${step >= 2 ? "bg-wovio-charcoal" : "bg-zinc-300"} transition-colors`}></div>
          <div className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-wovio-charcoal" : "bg-zinc-300"} transition-colors`}></div>
          <div className={`w-12 h-1 rounded-full ${step >= 3 ? "bg-wovio-charcoal" : "bg-zinc-300"} transition-colors`}></div>
          <div className={`w-3 h-3 rounded-full ${step >= 3 ? "bg-wovio-charcoal" : "bg-zinc-300"} transition-colors`}></div>
        </div>
      </div>

      <div className="w-full max-w-3xl relative z-10">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Select Channel */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-wovio-zinc text-center"
            >
              <h1 className="text-3xl font-display font-bold text-wovio-charcoal mb-2">Where do you want to publish?</h1>
              <p className="text-wovio-slate mb-10">Select your primary CMS or integration channel to configure your Autopilot.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* WordPress */}
                <button 
                  onClick={() => handleChannelSelect("wordpress")}
                  className={`flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all hover:bg-wovio-snow ${selectedChannel === "wordpress" ? "border-wovio-lavender bg-wovio-lavender/5" : "border-zinc-200"}`}
                >
                  <div className="w-14 h-14 bg-wovio-lavender/10 rounded-xl flex items-center justify-center mb-4">
                    <Layout className="w-7 h-7 text-wovio-lavender" />
                  </div>
                  <h3 className="font-bold text-wovio-charcoal text-lg">WordPress</h3>
                  <p className="text-xs text-wovio-slate mt-1">Blogs & Articles</p>
                </button>

                {/* Shopify */}
                <button 
                  onClick={() => handleChannelSelect("shopify")}
                  className={`flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all hover:bg-wovio-snow ${selectedChannel === "shopify" ? "border-wovio-mint bg-wovio-mint/5" : "border-zinc-200"}`}
                >
                  <div className="w-14 h-14 bg-wovio-mint/10 rounded-xl flex items-center justify-center mb-4">
                    <ShoppingCart className="w-7 h-7 text-wovio-mint" />
                  </div>
                  <h3 className="font-bold text-wovio-charcoal text-lg">Shopify</h3>
                  <p className="text-xs text-wovio-slate mt-1">Products & E-commerce</p>
                </button>

                {/* Webflow */}
                <button 
                  onClick={() => handleChannelSelect("webflow")}
                  className={`flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all hover:bg-wovio-snow ${selectedChannel === "webflow" ? "border-blue-500 bg-blue-500/5" : "border-zinc-200"}`}
                >
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Box className="w-7 h-7 text-blue-500" />
                  </div>
                  <h3 className="font-bold text-wovio-charcoal text-lg">Webflow</h3>
                  <p className="text-xs text-wovio-slate mt-1">CMS Collections</p>
                </button>

                {/* API */}
                <button 
                  onClick={() => handleChannelSelect("api")}
                  className={`flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all hover:bg-wovio-snow ${selectedChannel === "api" ? "border-wovio-coral bg-wovio-coral/5" : "border-zinc-200"}`}
                >
                  <div className="w-14 h-14 bg-wovio-coral/10 rounded-xl flex items-center justify-center mb-4">
                    <Code className="w-7 h-7 text-wovio-coral" />
                  </div>
                  <h3 className="font-bold text-wovio-charcoal text-lg">REST API</h3>
                  <p className="text-xs text-wovio-slate mt-1">Custom Stack / Headless</p>
                </button>

              </div>
            </motion.div>
          )}

          {/* STEP 2: Connection Instructions */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-wovio-zinc text-center"
            >
              
              {selectedChannel === "wordpress" && (
                <>
                  <div className="w-20 h-20 bg-wovio-lavender/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Layout className="w-10 h-10 text-wovio-lavender" />
                  </div>
                  <h1 className="text-3xl font-display font-bold text-wovio-charcoal mb-2">Connect WordPress</h1>
                  <p className="text-wovio-slate mb-8 max-w-md mx-auto">
                    Download our official integration plugin. Upload it to your WordPress admin panel and activate it to sync your site.
                  </p>
                  <Button 
                    onClick={handleConnectAction}
                    disabled={isConnecting}
                    className="w-full sm:w-auto bg-wovio-charcoal hover:bg-wovio-charcoal/90 text-white font-bold py-6 px-10 rounded-xl mb-4 text-lg"
                  >
                    {isConnecting ? "Downloading..." : <><Download className="w-5 h-5 mr-2" /> Download wovio-wp.zip</>}
                  </Button>
                </>
              )}

              {selectedChannel === "shopify" && (
                <>
                  <div className="w-20 h-20 bg-wovio-mint/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <ShoppingCart className="w-10 h-10 text-wovio-mint" />
                  </div>
                  <h1 className="text-3xl font-display font-bold text-wovio-charcoal mb-2">Connect Shopify</h1>
                  <p className="text-wovio-slate mb-8 max-w-md mx-auto">
                    Install Wovio directly from the Shopify App Store. We'll automatically sync your product catalog.
                  </p>
                  <Button 
                    onClick={handleConnectAction}
                    disabled={isConnecting}
                    className="w-full sm:w-auto bg-[#95BF47] hover:bg-[#85ab3f] text-wovio-charcoal font-bold py-6 px-10 rounded-xl mb-4 text-lg"
                  >
                    {isConnecting ? "Connecting..." : <><ExternalLink className="w-5 h-5 mr-2" /> Open Shopify App Store</>}
                  </Button>
                </>
              )}

              {selectedChannel === "webflow" && (
                <>
                  <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Box className="w-10 h-10 text-blue-500" />
                  </div>
                  <h1 className="text-3xl font-display font-bold text-wovio-charcoal mb-2">Connect Webflow</h1>
                  <p className="text-wovio-slate mb-8 max-w-md mx-auto">
                    Authorize Wovio to access your CMS Collections via the Webflow Integrations Directory.
                  </p>
                  <Button 
                    onClick={handleConnectAction}
                    disabled={isConnecting}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-10 rounded-xl mb-4 text-lg"
                  >
                    {isConnecting ? "Authenticating..." : <><ExternalLink className="w-5 h-5 mr-2" /> Authorize in Webflow</>}
                  </Button>
                </>
              )}

              {selectedChannel === "api" && (
                <>
                  <div className="w-20 h-20 bg-wovio-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Code className="w-10 h-10 text-wovio-coral" />
                  </div>
                  <h1 className="text-3xl font-display font-bold text-wovio-charcoal mb-2">API Configuration</h1>
                  <p className="text-wovio-slate mb-8 max-w-md mx-auto">
                    Generate your master API key to start making requests from your custom backend.
                  </p>
                  <Button 
                    onClick={handleConnectAction}
                    disabled={isConnecting}
                    className="w-full sm:w-auto bg-wovio-coral hover:bg-wovio-coral/90 text-white font-bold py-6 px-10 rounded-xl mb-4 text-lg"
                  >
                    {isConnecting ? "Generating Keys..." : "Generate Master API Key"}
                  </Button>
                </>
              )}

              <div className="mt-4">
                <button onClick={() => setStep(1)} className="text-sm font-medium text-wovio-slate hover:text-wovio-charcoal">
                  Go back
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Success / Go to Dashboard */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-wovio-zinc text-center"
            >
              <div className="w-24 h-24 bg-wovio-mint/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-wovio-mint/20 rounded-full animate-ping opacity-75"></div>
                <CheckCircle2 className="w-12 h-12 text-wovio-mint" />
              </div>
              <h1 className="text-3xl font-display font-bold text-wovio-charcoal mb-4">Engine Activated</h1>
              <p className="text-wovio-slate mb-10 max-w-md mx-auto text-lg">
                Your workspace is ready. Let's go to your Dashboard to configure your brand voice and start generating.
              </p>

              <Link href="/dashboard" className="block">
                <Button className="w-full sm:w-auto bg-wovio-charcoal hover:bg-wovio-charcoal/90 text-white font-bold py-7 px-12 rounded-xl text-lg shadow-xl shadow-wovio-charcoal/20 group">
                  Enter Dashboard <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
