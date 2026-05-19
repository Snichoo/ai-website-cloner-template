interface ProblemCard {
  emoji: string;
  title: string;
  body: string;
}

const cards: ProblemCard[] = [
  {
    emoji: "💸",
    title: "Wasted Ad Spend",
    body: "Burning cash on Google or Meta ads with almost nothing to show for it.",
  },
  {
    emoji: "🎣",
    title: "Cheap, Unqualified Leads",
    body: "Tyre kickers and ghosters. Nobody serious about actually buying.",
  },
  {
    emoji: "📉",
    title: "Leads Aren't Converting",
    body: "Plenty of clicks. Plenty of traffic. Almost no real sales.",
  },
  {
    emoji: "🔍",
    title: "Not Showing Up In The Searches That Matter",
    body: "You're invisible for the suburbs and keywords your customers actually type, or stuck off page 1.",
  },
];

export function ProblemSection() {
  return (
    <section
      className="relative w-full"
      style={{ paddingTop: 80, paddingBottom: 72 }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-8">
        <div className="flex flex-col items-center text-center">
          <h2
            className="mez-h2"
            style={{ maxWidth: 1080, textTransform: "uppercase" }}
          >
            <span style={{ color: "#F59E0B" }}>ARE YOU EXPERIENCING</span>
            <br />
            ANY OF THESE?
          </h2>
        </div>

        <div className="mx-auto mt-14 grid w-full max-w-[820px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group flex flex-col overflow-hidden rounded-3xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#FFFFFF",
                border: "1px solid #ECECEC",
                boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
              }}
            >
              <div className="flex flex-col items-center px-7 py-7 text-center">
                <span style={{ fontSize: 36, lineHeight: 1 }}>
                  {card.emoji}
                </span>
                <h3
                  className="mt-4"
                  style={{
                    fontFamily: "var(--font-archivo), sans-serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#1C1C1C",
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
                    fontSize: 15,
                    color: "#6E6E6E",
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
