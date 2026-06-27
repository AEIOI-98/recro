import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, Calendar, Building2 } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { asset } from "@/lib/site";

const references: Record<string, {
  title: string;
  fullTitle: string;
  location: string;
  date: string;
  image: string;
  type: string;
  description: string[];
  works: string[];
}> = {
  "grad-slovenska-bistrica": {
    title: "Grad Slovenska Bistrica",
    fullTitle: "Konservatorsko-restavratorski posegi na stenskih poslikavah na stopnišču gradu Slovenska Bistrica (EID 1-00159)",
    location: "Bistriški grad (grad Slovenska Bistrica), Slovenska Bistrica, Slovenija",
    date: "2025",
    image: "/images/hero-bg.jpg",
    type: "Nepremična kulturna dediščina",
    description: [
      "Grad Slovenska Bistrica, znan tudi kot Bistriški grad, je eden najpomembnejših kulturnih spomenikov v regiji z bogato arhitekturno in umetnostnozgodovinsko dediščino. Reprezentančno stopnišče na zahodnem krilu je bilo prizidano v času grofov Attems. Leta 1721 je baročni slikar Franc Ignacij Flurer poslikal celotno stopnišče.",
      "V okviru projekta smo z interventnimi posegi stabilizirali kritična področja stenskih poslikav na stopnišču. Na poslikavi so se pojavljale naslednje poškodbe: odstopanje delov ometa s poslikavo od podlage oz. zidu, večje razpoke na stiku med zidom in stropom, odstopanje barvne plasti od ometa ter prašenje ometa.",
      "V okviru projekta smo se osredotočili predvsem na stabilizacijo in utrditev barvnih plasti in ometov. Posegi so bili prilagojeni stanju posameznih segmentov poslikav in izvedeni v skladu s sodobnimi konservatorskimi načeli."
    ],
    works: [
      "Dokumentiranje obstoječega stanja",
      "Sondiranje in konservatorsko-restavratorske raziskave",
      "Mehansko čiščenje barvne plasti",
      "Utrjevanje barvne plasti in ometov",
      "Dopolnjevanje manjkajočih delov in kitanje poškodb",
      "Retuširanje in barvna integracija poslikav"
    ]
  },
  "grad-negova": {
    title: "Grad Negova",
    fullTitle: "Konservatorski posegi na arhitekturnih in stavbnih elementih gradu Negova (EID 1-00484)",
    location: "Grad Negova, Negova, Slovenija",
    date: "2025-2026",
    image: "/images/hero-bg.jpg",
    type: "Nepremična kulturna dediščina",
    description: [
      "Grad Negova ali Negovski Grad kot mu pravijo domačini, stoji v istoimenskem naselju Negova v Slov. goricah. Grajsko jedro – staro grad je zasnovan kot večetažna, štiritraktna stavba z razgibano dvokapno streho in osrednjim notranjim dvoriščem.",
      "Grad se prvič omenja leta 1425 pod imenom Egaw, njegov lastnik pa je bil deželni glavar Hans iz Windena na Štajerskem. Od leta 1542 in vse do konca druge svetovne vojne je bil v lasti grofov Trautmansdorf. V 16. stol. so grad razširili za tri trakte s stolpi.",
      "Na gradu so hranjeni številni kamniti, leseni in drugi historični elementi, ki zaradi starosti, vremenskih vplivov in preteklih posegov zahtevajo strokovno konservatorsko obravnavo. Izpostaviti je potrebno, da je to prvi objekt v Sloveniji, kjer se je stanje gradu konserviralo.",
      "Konservatorska dela, ki jih izvajamo na objektu so razdeljena v več sklopov: les (vrata, vratni podboji, leseni stropovi), kamen (okenski okvirji, kamini, vratni okvirji, portali, stebri, pilastri, konzole, dekorativni elementi, spolije), stenske poslikave, kovina in opečni tlak."
    ],
    works: [
      "Dokumentiranje obstoječega stanja, vključno s fotodokumentacijo, grafičnimi izrisi poškodb in popisom sestavin spomenika",
      "Sondiranje in konservatorsko-restavratorske raziskave posameznih materialov",
      "Mehansko in kemijsko čiščenje kamnitih, lesenih in drugih historičnih površin",
      "Utrjevanje oslabljenih materialov, konsolidacija degradiranih struktur in sanacija razpok ter stikov med elementi",
      "Odstranjevanje bioloških dejavnikov propadanja ter izvedba dezinfekcije, dezinsekcije oziroma biocidne zaščite po potrebi",
      "Domodelacija in dopolnjevanje manjkajočih delov ter površinska zaščita z ustreznimi zaščitnimi sistemi glede na vrsto materiala"
    ]
  },
  "stara-grofija": {
    title: "Stara grofija",
    fullTitle: "Konservatorsko-restavratorski posegi na kamnitih arhitekturnih elementih fasade Stare grofije (EID 1-00062)",
    location: "Stara grofija, Celje, Slovenija",
    date: "2025-2026",
    image: "/images/hero-bg.jpg",
    type: "Nepremična kulturna dediščina",
    description: [
      "Stara grofija je ena najlepših renesančnih stavb v Celju in pomemben del kompleksa Pokrajinskega muzeja Celje. Zgrajena je bila med letoma 1580 in 1603 ob južnem delu mestnega obzidja, na mestu, kjer so nekoč stala upravna in gospodarska poslopja celjskega spodnjega gradu.",
      "Zaradi zelo slabega stanja fasade in arhitekturnih kamnitih elementov je bila zelo zahtevna konservatorsko-restavratorska obnova vseh kamnitih okenskih okvirov, portalov in stebrov.",
      "V okviru so konservatorsko-restavratorski posegi na kamnitih elementih usmerjeni predvsem v stabilizacijo, domodelacijo, estetsko reintegracijo in dolgoročno zaščito materiala. Posegi so načrtovani v skladu s sodobnimi konservatorsko-restavratorskimi smernicami in prilagojeni stanju posameznih kamnitih površin."
    ],
    works: [
      "Dokumentiranje obstoječega stanja",
      "Mehansko in kemijsko čiščenje kamnitih površin ter odstranjevanje sekundarnih oblog",
      "Odstranjevanje neustreznih domodelacij in sanacija poškodb",
      "Utrjevanje kamnitega nosilca",
      "Domodelacija manjkajočih profilacij in detajlov s kompatibilnimi materiali",
      "Hidrofobna zaščita kamnitih površin s paroprepustnimi zaščitnimi sredstvi"
    ]
  },
  "dvorec-jelsingrad": {
    title: "Dvorec Jelšingrad",
    fullTitle: "Konservatorsko-restavratorski posegi v avli dvorca Jelšingrad (EID 1-04632)",
    location: "Dvorec Jelšingrad, Šmarje pri Jelšah, Slovenija",
    date: "2025",
    image: "/images/hero-bg.jpg",
    type: "Nepremična kulturna dediščina",
    description: [
      "Dvorec Jelšingrad je pomemben profan spomenik v neomavrskem oz. neoislamskem slogu, iz leta 1860, delo stavbenika Franza Stichla, po naročilu tedanjega lastnika barona Rudolfa Oskarja Gödel-Lannoy-a.",
      "V okviru projekta smo izvedli zaključna konservatorsko-restavratorska dela v vhodni veži oz. avli in lovski sobi. Poslikave in ometi v avli in lovski sobi so bile zaradi vlage, delovanja vodotopnih soli in preteklih posegov delno degradirane ter estetsko nepoenotene.",
      "V okviru zaključnih konservatorsko-restavratorskih posegov smo izvedli stabilizacijo barvne plasti, sanacijo poškodb, rekonstrukcijo manjkajočih dekorativnih elementov, barvno in strukturno poenotenje celote. Posegi so temeljili na predhodni dokumentaciji in naravoslovnih ugotovitvah o materialni sestavi poslikav in ometov."
    ],
    works: [
      "Dokumentiranje obstoječega stanja in pregled predhodne dokumentacije",
      "Kemično odstranjevanje nečistoč, vezanih z barvno plastjo",
      "Utrjevanje barvne plasti in odstranjevanje vodotopnih soli iz najbolj prizadetih območij",
      "Kitanje poškodb in izravnava prehodov med starimi in novimi ometi",
      "Rekonstrukcija naslikanih kovinskih mrež v rozetah ter retuša dekorativnih elementov",
      "Barvno in strukturno poenotenje sten, stropa, grbov in ometov v avli ter lovski sobi"
    ]
  },
  "cerkev-sv-petra": {
    title: "Cerkev sv. Petra",
    fullTitle: "Konservatorsko-restavratorski posegi na leseni sediliji v cerkvi sv. Petra",
    location: "Cerkev sv. Petra, Malečnik pri Mariboru, Slovenija",
    date: "2025",
    image: "/images/hero-bg.jpg",
    type: "Premična kulturna dediščina",
    description: [
      "Sedilija v cerkvi sv. Petra v Malečniku je cerkveni arhitekturni sedež z bogato lesenorezbarsko obdelavo, pozlato in posrebritvijo. Pred posegi je bila v zelo slabem stanju, z razrahljanimi stiki, poškodbami lesa, obrabljeno pozlato, preslikavami in neustreznimi kasnejšimi tapetniškimi posegi.",
      "Na projektu so bili izvedeni celoviti konservatorsko-restavratorski posegi na lesenem nosilcu, podlogi, barvni in kovinski plasti ter na tapetniških elementih sedilije. Posegi so bili usmerjeni v stabilizacijo konstrukcije, sanacijo poškodb, odstranitev sekundarnih nanosov, obnovo kovinskih slojev in izvedbo tapeciranja v ustrezni tkanini in barvi."
    ],
    works: [
      "Dokumentiranje obstoječega stanja in demontaža sestavnih delov",
      "Mehansko in kemično odstranjevanje nečistoč ter sekundarnih barvnih nanosov",
      "Dezinsekcija, lokalno utrjevanje lesa in sanacija razrahljanih stikov",
      "Kitanje poškodb, dopolnjevanje manjkajočih delov ter izdelava manjkajočega okrasja",
      "Nanos podloge, izvedba retuše in nanos kovinskih slojev - ponovno zlatenje in srebrenje",
      "Izvedba tapiciranja sedala in naslonjal za roke"
    ]
  },
  "upravna-enota-ptuj": {
    title: "Upravna enota Ptuj",
    fullTitle: "Konservatorsko-restavratorski posegi na fasadi HIŠE SLOMŠKOVA 10, PTUJ (EID 1-06615)",
    location: "Upravna enota Ptuj, Slomškova ulica 10, Ptuj, Slovenija",
    date: "2025",
    image: "/images/hero-bg.jpg",
    type: "Nepremična kulturna dediščina",
    description: [
      "Objekt Upravne enote Ptuj je historična mestna dvonadstropna vogalna palača, ki jo je dala med 1886 in 1889 zgraditi Mestna hranilnica na Ptuju. Fasada je bogato neorenesančno oblikovana in okrašena z bogatim štukaturnim okrasjem, rustikalno obdelanim pritličjem, profiliranimi venci in kamnitimi, kovinskimi ter lesenimi arhitekturnimi elementi.",
      "Štukaturno okrasje predvsem konzole in vlečeni profili pod napuščem so bili pred konservatorsko-restavratorskimi posegi v zelo nestabilnem stanju, zaradi zatekanja meteorni vode in vremenskih vplivov. Predvsem je bilo problematično lokalno odstopanje in odpadanje ometa, opleska in samih konzol, zato je bila predvidena celovita konservatorsko-restavratorska obnova.",
      "V okviru projekta smo izvedli konservatorsko-restavratorske posege na štukaturnem okrasju, kamnitih elementih, kovinskih elementih (kovane mreže) in lesu (masivna dvokrilna lesena vrata in okenski okvirji). Tekom projekta se je izkazalo, da manjka nad balkonskimi vrati trikotni zaključek s štukaturnim okrasjem, ki smo ga s pomočjo predhodno pripravljenih kalupov izdelali in montirali na prvotno mesto."
    ],
    works: [
      "Odstranjevanje recentnih beležev in poškodovanih ometov, zapolnjevanje praznin ter priprava podlage za barvanje",
      "Konservatorsko-restavratorski posegi na štukaturnem okrasju, figuralnih konzolah, pilastrih in okenskih okvirjih",
      "Obnova kamnitih elementov z nizkotlačnim čiščenjem, utrjevanjem, nadomeščanjem poškodb in hidrofobno zaščito",
      "Restavriranje kovinskih elementov s stabilizacijo rje, protikorozijsko zaščito in novimi barvnimi nanosi",
      "Obnova lesenih vhodnih vrat z mizarskimi popravili in novim oljnim premazom"
    ]
  },
  "sgrafito-bolnisnica": {
    title: "Sgrafito - Bolnišnica za pljučne bolezni",
    fullTitle: "Konservatorsko-restavratorski posegi na sgrafitu v bolnišnici za pljučne bolezni na Slivniškem pohorju (EID 1-29740)",
    location: "Bolnišnica za pljučne bolezni, Slivniško Pohorje, Slovenija",
    date: "2025",
    image: "/images/hero-bg.jpg",
    type: "Nepremična kulturna dediščina",
    description: [
      "Dekorativna poslikava sgrafito se nahaja v avli bolnišnice za plučne bolezni na Slivniškem pohorju. Gre za dekorativno likovno tehniko, pri kateri z praskanjem ali rezanjem skozi zgornjo plast ometa razkrijemo spodnjo plast drugačne barve in tako ustvarimo kontrasten vzorec.",
      "Pred posegi je bila poslikava v zadovoljivem stanju vendar z manjšimi lokalnimi poškodbami, vidnimi površinskimi nečistočami, prisotnimi plesnimi in manjšimi razpokami ter starimi lokalnimi preslikavami.",
      "V okviru projekta so bili konservatorsko-restavratorski posegi usmerjeni v stabilizacijo ometov, odstranjevanje površinskih nečistoč in preslikav, odstranjevanje sekundarnih nanosov barvnih plasti in sanacijo plesni. Cilj posegov je bil ohraniti izvorni vizualni značaj sgrafita ter tehnično stabilizirati njegovo površino."
    ],
    works: [
      "Dokumentiranje obstoječega stanja sgrafita",
      "Odstranjevanje površinskih nečistoč",
      "Odstranjevanje preslikav oziroma sekundarne barvne plasti",
      "Utrjevanje ometov na območjih razpok in lokalnih poškodb",
      "Odstranjevanje plesni z ustreznimi biocidnimi sredstvi",
      "Kitanje manjših lokalnih poškodb ter tonsko izenačevanje površine"
    ]
  },
  "zelezniška-postaja-maribor": {
    title: "Železniška postaja Maribor",
    fullTitle: "Konservatorsko-restavratorski posegi na spiralno črno-belem tlaku in prvotni leseni blagajni v avli na Železniški postaji Maribor (EID 1-11623)",
    location: "Železniška postaja Maribor, Maribor, Slovenija",
    date: "2025",
    image: "/images/hero-bg.jpg",
    type: "Nepremična kulturna dediščina",
    description: [
      "Železniška postaja Maribor ima v zgodovini mesta posebno mesto – ne le kot prometno središče, temveč kot simbol gospodarskega razvoja, tehnološkega napredka in arhitekturne dediščine. Arhitekta Milan Černigoj in Dušan Černič sta leta 1949 pripravila nove idejne zasnove za današnjo železniško postajo, ki je izrazit primer modernistične arhitekture.",
      "Prenova avle in zunanjega platoja na železniški postaji Maribor, je zajemala vhodni del postajnega poslopja z novimi drsnimi vrati in urejenimi prehodi v avli ter konserviranjem-restavriranjem spomeniško zaščitenega stopnišča oz. avle in originalne blagajne.",
      "V okviru projekta smo v osrednji avli konservirali-restavrirali značilno oblikovani spiralno črno-beli kamniti tlak, ki je bil v slabem stanju. Prav tako smo obnovili prvotno potniško blagajno, kot je prodajno okence, pohištvo in arhitekturni elementi. Vsi posegi so bili izvedeni v skladu s kulturnovarstvenimi pogoji in navodili Zavoda za varstvo kulturne dediščine Slovenije."
    ],
    works: [
      "Dokumentiranje obstoječega stanja kamnitega tlaka in lesene blagajne",
      "Odstranjevanje površinskih nečistoč",
      "Odstranjevanje preslikav oziroma sekundarne plasti",
      "Utrjevanje na območjih razpok in lokalnih poškodb",
      "Kitanje lokalnih poškodb ter tonsko izenačevanje površine",
      "Mizarska popravila in nanos zaščitnega premaza"
    ]
  },
  "westnova-vila": {
    title: "Westnova vila",
    fullTitle: "Konservatorsko-restavratorski posegi na lesenih vratih in kovonskih kletnih mrežah na Westnovi vili v Celju (EID 1-11905)",
    location: "Westnova vila, Celje, Slovenija",
    date: "2025",
    image: "/images/hero-bg.jpg",
    type: "Profana stavbna dediščina",
    description: [
      "Westnovo vilo z obsežnim vrtom je dal med leti 1924–1925 zgraditi celjski industrialec Westen. Predstavlja odličen primer reprezentančno zasnovane celovite arhitekture z ohranjeno notranjo opremo.",
      "V okviru projekta smo obnovili dvokrilna kasetirana lesena vhodna vrata in kovane kovinske mreže na kletnih oknih."
    ],
    works: [
      "Dokumentiranje obstoječega stanja",
      "Odstranjevanje površinskih nečistoč",
      "Mehanska in kemična odstranitev nečistoč in starih premazov",
      "Mizarsko in kovaško popravilo dotrajanih elementov, kitanje in brušenje",
      "Insekticidna in fungicidna zaščita lesa",
      "Luženje oz. tonsko izenačevanje",
      "Končni premaz za les - mešanica naravnih olj z vgrajeno UV zaščito",
      "Nanos protikorozijskega premaza in končnega premaza"
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(references).map((slug) => ({ slug }));
}

export default async function ReferencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const reference = references[slug];

  if (!reference) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0c1d1a]">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="relative h-[58vh] min-h-[440px] overflow-hidden">
          <Image
            src={asset(reference.image)}
            alt={reference.title}
            fill
            className="object-cover opacity-50"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(12,29,26,0.55) 0%, rgba(12,29,26,0.7) 50%, rgba(12,29,26,1) 100%)",
            }}
          />
          <div className="absolute inset-0 tech-grid opacity-25" />
          <div className="scan-bar" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-6 pb-14 lg:px-8">
              <Link
                href="/#reference"
                className="underline-bronze icon-fx inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#e8dcc4]/60 transition-colors hover:text-[#d49960]"
              >
                <ArrowLeft className="mi mi-nudge-left h-3.5 w-3.5" /> Nazaj na reference
              </Link>
              <span className="mt-8 inline-block eyebrow">Projekt</span>
              <h1 className="mt-4 font-serif text-3xl font-medium text-ivory-gradient sm:text-4xl lg:text-5xl">
                {reference.title}
              </h1>
              <p className="mt-3 max-w-3xl text-[#e8dcc4]/75 leading-relaxed">
                {reference.fullTitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <MetaItem icon={MapPin}>{reference.location}</MetaItem>
                <MetaItem icon={Calendar}>{reference.date}</MetaItem>
                <MetaItem icon={Building2}>{reference.type}</MetaItem>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <span className="eyebrow">Kontekst</span>
                <h2 className="mt-3 font-serif text-3xl font-medium text-ivory-gradient">
                  O projektu
                </h2>
                <div className="mt-8 space-y-5">
                  {reference.description.map((paragraph, i) => (
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
                <span className="eyebrow">Izvedba</span>
                <h2 className="mt-3 font-serif text-3xl font-medium text-ivory-gradient">
                  Izvedena dela
                </h2>
                <ul className="mt-8 space-y-3">
                  {reference.works.map((work) => (
                    <li
                      key={work}
                      className="brackets flex items-start gap-4 rounded-lg border border-[#d49960]/15 bg-[#0c1d1a]/60 p-4 transition-colors hover:border-[#d49960]/45"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d49960]" />
                      <span className="text-sm text-[#e8dcc4]/80 leading-relaxed">
                        {work}
                      </span>
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
                Imate podoben projekt?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-[#e8dcc4]/65">
                Naša ekipa vam lahko pomaga pri konservatorsko-restavratorskih
                posegih na vaši kulturni dediščini.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/#kontakt" className="btn-bronze">
                  Kontaktirajte nas
                </Link>
                <Link href="/#reference" className="btn-ghost">
                  Vse reference
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

function MetaItem({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="icon-fx flex items-center gap-2 text-[#e8dcc4]/70">
      <Icon className="mi mi-pop h-4 w-4 text-[#d49960]" />
      <span className="text-sm">{children}</span>
    </div>
  );
}
