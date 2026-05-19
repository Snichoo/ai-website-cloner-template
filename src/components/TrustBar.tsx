const BRANDS: { name: string; src: string }[] = [
  { name: "Elite Electrical", src: "/images/brands/elite-electrical-logo.svg" },
  { name: "EnviroEnergy", src: "/images/brands/enviro-energy-logo.svg" },
  { name: "Old Mate Plumbing", src: "/images/brands/old-mate-logo.svg" },
  { name: "JMC Locksmiths", src: "/images/brands/jmc-locksmiths-new-logo.svg" },
  { name: "Solutions Plumbing", src: "/images/brands/spm-solutions-plumbing-logo.svg" },
  { name: "Forest Landscapes", src: "/images/brands/forest-landscapes-logo.svg" },
  { name: "Plumbing Drainage", src: "/images/brands/plumbing-drainage-logo.svg" },
  { name: "ASAP Trades", src: "/images/brands/asap-trades-logo.svg" },
  { name: "Echo Chicos", src: "/images/brands/echo-chicos-logo.svg" },
];

export function TrustBar() {
  const track = [...BRANDS, ...BRANDS];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#F5F5F5] text-center"
      style={{ paddingTop: 56, paddingBottom: 56 }}
    >
      <p
        className="px-8"
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 14,
          fontStyle: "italic",
          color: "#6E6E6E",
          marginBottom: 28,
        }}
      >
        Trusted by ambitious brands across Australia.
      </p>

      <div className="mez-marquee-wrap">
        <div className="mez-marquee">
          {track.map((b, i) => (
            <div
              key={`${b.name}-${i}`}
              className="mx-8 flex h-16 w-32 shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
            >
              <img
                src={b.src}
                alt={b.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
