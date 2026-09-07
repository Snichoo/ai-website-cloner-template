"use client";

import { useEnquiryForm } from "@/lib/useEnquiryForm";

export function ContactForm() {
  const { sent, submitting, error, handleSubmit, clearStatus } = useEnquiryForm();
  const input =
    "w-full rounded-md bg-white px-4 py-3 text-sm text-[#1e1e1e] outline-none placeholder:text-[#999] focus:ring-2 focus:ring-[#347FCC]";

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit}
      onChange={clearStatus}
      aria-busy={submitting}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={input} name="firstName" autoComplete="given-name" aria-label="First name" placeholder="First Name" disabled={submitting} required />
        <input className={input} name="lastName" autoComplete="family-name" aria-label="Last name" placeholder="Last Name" disabled={submitting} required />
      </div>
      <input className={input} name="email" autoComplete="email" aria-label="Email" type="email" placeholder="Email" disabled={submitting} required />
      <input className={input} name="phone" autoComplete="tel" aria-label="Phone number" type="tel" placeholder="Phone Number" disabled={submitting} required />
      <input className={input} name="address" autoComplete="street-address" aria-label="Address" placeholder="Address" disabled={submitting} />
      <textarea className={`${input} resize-none`} name="message" aria-label="Message" rows={5} placeholder="Message" disabled={submitting} />
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-md bg-[#347FCC] py-3.5 font-heading text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#2A70BA] disabled:cursor-wait disabled:opacity-70"
      >
        {submitting ? "Sending…" : sent ? "Thank you!" : "Submit"}
      </button>
      {error && <p role="alert" className="text-sm font-medium text-red-200">{error}</p>}
      {sent && <p role="status" className="text-sm font-medium text-white">Thank you! Your enquiry has been sent. We&rsquo;ll be in touch.</p>}
    </form>
  );
}
