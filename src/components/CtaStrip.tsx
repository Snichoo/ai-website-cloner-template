import { Reveal } from "@/components/Reveal";
import { QuoteButton } from "@/components/QuoteButton";
import type { Suburb } from "@/lib/suburbs";

export function CtaStrip({ suburb }: { suburb?: Suburb } = {}) {
  return (
    <section className="bg-topo-red py-10">
      <Reveal as="div" className="mx-auto max-w-[1000px] px-6 text-center">
        <h2 className="font-heading text-4xl font-bold uppercase leading-[1.02] text-[#1e1e1e] sm:text-5xl">
          {suburb ? (
            suburb.ctaTitle
          ) : (
            <>
              Get Your <span className="text-white">Free</span> Engineering
              Quote Now!
            </>
          )}
        </h2>
        <p className="mt-2 text-base font-medium text-white/95">
          {suburb
            ? suburb.ctaLead
            : "Our team is here to help answer any fabrication, repair, or concrete equipment questions you may have!"}
        </p>
        <QuoteButton className="mt-5 inline-block rounded-md bg-white px-7 py-2.5 font-heading text-base font-bold uppercase tracking-wide text-[#347FCC] shadow-lg transition-transform hover:scale-105" />
      </Reveal>
    </section>
  );
}
