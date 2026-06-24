import { Reveal } from "@/components/Reveal";

const AREAS = [
  "Adelaide",
  "Port Adelaide",
  "Elizabeth",
  "Salisbury",
  "Gawler",
  "Mount Barker",
  "Murray Bridge",
  "Victor Harbor",
  "Whyalla",
  "Mount Gambier",
];

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#347FCC"
      strokeWidth="1.5"
      className="size-5"
      aria-hidden
    >
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function ServiceAreas() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32">
      <div className="absolute inset-0 [background:url('/images/service-areas-bg.jpg')_center/cover]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f14]/95 via-[#0c0f14]/85 to-[#0c0f14]/96" />
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal as="div" direction="left" className="min-h-[420px] overflow-hidden rounded-lg shadow-md">
          <iframe
            title="Kingpin Engineering workshop - 438 Hanson Rd, Wingfield SA 5013"
            src="https://www.google.com/maps?q=438+Hanson+Rd+Wingfield+SA+5013&z=11&output=embed"
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
              Kingpin Engineering services workshops, fleets and contractors
              across South Australia, with fabrication and repair support for
              Adelaide metro and regional SA.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-3">
            {AREAS.map((area, i) => (
              <Reveal
                as="div"
                key={area}
                delay={i * 60}
                direction="pop"
                className="flex items-center gap-2 rounded-full border border-[#347FCC] bg-white/10 px-5 py-2.5 shadow-sm backdrop-blur-sm"
              >
                <PinIcon />
                <span className="font-heading text-base font-bold uppercase text-white">
                  {area}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
