"use client";

import Image from "next/image";
import { Building2, Search, GraduationCap, Users } from "lucide-react";
import { asset } from "@/lib/site";

const goals = [
  {
    icon: Building2,
    anim: "mi-pop",
    title: "Obnova kulturnih spomenikov",
    description:
      "Načrtujemo, vodimo in izvajamo zahtevne konservatorsko-restavratorske posege na premični in nepremični kulturni dediščini.",
  },
  {
    icon: Search,
    anim: "mi-wiggle",
    title: "Svetovanje in raziskave",
    description:
      "Vodimo in izvajamo predhodne raziskave na kulturni dediščini, pripravljamo konservatorske načrte in konservatorsko-restavratorsko projektno dokumentacijo.",
  },
  {
    icon: GraduationCap,
    anim: "mi-bob",
    title: "Izobraževanje in ozaveščanje",
    description:
      "Skrbimo za razvijanje zavesti javnosti o konservatorsko-restavratorski dejavnosti, organiziramo delavnice, predavanja in dogodke.",
  },
  {
    icon: Users,
    anim: "mi-pop",
    title: "Sodelovanje",
    description:
      "Sodelujemo z lokalnimi skupnostmi, občinami in drugimi deležniki pri načrtovanju in izvedbi konservatorsko-restavratorskih projektov.",
  },
];

export function About() {
  return (
    <section
      id="o-nas"
      className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-20"
    >
      {/* Background photograph — conservation close-up, deeply tinted so the
          emerald theme and text stay readable */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={asset("/images/about-bg.jpg")}
          alt=""
          fill
          className="object-cover opacity-[0.28]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0c1d1a 0%, rgba(12,29,26,0.82) 35%, rgba(12,29,26,0.82) 65%, #0c1d1a 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, transparent, rgba(12,29,26,0.6))",
          }}
        />
      </div>
      {/* Background atmospherics */}
      <div className="absolute inset-0 -z-10 tech-dots opacity-30" />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,153,96,0.4), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow-line">
            <span>O nas</span>
          </span>
          <h2 className="mt-6 font-serif text-balance text-4xl font-medium tracking-tight text-ivory-gradient sm:text-5xl lg:text-6xl">
            Zavod{" "}
            <span className="text-bronze-gradient italic">RECRO</span>
          </h2>
          <p className="mt-8 text-pretty text-lg leading-relaxed text-[#e8dcc4]/70">
            V Zavodu za ohranjanje kulturne dediščine Recro si prizadevamo za
            izboljšanje razvoja konservatorske-restavratorske dejavnosti na
            področju ohranjanja premične in nepremične kulturne dediščine preko
            krepitve kompetenc projektnega dela z izvajanjem
            znanstvenoraziskovalnih, kulturnih, izobraževalnih in svetovalnih
            aktivnosti.
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-[#e8dcc4]/55">
            Zavod Recro sestavlja ekipa restavratorjev, usposobljenih za delo
            na zahtevnih konservatorsko-restavratorskih projektih.
          </p>
        </div>

        {/* Goals — laboratory grid */}
        <div className="mt-24">
          <div className="mb-12 flex items-center justify-center gap-6">
            <span className="h-px w-12 bronze-divider" />
            <h3 className="font-mono text-xs uppercase tracking-[0.4em] text-[#d49960]">
              Naloge in cilji
            </h3>
            <span className="h-px w-12 bronze-divider" />
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-[#d49960]/15 bg-[#d49960]/10 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
            {goals.map((goal) => (
              <article
                key={goal.title}
                className="brackets icon-fx group relative bg-[#0c1d1a]/70 p-7 transition-all duration-500 hover:bg-[#132823]/85"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#d49960]/30 bg-[#d49960]/10 text-[#d49960] transition-all duration-500 group-hover:border-[#d49960]/70 group-hover:bg-[#d49960]/20">
                  <goal.icon className={`mi ${goal.anim} h-5 w-5`} />
                </div>
                <h4 className="mt-6 font-serif text-lg font-medium text-[#e8dcc4]">
                  {goal.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[#e8dcc4]/55">
                  {goal.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Mission panel */}
        <div className="relative mt-24 overflow-hidden rounded-3xl border border-[#d49960]/20 glass-panel p-10 sm:p-16">
          <div className="absolute inset-0 -z-10 tech-grid opacity-30" />
          <div
            className="absolute -top-32 -right-24 h-72 w-72 rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(212,153,96,0.35), transparent 60%)",
            }}
          />

          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Poslanstvo</span>
            <h3 className="mt-5 font-serif text-3xl font-medium text-ivory-gradient sm:text-4xl">
              Poslanstvo in vizija
            </h3>
            <p className="mt-8 text-lg leading-relaxed text-[#e8dcc4]/75">
              Zavod si prizadeva za trajnostno upravljanje kulturne dediščine,
              povezovanje strokovnjakov in lokalnih skupnosti ter spodbuja
              zavest o pomenu zgodovinskih objektov.
            </p>
            <div className="mx-auto mt-8 h-px w-24 bronze-divider" />
            <p className="mt-8 font-serif text-xl italic text-bronze-gradient sm:text-2xl">
              Ohranjamo dediščino za prihodnje generacije in jo vključujemo v
              sodobni življenjski prostor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
