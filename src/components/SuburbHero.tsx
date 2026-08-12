import { FacebookIcon, GoogleIcon, StarIcon } from "./icons";
import { HeroSlideshow } from "./HeroSlideshow";
import type { Suburb } from "@/lib/suburbs";

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

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="size-4"
      aria-hidden
    >
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/** Homepage hero, re-cut with the suburb's own headline and lead paragraph. */
export function SuburbHero({ suburb }: { suburb: Suburb }) {
  return (
    <section className="bg-topo relative overflow-hidden pt-[150px]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-6 pb-40 lg:grid-cols-2">
        <div className="max-w-2xl">
          <p className="reveal-up inline-flex items-center gap-2 rounded-full border border-[#347FCC]/40 bg-white/70 px-4 py-1.5 font-heading text-base font-bold uppercase tracking-wide text-[#347FCC]">
            <PinIcon />
            {suburb.heroKicker}
          </p>
          <h1
            className="reveal-up mt-3 font-heading text-4xl font-bold leading-[0.95] text-[#1e1e1e] sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            {suburb.heroTitle[0]}{" "}
            <span className="text-[#347FCC]">{suburb.heroTitle[1]}</span>
          </h1>
          <p
            className="reveal-up mt-6 max-w-lg font-sans text-[18px] font-normal leading-[1.35] text-black"
            style={{ animationDelay: "160ms" }}
          >
            {suburb.heroLead}
          </p>

          <p
            className="reveal-up mt-5 font-heading text-lg font-bold uppercase tracking-wide text-[#1e1e1e]"
            style={{ animationDelay: "200ms" }}
          >
            {suburb.distance}
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
