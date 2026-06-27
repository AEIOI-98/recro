"use client";

import { Mail, Phone, MapPin, User, ArrowRight } from "lucide-react";

const contacts = [
  {
    name: "dr. Andreja Padovnik",
    phone: "+386 41 393 445",
  },
  {
    name: "Dejan Pfeifer",
    phone: "+386 51 227 675",
  },
];

const services = [
  "Konserviranje-restavriranje",
  "Konservatorski načrt",
  "Priprava projektne dokumentacije",
  "Obnova historičnih fasad",
  "Preiskave in raziskave",
  "Izobraževanje",
  "Drugo",
];

const inputClass =
  "mt-2 block w-full rounded-md border border-[#d49960]/20 bg-[#0c1d1a]/70 px-4 py-3 text-sm text-[#e8dcc4] placeholder:text-[#e8dcc4]/30 backdrop-blur-sm focus:border-[#d49960]/60 focus:outline-none focus:ring-2 focus:ring-[#d49960]/20 transition-colors";

export function CTA() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-[#0a1816] py-28 sm:py-36"
    >
      <div className="absolute inset-0 -z-10 tech-grid opacity-25" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 100%, rgba(212,153,96,0.12), transparent 60%), radial-gradient(ellipse 50% 50% at 0% 0%, rgba(56,110,96,0.18), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow eyebrow-line">
            <span>/ 04 · Kontakt</span>
          </span>
          <h2 className="mt-6 font-serif text-balance text-4xl font-medium tracking-tight text-ivory-gradient sm:text-5xl lg:text-6xl">
            Kontaktirajte{" "}
            <span className="text-bronze-gradient italic">nas</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-[#e8dcc4]/65">
            Za vse informacije o naših storitvah, povpraševanja ali sodelovanje
            nas kontaktirajte. Z veseljem vam bomo odgovorili.
          </p>
        </div>

        <div className="mt-20 grid items-start gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Contact Info */}
          <div className="brackets relative overflow-hidden rounded-2xl border border-[#d49960]/20 glass-panel p-8 lg:col-span-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#d49960]/60">
              / DIRECT LINE
            </span>
            <h3 className="mt-2 font-serif text-2xl font-medium text-[#e8dcc4]">
              Kontaktni podatki
            </h3>

            <div className="mt-10 space-y-7">
              <ContactRow icon={MapPin} label="Naslov" anim="mi-bob">
                Zavod Recro, Lenart v Slov. goricah
                <br />
                Prežihova ulica 13, 2230 Lenart v Slov. goricah
              </ContactRow>

              <ContactRow icon={Mail} label="E-pošta" anim="mi-bob">
                <a
                  href="mailto:info@recro.si"
                  className="text-[#d49960] underline-bronze transition-colors hover:text-[#f4ead4]"
                >
                  info@recro.si
                </a>
              </ContactRow>

              {contacts.map((contact) => (
                <ContactRow
                  key={contact.name}
                  icon={User}
                  label={contact.name}
                >
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="font-mono text-[#e8dcc4]/75 transition-colors hover:text-[#d49960]"
                  >
                    {contact.phone}
                  </a>
                </ContactRow>
              ))}

              <div className="border-t border-[#d49960]/15 pt-6 font-mono text-xs tracking-wider text-[#e8dcc4]/45">
                <p>
                  <span className="text-[#d49960]/70">ID za DDV:</span> SI
                  54661650
                </p>
                <p className="mt-1">
                  <span className="text-[#d49960]/70">Mat.št.:</span> 9663088000
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="brackets relative overflow-hidden rounded-2xl border border-[#d49960]/20 bg-[#0c1d1a]/70 p-8 backdrop-blur-md lg:col-span-3">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#d49960]/60">
              / INQUIRY
            </span>
            <h3 className="mt-2 font-serif text-2xl font-medium text-[#e8dcc4]">
              Pošljite povpraševanje
            </h3>
            <p className="mt-2 text-sm text-[#e8dcc4]/55">
              Izpolnite obrazec in odgovorili vam bomo v najkrajšem možnem času.
            </p>

            <form className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="ime"
                  className="block text-xs uppercase tracking-[0.15em] text-[#e8dcc4]/75"
                >
                  Ime in priimek <span className="text-[#d49960]">*</span>
                </label>
                <input
                  type="text"
                  id="ime"
                  name="ime"
                  required
                  className={inputClass}
                  placeholder="Vaše ime in priimek"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="telefon"
                    className="block text-xs uppercase tracking-[0.15em] text-[#e8dcc4]/75"
                  >
                    Kontaktna številka
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    className={inputClass}
                    placeholder="+386 XX XXX XXX"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-[0.15em] text-[#e8dcc4]/75"
                  >
                    Email <span className="text-[#d49960]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={inputClass}
                    placeholder="vas.email@primer.si"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.15em] text-[#e8dcc4]/75">
                  Zanima me
                </label>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="group flex cursor-pointer items-center gap-3 rounded-md border border-[#d49960]/15 bg-[#0c1d1a]/60 px-4 py-3 transition-all hover:border-[#d49960]/45 hover:bg-[#132823]/80"
                    >
                      <input
                        type="checkbox"
                        name="storitve"
                        value={service}
                        className="h-4 w-4 rounded border-[#d49960]/30 bg-[#0c1d1a] text-[#d49960] accent-[#d49960] focus:ring-[#d49960]/40"
                      />
                      <span className="text-sm text-[#e8dcc4]/80 group-hover:text-[#e8dcc4]">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="sporocilo"
                  className="block text-xs uppercase tracking-[0.15em] text-[#e8dcc4]/75"
                >
                  Sporočilo
                </label>
                <textarea
                  id="sporocilo"
                  name="sporocilo"
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Opišite vaš projekt ali povpraševanje..."
                />
              </div>

              <button type="submit" className="btn-bronze icon-fx w-full">
                Pošljite sporočilo <ArrowRight className="mi mi-nudge h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  anim = "mi-pop",
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  anim?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="icon-fx group flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#d49960]/30 bg-[#d49960]/10 transition-colors duration-500 group-hover:border-[#d49960]/60 group-hover:bg-[#d49960]/20">
        <Icon className={`mi ${anim} h-4.5 w-4.5 text-[#d49960]`} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.15em] text-[#d49960]/70">
          {label}
        </p>
        <div className="mt-1.5 text-sm text-[#e8dcc4]/75 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
