"use client";

import { Button } from "@/components/ui/button";
import { MailCheck, ArrowRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState, useRef } from "react";
import { motion } from "framer-motion";

function VerifyForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const plan = searchParams.get("plan") || "hobby";
  const isPro = plan === "pro";

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleInput = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1); // Only allow 1 char
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-advance
    if (value && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleVerify = () => {
    setIsVerifying(true);
    // Simulate API call for verification
    setTimeout(() => {
      setIsVerifying(false);
      if (isPro) {
        router.push("/checkout");
      } else {
        router.push("/onboarding");
      }
    }, 1500);
  };

  const isComplete = code.every(digit => digit.trim() !== "");

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-wovio-zinc relative z-10 text-center">
      
      <div className="w-20 h-20 bg-wovio-mint/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <MailCheck className="w-10 h-10 text-wovio-mint" />
      </div>

      <h2 className="text-3xl font-display font-bold text-wovio-charcoal mb-2">
        Check your email
      </h2>
      <p className="text-wovio-slate text-sm mb-8 px-4">
        We've sent a 6-digit security code to your inbox to verify your identity.
      </p>

      {/* OTP Inputs */}
      <div className="flex justify-center gap-2 sm:gap-3 mb-8">
        {code.map((digit, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInput(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-14 text-center text-xl font-bold rounded-xl border-2 border-wovio-zinc bg-wovio-snow focus:outline-none focus:border-wovio-lavender focus:bg-white transition-colors"
          />
        ))}
      </div>

      <Button 
        onClick={handleVerify}
        disabled={!isComplete || isVerifying}
        className="w-full bg-wovio-charcoal hover:bg-wovio-charcoal/90 text-white font-bold py-6 rounded-xl mb-6 shadow-lg group"
      >
        {isVerifying ? (
          <><RefreshCw className="w-5 h-5 mr-2 animate-spin" /> Verifying...</>
        ) : (
          <>Verify Identity <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
        )}
      </Button>

      <p className="text-sm text-wovio-slate">
        Didn't receive the email?{" "}
        <button className="font-bold text-wovio-lavender hover:underline focus:outline-none">
          Click to resend
        </button>
      </p>

    </motion.div>
  );
}

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-wovio-snow flex flex-col justify-center items-center p-4 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-wovio-mint/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md text-center mb-8 relative z-10">
        <Link href="/" className="inline-block text-3xl font-display font-black tracking-tighter text-wovio-charcoal mb-2">
          Wovio.
        </Link>
      </div>

      <Suspense fallback={<div className="text-wovio-slate">Loading...</div>}>
        <VerifyForm />
      </Suspense>

    </div>
  );
}
