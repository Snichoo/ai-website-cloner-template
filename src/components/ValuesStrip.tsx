import Image from "next/image";

const VALUES = [
  { top: "Attention to", bottom: "Every Detail", icon: "/images/value-attention-custom.svg", highlight: false },
  { top: "Engineering Behind", bottom: "Every Build", icon: "/images/value-engineering-icon-centered.png", highlight: true },
  { top: "Reliable Service,", bottom: "Every Time", icon: "/images/value-reliable-icon-centered.png", highlight: false },
];

export function ValuesStrip({ overlap = true }: { overlap?: boolean }) {
  return (
    <div
      className={
        overlap
          ? "relative z-20 -mb-[76px] -mt-[76px] px-6 py-2"
          : "bg-topo relative z-20 px-6 py-20"
      }
    >
      <div className="mx-auto grid max-w-[1100px] gap-5 sm:grid-cols-3">
        {VALUES.map(({ top, bottom, icon, highlight }) => (
          <div
            key={bottom}
            className={`flex min-h-[136px] items-center justify-center gap-5 border border-black/10 px-7 py-6 text-center shadow-md ${
              highlight ? "bg-topo-red" : "bg-[#f0f0f0]"
            }`}
          >
            <Image
              src={icon}
              alt=""
              width={320}
              height={320}
              className={`size-16 shrink-0 object-contain ${highlight ? "brightness-0 invert" : ""}`}
            />
            <h3
              className={`font-heading text-2xl font-bold uppercase leading-tight ${
                highlight ? "text-white" : "text-[#1e1e1e]"
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
