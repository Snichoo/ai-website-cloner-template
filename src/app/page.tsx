import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { AssessmentBar } from "@/components/AssessmentBar";
import { Reviews } from "@/components/Reviews";
import { OurWorkInAction } from "@/components/OurWorkInAction";
import { MeetTheTeam } from "@/components/MeetTheTeam";
import { CtaStrip } from "@/components/CtaStrip";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ValuesStrip } from "@/components/ValuesStrip";
import { Services } from "@/components/Services";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <AssessmentBar />
        <Reviews />
        <Services />
        <MeetTheTeam />
        <WhyChooseUs />
        <ValuesStrip />
        <OurWorkInAction />
        <CtaStrip />
        <ServiceAreas />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
