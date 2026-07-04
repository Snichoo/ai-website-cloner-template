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
  title: "Concrete Mixers & Agitators - Kingpin Engineering",
  description:
    "New agitator drums from 6m³ to 16m³, replacement barrels, full refurbishment, and agitator and hydraulic motor rebuilds. Engineered, built and tested in-house.",
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

const WHAT_WE_DO = [
  {
    title: "New Agitator Drums",
    body: "6m³ to 16m³, engineered and built from high-tensile, wear-resistant steel.",
  },
  {
    title: "Replacement Barrels",
    body: "Re-barrelling to get an existing truck back to work without a full rebuild.",
  },
  {
    title: "Drum Refurbishment & Reconditioning",
    body: "Replacing worn shells and blades, repairing cracks, re-balancing and re-coating.",
  },
  {
    title: "Motor, Hydraulic & Pump Repairs",
    body: "Drive motor rebuilds plus Danfoss, PMP, Rexroth and Eaton hydraulic systems supplied, fitted and repaired to keep your drum turning.",
  },
  {
    title: "Roller Tracks & Support Frames",
    body: "Replacement and repair of the running gear your drum rides on.",
  },
  {
    title: "Chutes, Subframes & Spare Parts",
    body: "Components to keep your fleet moving with minimal downtime.",
  },
];

const PROCESS = [
  {
    icon: "/images/process/step-01.png",
    title: "Process Engineering & Design",
    body: "A full 3D model is built before any fabrication begins, so the geometry is right the first time.",
  },
  {
    icon: "/images/process/step-02.png",
    title: "CNC Plasma Cutting",
    body: "Precise, repeatable cutting of shell plates and components.",
  },
  {
    icon: "/images/process/step-03.png",
    title: "Spiral Blade Rolling",
    body: "In-house rolling of every blade to the correct pitch and spiral.",
  },
  {
    icon: "/images/process/step-04.png",
    title: "Drum Assembly & Welding",
    body: "Assembled and welded to documented welding procedures.",
  },
  {
    icon: "/images/process/step-05.png",
    title: "Dynamic Balance Testing",
    body: "Balanced to protect bearings, cut vibration and save fuel.",
  },
  {
    icon: "/images/process/step-06.png",
    title: "Sand Blasting",
    body: "Surface prepared back to bare metal for maximum coating adhesion.",
  },
  {
    icon: "/images/process/step-07.png",
    title: "Epoxy Primer & Paint",
    body: "Protective coating system, finished in your colours.",
  },
  {
    icon: "/images/process/step-08.png",
    title: "Water Capacity Testing",
    body: "Verified capacity so you know exactly what you are carrying.",
  },
  {
    icon: "/images/process/step-09.png",
    title: "Quality Inspection",
    body: "Final sign-off against specification before it leaves the floor.",
  },
  {
    icon: "/images/process/step-10.png",
    title: "Export Packing",
    body: "Securely packed for transport anywhere in the world.",
  },
];

const SPECS = [
  { label: "Capacities", value: "6m³ to 16m³" },
  { label: "Materials", value: "High-tensile, wear-resistant steel" },
  { label: "Blade system", value: "In-house rolled spiral blades" },
  { label: "Hydraulics", value: "Danfoss, PMP, Rexroth and Eaton options" },
  { label: "Testing", value: "Dynamic balance and water capacity tested" },
  { label: "Finish", value: "Sandblast, epoxy primer and topcoat" },
];

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

export default function ConcreteMixersPage() {
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
            <span className="text-[#1e1e1e]">Concrete Mixers</span>{" "}
            <span className="text-[#347FCC]">&amp; Agitators</span>
          </h1>
          <p
            className="reveal-up mx-auto mt-3 max-w-3xl font-heading text-lg font-bold uppercase tracking-wide text-[#1e1e1e]"
            style={{ animationDelay: "160ms" }}
          >
            New Builds, Repairs &amp; Rebuilds
          </p>
          <p
            className="reveal-up mx-auto mt-5 max-w-3xl text-[18px] leading-relaxed text-[#1e1e1e]"
            style={{ animationDelay: "220ms" }}
          >
            New agitator drums from 6m&sup3; to 16m&sup3;, replacement barrels,
            full refurbishment, and agitator and hydraulic motor rebuilds. We get
            your mixer fleet off the bench and back pouring.
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

        {/* Engineered, Not Just Welded */}
        <section className="bg-topo">
          <Reveal as="div" className="mx-auto grid max-w-[1320px] items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div className="lg:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.18)] aspect-[4/3]">
                <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-1.5 bg-white">
                  <div className="relative row-span-2">
                    <Image
                      src="/images/collage-drum-welding.jpg"
                      alt="Welder fabricating a large steel drum shell in the Kingpin Engineering workshop"
                      fill
                      sizes="(min-width: 1024px) 320px, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/collage-workshop-cones.jpg"
                      alt="Steel agitator drum cones fabricated at Kingpin Engineering"
                      fill
                      sizes="(min-width: 1024px) 320px, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/collage-steel-plates.jpg"
                      alt="Precision-cut and rolled steel plates ready for drum fabrication"
                      fill
                      sizes="(min-width: 1024px) 320px, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 rounded-xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur">
                  <p className="font-heading text-3xl font-bold leading-none text-[#347FCC]">
                    6-16m&sup3;
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#666]">
                    Built &amp; balanced in-house
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <h2 className="font-heading text-5xl font-bold uppercase leading-[1.02]">
                <span className="text-[#347FCC]">Engineered</span>
                <span className="text-[#1e1e1e]">, Not Just Welded</span>
              </h2>
              <P>
                A mixer drum is the hardest-working component on a concrete truck.
                Get the spiral pitch wrong and you lose mix quality; get the
                balance wrong and you destroy bearings and burn fuel.
              </P>

              <div className="mt-7 w-full bg-gradient-to-r from-[#347FCC]/25 via-[#347FCC]/10 to-transparent py-2 pl-4 pr-10">
                <h3 className="font-heading text-3xl font-bold uppercase leading-tight">
                  <span className="text-[#1e1e1e]">Built To </span>
                  <span className="text-[#347FCC]">Mix Clean</span>
                  <span className="text-[#1e1e1e]"> &amp; Run Smooth</span>
                </h3>
              </div>

              <P>
                At Kingpin, every drum starts as a 3D CAD model, so the blade
                geometry, shell thickness and discharge are right before a single
                plate is cut. We roll our own spiral blades, weld to documented
                procedures, then dynamic-balance and water-capacity test every
                unit. The result is a drum that mixes to spec, runs smooth and
                lasts.
              </P>
              <CtaBlue />
            </div>
          </Reveal>
        </section>

        {/* What We Do */}
        <section className="bg-white py-20">
          <Reveal as="div" className="mx-auto max-w-[1320px] px-6">
            <div className="text-center">
              <p className="font-heading text-xl font-bold uppercase tracking-wide text-[#347FCC]">
                What We Do
              </p>
              <h2 className="mx-auto mt-1 max-w-3xl font-heading text-4xl font-bold uppercase sm:text-5xl">
                <span className="text-[#1e1e1e]">From new drums to </span>
                <span className="text-[#347FCC]">full rebuilds</span>
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
          </Reveal>
        </section>

        {/* Our Manufacturing Process */}
        <section className="relative scroll-mt-24 overflow-hidden py-24">
          <div className="absolute inset-0 [background:url('/images/process-bg.jpg')_center/cover]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f14]/95 via-[#0c0f14]/82 to-[#0c0f14]/96" />
          <Reveal as="div" className="relative mx-auto max-w-[1320px] px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-heading text-xl font-bold uppercase tracking-wide text-[#5fa3e6]">
                Our Manufacturing Process
              </p>
              <h2 className="mt-1 font-heading text-4xl font-bold uppercase text-white drop-shadow sm:text-5xl">
                Built to <span className="text-[#5fa3e6]">OEM standard</span>,
                step by step
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-white/80">
                Ten controlled stages take a drum from a 3D model to a tested,
                painted, export-ready unit - the same discipline the major
                OEMs run, under one roof.
              </p>
            </div>

            <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {PROCESS.map((step, i) => (
                <li
                  key={step.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-[#5fa3e6]/70 hover:bg-white/[0.12]"
                >
                  <span className="pointer-events-none absolute -right-1 -top-4 select-none font-heading text-[5.5rem] font-bold leading-none text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <Image
                      src={step.icon}
                      alt=""
                      width={120}
                      height={120}
                      className="size-14 object-contain [filter:brightness(0)_invert(1)]"
                    />
                    <span className="mt-5 block h-px w-10 bg-[#5fa3e6]" />
                    <h3 className="mt-4 font-heading text-xl font-bold uppercase leading-tight text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-white/75">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        {/* Sizes & Specifications */}
        <section className="bg-topo py-20">
          <Reveal as="div" className="mx-auto grid max-w-[1320px] items-center gap-12 px-6 lg:grid-cols-2">
            <div className="overflow-hidden shadow-lg aspect-[4/3]">
              <Image
                src="/images/mixer-daytime-v2.jpg"
                alt="Kingpin Engineering concrete agitator drum mounted on a truck chassis"
                width={620}
                height={465}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-heading text-xl font-bold uppercase tracking-wide text-[#347FCC]">
                Sizes &amp; Specifications
              </p>
              <h2 className="mt-1 font-heading text-4xl font-bold uppercase leading-[1.02] sm:text-5xl">
                <span className="text-[#1e1e1e]">Engineered to </span>
                <span className="text-[#347FCC]">your requirement</span>
              </h2>

              <dl className="mt-8 divide-y divide-black/10 border-y border-black/10">
                {SPECS.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
                  >
                    <dt className="w-44 shrink-0 font-heading text-sm font-bold uppercase tracking-wide text-[#347FCC]">
                      {spec.label}
                    </dt>
                    <dd className="text-[17px] text-[#1e1e1e]">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 text-[17px] leading-relaxed text-[#1e1e1e]">
                Need a size or spec not listed? We engineer to your requirement.
              </p>
              <CtaBlue />
            </div>
          </Reveal>
        </section>

        <CtaStrip />
        <ServiceAreas />
        <Footer />
      </main>
    </>
  );
}
