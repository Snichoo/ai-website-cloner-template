interface TimelineEntry {
  label: string;
  body: string;
}

const timeline: TimelineEntry[] = [
  {
    label: "Age 14:",
    body: "Made first $5 online selling IG shoutouts. Learned that content + systems = leverage.",
  },
  {
    label: "Age 18-19:",
    body: "Built a 20K TikTok account, 50m views. Learned content.",
  },
  {
    label: "2023-2024:",
    body: "Worked in growth & product at a tech startup. Learned how real companies operate, and where they break.",
  },
  {
    label: "2024-2025:",
    body: "Built bespoke AI software and automations for medium enterprise clients. Shipped multiple mobile apps and web platforms — sold one for $120K.",
  },
  {
    label: "2025:",
    body: "Formalized MezCorp. Built AI-native systems for real clients.",
  },
  {
    label: "Today:",
    body: "22 years old. Running an AI consultancy. I use the system I'm teaching you every single day. My daily planning takes 30 minutes. My AI knows my clients, my SOPs, my priorities. I'm not selling you a course. I'm teaching you the system that runs my business.",
  },
];

export function FounderStory() {
  return (
    <section
      className="w-full"
      style={{ paddingTop: 100, paddingBottom: 100 }}
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
              Who&apos;s Building This?
            </span>
          </div>

          <h2 className="mez-h2 mt-5" style={{ maxWidth: 820 }}>
            <span style={{ color: "#9A9A9A" }}>
              I Run My Business From These Systems
            </span>
            <br />
            This Isn&apos;t Theory
          </h2>

          <p className="mez-body mt-5" style={{ maxWidth: 560 }}>
            Tools don&apos;t solve bottlenecks. Systems do. You&apos;re not more
            productive. You&apos;re just busy in new ways.
          </p>
        </div>

        {/* My Story — dark glassmorphism card */}
        <div
          className="relative mx-auto mt-14 rounded-3xl p-10 md:p-14"
          style={{
            maxWidth: 820,
            background:
              "linear-gradient(180deg, rgba(55,55,55,0.92) 0%, rgba(30,30,30,0.92) 100%)",
            backdropFilter: "blur(18px) saturate(140%)",
            WebkitBackdropFilter: "blur(18px) saturate(140%)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 30px 60px -20px rgba(0,0,0,0.45), 0 18px 36px -12px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <h3
            className="text-center"
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontSize: "34px",
              fontWeight: 500,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            My Story
          </h3>

          <ul className="mt-8 flex flex-col gap-6">
            {timeline.map((entry) => (
              <li
                key={entry.label}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "17px",
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.65,
                  textAlign: "center",
                }}
              >
                <span style={{ color: "#FFFFFF", fontWeight: 700 }}>
                  {entry.label}
                </span>{" "}
                {entry.body}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
