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
  title: "CNC Plasma Cutting & Press-Brake Bending - Kingpin Engineering",
  description:
    "Heavy CNC plasma cutting and press-brake bending done to spec. Send us your CAD file, drawing or sketch and we cut and fold the big, thick steel smaller shops can't handle.",
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

const WHAT_WE_OFFER = [
  {
    title: "CNC Plasma Cutting",
    body: "Precise cutting of heavy, thick steel from your file or design.",
  },
  {
    title: "Press-Brake Bending",
    body: "Accurate folding of plate and structural sections.",
  },
  {
    title: "Profile & Plate Cutting",
    body: "Custom shapes and components cut to spec.",
  },
  {
    title: "CAD-to-Steel Service",
    body: "Supply your CAD file and we'll do the rest.",
  },
  {
    title: "Design Support",
    body: "No drawing? Our 3D CAD capability means we design it, prove it on screen, then cut it.",
  },
];

export default function CncPlasmaCuttingPage() {
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
            <span className="text-[#1e1e1e]">CNC Plasma Cutting</span>{" "}
            <span className="text-[#347FCC]">&amp; Press-Brake Bending</span>
          </h1>
          <p
            className="reveal-up mx-auto mt-3 max-w-3xl font-heading text-lg font-bold uppercase tracking-wide text-[#1e1e1e]"
            style={{ animationDelay: "160ms" }}
          >
            Cut &amp; Folded To Spec
          </p>
          <p
            className="reveal-up mx-auto mt-5 max-w-3xl text-[18px] leading-relaxed text-[#1e1e1e]"
            style={{ animationDelay: "220ms" }}
          >
            Heavy plate cutting and folding, done to spec. Bring us your CAD file
            or your design - we cut and bend the big stuff, fast and accurate.
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

        {/* Cut to Your Design */}
        <section className="bg-topo">
          <Reveal as="div" className="mx-auto grid max-w-[1320px] items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div className="lg:order-2">
              {photo("/images/service-cnc-plasma.png", "CNC plasma cutter cutting heavy steel plate")}
            </div>
            <div className="lg:order-1">
              <h2 className="font-heading text-5xl font-bold uppercase leading-[1.02]">
                <span className="text-[#1e1e1e]">Cut to </span>
                <span className="text-[#347FCC]">Your Design</span>
              </h2>
              <P>
                Send us a CAD file, a drawing, or even a sketch, and our CNC
                plasma cutter turns it into precise steel parts - profiles,
                plates, brackets and components, including the big and thick work
                smaller shops can&rsquo;t handle.
              </P>
              <SubHead>
                <span className="text-[#1e1e1e]">Send Us Your </span>
                <span className="text-[#347FCC]">CAD File</span>
              </SubHead>
              <P>
                Repeatable, accurate and ready for the next stage.
              </P>
              <CtaBlue />
            </div>
          </Reveal>
        </section>

        {/* Bent to Spec */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 [background:url('/images/feature-cnc-cutting.jpg')_center/cover]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f14]/95 via-[#0c0f14]/82 to-[#0c0f14]/96" />
          <Reveal as="div" className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div className="lg:order-1">
              {photo("/images/service-custom-welding.png", "Heavy steel fabrication and forming in the Kingpin workshop")}
            </div>
            <div className="lg:order-2">
              <h2 className="font-heading text-5xl font-bold uppercase leading-[1.02]">
                <span className="text-white">Bent </span>
                <span className="text-[#5fa3e6]">to Spec</span>
              </h2>
              <P dark>
                Our press brake folds and bends plate and structural steel to
                your exact dimensions - from a one-off bracket to a production
                run of folded parts.
              </P>
              <SubHead>
                <span className="text-white">Right The </span>
                <span className="text-[#5fa3e6]">First Time</span>
              </SubHead>
              <P dark>
                We get the angles right the first time, so the parts you collect
                drop straight into the next stage of the job.
              </P>
              <CtaBlue />
            </div>
          </Reveal>
        </section>

        {/* What We Offer */}
        <section className="bg-topo py-20">
          <Reveal as="div" className="mx-auto max-w-[1320px] px-6">
            <div className="text-center">
              <p className="font-heading text-xl font-bold uppercase tracking-wide text-[#347FCC]">
                What We Offer
              </p>
              <h2 className="mx-auto mt-1 max-w-3xl font-heading text-4xl font-bold uppercase sm:text-5xl">
                <span className="text-[#1e1e1e]">From CAD file to </span>
                <span className="text-[#347FCC]">finished steel</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_WE_OFFER.map((item) => (
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

        {/* For Trade & Industry */}
        <section className="relative overflow-hidden bg-[#2a2a2a] py-20">
          <div className="absolute inset-0 opacity-[0.12] [background:url('/images/hero-mixer-1.jpg')_center/cover]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a]/70 via-transparent to-[#2a2a2a]" />
          <Reveal as="div" className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="font-heading text-xl font-bold uppercase tracking-wide text-[#5fa3e6]">
              For Trade &amp; Industry
            </p>
            <h2 className="mt-1 font-heading text-4xl font-bold uppercase text-white sm:text-5xl">
              Cut &amp; Folded to Spec,{" "}
              <span className="text-[#5fa3e6]">On Time</span>
            </h2>
            <p className="mt-6 text-[18px] leading-relaxed text-white/80">
              We cut and bend for fabricators, contractors, transport operators
              and trade businesses across South Australia. If you need big steel
              cut and folded properly - and on time - bring it to us.
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
