import fs from "fs";
import path from "path";
import matter from "gray-matter";
export type { Article } from "./types";
export { categoryColors, categoryLabels } from "./types";
import type { Article } from "./types";

const articlesDir = path.join(process.cwd(), "content", "articles");

export function getAllArticles(): Article[] {
  if (!fs.existsSync(articlesDir)) return [];
  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(articlesDir, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title || "",
        excerpt: data.excerpt || "",
        category: data.category || "yleinen",
        date: data.date || "",
        readTime: data.readTime || 5,
        author: data.author || "CCTV.fi toimitus",
        featured: data.featured || false,
        tags: data.tags || [],
        content,
      } as Article;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(articlesDir, slug + ".mdx");
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title || "",
    excerpt: data.excerpt || "",
    category: data.category || "yleinen",
    date: data.date || "",
    readTime: data.readTime || 5,
    author: data.author || "CCTV.fi toimitus",
    featured: data.featured || false,
    tags: data.tags || [],
    content,
  };
}
