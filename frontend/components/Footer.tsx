import Link from "next/link";
import { Layout, ShoppingCart, Box, Code } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wovio-charcoal text-white pt-20 pb-8 border-t border-wovio-zinc/10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-wovio-lavender/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block text-3xl font-display font-black tracking-tighter text-white mb-4">
              Wovio.
            </Link>
            <p className="text-zinc-400 max-w-sm mb-6">
              The autonomous AI content engine for modern marketing teams. Scale your organic traffic without scaling your headcount.
            </p>
          </div>

          {/* Integrations Column */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/wordpress" className="text-zinc-400 hover:text-wovio-lavender transition-colors flex items-center gap-2 text-sm">
                  <Layout className="w-4 h-4" /> WordPress
                </Link>
              </li>
              <li>
                <Link href="/shopify" className="text-zinc-400 hover:text-[#95BF47] transition-colors flex items-center gap-2 text-sm">
                  <ShoppingCart className="w-4 h-4" /> Shopify
                </Link>
              </li>
              <li>
                <Link href="/webflow" className="text-zinc-400 hover:text-blue-500 transition-colors flex items-center gap-2 text-sm">
                  <Box className="w-4 h-4" /> Webflow
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-zinc-400 hover:text-wovio-coral transition-colors flex items-center gap-2 text-sm">
                  <Code className="w-4 h-4" /> Developer API
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/pricing" className="text-zinc-400 hover:text-white transition-colors text-sm">Pricing</Link>
              </li>
              <li>
                <Link href="/faq" className="text-zinc-400 hover:text-white transition-colors text-sm">FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors text-sm">Contact Sales</Link>
              </li>
              <li>
                <Link href="/signin" className="text-zinc-400 hover:text-white transition-colors text-sm">Sign In</Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {currentYear} Wovio. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm flex items-center gap-1">
            Designed by 
            <a 
              href="https://lewebsitetech.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-wovio-lavender font-semibold transition-colors"
            >
              LeWebsiteTech LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
