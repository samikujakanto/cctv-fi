import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { CategoryBadge } from "@/components/CategoryBadge";
import { FAQSection } from "@/components/FAQSection";
import { articleJsonLd } from "@/lib/schema";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
    alternates: { canonical: `https://cctv.fi/artikkelit/${slug}` },
  };
}

// Simple FAQ extractor from MDX content
function extractFAQs(content: string) {
  const faqs: { question: string; answer: string }[] = [];
  const lines = content.split("\n");
  let currentQ = "";
  let currentA: string[] = [];
  let inFAQ = false;
  for (const line of lines) {
    if (line.startsWith("## Usein kysytyt") || line.startsWith("## FAQ")) {
      inFAQ = true;
      continue;
    }
    if (!inFAQ) continue;
    if (line.startsWith("### ")) {
      if (currentQ && currentA.length) {
        faqs.push({ question: currentQ, answer: currentA.join(" ").trim() });
      }
      currentQ = line.replace("### ", "");
      currentA = [];
    } else if (currentQ && line.trim()) {
      currentA.push(line.trim());
    }
  }
  if (currentQ && currentA.length) {
    faqs.push({ question: currentQ, answer: currentA.join(" ").trim() });
  }
  return faqs;
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 style={{ fontSize: 32, fontWeight: 800, marginTop: "2rem", marginBottom: "1rem", color: "#f9fafb" }} {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: "2rem", marginBottom: "0.75rem", color: "#f9fafb", borderBottom: "1px solid #1e293b", paddingBottom: "0.5rem" }} {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 style={{ fontSize: 18, fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem", color: "#e5e7eb" }} {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p style={{ lineHeight: 1.8, marginBottom: "1rem", color: "#d1d5db" }} {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem", color: "#d1d5db" }} {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol style={{ marginLeft: "1.5rem", marginBottom: "1rem", color: "#d1d5db" }} {...props} />,
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li style={{ marginBottom: "0.5rem", lineHeight: 1.7 }} {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a style={{ color: "#3b82f6" }} {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => <strong style={{ color: "#f9fafb" }} {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => <blockquote style={{ borderLeft: "4px solid #3b82f6", paddingLeft: "1rem", marginLeft: 0, color: "#9ca3af", fontStyle: "italic" }} {...props} />,
  code: (props: React.HTMLAttributes<HTMLElement>) => <code style={{ background: "#1a2235", padding: "2px 6px", borderRadius: 4, fontSize: "0.9em", color: "#06b6d4" }} {...props} />,
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const faqs = extractFAQs(article.content);
  const jsonLd = articleJsonLd(article, `https://cctv.fi/artikkelit/${slug}`);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ marginBottom: "1rem" }}>
        <CategoryBadge category={article.category} />
      </div>
      <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem", color: "#f9fafb" }}>
        {article.title}
      </h1>
      <p style={{ color: "#9ca3af", fontSize: 16, marginBottom: "1.5rem", lineHeight: 1.6 }}>
        {article.excerpt}
      </p>
      <div style={{ display: "flex", gap: "1.5rem", fontSize: 13, color: "#6b7280", marginBottom: "2.5rem", borderBottom: "1px solid #1e293b", paddingBottom: "1.5rem" }}>
        <span>✍️ {article.author}</span>
        <span>📅 {article.date}</span>
        <span>⏱ {article.readTime} min lukuaika</span>
      </div>
      <div className="article-content">
        <MDXRemote source={article.content} components={mdxComponents} />
      </div>
      {faqs.length > 0 && <FAQSection faqs={faqs} />}
      <div style={{
        marginTop: "3rem",
        padding: "1.5rem",
        background: "#1a2235",
        border: "1px solid #1e293b",
        borderRadius: 12,
      }}>
        <p style={{ color: "#9ca3af", fontSize: 14 }}>
          Tarvitsetko ammattilaisapua kameravalvontaan?{" "}
          <a href="https://security.fi" style={{ color: "#3b82f6" }}>
            Security.fi:n asiantuntijat auttavat →
          </a>
        </p>
      </div>
    </div>
  );
}
