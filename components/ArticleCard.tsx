"use client";
import Link from "next/link";
import type { Article } from "@/lib/types";
import { CategoryBadge } from "./CategoryBadge";
import { useState } from "react";

function Card({ article }: { article: Article }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/artikkelit/${article.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article
        style={{
          background: "#1a2235",
          border: `1px solid ${hovered ? "#3b82f6" : "#1e293b"}`,
          borderRadius: 12,
          overflow: "hidden",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          transition: "transform 0.2s, border-color 0.2s",
          cursor: "pointer",
        }}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <div style={{
          height: 160,
          background: "linear-gradient(135deg, #1e3a5f 0%, #0a1628 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 40, position: "relative",
        }}>
          <span style={{ opacity: 0.4 }}>📹</span>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, #1a2235)" }} />
        </div>
        <div style={{ padding: "1.25rem" }}>
          <div style={{ marginBottom: 10 }}>
            <CategoryBadge category={article.category} />
          </div>
          <h3 style={{ color: "#f9fafb", fontSize: 16, fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}>
            {article.title}
          </h3>
          <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.6, marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {article.excerpt}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#6b7280" }}>
            <span>{article.date}</span>
            <span>⏱ {article.readTime} min</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  return <Card article={article} />;
}
