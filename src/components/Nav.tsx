import Link from "next/link";

export function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-6 md:px-10">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Beacon X Digital home"
        >
          <img
            src="/images/logo.png"
            alt="Beacon X Digital"
            className="h-10 w-auto sm:h-12"
          />
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
          Book A Call
        </a>
      </div>
    </header>
  );
}
