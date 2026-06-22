import Image from "next/image";

export function MeetTheTeam() {
  return (
    <section id="team" className="scroll-mt-28 bg-white py-20">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-6 lg:grid-cols-2">
        {/* Red branded photo card */}
        <div className="relative overflow-hidden rounded-3xl bg-[#c21d2f]">
          <Image
            src="/images/logo-white.png"
            alt=""
            width={600}
            height={200}
            className="pointer-events-none absolute inset-x-6 top-10 z-0 w-[85%] opacity-10"
          />
          <div className="absolute left-6 top-6 z-10 rounded-full bg-black/30 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            Est. 2023
          </div>
          <Image
            src="/images/ricky-team.png"
            alt="Ricky Javsnik, Founder of Queensland Quality Roofing, standing outdoors in a grey company polo shirt with arms crossed, smiling confidently."
            width={497}
            height={622}
            className="relative z-[5] mx-auto h-full w-auto object-contain"
          />
        </div>

        <div>
          <h2 className="font-heading text-5xl font-bold leading-[0.95] sm:text-6xl">
            <span className="text-[#c21d2f]">Meet the Team</span>
            <br />
            <span className="text-[#1e1e1e]">Behind Queensland Quality Roofing</span>
          </h2>
          <p className="mt-6 body-text">
            At Queensland Quality Roofing, we&rsquo;re more than just roofers -
            we&rsquo;re a team dedicated to setting the standard of what a roofing
            company should be. Founded by{" "}
            <strong className="text-[#1e1e1e]">Ricky Javsnik</strong>, our
            business was built on three non-negotiables:{" "}
            <strong className="text-[#1e1e1e]">
              unrivalled quality, transparency, and genuine customer care
            </strong>
            .
          </p>

          <div className="mt-6 inline-block bg-gradient-to-r from-[#f6d9dd] to-transparent px-4 py-1.5">
            <h3 className="font-heading text-2xl font-bold uppercase">
              <span className="text-[#1e1e1e]">Meet Ricky Javsnik - </span>
              <span className="text-[#c21d2f]">Founder &amp; Director</span>
            </h3>
          </div>

          <div className="mt-4 space-y-4 body-text">
            <p>
              Ricky started Queensland Quality Roofing with a simple but powerful
              vision:{" "}
              <strong className="text-[#1e1e1e]">
                to revolutionise an industry that too often cuts corners, lacks
                quality, and disregards trust.
              </strong>{" "}
              With years of hands-on experience, he saw firsthand how homeowners
              were let down by poor service and low standards - and he knew there
              had to be a better way.
            </p>
            <p>
              With that, the evolution of the new standard for the roofing trade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
