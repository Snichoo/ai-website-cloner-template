const AREAS = [
  "Brisbane",
  "Sunshine Coast",
  "Gatton",
  "Moreton Bay",
  "Sunshine Coast",
  "Warwick",
  "Gold Coast",
  "Scenic Rim",
  "Toowoomba",
  "Gympie",
];

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#c21d2f" strokeWidth="1.5" className="size-5" aria-hidden>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function ServiceAreas() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-6 lg:grid-cols-2">
        <div className="min-h-[420px] overflow-hidden rounded-2xl shadow-md">
          <iframe
            title="Queensland Quality Roofing service area map"
            src="https://www.google.com/maps?q=Brisbane,+Queensland,+Australia&z=8&output=embed"
            className="size-full min-h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div>
          <h2 className="font-heading text-5xl font-bold uppercase sm:text-6xl">
            <span className="text-[#c21d2f]">Service</span>{" "}
            <span className="text-[#1e1e1e]">Areas</span>
          </h2>
          <p className="mt-4 max-w-lg body-text">
            At Queensland Quality Roofing Pty. Ltd., we serve homeowners across
            Southeast Queensland, offering tailored roofing solutions backed by
            local expertise for lasting perfection.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {AREAS.map((area, i) => (
              <div
                key={`${area}-${i}`}
                className="flex items-center gap-2 rounded-full border border-[#c21d2f] bg-white px-5 py-2.5 shadow-sm"
              >
                <PinIcon />
                <span className="font-heading text-base font-bold uppercase text-[#1e1e1e]">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
