import { categoryColors, categoryLabels } from "@/lib/types";

export function CategoryBadge({ category }: { category: string }) {
  const color = categoryColors[category] || "#6b7280";
  const label = categoryLabels[category] || category;
  return (
    <span style={{
      background: color + "22", color,
      border: `1px solid ${color}44`,
      borderRadius: 6, padding: "2px 10px",
      fontSize: 12, fontWeight: 600,
      letterSpacing: "0.03em", textTransform: "uppercase",
    }}>
      {label}
    </span>
  );
}
