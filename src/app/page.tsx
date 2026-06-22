import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { AssessmentBar } from "@/components/AssessmentBar";
import { Reviews } from "@/components/Reviews";
import { SolarOffer } from "@/components/SolarOffer";
import { MeetTheTeam } from "@/components/MeetTheTeam";
import { CtaStrip } from "@/components/CtaStrip";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ValuesStrip } from "@/components/ValuesStrip";
import { Portfolio } from "@/components/Portfolio";
import { BrandStrip } from "@/components/BrandStrip";
import { Services } from "@/components/Services";
import { AdditionalServices } from "@/components/AdditionalServices";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { FloatingQuote } from "@/components/FloatingQuote";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <AssessmentBar />
        <Reviews />
        <SolarOffer />
        <MeetTheTeam />
        <CtaStrip />
        <WhyChooseUs />
        <ValuesStrip />
        <Portfolio />
        <BrandStrip />
        <Services />
        <AdditionalServices />
        <ServiceAreas />
        <CtaStrip />
        <Faq />
        <Footer />
      </main>
      <FloatingQuote />
    </>
  );
}
