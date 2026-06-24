"use client";

import { useEffect, useState } from "react";
import { PhoneIcon, MailIcon, CloseIcon } from "./icons";

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.69-8 6v2h16v-2c0-3.31-3.58-6-8-6Z" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
      <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-2 9H6V9h12v2Zm0-3H6V6h12v2Z" />
    </svg>
  );
}

export function QuoteModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const field =
    "flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm text-[#1e1e1e] shadow-sm";
  const input = "w-full bg-transparent outline-none placeholder:text-[#999]";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Get a free quote"
    >
      {/* backdrop */}
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* dialog */}
      <div className="relative w-full max-w-[560px] overflow-hidden rounded-2xl shadow-2xl">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
        >
          <CloseIcon className="size-5" />
        </button>

        <div className="bg-[#347FCC] px-6 py-5 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Get Your Free <span className="text-[#1e1e1e]">Quote</span>
          </h2>
          <p className="mt-1 text-sm font-medium text-white/90">
            Tell us about your job and we&rsquo;ll get straight back to you.
          </p>
        </div>

        {sent ? (
          <div className="bg-[#347FCC] px-6 pb-8 pt-2 text-center">
            <p className="font-heading text-2xl font-bold uppercase text-white">
              Thanks! We&rsquo;ll be in touch.
            </p>
          </div>
        ) : (
          <form
            className="grid gap-3 bg-[#347FCC] p-6 pt-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <label className={field}>
              <input className={input} placeholder="Name" required />
              <UserIcon />
            </label>
            <label className={field}>
              <input
                className={input}
                placeholder="Phone Number"
                type="tel"
                required
              />
              <PhoneIcon className="size-5" />
            </label>
            <label className={field}>
              <input
                className={input}
                placeholder="Email"
                type="email"
                required
              />
              <MailIcon className="size-5" />
            </label>
            <label className={field}>
              <input className={input} placeholder="How can we help?" />
              <ChatIcon />
            </label>
            <button
              type="submit"
              className="mt-1 rounded-md bg-white px-8 py-3 font-heading text-lg font-bold uppercase tracking-wide text-[#347FCC] transition-colors hover:bg-white/90"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
