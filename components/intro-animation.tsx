"use client";

import { useEffect, useState } from "react";
import { AnimatedRecroLogo } from "./logo";

type Phase = "draw" | "text" | "fade" | "done";

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>("draw");

  useEffect(() => {
    // Draw: 0–2.4s — the logo strokes draw on line by line
    // Text: 2.4–4.6s — "Zavod RECRO" fades up beneath the finished mark
    // Fade: 4.6–5.3s — fade to black, then unmount
    const t1 = setTimeout(() => setPhase("text"), 2400);
    const t2 = setTimeout(() => setPhase("fade"), 4600);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 5300);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [onComplete]);

  if (phase === "done") return null;

  const fading = phase === "fade";

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0c1d1a] transition-opacity duration-700 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Ambient radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(184,115,51,0.15) 0%, transparent 55%)",
        }}
      />
      {/* Faint tech grid */}
      <div className="absolute inset-0 tech-grid opacity-40" />

      <div className="relative flex flex-col items-center gap-10">
        {/* The logo draws itself line by line */}
        <AnimatedRecroLogo
          size={190}
          variant="intro"
          withScan={phase !== "draw"}
        />

        {/* Text reveal — appears once the drawing completes */}
        <div
          className={`flex flex-col items-center transition-all duration-1000 ease-out ${
            phase === "text" || phase === "fade"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <span className="font-serif text-4xl font-medium tracking-[0.18em] text-ivory-gradient">
            Zavod{" "}
            <span className="text-bronze-gradient italic">RECRO</span>
          </span>
          <span
            className="mt-4 h-px w-28 bronze-divider transition-all duration-1000"
            style={{
              transform:
                phase === "text" || phase === "fade"
                  ? "scaleX(1)"
                  : "scaleX(0)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
