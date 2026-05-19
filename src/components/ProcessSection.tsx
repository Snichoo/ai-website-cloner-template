interface Step {
  number: string;
  emoji: string;
  title: string;
  subtitle: string;
}

const steps: Step[] = [
  {
    number: "01",
    emoji: "☎️",
    title: "Quick Call",
    subtitle: "20 minutes. We learn your business and goals.",
  },
  {
    number: "02",
    emoji: "🎨",
    title: "Design + Build",
    subtitle: "Live in 1 to 2 weeks. Designed and built by us.",
  },
  {
    number: "03",
    emoji: "🚀",
    title: "Launch",
    subtitle: "Full handover with a walkthrough so you stay in control.",
  },
];

export function ProcessSection() {
  return (
    <section
      className="w-full bg-[#F5F5F5]"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-8">
        <div className="flex flex-col items-center text-center">
          <h2
            className="mez-h2"
            style={{ maxWidth: 1080, textTransform: "uppercase" }}
          >
            3 SIMPLE STEPS
            <br />
            <span style={{ color: "#F59E0B" }}>FROM &ldquo;MEH&rdquo; TO MONEY</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-16 w-full max-w-[960px]">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 hidden sm:block"
            style={{
              top: 56,
              height: 2,
              backgroundImage:
                "repeating-linear-gradient(to right, #D1D1D1 0 8px, transparent 8px 16px)",
              marginLeft: "16.6%",
              marginRight: "16.6%",
            }}
          />

          <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="relative flex items-center justify-center rounded-full"
                  style={{
                    width: 112,
                    height: 112,
                    background: "#FFFFFF",
                    border: "2px solid #ECECEC",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                  }}
                >
                  <span style={{ fontSize: 48, lineHeight: 1 }}>
                    {step.emoji}
                  </span>
                  <span
                    className="absolute -top-2 -right-2 flex items-center justify-center rounded-full text-white"
                    style={{
                      width: 36,
                      height: 36,
                      background: "#F59E0B",
                      fontFamily: "var(--font-archivo), sans-serif",
                      fontSize: 14,
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      boxShadow: "0 4px 12px rgba(245,158,11,0.35)",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="mt-6"
                  style={{
                    fontFamily: "var(--font-archivo), sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#1C1C1C",
                    letterSpacing: "-0.5px",
                    lineHeight: 1.15,
                    textTransform: "uppercase",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: 17,
                    fontWeight: 500,
                    color: "#1C1C1C",
                    lineHeight: 1.5,
                    maxWidth: 280,
                  }}
                >
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#book"
            className="mez-orange-cta inline-flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 16,
              fontWeight: 600,
              padding: "14px 28px",
              borderRadius: 14,
            }}
          >
            Start With Step 1 →
          </a>
        </div>
      </div>
    </section>
  );
}
