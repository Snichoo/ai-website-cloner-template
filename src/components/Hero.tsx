import { FacebookIcon, GoogleIcon, StarIcon } from "./icons";
import { HeroSlideshow } from "./HeroSlideshow";

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

export function Hero() {
  return (
    <section className="bg-topo relative overflow-hidden pt-[150px]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-6 pb-40 lg:grid-cols-2">
        <div className="max-w-2xl">
          <p className="reveal-up font-heading text-base font-bold uppercase tracking-wide text-[#347FCC]">
            Licensed &amp; Insured
          </p>
          <h1
            className="reveal-up mt-2 font-heading text-4xl font-bold leading-[0.95] text-[#1e1e1e] sm:text-5xl"
            style={{ animationDelay: "80ms" }}
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
            From complete 16m&sup3; AS-Compliant Concrete Agitators and Export
            CKD Kits, to Custom Skip Bins and Heavy CNC Plasma Processing.{" "}
            <strong className="font-bold">
              Engineered to perform. Built to last.
            </strong>
          </p>

          <div
            className="reveal-up mt-8 flex flex-wrap items-center gap-8"
            style={{ animationDelay: "240ms" }}
          >
            <RatingBadge icon={<GoogleIcon className="size-7" />} />
            <RatingBadge
              icon={<FacebookIcon className="size-7 text-[#1877F2]" />}
            />
          </div>
        </div>

        <div className="reveal-right" style={{ animationDelay: "150ms" }}>
          <HeroSlideshow />
        </div>
      </div>
    </section>
  );
}
