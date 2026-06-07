export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  author: string;
  featured: boolean;
  tags: string[];
  content: string;
}

export const categoryColors: Record<string, string> = {
  lainsäädäntö: "#ef4444",
  kamerat: "#3b82f6",
  vertailut: "#22c55e",
  oppaat: "#eab308",
  tekoäly: "#a855f7",
  yleinen: "#6b7280",
};

export const categoryLabels: Record<string, string> = {
  lainsäädäntö: "Lainsäädäntö",
  kamerat: "Kamerat",
  vertailut: "Vertailut",
  oppaat: "Oppaat",
  tekoäly: "Tekoäly",
  yleinen: "Yleinen",
};
