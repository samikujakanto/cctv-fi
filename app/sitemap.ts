import { MetadataRoute } from "next";
import { getAllArticles, categoryLabels } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cctv.fi";
  const articles = getAllArticles();

  const articleUrls = articles.map((a) => ({
    url: `${base}/artikkelit/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: a.featured ? 0.9 : 0.8,
  }));

  const categoryUrls = Object.keys(categoryLabels).map((cat) => ({
    url: `${base}/kategoriat/${encodeURIComponent(cat)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${base}/artikkelit`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...categoryUrls,
    ...articleUrls,
  ];
}
