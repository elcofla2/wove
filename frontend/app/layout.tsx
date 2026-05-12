import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Wovio.io | AI Content Autopilot",
  description: "Optimiza SEO, GEO y AEO con una experiencia de Plug & Play de 3 clics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable} font-sans min-h-screen flex flex-col bg-wovio-snow text-wovio-charcoal`}>
        {children}
      </body>
    </html>
  );
}
