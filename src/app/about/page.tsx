import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reviews } from "@/components/Reviews";
import { MeetTheTeam } from "@/components/MeetTheTeam";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceAreas } from "@/components/ServiceAreas";
import { AssessmentBar } from "@/components/AssessmentBar";
import { CtaStrip } from "@/components/CtaStrip";
import { FacebookIcon, GoogleIcon, StarIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us - Kingpin Engineering",
  description:
    "Meet the team behind Kingpin Engineering. Read our reviews, see why customers choose us and find out the areas we service.",
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
        <p className="mt-1 text-[11px] font-bold tracking-wide text-[#1e1e1e]">
          5.0 RATING
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-topo px-6 pt-[150px] pb-40 text-center">
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
            service is straight. Here&rsquo;s who we are, what people say, and why
            they choose us.
          </p>
          <div
            className="reveal-up mt-8 flex justify-center gap-8"
            style={{ animationDelay: "240ms" }}
          >
            <RatingBadge icon={<GoogleIcon className="size-7" />} />
            <RatingBadge icon={<FacebookIcon className="size-7 text-[#1877F2]" />} />
          </div>
        </section>

        <AssessmentBar />

        <Reviews />
        <MeetTheTeam />
        <WhyChooseUs />
        <CtaStrip />
        <ServiceAreas />
        <Footer />
      </main>
    </>
  );
}
