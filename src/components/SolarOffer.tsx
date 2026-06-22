import Image from "next/image";
import Link from "next/link";

export function SolarOffer() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-5xl font-bold leading-[0.95] sm:text-6xl">
            <span className="text-[#c21d2f]">Did Someone Say</span>
            <br />
            <span className="text-[#1e1e1e]">Solar?</span>{" "}
            <span className="text-3xl font-bold text-[#1e1e1e] sm:text-4xl">
              3.52KW SYSTEM
            </span>
          </h2>

          <div className="mt-6 space-y-4 body-text">
            <p>
              We&rsquo;re excited to give back to our fellow Queenslanders with an
              exclusive offer! For a limited time, get a{" "}
              <strong className="text-[#1e1e1e]">
                Discounted 3.52kW solar system
              </strong>{" "}
              (worth over $5,000){" "}
              <strong className="text-[#1e1e1e]">for only $3300</strong> with
              every new roof installation.
            </p>
            <p>
              It&rsquo;s our way of saying thank you for your continued support
              &mdash; and what&rsquo;s better than lowering your electricity bill
              with savings back in your pocket?
            </p>
            <p>
              Spots are limited, so don&rsquo;t miss out on this opportunity to
              save big while upgrading your home!
            </p>
          </div>

          <Link
            href="#quote"
            className="mt-8 inline-block rounded-md bg-white px-8 py-3 font-heading text-lg font-bold uppercase tracking-wide text-[#c21d2f] shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-transform hover:scale-105"
          >
            Get a Free Quote
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/hero-slide-3.jpg"
            alt="Solar panels installed on a newly replaced roof"
            width={2000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function OfferNote() {
  return (
    <div className="bg-[#ededed]">
      <div className="mx-auto flex max-w-[1320px] items-center justify-center gap-4 px-6 py-4">
        <p className="text-center text-xs text-[#555]">
          Please note this offer is subject to availability; promo ends June 30th
          or once booked out past August.
        </p>
      </div>
    </div>
  );
}
