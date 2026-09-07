import { createPageMetadata, SEO_PAGES } from "@/lib/seo";
import { PageStructuredData } from "@/components/PageStructuredData";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MeetTheTeam } from "@/components/MeetTheTeam";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceAreas } from "@/components/ServiceAreas";
import { AssessmentBar } from "@/components/AssessmentBar";
import { CtaStrip } from "@/components/CtaStrip";

export const metadata = createPageMetadata(SEO_PAGES.about);

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageStructuredData page={SEO_PAGES.about} />
        {/* Hero */}
        <section className="bg-topo px-6 pt-[150px] pb-40 text-center">
          <div className="mx-auto max-w-[1320px]">
            <PageBreadcrumbs page={SEO_PAGES.about} />
          </div>
          <p className="reveal-up font-heading text-xl font-bold uppercase tracking-wide text-[#347FCC]">
            About Us
          </p>
          <h1
            className="reveal-up mx-auto mt-1 max-w-4xl font-heading text-5xl font-bold uppercase leading-[0.98] sm:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            <span className="text-[#1e1e1e]">The Team Behind</span>{" "}
            <span className="text-[#347FCC]">Kingpin Engineering</span>
          </h1>
          <p
            className="reveal-up mx-auto mt-5 max-w-3xl text-[18px] leading-relaxed text-[#1e1e1e]"
            style={{ animationDelay: "160ms" }}
          >
            We&rsquo;re a hands-on engineering and fabrication workshop built on
            doing the job properly. From concrete mixers and skip bins to custom
            one-off builds, our customers come back because the work lasts and the
            service is straight. Here&rsquo;s who we are, how we work, and why
            customers choose us.
          </p>

        </section>

        <AssessmentBar />

        <MeetTheTeam />
        <WhyChooseUs />
        <CtaStrip />
        <ServiceAreas />
        <Footer />
      </main>
    </>
  );
}
