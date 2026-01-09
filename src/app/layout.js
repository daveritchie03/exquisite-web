export const dynamic = "force-static";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TawkWidget from "@/components/TawkWidget";

export const metadata = {
  title: {
    default: "Exquisite — Curating Luxury Living",
    template: "%s | Exquisite",
  },
  description:
    "Luxury interior design and turnkey home interiors with timeless elegance, bespoke materials, and precision craftsmanship. Serving premium clients across India.",
  keywords: [
    // Core luxury & brand
    "luxury interior design",
    "premium interior designers",
    "bespoke interiors",
    "high end interior design",
    "custom home interiors",
    "Exquisite Spaces",
    "exquisitespaces.in",

    // Decorpot-style high-intent keywords
    "interior designers in India",
    "best interior designers in India",
    "interior designers near me",
    "home interior designers",
    "top interior design company",
    "turnkey interior solutions",
    "end to end interior design",
    "residential interior design",

    // Room-specific (very important for SEO)
    "living room interior design",
    "luxury living room interiors",
    "bedroom interior design",
    "modern bedroom interiors",
    "modular kitchen design",
    "luxury modular kitchen",
    "wardrobe design",
    "custom wardrobe interiors",
    "false ceiling design",
    "lighting design for homes",

    // Property-type focused
    "apartment interior design",
    "villa interior design",
    "flat interior design",
    "home renovation services",
    "complete home interiors",

    // Style & solution based
    "modern interior design",
    "contemporary interior design",
    "minimalist interior design",
    "space planning interiors",
    "3D interior design services",
    "interior styling services",
    "luxury home decor",
  ],
  metadataBase: new URL("https://exquisitespaces.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Exquisite — Curating Luxury Living",
    description:
      "Luxury home interiors that blend timeless elegance with bespoke craftsmanship. Designed with intention, built with precision.",
    url: "https://exquisitespaces.in",
    siteName: "Exquisite",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exquisite — Curating Luxury Living",
    description:
      "Luxury home interiors that blend timeless elegance with bespoke craftsmanship. Designed with intention, built with precision.",
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Exquisite Spaces",
              "alternateName": ["Exquisite", "Exquisite Interiors", "Exquisite Spaces", "Luxury Spaces"],
              "url": "https://exquisitespaces.in",
              "logo": "https://exquisitespaces.in/logo.png",
              "sameAs": [
                "https://www.instagram.com/exquisiteInteriors/",
                "https://in.pinterest.com/ExquisiteInteriors/",
                "https://www.facebook.com/ExquisiteInteriors/",
                "https://www.youtube.com/@ExquisiteInteriors/"
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer />
        <TawkWidget />
      </body>
    </html>
  );
}
