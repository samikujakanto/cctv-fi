import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { organizationJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    template: "%s | CCTV.fi",
    default: "CCTV.fi – Suomen kattavin kameravalvonnan tietopankki",
  },
  description:
    "CCTV.fi auttaa ymmärtämään kameravalvontaa, tietosuojaa, tekoälyanalytiikkaa ja turvallisuusteknologiaa Suomessa. Lainsäädäntö, GDPR, vertailut ja oppaat.",
  keywords: [
    "kameravalvonta",
    "CCTV",
    "GDPR kameravalvonta",
    "valvontakamera",
    "Dahua",
    "Hikvision",
    "kameravertailu",
    "NIS2",
    "kameravalvonnan lait",
  ],
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: "https://cctv.fi",
    siteName: "CCTV.fi",
    title: "CCTV.fi – Suomen kattavin kameravalvonnan tietopankki",
    description:
      "Lainsäädäntö, GDPR, vertailut ja asiantuntijaoppaat kameravalvonnasta Suomessa.",
    images: [{ url: "https://cctv.fi/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CCTV.fi",
    description: "Suomen kattavin kameravalvonnan tietopankki",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://cctv.fi" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const org = organizationJsonLd();
  return (
    <html lang="fi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: "70vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
