import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function MeetTheTeam() {
  return (
    <section id="team" className="scroll-mt-28 bg-white py-10">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-6 lg:grid-cols-2">
        {/* Branded photo card */}
        <Reveal as="div" direction="left" className="relative overflow-hidden bg-[#347FCC]">
          <Image
            src="/images/kingpin-engineering-logo.png"
            alt=""
            width={1220}
            height={400}
            className="pointer-events-none absolute inset-x-6 top-10 z-0 w-[85%] opacity-10"
          />
          <div className="absolute left-6 top-6 z-10 rounded-full bg-black/30 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            Est. 2023
          </div>
          <Image
            src="/images/john-smith-director.png"
            alt="John Smith, Director and Nominee Supervisor at Kingpin Engineering."
            width={1122}
            height={1402}
            className="relative z-[5] h-full w-full object-cover"
          />
        </Reveal>

        <Reveal as="div" direction="right" delay={120}>
          <h2 className="font-heading text-5xl font-bold leading-[0.95] sm:text-6xl">
            <span className="text-[#347FCC]">Meet the Team</span>
            <br />
            <span className="text-[#1e1e1e]">Behind Kingpin Engineering</span>
          </h2>
          <p className="mt-6 body-text">
            At Kingpin Engineering, we&rsquo;re more than just fabricators - we&rsquo;re a
            team dedicated to setting the standard for what an engineering
            workshop should be. Founded by our director, the business was built
            on three non-negotiables:{" "}
            <strong className="text-[#1e1e1e]">
              precision engineering, honest workmanship, and genuine customer
              care
            </strong>
            .
          </p>

          <div className="mt-6 inline-block bg-gradient-to-r from-[#cfe6ff] via-[#eef7ff] to-transparent px-4 py-1.5">
            <h3 className="font-heading text-2xl font-bold uppercase text-[#1e1e1e]">
              <span>Meet John Smith - </span>
              <span className="text-[#347FCC]">Founder &amp; Director</span>
            </h3>
          </div>

          <div className="mt-4 space-y-4 body-text">
            <p>
              Kingpin Engineering started with a simple but powerful
              vision:{" "}
              <strong className="text-[#1e1e1e]">
                to be the one workshop a customer could trust with everything -
                from a precision-engineered agitator drum to the one-off repairs
                most shops turn away.
              </strong>{" "}
              With years of hands-on experience, our founder saw firsthand how
              customers were bounced from supplier to supplier and let down by
              low standards - and knew there had to be a better way.
            </p>
            <p>
              With that, the new standard for heavy fabrication and concrete
              engineering was born.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
