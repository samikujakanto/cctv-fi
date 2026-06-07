// Speakable AI Answer Block – tämä tulee jokaisen artikkelin alkuun
// CSS-luokka "ai-vastaus" on Speakable-schemassa
export function AiVastaus({ children }: { children: React.ReactNode }) {
  return (
    <div className="ai-vastaus" style={{
      background: "linear-gradient(135deg, #1e3a5f22, #0a1628)",
      border: "1px solid #3b82f640",
      borderLeft: "4px solid #3b82f6",
      borderRadius: "0 10px 10px 0",
      padding: "1.25rem 1.5rem",
      marginBottom: "2rem",
      position: "relative",
    }}>
      <div style={{
        fontSize: 11, fontWeight: 700, color: "#3b82f6",
        textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8,
      }}>
        🤖 Lyhyesti – AI-yhteenveto
      </div>
      <div style={{ color: "#d1d5db", fontSize: 15, lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}
