const testimonialVideo = "testimonial-0520.mp4";

export function TestimonialsSection() {
  return (
    <section
      className="w-full"
      style={{ paddingTop: 72, paddingBottom: 72 }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-8">
        <div className="flex flex-col items-center text-center">
          <h2
            className="mez-h2"
            style={{ maxWidth: 1080, textTransform: "uppercase" }}
          >
            DON&apos;T TAKE OUR WORD,
            <br />
            <span style={{ color: "#F59E0B" }}>TAKE THEIRS 💬</span>
          </h2>
        </div>

        <div className="mx-auto mt-14 w-full max-w-[360px]">
          <article
            className="overflow-hidden rounded-3xl"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E5E5",
              boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
            }}
          >
            <div
              className="relative w-full overflow-hidden bg-[#1C1C1C]"
              style={{ aspectRatio: "9 / 16" }}
            >
              <video
                src={`/videos/${testimonialVideo}`}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                style={{
                  background: "rgba(0,0,0,0.55)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                <span
                  style={{ fontSize: 11, lineHeight: 1, color: "#FFFFFF" }}
                >
                  ▶
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Testimonial
                </span>
              </div>
            </div>
          </article>
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
