import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Box, ShoppingCart, Layout, Code } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-wovio-zinc bg-wovio-snow/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo & Links Container */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-display font-bold tracking-tight text-wovio-charcoal">
              Wovio<span className="text-wovio-lavender">.io</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-wovio-slate hover:text-wovio-charcoal transition-colors py-6">
                Products <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-[60px] left-0 w-72 bg-white border border-wovio-zinc rounded-2xl shadow-xl shadow-zinc-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 flex flex-col gap-1">
                
                <Link href="/wordpress" className="flex items-start gap-3 p-3 rounded-xl hover:bg-wovio-snow transition-colors">
                  <div className="bg-wovio-lavender/10 p-2.5 rounded-lg">
                    <Layout className="w-5 h-5 text-wovio-lavender" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-wovio-charcoal">WordPress</p>
                    <p className="text-xs text-wovio-slate">Direct integration for WP sites</p>
                  </div>
                </Link>

                <Link href="/shopify" className="flex items-start gap-3 p-3 rounded-xl hover:bg-wovio-snow transition-colors">
                  <div className="bg-wovio-mint/10 p-2.5 rounded-lg">
                    <ShoppingCart className="w-5 h-5 text-wovio-mint" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-wovio-charcoal">Shopify</p>
                    <p className="text-xs text-wovio-slate">Direct integration for stores</p>
                  </div>
                </Link>

                <Link href="/webflow" className="flex items-start gap-3 p-3 rounded-xl hover:bg-wovio-snow transition-colors">
                  <div className="bg-blue-500/10 p-2.5 rounded-lg">
                    <Box className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-wovio-charcoal">Webflow</p>
                    <p className="text-xs text-wovio-slate">Direct CMS sync for Webflow</p>
                  </div>
                </Link>

                <div className="h-px bg-wovio-zinc my-1"></div>

                <Link href="/api" className="flex items-start gap-3 p-3 rounded-xl hover:bg-wovio-snow transition-colors">
                  <div className="bg-wovio-coral/10 p-2.5 rounded-lg">
                    <Code className="w-5 h-5 text-wovio-coral" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-wovio-charcoal">REST API</p>
                    <p className="text-xs text-wovio-slate">Connect any custom platform</p>
                  </div>
                </Link>

              </div>
            </div>

            <Link href="/pricing" className="text-sm font-medium text-wovio-slate hover:text-wovio-charcoal transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium text-wovio-slate hover:text-wovio-charcoal transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link href="/signin">
            <Button 
              variant="ghost" 
              className="hidden sm:flex text-wovio-slate hover:text-wovio-charcoal hover:bg-wovio-zinc/50 transition-colors font-medium rounded-full"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/pricing">
            <Button 
              className="bg-wovio-coral hover:bg-wovio-coral/90 text-white font-bold shadow-lg shadow-wovio-coral/30 px-6 rounded-full transition-all duration-300"
            >
              Deploy Autopilot
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
