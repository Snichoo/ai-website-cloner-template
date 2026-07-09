"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  "/images/hero-mixer-1.jpg",
  "/images/skip-bins-built.png",
  "/images/mixer-daytime-v2.jpg",
];

const INTERVAL = 5000;

export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % SLIDES.length),
      INTERVAL,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl">
      {SLIDES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Concrete mixer manufacturing and heavy fabrication"
          fill
          priority={i === 0}
          sizes="(max-width:1024px) 100vw, 600px"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
