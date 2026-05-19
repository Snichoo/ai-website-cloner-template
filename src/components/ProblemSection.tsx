interface ProblemCard {
  title: string;
  body: string;
  image: string;
  bg: string;
  dark?: boolean;
}

const cards: ProblemCard[] = [
  {
    title: "ChatGPT Doesn't Know Your Business",
    body: "Generic answers. Every time you ask something, you start from zero.",
    image: "/images/Screenshot 2026-04-12 005753.png",
    bg: "#F1F1F1",
  },
  {
    title: "You're Still the Bottleneck",
    body: "Every decision lives in your head. Your team can't move without you.",
    image: "/images/Screenshot 2026-04-12 005823.png",
    bg: "#F1F1F1",
  },
  {
    title: "Your Tools Don't Talk to Each Other",
    body: "8 subscriptions. None of them know what the others are doing.",
    image: "/images/Screenshot 2026-04-12 005857.png",
    bg: "#272727",
    dark: true,
  },
];

export function ProblemSection() {
  return (
    <section
      className="relative w-full"
      style={{ paddingTop: 100, paddingBottom: 80 }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-5">
        {/* Header — cyan pill eyebrow */}
        <div className="flex flex-col items-center text-center">
          <div
            className="inline-flex items-center rounded-full bg-white px-4 py-2"
            style={{
              border: "1px solid #E5E5E5",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#279AC0",
              }}
            >
              The Real Problem
            </span>
          </div>
          <h2 className="mez-h2 mt-5" style={{ maxWidth: 820 }}>
            <span style={{ color: "#9A9A9A" }}>You&apos;ve Added AI</span>
            <br />
            But Nothing Changed
          </h2>
          <p className="mez-body mt-5" style={{ maxWidth: 640 }}>
            Tools don&apos;t solve bottlenecks. Systems do. You&apos;re not more
            productive. You&apos;re just busy in new ways.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group flex flex-col overflow-hidden rounded-3xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: card.bg,
                border: "1px dashed #D6D6D6",
                minHeight: 420,
              }}
            >
              {/* Image spans full width of the card */}
              <div className="relative w-full">
                <img
                  src={card.image}
                  alt=""
                  className="block h-auto w-full object-cover"
                />
              </div>

              {/* Title + body */}
              <div className="px-8 pb-8 pt-6">
                <h3
                  style={{
                    fontFamily: "var(--font-archivo), sans-serif",
                    fontSize: "26px",
                    fontWeight: 500,
                    color: card.dark ? "#FFFFFF" : "#1C1C1C",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "17px",
                    color: card.dark ? "#9A9A9A" : "#6E6E6E",
                    lineHeight: 1.55,
                  }}
                >
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
