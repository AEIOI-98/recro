"use client";

import Link from "next/link";
import {
  Paintbrush,
  FileText,
  ClipboardList,
  Building,
  FlaskConical,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Konserviranje-restavriranje",
    slug: "konserviranje-restavriranje",
    description:
      "Naše delo na področju konserviranja-restavriranja temelji na večletnih izkušnjah. Vsi vodje projektov so strokovno usposobljeni s strokovnim izpitom Ministrstva za kulturo. Delujemo v sodobno opremljeni restavratorski delavnici ali na terenu.",
    icon: Paintbrush,
    anim: "mi-wiggle",
  },
  {
    title: "Konservatorski načrt",
    slug: "konservatorski-nacrt",
    description:
      "Izdelujemo konservatorske načrte za potrebe obnov stavbne dediščine in za izvedbo konservatorsko restavratorskih posegov. Priprava načrtov zahteva interdisciplinarno delo zato sodelujemo s strokovnjaki različnih področij.",
    icon: FileText,
    anim: "mi-pop",
  },
  {
    title: "Priprava projektne dokumentacije",
    slug: "projektna-dokumentacija",
    description:
      "Z združevanjem strokovnega znanja, inovativnih pristopov ter upoštevanja želja naročnika pripravimo projektno dokumentacijo, ki je temelj za uspešno izvedbo konservatorsko-restavratorskih projektov.",
    icon: ClipboardList,
    anim: "mi-pop",
  },
  {
    title: "Obnova historičnih fasad",
    slug: "obnova-fasad",
    description:
      "Pri obnovi historičnih fasad skušamo združiti tradicijo, strokovno znanje in najsodobnejše tehnike s končnim ciljem obnoviti fasado po konservatorsko-restavratorskih načelih ob spoštovanju avtentičnosti.",
    icon: Building,
    anim: "mi-pop",
  },
  {
    title: "Preiskave in raziskave",
    slug: "preiskave-raziskave",
    description:
      "V zavodu se ukvarjamo tudi z raziskovanjem na področju dediščine. Z analitskimi tehnikami izvajamo identifikacijo materialov, analizo njihovih sprememb in vpliv predhodnih posegov.",
    icon: FlaskConical,
    anim: "mi-wiggle",
  },
  {
    title: "Izobraževanje",
    slug: "izobrazevanje",
    description:
      "Organiziramo različne dejavnosti, seminarje, konference in druge oblike izobraževanj. Z organizacijo raznovrstnih izobraževalnih dejavnosti želimo povezovati strokovnjake in širšo javnost.",
    icon: GraduationCap,
    anim: "mi-bob",
  },
];

export function Features() {
  return (
    <section
      id="storitve"
      className="relative overflow-hidden bg-[#0a1816] pt-16 sm:pt-24 pb-28 sm:pb-36"
    >
      {/* Layered atmospherics */}
      <div className="absolute inset-0 -z-10 tech-grid opacity-30" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212,153,96,0.08), transparent 60%), radial-gradient(ellipse 50% 50% at 100% 100%, rgba(56,110,96,0.18), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow eyebrow-line">
            <span>Storitve</span>
          </span>
          <h2 className="mt-6 font-serif text-balance text-4xl font-medium tracking-tight text-ivory-gradient sm:text-5xl lg:text-6xl">
            Celovita skrb za{" "}
            <span className="text-bronze-gradient italic">kulturno</span>{" "}
            dediščino
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-[#e8dcc4]/65">
            Nudimo širok spekter storitev za ohranjanje, obnovo in promocijo
            kulturne dediščine z najvišjimi strokovnimi standardi.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={`/storitve/${service.slug}`}
              className="brackets icon-fx group relative overflow-hidden rounded-xl border border-[#d49960]/15 bg-[#0c1d1a]/60 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#d49960]/45 hover:bg-[#132823]/80"
            >
              {/* Subtle hover glow */}
              <div
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, rgba(212,153,96,0.18), transparent 60%)",
                }}
              />

              <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-[#d49960]/30 bg-[#d49960]/10 text-[#d49960] transition-all duration-500 group-hover:border-[#d49960]/70 group-hover:bg-[#d49960]/20 group-hover:text-[#f4ead4]">
                <service.icon className={`mi ${service.anim} h-6 w-6`} />
              </div>

              <h3 className="mt-7 font-serif text-xl font-medium leading-snug text-[#e8dcc4] transition-colors group-hover:text-[#f4ead4]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#e8dcc4]/55">
                {service.description}
              </p>

              <span className="mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#d49960] transition-all">
                Več informacij
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>

              {/* Scan ribbon at bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(212,153,96,0.8), transparent)",
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
