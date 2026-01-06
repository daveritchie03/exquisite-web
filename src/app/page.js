import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import GoldCard from "@/components/GoldCard";
import HeroCarousel from "@/components/HeroCarousel";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Exquisite - Curating Luxury Living",
  description:
    "Exquisite curates luxury residential interiors with timeless elegance, bespoke materials, and precision craftsmanship. Serving premium clients across India.",
  alternates: { canonical: "/" },
};

const checklist = [
  "Timeless Aesthetics",
  "Bespoke Material Selection",
  "Precision Craftsmanship",
  "Refined Modern Designs",
];

const expertise = [
  "Luxury Living Rooms",
  "Designer Bedrooms",
  "Bespoke Modular Kitchens",
  "Premium Wardrobes & Storage",
  "Luxury Bathrooms",
  "Exclusive Décor & Styling",
  "Complete Home Interior Projects",
];

const processSteps = [
  {
    title: "Consultation & Concept",
    desc: "We understand your lifestyle, preferences, and ambitions — and craft a concept that aligns with your aesthetic.",
  },
  {
    title: "Design Development",
    desc: "From layout to materials to moodboards, every detail is thoughtfully curated.",
  },
  {
    title: "Precision Execution",
    desc: "Our craftsmen bring the design to life with impeccable standards and zero compromise.",
  },
  {
    title: "Styling & Finishing",
    desc: "Final touches that complete the luxury experience — elegant, polished, unforgettable.",
  },
];

const whyChoose = [
  "Bespoke, One-of-a-Kind Designs",
  "Premium and Handpicked Materials",
  "Detail-Driven Craftsmanship",
  "End-to-End Execution",
  "Client-First Approach",
  "Zero Repetition, Only Exclusivity",
];

const featured = [
  { title: "Luxury Apartment", img: "/featured/work-4.jpeg" },
  { title: "Premium Villa", img: "/featured/work-3.jpeg" },
  { title: "Modern Kitchen Makeover", img: "/featured/work-6.jpg" },
  { title: "Opulent Bedroom Transformation", img: "/featured/work-5.jpeg" },
];

export default function HomePage() {
  return (
    <div className="-mx-4">
      {/* HERO */}
      <HeroCarousel
        images={["/hero/hero-1.jpg", "/hero/hero-2.jpg", "/hero/hero-3.jpg"]}
      />

      {/* PHILOSOPHY */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <Reveal>
          <SectionTitle
            kicker="The Exquisite Philosophy"
            title="Luxury Is Not Designed. It Is Curated."
            subtitle="At Exquisite, we believe a truly luxurious home is not about excess — it’s about harmony, balance, and the artful selection of elements that elevate your everyday living."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10 grid gap-6 md:grid-cols-2">
          <GoldCard title="Collaboration, not a transaction">
            Every project is a collaboration between your vision and our design
            mastery. We curate spaces that feel personal, meaningful, and
            effortlessly elegant.
          </GoldCard>

          <GoldCard title="Design with intention">
            We prioritise quality over quantity, timeless aesthetics over trends,
            and craftsmanship over compromise — so your home remains elegant for
            years to come.
          </GoldCard>
        </Reveal>
      </section>

      {/* WHAT WE CREATE */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <Reveal>
            <SectionTitle
              kicker="What We Create"
              title="Spaces That Reflect Your Aspirations"
              subtitle="We specialise in designing luxury interiors that blend comfort with sophistication — from a single room to a full home transformation."
            />
          </Reveal>

          <Reveal delay={0.08} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((x) => (
              <div
                key={x}
                className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white/80 hover:border-brand-gold/25 transition"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-gold/80" />
                  <span>{x}</span>
                </div>
              </div>
            ))}
          </Reveal>

          <p className="mt-8 text-center text-sm text-white/65">
            Each design is crafted uniquely for you — no templates, no repetition, only pure originality.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <Reveal>
          <SectionTitle
            kicker="The Exquisite Process"
            title="Simple. Personal. Tailored for You."
            subtitle="A seamless journey from concept to completion — thoughtfully curated at every step."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10 grid gap-6 md:grid-cols-2">
          {processSteps.map((s, idx) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-gold/35 bg-black/30 text-sm text-brand-gold">
                  {idx + 1}
                </div>
                <div className="font-serif text-lg text-white">{s.title}</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {s.desc}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* WHY CHOOSE */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <Reveal>
            <SectionTitle
              kicker="Why Choose Exquisite"
              title="Where Design Meets Distinction"
              subtitle="We design homes for those who seek elegance that lasts a lifetime."
            />
          </Reveal>

          <Reveal delay={0.08} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((x) => (
              <div
                key={x}
                className="rounded-2xl border border-brand-gold/18 bg-black/30 px-5 py-4 text-sm text-white/80 shadow-glow"
              >
                <span className="text-brand-gold">✔</span>
                <span className="ml-2">{x}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <Reveal>
          <SectionTitle
            kicker="Featured Work"
            title="Crafted for the Discerning Homeowner"
            subtitle="A glimpse of the spaces we curate — refined, warm, and unmistakably luxurious."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((w) => (
            <div
              key={w.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black/30"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={w.img}
                  alt={w.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="p-5">
                <div className="font-serif text-lg text-white">{w.title}</div>
                <div className="mt-2 text-sm text-white/65">
                  Curated layouts, premium finishes, and detailing that feels effortless.
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-brand-ink to-black" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-18">
          <div className="rounded-3xl border border-brand-gold/25 bg-white/5 p-8 md:p-10 shadow-glow">
            <div className="text-xs tracking-[0.28em] uppercase text-white/60">
              Work With Us
            </div>
            <div className="mt-3 font-serif text-3xl text-white md:text-4xl">
              Begin Your Luxury Home Journey
            </div>
            <p className="mt-4 text-white/70 leading-relaxed max-w-2xl">
              Let’s transform your home into a space that inspires, comforts, and elevates your lifestyle.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex items-center justify-center rounded-full border border-brand-gold/45 bg-black/30 px-6 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
              >
                Book a Consultation
              </Link>

              <a
                href="tel:+919885668317"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/85 hover:text-white hover:border-white/25 transition"
              >
                Call: +91 988 5668 317
              </a>
            </div>

            <div className="mt-6 text-sm text-white/55">
              Serving premium clients across India.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
