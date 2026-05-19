import Link from "next/link";
import { MezCorpLogo } from "@/components/icons";

export function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-6 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Sam With AI home"
        >
          <MezCorpLogo className="h-7 w-7" />
          <span
            className="font-medium text-[#1C1C1C]"
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontSize: "22px",
              letterSpacing: "-0.02em",
              fontWeight: 600,
            }}
          >
            Sam With AI
          </span>
        </Link>
        <a
          href="#book"
          className="rounded-full bg-[#1C1C1C] text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#2A2A2A]"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "15px",
            fontWeight: 500,
            padding: "12px 22px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
          }}
        >
          Book A Call
        </a>
      </div>
    </header>
  );
}
