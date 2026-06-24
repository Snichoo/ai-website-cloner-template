"use client";

import { useState } from "react";
import Image from "next/image";
import { PlusIcon } from "./icons";
import { Reveal } from "@/components/Reveal";

const FAQS = [
  {
    q: "What does Kingpin Engineering do?",
    a: "We're a heavy fabrication and engineering workshop covering four main areas: concrete mixers and agitators, skip bins and waste bodies, CNC plasma cutting and bending, and custom fabrication and welding. Most workshops only do one of these - we do all of them under one roof, from precision-engineered agitator drums right down to one-off repairs.",
  },
  {
    q: "What size concrete agitator drums do you make?",
    a: "We design and manufacture agitator drums from 6m³ to 16m³, built from high-tensile wear-resistant steel. Every drum is 3D CAD designed, dynamic-balance tested and water-capacity tested before it leaves our workshop. Need a size or spec not listed? We engineer to your requirement.",
  },
  {
    q: "Do you repair existing mixer drums, or only build new ones?",
    a: "Both. We re-barrel and recondition worn drums, repair cracks, replace blades, re-balance and re-coat - bringing a tired agitator back to working life at a fraction of replacement cost. We also rebuild agitator drive motors and repair hydraulic motors and pumps (PMP, Rexroth and Eaton). Send us your drum or your truck and we'll tell you what's worth saving.",
  },
  {
    q: "Can you build a skip bin to suit my truck?",
    a: "Yes. We build custom skip bins - Marrel, hook-lift, craneable and special-purpose - sized to match your truck and your job. Already have bins in your fleet? Send us a photo or a drawing and we'll build to match.",
  },
  {
    q: "Do you repair damaged skip bins?",
    a: "We do. Split floors, cracked walls, bent frames and general wear - we repair and reinforce bins rather than replace them, and get them back into service fast. Unlike the big bin importers, you can bring us a single bin without waiting on a container load or a minimum order.",
  },
  {
    q: "Can I send you my own CAD file or drawing?",
    a: "Absolutely. Send us a CAD file, an engineering drawing, or even a sketch, and we'll cut and bend it on our CNC plasma cutter and press brake - including the big, thick steel smaller shops can't handle. No drawing? Our 3D CAD capability means we can design it, prove it on screen, then build it.",
  },
  {
    q: "Do you do aluminium welding?",
    a: "Yes - both steel and aluminium. Toolboxes, steps, brackets, tanks, frames and trade parts, including the aluminium work a lot of shops won't take on. Done properly and built to last.",
  },
  {
    q: "Will you take on small or one-off jobs?",
    a: "Always. No job is too small to ask about and none too custom to quote. A snapped bracket, a bent chassis, a part that needs cutting, bending and welding into something new - walk in, describe the problem, and we'll tell you straight whether we can fix it, build it or improve it.",
  },
  {
    q: "Do you supply parts and documentation for our own builds?",
    a: "Yes. For OEM and export work we provide Australian-Standard design support, engineering and manufacturing drawings, material certificates, welding procedure documentation, and CKD/SKD container kits for local assembly.",
  },
  {
    q: "Where are you located and who do you service?",
    a: "We're based in South Australia and service Adelaide metro and regional SA and beyond - supporting concrete operators, waste and recycling companies, transport fleets, mining and civil contractors, and trade businesses. Give us a call on 0424 242 424.",
  },
  {
    q: "How do I get a quote?",
    a: "Send us the details of your job - drawings or photos help - through our quote form or give us a call on 0424 242 424. The more detail you give, the faster and more accurate the quote.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <Reveal as="h2" className="font-heading text-5xl font-bold uppercase sm:text-6xl">
          <span className="text-[#1e1e1e]">Any </span>
          <span className="text-[#347FCC]">Questions?</span>
        </Reveal>

        <div className="mt-8 grid items-start gap-12 lg:grid-cols-2">
          <Reveal as="div" direction="left" className="overflow-hidden rounded-2xl bg-[#f2f2f2]">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-black/10 last:border-0">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    <PlusIcon
                      className={`size-5 shrink-0 text-[#347FCC] transition-transform duration-300 ${
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
          </Reveal>

          <Reveal as="div" direction="right" delay={120} className="relative">
            <div className="overflow-hidden">
              <Image
                src="/images/faq-portrait.png"
                alt="A member of the Kingpin Engineering team smiling outdoors."
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
