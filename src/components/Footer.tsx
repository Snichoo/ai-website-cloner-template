import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, MailIcon, FacebookIcon, InstagramIcon, GoogleIcon } from "./icons";

const MENU = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "#services" },
  { label: "OUR WORK", href: "#work" },
  { label: "ABOUT", href: "#team" },
  { label: "PRIVACY POLICY", href: "/privacy-policy" },
];

export function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white">
      <div className="mx-auto max-w-[1320px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Red logo card */}
          <div>
            <div className="inline-flex items-center justify-center rounded-xl bg-[#c21d2f] px-8 py-10">
              <Image
                src="/images/logo-header.png"
                alt="Queensland Quality Roofing"
                width={248}
                height={80}
                className="h-14 w-auto"
              />
            </div>
          </div>

          {/* Main menu */}
          <div>
            <p className="font-heading text-2xl font-bold uppercase">Main Menu</p>
            <ul className="mt-4 space-y-3">
              {MENU.map((m) => (
                <li key={m.label}>
                  <Link
                    href={m.href}
                    className="text-sm uppercase text-white/85 transition-colors hover:text-[#c21d2f]"
                  >
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div>
            <p className="font-heading text-2xl font-bold uppercase">Details</p>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li>QBCC 15463819</li>
              <li>
                <span className="block">ABN</span>
                <a
                  href="https://abr.business.gov.au/ABN/View/41678935530"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:text-[#c21d2f]"
                >
                  41 678 935 530
                </a>
              </li>
              <li>Public Liability OA55493795</li>
            </ul>
          </div>

          {/* Schedule / contact */}
          <div>
            <p className="font-heading text-xl font-bold uppercase">
              Schedule Your Free Inspection Today!
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#c21d2f]">
                  <PhoneIcon className="size-5 text-white" />
                </span>
                <span className="text-white/85">
                  Phone No:{" "}
                  <a href="tel:+61405951376" className="font-bold text-white hover:text-[#c21d2f]">
                    +61 405 951 376
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#c21d2f]">
                  <MailIcon className="size-5 text-white" />
                </span>
                <span className="text-white/85">
                  Email:{" "}
                  <a href="mailto:admin@qldquality.com" className="font-bold text-white hover:text-[#c21d2f]">
                    admin@qldquality.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Red help bar */}
      <div className="bg-topo-red">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-6 px-8 py-6 md:flex-row">
          {/* Follow Us + socials */}
          <div className="flex items-center gap-4">
            <span className="font-medium text-white">Follow Us</span>
            <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61560279907295" target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-lg bg-white text-[#1e1e1e] transition-transform hover:scale-110"><FacebookIcon className="size-5" /></a>
            <a aria-label="Google" href="https://g.co/kgs/KfqFFe8" target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-lg bg-white transition-transform hover:scale-110"><GoogleIcon className="size-5" /></a>
            <a aria-label="Instagram" href="https://www.instagram.com/qldqualityroofing/" target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-lg bg-white text-[#1e1e1e] transition-transform hover:scale-110"><InstagramIcon className="size-5" /></a>
          </div>

          {/* Centered headline */}
          <h2 className="font-heading text-3xl font-bold uppercase text-white sm:text-4xl">
            We Are Here To Help You!
          </h2>

          {/* Outline button */}
          <Link
            href="#quote"
            className="shrink-0 rounded-md border-2 border-white bg-transparent px-7 py-2.5 font-heading text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#c21d2f]"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#141422] py-5">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-2 px-6 text-xs text-white/60 sm:flex-row">
          <p>Queensland Quality Roofing ABN: 41 678 935 530</p>
          <p>
            Proudly Designed with{" "}
            <span className="text-[#ffd54f]">&#128155;</span> by{" "}
            <a
              href="https://magnetmarketing.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Magnet Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
