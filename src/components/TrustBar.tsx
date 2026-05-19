const CARDS = [
  "lbzyKiYqW7h1lE84ArAzu9SEPbc.png",
  "ZVVBX7ScDPWwIB1NJ4musHwycqY.png",
  "a8ps6lRTP1SSDEX2VlkMt7BiGVY.png",
  "VcqwU56xIxPYExu0xegTTYVZ5Zk.png",
  "I07B640gXvlMMY6xxdqlgLgoVZ0.png",
];

export function TrustBar() {
  // Duplicate the list so the marquee can loop seamlessly (translate -50%).
  const track = [...CARDS, ...CARDS];

  return (
    <section
      className="relative w-full"
      style={{ paddingTop: 30, paddingBottom: 60 }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-5 pt-4">
        <p
          className="mb-6 text-center"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "14px",
            fontStyle: "italic",
            color: "#6E6E6E",
          }}
        >
          Trusted by founders who are now AI-Native
        </p>
      </div>
      <div className="mez-marquee-wrap">
        <div className="mez-marquee">
          {track.map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={`/images/${src}`}
              alt=""
              className="shrink-0"
              style={{
                height: 70,
                width: "auto",
                maxWidth: 260,
                objectFit: "contain",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
