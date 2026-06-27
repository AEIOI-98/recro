import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const services: Record<string, {
  title: string;
  description: string;
  fullDescription: string[];
  features: string[];
}> = {
  "konserviranje-restavriranje": {
    title: "Konserviranje-restavriranje",
    description: "Naše delo na področju konserviranja-restavriranja temelji na večletnih izkušnjah.",
    fullDescription: [
      "Naše delo na področju konserviranja-restavriranja temelji na večletnih izkušnjah. Delujemo v sodobno opremljeni restavratorski delavnici ali na terenu.",
      "Dejavnosti konserviranja-restavriranja izvajamo na področjih: stensko slikarstvo, štukatura, kamnita plastika, lesena polikromirana plastika, okrasna oprema, slike na platnu in lesu.",
      "Pri našem delu upoštevamo najvišje standarde stroke in sodobne mednarodne smernice za varovanje kulturne dediščine."
    ],
    features: [
      "Stensko slikarstvo in poslikave",
      "Štukatura in dekorativni elementi",
      "Kamnita plastika in skulpture",
      "Lesena polikromirana plastika",
      "Okrasna oprema in pozlata",
      "Slike na platnu in lesu"
    ]
  },
  "konservatorski-nacrt": {
    title: "Konservatorski načrt",
    description: "Izdelujemo konservatorske načrte za potrebe obnov stavbne dediščine.",
    fullDescription: [
      "Izdelujemo konservatorske načrte za potrebe obnov stavbne dediščine in za izvedbo konservatorsko restavratorskih posegov. Priprava načrtov zahteva interdisciplinarno delo zato sodelujemo s strokovnjaki različnih področij.",
      "Konservatorski načrt je temeljni dokument, ki usmerja obnovo kulturne dediščine. Vsebuje analizo stanja, vrednotenje, smernice za varstvo in načrt izvedbe del.",
      "Pri pripravi načrtov upoštevamo veljavno zakonodajo in mednarodne konvencije s področja varstva kulturne dediščine."
    ],
    features: [
      "Analiza obstoječega stanja",
      "Vrednotenje kulturne dediščine",
      "Smernice za varstvo",
      "Načrt izvedbe del",
      "Interdisciplinarni pristop",
      "Sodelovanje s strokovnjaki"
    ]
  },
  "projektna-dokumentacija": {
    title: "Priprava projektne dokumentacije",
    description: "Z združevanjem strokovnega znanja pripravimo projektno dokumentacijo.",
    fullDescription: [
      "Z združevanjem strokovnega znanja, inovativnih pristopov ter upoštevanja želja naročnika pripravimo projektno dokumentacijo, ki je temelj za uspešno izvedbo konservatorsko-restavratorskih projektov.",
      "Projektna dokumentacija vključuje vse potrebne elaborate za pridobitev dovoljenj in uspešno izvedbo del na kulturni dediščini.",
      "Naša ekipa zagotavlja celovito podporo od začetne ideje do končne realizacije projekta."
    ],
    features: [
      "Idejna zasnova projekta",
      "Tehnična dokumentacija",
      "Elaborati za pridobitev dovoljenj",
      "Popis del in predračun",
      "Koordinacija s pristojnimi organi",
      "Svetovanje naročniku"
    ]
  },
  "obnova-fasad": {
    title: "Obnova historičnih fasad",
    description: "Pri obnovi historičnih fasad združujemo tradicijo in sodobne tehnike.",
    fullDescription: [
      "Pri obnovi historičnih fasad skušamo združiti tradicijo, strokovno znanje in najsodobnejše tehnike s končnim ciljem obnoviti fasado po konservatorsko-restavratorskih načelih ob spoštovanju avtentičnosti.",
      "Obnova fasad vključuje sanacijo nosilne konstrukcije, obnovo ometov, restavracijo okrasnih elementov in barvno rekonstrukcijo.",
      "Pri delu uporabljamo tradicionalne materiale in tehnike, ki so združljivi z originalno substanco."
    ],
    features: [
      "Sanacija nosilne konstrukcije",
      "Obnova historičnih ometov",
      "Restavracija okrasnih elementov",
      "Barvna rekonstrukcija",
      "Uporaba tradicionalnih materialov",
      "Spoštovanje avtentičnosti"
    ]
  },
  "preiskave-raziskave": {
    title: "Preiskave in raziskave",
    description: "V zavodu se ukvarjamo tudi z raziskovanjem na področju dediščine.",
    fullDescription: [
      "V zavodu se ukvarjamo tudi z raziskovanjem na področju dediščine. Z analitskimi tehnikami izvajamo identifikacijo materialov, analizo njihovih sprememb in vpliv predhodnih posegov.",
      "Naše raziskave vključujejo sondiranje, stratigrafske analize, laboratorijske preiskave in dokumentiranje z najsodobnejšimi tehnikami.",
      "Rezultati raziskav so osnova za pravilno načrtovanje konservatorsko-restavratorskih posegov."
    ],
    features: [
      "Sondiranje in vzorčenje",
      "Stratigrafske analize",
      "Laboratorijske preiskave",
      "Identifikacija materialov",
      "Dokumentiranje stanja",
      "Analiza predhodnih posegov"
    ]
  },
  "izobrazevanje": {
    title: "Izobraževanje",
    description: "Organiziramo različne dejavnosti, seminarje in konference.",
    fullDescription: [
      "Organiziramo različne dejavnosti, seminarje, konference in druge oblike izobraževanj. Z organizacijo raznovrstnih izobraževalnih dejavnosti želimo povezovati strokovnjake in širšo javnost.",
      "Naša izobraževanja so namenjena tako strokovnjakom na področju varstva kulturne dediščine kot tudi ljubiteljem in lastnikom kulturnih spomenikov.",
      "Redno sodelujemo z izobraževalnimi institucijami in muzejskimi ustanovami pri izvedbi strokovnih programov."
    ],
    features: [
      "Strokovni seminarji",
      "Konference in simpoziji",
      "Delavnice za javnost",
      "Sodelovanje z institucijami",
      "Mentorstvo študentom",
      "Ozaveščanje o dediščini"
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0c1d1a]">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 -z-10 tech-grid opacity-40" />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 80% 0%, rgba(212,153,96,0.15), transparent 60%)",
            }}
          />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href="/#storitve"
              className="underline-bronze icon-fx inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#e8dcc4]/55 transition-colors hover:text-[#d49960]"
            >
              <ArrowLeft className="mi mi-nudge-left h-3.5 w-3.5" /> Nazaj na storitve
            </Link>
            <h1 className="mt-10 font-serif text-4xl font-medium tracking-tight text-ivory-gradient sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#e8dcc4]/65">
              {service.description}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-medium text-ivory-gradient">
                  O storitvi
                </h2>
                <div className="mt-8 space-y-5">
                  {service.fullDescription.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[#e8dcc4]/65 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-serif text-3xl font-medium text-ivory-gradient">
                  Kaj ponujamo
                </h2>
                <ul className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="brackets icon-fx group flex items-start gap-4 rounded-lg border border-[#d49960]/15 bg-[#0c1d1a]/60 p-4 transition-colors hover:border-[#d49960]/45"
                    >
                      <CheckCircle className="mi mi-pop mt-0.5 h-4 w-4 shrink-0 text-[#d49960]" />
                      <span className="text-sm text-[#e8dcc4]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="brackets relative mt-20 overflow-hidden rounded-2xl border border-[#d49960]/20 glass-panel p-10 text-center sm:p-14">
              <div className="absolute inset-0 -z-10 tech-grid opacity-25" />
              <span className="eyebrow">Sodelovanje</span>
              <h3 className="mt-3 font-serif text-3xl font-medium text-ivory-gradient">
                Zainteresirani za to storitev?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-[#e8dcc4]/65">
                Kontaktirajte nas za brezplačno svetovanje in ponudbo.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/#kontakt" className="btn-bronze">
                  Kontaktirajte nas
                </Link>
                <Link href="/#storitve" className="btn-ghost">
                  Vse storitve
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
