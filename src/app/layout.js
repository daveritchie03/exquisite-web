export const dynamic = "force-static";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TawkWidget from "@/components/TawkWidget";

export const metadata = {
  applicationName: "Exquisite Spaces",
  title: {
    default: "Exquisite — Curating Luxury Living",
    template: "%s | Exquisite",
  },
  description:
    "Luxury interior design and turnkey home interiors with timeless elegance, bespoke materials, and precision craftsmanship. Serving premium clients across India.",
  keywords: [
    "luxury interior design",
    "premium interior designers",
    "bespoke interiors",
    "high end interior design",
    "custom home interiors",
    "Exquisite Spaces",
    "exquisitespaces.in",
    "interior designers in India",
    "best interior designers in India",
    "interior designers near me",
    "home interior designers",
    "top interior design company",
    "turnkey interior solutions",
    "end to end interior design",
    "residential interior design",
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
    "apartment interior design",
    "villa interior design",
    "flat interior design",
    "home renovation services",
    "complete home interiors",
    "modern interior design",
    "contemporary interior design",
    "minimalist interior design",
    "space planning interiors",
    "3D interior design services",
    "interior styling services",
    "luxury home decor",
  ],
  category: "Interior Design",
  metadataBase: new URL("https://exquisitespaces.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Exquisite — Curating Luxury Living",
    description:
      "Luxury home interiors that blend timeless elegance with bespoke craftsmanship. Designed with intention, built with precision.",
    url: "https://exquisitespaces.in",
    siteName: "Exquisite Spaces",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Exquisite Spaces — Luxury interior design and turnkey home interiors in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exquisite — Curating Luxury Living",
    description:
      "Luxury home interiors that blend timeless elegance with bespoke craftsmanship. Designed with intention, built with precision.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || undefined,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  publisher: "Exquisite Spaces",
  creator: "Exquisite Spaces",
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
              name: "Exquisite Spaces",
              alternateName: ["Exquisite", "Exquisite Interiors"],
              url: "https://exquisitespaces.in",
              logo: "https://exquisitespaces.in/logo.png",
              sameAs: [
                "https://www.instagram.com/exquisiteInteriors/",
                "https://in.pinterest.com/ExquisiteInteriors/",
                "https://www.facebook.com/ExquisiteInteriors/",
                "https://www.youtube.com/@ExquisiteInteriors/",
              ],
              areaServed: "IN",
              serviceType: [
                "Luxury Interior Design",
                "Turnkey Home Interiors",
                "Residential Interior Design",
                "Modular Kitchen Design",
                "Wardrobe Design",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  availableLanguage: ["en", "hi"],
                },
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
