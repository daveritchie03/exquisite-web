"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function ImageCarousel({
  images = [],
  altPrefix = "Luxury interior design by Exquisite Spaces",
  className = "",
}) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const safeImages = useMemo(
    () => (Array.isArray(images) ? images.filter(Boolean) : []),
    [images]
  );

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const w = el.clientWidth || 1;
      const i = Math.round(el.scrollLeft / w);
      setIndex(Math.max(0, Math.min(i, safeImages.length - 1)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => el.removeEventListener("scroll", onScroll);
  }, [safeImages.length]);

  const scrollTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const w = el.clientWidth || 1;
    el.scrollTo({ left: w * i, behavior: "smooth" });
  };

  const prev = () => scrollTo(Math.max(0, index - 1));
  const next = () => scrollTo(Math.min(safeImages.length - 1, index + 1));

  if (!safeImages.length) return null;

  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow">
        <div
          ref={trackRef}
          className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
          aria-label="Project image gallery"
        >
          {safeImages.map((src, i) => {
            const isFirst = i === 0;
            const alt = `${altPrefix} — project image ${i + 1} of ${
              safeImages.length
            }`;

            return (
              <div
                key={`${src}-${i}`}
                className="relative w-full flex-none snap-center aspect-[16/10] sm:aspect-[16/9]"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 960px"
                  loading={isFirst ? "eager" : "lazy"}
                  fetchPriority={isFirst ? "high" : "auto"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/10" />
              </div>
            );
          })}
        </div>

        {/* Controls */}
        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous gallery image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-white/90 backdrop-blur hover:border-white/25 transition"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next gallery image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-white/90 backdrop-blur hover:border-white/25 transition"
            >
              ›
            </button>
          </>
        )}

        {/* Dots */}
        {safeImages.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {safeImages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to gallery image ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index
                    ? "bg-brand-gold"
                    : "bg-white/30 hover:bg-white/45"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
