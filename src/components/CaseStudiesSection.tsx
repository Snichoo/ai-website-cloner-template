interface HeadlinePart {
  text: string;
  highlight?: boolean;
}

interface Result {
  image: string;
  headline: HeadlinePart[];
  company: string;
  website?: string;
}

const resultsLeft: Result[] = [
  {
    image: "/images/results/Roof-Replacement-Melbourne.webp",
    headline: [
      { text: "HALVED", highlight: true },
      { text: " COST PER LEAD IN 2 MONTHS" },
    ],
    company: "Singh Roofing",
    website: "https://singhroofing.com.au/",
  },
  {
    image: "/images/results/old-mate-plumbing.jpg",
    headline: [
      { text: "600%", highlight: true },
      { text: " INCREASE IN LEAD QUALITY / ROI IN THE FIRST MONTH" },
    ],
    company: "Old Mate Plumbing Co.",
    website: "https://www.oldmateplumbingco.com.au/",
  },
];

const resultsRight: Result[] = [
  {
    image: "/images/results/corporate-gifting.png",
    headline: [
      { text: "340%", highlight: true },
      { text: " INCREASE IN ONLINE ORDERS WITHIN 3 MONTHS" },
    ],
    company: "You Are Appreciated Gifting Co.",
    website: "https://happyboxstore.com/",
  },
  {
    image: "/images/results/enviro-energy.jpg",
    headline: [
      { text: "5X LOWER COST", highlight: true },
      { text: " PER CONVERSION THAN INDUSTRY STANDARD ON FIRST MONTH" },
    ],
    company: "EnviroEnergy",
    website: "https://www.enviroenergy.net.au/",
  },
];

function ResultCard({ result }: { result: Result }) {
  const imageEl = (
    <img
      src={result.image}
      alt={result.company}
      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  );
  const wrapClass =
    "relative block h-[250px] w-full overflow-hidden rounded-2xl";

  return (
    <div className="group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2.5 hover:scale-[1.03]">
      {result.website ? (
        <a
          href={result.website}
          target="_blank"
          rel="noopener noreferrer"
          className={wrapClass}
        >
          {imageEl}
        </a>
      ) : (
        <div className={wrapClass}>{imageEl}</div>
      )}
      <div className="px-1 pb-2 pt-5">
        <h3
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontSize: 22,
            fontWeight: 700,
            color: "#1C1C1C",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            textTransform: "uppercase",
          }}
        >
          {result.headline.map((part, i) => (
            <span
              key={i}
              style={{ color: part.highlight ? "#F59E0B" : "#1C1C1C" }}
            >
              {part.text}
            </span>
          ))}
        </h3>
        <p
          className="mt-2"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 13,
            color: "#6E6E6E",
          }}
        >
          {result.company}
        </p>
      </div>
    </div>
  );
}

export function CaseStudiesSection() {
  return (
    <section
      className="w-full bg-[#F5F5F5]"
      style={{ paddingTop: 96, paddingBottom: 96 }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-8">
        <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <h2
            className="mez-h2"
            style={{ textTransform: "uppercase", maxWidth: 1080 }}
          >
            DELIVERING
            <br />
            <span style={{ color: "#F59E0B" }}>IMPACTFUL RESULTS</span>
          </h2>
          <p
            className="mt-6"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 16,
              color: "#6E6E6E",
              lineHeight: 1.6,
              maxWidth: 620,
            }}
          >
            See how we&apos;ve helped plumbers, electricians, roofers, and
            other service businesses turn strategy into serious growth.
          </p>
        </div>

        <div className="mx-auto mt-14 grid w-full max-w-[920px] grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            {resultsLeft.map((r, i) => (
              <ResultCard key={i} result={r} />
            ))}
          </div>
          <div className="flex flex-col gap-8 lg:mt-20">
            {resultsRight.map((r, i) => (
              <ResultCard key={i} result={r} />
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#book"
            className="mez-orange-cta inline-flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              padding: "14px 28px",
              borderRadius: "14px",
            }}
          >
            Book A Free Call →
          </a>
        </div>
      </div>
    </section>
  );
}
