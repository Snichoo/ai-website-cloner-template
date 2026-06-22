import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingQuote } from "@/components/FloatingQuote";
import { AssessmentBar } from "@/components/AssessmentBar";
import { CtaStrip } from "@/components/CtaStrip";
import { ServiceAreas } from "@/components/ServiceAreas";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { FacebookIcon, GoogleIcon, StarIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Roofing Solutions & Roof Replacement — Queensland Quality Roofing",
  description:
    "Metal roofing, re-roofing, Decramastic tile to tin replacement, roof inspections and skylight replacement across Southeast Queensland.",
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
        <p className="mt-1 text-[11px] font-bold tracking-wide text-[#1e1e1e]">5.0 RATING</p>
      </div>
    </div>
  );
}

function P({ dark, children }: { dark?: boolean; children: React.ReactNode }) {
  return (
    <p className={cn("mt-4 text-[18px] leading-relaxed", dark ? "text-white/85" : "text-[#1e1e1e]")}>
      {children}
    </p>
  );
}

function SubHead({ dark, children }: { dark?: boolean; children: React.ReactNode }) {
  return (
    <div className="mt-6 inline-block bg-gradient-to-r from-[#f6d9dd] to-transparent px-3 py-1.5">
      <h3 className={cn("font-heading text-2xl font-bold uppercase", dark ? "text-[#1e1e1e]" : "text-[#1e1e1e]")}>
        {children}
      </h3>
    </div>
  );
}

function CtaWhite() {
  return (
    <Link
      href="#quote"
      className="mt-7 inline-block rounded-md bg-white px-8 py-3 font-heading text-lg font-bold uppercase tracking-wide text-[#c21d2f] shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-transform hover:scale-105"
    >
      Get a Free Quote
    </Link>
  );
}

function ServiceSection({
  dark,
  media,
  mediaSide = "right",
  children,
}: {
  dark?: boolean;
  media: React.ReactNode;
  mediaSide?: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <section className={cn("relative overflow-hidden", dark ? "bg-[#2a2a2a]" : "bg-topo")}>
      {dark && (
        <div className="absolute inset-0 opacity-10 [background:url('/images/portfolio-4.jpg')_center/cover]" />
      )}
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div className={mediaSide === "left" ? "lg:order-1" : "lg:order-2"}>{media}</div>
        <div className={mediaSide === "left" ? "lg:order-2" : "lg:order-1"}>{children}</div>
      </div>
    </section>
  );
}

const photo = (src: string, alt: string, ratio = "aspect-[4/3]") => (
  <div className={cn("overflow-hidden rounded-2xl shadow-lg", ratio)}>
    <Image src={src} alt={alt} width={620} height={465} className="h-full w-full object-cover" />
  </div>
);

export default function RoofingSolutionsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-topo px-6 pt-[150px] pb-12 text-center">
          <p className="font-heading text-xl font-bold uppercase tracking-wide text-[#c21d2f]">Services</p>
          <h1 className="mt-1 font-heading text-5xl font-bold uppercase sm:text-6xl">
            <span className="text-[#1e1e1e]">Roof</span>{" "}
            <span className="text-[#c21d2f]">Replacement</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-[18px] leading-relaxed text-[#1e1e1e]">
            Welcome to the heart of Queensland Quality Roofing - where our expertise lies in roof
            replacements. Whether you need a sleek metal roof replacement to bring life back to your
            home, a Decramastic tile to tin roof replacement due to old age damages or wear and tear -
            our expert team only uses the best materials available, precise installation and
            coordinated project management to ensure every customer receives nothing but the best -
            all backed by our 10-year warranty and installation guarantee.
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <RatingBadge icon={<GoogleIcon className="size-7" />} />
            <RatingBadge icon={<FacebookIcon className="size-7 text-[#1877F2]" />} />
          </div>
        </section>

        {/* Assessment form */}
        <AssessmentBar overlap={false} />

        {/* Metal Roofing — light, image right */}
        <ServiceSection media={photo("/images/metal-roofing.png", "Metal Colorbond roofing")} mediaSide="right">
          <h2 className="font-heading text-5xl font-bold uppercase">
            <span className="text-[#c21d2f]">Metal</span> <span className="text-[#1e1e1e]">Roofing</span>
          </h2>
          <P>
            We install premium Colorbond&reg; steel roofing engineered for Queensland&rsquo;s
            subtropical climate - lightweight, corrosion-resistant and backed by our 10-year warranty +
            Installation guarantee.
          </P>
          <SubHead>
            <span className="text-[#1e1e1e]">Why </span>
            <span className="text-[#c21d2f]">You Need</span>
            <span className="text-[#1e1e1e]"> Metal Roofing</span>
          </SubHead>
          <P>
            Metal roofing isn&rsquo;t just durable - it&rsquo;s smart. It reflects solar heat to slash
            cooling bills, stands strong against hail, wind and fire, and delivers decades of virtually
            maintenance-free protection.
          </P>
          <CtaWhite />
        </ServiceSection>

        {/* Brand strip */}
        <section className="overflow-hidden border-y border-black/5 bg-white py-8">
          <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6">
            {["brand-1", "brand-2", "brand-3", "brand-4", "brand-5", "brand-6"].map((b) => (
              <Image key={b} src={`/images/${b}.png`} alt="Trusted roofing brand" width={150} height={56} className="h-12 w-auto object-contain" />
            ))}
          </div>
        </section>

        {/* Re-Roofing — dark, slider left */}
        <ServiceSection
          dark
          mediaSide="left"
          media={<BeforeAfterSlider before="/images/reroof-before.webp" after="/images/reroof-after.webp" />}
        >
          <p className="font-heading text-xl font-bold uppercase text-[#c21d2f]">Re-Roofing</p>
          <h2 className="font-heading text-5xl font-bold uppercase">
            <span className="text-[#c21d2f]">Fresh Roof</span>
            <span className="text-white">, Fresh Start</span>
          </h2>
          <P dark>
            When we replace your roof, we&rsquo;ll strip off the old sheet&rsquo;s, replace any damaged
            timbers and underlay, and install durable Colorbond&reg; steel or premium tiles - finished
            with precision flashings and backed by our 10-year workmanship guarantee.
          </P>
          <SubHead>
            <span className="text-[#1e1e1e]">Why </span>
            <span className="text-[#c21d2f]">You Need</span>
            <span className="text-[#1e1e1e]"> a Roof Replacement</span>
          </SubHead>
          <P dark>
            Old roofs can end up costing more than they protect. How many times can you place a bandaid
            on a wound that needs stitches? A replacement stops leaks before they become disasters,
            improves energy efficiency, boosts your home&rsquo;s value, and refreshes its look - all
            while giving you decades of strong, low-maintenance protection.
          </P>
          <CtaWhite />
        </ServiceSection>

        {/* Decramastic — light, slider right */}
        <ServiceSection
          mediaSide="right"
          media={<BeforeAfterSlider before="/images/decra-before.webp" after="/images/decra-after.webp" />}
        >
          <h2 className="font-heading text-5xl font-bold uppercase leading-[1.02]">
            <span className="text-[#1e1e1e]">Decramastic Tile to Tin</span>
            <br />
            <span className="text-[#c21d2f]">Roof Replacement</span>
          </h2>
          <P>
            Transform your old, heavy Decramastic Tiled roof into a sleek, modern Colorbond&reg; steel
            roof. Engineered for Queensland&rsquo;s tough climate, giving you a lighter, stronger, and
            longer-lasting roof - backed by our 10-year warranty + Installation guarantee.
          </P>
          <SubHead>
            <span className="text-[#c21d2f]">Why Choose</span>
            <span className="text-[#1e1e1e]"> Decramastic Tile to Tin?</span>
          </SubHead>
          <P>
            Decramastic Tile roofs age fast - they crack, absorb water, and demand constant upkeep. A
            metal replacement not only slashes maintenance but also improves energy efficiency, boosts
            storm resistance, and instantly modernises the look of your home. The result? A roof that
            protects better, looks sharper, and lasts for decades.
          </P>
          <CtaWhite />
        </ServiceSection>

        <CtaStrip />

        {/* Roof Inspections — light, image right */}
        <ServiceSection media={photo("/images/inspections.webp", "Roof inspection and health check")} mediaSide="right">
          <h2 className="font-heading text-5xl font-bold uppercase leading-[1.02]">
            <span className="text-[#1e1e1e]">Roof Inspections</span>{" "}
            <span className="text-[#c21d2f]">&amp; Health Checks</span>
          </h2>
          <P>
            Keep your roof performing at its best with our thorough inspections and health checks. Our
            technicians inspect tiles, flashings, gutters, underlay and timbers, test for leaks and
            blockages, and deliver a straightforward report so you can address any issues before they
            worsen.
          </P>
          <SubHead>
            <span className="text-[#1e1e1e]">Why </span>
            <span className="text-[#c21d2f]">You Need</span>
            <span className="text-[#1e1e1e]"> Regular Inspections</span>
          </SubHead>
          <P>
            A proactive roof check uncovers hidden damage, keeps your warranties and insurance valid,
            and lets you plan repairs early&mdash;saving you money and giving you complete peace of mind.
          </P>
          <CtaWhite />
        </ServiceSection>

        {/* Skylight — dark, image left */}
        <ServiceSection dark mediaSide="left" media={photo("/images/skylight.webp", "Skylight replacement")}>
          <h2 className="font-heading text-5xl font-bold uppercase">
            <span className="text-[#c21d2f]">Skylight</span> <span className="text-white">Replacement</span>
          </h2>
          <P dark>
            Enhance your living spaces with our skylight replacement service. We remove outdated or
            leaking units, install premium energy-efficient skylights complete with new flashings and
            seals, and back our work with a 10-year workmanship guarantee.
          </P>
          <SubHead>
            <span className="text-[#1e1e1e]">Why </span>
            <span className="text-[#c21d2f]">You Need</span>
            <span className="text-[#1e1e1e]"> Skylight Replacement</span>
          </SubHead>
          <P dark>
            Old skylights can fog, leak or let heat escape&mdash;upgrading restores clear natural light,
            prevents water ingress and drafts, and boosts your home&rsquo;s energy efficiency for years
            to come.
          </P>
          <CtaWhite />
        </ServiceSection>

        <ServiceAreas />
        <Footer />
      </main>
      <FloatingQuote />
    </>
  );
}
