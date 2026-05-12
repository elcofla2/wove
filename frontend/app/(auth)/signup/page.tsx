"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SignupForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "hobby";

  const isPro = plan === "pro";

  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-wovio-zinc relative z-10">
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold text-wovio-charcoal mb-2">
          Create your account
        </h2>
        <p className="text-wovio-slate text-sm">
          You're signing up for the <strong className="text-wovio-charcoal capitalize">{plan}</strong> plan.
        </p>
      </div>

      {/* Google Auth Button */}
      <Button 
        variant="outline" 
        className="w-full bg-white border-2 border-zinc-200 text-zinc-700 hover:bg-zinc-50 font-bold py-6 rounded-xl flex items-center justify-center gap-3 mb-6"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </Button>

      <div className="flex items-center gap-4 mb-6">
        <div className="h-px bg-zinc-200 flex-1"></div>
        <span className="text-zinc-400 text-xs font-bold uppercase tracking-wider">or work email</span>
        <div className="h-px bg-zinc-200 flex-1"></div>
      </div>

      <form className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-wovio-charcoal uppercase tracking-wider">Email Address</label>
          <input 
            type="email" 
            placeholder="name@company.com"
            className="w-full px-4 py-3 rounded-xl border border-wovio-zinc bg-wovio-snow focus:outline-none focus:ring-2 focus:ring-wovio-lavender/50 transition-all"
          />
        </div>

        {/* HONEYPOT: Hidden field to trap bots. If filled out, server rejects request. */}
        <input 
          type="text" 
          name="company_website_url" 
          tabIndex={-1} 
          autoComplete="off" 
          className="opacity-0 absolute -z-10 w-0 h-0 overflow-hidden" 
          aria-hidden="true" 
        />

        {/* CAPTCHA Mockup */}
        <div className="w-full bg-white border border-zinc-200 rounded-xl p-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded border-2 border-zinc-300 bg-wovio-snow flex items-center justify-center cursor-pointer hover:border-wovio-lavender transition-colors">
               {/* Empty checkbox simulating untouched captcha */}
            </div>
            <span className="text-sm font-medium text-wovio-charcoal">Verify you are human</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-wovio-slate" />
            <span className="text-[8px] text-zinc-400 font-bold uppercase tracking-wider mt-0.5">Protected</span>
          </div>
        </div>
        
        <Link href={`/verify?plan=${plan}`} className="block mt-6">
          <Button className="w-full bg-wovio-charcoal hover:bg-wovio-charcoal/90 text-white font-bold py-6 rounded-xl">
            {isPro ? "Continue to Payment" : "Create Free Account"}
          </Button>
        </Link>
      </form>

      <p className="text-center text-xs text-wovio-slate mt-6">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-wovio-snow flex flex-col justify-center items-center p-4 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-wovio-lavender/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-wovio-coral/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Back Button */}
      <Link href="/pricing" className="absolute top-8 left-8 flex items-center gap-2 text-wovio-slate hover:text-wovio-charcoal font-medium transition-colors z-20">
        <ArrowLeft className="w-4 h-4" /> Back to Pricing
      </Link>

      <div className="w-full max-w-md text-center mb-8 relative z-10">
        <Link href="/" className="inline-block text-3xl font-display font-black tracking-tighter text-wovio-charcoal mb-2">
          Wovio.
        </Link>
      </div>

      <Suspense fallback={<div className="text-wovio-slate">Loading...</div>}>
        <SignupForm />
      </Suspense>

    </div>
  );
}
