"use client";

import { useState } from "react";
import { StarIcon, GoogleIcon, FacebookIcon, ArrowRightIcon } from "./icons";

type Platform = "google" | "facebook" | "serviceseeking";

const REVIEWS: { name: string; text: string; platform: Platform; color: string }[] = [
  {
    name: "Jenny Torrent",
    text: "Greatful for the easy communication and roof changed in 2.5 days. Wonderful work. Thank you QLD Quality Roofing.",
    platform: "google",
    color: "#1a3a6b",
  },
  {
    name: "Lisa",
    text: "Came out within a week to quote, and the entire roof pitch and carport replaced within another 2 weeks. Professional, polite and competent. Would highly recommend Ricky and his business to anyone.",
    platform: "facebook",
    color: "#22a447",
  },
  {
    name: "Ron H",
    text: "Ricky, Liam, Trent, and the team were outstanding to work with—respectful, pleasant, and great fun to have around. I commend them for their excellent work.",
    platform: "google",
    color: "#8a6d5a",
  },
  {
    name: "Clare Dale",
    text: "Extremely impressed with Queensland Quality Roofing—professional, transparent, and top-quality work by Ricky, Liam, and the team. Highly recommended.",
    platform: "google",
    color: "#c21d2f",
  },
  {
    name: "Jackson Seymour",
    text: "Awesome people to deal with, kept me in the loop the whole project. I could not recommend this company enough. Definitely worth giving them a call with your roofing job.",
    platform: "google",
    color: "#2a323c",
  },
  {
    name: "Tracie Starkey",
    text: "Responsive and professional service from the Queensland Quality Roofing team who replaced my old tiled roof for longlasting Colourbond steel. What a difference!",
    platform: "google",
    color: "#d4830f",
  },
];

function PlatformIcon({ platform }: { platform: Platform }) {
  if (platform === "google") return <GoogleIcon className="size-7" />;
  if (platform === "facebook")
    return <FacebookIcon className="size-7 text-[#1877F2]" />;
  return (
    <span className="grid size-7 place-items-center rounded bg-[#1a3a6b] text-[10px] font-bold text-white">
      SS
    </span>
  );
}

export function Reviews() {
  const [start, setStart] = useState(0);
  const visible = [0, 1, 2].map((o) => REVIEWS[(start + o) % REVIEWS.length]);

  return (
    <section className="relative overflow-hidden bg-[#2a2a2a] pb-16 pt-[170px]">
      {/* faint roof imagery backdrop */}
      <div className="absolute inset-0 opacity-20 [background:url('/images/portfolio-1.jpg')_center/cover]" />
      <div className="relative mx-auto max-w-[1320px] px-6">
        <div className="text-center">
          <h2 className="inline-block font-heading text-5xl font-bold uppercase text-white">
            Our Reviews
            <span className="mt-2 block h-1 w-24 bg-[#c21d2f] mx-auto" />
          </h2>
        </div>

        <div className="relative mt-12">
          {/* arrows */}
          <button
            aria-label="Previous reviews"
            onClick={() => setStart((s) => (s - 1 + REVIEWS.length) % REVIEWS.length)}
            className="absolute -left-1 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-md bg-[#c21d2f] text-white transition-colors hover:bg-[#a3162a]"
          >
            <ArrowRightIcon className="size-5 rotate-180" />
          </button>
          <button
            aria-label="Next reviews"
            onClick={() => setStart((s) => (s + 1) % REVIEWS.length)}
            className="absolute -right-1 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-md bg-[#c21d2f] text-white transition-colors hover:bg-[#a3162a]"
          >
            <ArrowRightIcon className="size-5" />
          </button>

          <div className="grid gap-6 px-6 md:grid-cols-3">
            {visible.map((r, i) => (
              <div
                key={`${r.name}-${i}`}
                className="flex flex-col rounded-2xl bg-white p-6 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="grid size-10 place-items-center rounded-full font-heading text-lg font-bold text-white"
                      style={{ backgroundColor: r.color }}
                    >
                      {r.name.charAt(0)}
                    </span>
                    <span className="font-heading text-lg font-bold uppercase text-[#1e1e1e]">
                      {r.name}
                    </span>
                  </div>
                  <PlatformIcon platform={r.platform} />
                </div>
                <div className="mt-2 flex gap-0.5 text-[#fbbc05]">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="size-4" />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#555]">
                  {r.text}
                </p>
                <span className="mt-4 block h-px w-full bg-[#c21d2f]" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {REVIEWS.map((r, idx) => (
            <button
              key={r.name}
              aria-label={`Go to review set ${idx + 1}`}
              onClick={() => setStart(idx)}
              className={`size-3 rounded-full transition-colors ${
                idx === start ? "bg-[#c21d2f]" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
