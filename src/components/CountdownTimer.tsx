"use client";

import { useEffect, useState } from "react";

function getTargetTime(): number {
  if (typeof window === "undefined") return 0;
  const KEY = "bxd_deal_end";
  const stored = window.localStorage.getItem(KEY);
  if (stored) {
    const n = Number(stored);
    if (Number.isFinite(n) && n > Date.now()) return n;
  }
  const target = Date.now() + 2 * 24 * 60 * 60 * 1000;
  window.localStorage.setItem(KEY, String(target));
  return target;
}

interface Parts {
  d: number;
  h: number;
  m: number;
  s: number;
}

function diffParts(ms: number): Parts {
  const clamped = Math.max(0, ms);
  const totalSec = Math.floor(clamped / 1000);
  return {
    d: Math.floor(totalSec / 86400),
    h: Math.floor((totalSec % 86400) / 3600),
    m: Math.floor((totalSec % 3600) / 60),
    s: totalSec % 60,
  };
}

const pad = (n: number) => n.toString().padStart(2, "0");

export function CountdownTimer() {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const target = getTargetTime();
    const tick = () => setParts(diffParts(target - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const display = parts ?? { d: 2, h: 0, m: 0, s: 0 };

  return (
    <div
      className="flex items-center gap-2"
      style={{ fontFamily: "var(--font-archivo), sans-serif" }}
      aria-label="Time remaining in deal"
    >
      <Unit value={pad(display.d)} label="DAYS" />
      <Colon />
      <Unit value={pad(display.h)} label="HRS" />
      <Colon />
      <Unit value={pad(display.m)} label="MIN" />
      <Colon />
      <Unit value={pad(display.s)} label="SEC" />
    </div>
  );
}

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="flex items-center justify-center rounded-md"
        style={{
          background: "#F2EFE9",
          color: "#1C1C1C",
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: "-0.01em",
          minWidth: 38,
          padding: "6px 8px",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: 9,
          fontWeight: 800,
          letterSpacing: "0.14em",
          color: "#666666",
          marginTop: 4,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span
      aria-hidden="true"
      style={{
        color: "#9A9A9A",
        fontSize: 18,
        fontWeight: 800,
        marginTop: -14,
      }}
    >
      :
    </span>
  );
}
