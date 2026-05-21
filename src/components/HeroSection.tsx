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
      </div>
    </section>
  );
}
