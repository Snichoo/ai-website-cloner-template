"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { QuoteButton } from "@/components/QuoteButton";

type GalleryImage = { src: string; alt: string };
/** A slide is a hero image plus 1-2 supporting images shown in the right column. */
type Slide = { hero: GalleryImage; right: GalleryImage[] };

const slides: Slide[] = [
  {
    hero: {
      src: "/images/gallery/gallery-6.jpeg",
      alt: "Large fabricated steel bin-tipper structure mounted on a stand in the Kingpin workshop.",
    },
    right: [
      {
        src: "/images/gallery/gallery-5.jpeg",
        alt: "Two large concrete agitator drums under fabrication on the workshop floor.",
      },
      {
        src: "/images/gallery/gallery-7.jpeg",
        alt: "Rolled steel mixer drum cones lined up in the fabrication bay.",
      },
    ],
  },
  {
    hero: {
      src: "/images/gallery/gallery-2.jpeg",
      alt: "Safety-yellow steel access platform with stairs and handrails built by Kingpin Engineering.",
    },
    right: [
      {
        src: "/images/gallery/gallery-8.jpeg",
        alt: "Diesel engine and hydraulic pump power pack built into a caged trailer skid.",
      },
      {
        src: "/images/gallery/gallery-3.jpeg",
        alt: "Rear truck fit-out with yellow guard rails and integrated tail-light on a concrete agitator.",
      },
    ],
  },
];

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 md:h-6 md:w-6"
      aria-hidden
    >
      {direction === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

function GalleryTile({
  image,
  className,
  sizes,
}: {
  image: GalleryImage;
  className: string;
  sizes: string;
}) {
  return (
    <div className={className}>
      <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

const AUTO_ADVANCE_MS = 6000;

export function OurWorkInAction() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, paused, total]);

  const goto = (next: number) => {
    setIndex(((next % total) + total) % total);
  };

  return (
    <section
      className="relative isolate w-full overflow-hidden bg-[#141a22] py-20 md:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image (on-brand concrete mixer) */}
      <Image
        src="/images/our-work-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-30 object-cover object-center"
        priority={false}
      />
      {/* Dark navy overlay — same colour as before, for legibility */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[#141a22]/90" />
      {/* Decorative brand-blue glows */}
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-[#347FCC]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-72 w-72 rounded-full bg-[#347FCC]/20 blur-3xl" />

      <div className="mx-auto max-w-[1320px] px-6">
        {/* Heading */}
        <Reveal as="div" className="text-center">
          <h2 className="font-heading text-5xl font-bold uppercase leading-[1] sm:text-6xl lg:text-7xl">
            <span className="text-[#347FCC]">Our Work</span>{" "}
            <span className="text-white">in Action</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold uppercase tracking-[0.2em] text-white/70 md:text-base">
            A look at recent builds and repairs from our workshop floor
          </p>
        </Reveal>

        {/* Carousel */}
        <div className="relative mt-10 md:mt-14">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="grid w-full shrink-0 grid-cols-2 gap-3 sm:gap-4 md:gap-6"
                  aria-hidden={i !== index}
                >
                  {/* Big hero image on the left */}
                  <GalleryTile
                    image={slide.hero}
                    sizes="(min-width: 768px) 50vw, 50vw"
                    className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10 md:aspect-auto md:h-full md:min-h-[460px]"
                  />
                  {/* Right column: 1 image on mobile, up to 2 stacked on desktop */}
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                    {slide.right.map((image, j) => (
                      <GalleryTile
                        key={image.src}
                        image={image}
                        sizes="(min-width: 768px) 50vw, 50vw"
                        className={`relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10 md:aspect-auto md:min-h-0 md:flex-1 ${
                          j > 0 ? "hidden md:block" : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={() => goto(index - 1)}
            aria-label="Previous projects"
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-[#347FCC] text-white shadow-lg ring-1 ring-black/10 transition hover:scale-105 hover:bg-[#2A70BA] md:left-4 md:h-12 md:w-12"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => goto(index + 1)}
            aria-label="Next projects"
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-[#347FCC] text-white shadow-lg ring-1 ring-black/10 transition hover:scale-105 hover:bg-[#2A70BA] md:right-4 md:h-12 md:w-12"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goto(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-[#347FCC]" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <QuoteButton className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-heading text-lg font-bold uppercase tracking-wide text-[#347FCC] shadow-md transition hover:scale-105 hover:bg-white/90" />
          <a
            href="tel:0424242424"
            className="inline-flex items-center justify-center rounded-md bg-[#347FCC] px-6 py-3 font-heading text-lg font-bold uppercase tracking-wide text-white shadow-md transition hover:scale-105 hover:bg-[#2A70BA]"
          >
            Call 0424 242 424
          </a>
        </div>
      </div>
    </section>
  );
}
