import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { SuburbHero } from "@/components/SuburbHero";
import { AssessmentBar } from "@/components/AssessmentBar";
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
import { getSuburb, SUBURBS } from "@/lib/suburbs";
import { createPageMetadata, suburbSeoPage } from "@/lib/seo";
import { PageStructuredData } from "@/components/PageStructuredData";

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

  return createPageMetadata(suburbSeoPage(suburb));
}

export default async function SuburbPage({ params }: Params) {
  const { suburb: slug } = await params;
  const suburb = getSuburb(slug);
  if (!suburb) notFound();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageStructuredData page={suburbSeoPage(suburb)} />
        <SuburbHero suburb={suburb} />
        <AssessmentBar suburbName={suburb.name} />

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
