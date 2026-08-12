import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AssessmentBar } from "@/components/AssessmentBar";
import { CtaStrip } from "@/components/CtaStrip";
import { Reveal } from "@/components/Reveal";
import { FacebookIcon, GoogleIcon, StarIcon } from "@/components/icons";
import { ADDRESS, HOURS_SUMMARY } from "@/lib/site";
import { SUBURBS, suburbPath } from "@/lib/suburbs";

export const metadata: Metadata = {
  title: "Service Areas - Kingpin Engineering",
  description:
    "Kingpin Engineering services Adelaide metro and regional South Australia from our Wingfield workshop. Find your area for local fabrication, mixer and repair support.",
  alternates: { canonical: "/service-areas" },
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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceAreasIndexPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-topo px-6 pt-[150px] pb-14 text-center">
          <p className="reveal-up font-heading text-xl font-bold uppercase tracking-wide text-[#347FCC]">
            Where We Work
          </p>
          <h1
            className="reveal-up mx-auto mt-1 max-w-4xl font-heading text-5xl font-bold uppercase leading-[1.02] sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            <span className="text-[#1e1e1e]">Service Areas Across</span>{" "}
            <span className="text-[#347FCC]">South Australia</span>
          </h1>
          <p
            className="reveal-up mx-auto mt-5 max-w-2xl text-[18px] leading-relaxed text-[#1e1e1e]"
            style={{ animationDelay: "160ms" }}
          >
            Everything is built at {ADDRESS} - and it goes everywhere from
            there. Pick your area below to see what we build locally, who we
            build it for, and how far we are from your gate.
          </p>
          <p
            className="reveal-up mx-auto mt-3 font-heading text-lg font-bold uppercase tracking-wide text-[#1e1e1e]"
            style={{ animationDelay: "200ms" }}
          >
            {HOURS_SUMMARY}
          </p>
          <div
            className="reveal-up mt-8 flex justify-center gap-8"
            style={{ animationDelay: "240ms" }}
          >
            <RatingBadge icon={<GoogleIcon className="size-7" />} />
            <RatingBadge icon={<FacebookIcon className="size-7 text-[#1877F2]" />} />
          </div>
        </section>

        <AssessmentBar overlap={false} />

        <section className="bg-white pb-20 pt-10">
          <div className="mx-auto max-w-[1320px] px-6">
            <Reveal as="h2" className="text-center font-heading text-4xl font-bold uppercase sm:text-5xl">
              <span className="text-[#1e1e1e]">Find </span>
              <span className="text-[#347FCC]">Your Area</span>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SUBURBS.map((s, i) => (
                <Reveal
                  as="div"
                  key={s.slug}
                  delay={i * 60}
                  className="group relative flex flex-col rounded-2xl bg-topo p-7 shadow-sm transition-shadow hover:shadow-[0_12px_40px_rgba(52,127,204,0.22)]"
                >
                  <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-[#347FCC]">
                    SA {s.postcode}
                  </p>
                  <h3 className="mt-1 font-heading text-3xl font-bold uppercase leading-tight text-[#1e1e1e]">
                    {s.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#444]">
                    {s.distance}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-heading text-lg font-bold uppercase tracking-wide text-[#347FCC] transition-colors group-hover:text-[#1e1e1e]">
                    View {s.name} page
                    <ArrowIcon />
                  </span>
                  <Link
                    href={suburbPath(s.slug)}
                    className="absolute inset-0 rounded-2xl"
                    aria-label={`Kingpin Engineering services in ${s.name}`}
                  >
                    <span className="sr-only">
                      Kingpin Engineering services in {s.name}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaStrip />
        <Footer />
      </main>
    </>
  );
}
