"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { References } from "@/components/references";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { IntroAnimation } from "@/components/intro-animation";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <div 
        className={`flex min-h-screen flex-col transition-opacity duration-500 ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >
        <Header />
        <main className="flex-1">
          <Hero revealed={!showIntro} />
          <About />
          <Features />
          <References />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
