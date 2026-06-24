import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon, MailIcon, FacebookIcon, GoogleIcon, StarIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us - Kingpin Engineering",
  description:
    "Call 0424 242 424 or request a free quote from Kingpin Engineering.",
};

function RatingBadge({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid size-9 place-items-center">{icon}</span>
      <div className="leading-none">
        <div className="flex gap-0.5 text-[#fbbc05]">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="size-3" />
          ))}
        </div>
        <p className="mt-1 text-[11px] font-bold tracking-wide text-[#1e1e1e]">5.0 RATING</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-topo px-6 pt-[150px] pb-14 text-center">
          <p className="reveal-up font-heading text-xl font-bold uppercase tracking-wide text-[#347FCC]">
            Contact Us
          </p>
          <h1
            className="reveal-up mx-auto mt-1 max-w-4xl font-heading text-5xl font-bold uppercase leading-[1.02] sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            <span className="text-[#347FCC]">Contact Us</span>{" "}
            <span className="text-[#1e1e1e]">or Request a Free Quote</span>
          </h1>
          <p
            className="reveal-up mx-auto mt-5 max-w-2xl text-[18px] leading-relaxed text-[#1e1e1e]"
            style={{ animationDelay: "160ms" }}
          >
            Call us on{" "}
            <a href="tel:0424242424" className="font-bold text-[#1e1e1e] hover:text-[#347FCC]">
              0424 242 424
            </a>{" "}
            or fill out the form below to get in touch or request a free quote.
          </p>
          <div
            className="reveal-up mt-8 flex justify-center gap-8"
            style={{ animationDelay: "240ms" }}
          >
            <RatingBadge icon={<GoogleIcon className="size-7" />} />
            <RatingBadge icon={<FacebookIcon className="size-7 text-[#1877F2]" />} />
          </div>
        </section>

        {/* Form + contact details */}
        <section className="relative overflow-hidden bg-[#2a2a2a] py-16">
          <div className="absolute inset-0 opacity-25 [background:url('/images/slide2-1.jpg')_center/cover]" />
          <div className="relative mx-auto grid max-w-[1320px] items-start gap-10 px-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal as="div" direction="left">
              <ContactForm />
            </Reveal>

            <Reveal as="div" direction="right" delay={120} className="space-y-4 lg:max-w-[410px]">
              <div className="flex items-center gap-4 rounded-lg bg-[#347FCC] p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-black/15">
                  <PhoneIcon className="size-6 text-white" />
                </span>
                <div className="min-w-0">
                  <p className="font-heading text-2xl font-bold uppercase text-white">Phone</p>
                  <a href="tel:0424242424" className="font-semibold text-white/90 hover:text-white">
                    0424 242 424
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg bg-[#347FCC] p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-black/15">
                  <MailIcon className="size-6 text-white" />
                </span>
                <div className="min-w-0">
                  <p className="font-heading text-2xl font-bold uppercase text-white">Email</p>
                  <a href="mailto:contact@kingpinengineering.com.au" className="font-semibold text-white/90 hover:text-white">
                    contact@kingpinengineering.com.au
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Map */}
        <Reveal as="section" className="h-[420px] w-full">
          <iframe
            title="Kingpin Engineering workshop location - 438 Hanson Rd, Wingfield SA 5013"
            src="https://www.google.com/maps?q=438+Hanson+Rd+Wingfield+SA+5013&z=15&output=embed"
            className="size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>

        <Footer />
      </main>
    </>
  );
}
