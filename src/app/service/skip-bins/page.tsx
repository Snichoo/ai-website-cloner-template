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
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Skip Bins & Waste Bodies - Kingpin Engineering",
  description:
    "Custom-built Marrel, hook-lift and craneable skip bins from quality steel plate, plus fast repairs and reinforcement of damaged bins and waste bodies. Order one or order a fleet.",
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

const WHAT_WE_BUILD = [
  {
    title: "Marrel Skip Bins",
    body: "With or without doors, sized to your truck.",
  },
  {
    title: "Hook-Lift Bins",
    body: "Built for quick, reliable mechanical loading.",
  },
  {
    title: "Craneable Bins",
    body: "Certified for safe lifting by design.",
  },
  {
    title: "Custom & Special-Purpose Bins",
    body: "Built to your drawing or to match your existing fleet.",
  },
  {
    title: "Bin Repairs & Reinforcement",
    body: "Splits, cracks, bent walls and worn floors brought back to life.",
  },
  {
    title: "Truck Body Modifications",
    body: "Adapting bodies and frames to do a new job.",
  },
];

export default function SkipBinsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-topo px-6 pt-[150px] pb-12 text-center">
          <p className="reveal-up font-heading text-xl font-bold uppercase tracking-wide text-[#347FCC]">
            Services
          </p>
          <h1
            className="reveal-up mx-auto mt-1 max-w-4xl font-heading text-5xl font-bold uppercase leading-[0.98] sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            <span className="text-[#1e1e1e]">Skip Bins</span>{" "}
            <span className="text-[#347FCC]">&amp; Waste Bodies</span>
          </h1>
          <p
            className="reveal-up mx-auto mt-3 max-w-3xl font-heading text-lg font-bold uppercase tracking-wide text-[#1e1e1e]"
            style={{ animationDelay: "160ms" }}
          >
            Built and Repaired
          </p>
          <p
            className="reveal-up mx-auto mt-5 max-w-3xl text-[18px] leading-relaxed text-[#1e1e1e]"
            style={{ animationDelay: "220ms" }}
          >
            Custom-built skip bins to suit your truck - Marrel, hook-lift and more
            - built tough from quality steel plate, plus fast repairs on damaged
            bins. Order one or order a fleet.
          </p>
          <div
            className="reveal-up mt-8 flex justify-center gap-8"
            style={{ animationDelay: "300ms" }}
          >
            <RatingBadge icon={<GoogleIcon className="size-7" />} />
            <RatingBadge icon={<FacebookIcon className="size-7 text-[#1877F2]" />} />
          </div>
        </section>

        <AssessmentBar overlap={false} />

        {/* Skip Bins Built to Suit */}
        <section className="bg-topo">
          <Reveal as="div" className="mx-auto grid max-w-[1320px] items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div className="lg:order-2">
              {photo("/images/skip-bins-built.png", "Heavy-duty skip bin built by Kingpin Engineering")}
            </div>
            <div className="lg:order-1">
              <h2 className="font-heading text-5xl font-bold uppercase leading-[1.02]">
                <span className="text-[#347FCC]">Skip Bins</span>{" "}
                <span className="text-[#1e1e1e]">Built to Suit</span>
              </h2>
              <P>
                We fabricate heavy-duty skip bins from quality steel plate -
                reinforced, long-lasting and built for the beating they take in
                the field. Marrel, hook-lift, craneable and custom designs, sized
                to match your truck and your job.
              </P>
              <SubHead>
                <span className="text-[#1e1e1e]">Matched To </span>
                <span className="text-[#347FCC]">Your Fleet</span>
              </SubHead>
              <P>
                Need a bin matched to your existing fleet? Send us a photo or a
                drawing and we&rsquo;ll build to match.
              </P>
              <CtaBlue />
            </div>
          </Reveal>
        </section>

        {/* Bin & Body Repairs */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 [background:url('/images/feature-cnc-cutting.jpg')_center/cover]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f14]/95 via-[#0c0f14]/82 to-[#0c0f14]/96" />
          <Reveal as="div" className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div className="lg:order-1">
              {photo("/images/service-custom-welding.png", "Welder repairing and reinforcing a steel waste body")}
            </div>
            <div className="lg:order-2">
              <h2 className="font-heading text-5xl font-bold uppercase leading-[1.02]">
                <span className="text-white">Bin &amp; Body</span>{" "}
                <span className="text-[#5fa3e6]">Repairs</span>
              </h2>
              <P dark>
                Already got bins that are split, bent, cracked or worn? We repair
                and reinforce them rather than replace them - re-plating floors,
                straightening, re-welding and bringing damaged bins back into
                service fast.
              </P>
              <SubHead>
                <span className="text-[#5fa3e6]">Back In Service</span>
                <span className="text-white">, Fast</span>
              </SubHead>
              <P dark>
                We also modify and repair the truck-mounted bodies and steelwork
                that ride on waste and transport vehicles.
              </P>
              <CtaBlue />
            </div>
          </Reveal>
        </section>

        {/* What We Build & Repair */}
        <section className="bg-topo py-20">
          <Reveal as="div" className="mx-auto max-w-[1320px] px-6">
            <div className="text-center">
              <p className="font-heading text-xl font-bold uppercase tracking-wide text-[#347FCC]">
                What We Build &amp; Repair
              </p>
              <h2 className="mx-auto mt-1 max-w-3xl font-heading text-4xl font-bold uppercase sm:text-5xl">
                <span className="text-[#1e1e1e]">One bin or a </span>
                <span className="text-[#347FCC]">whole fleet</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_WE_BUILD.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl bg-white p-7 shadow-sm"
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
          </Reveal>
        </section>

        {/* Why Use Kingpin for Bins */}
        <section className="relative overflow-hidden bg-[#2a2a2a] py-20">
          <div className="absolute inset-0 opacity-[0.12] [background:url('/images/service-cnc-plasma.png')_center/cover]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a]/70 via-transparent to-[#2a2a2a]" />
          <Reveal as="div" className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-heading text-xl font-bold uppercase tracking-wide text-[#5fa3e6]">
              Why Use Kingpin for Bins
            </p>
            <h2 className="mt-1 font-heading text-4xl font-bold uppercase text-white sm:text-5xl">
              Local, Low-Minimum,{" "}
              <span className="text-[#5fa3e6]">Repair &amp; Modify</span>
            </h2>
            <p className="mt-6 text-[18px] leading-relaxed text-white/80">
              The big bin factories make you order in container loads, flat-packed
              from overseas. The concrete OEMs won&rsquo;t touch a bin at all.
              Kingpin sits in between: order a single custom bin, get an existing
              one repaired, or have one modified to fit a new truck - locally,
              without waiting on a shipping container or hitting a minimum order.
            </p>
            <CtaWhite />
          </Reveal>
        </section>

        <CtaStrip />
        <ServiceAreas />
        <Footer />
      </main>
    </>
  );
}
