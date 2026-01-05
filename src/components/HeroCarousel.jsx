"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroCarousel({
  images = ["/hero/hero-1.jpg", "/hero/hero-2.jpg", "/hero/hero-3.jpg"],
  intervalMs = 6500,
}) {
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const [active, setActive] = useState(0);

  const reduce = useReducedMotion();

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [slides.length, intervalMs]);

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      {/* Background layer */}
      <div className="absolute inset-0 -z-10">
        {/* Images */}
        {slides.map((src, idx) => (
          <div
            key={src}
            className={[
              "absolute inset-0 transition-opacity duration-[1200ms] ease-in-out",
              idx === active ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            <Image
              src={src}
              alt="Luxury living room interior by Exquisite"
              fill
              priority={idx === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Overlays ABOVE images */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-brand-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/35" />
      </div>

      {/* Content layer */}
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={reduce ? {} : { opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs tracking-[0.28em] uppercase text-white/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold/80" />
              Exquisite
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 font-serif text-4xl leading-[1.05] text-white md:text-6xl"
            >
              Curating Luxury Living
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 text-base md:text-lg text-white/80 leading-relaxed"
            >
              Timeless interiors crafted with bespoke materials and refined
              precision.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex items-center justify-center rounded-full border border-brand-gold/55 bg-black/35 px-6 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
              >
                Book a Consultation
              </Link>

              <Link
                href="/services"
                prefetch={false}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/30 px-6 py-3 text-sm text-white/90 hover:text-white hover:border-white/30 transition"
              >
                Explore Services
              </Link>
            </motion.div>

            {!reduce && slides.length > 1 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.45 }}
                className="mt-10 flex items-center gap-2"
              >
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={[
                      "h-1.5 rounded-full transition-all duration-300",
                      i === active
                        ? "w-10 bg-brand-gold/80"
                        : "w-5 bg-white/25",
                    ].join(" ")}
                  />
                ))}
              </motion.div>
            ) : slides.length > 1 ? (
              <div className="mt-10 flex items-center gap-2">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={[
                      "h-1.5 rounded-full transition-all duration-300",
                      i === active
                        ? "w-10 bg-brand-gold/80"
                        : "w-5 bg-white/25",
                    ].join(" ")}
                  />
                ))}
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
