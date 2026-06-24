import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AssessmentBar } from "@/components/AssessmentBar";
import { CtaStrip } from "@/components/CtaStrip";
import { ServiceAreas } from "@/components/ServiceAreas";
import { FacebookIcon, GoogleIcon, StarIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Custom Fabrication, Welding & Modifications - Kingpin Engineering",
  description:
    "General engineering, steel and aluminium welding, truck body modifications and walk-in repairs. Built to your design or engineered from scratch with ours.",
};

function RatingBadge({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid size-9 place-items-center">{icon}</span>
      <div className="leading-none">
        <div className="flex gap-0.5 text-[#fbbc05]">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="size-3" />
          ))}
        </div>
        <p className="mt-1 text-[11px] font-bold tracking-wide text-[#1e1e1e]">
          5.0 RATING
        </p>
      </div>
    </div>
  );
}

function P({ dark, children }: { dark?: boolean; children: React.ReactNode }) {
  return (
    <p
      className={cn(
        "mt-4 text-[18px] leading-relaxed",
        dark ? "text-white/85" : "text-[#1e1e1e]",
      )}
    >
      {children}
    </p>
  );
}

function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-7 w-full bg-gradient-to-r from-[#347FCC]/25 via-[#347FCC]/10 to-transparent py-2 pl-4 pr-10">
      <h3 className="font-heading text-3xl font-bold uppercase leading-tight">
        {children}
      </h3>
    </div>
  );
}

function CtaBlue() {
  return (
    <Link
      href="#quote"
      className="mt-7 inline-block rounded-md bg-[#347FCC] px-8 py-3 font-heading text-lg font-bold uppercase tracking-wide text-white shadow-[0_4px_20px_rgba(52,127,204,0.25)] transition-transform hover:scale-105"
    >
      Get a Free Quote
    </Link>
  );
}

function CtaWhite() {
  return (
    <Link
      href="#quote"
      className="mt-7 inline-block rounded-md bg-white px-8 py-3 font-heading text-lg font-bold uppercase tracking-wide text-[#347FCC] shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-transform hover:scale-105"
    >
      Get a Free Quote
    </Link>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn("size-7 text-[#347FCC]", className)}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m8 12 2.5 2.5L16 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const photo = (src: string, alt: string) => (
  <div className="overflow-hidden shadow-lg aspect-[4/3]">
    <Image
      src={src}
      alt={alt}
      width={620}
      height={465}
      className="h-full w-full object-cover"
    />
  </div>
);

const WHAT_WE_DO = [
  {
    title: "Custom Fabrication to Your Design",
    body: "From a drawing, a sketch or even a broken part.",
  },
  {
    title: "Steel Welding",
    body: "Heavy structural and general fabrication.",
  },
  {
    title: "Aluminium Welding",
    body: "Toolboxes, tanks, brackets and trade parts.",
  },
  {
    title: "Truck Body Modifications",
    body: "Reinforcing, re-mounting and adapting bodies and frames.",
  },
  {
    title: "Mending & Repairs",
    body: "Cracks, breaks, bends and “can you change this so it fits” jobs welcome.",
  },
];

export default function CustomFabricationPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-topo px-6 pt-[150px] pb-12 text-center">
          <p className="font-heading text-xl font-bold uppercase tracking-wide text-[#347FCC]">
            Services
          </p>
          <h1 className="mx-auto mt-1 max-w-4xl font-heading text-5xl font-bold uppercase leading-[0.98] sm:text-6xl">
            <span className="text-[#1e1e1e]">Custom Fabrication, Welding</span>{" "}
            <span className="text-[#347FCC]">&amp; Modifications</span>
          </h1>
          <p className="mx-auto mt-3 max-w-3xl font-heading text-lg font-bold uppercase tracking-wide text-[#1e1e1e]">
            Built to Your Design - or Ours
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-[18px] leading-relaxed text-[#1e1e1e]">
            General engineering, truck body modifications, and specialist
            aluminium welding - all built to your design, or engineered from
            scratch with ours. If you can describe it, we can usually build it.
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <RatingBadge icon={<GoogleIcon className="size-7" />} />
            <RatingBadge icon={<FacebookIcon className="size-7 text-[#1877F2]" />} />
          </div>
        </section>

        <AssessmentBar overlap={false} />

        {/* Built to Your Design */}
        <section className="bg-topo">
          <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div className="lg:order-2">
              {photo("/images/built-to-your-design.jpg", "Custom steel part built to a customer's design at Kingpin Engineering")}
            </div>
            <div className="lg:order-1">
              <h2 className="font-heading text-5xl font-bold uppercase leading-[1.02]">
                <span className="text-[#1e1e1e]">Built to </span>
                <span className="text-[#347FCC]">Your Design</span>
              </h2>
              <P>
                Got your own drawings? We&rsquo;ll fabricate to them. Got an idea
                but no drawing? Our 3D CAD capability means we can design it,
                prove it on screen, then build it.
              </P>
              <SubHead>
                <span className="text-[#1e1e1e]">Engineered, Not </span>
                <span className="text-[#347FCC]">Tacked Together</span>
              </SubHead>
              <P>
                Either way, you get a part engineered properly - not just tacked
                together.
              </P>
              <CtaBlue />
            </div>
          </div>
        </section>

        {/* Aluminium & Steel Welding */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 [background:url('/images/feature-cnc-cutting.jpg')_center/cover]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f14]/95 via-[#0c0f14]/82 to-[#0c0f14]/96" />
          <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div className="lg:order-1">
              {photo("/images/service-custom-welding.png", "Specialist steel and aluminium welding in the Kingpin workshop")}
            </div>
            <div className="lg:order-2">
              <h2 className="font-heading text-5xl font-bold uppercase leading-[1.02]">
                <span className="text-white">Aluminium </span>
                <span className="text-[#5fa3e6]">&amp; Steel Welding</span>
              </h2>
              <P dark>
                Heavy structural steel or precision aluminium, we weld both.
                Toolboxes, steps, brackets, tanks, frames and trade parts -
                including the aluminium work plenty of shops won&rsquo;t take on.
              </P>
              <SubHead>
                <span className="text-white">Done Properly, </span>
                <span className="text-[#5fa3e6]">Done to Last</span>
              </SubHead>
              <P dark>
                The metals others send away, we take on - and finish to a
                standard built to last.
              </P>
              <CtaBlue />
            </div>
          </div>
        </section>

        {/* Truck Body Modifications & Repairs */}
        <section className="bg-topo">
          <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div className="lg:order-2">
              {photo("/images/truck-body-mods.jpg", "Truck-mounted steel body fabricated and modified by Kingpin Engineering")}
            </div>
            <div className="lg:order-1">
              <h2 className="font-heading text-5xl font-bold uppercase leading-[1.02]">
                <span className="text-[#1e1e1e]">Truck Body </span>
                <span className="text-[#347FCC]">Mods &amp; Repairs</span>
              </h2>
              <P>
                A lot of what we do never leaves the truck. We modify, reinforce,
                re-plate, re-mount and adapt the bodies, frames and steelwork on
                transport and work vehicles.
              </P>
              <SubHead>
                <span className="text-[#1e1e1e]">One Truck, </span>
                <span className="text-[#347FCC]">Ready for the Next Job</span>
              </SubHead>
              <P>
                We turn a truck set up for one job into one that&rsquo;s ready for
                the next.
              </P>
              <CtaBlue />
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1320px] px-6">
            <div className="text-center">
              <p className="font-heading text-xl font-bold uppercase tracking-wide text-[#347FCC]">
                What We Do
              </p>
              <h2 className="mx-auto mt-1 max-w-3xl font-heading text-4xl font-bold uppercase sm:text-5xl">
                <span className="text-[#1e1e1e]">If you can describe it, </span>
                <span className="text-[#347FCC]">we can build it</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_WE_DO.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl bg-topo p-7 shadow-sm"
                >
                  <CheckIcon className="mt-0.5 size-8 shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl font-bold uppercase leading-tight text-[#1e1e1e]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#444]">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Jobs Others Won't Take */}
        <section className="relative overflow-hidden bg-[#2a2a2a] py-20">
          <div className="absolute inset-0 opacity-[0.12] [background:url('/images/service-cnc-plasma.png')_center/cover]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a]/70 via-transparent to-[#2a2a2a]" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-heading text-xl font-bold uppercase tracking-wide text-[#5fa3e6]">
              The Jobs Others Won&rsquo;t Take
            </p>
            <h2 className="mt-1 font-heading text-4xl font-bold uppercase text-white sm:text-5xl">
              Walk In,{" "}
              <span className="text-[#5fa3e6]">Describe the Problem</span>
            </h2>
            <p className="mt-6 text-[18px] leading-relaxed text-white/80">
              Plenty of workshops only want the big, clean, repeatable jobs. We
              take those - but we also do the awkward ones. A bent chassis that
              needs straightening. A custom aluminium toolbox. A bracket that
              snapped. A part that needs cutting, bending and welding into
              something new. Walk in, describe the problem, and we&rsquo;ll tell
              you straight whether we can fix it, build it or improve it.
            </p>
            <CtaWhite />
          </div>
        </section>

        <CtaStrip />
        <ServiceAreas />
        <Footer />
      </main>
    </>
  );
}
