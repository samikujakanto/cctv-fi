import Link from "next/link";

export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid #1e293b",
      background: "#0a0e1a",
      padding: "3rem 1.5rem",
      marginTop: "4rem",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 12 }}>
              CCTV<span style={{ color: "#3b82f6" }}>.fi</span>
            </div>
            <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.6 }}>
              Suomen kattavin kameravalvonnan tietopankki. Lainsäädäntö, GDPR, vertailut ja oppaat.
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 12, color: "#9ca3af", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>Kategoriat</div>
            {["Lainsäädäntö", "Kamerat", "Vertailut", "Oppaat", "Tekoäly"].map((cat) => (
              <div key={cat} style={{ marginBottom: 6 }}>
                <Link href={`/kategoriat/${cat.toLowerCase()}`} style={{ color: "#6b7280", fontSize: 14 }}>{cat}</Link>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 12, color: "#9ca3af", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>Linkit</div>
            <div style={{ marginBottom: 6 }}>
              <Link href="https://security.fi" style={{ color: "#6b7280", fontSize: 14 }}>Security.fi →</Link>
            </div>
            <div style={{ marginBottom: 6 }}>
              <Link href="/tietosuojaseloste" style={{ color: "#6b7280", fontSize: 14 }}>Tietosuojaseloste</Link>
            </div>
            <div style={{ marginBottom: 6 }}>
              <Link href="/artikkelit" style={{ color: "#6b7280", fontSize: 14 }}>Kaikki artikkelit</Link>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1e293b", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <p style={{ color: "#4b5563", fontSize: 13 }}>
            © {new Date().getFullYear()} Security Eye Finland Oy – CCTV.fi on{" "}
            <Link href="https://security.fi" style={{ color: "#6b7280" }}>Security.fi</Link>:n sisarsivu
          </p>
          <p style={{ color: "#4b5563", fontSize: 13 }}>Y-tunnus 2702704-3</p>
        </div>
      </div>
    </footer>
  );
}
