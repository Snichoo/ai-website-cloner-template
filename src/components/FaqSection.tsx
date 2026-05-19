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
    question: "Is this a course?",
    answer:
      "No. This is a done-with-you implementation sprint. I don't give you videos to watch later. I audit your business, map opportunities, and build the systems WITH you. You leave with a working system and the capability to extend it yourself.",
  },
  {
    number: "002",
    question: "How is this different from buying a template?",
    answer:
      "A template gives you a starting point. I install a working, documented system around your actual business and stay until your team can extend it.",
  },
  {
    number: "003",
    question: "How is this different from hiring an agency?",
    answer:
      "Agencies bill hours and own the systems. I install the system, document everything, train your team, then leave you owning it.",
  },
  {
    number: "004",
    question: "How much time does this require from me?",
    answer:
      "Plan on ~5 hours/week for the audit and build sessions. Most of the heavy lifting is on me.",
  },
  {
    number: "005",
    question: "Do I need technical skills?",
    answer:
      "No. If you can describe how your business runs in plain English, you have everything you need.",
  },
  {
    number: "006",
    question: "Can you guarantee results?",
    answer:
      "Read the Guarantee section above — if the audit doesn't surface clear ROI, I won't take your money.",
  },
  {
    number: "007",
    question: "What if my business is too unique?",
    answer:
      "Unique is the entire point. Every system is built around YOUR clients, YOUR workflows, YOUR voice — not a template.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<string | null>("001");

  return (
    <section
      className="w-full"
      style={{
        background: "#1C1C1C",
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-5">
        {/* Header */}
        <div className="flex flex-col items-start">
          <div
            className="inline-flex items-center rounded-full px-4 py-2"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
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
              FAQs
            </span>
          </div>
          <h2
            className="mt-6"
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontWeight: 500,
              fontSize: "64px",
              lineHeight: 1,
              letterSpacing: "-2.56px",
            }}
          >
            <span style={{ color: "#6B6B6B" }}>Questions?</span>
            <br />
            <span style={{ color: "#FFFFFF" }}>Answers!</span>
          </h2>
        </div>

        {/* Accordion */}
        <ul className="mt-14 flex flex-col">
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
                  padding: "28px 0",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.number)}
                  className="grid w-full cursor-pointer items-center gap-4 text-left"
                  style={{
                    gridTemplateColumns: "64px 1fr 44px",
                    background: "transparent",
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-archivo), sans-serif",
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#6B6B6B",
                    }}
                  >
                    {item.number}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-archivo), sans-serif",
                      fontSize: "24px",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 36,
                      height: 36,
                      border: "1px solid rgba(255,255,255,0.15)",
                      background: isOpen
                        ? "rgba(255,255,255,0.04)"
                        : "transparent",
                      color: isOpen ? "#FF4726" : "#FFFFFF",
                      fontSize: 18,
                      lineHeight: 1,
                    }}
                  >
                    {isOpen ? "×" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p
                    className="mt-4"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "17px",
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.7)",
                      maxWidth: 800,
                      paddingLeft: 80,
                    }}
                  >
                    {item.answer}
                  </p>
                )}
              </li>
            );
          })}
        </ul>

        {/* Footer */}
        <p
          className="mt-12 text-center"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "14px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          © 2025 Mezcorp
        </p>
      </div>
    </section>
  );
}
