"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RecroLogoIcon } from "./logo";

const navLinks = [
  { name: "Domov", href: "/" },
  { name: "O nas", href: "/#o-nas" },
  { name: "Storitve", href: "/#storitve" },
  { name: "Reference", href: "/#reference" },
  { name: "Kontakt", href: "/#kontakt" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-[#0c1d1a]/85 backdrop-blur-xl border-b border-[#d49960]/15"
          : "bg-gradient-to-b from-[#0c1d1a]/70 to-transparent"
      )}
    >
      {/* Bronze hairline */}
      <div
        className="absolute inset-x-0 bottom-0 h-px opacity-60"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,153,96,0.5), transparent)",
        }}
      />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="group -m-1.5 flex items-center gap-3 p-1.5 text-[#e8dcc4] transition-colors group-hover:text-[#d49960] hover:text-[#d49960]">
            <RecroLogoIcon size={26} className="text-current" />
            <span className="text-lg font-bold tracking-[0.32em] text-current">
              RECRO
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="icon-fx -m-2.5 inline-flex items-center justify-center rounded-md border border-[#d49960]/25 bg-[#0c1d1a]/60 p-2.5 text-[#e8dcc4] backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Odpri meni</span>
            <Menu className="mi mi-pop h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="underline-bronze text-sm font-medium tracking-wider text-[#e8dcc4]/75 transition-colors hover:text-[#e8dcc4]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/#kontakt" className="btn-bronze icon-fx !py-2.5 !px-5 !text-xs">
            Kontaktirajte nas <ArrowRight className="mi mi-nudge h-3.5 w-3.5" />
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden",
          mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"
        )}
      >
        <div
          className="fixed inset-0 bg-[#0c1d1a]/90 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border-l border-[#d49960]/20 bg-[#0c1d1a] px-6 py-6 sm:max-w-sm">
          <div className="absolute inset-0 tech-grid opacity-40" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <Link href="/" className="group -m-1.5 flex items-center gap-3 p-1.5 text-[#e8dcc4] transition-colors hover:text-[#d49960]">
                <RecroLogoIcon size={26} className="text-current" />
                <span className="text-lg font-bold tracking-[0.32em] text-current">
                  RECRO
                </span>
              </Link>
              <button
                type="button"
                className="icon-fx -m-2.5 rounded-md border border-[#d49960]/25 bg-[#0c1d1a]/60 p-2.5 text-[#e8dcc4]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Zapri meni</span>
                <X className="mi mi-rotate h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-10 flow-root">
              <div className="-my-6 divide-y divide-[#d49960]/15">
                <div className="space-y-1 py-6">
                  {navLinks.map((link, i) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="group -mx-3 flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-[#e8dcc4] hover:bg-[#d49960]/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="font-mono text-xs text-[#d49960]/60">
                        / 0{i + 1}
                      </span>
                      <span className="tracking-wider">{link.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#kontakt"
                    className="btn-bronze icon-fx w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Kontaktirajte nas <ArrowRight className="mi mi-nudge h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
