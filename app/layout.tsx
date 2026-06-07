import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://cctv.fi"),
  title: {
    template: "%s | CCTV.fi – Kameravalvonnan tietopankki",
    default: "CCTV.fi – Suomen kattavin kameravalvonnan tietopankki",
  },
  description:
    "CCTV.fi – lainsäädäntö, GDPR, vertailut ja asiantuntijaoppaat kameravalvonnasta Suomessa. Dahua, Hikvision, NIS2, AI-analytiikka.",
  keywords: [
    "kameravalvonta", "CCTV", "GDPR kameravalvonta", "valvontakamera",
    "Dahua", "Hikvision", "kameravertailu", "NIS2", "kameravalvonnan lait",
    "taloyhtiön kameravalvonta", "AI kameravalvonta", "tietosuoja kamera",
  ],
  authors: [{ name: "CCTV.fi", url: "https://cctv.fi" }],
  creator: "CCTV.fi / Security Eye Finland Oy",
  publisher: "CCTV.fi",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: "https://cctv.fi",
    siteName: "CCTV.fi",
    title: "CCTV.fi – Suomen kattavin kameravalvonnan tietopankki",
    description: "Lainsäädäntö, GDPR, vertailut ja asiantuntijaoppaat kameravalvonnasta Suomessa.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "CCTV.fi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CCTV.fi – Kameravalvonnan tietopankki",
    description: "Suomen kattavin kameravalvonnan tietolähde – lainsäädäntö, vertailut, oppaat.",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://cctv.fi",
    languages: { "fi-FI": "https://cctv.fi" },
  },
  verification: {
    // Google Search Console verification meta tag – lisää oikea token GSC:ssä
    google: "placeholder-gsc-token",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = organizationJsonLd();
  const site = websiteJsonLd();
  return (
    <html lang="fi">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: "70vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
