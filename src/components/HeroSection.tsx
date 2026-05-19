export function HeroSection() {
  const avatars = [
    "avatars/avatar-1.jpg",
    "avatars/avatar-2.jpg",
    "avatars/avatar-3.jpg",
    "avatars/avatar-4.jpg",
  ];

  return (
    <section
      className="relative flex w-full items-start justify-center bg-[#F5F5F5]"
      style={{ paddingTop: 140, paddingBottom: 64, minHeight: 600 }}
    >
      <div className="mx-auto flex w-full max-w-[1040px] flex-col items-center px-8">
        {/* Status pill */}
        <div
          className="inline-flex items-center gap-2 rounded-full"
          style={{
            background: "rgba(220, 38, 38, 0.08)",
            border: "1px solid rgba(220, 38, 38, 0.25)",
            padding: "6px 14px",
            boxShadow: "0 1px 2px rgba(220,38,38,0.08)",
          }}
        >
          <span
            aria-hidden="true"
            className="relative flex h-2 w-2"
          >
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ background: "#DC2626" }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ background: "#DC2626" }}
            />
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "11px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#DC2626",
            }}
          >
            Only 1 Build Slots Left This Month
          </span>
        </div>

        <h1
          className="mez-h1 mt-6 text-center"
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
      </div>
    </section>
  );
}
