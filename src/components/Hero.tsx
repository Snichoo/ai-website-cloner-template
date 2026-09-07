import { HeroSlideshow } from "./HeroSlideshow";

export function Hero() {
  return (
    <section className="bg-topo relative overflow-hidden pt-[150px]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-6 pb-40 lg:grid-cols-2">
        <div className="max-w-2xl">
          <p className="reveal-up font-heading text-base font-bold uppercase tracking-wide text-[#347FCC]">
            Licensed &amp; Insured
          </p>
          <h1
            className="mt-2 font-heading text-4xl font-bold leading-[0.95] text-[#1e1e1e] sm:text-5xl"
          >
            Adelaide&rsquo;s Premier OEM Concrete Mixer{" "}
            <span className="text-[#347FCC]">
              Manufacturer &amp; Custom Heavy Fabricator
            </span>
          </h1>
          <p
            className="reveal-up mt-6 max-w-lg font-sans text-[18px] font-normal leading-[1.3] text-black"
            style={{ animationDelay: "160ms" }}
          >
            From complete 7m&sup3; to 9m&sup3; AS-Compliant Concrete Agitators and Export
            CKD Kits, to Custom Skip Bins and Heavy CNC Plasma Processing.{" "}
            <strong className="font-bold">
              Engineered to perform. Built to last.
            </strong>
          </p>

        </div>

        <div>
          <HeroSlideshow />
        </div>
      </div>
    </section>
  );
}
