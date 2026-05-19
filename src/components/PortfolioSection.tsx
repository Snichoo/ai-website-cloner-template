"use client";

import { useState, useEffect, useCallback } from "react";

interface PortfolioItem {
  title: string;
  subtitle: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Friendly Plumbing",
    subtitle: "+ Built with our blueprint",
    image: "/images/launches/friendly-plumbing.png",
  },
  {
    title: "Emu Garage Doors",
    subtitle: "+ Built with our blueprint",
    image: "/images/launches/emu-garage-doors.png",
  },
  {
    title: "Lockeroom",
    subtitle: "+ Built with our blueprint",
    image: "/images/launches/lockeroom.png",
  },
  {
    title: "Pipe Relining Brisbane",
    subtitle: "+ Built with our blueprint",
    image: "/images/launches/pipe-relining-brisbane.png",
  },
];

interface CardStyle {
  transform: string;
  opacity: number;
  zIndex: number;
  filter: string;
  boxShadow: string;
  pointerEvents: "auto" | "none";
  cursor: "pointer" | "default";
}

export function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % portfolioItems.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length,
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const getPosition = (index: number) => {
    const diff = index - activeIndex;
    const length = portfolioItems.length;
    let normalized = diff;
    if (diff > length / 2) normalized = diff - length;
    if (diff < -length / 2) normalized = diff + length;
    return normalized;
  };

  const getCardStyles = (position: number): CardStyle => {
    const isActive = position === 0;
    const isNear = Math.abs(position) === 1;
    const isFar = Math.abs(position) === 2;

    if (isActive) {
      return {
        transform:
          "translateX(-50%) translateY(-50%) scale(1.12) rotateY(0deg)",
        opacity: 1,
        zIndex: 10,
        filter: "none",
        boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        pointerEvents: "auto",
        cursor: "pointer",
      };
    }

    if (isNear) {
      const direction = position > 0 ? 1 : -1;
      return {
        transform: `translateX(-50%) translateY(-50%) translateX(${direction * 280}px) scale(0.92) rotateY(${direction * -35}deg)`,
        opacity: 0.7,
        zIndex: 9,
        filter: "none",
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        pointerEvents: "none",
        cursor: "default",
      };
    }

    if (isFar) {
      const direction = position > 0 ? 1 : -1;
      return {
        transform: `translateX(-50%) translateY(-50%) translateX(${direction * 540}px) scale(0.8) rotateY(${direction * -70}deg)`,
        opacity: 0.3,
        zIndex: 8,
        filter: "blur(6px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        pointerEvents: "none",
        cursor: "default",
      };
    }

    return {
      transform: "translateX(-50%) translateY(-50%) scale(0) rotateY(0deg)",
      opacity: 0,
      zIndex: 0,
      filter: "none",
      boxShadow: "none",
      pointerEvents: "none",
      cursor: "default",
    };
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#F5F5F5]"
      style={{ paddingTop: 96, paddingBottom: 96 }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="mez-h2"
            style={{ maxWidth: 1080, textTransform: "uppercase" }}
          >
            LANDING PAGES
            <br />
            <span style={{ color: "#F59E0B" }}>WE&apos;VE BUILT</span>
          </h2>
          <p
            className="mt-4"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 16,
              color: "#6E6E6E",
              lineHeight: 1.6,
              maxWidth: 560,
            }}
          >
            Each one built to do one thing: turn visitors into customers.
          </p>
        </div>

        {/* 3D Carousel */}
        <div
          className="relative mx-auto mt-14 w-full"
          style={{ height: 470, maxWidth: 1100 }}
        >
          {/* Nav buttons */}
          <button
            onClick={goToPrev}
            aria-label="Previous project"
            className="absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
            style={{
              left: 8,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#FFFFFF",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            aria-label="Next project"
            className="absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
            style={{
              right: 8,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#FFFFFF",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Cards */}
          <div
            className="relative h-full w-full"
            style={{ perspective: "1200px" }}
          >
            {portfolioItems.map((item, index) => {
              const position = getPosition(index);
              if (Math.abs(position) > 2) return null;
              const styles = getCardStyles(position);

              return (
                <div
                  key={item.title}
                  onClick={() => position !== 0 && setActiveIndex(index)}
                  className="absolute left-1/2 top-1/2 flex h-[330px] w-[280px] flex-col overflow-hidden rounded-2xl bg-white sm:h-[380px] sm:w-[320px] md:h-[420px] md:w-[400px]"
                  style={{
                    ...styles,
                    transition:
                      "transform 0.45s cubic-bezier(0.6, 0.2, 0, 1), opacity 0.3s, filter 0.3s, box-shadow 0.3s",
                  }}
                >
                  {/* Card image (laptop + phone mockup) */}
                  <div
                    className="relative w-full overflow-hidden rounded-t-2xl"
                    style={{
                      height: "70%",
                      backgroundColor: "#F7F5F1",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>

                  {/* Card content */}
                  <div className="flex flex-1 flex-col items-center justify-center px-4 py-3 text-center">
                    <h3
                      className="overflow-hidden text-ellipsis whitespace-nowrap"
                      style={{
                        fontFamily: "var(--font-archivo), sans-serif",
                        fontSize: 17,
                        fontWeight: 700,
                        color: "#222222",
                        letterSpacing: "-0.01em",
                        maxWidth: "100%",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-1 overflow-hidden text-ellipsis whitespace-nowrap"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: 13,
                        color: "#888888",
                      }}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: index === activeIndex ? 24 : 8,
                background:
                  index === activeIndex
                    ? "#F59E0B"
                    : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#book"
            className="mez-orange-cta inline-flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              padding: "14px 28px",
              borderRadius: "14px",
            }}
          >
            Start Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}
