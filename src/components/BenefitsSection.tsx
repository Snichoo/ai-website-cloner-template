const items = [
  "Clear Call To Action",
  "Social Proof (Reviews)",
  "Showcasing Your Work",
  "Modern, Beautiful Design",
  "Clear Messaging (no information dump)",
  "Mobile Optimised",
  "Lightning Fast Load Speed",
];

export function BenefitsSection() {
  return (
    <section
      className="w-full"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-8">
        <div className="flex flex-col items-center text-center">
          <h2
            className="mez-h2"
            style={{ maxWidth: 1080, textTransform: "uppercase" }}
          >
            <span style={{ color: "#F59E0B" }}>HIGH-CONVERTING</span> WEBSITES 📐
          </h2>
        </div>

        <div
          className="mx-auto mt-10 rounded-3xl p-7 sm:p-10"
          style={{
            maxWidth: 640,
            background: "#FFFFFF",
            border: "1px solid #ECECEC",
            boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
          }}
        >
          <ul className="flex flex-col gap-4">
            {items.map((label) => (
              <li
                key={label}
                className="flex items-center gap-4"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 17,
                  color: "#1C1C1C",
                  lineHeight: 1.4,
                }}
              >
                <span
                  className="flex shrink-0 items-center justify-center rounded-full"
                  style={{
                    width: 30,
                    height: 30,
                    background:
                      "linear-gradient(180deg, #4EE891 0%, #33D478 60%, #1FAE5C 100%)",
                    boxShadow: "0 4px 10px rgba(51,212,120,0.35)",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span style={{ fontWeight: 600 }}>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex justify-center">
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
