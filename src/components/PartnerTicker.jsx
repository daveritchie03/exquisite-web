"use client";

import Image from "next/image";

export default function PartnerTicker({ partners = [] }) {
  return (
    <marquee
      behavior="scroll"
      direction="left"
      scrollamount="6"
      onMouseOver={(e) => e.currentTarget.stop()}
      onMouseOut={(e) => e.currentTarget.start()}
    >
      <div className="inline-flex items-center gap-12">
        {partners.concat(partners).map((p, idx) => (
          <span key={`${p.name}-${idx}`} className="inline-block align-middle">
            <span className="relative inline-block h-16 w-44 md:h-20 md:w-52">
              <Image
                src={p.logo}
                alt={p.name}
                fill
                className="object-contain opacity-90"
              />
            </span>
          </span>
        ))}
      </div>
    </marquee>
  );
}
