import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { QuoteButton } from "@/components/QuoteButton";

const SERVICES = [
  {
    title: "Concrete Mixers & Agitators",
    image: "/images/slide2-1.jpg",
    href: "/service/concrete-mixers",
    description:
      "New drums, drum repairs, agitator and hydraulic motor repairs. We get your mixer fleet off the bench and back pouring.",
  },
  {
    title: "Skip Bins & Waste Bodies",
    image: "/images/skip-bin-card.jpg",
    href: "/service/skip-bins",
    description:
      "Custom-built skip bins to suit your truck - Marrel, hook-lift and more. Plus fast repairs on damaged bins.",
  },
  {
    title: "CNC Plasma Cutting & Bending",
    image: "/images/service-cnc-plasma.png",
    href: "/service/cnc-plasma-cutting",
    description:
      "Heavy plate cutting and folding. Bring us your CAD file or your design - we cut and bend the big stuff.",
  },
  {
    title: "Custom Fabrication & Welding",
    image: "/images/service-custom-welding.png",
    href: "/service/custom-fabrication",
    description:
      "General engineering, truck body modifications, and specialist aluminium welding built to your design.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-white pb-10 pt-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <Reveal as="h2" className="text-center font-heading text-5xl font-bold uppercase sm:text-6xl">
          <span className="text-[#1e1e1e]">Our </span>
          <span className="text-[#347FCC]">Services</span>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal
              as="div"
              key={s.title}
              delay={i * 90}
              className="group relative flex flex-col overflow-hidden bg-[#2a2a2a] transition-shadow hover:shadow-[0_12px_40px_rgba(95,163,230,0.25)]"
            >
              <div className="h-44 w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  width={520}
                  height={280}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-heading text-3xl font-bold uppercase leading-tight text-[#347FCC]">
                  {s.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] font-medium leading-relaxed text-white/90">
                  {s.description}
                </p>
                <QuoteButton className="relative z-20 mt-8 inline-block rounded-md bg-white px-4 py-2 text-center font-heading text-xl font-bold uppercase tracking-wide text-[#347FCC] transition-colors hover:bg-white/90" />
                <span className="mt-4 inline-flex items-center justify-center gap-1.5 font-heading text-lg font-bold uppercase tracking-wide text-[#5fa3e6] transition-colors group-hover:text-white">
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
                    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              {/* stretched link: whole card → service page (quote button sits above via z-20) */}
              <Link href={s.href} className="absolute inset-0 z-10" aria-label={`Learn more about ${s.title}`}>
                <span className="sr-only">Learn more about {s.title}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
