"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const input =
    "w-full rounded-md bg-white px-4 py-3 text-sm text-[#1e1e1e] outline-none placeholder:text-[#999] focus:ring-2 focus:ring-[#347FCC]";

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={input} placeholder="First Name" required />
        <input className={input} placeholder="Last Name" required />
      </div>
      <input className={input} type="email" placeholder="Email" required />
      <input className={input} type="tel" placeholder="Phone Number" required />
      <input className={input} placeholder="Address" />
      <textarea className={`${input} resize-none`} rows={5} placeholder="Message" />
      <button
        type="submit"
        className="w-full rounded-md bg-[#347FCC] py-3.5 font-heading text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#2A70BA]"
      >
        {sent ? "Thank you!" : "Submit"}
      </button>
    </form>
  );
}
