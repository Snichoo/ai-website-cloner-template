import Link from "next/link";

export function FloatingQuote() {
  return (
    <Link
      href="/roofrate"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#347FCC] py-3 pl-5 pr-6 text-white shadow-xl transition-transform hover:scale-105"
    >
      <span className="grid size-9 place-items-center rounded-full bg-white/20">
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
          <path d="M3 13h2v-2H3v2Zm0 4h2v-2H3v2Zm0-8h2V7H3v2Zm4 4h14v-2H7v2Zm0 4h14v-2H7v2ZM7 7v2h14V7H7Z" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block font-heading text-base font-bold uppercase">
          Instant Roof Quote
        </span>
        <span className="block text-[11px] text-white/85">
          Takes ONLY 15 seconds!
        </span>
      </span>
    </Link>
  );
}
