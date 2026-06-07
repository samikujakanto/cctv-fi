interface Stat { n: string; label: string; source?: string }
export function StatBox({ stats }: { stats: Stat[] }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${Math.min(stats.length, 3)}, 1fr)`,
      gap: 12, marginBottom: "2rem",
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          background: "#111827", border: "1px solid #1e293b",
          borderRadius: 10, padding: "1rem", textAlign: "center",
        }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: "#3b82f6" }}>{s.n}</div>
          <div style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.4 }}>{s.label}</div>
          {s.source && <div style={{ fontSize: 11, color: "#4b5563", marginTop: 4 }}>{s.source}</div>}
        </div>
      ))}
    </div>
  );
}
