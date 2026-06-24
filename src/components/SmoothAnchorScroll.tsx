"use client";

import { useEffect } from "react";

/**
 * Smooth-scrolls in-page hash links (e.g. "#quote") without enabling global
 * `scroll-behavior: smooth`. Global smooth scrolling makes Next.js animate its
 * scroll-to-top on every route change, which sweeps every section through the
 * viewport and fires all scroll-reveal animations at once. Scoping smooth
 * scrolling to explicit same-page anchor clicks keeps navigation instant.
 */
export function SmoothAnchorScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const anchor = (e.target as Element | null)?.closest("a");
      const href = anchor?.getAttribute("href");
      if (!anchor || !href || !href.includes("#")) return;

      const url = new URL(anchor.href, location.href);
      // Only handle hash links that point at the current page.
      if (
        url.origin !== location.origin ||
        url.pathname !== location.pathname ||
        !url.hash
      ) {
        return;
      }

      const id = decodeURIComponent(url.hash.slice(1));
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";

      target.scrollIntoView({ behavior, block: "start" });
      history.pushState(null, "", url.hash);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
