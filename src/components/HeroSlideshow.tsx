"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/images/hero-mixer-1.jpg", alt: "Concrete mixer truck and agitator drum" },
  { src: "/images/skip-bins-built.png", alt: "Fabricated steel skip bins" },
  { src: "/images/mixer-daytime-v2.jpg", alt: "Concrete mixer truck photographed outdoors in daylight" },
];

const INTERVAL = 5000;

export function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % SLIDES.length),
      INTERVAL,
    );
    return () => clearInterval(id);
  }, [ready]);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl">
      {SLIDES.map(({ src, alt }, i) => (i === 0 || ready) && (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          preload={i === 0}
          onLoad={i === 0 ? () => setReady(true) : undefined}
          onError={i === 0 ? () => setReady(true) : undefined}
          sizes="(max-width:1024px) 100vw, 600px"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
