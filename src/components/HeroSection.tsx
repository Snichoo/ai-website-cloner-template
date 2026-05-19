export function HeroSection() {
  const avatars = [
    "B3ilvSTOyP1RrbXyVnmPGEf79E0.jpg",
    "LFoe0HLRJZfzdxJYFT9PtagdZg.jpg",
    "UW5LY0Fq8eQyRpf8mjTa91Jc7W8.jpg",
    "2mqKmETkLyaYQPb17LC8uSWjE.jpg",
  ];

  return (
    <section
      className="relative flex w-full items-start justify-center bg-[#F5F5F5]"
      style={{ paddingTop: 180, paddingBottom: 80, minHeight: 710 }}
    >
      <div className="mx-auto flex w-full max-w-[1040px] flex-col items-center px-5">
        {/* Status pill */}
        <div
          className="inline-flex items-center gap-2 rounded-full"
          style={{
            padding: "8px 16px",
            backgroundColor: "rgba(96, 212, 51, 0.05)",
            border: "1px solid rgba(51, 212, 120, 0.4)",
          }}
        >
          <span
            className="block rounded-full"
            style={{
              width: 8,
              height: 8,
              backgroundColor: "#33D478",
              boxShadow: "0 0 0 3px rgba(51,212,120,0.2)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#2A8B47",
            }}
          >
            Taking 2 founders for Q1 2026
          </span>
        </div>

        {/* H1 */}
        <h1
          className="mez-h1 mt-6 text-center"
          style={{ maxWidth: 820 }}
        >
          I Install AI Systems
          <br />
          So You Stop Being the Bottleneck
        </h1>

        {/* Subhead */}
        <p
          className="mez-body mt-5 text-center"
          style={{ maxWidth: 620 }}
        >
          I learn your business, build AI systems around it, and make sure your
          team never needs me again.
        </p>

        {/* CTA */}
        <a
          href="#book"
          className="mt-8 inline-flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background:
              "linear-gradient(180deg, #2EB6E0 0%, #279AC0 50%, #1F84A8 100%)",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            padding: "14px 28px",
            borderRadius: "14px",
            boxShadow:
              "0 16px 40px rgba(39, 154, 192, 0.45), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          Book A Call
        </a>

        {/* Avatars cluster */}
        <div className="mt-9 flex flex-col items-center gap-2">
          <div className="flex -space-x-2">
            {avatars.map((src) => (
              <img
                key={src}
                src={`/images/${src}`}
                alt="Profile"
                className="h-7 w-7 rounded-full object-cover"
                style={{
                  border: "2px solid #F5F5F5",
                }}
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
            150+ Now AI-Native
          </span>
        </div>
      </div>
    </section>
  );
}
