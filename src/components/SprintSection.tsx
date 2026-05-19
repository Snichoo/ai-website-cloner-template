interface PhaseCardData {
  number: string;
  title: string;
  bullets: string[];
  whyMatters?: string;
  video: string;
}

const phases: PhaseCardData[] = [
  {
    number: "Phase 01",
    title: "The Audit",
    bullets: [
      "90-minute strategy session: I audit workflows, identify bottlenecks, map your top 5 AI opportunities",
      "1: Opportunity Map (what to build, why, in what order)",
      "2: Quick Win Install (context foundation + 1-2 automations live same day)",
    ],
    whyMatters:
      'Why this matters: Most people start with tools. We start with strategy. You see results Day 1. You\'ll leave thinking: "I can actually do this."',
    video: "duDJJ4Z5LhUAgyi7Uj93YaTu5Nk.mp4",
  },
  {
    number: "Phase 02",
    title: "The Build",
    bullets: [
      "1: Context System — Build your business context WITH you (priorities, clients, processes, voice). Train your team on context engineering and tool selection.",
      "2: Workflow Automation — Automate 2-3 high-leverage workflows. Build 1-2 custom internal tools. You watch me build, then build with me. Full documentation. 60-minute handoff—walk through everything, show you how to extend it.",
    ],
    video: "tDauuGW9fU1t2R1F8mBnqaB4EWM.mp4",
  },
  {
    number: "Phase 03",
    title: "Support",
    bullets: [
      "Async support: Direct Slack/WhatsApp access for troubleshooting and quick wins",
      "One check-in call: 30 minutes at Day 14-21 to review and optimize",
      "Referral network: Need big custom builds? I'll connect you to specialists I trust",
    ],
    whyMatters:
      "Why this matters: You're not abandoned. I'm here until the system sticks and you hit the guarantee.",
    video: "MIdFxQzavPyFInquveYeshzc.mp4",
  },
];

export function SprintSection() {
  return (
    <section
      className="w-full bg-[#F5F5F5]"
      style={{ paddingTop: 100, paddingBottom: 80 }}
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
            how it works
          </span>
          <h2 className="mez-h2 mt-3" style={{ maxWidth: 900 }}>
            The 30-Day AI-Native Sprint
          </h2>
          <p className="mez-body mt-6" style={{ maxWidth: 720 }}>
            This isn&apos;t a course. It&apos;s a strategic implementation
            sprint. You&apos;re learning by building, not watching videos.
          </p>
        </div>

        {/* Phase cards */}
        <div className="mt-16 flex flex-col gap-6">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="grid grid-cols-1 items-center gap-8 rounded-[28px] p-6 md:grid-cols-2 md:p-8"
              style={{
                background: "transparent",
                border: "1px dashed #D6D6D6",
              }}
            >
              {/* Video */}
              <div
                className="overflow-hidden rounded-2xl bg-[#1C1C1C]"
                style={{ aspectRatio: "16 / 11" }}
              >
                <video
                  src={`/videos/${phase.video}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <span
                  style={{
                    fontFamily: "var(--font-archivo), sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "lowercase",
                    color: "#6E6E6E",
                  }}
                >
                  {phase.number}
                </span>
                <h3
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-archivo), sans-serif",
                    fontSize: "32px",
                    fontWeight: 500,
                    color: "#1C1C1C",
                    letterSpacing: "-1.28px",
                    lineHeight: 1.1,
                  }}
                >
                  {phase.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {phase.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "15px",
                        color: "#6E6E6E",
                        lineHeight: 1.6,
                      }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                {phase.whyMatters && (
                  <p
                    className="mt-5 rounded-xl"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "14px",
                      fontStyle: "italic",
                      color: "#525252",
                      backgroundColor: "#F5F5F5",
                      padding: "16px 18px",
                      lineHeight: 1.6,
                    }}
                  >
                    {phase.whyMatters}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="#book"
            className="inline-flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
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
            Book A Call
          </a>
        </div>
      </div>
    </section>
  );
}
