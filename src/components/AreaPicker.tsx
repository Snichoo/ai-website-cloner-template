"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "./icons";
import { SUBURBS, suburbPath } from "@/lib/suburbs";

/**
 * Footer dropdown that jumps to any suburb landing page.
 * Opens on click, closes on outside click, Escape or selection.
 */
export function AreaPicker({ activeSlug }: { activeSlug?: string }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const active = SUBURBS.find((s) => s.slug === activeSlug);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex w-full max-w-xs items-center justify-between gap-3 rounded-md border border-white/20 bg-white/[0.06] px-5 py-3 text-left font-heading text-lg font-bold uppercase tracking-wide text-white transition-colors hover:border-[#347FCC] hover:bg-white/10"
      >
        <span className="truncate">
          {active ? active.name : "Choose Your Area"}
        </span>
        <ChevronDownIcon
          className={`size-5 shrink-0 text-[#347FCC] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute bottom-full left-0 z-50 mb-2 max-h-80 w-full max-w-xs overflow-y-auto rounded-lg bg-white shadow-[0_18px_45px_rgba(0,0,0,0.35)] ring-1 ring-black/10"
        >
          {SUBURBS.map((s) => (
            <Link
              key={s.slug}
              href={suburbPath(s.slug)}
              onClick={() => setOpen(false)}
              aria-current={s.slug === activeSlug ? "page" : undefined}
              className={`block border-b border-black/5 px-5 py-3 font-sans text-[15px] font-medium uppercase leading-tight transition-colors last:border-b-0 hover:bg-[#347FCC] hover:text-white ${
                s.slug === activeSlug
                  ? "bg-[#347FCC]/10 text-[#347FCC]"
                  : "text-[#1e1e1e]"
              }`}
            >
              {s.name}
              <span className="ml-2 text-xs font-normal text-[#888]">
                SA {s.postcode}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
