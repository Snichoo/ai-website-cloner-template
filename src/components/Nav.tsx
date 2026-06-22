"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  InstagramIcon,
  GoogleIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
} from "./icons";

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="m12 3 9 8h-3v9h-4v-6h-4v6H6v-9H3l9-8Z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/service/roofing-solutions", caret: true },
  { label: "BUILD & PRICE", href: "/roofrate" },
  { label: "OUR WORK", href: "/#work" },
  { label: "ABOUT", href: "/#team", caret: true },
  { label: "CONTACT", href: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative">
        {/* Top white contact strip */}
        <div className="hidden h-[52px] items-center justify-end gap-9 bg-white pl-[400px] pr-6 lg:flex">
          <a href="tel:+61405951376" className="flex items-center gap-2 font-heading text-xl font-semibold text-[#1e1e1e] hover:text-[#c21d2f]">
            <PhoneIcon className="size-4 text-[#c21d2f]" />
            Ricky <span className="font-normal">+61 405 951 376</span>
          </a>
          <a href="tel:+61494572000" className="flex items-center gap-2 font-heading text-xl font-semibold text-[#1e1e1e] hover:text-[#c21d2f]">
            <HomeIcon className="size-4 text-[#c21d2f]" />
            Office <span className="font-normal">+61 494 572 000</span>
          </a>
          <a href="mailto:admin@qldquality.com" className="flex items-center gap-2 font-heading text-xl font-semibold text-[#1e1e1e] hover:text-[#c21d2f]">
            <MailIcon className="size-4 text-[#c21d2f]" />
            admin@qldquality.com
          </a>
          <div className="flex items-center gap-3 text-[#1e1e1e]">
            <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61560279907295" target="_blank" rel="noopener noreferrer" className="hover:text-[#c21d2f]"><FacebookIcon className="size-5" /></a>
            <a aria-label="Instagram" href="https://www.instagram.com/qldqualityroofing/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c21d2f]"><InstagramIcon className="size-5" /></a>
            <a aria-label="Google" href="https://g.co/kgs/KfqFFe8" target="_blank" rel="noopener noreferrer" className="hover:text-[#c21d2f]"><GoogleIcon className="size-5" /></a>
          </div>
        </div>

        {/* Red nav bar */}
        <div className="flex h-[64px] items-center justify-end gap-7 bg-[#c21d2f] pl-6 pr-6 lg:h-[68px] lg:pl-[400px]">
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="flex items-center gap-1 font-sans text-base font-medium uppercase text-white transition-opacity hover:opacity-80"
              >
                {l.label}
                {l.caret && <ChevronDownIcon className="size-4" />}
              </Link>
            ))}
          </nav>
          <Link
            href="/#quote"
            className="hidden rounded-md bg-white px-6 py-2.5 font-heading text-lg font-bold uppercase tracking-wide text-[#c21d2f] transition-colors hover:bg-white/90 lg:inline-block"
          >
            Get a Free Quote
          </Link>

          {/* Mobile logo + toggle */}
          <Link href="/" className="mr-auto lg:hidden">
            <Image src="/images/logo-header.png" alt="Queensland Quality Roofing" width={200} height={64} priority className="h-10 w-auto" />
          </Link>
          <button className="text-white lg:hidden" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
            {open ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
          </button>
        </div>

        {/* Red angled banner with logo (desktop) */}
        <Link
          href="/"
          className="absolute left-0 top-0 z-10 hidden h-full items-center bg-[#c21d2f] pl-6 pr-14 lg:flex [clip-path:polygon(0_0,100%_0,calc(100%-44px)_100%,0_100%)]"
        >
          <Image
            src="/images/logo-header.png"
            alt="Queensland Quality Roofing"
            width={248}
            height={80}
            priority
            className="h-[88px] w-auto"
          />
        </Link>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/20 bg-[#c21d2f] px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-lg font-medium uppercase text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#quote"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-white px-6 py-3 text-center font-heading text-lg font-bold uppercase text-[#c21d2f]"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
