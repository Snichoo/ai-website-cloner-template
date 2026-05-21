import { CheckIcon, XIcon } from "@/components/icons";
import { CountdownTimer } from "@/components/CountdownTimer";

interface Row {
  us: React.ReactNode;
  them: string;
}

const rows: Row[] = [
  {
    us: (
      <span className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
        <span
          style={{
            color: "#9A9A9A",
            textDecoration: "line-through",
            textDecorationColor: "#DC2626",
            fontWeight: 600,
          }}
        >
          $1,350
        </span>
        <span style={{ color: "#16A34A", fontWeight: 800 }}>$950</span>
        <span style={{ color: "#1C1C1C", fontWeight: 700 }}>one-off</span>
        <span
          style={{
            background: "#16A34A",
            color: "#FFFFFF",
            fontSize: 9,
            fontWeight: 800,
            letterSpacing: "0.08em",
            padding: "2px 6px",
            borderRadius: 4,
          }}
        >
          30% OFF
        </span>
      </span>
    ),
    them: "$5,000+",
  },
  { us: "Live in 1 to 2 weeks", them: "Live in 6 to 12 weeks" },
  { us: "Australian based, no outsourcing", them: "Offshore developers" },
  { us: "Uniquely designed by a human", them: "Cookie cutter template + AI slop" },
  { us: "Unlimited pages", them: "Capped + per-page fees" },
  { us: "Unlimited revisions", them: "Pay per change request" },
  { us: "Local SEO done right", them: "Basic SEO" },
  { us: "Leads sent where you want", them: "Leads lost in your email" },
  { us: "Your existing domain", them: "Forced new domain" },
  { us: "30 day post launch support", them: "Ghost mode after launch" },
  { us: "Money back guarantee", them: "No refund" },
];

const GREEN = "#16A34A";
const RED = "#DC2626";

export function PricingSection() {
  return (
    <section
      id="book"
      className="w-full bg-[#F5F5F5]"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <h2
            className="mez-h2"
            style={{ maxWidth: 1080, textTransform: "uppercase" }}
          >
            READY TO
            <br />
            <span style={{ color: "#F59E0B" }}>WIN MORE CUSTOMERS?</span>
          </h2>
        </div>

        <div
          className="relative mx-auto mt-12 overflow-hidden rounded-3xl"
          style={{
            maxWidth: 760,
            background: "#FFFFFF",
            border: "1px solid #ECECEC",
            boxShadow: "0 24px 48px rgba(0,0,0,0.08)",
          }}
        >
          {/* Deal banner */}
          <div
            className="flex flex-col items-center justify-between gap-4 px-5 py-4 sm:flex-row sm:px-7"
            style={{
              background: "#FAF7F2",
              color: "#1C1C1C",
              borderBottom: "1px solid #ECECEC",
            }}
          >
            <div className="flex flex-col items-center sm:items-start">
              <span
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#DC2626",
                }}
              >
                Ending Soon
              </span>
              <span
                className="mt-1 flex items-baseline gap-2"
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.05,
                }}
              >
                <span style={{ fontSize: 24, color: "#16A34A" }}>30% OFF</span>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#666666",
                  }}
                >
                  · Save $400
                </span>
              </span>
            </div>
            <div className="flex flex-col items-center sm:items-end">
              <span
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#9A9A9A",
                  marginBottom: 6,
                }}
              >
                Offer Ends In
              </span>
              <CountdownTimer />
            </div>
          </div>

          {/* Header */}
          <div className="grid grid-cols-2">
            <div
              className="relative flex flex-col items-center justify-center px-3 py-5 text-center sm:py-6"
              style={{ background: "#1C1C1C", color: "#FFFFFF" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#F59E0B",
                }}
              >
                Beacon X Digital
              </span>
              <span
                className="mt-1"
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                }}
              >
                Done Right
              </span>
            </div>
            <div
              className="flex flex-col items-center justify-center px-3 py-5 text-center sm:py-6"
              style={{ background: "#FAFAFA" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#9A9A9A",
                }}
              >
                Everyone Else
              </span>
              <span
                className="mt-1"
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  color: "#1C1C1C",
                }}
              >
                Typical Agency
              </span>
            </div>
          </div>

          {/* Center divider between columns */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2"
              style={{
                width: 1,
                background: "#ECECEC",
              }}
            />

            <ul>
              {rows.map((row, idx) => (
                <li
                  key={idx}
                  className="grid grid-cols-2 items-stretch"
                  style={{
                    borderTop: idx === 0 ? "none" : "1px solid #F0F0F0",
                  }}
                >
                  <div
                    className="flex items-center gap-2.5 px-4 py-3.5 sm:gap-3 sm:px-5 sm:py-4"
                    style={{ background: "rgba(245,158,11,0.05)" }}
                  >
                    <span
                      className="flex shrink-0 items-center justify-center rounded-full"
                      style={{
                        width: 22,
                        height: 22,
                        background: GREEN,
                        color: "#FFFFFF",
                      }}
                    >
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#1C1C1C",
                        letterSpacing: "-0.005em",
                        lineHeight: 1.3,
                      }}
                    >
                      {row.us}
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2.5 px-4 py-3.5 sm:gap-3 sm:px-5 sm:py-4"
                    style={{ background: "#FFFFFF" }}
                  >
                    <span
                      className="flex shrink-0 items-center justify-center rounded-full"
                      style={{
                        width: 22,
                        height: 22,
                        background: "#FFFFFF",
                        border: `1.5px solid ${RED}`,
                        color: RED,
                      }}
                    >
                      <XIcon className="h-3 w-3" />
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#1C1C1C",
                        letterSpacing: "-0.005em",
                        lineHeight: 1.3,
                      }}
                    >
                      {row.them}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#book"
            className="mez-orange-cta inline-flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 17,
              fontWeight: 700,
              padding: "16px 36px",
              borderRadius: 14,
            }}
          >
            Book Your Free Call →
          </a>
        </div>
      </div>
    </section>
  );
}
