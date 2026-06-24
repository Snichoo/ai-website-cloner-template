"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  MailIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
} from "./icons";
import { QuoteModal } from "./QuoteModal";

type NavLink = {
  label: string;
  href: string;
  caret?: boolean;
  children?: { label: string; href: string }[];
};

const SERVICE_LINKS = [
  { label: "Concrete Mixers & Agitators", href: "/service/roofing-solutions" },
  { label: "Skip Bins & Waste Bodies", href: "/service/skip-bins" },
  { label: "CNC Plasma Cutting & Bending", href: "/service/cnc-plasma-cutting" },
  { label: "Custom Fabrication & Welding", href: "/service/custom-fabrication" },
];

const NAV_LINKS: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/#services", caret: true, children: SERVICE_LINKS },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative">
        {/* Top white contact strip */}
        <div className="hidden h-[52px] items-center justify-end gap-8 bg-white pl-[400px] pr-6 lg:flex">
          <a href="tel:0424242424" className="flex items-center gap-2 font-heading text-xl font-semibold text-[#1e1e1e] hover:text-[#347FCC]">
            <PhoneIcon className="size-4 text-[#347FCC]" />
            <span className="font-normal">0424 242 424</span>
          </a>
          <a href="mailto:contact@kingpinengineering.com.au" className="flex items-center gap-2 font-heading text-xl font-semibold text-[#1e1e1e] hover:text-[#347FCC]">
            <MailIcon className="size-4 text-[#347FCC]" />
            contact@kingpinengineering.com.au
          </a>
        </div>

        {/* Red nav bar */}
        <div className="flex h-[64px] items-center justify-end gap-7 bg-[#347FCC] pl-6 pr-6 lg:h-[68px] lg:pl-[400px]">
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) =>
              l.children ? (
                <div key={l.label} className="group relative">
                  <Link
                    href={l.href}
                    className="flex items-center gap-1 font-sans text-base font-medium uppercase text-white transition-opacity hover:opacity-80"
                  >
                    {l.label}
                    <ChevronDownIcon className="size-4 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  {/* Hover dropdown */}
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden rounded-lg bg-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block border-b border-black/5 px-5 py-3.5 font-sans text-[15px] font-medium uppercase leading-tight text-[#1e1e1e] transition-colors last:border-b-0 hover:bg-[#347FCC] hover:text-white"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  className="flex items-center gap-1 font-sans text-base font-medium uppercase text-white transition-opacity hover:opacity-80"
                >
                  {l.label}
                  {l.caret && <ChevronDownIcon className="size-4" />}
                </Link>
              ),
            )}
          </nav>
          <button
            type="button"
            onClick={() => setQuoteOpen(true)}
            className="hidden rounded-md bg-white px-6 py-2.5 font-heading text-lg font-bold uppercase tracking-wide text-[#347FCC] transition-colors hover:bg-white/90 lg:inline-block"
          >
            Get a Free Quote
          </button>

          {/* Mobile logo + toggle */}
          <Link href="/" className="mr-auto lg:hidden">
            <Image src="/images/kingpin-engineering-logo.png" alt="Kingpin Engineering" width={1220} height={400} priority className="h-10 w-auto" />
          </Link>
          <button className="text-white lg:hidden" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
            {open ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
          </button>
        </div>

        {/* Red angled banner with logo (desktop) */}
        <Link
          href="/"
          className="absolute left-0 top-0 z-10 hidden h-full items-center bg-[#347FCC] pl-6 pr-14 lg:flex [clip-path:polygon(0_0,100%_0,calc(100%-44px)_100%,0_100%)]"
        >
          <Image
            src="/images/kingpin-engineering-logo.png"
            alt="Kingpin Engineering"
            width={1220}
            height={400}
            priority
            className="h-[88px] w-auto"
          />
        </Link>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/20 bg-[#347FCC] px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <div key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-lg font-medium uppercase text-white"
                >
                  {l.label}
                </Link>
                {l.children && (
                  <div className="mt-2 ml-1 flex flex-col gap-2 border-l border-white/25 pl-3">
                    {l.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="font-sans text-base font-medium uppercase text-white/85"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setQuoteOpen(true);
              }}
              className="mt-2 rounded-md bg-white px-6 py-3 text-center font-heading text-lg font-bold uppercase text-[#347FCC]"
            >
              Get a Free Quote
            </button>
          </nav>
        </div>
      )}

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </header>
  );
}
