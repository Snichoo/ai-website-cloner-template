interface GoogleReview {
  name: string;
  initial: string;
  color: string;
  date: string;
  text: string;
}

const reviews: GoogleReview[] = [
  {
    name: "Catherine Lacey",
    initial: "C",
    color: "#EF4444",
    date: "20/12/2025",
    text: "Beacon X recently built a website for our new business and the whole process was fantastic from start to finish. Incredibly efficient, well organised, smooth and stress free to deal with the whole way through. They made everything easy and delivered a result we're really happy with. Thrilled with the outcome and grateful for their expertise.",
  },
  {
    name: "Rod Shaw",
    initial: "R",
    color: "#3B82F6",
    date: "08/10/2025",
    text: "Fantastic experience from the very beginning. The team were patient with us, especially given we're not very tech savvy, and communication was excellent throughout. The build itself was completely stress free and we could request changes during the build which made the whole thing simple. They wrapped it up with a really useful training video so I can confidently manage the site myself now.",
  },
  {
    name: "Matt Wertheimer",
    initial: "M",
    color: "#22C55E",
    date: "14/02/2026",
    text: "The team at Beacon X assisted with the creation of our webpage. They have a great process to draw out ideas and create the brief, then delivered the end result in a timely fashion with clear communication the whole way through. Would recommend these guys to anyone looking to get a website built properly.",
  },
  {
    name: "Jacob Stewart",
    initial: "J",
    color: "#A855F7",
    date: "05/04/2026",
    text: "Had a great experience with Beacon X. We rebuilt our site from the ground up and they offered an innovative approach to designing a seamless navigation between our multiple brands. The team were quick to assist with the AI chatbot install and stayed within budget and revision rounds. Ongoing support post build has been prompt and helpful.",
  },
];

function GoogleLogo() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
}

function GoogleWordmark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 272 92"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google"
    >
      <path
        fill="#EA4335"
        d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      />
      <path
        fill="#FBBC05"
        d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      />
      <path
        fill="#4285F4"
        d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
      />
      <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
      <path
        fill="#EA4335"
        d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
      />
      <path
        fill="#4285F4"
        d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
      />
    </svg>
  );
}

function ReviewsTrustBlock() {
  return (
    <div className="mt-10 flex flex-col items-center text-center">
      <p
        style={{
          fontFamily: "var(--font-archivo), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
          letterSpacing: "0.02em",
          color: "#111111",
          lineHeight: 1,
        }}
      >
        EXCELLENT
      </p>
      <div
        aria-label="5 out of 5 stars"
        className="mt-2 flex items-center"
        style={{
          color: "#F5B800",
          fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
          letterSpacing: "0.15em",
        }}
      >
        ★★★★★
      </div>
      <p
        className="mt-2"
        style={{
          fontFamily: "var(--font-inter-real), Inter, sans-serif",
          fontSize: "clamp(0.85rem, 2.2vw, 1rem)",
          fontWeight: 600,
          color: "#1a1a1a",
        }}
      >
        50+ Google Reviews
      </p>
      <GoogleWordmark className="mt-2 h-6 w-auto sm:h-7" />
    </div>
  );
}

function VerifiedBadge() {
  return (
    <svg
      className="ml-1 h-4 w-4"
      viewBox="0 0 24 24"
      fill="#1d9bf0"
      aria-hidden="true"
    >
      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
    </svg>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div
      className="flex flex-col rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg"
      style={{ fontFamily: "var(--font-inter-real), Inter, sans-serif" }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full font-semibold text-white"
          style={{ background: review.color }}
        >
          {review.initial}
        </div>
        <div className="flex-1">
          <div
            className="font-semibold text-[#1a1a1a]"
            style={{ fontSize: "0.95rem" }}
          >
            {review.name}
          </div>
          <div className="text-xs text-[#666]">{review.date}</div>
        </div>
        <GoogleLogo />
      </div>

      <div className="mb-2 flex items-center gap-1">
        <span style={{ color: "#F5B800", fontSize: 16, letterSpacing: 1 }}>
          ★★★★★
        </span>
        <VerifiedBadge />
      </div>

      <p
        className="text-sm leading-relaxed text-[#333]"
        style={{ fontFamily: "var(--font-inter-real), Inter, sans-serif" }}
      >
        {review.text}
      </p>
    </div>
  );
}

export function GoogleReviewsSection() {
  return (
    <section
      className="w-full bg-[#F5F5F5]"
      style={{ paddingTop: 96, paddingBottom: 96 }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-8">
        <div className="flex flex-col items-center text-center">
          <h2
            className="mez-h2"
            style={{ textTransform: "uppercase", maxWidth: 1080 }}
          >
            5-STAR REVIEWS
            <br />
            <span style={{ color: "#F59E0B" }}>FROM REAL CUSTOMERS</span>
          </h2>
          <ReviewsTrustBlock />
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-[820px] grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
