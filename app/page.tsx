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

// Play the intro only on the first visit of a browser session — not every
// time the user returns to the homepage from a subpage (or reloads).
const INTRO_SEEN_KEY = "recro-intro-seen";

export default function Home() {
  // undefined = not yet decided (matches SSR / first paint → content hidden,
  // no intro, so no hydration mismatch). true = play intro. false = skip.
  const [showIntro, setShowIntro] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(INTRO_SEEN_KEY) === "1";
    } catch {
      // sessionStorage unavailable (private mode etc.) — just play once.
    }
    if (seen) {
      setShowIntro(false);
    } else {
      setShowIntro(true);
      try {
        sessionStorage.setItem(INTRO_SEEN_KEY, "1");
      } catch {
        /* ignore */
      }
    }
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <div
        className={`flex min-h-screen flex-col transition-opacity duration-500 ${
          showIntro === false ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <main className="flex-1">
          <Hero />
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
