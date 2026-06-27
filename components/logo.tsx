"use client";

import { useEffect, useRef } from "react";

export function RecroLogoIcon({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  const height = size * 1.41;

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 21000000 29700000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ shapeRendering: "geometricPrecision" }}
    >
      <g
        stroke="currentColor"
        strokeWidth="250000"
        strokeMiterlimit="22.9256"
        fill="none"
      >
        <path d="M20753330 4630820c0,2846100 -2194350,5153360 -4899740,5153360l-10689970 0c-2705360,0 -4899650,-2307260 -4899650,-5153360" />
        <path d="M299130 4652980c2846110,0 5153330,2188820 5153330,4890410l0 10669660c0,2701670 -2307220,4890410 -5153330,4890410" />
        <path d="M326910 25114600c0,-2846080 2186870,-5153340 4884850,-5153340l10658550 0c2697980,0 4884800,2307260 4884800,5153340" />
        <path d="M20782910 25088680c-2846080,0 -5153360,-2188730 -5153360,-4890430l0 -10669590c0,-2701670 2307280,-4890400 5153360,-4890400" />
        <path d="M2908200 4645650c2420220,0 4383020,2190540 4383020,4890320l0 10671550c0,2701650 -1962800,4890380 -4383020,4890380" />
        <path d="M18116400 4658590c-2420190,0 -4382970,2188740 -4382970,4886710l0 10664030c0,2699840 1962780,4886740 4382970,4886740" />
        <polygon points="318920,29345800 20767540,29345800 20767540,25096100 318920,25096100" />
        <polygon points="258950,4649180 20763090,4649180 20763090,399480 258950,399480" />
      </g>
    </svg>
  );
}

export function RecroLogoFull({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <RecroLogoIcon size={size} className="text-current" />
      <span className="text-lg font-bold tracking-[0.2em]">RECRO</span>
    </div>
  );
}

/**
 * AnimatedRecroLogo — the RECRO mark rendered as a digital wireframe.
 * The actual logo paths are drawn on with crisp non-scaling strokes,
 * decorated with bronze connection nodes at corners, a soft halo glow,
 * and a thin scan beam that traverses the full height as a DOM overlay.
 */
export function AnimatedRecroLogo({
  className = "",
  size = 320,
  withScan = true,
  withGlow = true,
  withNodes = true,
  drawDelayMs = 0,
  variant = "hero",
}: {
  className?: string;
  size?: number;
  withScan?: boolean;
  withGlow?: boolean;
  withNodes?: boolean;
  drawDelayMs?: number;
  variant?: "hero" | "intro";
}) {
  const height = size * 1.41;
  const isIntro = variant === "intro";
  const drawGroupRef = useRef<SVGGElement>(null);

  // Intro draw-on: measure each path's real length and animate stroke-dashoffset
  // with a per-element stagger. Using measured lengths (instead of pathLength=1)
  // keeps the draw reliable on mobile browsers, and the cheap CSS transition
  // (with no drop-shadow filter) keeps it smooth.
  useEffect(() => {
    if (!isIntro) return;
    const g = drawGroupRef.current;
    if (!g) return;
    const els = Array.from(
      g.querySelectorAll<SVGGeometryElement>("path, polygon")
    );
    const lengths = els.map((el) => {
      try {
        return el.getTotalLength();
      } catch {
        return 0;
      }
    });
    // Set each stroke to "fully hidden" (dash = length, offset = length).
    els.forEach((el, i) => {
      const len = lengths[i] || 0;
      el.style.transition = "none";
      el.style.strokeDasharray = `${len}`;
      el.style.strokeDashoffset = `${len}`;
    });
    // Next frame: transition the offset to 0 to "draw" each line in sequence.
    const raf = requestAnimationFrame(() => {
      els.forEach((el, i) => {
        el.style.transition = `stroke-dashoffset 1.15s cubic-bezier(0.22, 1, 0.36, 1) ${
          drawDelayMs + i * 150
        }ms`;
        el.style.strokeDashoffset = "0";
      });
    });
    return () => cancelAnimationFrame(raf);
  }, [isIntro, drawDelayMs]);
  // The logo viewBox is 21M × 29.7M, but the static RecroLogoIcon sizes its
  // rendered box to size × size*1.41. So the SVG drawable area exactly fills
  // the wrapper. Below corner positions are expressed as % of that wrapper.
  const corners = [
    // Top serif (rectangle at y 399480 → 4649180, x 258950 → 20763090)
    { left: "1.23%", top: "1.34%", delay: 0 },
    { left: "98.87%", top: "1.34%", delay: 0.08 },
    { left: "1.23%", top: "15.66%", delay: 0.16 },
    { left: "98.87%", top: "15.66%", delay: 0.24 },
    // Base serif (rectangle at y 25096100 → 29345800, x 318920 → 20767540)
    { left: "1.52%", top: "84.5%", delay: 0.32 },
    { left: "98.89%", top: "84.5%", delay: 0.4 },
    { left: "1.52%", top: "98.81%", delay: 0.48 },
    { left: "98.89%", top: "98.81%", delay: 0.56 },
  ];

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height }}
    >
      {/* Orbit rings */}
      {withGlow && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible">
          <div
            className="absolute rounded-full border border-dashed border-[#d49960]/20 animate-orbit"
            style={{ width: size * 1.45, height: size * 1.45 }}
          />
          <div
            className="absolute rounded-full border border-[#d49960]/10"
            style={{ width: size * 1.1, height: size * 1.1 }}
          />
        </div>
      )}

      {/* Halo behind the mark */}
      {withGlow && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,153,96,0.32) 0%, rgba(212,153,96,0.08) 45%, transparent 70%)",
          }}
        />
      )}

      {/* The actual RECRO mark. Hero: static logo with a top-to-bottom
          clip-path wipe. Intro: the same paths drawn on line by line —
          pathLength={1} normalizes dash math so the stroke animation is
          exact regardless of the huge viewBox coordinates. */}
      {isIntro ? (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            // Single small-blur glow — cheap enough to keep smooth while the
            // strokes animate (the heavy double drop-shadow was the mobile lag).
            filter: "drop-shadow(0 0 7px rgba(212,153,96,0.55))",
          }}
        >
          <svg
            width={size}
            height={height}
            viewBox="0 0 21000000 29700000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ shapeRendering: "geometricPrecision" }}
          >
            <g
              ref={drawGroupRef}
              stroke="#f4ead4"
              strokeWidth="250000"
              strokeMiterlimit="22.9256"
              fill="none"
            >
              {RECRO_DRAW_SEQUENCE.map((el, i) =>
                el.kind === "path" ? (
                  <path
                    key={i}
                    d={el.d}
                    style={{ strokeDasharray: "0 999999" }}
                  />
                ) : (
                  <polygon
                    key={i}
                    points={el.points}
                    style={{ strokeDasharray: "0 999999" }}
                  />
                )
              )}
            </g>
          </svg>
        </div>
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            filter:
              "drop-shadow(0 0 12px rgba(212,153,96,0.55)) drop-shadow(0 0 24px rgba(212,153,96,0.25))",
            animation: `recro-reveal 1.8s cubic-bezier(0.22, 1, 0.36, 1) ${drawDelayMs}ms both`,
          }}
        >
          <RecroLogoIcon size={size} className="text-[#f4ead4]" />
        </div>
      )}

      {/* Connection nodes — absolutely positioned to corner percentages */}
      {withNodes &&
        corners.map((c, i) => (
          <span
            key={i}
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              left: c.left,
              top: c.top,
              transform: "translate(-50%, -50%)",
              animation: `recro-node 2.6s ease-in-out ${
                drawDelayMs / 1000 + 1.5 + c.delay
              }s infinite, recro-node-in 600ms ease-out ${
                drawDelayMs / 1000 + 1.4 + c.delay
              }s both`,
            }}
          >
            <span
              className="block rounded-full bg-[#f4ead4]"
              style={{
                width: 6,
                height: 6,
                boxShadow:
                  "0 0 0 1.5px #d49960, 0 0 12px rgba(212,153,96,0.7), 0 0 18px rgba(212,153,96,0.35)",
              }}
            />
          </span>
        ))}

      {/* Scan beam — thin, traverses the full wrapper height. Animates the
          `top` percentage (size-independent) so it works at every size; the
          keyframes live in globals.css to avoid per-instance collisions. */}
      {withScan && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 5%, rgba(212,153,96,0.85) 50%, transparent 95%)",
            boxShadow:
              "0 0 18px rgba(212,153,96,0.55), 0 0 6px rgba(244,234,212,0.5)",
            animation: `recro-scan-line 4.5s cubic-bezier(0.65,0,0.35,1) ${
              drawDelayMs + (isIntro ? 1800 : 1000)
            }ms infinite`,
          }}
        />
      )}
    </div>
  );
}

// The logo's strokes in drawing order: top serif, top arch, the four
// column curves, bottom arch, base serif. Same data as RecroLogoIcon.
type DrawElement =
  | { kind: "path"; d: string }
  | { kind: "polygon"; points: string };

const RECRO_DRAW_SEQUENCE: DrawElement[] = [
  { kind: "polygon", points: "258950,4649180 20763090,4649180 20763090,399480 258950,399480" },
  { kind: "path", d: "M20753330 4630820c0,2846100 -2194350,5153360 -4899740,5153360l-10689970 0c-2705360,0 -4899650,-2307260 -4899650,-5153360" },
  { kind: "path", d: "M299130 4652980c2846110,0 5153330,2188820 5153330,4890410l0 10669660c0,2701670 -2307220,4890410 -5153330,4890410" },
  { kind: "path", d: "M20782910 25088680c-2846080,0 -5153360,-2188730 -5153360,-4890430l0 -10669590c0,-2701670 2307280,-4890400 5153360,-4890400" },
  { kind: "path", d: "M2908200 4645650c2420220,0 4383020,2190540 4383020,4890320l0 10671550c0,2701650 -1962800,4890380 -4383020,4890380" },
  { kind: "path", d: "M18116400 4658590c-2420190,0 -4382970,2188740 -4382970,4886710l0 10664030c0,2699840 1962780,4886740 4382970,4886740" },
  { kind: "path", d: "M326910 25114600c0,-2846080 2186870,-5153340 4884850,-5153340l10658550 0c2697980,0 4884800,2307260 4884800,5153340" },
  { kind: "polygon", points: "318920,29345800 20767540,29345800 20767540,25096100 318920,25096100" },
];
