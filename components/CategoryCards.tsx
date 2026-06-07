"use client";
import Link from "next/link";
import { useState } from "react";

const CATEGORIES = [
  { slug: "lainsäädäntö", label: "Lainsäädäntö", icon: "⚖️", desc: "GDPR, LYTP, NIS2 ja kameravalvonnan lait" },
  { slug: "kamerat", label: "Kamerat", icon: "📹", desc: "Dahua, Hikvision, Axis – vertailut ja oppaat" },
  { slug: "vertailut", label: "Vertailut", icon: "🔍", desc: "Objektiiviset laitevertailut ammattilaisille" },
  { slug: "oppaat", label: "Oppaat", icon: "📖", desc: "RTSP, ONVIF, PoE ja asennusohjeet" },
  { slug: "tekoäly", label: "Tekoäly", icon: "🤖", desc: "AI-analytiikka, LPR ja älyvalvonta" },
];

function CatCard({ cat }: { cat: typeof CATEGORIES[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={`/kategoriat/${encodeURIComponent(cat.slug)}`} style={{ textDecoration: "none" }}>
      <div
        style={{ background: "#1a2235", border: `1px solid ${hov ? "#3b82f6" : "#1e293b"}`, borderRadius: 12, padding: "1.25rem", transition: "border-color 0.2s" }}
        onMouseOver={() => setHov(true)}
        onMouseOut={() => setHov(false)}
      >
        <div style={{ fontSize: 28, marginBottom: 8 }}>{cat.icon}</div>
        <div style={{ fontWeight: 700, fontSize: 15, color: "#f9fafb", marginBottom: 4 }}>{cat.label}</div>
        <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.4 }}>{cat.desc}</div>
      </div>
    </Link>
  );
}

export function CategoryCards() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
      {CATEGORIES.map((cat) => <CatCard key={cat.slug} cat={cat} />)}
    </div>
  );
}
