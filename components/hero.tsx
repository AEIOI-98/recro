"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scan, Box, FlaskConical } from "lucide-react";
import { AnimatedRecroLogo } from "./logo";
import { asset } from "@/lib/site";

type Label = {
  code: string;
  title: string;
  sub: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  anim: string;
  home: { x: number; y: number };
};

const SERVICE_LABELS: Label[] = [
  {
    code: "01",
    title: "3D SCAN",
    sub: "Visoka ločljivost",
    href: "/storitve/projektna-dokumentacija",
    icon: Box,
    anim: "mi-spin",
    home: { x: 160, y: -180 },
  },
  {
    code: "02",
    title: "ANALIZA",
    sub: "Neinvazivna diagnostika",
    href: "/storitve/preiskave-raziskave",
    icon: FlaskConical,
    anim: "mi-wiggle",
    home: { x: -200, y: 60 },
  },
  {
    code: "03",
    title: "DIGITAL TWIN",
    sub: "Trajna preservacija",
    href: "/storitve/konservatorski-nacrt",
    icon: Scan,
    anim: "mi-pop",
    home: { x: 170, y: 170 },
  },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0c1d1a] pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background photograph, deeply tinted */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={asset("/images/hero-bg.jpg")}
          alt=""
          fill
          className="object-cover opacity-25"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,29,26,0.92) 0%, rgba(12,29,26,0.7) 40%, rgba(12,29,26,0.95) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 30%, rgba(184,115,51,0.15), transparent 60%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(56,110,96,0.18), transparent 60%)",
          }}
        />
      </div>

      {/* Tech grid layer */}
      <div className="absolute inset-0 -z-10 tech-grid opacity-60 animate-grid" />

      {/* Scanning beam */}
      <div className="scan-bar" />

      {/* Bronze curved accent — top right */}
      <svg
        className="absolute top-0 right-0 w-[42%] h-[120%] -z-10 opacity-50 hidden lg:block"
        viewBox="0 0 600 800"
        fill="none"
      >
        <path
          d="M600 0 Q300 200 400 400 Q500 600 600 800"
          stroke="url(#hero-bronze)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M600 100 Q340 260 430 420 Q520 580 600 700"
          stroke="url(#hero-bronze)"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <defs>
          <linearGradient id="hero-bronze" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d49960" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#b87333" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#d49960" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-8">
        {/* Left column: copy */}
        <div className="lg:col-span-7 lg:pt-12">
          <div
            className="eyebrow-line eyebrow animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span>Zavod za ohranjanje kulturne dediščine recro</span>
          </div>

          <h1
            className="mt-8 font-serif text-balance text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            <span className="text-ivory-gradient">Varujemo</span>
            <br />
            <span className="text-ivory-gradient">preteklost,</span>
            <br />
            <span className="text-bronze-gradient italic">oblikujemo</span>
            <span className="text-bronze-gradient italic"> prihodnost.</span>
          </h1>

          <p
            className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-[#e8dcc4]/70 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            Zavod Recro je organizacija, ki se ukvarja z varovanjem, obnovo in
            promocijo kulturne dediščine. Naše delo temelji na večletnih
            izkušnjah in strokovnem znanju.
          </p>

          <div
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center animate-fade-up"
            style={{ animationDelay: "0.75s" }}
          >
            <a href="#storitve" className="btn-bronze icon-fx w-full sm:w-auto">
              Naše storitve <ArrowRight className="mi mi-nudge h-4 w-4" />
            </a>
            <a href="#reference" className="btn-ghost w-full sm:w-auto">
              Oglejte si reference
            </a>
          </div>
        </div>

        {/* Right column: visualization */}
        <div className="relative lg:col-span-5 hidden lg:block">
          <div
            className="relative h-full min-h-[600px] animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <HeroVisualization />
          </div>
        </div>
      </div>

      {/* Mobile / tablet compact visualization + static service links */}
      <div className="relative mx-auto mt-12 max-w-md px-6 lg:hidden">
        <div className="relative h-[280px]">
          <HeroVisualization compact />
        </div>
        <StaticServiceLinks />
      </div>

      {/* Bottom technical strip */}
      <div className="relative mx-auto mt-20 flex max-w-7xl items-center justify-between px-6 text-[10px] tracking-[0.35em] text-[#e8dcc4]/35 font-mono lg:px-8">
        <span>RECRO · EST. SLOVENIA</span>
        <span className="hidden sm:inline">CONSERVATION · 3D · DIAGNOSTICS</span>
        <span>www.recro.si</span>
      </div>
    </section>
  );
}

function HeroVisualization({ compact = false }: { compact?: boolean }) {
  const logoSize = compact ? 200 : 320;
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number; inside: boolean }>({
    x: 0,
    y: 0,
    inside: false,
  });

  // Floating physics only run on the desktop (non-compact) visualization,
  // where there's a cursor to attract them. Compact view renders a static
  // tappable grid instead (see StaticServiceLinks below).
  const labels: Label[] = compact ? [] : SERVICE_LABELS;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      mouseRef.current.x = e.clientX - r.left;
      mouseRef.current.y = e.clientY - r.top;
      mouseRef.current.inside = true;
    };
    const onLeave = () => {
      mouseRef.current.inside = false;
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {/* Centered animated RECRO logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatedRecroLogo size={logoSize} />
      </div>

      {/* Floating tech labels */}
      {labels.map((label, i) => (
        <FloatingLabel
          key={label.code}
          label={label}
          containerRef={containerRef}
          mouseRef={mouseRef}
          phaseOffset={i * 1.7}
        />
      ))}

      {/* Floating particles — client-only to avoid SSR mismatch */}
      <Particles count={18} />
    </div>
  );
}

// Static, tappable version of the service labels for tablet/mobile, where
// cursor-attraction physics don't apply. Shown under the compact logo.
function StaticServiceLinks() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {SERVICE_LABELS.map((label) => {
        const Icon = label.icon;
        return (
          <Link
            key={label.code}
            href={label.href}
            className="icon-fx group flex items-start gap-3 rounded-md border border-[#d49960]/30 bg-[#0c1d1a]/85 px-3 py-3 backdrop-blur-md transition-colors hover:border-[#d49960]/80 active:border-[#d49960]/80"
          >
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded border border-[#d49960]/40 bg-[#d49960]/10 transition-colors duration-500 group-hover:bg-[#d49960]/20">
              <Icon className={`mi ${label.anim} h-3.5 w-3.5 text-[#d49960]`} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#e8dcc4]">
                {label.title}
              </p>
              <p className="text-[10px] text-[#e8dcc4]/55">{label.sub}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

function FloatingLabel({
  label,
  containerRef,
  mouseRef,
  phaseOffset,
}: {
  label: Label;
  containerRef: React.RefObject<HTMLDivElement | null>;
  mouseRef: React.RefObject<{ x: number; y: number; inside: boolean }>;
  phaseOffset: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const stateRef = useRef({ x: 0, y: 0, init: false });
  const hoverRef = useRef(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const container = containerRef.current;
      const el = ref.current;
      if (!container || !el) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const cw = container.clientWidth;
      const ch = container.clientHeight;
      const cx = cw / 2;
      const cy = ch / 2;
      const homeX = cx + label.home.x;
      const homeY = cy + label.home.y;

      const t = performance.now() / 1000;
      const bobX = Math.sin(t * 0.6 + phaseOffset) * 8;
      const bobY = Math.cos(t * 0.5 + phaseOffset * 1.3) * 10;

      let targetX = homeX + bobX;
      let targetY = homeY + bobY;

      // Cursor attraction (only when not directly hovered)
      if (!hoverRef.current && mouseRef.current?.inside) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const dx = mx - (stateRef.current.x || homeX);
        const dy = my - (stateRef.current.y || homeY);
        const dist = Math.hypot(dx, dy);
        const attractRadius = 240;
        if (dist < attractRadius) {
          const strength = Math.pow(1 - dist / attractRadius, 1.4) * 0.55;
          targetX = homeX + bobX + dx * strength;
          targetY = homeY + bobY + dy * strength;
        }
      }

      // Init: jump to home so we don't fly in from 0,0
      if (!stateRef.current.init) {
        stateRef.current.x = homeX;
        stateRef.current.y = homeY;
        stateRef.current.init = true;
      }

      // Eased follow — slower when hovered (locked in place)
      const ease = hoverRef.current ? 0.08 : 0.13;
      stateRef.current.x += (targetX - stateRef.current.x) * ease;
      stateRef.current.y += (targetY - stateRef.current.y) * ease;

      el.style.transform = `translate3d(${stateRef.current.x}px, ${stateRef.current.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [containerRef, mouseRef, label.home.x, label.home.y, phaseOffset]);

  const Icon = label.icon;

  return (
    <Link
      ref={ref}
      href={label.href}
      onMouseEnter={() => {
        hoverRef.current = true;
        setHovered(true);
      }}
      onMouseLeave={() => {
        hoverRef.current = false;
        setHovered(false);
      }}
      className={`icon-fx absolute left-0 top-0 z-20 flex cursor-pointer items-start gap-3 rounded-md border bg-[#0c1d1a]/85 px-3 py-2 backdrop-blur-md transition-[opacity,border-color,box-shadow] duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      } ${
        hovered
          ? "border-[#d49960]/90 shadow-[0_0_28px_rgba(212,153,96,0.45)]"
          : "border-[#d49960]/30"
      }`}
      style={{ willChange: "transform" }}
    >
      <div
        className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded border bg-[#d49960]/10 transition-colors ${
          hovered ? "border-[#d49960] bg-[#d49960]/25" : "border-[#d49960]/40"
        }`}
      >
        <Icon className={`mi ${label.anim} h-3.5 w-3.5 text-[#d49960]`} />
      </div>
      <div>
        <p
          className={`text-xs font-semibold tracking-wider transition-colors ${
            hovered ? "text-[#f4ead4]" : "text-[#e8dcc4]"
          }`}
        >
          {label.title}
        </p>
        <p className="text-[10px] text-[#e8dcc4]/55">{label.sub}</p>
      </div>
    </Link>
  );
}

function Particles({ count }: { count: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        top: 10 + Math.random() * 80,
        left: 10 + Math.random() * 80,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 4,
      })),
    [count]
  );
  if (!mounted) return null;
  return (
    <>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#d49960]/50 animate-float"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: "0 0 6px rgba(212,153,96,0.55)",
          }}
        />
      ))}
    </>
  );
}
