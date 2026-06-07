import type { Article } from "./types";

const BASE = "https://cctv.fi";
const LOGO = `${BASE}/logo.png`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "CCTV.fi",
    legalName: "Security Eye Finland Oy",
    taxID: "FI27027043",
    identifier: { "@type": "PropertyValue", propertyID: "Y-tunnus", value: "2702704-3" },
    url: BASE,
    logo: { "@type": "ImageObject", url: LOGO },
    image: LOGO,
    description: "Suomen kattavin kameravalvonnan tietopankki – lainsäädäntö, GDPR, vertailut ja oppaat.",
    sameAs: ["https://security.fi"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tammimäenkatu 6",
      addressLocality: "Raisio",
      postalCode: "20320",
      addressCountry: "FI",
    },
    areaServed: { "@type": "Country", name: "Finland" },
    knowsAbout: [
      "kameravalvonta", "GDPR", "tietosuoja", "valvontajärjestelmät",
      "Dahua", "Hikvision", "IP-kamerat", "NVR", "AI-analytiikka", "NIS2"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      areaServed: "FI",
      availableLanguage: "Finnish",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: BASE,
    name: "CCTV.fi",
    description: "Suomen kattavin kameravalvonnan tietopankki",
    inLanguage: "fi",
    publisher: { "@id": `${BASE}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BASE}/artikkelit?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function articleJsonLd(article: Article, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "fi",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", "@id": `${BASE}/#organization`, name: "CCTV.fi" },
    publisher: { "@id": `${BASE}/#organization` },
    image: { "@type": "ImageObject", url: `${BASE}/og-default.png`, width: 1200, height: 630 },
    keywords: article.tags.join(", "),
    articleSection: article.category,
    isPartOf: { "@id": `${BASE}/#website` },
    about: article.tags.slice(0, 3).map((tag) => ({
      "@type": "Thing",
      name: tag,
    })),
  };
}

export function speakableJsonLd(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".ai-vastaus", "h1", ".article-excerpt"],
    },
    url,
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
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

export function categoryPageJsonLd(name: string, url: string, desc: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collectionpage`,
    name, description: desc, url,
    inLanguage: "fi",
    isPartOf: { "@id": `${BASE}/#website` },
    publisher: { "@id": `${BASE}/#organization` },
  };
}
