import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, MailIcon } from "./icons";
import { Reveal } from "@/components/Reveal";
import { QuoteButton } from "@/components/QuoteButton";
import { AreaPicker } from "@/components/AreaPicker";
import {
  ADDRESS,
  EMAIL,
  EMERGENCY_NOTE,
  MAP_LINK,
  OPENING_HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  mapEmbedUrl,
} from "@/lib/site";
import { SUBURBS, suburbPath, type Suburb } from "@/lib/suburbs";

const MENU = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/#services" },
  { label: "SERVICE AREAS", href: "/service-areas" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

const SERVICES = [
  { label: "Concrete Mixers & Agitators", href: "/service/concrete-mixers" },
  { label: "Skip Bins & Waste Bodies", href: "/service/skip-bins" },
  { label: "CNC Plasma Cutting & Bending", href: "/service/cnc-plasma-cutting" },
  { label: "Custom Fabrication & Welding", href: "/service/custom-fabrication" },
];

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-5 text-white"
      aria-hidden
    >
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-5 text-white"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Site footer.
 *
 * Pass `suburb` on a suburb landing page and the footer leads with a map of
 * that area and pre-selects it in the service-area picker.
 */
export function Footer({ suburb }: { suburb?: Suburb } = {}) {
  return (
    <footer className="text-white">
      {suburb && (
        <section className="relative bg-[#1e1e1e]">
          <div className="relative z-0 h-[380px] w-full sm:h-[420px]">
            <iframe
              title={`Map of ${suburb.name}, South Australia - serviced by Kingpin Engineering`}
              src={mapEmbedUrl(suburb.mapQuery, suburb.mapZoom)}
              className="size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-[1320px] px-6">
            <div className="-mt-14 mb-2 flex flex-col gap-4 rounded-2xl bg-[#347FCC] px-7 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)] sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-white/80">
                  Serving {suburb.region}
                </p>
                <h2 className="mt-1 font-heading text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
                  Kingpin Engineering &amp; {suburb.name} SA {suburb.postcode}
                </h2>
                <p className="mt-2 text-[15px] font-medium text-white/90">
                  {suburb.distance} &middot; Workshop at {ADDRESS}
                </p>
              </div>
              <a
                href={`https://www.google.com/maps?q=${suburb.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-md border-2 border-white bg-white px-6 py-2.5 text-center font-heading text-lg font-bold uppercase tracking-wide text-[#347FCC] transition-colors hover:bg-transparent hover:text-white"
              >
                Open In Maps
              </a>
            </div>
          </div>
        </section>
      )}

      <div className="bg-[#1e1e1e]">
        <Reveal as="div" className="mx-auto grid max-w-[1320px] gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_1.2fr_1.1fr] lg:py-16">
          <div>
            <div className="flex max-w-60 items-center justify-center rounded-lg bg-[#347FCC] p-6">
              <Image
                src="/images/kingpin-engineering-logo.png"
                alt="Kingpin Engineering"
                width={1309}
                height={319}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-5 max-w-xs text-lg font-medium leading-relaxed text-white/78">
              {suburb
                ? `Heavy fabrication, concrete mixer manufacturing and workshop repairs for ${suburb.name} and ${suburb.region}.`
                : "Heavy fabrication, concrete mixer manufacturing and workshop repairs for serious equipment."}
            </p>
            <p className="mt-5 font-heading text-sm font-bold uppercase tracking-wide text-[#347FCC]">
              Proudly Australian Owned &amp; Manufactured
            </p>
          </div>

          <div>
            <p className="font-heading text-3xl font-bold uppercase">Main Menu</p>
            <ul className="mt-5 space-y-3">
              {MENU.map((m) => (
                <li key={m.label}>
                  <Link
                    href={m.href}
                    className="font-heading text-lg font-bold uppercase tracking-wide text-white/85 transition-colors hover:text-[#347FCC]"
                  >
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-3xl font-bold uppercase">Services</p>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="font-heading text-lg font-bold uppercase tracking-wide text-white/85 transition-colors hover:text-[#347FCC]"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-3xl font-bold uppercase">
              Talk To Kingpin
            </p>
            <ul className="mt-5 space-y-5 text-lg">
              <li className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#347FCC]">
                  <PhoneIcon className="size-5 text-white" />
                </span>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="font-bold text-white hover:text-[#347FCC]"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#347FCC]">
                  <MailIcon className="size-5 text-white" />
                </span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all font-bold text-white hover:text-[#347FCC]"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#347FCC]">
                  <MapPinIcon />
                </span>
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-[#347FCC]"
                >
                  {ADDRESS}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#347FCC]">
                  <ClockIcon />
                </span>
                <div>
                  <p className="font-heading text-xl font-bold uppercase tracking-wide text-white">
                    Opening Hours
                  </p>
                  <dl className="mt-1.5 space-y-1 text-[15px]">
                    {OPENING_HOURS.map((h) => (
                      <div key={h.days} className="flex gap-2">
                        <dt className="w-[74px] shrink-0 font-semibold text-white/70">
                          {h.days}
                        </dt>
                        <dd className="font-bold text-white">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-2 font-heading text-base font-bold uppercase tracking-wide text-[#347FCC]">
                    {EMERGENCY_NOTE}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Service-area picker */}
      <div className="bg-[#1e1e1e]">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal
            as="div"
            className="grid gap-8 border-t border-white/12 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12"
          >
            <div>
              <p className="font-heading text-3xl font-bold uppercase">
                Service <span className="text-[#347FCC]">Areas</span>
              </p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/70">
                We cover Adelaide metro and regional South Australia from our
                Wingfield workshop. Pick your area to see what we do there.
              </p>
              <div className="mt-5">
                <AreaPicker activeSlug={suburb?.slug} />
              </div>
            </div>

            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-white/55">
                All areas we service
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {SUBURBS.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={suburbPath(s.slug)}
                      aria-current={s.slug === suburb?.slug ? "page" : undefined}
                      className={`inline-block rounded-full border px-4 py-1.5 font-heading text-sm font-bold uppercase tracking-wide transition-colors ${
                        s.slug === suburb?.slug
                          ? "border-[#347FCC] bg-[#347FCC] text-white"
                          : "border-white/20 bg-white/[0.06] text-white/85 hover:border-[#347FCC] hover:bg-[#347FCC] hover:text-white"
                      }`}
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="bg-[#1e1e1e] pb-12">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal as="div" className="flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl bg-topo-red px-10 py-10 text-center sm:flex-row sm:text-left">
            <h2 className="font-heading text-3xl font-bold uppercase text-white sm:text-4xl">
              {suburb
                ? `We Are Here To Help ${suburb.name}`
                : "We Are Here To Help You"}
            </h2>
            <QuoteButton className="shrink-0 rounded-md border-2 border-white bg-white px-7 py-2.5 font-heading text-lg font-bold uppercase tracking-wide text-[#347FCC] transition-colors hover:bg-transparent hover:text-white" />
          </Reveal>
        </div>
      </div>

      <div className="bg-[#141422]">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-center gap-1.5 px-6 py-5 text-center text-sm text-white/65 sm:flex-row sm:gap-3">
          <p className="font-semibold text-white/85">Proudly Australian Owned &amp; Manufactured</p>
          <span className="hidden text-white/35 sm:inline">|</span>
          <p>Kingpin Engineering ABN: 72 418 906 537</p>
        </div>
      </div>
    </footer>
  );
}
