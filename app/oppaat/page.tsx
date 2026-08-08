import { getAllArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oppaat",
  description: "Käytännön oppaat kameravalvontaan – RTSP, asennus, konfiguraatio ja paljon muuta.",
};

export default function OppaatPage() {
  const articles = getAllArticles().filter((a) => a.category === "oppaat");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white">Oppaat</h1>
        <p className="mt-2 text-gray-400">
          Käytännön oppaat kameravalvonnan asentamiseen ja käyttöön
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
