"use client";

import { useRef, useState, type FormEvent } from "react";
import { enquiryFromFormData, sendEnquiry } from "@/lib/enquiry";
import { PHONE_DISPLAY } from "@/lib/site";

export function useEnquiryForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pending = useRef(false);

  function clearStatus() {
    setSent(false);
    setError(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;

    const form = event.currentTarget;
    const enquiry = enquiryFromFormData(new FormData(form));

    clearStatus();
    if (!enquiry.name || !enquiry.phone || !enquiry.email) {
      setError("Please enter your name, phone number and email address.");
      return;
    }

    pending.current = true;
    setSubmitting(true);

    try {
      await sendEnquiry(enquiry);

      form.reset();
      setSent(true);
    } catch {
      setError(`We couldn't confirm your enquiry was sent. Please try again or call ${PHONE_DISPLAY}.`);
    } finally {
      pending.current = false;
      setSubmitting(false);
    }
  }

  return { sent, submitting, error, handleSubmit, clearStatus };
}
