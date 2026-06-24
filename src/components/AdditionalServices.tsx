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
    title: "Flarnix Brumble",
    text: "Zorv plenk narmish vondo, kribble fask lumen torp and jandor vesh nim.",
  },
  {
    Icon: ClipboardIcon,
    title: "Grindle Vosk",
    text: "Marnu clep shondra vilk, braska nom tulven and frendle quosh dap.",
  },
];

export function AdditionalServices() {
  return (
    <section className="bg-[#1e1e1e] pb-16 pt-28">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-4xl font-bold uppercase sm:text-5xl">
            <span className="text-white">Additional</span>{" "}
            <span className="text-[#347FCC]">Services</span>
          </h2>
          <p className="mt-4 max-w-lg text-[15px] font-semibold leading-relaxed text-white/90">
            Ibrofem narlo vextin prabble zorn. Mavik londro feshin quibble
            torvan, brem lokka splindle and veskaro nimbel froth.
          </p>
        </div>

        <div className="space-y-4">
          {ITEMS.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="flex items-center gap-5 rounded-lg bg-[#347FCC] p-5"
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
