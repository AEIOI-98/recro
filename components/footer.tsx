import Link from "next/link";
import { RecroLogoIcon } from "./logo";

const footerLinks = {
  Storitve: [
    { name: "Konserviranje-restavriranje", href: "#storitve" },
    { name: "Konservatorski načrt", href: "#storitve" },
    { name: "Projektna dokumentacija", href: "#storitve" },
    { name: "Obnova historičnih fasad", href: "#storitve" },
    { name: "Preiskave in raziskave", href: "#storitve" },
    { name: "Izobraževanje", href: "#storitve" },
  ],
  Povezave: [
    { name: "Domov", href: "#" },
    { name: "O nas", href: "#o-nas" },
    { name: "Reference", href: "#reference" },
    { name: "Kontakt", href: "#kontakt" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#d49960]/15 bg-[#080f0e]">
      <div className="absolute inset-0 -z-10 tech-grid opacity-25" />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,153,96,0.6), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="group flex items-center gap-3 text-[#e8dcc4] transition-colors hover:text-[#d49960]">
              <RecroLogoIcon size={30} className="text-current" />
              <span className="text-lg font-bold tracking-[0.32em] text-current">
                RECRO
              </span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-[#e8dcc4]/55">
              Zavod za ohranjanje kulturne dediščine Recro je organizacija, ki
              se ukvarja z varovanjem, obnovo in promocijo kulturne dediščine.
            </p>
            <p className="mt-6 font-mono text-[10px] tracking-[0.35em] text-[#d49960]/55">
              HERITAGE · SCIENCE · DIGITAL
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d49960]">
                {category}
              </h3>
              <ul className="mt-6 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="underline-bronze text-sm text-[#e8dcc4]/65 transition-colors hover:text-[#e8dcc4]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d49960]">
              Kontakt
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-[#e8dcc4]/65">
              <li>
                <Link
                  href="mailto:info@recro.si"
                  className="transition-colors hover:text-[#e8dcc4]"
                >
                  info@recro.si
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+38641393445"
                  className="font-mono tracking-wider transition-colors hover:text-[#e8dcc4]"
                >
                  +386 41 393 445
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+38651227675"
                  className="font-mono tracking-wider transition-colors hover:text-[#e8dcc4]"
                >
                  +386 51 227 675
                </Link>
              </li>
              <li className="pt-3 leading-relaxed">
                Prežihova ulica 13
                <br />
                2230 Lenart v Slov. goricah
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#d49960]/15 pt-8 sm:flex-row">
          <p className="text-xs text-[#e8dcc4]/45">
            &copy; {new Date().getFullYear()} Zavod RECRO. Vse pravice
            pridržane.
          </p>
          <div className="flex gap-6">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#e8dcc4]/40">
              ID za DDV: SI 54661650 · Mat.št.: 9663088000
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
