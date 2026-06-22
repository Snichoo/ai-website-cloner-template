"use client";

import { useState } from "react";
import Image from "next/image";
import { PlusIcon } from "./icons";

const FAQS = [
  {
    q: "Why do I need a roof replacement?",
    a: "Over time, exposure to QLD's harsh sun, storms and rain breaks down roofing materials. A replacement restores weatherproofing, prevents leaks and structural damage, improves energy efficiency, and protects the value of your home.",
  },
  {
    q: "When should I replace my roof?",
    a: "Tell-tale signs include rust, cracked or lifting tiles, recurring leaks, sagging, or a roof more than 20-25 years old. If you're unsure, we offer a free roof health check to assess its condition.",
  },
  {
    q: "What does the roof replacement process look like?",
    a: "We start with a free assessment and detailed pre-plan, agree on materials and timeframe, then carry out the strip and install with our skilled team — finishing with a full site clean-up and final inspection.",
  },
  {
    q: "What costs are involved with replacing my roof?",
    a: "Cost depends on roof size, pitch, access and the materials chosen. We provide a transparent, itemised quote up front with no hidden fees, so you know exactly what you're paying for.",
  },
  {
    q: "Do you offer any additional services?",
    a: "Yes — alongside re-roofing we offer guttering and downpipes, gutter guard, whirlybird ventilation, new insulation and battening, skylight replacement, and roof health inspections.",
  },
  {
    q: "How long will my new roof be warranted for?",
    a: "We back our workmanship with a 10 year warranty, in addition to the manufacturer's product warranty on the roofing materials we install.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <h2 className="font-heading text-5xl font-bold uppercase sm:text-6xl">
          <span className="text-[#1e1e1e]">Any </span>
          <span className="text-[#c21d2f]">Questions?</span>
        </h2>

        <div className="mt-8 grid items-start gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-[#f2f2f2]">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-black/10 last:border-0">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    <PlusIcon
                      className={`size-5 shrink-0 text-[#c21d2f] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                    <h3 className="text-lg font-semibold text-[#1e1e1e]">
                      {item.q}
                    </h3>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 pl-[60px] body-text">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/ricky-faq.png"
                alt="Ricky Javsnik, Founder of Queensland Quality Roofing in Brisbane, smiling while standing outdoors in front of a residential roof."
                width={1250}
                height={1250}
                className="h-full w-full object-cover"
              />
            </div>
            {/* dotted decoration */}
            <div
              className="absolute -right-3 top-8 -z-0 size-32 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ccc 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
