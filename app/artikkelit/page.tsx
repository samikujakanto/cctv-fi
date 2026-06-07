import { getAllArticles, categoryLabels } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { breadcrumbJsonLd } from "@/lib/schema";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaikki artikkelit",
  description: "Kaikki CCTV.fi:n kameravalvonta-artikkelit – lainsäädäntö, GDPR, NIS2, Dahua, Hikvision, vertailut, oppaat ja tekoäly.",
  alternates: { canonical: "https://cctv.fi/artikkelit" },
  openGraph: { title: "Artikkelit – CCTV.fi", description: "Suomen kattavin kameravalvonnan tietopankki", type: "website", locale: "fi_FI" },
};

const CATS = Object.entries(categoryLabels);

export default function ArticlesPage() {
  const articles = getAllArticles();
  const breadcrumb = breadcrumbJsonLd([
    { name: "CCTV.fi", url: "https://cctv.fi" },
    { name: "Artikkelit", url: "https://cctv.fi/artikkelit" },
  ]);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <nav style={{ fontSize: 13, color: "#6b7280", marginBottom: "1.5rem", display: "flex", gap: 6 }}>
        <Link href="/" style={{ color: "#6b7280" }}>CCTV.fi</Link>
        <span>›</span>
        <span style={{ color: "#9ca3af" }}>Artikkelit</span>
      </nav>

      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: "0.5rem" }}>Kaikki artikkelit</h1>
      <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>{articles.length} artikkelia kameravalvonnasta</p>

      {/* Kategoria-suodatin */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: "2rem" }}>
        {CATS.map(([slug, label]) => (
          <Link key={slug} href={`/kategoriat/${encodeURIComponent(slug)}`} style={{
            background: "#1a2235", border: "1px solid #1e293b", borderRadius: 8,
            padding: "6px 14px", fontSize: 13, color: "#9ca3af", textDecoration: "none",
          }}>
            {label}
          </Link>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
        {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
      </div>
    </div>
  );
}
