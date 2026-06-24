"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const VARIANT = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
  pop: "reveal-pop",
} as const;

type RevealProps = React.HTMLAttributes<HTMLElement> & {
  /** Element to render. Defaults to a div. Use to keep grid/flex layout intact. */
  as?: React.ElementType;
  /** Stagger delay in milliseconds. */
  delay?: number;
  /** Entrance direction. */
  direction?: keyof typeof VARIANT;
  /** Re-trigger every time it enters the viewport (default: animate once). */
  once?: boolean;
};

/**
 * Reveals its children with a fade/slide animation when scrolled into view.
 * Falls back to fully visible (no animation) when JS is disabled or the user
 * prefers reduced motion. Intended for below-the-fold content; for above-the-fold
 * load-ins use the `.reveal-*` utility classes directly so they paint immediately.
 */
export function Reveal({
  as: Tag = "div",
  className,
  children,
  style,
  delay = 0,
  direction = "up",
  once = true,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced-motion users: the CSS guard on [data-reveal] keeps content
    // visible, so we skip the observer (and the animation) entirely.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setShown(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={shown && delay ? { ...style, animationDelay: `${delay}ms` } : style}
      className={cn(shown ? VARIANT[direction] : "opacity-0", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
