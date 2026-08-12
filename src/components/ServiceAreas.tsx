import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ADDRESS, ADDRESS_QUERY, mapEmbedUrl } from "@/lib/site";
import { SUBURBS, suburbPath } from "@/lib/suburbs";

function PinIcon({ active }: { active?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "#ffffff" : "#347FCC"}
      strokeWidth="1.5"
      className="size-5"
      aria-hidden
    >
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function ServiceAreas({ activeSlug }: { activeSlug?: string } = {}) {
  const active = SUBURBS.find((s) => s.slug === activeSlug);

  return (
    <section className="relative overflow-hidden pb-20 pt-32">
      <div className="absolute inset-0 [background:url('/images/service-areas-bg.jpg')_center/cover]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f14]/95 via-[#0c0f14]/85 to-[#0c0f14]/96" />
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal as="div" direction="left" className="min-h-[420px] overflow-hidden rounded-lg shadow-md">
          <iframe
            title={`Kingpin Engineering workshop - ${ADDRESS}`}
            src={mapEmbedUrl(ADDRESS_QUERY, 11)}
            className="size-full min-h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>

        <div>
          <Reveal as="div" direction="right">
            <h2 className="font-heading text-5xl font-bold uppercase sm:text-6xl">
              <span className="text-[#5fa3e6]">Service</span>{" "}
              <span className="text-white">Areas</span>
            </h2>
            <p className="mt-4 max-w-lg text-[18px] leading-relaxed text-white/85">
              {active
                ? `${active.name} is one of the areas we cover from our workshop floor. ${active.distance}. Tap any area below to see what we build there.`
                : "Kingpin Engineering serves these areas across South Australia, with fabrication and repair support for Adelaide metro and regional SA. Tap an area for a closer look."}
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-3">
            {SUBURBS.map((area, i) => {
              const isActive = area.slug === activeSlug;
              return (
                <Reveal
                  as="div"
                  key={area.slug}
                  delay={i * 45}
                  direction="pop"
                >
                  <Link
                    href={suburbPath(area.slug)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center gap-2 rounded-full border border-[#347FCC] px-5 py-2.5 shadow-sm backdrop-blur-sm transition-colors ${
                      isActive
                        ? "bg-[#347FCC]"
                        : "bg-white/10 hover:bg-[#347FCC]"
                    }`}
                  >
                    <PinIcon active={isActive} />
                    <span className="font-heading text-base font-bold uppercase text-white">
                      {area.name}
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
