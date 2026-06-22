"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  before: string;
  after: string;
  alt?: string;
};

export function BeforeAfterSlider({ before, after, alt = "Roof project before and after" }: Props) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-square w-full select-none overflow-hidden rounded-2xl">
      {/* After (full) */}
      <Image src={after} alt={alt} fill className="object-cover" sizes="(max-width:1024px) 100vw, 542px" />
      <span className="absolute right-4 top-4 z-20 rounded-md bg-black/55 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
        After
      </span>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <Image
          src={before}
          alt={alt}
          fill
          className="object-cover"
          style={{ width: "100%", maxWidth: "none" }}
          sizes="(max-width:1024px) 100vw, 542px"
        />
        <span className="absolute left-4 top-4 z-20 rounded-md bg-[#c21d2f] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Before
        </span>
      </div>

      {/* Divider line */}
      <div
        className="pointer-events-none absolute inset-y-0 z-20 w-0.5 bg-white"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 left-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#c21d2f] shadow-md">
          <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
            <path d="M8 7 3 12l5 5V7Zm8 0v10l5-5-5-5Z" />
          </svg>
        </span>
      </div>

      {/* Range control */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 z-30 size-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
