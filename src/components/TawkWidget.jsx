"use client";

import Script from "next/script";

export default function TawkWidget() {
  // Put your real Tawk embed URL here:
  const src = "https://embed.tawk.to/695d5ca01b9b1e197b61023d/1jeab3lev";

  return (
    <Script
      id="tawk-widget"
      src={src}
      strategy="afterInteractive"
    />
  );
}
