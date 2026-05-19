import { CheckIcon, XIcon } from "@/components/icons";

interface Row {
  us: string;
  them: string;
}

const rows: Row[] = [
  { us: "$950 one-off", them: "$5,000+" },
  { us: "1 to 2 weeks", them: "6 to 12 weeks" },
  { us: "Built by Sam in Australia 🇦🇺", them: "Offshore developers" },
  { us: "Uniquely designed by a human", them: "Cookie cutter template + AI slop" },
  { us: "Local SEO done right", them: "Basic SEO" },
  { us: "Leads sent straight to your phone", them: "Leads lost in your email" },
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
                Built By Sam
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
                  key={row.us}
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

        <div className="mx-auto mt-10 flex max-w-[760px] flex-col items-center">
          <a
            href="#book"
            className="mez-orange-cta inline-flex w-full items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
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
          <p
            className="mt-3 text-center"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "#DC2626",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            ⚡ Limited spots available this month
          </p>
        </div>
      </div>
    </section>
  );
}
