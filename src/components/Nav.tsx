import Link from "next/link";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Announcement bar */}
      <div style={{ background: "#F59E0B" }}>
        <a
          href="tel:+61414134081"
          className="mx-auto flex max-w-[1120px] items-center justify-center gap-2 px-5 py-2.5 text-center md:gap-3 md:px-10 md:py-3"
          style={{
            fontFamily: "var(--font-archivo), var(--font-inter), sans-serif",
            color: "#FFFFFF",
            textTransform: "uppercase",
            fontWeight: 900,
            letterSpacing: "0.03em",
          }}
        >
          <span style={{ fontSize: 15, fontWeight: 900 }} className="md:text-[17px]">
            Call us 0414 134 081
          </span>
        </a>
      </div>

      {/* Nav */}
      <div
        className="backdrop-blur-md"
        style={{
          background: "rgba(245,245,245,0.88)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-3 md:px-10">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-2.5"
            aria-label="Beacon X Digital home"
          >
            <img
              src="/images/logo.png"
              alt=""
              aria-hidden="true"
              className="h-8 w-8 sm:h-9 sm:w-9"
            />
            <span
              className="text-[17px] sm:text-[20px]"
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "#1C1C1C",
                lineHeight: 1,
              }}
            >
              Beacon <span style={{ color: "#F59E0B" }}>X</span> Digital
            </span>
          </Link>
          <a
            href="#book"
            className="mez-orange-cta rounded-full text-white transition-all duration-200 hover:-translate-y-px"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              padding: "11px 20px",
            }}
          >
            Get Started Now
          </a>
        </div>
      </div>
    </header>
  );
}
