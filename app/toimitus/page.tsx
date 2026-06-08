import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Toimitus – CCTV.fi",
  description: "CCTV.fi:n toimitus koostuu kameravalvonnan ammattilaisista joilla on yli 20 vuoden kokemus alalta.",
  alternates: { canonical: "https://cctv.fi/toimitus" },
};

const authorJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://cctv.fi/toimitus#sami-kuja-kanto",
  name: "Sami Kuja-Kanto",
  jobTitle: "Turvallisuusasiantuntija",
  description: "Sami Kuja-Kantolla on yli 20 vuoden kokemus turvallisuusalalta. Hän on Security Eye Finland Oy:n perustaja ja toimitusjohtaja. Erikoisosaaminen: kameravalvontajärjestelmät, GDPR-tietosuoja, NIS2-compliance, AI-analytiikka ja IoT-tietoturva.",
  knowsAbout: [
    "kameravalvonta", "IP-kamerat", "GDPR", "tietosuoja", "NIS2",
    "AI-analytiikka", "Dahua", "Hikvision", "turvallisuusjärjestelmät"
  ],
  worksFor: {
    "@type": "Organization",
    name: "Security Eye Finland Oy",
    url: "https://security.fi",
  },
  sameAs: ["https://security.fi", "https://cctv.fi"],
  url: "https://cctv.fi/toimitus",
};

export default function ToimitusPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "CCTV.fi", url: "https://cctv.fi" },
    { name: "Toimitus", url: "https://cctv.fi/toimitus" },
  ]);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: "0.5rem" }}>CCTV.fi toimitus</h1>
      <p style={{ color: "#9ca3af", marginBottom: "3rem" }}>Kameravalvonnan asiantuntijoita – ei markkinointia, vain faktat</p>

      <div style={{
        background: "#1a2235", border: "1px solid #1e293b", borderRadius: 16,
        padding: "2rem", marginBottom: "2rem", display: "flex", gap: "1.5rem", flexWrap: "wrap",
      }}>
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 32, flexShrink: 0,
        }}>
          👤
        </div>
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>Sami Kuja-Kanto</h2>
          <p style={{ color: "#3b82f6", fontSize: 14, fontWeight: 600, marginBottom: "1rem" }}>
            Päätoimittaja · Kameravalvonnan asiantuntija · Security Eye Finland Oy, toimitusjohtaja
          </p>
          <p style={{ color: "#d1d5db", lineHeight: 1.7, marginBottom: "1rem" }}>
            Yli 20 vuoden kokemus turvallisuusalalta. Erikoisosaaminen kattaa IP-kameravalvontajärjestelmät,
            GDPR-tietosuojan, NIS2-compliance-vaatimukset, AI-analytiikan integraation ja IoT-tietoturvan.
            Sami on suunnitellut ja toteuttanut kameravalvontaratkaisuja taloyhtiöistä teollisuuslaitoksiin.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Kameravalvonta", "GDPR", "NIS2", "AI-analytiikka", "Dahua", "Hikvision", "IoT-tietoturva"].map((tag) => (
              <span key={tag} style={{
                background: "#111827", border: "1px solid #1e293b",
                borderRadius: 6, padding: "4px 10px", fontSize: 12, color: "#9ca3af",
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: "#1a2235", border: "1px solid #1e293b", borderRadius: 12, padding: "1.5rem", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: "1rem" }}>CCTV.fi:n toimituspolitiikka</h2>
        <ul style={{ color: "#d1d5db", lineHeight: 1.8, paddingLeft: "1.25rem" }}>
          <li>Kaikki artikkelit perustuvat tekniseen asiantuntemukseen ja lähteisiin</li>
          <li>Ei maksettua mainossisältöä – laitesuositukset ovat riippumattomia</li>
          <li>Oikeudellinen sisältö tarkistettu Suomen lainsäädäntöä vasten</li>
          <li>Artikkelit päivitetään kun lainsäädäntö tai teknologia muuttuu</li>
          <li>Julkaisupäivä ja viimeisin päivityspäivä näkyvät jokaisessa artikkelissa</li>
        </ul>
      </div>

      <div style={{ background: "#1a2235", border: "1px solid #1e293b", borderRadius: 12, padding: "1.5rem" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: "1rem" }}>Lähteet ja viitteet</h2>
        <p style={{ color: "#9ca3af", fontSize: 14, marginBottom: "1rem" }}>CCTV.fi:n sisältö perustuu seuraaviin viranomaislähteisiin:</p>
        <ul style={{ color: "#d1d5db", lineHeight: 2, paddingLeft: "1.25rem", fontSize: 14 }}>
          <li><a href="https://tietosuoja.fi" style={{ color: "#3b82f6" }}>Tietosuojavaltuutettu (tietosuoja.fi)</a></li>
          <li><a href="https://traficom.fi" style={{ color: "#3b82f6" }}>Traficom – Liikenne- ja viestintävirasto</a></li>
          <li><a href="https://eur-lex.europa.eu/legal-content/FI/TXT/?uri=CELEX%3A32016R0679" style={{ color: "#3b82f6" }}>EU GDPR 2016/679 (EUR-Lex)</a></li>
          <li><a href="https://eur-lex.europa.eu/legal-content/FI/TXT/?uri=CELEX%3A32022L2555" style={{ color: "#3b82f6" }}>NIS2-direktiivi 2022/2555 (EUR-Lex)</a></li>
          <li><a href="https://www.onvif.org" style={{ color: "#3b82f6" }}>ONVIF Forum – standardit</a></li>
          <li><a href="https://security.fi" style={{ color: "#3b82f6" }}>Security.fi – käytännön asiantuntijatieto</a></li>
        </ul>
      </div>
    </div>
  );
}
