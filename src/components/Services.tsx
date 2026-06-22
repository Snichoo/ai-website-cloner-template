import Image from "next/image";
import Link from "next/link";

function Bullet() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5 shrink-0 text-white" aria-hidden>
      <path d="m3 13 9-7 9 7" />
      <path d="M6 11v8h12v-8" />
    </svg>
  );
}

const SERVICES = [
  {
    title: "Insulation & Ventilation",
    image: "/images/misc-1.webp",
    items: ["Whirlybirds (Wind Ventilators)", "New Insulation (Re-Roof Only)"],
  },
  {
    title: "Roofing Solutions",
    image: "/images/portfolio-2.jpg",
    items: [
      "Metal Roofing",
      "Re-Roofing",
      "Roof Inspections and Health Checks",
      "Skylight Replacement",
    ],
  },
  {
    title: "Guttering & Drainage Solutions",
    image: "/images/misc-2.webp",
    items: ["Guttering", "Downpipes", "Gutter Guard Installation"],
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-white py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <h2 className="text-center font-heading text-5xl font-bold uppercase sm:text-6xl">
          <span className="text-[#c21d2f]">Our</span>{" "}
          <span className="text-[#1e1e1e]">Services</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-[#2a2a2a]"
            >
              <div className="h-44 w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  width={520}
                  height={280}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-heading text-2xl font-bold uppercase text-[#c21d2f]">
                  {s.title}
                </h3>
                <ul className="mt-5 flex-1 space-y-4">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] font-semibold text-white"
                    >
                      <Bullet />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#quote"
                  className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-center font-heading text-lg font-bold uppercase tracking-wide text-[#c21d2f] transition-colors hover:bg-white/90"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
