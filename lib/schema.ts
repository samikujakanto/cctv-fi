import type { Article } from "./types";

export function articleJsonLd(article: Article, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Organization", name: "CCTV.fi", url: "https://cctv.fi" },
    publisher: {
      "@type": "Organization", name: "CCTV.fi", url: "https://cctv.fi",
      logo: { "@type": "ImageObject", url: "https://cctv.fi/logo.png" },
    },
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CCTV.fi",
    url: "https://cctv.fi",
    description: "Suomen kattavin kameravalvonnan tietopankki – lainsäädäntö, GDPR, vertailut ja oppaat.",
    sameAs: ["https://security.fi"],
  };
}
