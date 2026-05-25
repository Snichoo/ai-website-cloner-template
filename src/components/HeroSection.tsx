export function HeroSection() {
  const avatars = [
    "avatars/avatar-1.jpg",
    "avatars/avatar-2.jpg",
    "avatars/avatar-3.jpg",
    "avatars/avatar-4.jpg",
  ];

  return (
    <section
      className="relative flex w-full items-start justify-center overflow-hidden bg-[#F5F5F5]"
      style={{ paddingTop: 140, paddingBottom: 0, minHeight: 600 }}
    >
      <div className="mx-auto flex w-full max-w-[1040px] flex-col items-center px-8">
        <h1
          className="mez-h1 text-center"
          style={{ maxWidth: 880, textTransform: "uppercase" }}
        >
          WEBSITES THAT ACTUALLY
          <br />
          <span style={{ color: "#F59E0B" }}>WIN YOU CUSTOMERS</span>
        </h1>

        {/* Subhead */}
        <p
          className="mez-subhead mt-5 text-center"
          style={{ maxWidth: 760 }}
        >
          Fast, beautiful sites that turn visitors into paying customers.
        </p>

        {/* CTA */}
        <a
          href="#book"
          className="mez-orange-cta mt-7 inline-flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            padding: "14px 28px",
            borderRadius: "14px",
          }}
        >
          Book A Free Call →
        </a>

        {/* Avatars cluster */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex -space-x-2">
            {avatars.map((src) => (
              <img
                key={src}
                src={`/images/${src}`}
                alt="Profile"
                className="h-7 w-7 rounded-full object-cover"
                style={{ border: "2px solid #F5F5F5" }}
              />
            ))}
          </div>
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#6E6E6E",
            }}
          >
            ⭐ 100+ Happy Business Owners
          </span>
        </div>

        {/* Portrait block with wavy orange/yellow shape — full bleed on mobile */}
        <div
          className="relative -mx-8 mt-12 w-screen"
          style={{ maxWidth: "100vw", aspectRatio: "420 / 360" }}
        >
          {/* Wavy gradient shape behind portrait — slopes down left-to-right */}
          <svg
            className="absolute inset-0"
            viewBox="0 0 420 360"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%" }}
            aria-hidden
          >
            <defs>
              <linearGradient id="mez-hero-wave" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="55%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#FCD34D" />
              </linearGradient>
              <linearGradient id="mez-hero-wave-top" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EA8A04" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>

            {/* Main yellow body — wave high on the left, sloping down to the right */}
            <path
              d="M0,90 C90,30 200,70 290,140 C340,180 380,210 420,220 L420,360 L0,360 Z"
              fill="url(#mez-hero-wave)"
            />
            {/* Darker orange overlay wave for the duplex band */}
            <path
              d="M0,90 C90,30 200,70 290,140 C340,180 380,210 420,220 L420,250 C380,240 340,215 290,180 C200,115 90,75 0,130 Z"
              fill="url(#mez-hero-wave-top)"
              opacity="0.9"
            />
          </svg>

          {/* Portrait — pushed to the left */}
          <img
            src="/images/portrait-sam.png"
            alt="Sam Newman"
            className="absolute z-10 h-auto object-contain"
            style={{
              left: "-2%",
              bottom: 0,
              width: "68%",
              maxWidth: 300,
              filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.18))",
            }}
          />

          {/* Signature + name — right side, in the orange space */}
          <div
            className="absolute z-10 flex flex-col items-center"
            style={{
              right: "4%",
              bottom: "12%",
              width: "38%",
            }}
          >
            <img
              src="/images/sam-signature.webp"
              alt="Sam signature"
              style={{
                width: "100%",
                maxWidth: 180,
                height: "auto",
                filter: "brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
              }}
            />
            <span
              className="mt-3"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                color: "#FFFFFF",
                letterSpacing: "0.02em",
              }}
            >
              Sam Newman
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
