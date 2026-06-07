import { getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaikki artikkelit",
  description: "Kaikki CCTV.fi:n kameravalvonta-artikkelit – lainsäädäntö, vertailut, oppaat ja tekoäly.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: "0.5rem" }}>Kaikki artikkelit</h1>
      <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>{articles.length} artikkelia kameravalvonnasta</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
        {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
      </div>
    </div>
  );
}
