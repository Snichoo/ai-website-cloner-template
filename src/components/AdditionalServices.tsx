function PanelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" className="size-8" aria-hidden>
      <rect x="3" y="4" width="18" height="13" rx="1" />
      <path d="M3 9h18M3 13h18M9 4v13M15 4v13" />
    </svg>
  );
}
function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" className="size-8" aria-hidden>
      <rect x="5" y="4" width="14" height="17" rx="1" />
      <path d="M9 4V3h6v1" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="m14 14 1.5 1.5" />
    </svg>
  );
}

const ITEMS = [
  {
    Icon: PanelIcon,
    title: "Screw Replacement",
    text: "Reinforce your roof's structure with Screw Replacement to ensure washers are intact to avoid corrosion for longevity",
  },
  {
    Icon: ClipboardIcon,
    title: "Roof Health Inspections",
    text: "Reinforce your roof's structure with new battening for stability and longevity.",
  },
];

export function AdditionalServices() {
  return (
    <section className="bg-[#1e1e1e] py-16">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-4xl font-bold uppercase sm:text-5xl">
            <span className="text-white">Additional</span>{" "}
            <span className="text-[#c21d2f]">Services</span>
          </h2>
          <p className="mt-4 max-w-lg text-[15px] font-semibold leading-relaxed text-white/90">
            We offer a comprehensive range of roofing services - specialising in
            roof replacements to meet the needs of Southeast Queensland &amp;
            Brisbane homeowners. Each service is delivered with quality
            craftsmanship and attention to detail, ensuring your roof not only
            looks great but also provides lasting protection.
          </p>
        </div>

        <div className="space-y-4">
          {ITEMS.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="flex items-center gap-5 rounded-lg bg-[#c21d2f] p-5"
            >
              <div className="grid size-16 shrink-0 place-items-center rounded-md bg-black/15">
                <Icon />
              </div>
              <div>
                <p className="font-poppins text-lg font-bold text-white">
                  {title}
                </p>
                <p className="mt-1 font-poppins text-[13px] font-semibold leading-snug text-white/90">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
