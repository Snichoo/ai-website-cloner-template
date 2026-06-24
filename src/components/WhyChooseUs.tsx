import Image from "next/image";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-7 text-[#347FCC]" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="m8 12 2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhyChooseUs() {
  return (
    <section className="bg-topo pb-32 pt-10">
      <div className="mx-auto grid max-w-[1320px] items-start gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-5xl font-bold sm:text-6xl">
            <span className="text-[#1e1e1e]">Why </span>
            <span className="text-[#347FCC]">Choose Us</span>
          </h2>

          <div className="mt-6 space-y-5 body-text">
            <p>
              With engineering experience built over years on the workshop floor,
              every job at Kingpin starts with a clear plan - so you know the
              scope, the spec and the timeframe before we cut a single piece of
              steel.
            </p>
            <p>
              That means we deliver the utmost care on every job we take on, from
              a 16m&sup3; agitator drum to a one-off repair, without ever
              sacrificing attention to detail.
            </p>

            <div className="flex gap-3">
              <span className="mt-1.5 size-4 shrink-0 rounded-full bg-[#347FCC]" />
              <p>
                <strong className="text-[#1e1e1e]">Backed by Certification:</strong>{" "}
                We wear our quality with confidence. You&rsquo;re trusting us with
                serious equipment, so the least we can do is back it - with
                material certificates, welding procedure documentation and
                Australian-Standard engineering on every build that calls for it.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="mt-1.5 size-4 shrink-0 rounded-full bg-[#347FCC]" />
              <p>
                <strong className="text-[#1e1e1e]">One Workshop, Every Job:</strong>{" "}
                The big concrete OEMs won&rsquo;t touch your skip bin. The bin
                factories won&rsquo;t roll a spiral blade. We do both - plus the
                cutting, bending, welding and mending others turn away - under
                one roof, on one invoice.
              </p>
            </div>
          </div>

          {/* Skilled workers + checklist card */}
          <div className="mt-8 flex max-w-xl flex-row items-center gap-5 rounded-2xl bg-white p-6 shadow-sm sm:gap-8 sm:p-8">
            <div className="flex flex-col items-center border-r border-black/10 pr-5 sm:pr-8">
              <Image
                src="/images/skilled-workers-icon.png"
                alt=""
                width={835}
                height={920}
                className="size-20 object-contain"
              />
              <p className="mt-3 text-center font-heading text-2xl font-bold uppercase leading-tight text-[#1e1e1e]">
                Skilled
                <br />
                Workers
              </p>
            </div>
            <ul className="space-y-4">
              {["Precision Engineering", "Fair Pricing", "Genuine Customer Care"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 font-heading text-xl font-medium uppercase leading-tight text-[#1e1e1e] sm:text-2xl">
                    <CheckIcon />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Team photo */}
        <div className="relative">
          <div className="overflow-hidden">
            <Image
              src="/images/why-choose-us.png"
              alt="Kingpin Engineering team member standing outdoors in a grey company polo shirt with arms crossed."
              width={825}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-[-1px] bg-[#347FCC] px-5 py-3">
            <h3 className="font-heading text-2xl font-bold uppercase text-white">
              John Smith - Director, Nominee Supervisor
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
