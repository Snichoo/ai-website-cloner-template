import Image from "next/image";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5 text-[#c21d2f]" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="m8 12 2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WorkerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#c21d2f" strokeWidth="1.5" className="size-10" aria-hidden>
      <circle cx="12" cy="8" r="3" />
      <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
      <path d="M8 5a4 4 0 0 1 8 0" />
    </svg>
  );
}

export function WhyChooseUs() {
  return (
    <section className="bg-topo py-20">
      <div className="mx-auto grid max-w-[1320px] items-start gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-5xl font-bold sm:text-6xl">
            <span className="text-[#1e1e1e]">Why </span>
            <span className="text-[#c21d2f]">Choose Us</span>
          </h2>

          <div className="mt-6 space-y-5 body-text">
            <p>
              With a decade of roofing experience; our nominee supervisor designs
              a unique job &lsquo;pre-plan&rsquo; ensuring it is a pleasant
              experience,
            </p>
            <p>
              This allows us to deliver the utmost care with every single client
              we are blessed to work with, without ever sacrificing attention to
              detail.
            </p>

            <div className="flex gap-3">
              <span className="mt-1.5 size-4 shrink-0 rounded-full bg-[#c21d2f]" />
              <p>
                <strong className="text-[#1e1e1e]">10 Year warranty:</strong> We
                wear our quality with confidence. You&rsquo;re trusting us with an
                important investment, the least we could do is back our quality by
                a warranty that proves it.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="mt-1.5 size-4 shrink-0 rounded-full bg-[#c21d2f]" />
              <p>
                <strong className="text-[#1e1e1e]">Installation guarantee:</strong>{" "}
                For every week we go over our agreed timeframe for on-site
                installation, our customers receive $500 cash back!
              </p>
            </div>
          </div>

          {/* Skilled workers + checklist card */}
          <div className="mt-8 flex max-w-md items-center gap-6 rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center border-r border-black/10 pr-6">
              <WorkerIcon />
              <p className="mt-2 text-center font-heading text-lg font-bold uppercase leading-tight text-[#1e1e1e]">
                Skilled
                <br />
                Workers
              </p>
            </div>
            <ul className="space-y-3">
              {["Quality Craftsmanship", "Fair Pricing", "Customer Care"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 font-heading text-base font-medium uppercase text-[#1e1e1e]">
                    <CheckIcon />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Liam photo */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/liam.webp"
              alt="Liam Garner, Director and Nominee Supervisor of Queensland Quality Roofing, standing outdoors in a grey company polo shirt with arms crossed."
              width={825}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-[-1px] bg-gradient-to-r from-[#f6d9dd] to-transparent px-5 py-3">
            <h3 className="font-heading text-2xl font-bold uppercase text-[#1e1e1e]">
              Liam Garner - Director, Nominee Supervisor
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
