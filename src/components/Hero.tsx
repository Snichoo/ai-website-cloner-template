import { FacebookIcon, GoogleIcon, StarIcon } from "./icons";

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
      <div className="mx-auto max-w-[1320px] px-6 pb-40">
        <div className="max-w-2xl">
          <p className="font-heading text-base font-bold uppercase tracking-wide text-[#c21d2f]">
            Licensed &amp; Insured
          </p>
          <h1 className="mt-2 font-heading text-6xl font-bold leading-[0.92] text-[#1e1e1e] sm:text-7xl">
            Trusted <span className="text-[#c21d2f]">SEQ</span>
            <br />
            Roofing Experts
          </h1>
          <p className="mt-6 max-w-lg font-sans text-[18px] font-normal leading-[1.3] text-black">
            We don&rsquo;t just &lsquo;replace roofs&rsquo; - we redefine what
            homeowners should expect from a trades business. Built on quality,
            professionalism, and a relentless commitment to delivering an
            exceptional customer experience.{" "}
            <strong className="font-bold">We put people first.</strong>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-8">
            <RatingBadge icon={<GoogleIcon className="size-7" />} />
            <RatingBadge
              icon={<FacebookIcon className="size-7 text-[#1877F2]" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
