import { createPageMetadata, SEO_PAGES } from "@/lib/seo";
import { PageStructuredData } from "@/components/PageStructuredData";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon, MailIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import {
  ADDRESS,
  ADDRESS_QUERY,
  EMAIL,
  EMERGENCY_NOTE,
  MAP_LINK,
  OPENING_HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  mapEmbedUrl,
} from "@/lib/site";

export const metadata = createPageMetadata(SEO_PAGES.contact);

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageStructuredData page={SEO_PAGES.contact} />
        {/* Hero */}
        <section className="bg-topo px-6 pt-[150px] pb-14 text-center">
          <div className="mx-auto max-w-[1320px]">
            <PageBreadcrumbs page={SEO_PAGES.contact} />
          </div>
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
            <a href={`tel:${PHONE_TEL}`} className="font-bold text-[#1e1e1e] hover:text-[#347FCC]">
              {PHONE_DISPLAY}
            </a>{" "}
            or fill out the form below to get in touch or request a free quote.
          </p>

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
                  <a href={`tel:${PHONE_TEL}`} className="font-semibold text-white/90 hover:text-white">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg bg-[#347FCC] p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-black/15">
                  <MailIcon className="size-6 text-white" />
                </span>
                <div className="min-w-0">
                  <p className="font-heading text-2xl font-bold uppercase text-white">Email</p>
                  <a href={`mailto:${EMAIL}`} className="font-semibold text-white/90 hover:text-white">
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg bg-[#347FCC] p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-black/15">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="size-6 text-white"
                    aria-hidden
                  >
                    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="font-heading text-2xl font-bold uppercase text-white">Workshop</p>
                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white/90 hover:text-white"
                  >
                    {ADDRESS}
                  </a>
                </div>
              </div>

              <div className="rounded-lg bg-[#1e1e1e] p-5">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#347FCC]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="size-6 text-white"
                      aria-hidden
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3.5 2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <p className="font-heading text-2xl font-bold uppercase text-white">
                    Opening Hours
                  </p>
                </div>
                <dl className="mt-4 divide-y divide-white/12 border-y border-white/12">
                  {OPENING_HOURS.map((h) => (
                    <div
                      key={h.days}
                      className="flex items-baseline justify-between gap-4 py-2.5"
                    >
                      <dt className="font-heading text-lg font-bold uppercase tracking-wide text-white/70">
                        {h.days}
                      </dt>
                      <dd className="font-semibold text-white">{h.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 font-heading text-lg font-bold uppercase tracking-wide text-[#347FCC]">
                  {EMERGENCY_NOTE}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Map */}
        <Reveal as="section" className="h-[420px] w-full">
          <iframe
            title={`Kingpin Engineering workshop location - ${ADDRESS}`}
            src={mapEmbedUrl(ADDRESS_QUERY, 15)}
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
