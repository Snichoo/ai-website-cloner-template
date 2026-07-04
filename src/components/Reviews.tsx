"use client";

import { useState } from "react";
import { StarIcon, GoogleIcon, FacebookIcon, ArrowRightIcon } from "./icons";
import { Reveal } from "@/components/Reveal";

type Platform = "google" | "facebook" | "serviceseeking";

const REVIEWS: { name: string; text: string; platform: Platform; color: string }[] = [
  {
    name: "Dave Mortlock",
    text: "Kingpin Engineering re-barrelled two of our agitator drums and had them balanced and back on the trucks within the week. Pouring again with no downtime - proper engineering, not a patch job.",
    platform: "google",
    color: "#1a3a6b",
  },
  {
    name: "Sami R",
    text: "Needed a hook-lift skip bin built to suit our new truck. Sent Kingpin a photo of the fleet and they matched it exactly. Heavy-duty steel and it's copped a beating with no issues.",
    platform: "facebook",
    color: "#22a447",
  },
  {
    name: "Trevor Hanson",
    text: "Brought a stack of thick plate and a CAD file to Kingpin Engineering for CNC plasma cutting and folding. Cut clean, bent dead-on spec, and turned around faster than anyone else would quote.",
    platform: "google",
    color: "#8a6d5a",
  },
  {
    name: "Clare Dale",
    text: "Kingpin Engineering took on the aluminium welding job three other shops knocked back. Toolboxes and tanks finished to a great standard. Professional, straight-talking and built to last.",
    platform: "google",
    color: "#347FCC",
  },
  {
    name: "Jackson Seymour",
    text: "Truck body mod and a cracked chassis repair - Kingpin reinforced and re-plated the lot and kept me in the loop the whole way. One truck set up for the next job. Can't recommend them enough.",
    platform: "google",
    color: "#2a323c",
  },
  {
    name: "Tracie Starkey",
    text: "Responsive and professional service from the Kingpin Engineering team. They repaired our split skip bins and had them back in the field fast - no waiting on a container load like the big importers.",
    platform: "google",
    color: "#d4830f",
  },
  {
    name: "Ravee",
    text: "Kingpin rebuilt the hydraulic drive on our mixer and sorted the Danfoss motor when no one else would touch it. Back turning within days and running smoother than ever. Genuine, straight-up team.",
    platform: "google",
    color: "#1a3a6b",
  },
  {
    name: "Varun",
    text: "Ordered a custom agitator drum and the finish is spot on - 3D designed, balanced and tested before it left the workshop. Communication was clear the whole way through. Highly recommend Kingpin.",
    platform: "google",
    color: "#22a447",
  },
  {
    name: "Kalal",
    text: "Had a cracked subframe and worn roller tracks repaired on short notice. Kingpin got us back on the road fast and the workmanship is heavy-duty. Fair pricing and no mucking around.",
    platform: "facebook",
    color: "#8a6d5a",
  },
  {
    name: "Lenett",
    text: "Crown Concrete has used Kingpin Engineering across our fleet - drum refurbishments, pump repairs and general fabrication. Reliable, quick turnaround and proper engineering every time. Couldn't ask for better.",
    platform: "google",
    color: "#347FCC",
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
      {/* faint welding imagery backdrop */}
      <div className="absolute inset-0 opacity-25 [background:url('/images/service-custom-welding.png')_center/cover]" />
      <div className="relative mx-auto max-w-[1320px] px-6">
        <Reveal as="div" className="text-center">
          <h2 className="inline-block font-heading text-5xl font-bold uppercase text-white">
            Our Reviews
            <span className="mx-auto mt-3 block h-2 w-44 bg-[#347FCC]" />
          </h2>
        </Reveal>

        <Reveal as="div" delay={120} className="relative mt-12">
          {/* arrows */}
          <button
            aria-label="Previous reviews"
            onClick={() => setStart((s) => (s - 1 + REVIEWS.length) % REVIEWS.length)}
            className="absolute -left-1 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-md bg-[#347FCC] text-white transition-colors hover:bg-[#2A70BA]"
          >
            <ArrowRightIcon className="size-5 rotate-180" />
          </button>
          <button
            aria-label="Next reviews"
            onClick={() => setStart((s) => (s + 1) % REVIEWS.length)}
            className="absolute -right-1 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-md bg-[#347FCC] text-white transition-colors hover:bg-[#2A70BA]"
          >
            <ArrowRightIcon className="size-5" />
          </button>

          <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-3">
            {visible.map((r, i) => (
              <div
                key={`${r.name}-${i}`}
                className={`${i > 0 ? "hidden md:flex" : "flex"} flex-col rounded-2xl bg-white p-6 shadow-lg`}
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
                <span className="mt-4 block h-px w-full bg-[#347FCC]" />
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 flex justify-center gap-2">
          {REVIEWS.map((r, idx) => (
            <button
              key={r.name}
              aria-label={`Go to review set ${idx + 1}`}
              onClick={() => setStart(idx)}
              className={`size-3 rounded-full transition-colors ${
                idx === start ? "bg-[#347FCC]" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
