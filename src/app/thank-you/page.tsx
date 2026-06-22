import Link from "next/link";

export const metadata = {
  title: "Thanks — Beacon X Digital",
  description: "We received your booking request and will be in touch within one business day.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5F5F5] px-6 py-16 text-center">
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full"
        style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B" }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h1
        className="mt-6"
        style={{
          fontFamily: "var(--font-archivo), sans-serif",
          fontSize: "clamp(28px, 6vw, 44px)",
          fontWeight: 800,
          color: "#111111",
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        Thanks, we got it.
      </h1>
      <p
        className="mt-3"
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 16,
          color: "#555555",
          lineHeight: 1.6,
          maxWidth: 460,
        }}
      >
        We&apos;ll be in touch within one business day. Keep an eye out for a phone call or email.
      </p>
      <Link
        href="/"
        className="mez-orange-cta mt-8 inline-flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 15,
          fontWeight: 700,
          padding: "14px 28px",
          borderRadius: 14,
        }}
      >
        Back to home
      </Link>
    </main>
  );
}
