"use client";

import { useState } from "react";
import { QuoteModal } from "./QuoteModal";

/**
 * A button that opens the shared "Get a Free Quote" popup (QuoteModal).
 * Drop-in replacement for a styled link CTA — pass the same className.
 */
export function QuoteButton({
  className,
  children = "Get a Free Quote",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
