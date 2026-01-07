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
    "Luxury interior design crafted with timeless elegance, bespoke materials, and precision craftsmanship. Serving premium clients across India.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Exquisite — Curating Luxury Living",
    description:
      "Where timeless elegance meets bespoke craftsmanship. Designed with intention, built with precision.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
              name: "Exquisite Interiors",
              url: "https://exquisite.in",
              sameAs: [
                "https://in.pinterest.com/ExquisiteInteriors/",
                "https://www.instagram.com/exquisiteInteriors/",
                "https://www.facebook.com/ExquisiteInteriors/",
                "https://www.youtube.com/@ExquisiteInteriors/",
                "https://www.linkedin.com",
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
