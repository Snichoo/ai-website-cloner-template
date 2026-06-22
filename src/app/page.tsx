<<<<<<< HEAD
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
=======
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { FaqSection } from "@/components/FaqSection";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { HeroSection } from "@/components/HeroSection";
import { Nav } from "@/components/Nav";
import { PortfolioSection } from "@/components/PortfolioSection";
import { PricingSection } from "@/components/PricingSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-clip bg-[#F5F5F5]">
      {/* Vertical dotted guide rails flanking the content column */}
      <div aria-hidden="true" className="mez-rail mez-rail--left" />
      <div aria-hidden="true" className="mez-rail mez-rail--right" />

      <Nav />
      <HeroSection />
      <hr className="mez-sep" />
      <TrustBar />
      <hr className="mez-sep" />
      <ProblemSection />
      <hr className="mez-sep" />
      <PricingSection />
      <hr className="mez-sep" />
      <PortfolioSection />
      <hr className="mez-sep" />
      <TestimonialsSection />
      <hr className="mez-sep" />
      <GoogleReviewsSection />
      <hr className="mez-sep" />
      <ProcessSection />
      <hr className="mez-sep" />
      <CaseStudiesSection />
      <hr className="mez-sep" />
      <FaqSection />
    </main>
>>>>>>> 8544f7810dd0a5551dc4ecd0c64f124e004e51b1
  );
}
