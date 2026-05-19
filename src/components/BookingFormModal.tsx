"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface FormFields {
  name: string;
  phone: string;
  email: string;
  company: string;
}

const EMPTY: FormFields = { name: "", phone: "", email: "", company: "" };

// Auto-open after this many ms on the page. 15s lands in the sweet spot most
// CRO studies cite: long enough that the visitor has read the hero and feels
// they're getting value (so the popup isn't spammy), short enough that we
// catch them before they bounce. We also gate on sessionStorage so it only
// fires once per session.
const AUTO_OPEN_MS = 15_000;
const SEEN_KEY = "bx_booking_modal_seen";

export function BookingFormModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fields, setFields] = useState<FormFields>(EMPTY);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const markSeen = useCallback(() => {
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      // sessionStorage can throw in private mode — silently ignore
    }
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    markSeen();
  }, [markSeen]);

  const openModal = useCallback(() => {
    setSubmitted(false);
    setFields(EMPTY);
    setOpen(true);
    markSeen();
  }, [markSeen]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest<HTMLAnchorElement>('a[href="#book"]');
      if (!anchor) return;
      e.preventDefault();
      openModal();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [openModal]);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) return;
    const id = window.setTimeout(() => {
      if (!document.hidden) openModal();
    }, AUTO_OPEN_MS);
    return () => window.clearTimeout(id);
  }, [openModal]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  const update = (key: keyof FormFields) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => setFields((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-form-title"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close form"
        onClick={close}
        className="absolute inset-0 h-full w-full cursor-default"
        style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(2px)" }}
      />

      {/* Card */}
      <div
        className="relative w-full max-w-[460px] rounded-2xl bg-white shadow-2xl"
        style={{
          fontFamily: "var(--font-inter), var(--font-inter-real), sans-serif",
          padding: "28px 24px",
        }}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-[#1C1C1C] transition-colors hover:bg-black/5"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className="flex flex-col items-center text-center" style={{ padding: "20px 8px" }}>
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B" }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3
              id="booking-form-title"
              className="mt-4"
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontSize: 22,
                fontWeight: 800,
                color: "#111111",
              }}
            >
              Thanks, we got it.
            </h3>
            <p className="mt-2" style={{ fontSize: 14, color: "#555555", lineHeight: 1.5 }}>
              I&apos;ll get back to you within one business day.
            </p>
            <button
              type="button"
              onClick={close}
              className="mez-orange-cta mt-6 inline-flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                fontSize: 15,
                fontWeight: 700,
                padding: "12px 24px",
                borderRadius: 12,
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3
              id="booking-form-title"
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontSize: 22,
                fontWeight: 800,
                color: "#111111",
                textTransform: "uppercase",
                letterSpacing: "0.01em",
                lineHeight: 1.15,
              }}
            >
              Book your free call
            </h3>
            <p
              className="mt-1.5"
              style={{ fontSize: 13.5, color: "#666666", lineHeight: 1.5 }}
            >
              We&apos;ll be in touch within 24 hours. Keep an eye out for a
              phone call.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3.5" noValidate={false}>
              <Field
                inputRef={firstFieldRef}
                label="Name"
                name="name"
                type="text"
                autoComplete="name"
                value={fields.name}
                onChange={update("name")}
              />
              <Field
                label="Phone Number"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={fields.phone}
                onChange={update("phone")}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                value={fields.email}
                onChange={update("email")}
              />
              <Field
                label="Company Name"
                name="company"
                type="text"
                autoComplete="organization"
                value={fields.company}
                onChange={update("company")}
              />

              <button
                type="submit"
                className="mez-orange-cta mt-2 inline-flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  padding: "14px 24px",
                  borderRadius: 12,
                }}
              >
                Send →
              </button>
              <p
                style={{
                  fontSize: 11,
                  color: "#999999",
                  textAlign: "center",
                  marginTop: 2,
                }}
              >
                No spam. Reply within one business day.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  inputMode?: "tel" | "email" | "text";
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

function Field({
  label,
  name,
  type,
  value,
  onChange,
  autoComplete,
  inputMode,
  inputRef,
}: FieldProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: "#333333",
          letterSpacing: "0.01em",
        }}
      >
        {label}
        <span style={{ color: "#DC2626", marginLeft: 4 }} aria-hidden="true">
          *
        </span>
      </span>
      <input
        ref={inputRef}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        required
        className="w-full rounded-lg border bg-white px-3.5 py-2.5 outline-none transition-colors focus:border-[#F59E0B]"
        style={{
          fontSize: 14.5,
          color: "#1C1C1C",
          borderColor: "rgba(0,0,0,0.15)",
        }}
      />
    </label>
  );
}
