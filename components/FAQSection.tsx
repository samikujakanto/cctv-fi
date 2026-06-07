"use client";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ marginTop: "3rem" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: "1.5rem", color: "#f9fafb" }}>
        Usein kysytyt kysymykset
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{
            background: "#1a2235",
            border: "1px solid #1e293b",
            borderRadius: 10,
            overflow: "hidden",
          }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "1rem 1.25rem",
                background: "none",
                border: "none",
                color: "#f9fafb",
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {faq.question}
              <span style={{ color: "#3b82f6", fontSize: 20, fontWeight: 300 }}>
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <div style={{
                padding: "0 1.25rem 1.25rem",
                color: "#9ca3af",
                fontSize: 15,
                lineHeight: 1.7,
              }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
