import Link from "next/link";

export function CtaStrip() {
  return (
    <section className="bg-topo-red py-16">
      <div className="mx-auto max-w-[1000px] px-6 text-center">
        <h2 className="font-heading text-4xl font-bold uppercase leading-[1.05] text-[#1e1e1e] sm:text-5xl">
          Get Your <span className="text-white">Free</span> Roof Assessment &amp;
          Quote Now!
        </h2>
        <p className="mt-3 text-base text-white/95">
          Our team is here to help answer any questions you may have!
        </p>
        <Link
          href="#quote"
          className="mt-7 inline-block rounded-md bg-white px-8 py-3 font-heading text-lg font-bold uppercase tracking-wide text-[#c21d2f] shadow-lg transition-transform hover:scale-105"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}
