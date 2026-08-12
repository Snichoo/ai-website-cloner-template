import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { SuburbHero } from "@/components/SuburbHero";
import { AssessmentBar } from "@/components/AssessmentBar";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { SuburbSpotlight } from "@/components/SuburbSpotlight";
import { MeetTheTeam } from "@/components/MeetTheTeam";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ValuesStrip } from "@/components/ValuesStrip";
import { OurWorkInAction } from "@/components/OurWorkInAction";
import { CtaStrip } from "@/components/CtaStrip";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { getSuburb, SUBURBS, suburbPath } from "@/lib/suburbs";

type Params = { params: Promise<{ suburb: string }> };

/** Only the suburbs we have written copy for get a page. */
export const dynamicParams = false;

export function generateStaticParams() {
  return SUBURBS.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { suburb: slug } = await params;
  const suburb = getSuburb(slug);
  if (!suburb) return {};

  return {
    title: suburb.metaTitle,
    description: suburb.metaDescription,
    alternates: { canonical: suburbPath(suburb.slug) },
    openGraph: {
      title: suburb.metaTitle,
      description: suburb.metaDescription,
      url: suburbPath(suburb.slug),
      siteName: "Kingpin Engineering",
      images: ["/images/og-image.png"],
      type: "website",
    },
  };
}

export default async function SuburbPage({ params }: Params) {
  const { suburb: slug } = await params;
  const suburb = getSuburb(slug);
  if (!suburb) notFound();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <SuburbHero suburb={suburb} />
        <AssessmentBar suburbName={suburb.name} />
        <Reviews />
        <Services suburb={suburb} />
        <SuburbSpotlight suburb={suburb} />
        <MeetTheTeam />
        <WhyChooseUs suburb={suburb} />
        <ValuesStrip />
        <OurWorkInAction />
        <CtaStrip suburb={suburb} />
        <ServiceAreas activeSlug={suburb.slug} />
        <Faq suburbName={suburb.name} extraFaqs={suburb.faqs} />
        <Footer suburb={suburb} />
      </main>
    </>
  );
}
