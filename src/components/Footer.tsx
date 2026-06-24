import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, MailIcon } from "./icons";
import { Reveal } from "@/components/Reveal";
import { QuoteButton } from "@/components/QuoteButton";

const MENU = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/#services" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

const SERVICES = [
  { label: "Concrete Mixers & Agitators", href: "/service/roofing-solutions" },
  { label: "Skip Bins & Waste Bodies", href: "/service/skip-bins" },
  { label: "CNC Plasma Cutting & Bending", href: "/service/cnc-plasma-cutting" },
  { label: "Custom Fabrication & Welding", href: "/service/custom-fabrication" },
];

export function Footer() {
  return (
    <footer className="text-white">
      <div className="bg-[#1e1e1e]">
        <Reveal as="div" className="mx-auto grid max-w-[1320px] gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_1.2fr_0.9fr_1.1fr] lg:py-16">
          <div>
            <div className="inline-flex items-center justify-center rounded-lg bg-[#347FCC] px-8 py-8">
              <Image
                src="/images/kingpin-engineering-logo.png"
                alt="Kingpin Engineering"
                width={1220}
                height={400}
                className="h-16 w-auto"
              />
            </div>
            <p className="mt-5 max-w-xs text-lg font-medium leading-relaxed text-white/78">
              Heavy fabrication, concrete mixer manufacturing and workshop
              repairs for serious equipment.
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
            <p className="font-heading text-3xl font-bold uppercase">Details</p>
            <ul className="mt-5 space-y-3 text-lg text-white/82">
              <li>SA Builder Ref: KE-72841</li>
              <li>ABN: 72 418 906 537</li>
              <li>Public Liability: PL-9048-22716</li>
              <li>Workshop ID: KP-316502</li>
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
                  href="tel:0424242424"
                  className="font-bold text-white hover:text-[#347FCC]"
                >
                  0424 242 424
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#347FCC]">
                  <MailIcon className="size-5 text-white" />
                </span>
                <a
                  href="mailto:contact@kingpinengineering.com.au"
                  className="break-all font-bold text-white hover:text-[#347FCC]"
                >
                  contact@kingpinengineering.com.au
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#347FCC]">
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
                </span>
                <a
                  href="https://www.google.com/maps?q=438+Hanson+Rd+Wingfield+SA+5013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-[#347FCC]"
                >
                  438 Hanson Rd, Wingfield SA 5013
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="bg-[#1e1e1e] pb-12">
        <div className="mx-auto max-w-[1320px] px-6">
          <Reveal as="div" className="flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl bg-topo-red px-10 py-10 text-center sm:flex-row sm:text-left">
            <h2 className="font-heading text-3xl font-bold uppercase text-white sm:text-4xl">
              We Are Here To Help You
            </h2>
            <QuoteButton className="shrink-0 rounded-md border-2 border-white bg-white px-7 py-2.5 font-heading text-lg font-bold uppercase tracking-wide text-[#347FCC] transition-colors hover:bg-transparent hover:text-white" />
          </Reveal>
        </div>
      </div>

      <div className="bg-[#141422]">
        <div className="mx-auto flex max-w-[1320px] items-center justify-center px-6 py-5 text-center text-sm text-white/65">
          <p>Kingpin Engineering ABN: 72 418 906 537</p>
        </div>
      </div>
    </footer>
  );
}
