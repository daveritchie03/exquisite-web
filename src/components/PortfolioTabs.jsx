"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const CATEGORIES = [
  {
    key: "bedroom",
    label: "Designer Bedrooms",
    title: "Bedrooms designed for calm, comfort, and quiet luxury",
    desc: "Layered lighting, premium finishes, and thoughtful layouts that transform bedrooms into personal retreats.",
    bullets: [
      "Warm ambient lighting",
      "Premium wardrobe finishes",
      "Soft colour palettes",
      "Integrated storage solutions",
    ],
    images: [
      "/services/designer-bedrooms/gallery1.jpg",
      "/services/designer-bedrooms/gallery2.jpg",
      "/services/designer-bedrooms/gallery3.jpg",
      "/services/designer-bedrooms/gallery4.jpg",
    ],
  },
  {
    key: "kitchen",
    label: "Bespoke Kitchens",
    title: "Kitchens crafted for precision, flow, and elegance",
    desc: "Ergonomic layouts and premium systems designed to make everyday cooking effortless.",
    bullets: [
      "Ergonomic work triangle",
      "Premium shutters & hardware",
      "Smart internal organisers",
      "Seamless appliance integration",
    ],
    images: [
      "/services/bespoke-kitchens/gallery1.jpg",
      "/services/bespoke-kitchens/gallery2.jpg",
      "/services/bespoke-kitchens/gallery3.jpg",
      "/services/bespoke-kitchens/gallery4.jpg",
      "/services/bespoke-kitchens/gallery5.jpg",
      "/services/bespoke-kitchens/gallery6.jpg",
    ],
  },
  {
    key: "living",
    label: "Luxury Living Rooms",
    title: "Living rooms curated for elegance and hosting",
    desc: "Balanced proportions, texture-rich finishes, and statement lighting that define luxury living.",
    bullets: [
      "Feature walls & panelling",
      "Layered lighting design",
      "Luxury seating layouts",
      "Material-driven aesthetics",
    ],
    images: [
      "/services/luxury-living-rooms/gallery1.jpg",
      "/services/luxury-living-rooms/gallery2.jpg",
      "/services/luxury-living-rooms/gallery3.jpg",
      "/services/luxury-living-rooms/gallery4.jpg",
    ],
  },
  {
    key: "wardrobe",
    label: "Premium Wardrobes",
    title: "Wardrobes that feel architectural, not added",
    desc: "Custom internal planning and refined finishes that integrate seamlessly into the space.",
    bullets: [
      "Custom internal layouts",
      "Integrated lighting",
      "Luxury laminates & veneers",
      "Soft-close hardware",
    ],
    images: [
      "/services/premium-wardrobes/gallery1.jpg",
      "/services/premium-wardrobes/gallery2.jpg",
      "/services/premium-wardrobes/gallery3.jpg",
    ],
  },
];

function Carousel({ images }) {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i) => {
    const el = ref.current;
    if (!el) return;
    const item = el.children[i];
    if (!item) return;
    item.scrollIntoView({ behavior: "smooth", inline: "start" });
    setIndex(i);
  };

  return (
    <div className="relative">
      {/* arrows */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 hidden items-center justify-between sm:flex">
        <button
          onClick={() => scrollTo(Math.max(index - 1, 0))}
          className="pointer-events-auto ml-3 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/40 text-white/80 backdrop-blur transition hover:border-brand-gold/35 hover:shadow-glow"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollTo(Math.min(index + 1, images.length - 1))}
          className="pointer-events-auto mr-3 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/40 text-white/80 backdrop-blur transition hover:border-brand-gold/35 hover:shadow-glow"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="group relative w-[80%] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <div className="relative aspect-[16/10] bg-black/20">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* dots */}
      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-2.5 rounded-full transition ${
              i === index
                ? "w-6 bg-brand-gold shadow-glow"
                : "w-2.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function PortfolioTabs() {
  const [active, setActive] = useState(CATEGORIES[0].key);
  const current = useMemo(
    () => CATEGORIES.find((c) => c.key === active),
    [active]
  );

  return (
    <div className="grid gap-10">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`rounded-full px-4 py-2 text-xs tracking-[0.22em] uppercase transition ${
              c.key === active
                ? "border border-brand-gold/55 bg-black/35 text-white shadow-glow"
                : "border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-brand-gold/25"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/35">
                <Sparkles className="h-5 w-5 text-brand-gold" />
              </div>
              <div className="font-serif text-2xl text-white">
                {current.title}
              </div>
            </div>

            <p className="mt-4 text-sm text-white/75 leading-relaxed">
              {current.desc}
            </p>

            <div className="mt-6 grid gap-3">
              {current.bullets.map((b) => (
                <div
                  key={b}
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/80 hover:border-brand-gold/25 transition"
                >
                  ✦ <span className="ml-2">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="lg:col-span-7">
          <Carousel images={current.images} />
        </Reveal>
      </div>
    </div>
  );
}
