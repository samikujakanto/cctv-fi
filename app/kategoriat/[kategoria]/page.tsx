import { getAllArticles, categoryLabels } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { breadcrumbJsonLd, categoryPageJsonLd } from "@/lib/schema";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props { params: Promise<{ kategoria: string }> }

const categoryDescriptions: Record<string, string> = {
  lainsäädäntö: "GDPR, LYTP, NIS2 ja kameravalvonnan lainsäädäntö Suomessa – kattavat oppaat ja asiantuntija-analyysit.",
  kamerat: "Dahua, Hikvision, Axis ja muut johtavat kameravalmistajat – testit, oppaat ja ominaisuusvertailut.",
  vertailut: "Objektiiviset laitevertailut kameravalvonnan ammattilaisille – kamerat, tallentimet ja analytiikka.",
  oppaat: "Tekniset käyttöoppaat: RTSP, ONVIF, PoE, VLAN ja asennusohjeet kameravalvontaan.",
  tekoäly: "AI-analytiikka, LPR, kasvojentunnistus ja älyvalvonta Suomessa – mahdollisuudet ja rajoitukset.",
};

export async function generateStaticParams() {
  return Object.keys(categoryLabels).map((k) => ({ kategoria: k }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategoria } = await params;
  const label = categoryLabels[kategoria];
  if (!label) return {};
  const desc = categoryDescriptions[kategoria] || `Kaikki CCTV.fi:n ${label.toLowerCase()}-artikkelit.`;
  const url = `https://cctv.fi/kategoriat/${encodeURIComponent(kategoria)}`;
  return {
    title: `${label} – kameravalvonta-artikkelit`,
    description: desc,
    openGraph: { title: `${label} – CCTV.fi`, description: desc, type: "website", locale: "fi_FI" },
    alternates: { canonical: url },
  };
}

export default async function KategoriaPage({ params }: Props) {
  const { kategoria } = await params;
  const label = categoryLabels[kategoria];
  if (!label) notFound();

  const all = getAllArticles();
  const filtered = all.filter((a) => a.category === kategoria);
  const url = `https://cctv.fi/kategoriat/${encodeURIComponent(kategoria)}`;
  const desc = categoryDescriptions[kategoria] || `Kaikki ${label.toLowerCase()}-artikkelit`;

  const breadcrumb = breadcrumbJsonLd([
    { name: "CCTV.fi", url: "https://cctv.fi" },
    { name: label, url },
  ]);
  const catLd = categoryPageJsonLd(label, url, desc);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catLd) }} />

      <nav style={{ fontSize: 13, color: "#6b7280", marginBottom: "1.5rem", display: "flex", gap: 6 }}>
        <Link href="/" style={{ color: "#6b7280" }}>CCTV.fi</Link>
        <span>›</span>
        <span style={{ color: "#9ca3af" }}>{label}</span>
      </nav>

      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: "0.5rem" }}>{label}</h1>
      <p style={{ color: "#9ca3af", marginBottom: "2rem", maxWidth: 600 }}>{desc}</p>

      {filtered.length === 0 ? (
        <p style={{ color: "#6b7280" }}>Ei vielä artikkeleita – tulossa pian.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {filtered.map((a) => <ArticleCard key={a.slug} article={a} />)}
        </div>
      )}
    </div>
  );
}
