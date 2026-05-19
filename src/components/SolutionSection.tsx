interface Deliverable {
  title: string;
  body: string;
  dark?: boolean;
}

const deliverables: Deliverable[] = [
  {
    title: "Deliverable 1: AI Systems Installed in Your Business",
    body: "Context foundations, workflow automations, and internal tools built around your specific clients, workflows, and priorities.",
    dark: true,
  },
  {
    title: "Deliverable 2: Full Documentation SOPs, Walkthroughs, Everything",
    body: "Every system gets documented. Written SOPs, Loom walkthroughs, troubleshooting guides.",
  },
  {
    title: "Deliverable 3: AI-Native Fluency for You and Your Team",
    body: "Your team learns how to actually use the tools. Not just today, but how to extend and adapt as AI improves.",
  },
  {
    title: "Deliverable 4: 60 Days of Support",
    body: "Direct access to me for troubleshooting, optimisation, and check-ins after handoff. If something breaks, I'm there.",
    dark: true,
  },
];

export function SolutionSection() {
  return (
    <section
      className="w-full"
      style={{ paddingTop: 100, paddingBottom: 120 }}
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
          <h2 className="mez-h2 mt-5" style={{ maxWidth: 900 }}>
            AI Systems Built for Your Business.
            <br />
            Not a Template. Not a Course.
          </h2>
          <p className="mez-body mt-5" style={{ maxWidth: 720 }}>
            Everything is custom. Everything is yours. And your team will know
            how to extend it.
          </p>
        </div>

        {/* Deliverable cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {deliverables.map((d) => (
            <article
              key={d.title}
              className="relative flex flex-col rounded-3xl p-9 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: d.dark
                  ? "linear-gradient(180deg, rgba(55,55,55,0.92) 0%, rgba(30,30,30,0.92) 100%)"
                  : "transparent",
                backdropFilter: d.dark ? "blur(18px) saturate(140%)" : undefined,
                WebkitBackdropFilter: d.dark
                  ? "blur(18px) saturate(140%)"
                  : undefined,
                border: d.dark
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px dashed #D6D6D6",
                minHeight: 240,
                boxShadow: d.dark
                  ? "0 30px 60px -20px rgba(0,0,0,0.45), 0 18px 36px -12px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)"
                  : "none",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "28px",
                  fontWeight: 500,
                  color: d.dark ? "#FFFFFF" : "#1C1C1C",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                {d.title}
              </h3>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "17px",
                  color: d.dark ? "#9A9A9A" : "#6E6E6E",
                  lineHeight: 1.55,
                }}
              >
                {d.body}
              </p>
            </article>
          ))}
        </div>

        {/* Guarantee callout — light card, dashed border */}
        <div
          className="mt-6 rounded-3xl p-9 md:p-12"
          style={{
            background: "transparent",
            border: "1px dashed #D6D6D6",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontSize: "34px",
              fontWeight: 500,
              color: "#1C1C1C",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            The Guarantee (Contextualised)
          </h3>
          <p
            className="mt-4"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "18px",
              color: "#6E6E6E",
              lineHeight: 1.65,
            }}
          >
            Every engagement starts with a deep audit of your business. If I
            can&apos;t identify clear ROI — measurable time saved, costs
            reduced, or revenue unlocked — I won&apos;t take your money.
          </p>
          <p
            className="mt-4"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "18px",
              color: "#6E6E6E",
              lineHeight: 1.65,
            }}
          >
            This isn&apos;t a blanket promise. It&apos;s specific to YOUR
            operations, YOUR bottlenecks, YOUR numbers. If the audit shows the
            opportunity, we proceed. If it doesn&apos;t, we shake hands and you
            walk away with a free strategy session.
          </p>
          <p
            className="mt-6 pt-4"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "15px",
              fontStyle: "italic",
              color: "#9A9A9A",
              lineHeight: 1.6,
              borderTop: "1px dashed #E5E5E5",
            }}
          >
            Framing note: This functions as both a guarantee AND a qualification
            filter. &ldquo;I won&apos;t take your money&rdquo; = two-way
            selection. Avoids cheesy &ldquo;5 hours/week or your money
            back&rdquo; vibes. Contextualised to their business, as discussed.
          </p>
        </div>
      </div>
    </section>
  );
}
