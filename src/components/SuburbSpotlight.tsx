import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { QuoteButton } from "@/components/QuoteButton";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { getSuburb, suburbPath, type Suburb } from "@/lib/suburbs";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-7 shrink-0 text-[#5fa3e6]"
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

/**
 * The suburb-only section: what the area does, who we build for there, and
 * how far it is from the Wingfield floor. Styled to sit alongside the dark
 * "Service Areas" and "Our Work in Action" bands.
 */
export function SuburbSpotlight({ suburb }: { suburb: Suburb }) {
  const nearby = suburb.nearby
    .map((slug) => getSuburb(slug))
    .filter((s): s is Suburb => Boolean(s));

  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-30 [background:url('/images/process-bg.jpg')_center/cover]" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0c0f14]/95 via-[#0c0f14]/88 to-[#0c0f14]/96" />
      <div className="pointer-events-none absolute -left-32 top-16 -z-10 h-72 w-72 rounded-full bg-[#347FCC]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-16 -z-10 h-72 w-72 rounded-full bg-[#347FCC]/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1320px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal as="div" direction="left">
            <p className="font-heading text-xl font-bold uppercase tracking-[0.18em] text-[#5fa3e6]">
              {suburb.spotlight.kicker}
            </p>
            <h2 className="mt-2 font-heading text-4xl font-bold uppercase leading-[1.02] sm:text-5xl lg:text-6xl">
              <span className="text-white">{suburb.spotlight.title[0]}</span>
              <span className="text-[#5fa3e6]">{suburb.spotlight.title[1]}</span>
            </h2>

            <div className="mt-6 space-y-5">
              {suburb.spotlight.body.map((para) => (
                <p key={para.slice(0, 40)} className="text-[17px] leading-relaxed text-white/85">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              <QuoteButton className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-heading text-lg font-bold uppercase tracking-wide text-[#347FCC] shadow-md transition hover:scale-105 hover:bg-white/90" />
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center rounded-md bg-[#347FCC] px-6 py-3 font-heading text-lg font-bold uppercase tracking-wide text-white shadow-md transition hover:scale-105 hover:bg-[#2A70BA]"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>

          <Reveal
            as="div"
            direction="right"
            delay={120}
            className="rounded-2xl border border-white/15 bg-white/[0.07] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
          >
            <h3 className="font-heading text-2xl font-bold uppercase text-white">
              {suburb.name} At A Glance
            </h3>
            <dl className="mt-5 divide-y divide-white/12 border-y border-white/12">
              {suburb.spotlight.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1 py-3.5">
                  <dt className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#5fa3e6]">
                    {fact.label}
                  </dt>
                  <dd className="text-[16px] leading-snug text-white/90">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            {nearby.length > 0 && (
              <div className="mt-6">
                <p className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-white/60">
                  We also cover
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {nearby.map((area) => (
                    <Link
                      key={area.slug}
                      href={suburbPath(area.slug)}
                      className="rounded-full border border-[#347FCC]/60 bg-white/10 px-4 py-1.5 font-heading text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#347FCC]"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </Reveal>
        </div>

        <Reveal as="div" delay={80} className="mt-14">
          <h3 className="font-heading text-3xl font-bold uppercase text-white sm:text-4xl">
            Who We Build For In{" "}
            <span className="text-[#5fa3e6]">{suburb.name}</span>
          </h3>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {suburb.spotlight.serves.map((item, i) => (
              <Reveal
                as="div"
                key={item.title}
                delay={i * 90}
                direction="pop"
                className="flex gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-[#5fa3e6]/70 hover:bg-white/[0.12]"
              >
                <CheckIcon />
                <div>
                  <h4 className="font-heading text-xl font-bold uppercase leading-tight text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-white/75">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
