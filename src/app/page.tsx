import { FaqSection } from "@/components/FaqSection";
import { FounderStory } from "@/components/FounderStory";
import { HeroSection } from "@/components/HeroSection";
import { Nav } from "@/components/Nav";
import { PricingSection } from "@/components/PricingSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { SprintSection } from "@/components/SprintSection";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-clip bg-[#F5F5F5]">
      {/* Vertical dotted guide rails — flank content column across the page */}
      <div aria-hidden="true" className="mez-rail mez-rail--left" />
      <div aria-hidden="true" className="mez-rail mez-rail--right" />

      <Nav />
      <HeroSection />
      <hr className="mez-sep" />
      <TrustBar />
      <hr className="mez-sep" />
      <ProblemSection />
      <hr className="mez-sep" />
      <SolutionSection />
      <hr className="mez-sep" />
      <FounderStory />
      <hr className="mez-sep" />
      <SprintSection />
      <hr className="mez-sep" />
      <PricingSection />
      <hr className="mez-sep" />
      <FaqSection />
    </main>
  );
}
