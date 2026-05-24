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
  );
}
