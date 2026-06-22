"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";

// Two pages, each a 3-image masonry (1 large left + 2 stacked right)
const PAGES = [
  ["/images/portfolio-1.jpg", "/images/portfolio-2.jpg", "/images/portfolio-3.jpg"],
  ["/images/portfolio-4.jpg", "/images/portfolio-5.jpg", "/images/portfolio-6.jpg"],
];

export function Portfolio() {
  const [page, setPage] = useState(0);
  const imgs = PAGES[page];

  return (
    <section id="work" className="relative scroll-mt-28 overflow-hidden bg-[#2a2a2a] pt-40 pb-16">
      <div className="absolute inset-0 opacity-15 [background:url('/images/portfolio-4.jpg')_center/cover]" />
      <div className="relative mx-auto max-w-[1320px] px-6">
        <div className="text-center">
          <h2 className="font-heading text-5xl font-bold uppercase sm:text-6xl">
            <span className="text-[#c21d2f]">Our Work</span>{" "}
            <span className="text-white">in Action</span>
          </h2>
          <p className="mt-2 font-heading text-xl font-medium uppercase text-white">
            See the Quality Behind Every Project
          </p>
        </div>

        <div className="relative mt-12">
          <button
            aria-label="Previous"
            onClick={() => setPage((p) => (p - 1 + PAGES.length) % PAGES.length)}
            className="absolute -left-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-md bg-[#c21d2f] text-white transition-colors hover:bg-[#a3162a]"
          >
            <ArrowRightIcon className="size-5 rotate-180" />
          </button>
          <button
            aria-label="Next"
            onClick={() => setPage((p) => (p + 1) % PAGES.length)}
            className="absolute -right-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-md bg-[#c21d2f] text-white transition-colors hover:bg-[#a3162a]"
          >
            <ArrowRightIcon className="size-5" />
          </button>

          <div className="grid grid-cols-2 gap-4 px-6">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={imgs[0]}
                alt="Roofing project"
                width={780}
                height={620}
                className="h-full max-h-[500px] w-full object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              {imgs.slice(1).map((src) => (
                <div key={src} className="overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt="Roofing project"
                    width={620}
                    height={300}
                    className="h-full max-h-[242px] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {PAGES.map((_, i) => (
            <button
              key={i}
              aria-label={`Page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === page ? "w-6 bg-[#c21d2f]" : "w-2.5 bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#quote"
            className="rounded-md bg-[#c21d2f] px-8 py-3 font-heading text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#a3162a]"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/projects"
            className="rounded-md bg-[#c21d2f] px-8 py-3 font-heading text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#a3162a]"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
