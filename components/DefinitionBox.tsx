export function DefinitionBox({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: "#111827",
      border: "1px solid #1e293b",
      borderRadius: 10,
      padding: "1rem 1.25rem",
      marginBottom: "1.5rem",
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
        Määritelmä
      </div>
      <div style={{ fontWeight: 700, color: "#f9fafb", marginBottom: 6 }}>{term}</div>
      <div style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}
