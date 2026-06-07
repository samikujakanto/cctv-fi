import { getAllArticles, categoryLabels } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ kategoria: string }>;
}

export async function generateStaticParams() {
  return Object.keys(categoryLabels).map((k) => ({ kategoria: k }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategoria } = await params;
  const label = categoryLabels[kategoria] || kategoria;
  return {
    title: `${label} – kameravalvonta-artikkelit`,
    description: `Kaikki CCTV.fi:n ${label.toLowerCase()}-artikkelit.`,
  };
}

export default async function KategoriaPage({ params }: Props) {
  const { kategoria } = await params;
  const all = getAllArticles();
  const filtered = all.filter((a) => a.category === kategoria);
  if (!categoryLabels[kategoria]) notFound();
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: "0.5rem" }}>
        {categoryLabels[kategoria] || kategoria}
      </h1>
      <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>{filtered.length} artikkelia</p>
      {filtered.length === 0 ? (
        <p style={{ color: "#6b7280" }}>Ei vielä artikkeleita tässä kategoriassa.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {filtered.map((a) => <ArticleCard key={a.slug} article={a} />)}
        </div>
      )}
    </div>
  );
}
