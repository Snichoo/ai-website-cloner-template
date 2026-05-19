import { CheckIcon } from "@/components/icons";

const features: string[] = [
  "90-Minute Strategy Audit",
  "Opportunity Map + Bottleneck Analysis",
  "Context System Build (business, clients, SOPs, voice)",
  "3 High-Leverage Workflows",
  "Team Training on Context Engineering",
  "Context System Build (business, clients, SOPs, voice)",
  "Complete Handoff Documentation(SOPs + Looms)",
  "60 Days Async Support + Check-in Call",
  "Quick Win Install (Day 1)",
];

export function PricingSection() {
  return (
    <section
      className="w-full bg-[#F5F5F5]"
      style={{ paddingTop: 100, paddingBottom: 100 }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-5">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "lowercase",
              color: "#6E6E6E",
            }}
          >
            investment
          </span>
          <h2 className="mez-h2 mt-3" style={{ maxWidth: 880 }}>
            Stop Figuring It Out Yourself. Start Operating on AI.
          </h2>
          <p className="mez-body mt-4">
            Limited spots per quarter. Hop on a call.
          </p>
        </div>

        {/* Pricing card */}
        <div
          className="mx-auto mt-16 rounded-[28px] p-8 md:p-14"
          style={{
            backgroundColor: "#1C1C1C",
            color: "#FFFFFF",
            maxWidth: 720,
            boxShadow: "0 24px 48px rgba(0,0,0,0.18)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontSize: "32px",
              fontWeight: 500,
              color: "#FFFFFF",
              letterSpacing: "-1.28px",
              lineHeight: 1.1,
            }}
          >
            The AI-Native Sprint
          </h3>
          <p
            className="mt-2 pb-6"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "16px",
              color: "rgba(255,255,255,0.6)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            I will install AI Native systems into your business.
          </p>

          <ul className="mt-6 flex flex-col gap-3.5">
            {features.map((f, i) => (
              <li
                key={i}
                className="flex items-center gap-3"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                <span
                  className="flex shrink-0 items-center justify-center rounded-full"
                  style={{
                    width: 22,
                    height: 22,
                    backgroundColor: "#33D478",
                  }}
                >
                  <CheckIcon className="h-3.5 w-3.5 text-white" />
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* LIMITED badge */}
          <div className="mt-6">
            <span
              className="inline-flex items-center rounded-full"
              style={{
                backgroundColor: "rgba(255,71,38,0.12)",
                color: "#FF4726",
                padding: "8px 14px",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              LIMITED spots available
            </span>
          </div>

          {/* CTA */}
          <a
            href="#book"
            className="mt-6 flex w-full items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(180deg, #2EB6E0 0%, #279AC0 50%, #1F84A8 100%)",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              padding: "14px 28px",
              borderRadius: "14px",
              boxShadow:
                "0 16px 40px rgba(39, 154, 192, 0.45), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
