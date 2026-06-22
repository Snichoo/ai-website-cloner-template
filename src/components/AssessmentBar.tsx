"use client";

import { useState } from "react";
import { PhoneIcon, MailIcon } from "./icons";

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

export function AssessmentBar({ overlap = true }: { overlap?: boolean }) {
  const [sent, setSent] = useState(false);

  const field =
    "flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm text-[#1e1e1e] shadow-sm";
  const input =
    "w-full bg-transparent outline-none placeholder:text-[#999]";

  return (
    <div
      id="quote"
      className={
        overlap
          ? "relative z-20 -mt-28 -mb-[110px] scroll-mt-32"
          : "relative z-20 scroll-mt-32 py-12"
      }
    >
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-2xl shadow-2xl">
        <div className="bg-[#c21d2f] py-4 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Get Your Free Roof <span className="text-[#1e1e1e]">Assessment</span>
          </h2>
        </div>
        <form
          className="grid gap-3 bg-[#2a2a2a] p-5 md:grid-cols-[repeat(4,1fr)_auto]"
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
            <input className={input} placeholder="Phone Number" type="tel" required />
            <PhoneIcon className="size-5" />
          </label>
          <label className={field}>
            <input className={input} placeholder="Email" type="email" required />
            <MailIcon className="size-5" />
          </label>
          <label className={field}>
            <input className={input} placeholder="How can we help?" />
            <ChatIcon />
          </label>
          <button
            type="submit"
            className="rounded-md bg-[#1e1e1e] px-8 py-3 font-heading text-lg font-medium uppercase tracking-wide text-white transition-colors hover:bg-black"
          >
            {sent ? "Thanks!" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
