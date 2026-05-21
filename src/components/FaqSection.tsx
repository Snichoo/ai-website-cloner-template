"use client";

import { useState } from "react";

interface FaqItem {
  number: string;
  question: string;
  answer: string;
}

const items: FaqItem[] = [
  {
    number: "001",
    question: "Are there monthly fees?",
    answer:
      "No. Hosting is completely free. We deploy your site on Vercel (backed by AWS / Amazon), which is built for tech startups and stays lightning fast even with thousands of concurrent users. The only ongoing cost is a domain name if you don't already own one, which is usually around $20 per year.",
  },
  {
    number: "002",
    question: "Is website hosting included?",
    answer:
      "Yes. Hosting is included at no extra cost. We use Vercel (backed by AWS) on their generous free tier, so you get enterprise grade speed and uptime without a monthly bill.",
  },
  {
    number: "003",
    question: "Is there support if I want to make a change?",
    answer:
      "Yes. You get 30 days of free post launch support after your site goes live. After that, any changes, new features, or extra pages are $40 per hour. Most of these take under an hour, so it's not something to worry about.",
  },
  {
    number: "004",
    question: "Can you transfer the site to my existing domain?",
    answer:
      "Yes. We connect your new site to whatever domain you already own. If you don't have one yet, we'll help you grab one (around $20 per year) and point it at your site.",
  },
  {
    number: "005",
    question: "Can I update the website myself?",
    answer:
      "Yes. Once we've completed building your website and it's live, we can provide you with full access login details.",
  },
  {
    number: "006",
    question: "Does the free logo come with revisions?",
    answer:
      "Yes. We'll iterate on the logo until you're happy with it.",
  },
  {
    number: "007",
    question: "Do I need to arrange my own photos?",
    answer:
      "No. We have access to millions of stock images. But you can always provide your own photos if you like. Especially if it's supposed to be a photo of yourself!",
  },
  {
    number: "008",
    question: "How long does it take to build my website?",
    answer:
      "Once your application is accepted and you've set up hosting, we typically complete websites within 7 to 10 business days, depending on the complexity and your responsiveness during the process.",
  },
  {
    number: "009",
    question: "Do I have a say in the design of my website?",
    answer:
      "Yes, you will be involved every step of the way. We have a 100% guarantee that you will be happy and if not, we will go back to the start to redesign. Our number one priority is to make sure your website is something you are proud of and generates you money.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<string | null>("001");

  return (
    <section
      className="w-full"
      style={{
        background: "#1C1C1C",
        paddingTop: 72,
        paddingBottom: 72,
      }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-10 sm:px-8">
        <div className="flex flex-col items-start">
          <h2
            className="text-[40px] sm:text-[68px] lg:text-[88px]"
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#F59E0B" }}>QUESTIONS?</span>
            <br />
            <span style={{ color: "#FFFFFF" }}>WE&apos;VE GOT YOU</span>
          </h2>
        </div>

        <ul className="mt-10 flex flex-col">
          {items.map((item, idx) => {
            const isOpen = open === item.number;
            return (
              <li
                key={item.number}
                style={{
                  borderTop:
                    idx === 0
                      ? "1px solid rgba(255,255,255,0.08)"
                      : undefined,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  padding: "22px 0",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.number)}
                  className="grid w-full cursor-pointer items-center gap-2 text-left sm:gap-4"
                  style={{
                    gridTemplateColumns: "32px minmax(0, 1fr) 32px",
                    background: "transparent",
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-archivo), sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#6B6B6B",
                    }}
                  >
                    {item.number}
                  </span>
                  <span
                    className="text-[18px] sm:text-[24px]"
                    style={{
                      fontFamily: "var(--font-archivo), sans-serif",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.25,
                      textTransform: "uppercase",
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 32,
                      height: 32,
                      border: "1px solid rgba(255,255,255,0.15)",
                      background: isOpen
                        ? "rgba(245,158,11,0.14)"
                        : "transparent",
                      color: isOpen ? "#F59E0B" : "#FFFFFF",
                      fontSize: 18,
                      lineHeight: 1,
                    }}
                  >
                    {isOpen ? "×" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p
                    className="mt-3 pl-[40px] sm:pl-[60px]"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.72)",
                      maxWidth: 780,
                    }}
                  >
                    {item.answer}
                  </p>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-14 flex flex-col items-center">
          <p
            className="text-center text-[28px] sm:text-[36px]"
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              textTransform: "uppercase",
              maxWidth: 720,
            }}
          >
            Still on the fence?{" "}
            <span style={{ color: "#F59E0B" }}>Let&apos;s chat.</span>
          </p>
          <a
            href="#book"
            className="mez-orange-cta mt-6 inline-flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              padding: "14px 28px",
              borderRadius: "14px",
            }}
          >
            Let&apos;s Talk →
          </a>
        </div>

        <p
          className="mt-14 text-center"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          © {new Date().getFullYear()} BEACON X DIGITAL
        </p>
      </div>
    </section>
  );
}
