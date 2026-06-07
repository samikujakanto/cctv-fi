export function InfoBox({ type = "info", title, children }: {
  type?: "info" | "warning" | "tip" | "law";
  title?: string;
  children: React.ReactNode;
}) {
  const styles = {
    info:    { bg: "#1e3a5f22", border: "#3b82f6", icon: "ℹ️" },
    warning: { bg: "#7c271322", border: "#ef4444", icon: "⚠️" },
    tip:     { bg: "#14532d22", border: "#22c55e", icon: "💡" },
    law:     { bg: "#4c1d9522", border: "#a855f7", icon: "⚖️" },
  }[type];
  return (
    <div style={{
      background: styles.bg, borderLeft: `4px solid ${styles.border}`,
      borderRadius: "0 10px 10px 0", padding: "1rem 1.25rem", marginBottom: "1.5rem",
    }}>
      {title && <div style={{ fontWeight: 700, color: "#f9fafb", marginBottom: 6 }}>{styles.icon} {title}</div>}
      <div style={{ color: "#d1d5db", fontSize: 14, lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}
