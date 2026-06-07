// Server Component – hakee datan, renderöi staattisesti
import { getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCards } from "@/components/CategoryCards";
import Link from "next/link";

export default async function HomePage() {
  const articles = getAllArticles();
  const latest = articles.slice(0, 9);

  return (
    <div>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #0a0e1a 0%, #0d1b3e 50%, #0a0e1a 100%)",
        borderBottom: "1px solid #1e293b",
        padding: "5rem 1.5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600, height: 600,
          background: "radial-gradient(circle, #3b82f620 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          <div style={{
            display: "inline-block",
            background: "#3b82f610", border: "1px solid #3b82f630",
            borderRadius: 20, padding: "6px 16px",
            fontSize: 13, color: "#3b82f6", fontWeight: 600, marginBottom: "1.5rem",
          }}>
            🇫🇮 Suomen #1 kameravalvonnan tietolähde
          </div>
          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.1,
            marginBottom: "1.5rem",
            background: "linear-gradient(135deg, #f9fafb 0%, #3b82f6 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            CCTV.fi
          </h1>
          <p style={{ fontSize: "1.25rem", color: "#9ca3af", maxWidth: 640, margin: "0 auto 2rem", lineHeight: 1.6 }}>
            CCTV.fi auttaa ymmärtämään kameravalvontaa, tietosuojaa,
            tekoälyanalytiikkaa ja turvallisuusteknologiaa Suomessa.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/artikkelit" style={{ background: "#3b82f6", color: "#fff", padding: "12px 28px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              Selaa artikkeleita →
            </Link>
            <Link href="/kategoriat/vertailut" style={{ background: "#1a2235", color: "#f9fafb", border: "1px solid #1e293b", padding: "12px 28px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              Laitevertailut
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#111827", borderBottom: "1px solid #1e293b", padding: "1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
          {[{ n: `${articles.length}`, label: "Artikkelia" }, { n: "5", label: "Vertailua" }, { n: "5", label: "Aihealuetta" }, { n: "2026", label: "Päivitetty" }].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#3b82f6" }}>{s.n}</div>
              <div style={{ fontSize: 13, color: "#6b7280" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section style={{ maxWidth: 1200, margin: "4rem auto", padding: "0 1.5rem" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: "1.5rem" }}>Aihealueet</h2>
        <CategoryCards />
      </section>

      {/* Latest articles */}
      <section style={{ maxWidth: 1200, margin: "0 auto 4rem", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: 22, fontWeight: 700 }}>Uusimmat artikkelit</h2>
          <Link href="/artikkelit" style={{ fontSize: 14, color: "#3b82f6" }}>Kaikki artikkelit →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {latest.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(135deg, #1e3a5f, #0a1628)",
        border: "1px solid #1e4a8a", borderRadius: 16,
        maxWidth: 1160, margin: "0 auto 4rem", padding: "3rem", textAlign: "center",
      }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Tarvitsetko kameravalvontaratkaisun?</h2>
        <p style={{ color: "#9ca3af", marginBottom: "1.5rem" }}>
          Security.fi:n asiantuntijat suunnittelevat ja asentavat kameravalvontajärjestelmät Suomessa.
        </p>
        <Link href="https://security.fi" style={{ background: "#3b82f6", color: "#fff", padding: "12px 28px", borderRadius: 8, fontWeight: 600, textDecoration: "none" }}>
          Siirry Security.fi:hin →
        </Link>
      </section>
    </div>
  );
}
