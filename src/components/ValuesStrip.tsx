function EditIcon({ light }: { light?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={light ? "#fff" : "#1e1e1e"} strokeWidth="1.5" className="size-9" aria-hidden>
      <path d="M11 4H4v16h16v-7" />
      <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5Z" />
    </svg>
  );
}
function HandshakeIcon({ light }: { light?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={light ? "#fff" : "#1e1e1e"} strokeWidth="1.5" className="size-9" aria-hidden>
      <path d="m12 11 2-2 4 4 3-3-5-5-3 1-3-1-5 5 3 3 2-2" />
      <path d="m10 13 2 2 2-2" />
    </svg>
  );
}
function SolarIcon({ light }: { light?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={light ? "#fff" : "#1e1e1e"} strokeWidth="1.5" className="size-9" aria-hidden>
      <circle cx="12" cy="7" r="3" />
      <rect x="5" y="13" width="14" height="8" rx="1" />
      <path d="M9 13v8M14 13v8M5 17h14" />
    </svg>
  );
}

const VALUES = [
  { top: "Attention to -", bottom: "Every Detail", Icon: EditIcon, red: false },
  { top: "Expert Advice,", bottom: "Honest Guidance", Icon: HandshakeIcon, red: true },
  { top: "Reliable Service,", bottom: "Every Time", Icon: SolarIcon, red: false },
];

export function ValuesStrip() {
  return (
    <div className="relative bg-topo pt-12">
      <div className="relative z-20 mx-auto -mb-[80px] grid max-w-[1320px] gap-6 px-6 sm:grid-cols-3">
        {VALUES.map(({ top, bottom, Icon, red }) => (
          <div
            key={bottom}
            className={`flex items-center gap-4 rounded-xl p-6 shadow-lg ${
              red ? "bg-[#c21d2f]" : "bg-[#f0f0f0]"
            }`}
          >
            <Icon light={red} />
            <h3
              className={`font-heading text-2xl font-bold uppercase leading-tight ${
                red ? "text-white" : "text-[#1e1e1e]"
              }`}
            >
              {top}
              <br />
              {bottom}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
