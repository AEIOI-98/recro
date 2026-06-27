"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { MapPin, Calendar, ArrowRight, Map, Grid3X3 } from "lucide-react";
import { asset } from "@/lib/site";

// Dynamically import map (client-only) to avoid SSR issues with Google Maps
const ReferencesMap = dynamic(
  () => import("./references-map").then((mod) => mod.ReferencesMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[560px] items-center justify-center rounded-2xl border border-[#d49960]/20 bg-[#0c1d1a]/60">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#d49960]/40 border-t-[#d49960]" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#e8dcc4]/60">
            Nalaganje zemljevida...
          </span>
        </div>
      </div>
    ),
  }
);

export type ProjectStatus = "active" | "finished";

export function StatusBadge({
  status,
  className = "",
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const active = status === "active";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] backdrop-blur-sm ${
        active
          ? "border-[#d49960]/55 bg-[#d49960]/15 text-[#f4ead4]"
          : "border-[#e8dcc4]/15 bg-[#0c1d1a]/75 text-[#e8dcc4]/55"
      } ${className}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          active ? "bg-[#d49960] animate-node" : "bg-[#e8dcc4]/40"
        }`}
        style={
          active ? { boxShadow: "0 0 8px rgba(212,153,96,0.85)" } : undefined
        }
      />
      {active ? "V izvajanju" : "Zaključeno"}
    </span>
  );
}

const references = [
  {
    title: "Grad Slovenska Bistrica",
    slug: "grad-slovenska-bistrica",
    status: "finished" as const,
    location: "Bistriški grad, Slovenska Bistrica, Slovenija",
    date: "2025",
    image: "/images/hero-bg.jpg",
    coordinates: [46.3947, 15.5728] as [number, number],
    shortDescription:
      "Konservatorsko-restavratorski posegi na stenskih poslikavah na stopnišču gradu Slovenska Bistrica (EID 1-00159). Nepremična kulturna dediščina.",
  },
  {
    title: "Grad Negova",
    slug: "grad-negova",
    status: "active" as const,
    location: "Negova 13, Negova, Slovenija",
    date: "2025-2026",
    image: "/images/hero-bg.jpg",
    coordinates: [46.6105, 15.9371] as [number, number],
    shortDescription:
      "Konservatorski posegi na arhitekturnih in stavbnih elementih gradu Negova (EID 1-00484). Prvi objekt v Sloveniji, kjer se je stanje gradu konserviralo.",
  },
  {
    title: "Stara grofija",
    slug: "stara-grofija",
    status: "active" as const,
    location: "Stara grofija, Celje, Slovenija",
    date: "2025-2026",
    image: "/images/hero-bg.jpg",
    coordinates: [46.2312, 15.2677] as [number, number],
    shortDescription:
      "Konservatorsko-restavratorski posegi na kamnitih arhitekturnih elementih fasade Stare grofije (EID 1-00062). Nepremična kulturna dediščina.",
  },
  {
    title: "Dvorec Jelšingrad",
    slug: "dvorec-jelsingrad",
    status: "finished" as const,
    location: "Dvorec Jelšingrad, Šmarje pri Jelšah, Slovenija",
    date: "2025",
    image: "/images/hero-bg.jpg",
    coordinates: [46.2286, 15.5189] as [number, number],
    shortDescription:
      "Konservatorsko-restavratorski posegi v avli dvorca Jelšingrad (EID 1-04632). Pomemben profan spomenik v neomavrskem oz. neoislamskem slogu.",
  },
  {
    title: "Cerkev sv. Petra",
    slug: "cerkev-sv-petra",
    status: "finished" as const,
    location: "Cerkev sv. Petra, Malečnik pri Mariboru, Slovenija",
    date: "2025",
    image: "/images/hero-bg.jpg",
    coordinates: [46.5833, 15.7167] as [number, number],
    shortDescription:
      "Konservatorsko-restavratorski posegi na leseni sediliji v cerkvi sv. Petra. Premična kulturna dediščina z bogato lesenorezbarsko obdelavo, pozlato in posrebritvijo.",
  },
  {
    title: "Upravna enota Ptuj",
    slug: "upravna-enota-ptuj",
    status: "finished" as const,
    location: "Slomškova ulica 10, Ptuj, Slovenija",
    date: "2025",
    image: "/images/hero-bg.jpg",
    coordinates: [46.42, 15.87] as [number, number],
    shortDescription:
      "Konservatorsko-restavratorski posegi na fasadi hiše Slomškova 10 (EID 1-06615). Historična mestna dvonadstropna vogalna palača.",
  },
  {
    title: "Sgrafito - Bolnišnica za pljučne bolezni",
    slug: "sgrafito-bolnisnica",
    status: "finished" as const,
    location: "Bolnišnica za pljučne bolezni, Slivniško Pohorje, Slovenija",
    date: "2025",
    image: "/images/hero-bg.jpg",
    coordinates: [46.5, 15.4833] as [number, number],
    shortDescription:
      "Konservatorsko-restavratorski posegi na sgrafitu v bolnišnici za pljučne bolezni na Slivniškem pohorju (EID 1-29740). Dekorativna likovna tehnika.",
  },
  {
    title: "Železniška postaja Maribor",
    slug: "zelezniška-postaja-maribor",
    status: "finished" as const,
    location: "Železniška postaja, Maribor, Slovenija",
    date: "2025",
    image: "/images/hero-bg.jpg",
    coordinates: [46.5547, 15.6459] as [number, number],
    shortDescription:
      "Konservatorsko-restavratorski posegi na spiralno črno-belem tlaku in prvotni leseni blagajni v avli (EID 1-11623). Nepremična kulturna dediščina.",
  },
  {
    title: "Westnova vila",
    slug: "westnova-vila",
    status: "active" as const,
    location: "Westnova vila, Celje, Slovenija",
    date: "2025",
    image: "/images/hero-bg.jpg",
    coordinates: [46.2312, 15.27] as [number, number],
    shortDescription:
      "Konservatorsko-restavratorski posegi na lesenih vratih in kovonskih kletnih mrežah na Westnovi vili v Celju (EID 1-11905). Profana stavbna dediščina.",
  },
];

export function References() {
  const [viewMode, setViewMode] = useState<"map" | "grid">("map");

  return (
    <section
      id="reference"
      className="relative overflow-hidden py-28 sm:py-36"
    >
      <div className="absolute inset-0 -z-10 tech-dots opacity-40" />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,153,96,0.4), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow eyebrow-line">
            <span>Reference</span>
          </span>
          <h2 className="mt-6 font-serif text-balance text-4xl font-medium tracking-tight text-ivory-gradient sm:text-5xl lg:text-6xl">
            Naši{" "}
            <span className="text-bronze-gradient italic">projekti</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-[#e8dcc4]/65">
            Oglejte si izbor naših najnovejših konservatorsko-restavratorskih
            projektov na premični in nepremični kulturni dediščini.
          </p>
        </div>

        {/* View Toggle */}
        <div className="mt-14 flex justify-center">
          <div className="inline-flex gap-1 rounded-lg border border-[#d49960]/20 bg-[#0c1d1a]/70 p-1 backdrop-blur-sm">
            <button
              onClick={() => setViewMode("map")}
              className={`icon-fx flex items-center gap-2 rounded-md px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase transition-all ${
                viewMode === "map"
                  ? "bronze-gradient text-[#0c1d1a] shadow-lg"
                  : "text-[#e8dcc4]/55 hover:text-[#e8dcc4]"
              }`}
            >
              <Map className="mi mi-pop h-3.5 w-3.5" />
              Zemljevid
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`icon-fx flex items-center gap-2 rounded-md px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase transition-all ${
                viewMode === "grid"
                  ? "bronze-gradient text-[#0c1d1a] shadow-lg"
                  : "text-[#e8dcc4]/55 hover:text-[#e8dcc4]"
              }`}
            >
              <Grid3X3 className="mi mi-pop h-3.5 w-3.5" />
              Mreža
            </button>
          </div>
        </div>

        {/* Map View */}
        {viewMode === "map" && (
          <div className="mt-12">
            <ReferencesMap references={references} />
          </div>
        )}

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {references.map((ref) => (
              <Link key={ref.slug} href={`/reference/${ref.slug}`}>
                <article className="brackets icon-fx group overflow-hidden rounded-xl border border-[#d49960]/15 bg-[#0c1d1a]/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#d49960]/45">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0a1816]">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0c1d1a] via-[#0c1d1a]/40 to-transparent" />
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-90"
                      style={{ backgroundImage: `url(${asset(ref.image)})` }}
                    />
                    <StatusBadge
                      status={ref.status}
                      className="absolute right-3 top-3 z-20"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="line-clamp-2 font-serif text-lg font-medium text-[#e8dcc4] transition-colors group-hover:text-[#f4ead4]">
                      {ref.title}
                    </h3>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-start gap-2 text-xs text-[#e8dcc4]/55">
                        <MapPin className="mi mi-bob mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d49960]" />
                        <span className="line-clamp-2">{ref.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#e8dcc4]/55">
                        <Calendar className="mi mi-pop h-3.5 w-3.5 shrink-0 text-[#d49960]" />
                        <span className="font-mono tracking-wider">{ref.date}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-14 text-center">
          <Link href="/#kontakt" className="btn-bronze icon-fx">
            Povpraševanje za projekt <ArrowRight className="mi mi-nudge h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
