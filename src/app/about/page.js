import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import GoldCard from "@/components/GoldCard";

export const metadata = {
  title: "About Us",
  description:
    "Exquisite is a luxury interior design studio curating timeless spaces with bespoke materials and precision craftsmanship. Based in Hyderabad, serving premium clients across India.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Timeless Aesthetics",
    desc: "We design beyond trends — spaces that feel elegant today and remain refined years from now.",
  },
  {
    title: "Bespoke Materials",
    desc: "Every finish, texture, and tone is curated to elevate the space and reflect your lifestyle.",
  },
  {
    title: "Precision Craftsmanship",
    desc: "We obsess over alignment, proportion, and detailing — because luxury is felt in the finish.",
  },
  {
    title: "Client-First Collaboration",
    desc: "Your vision leads. We guide with expertise and create a journey that feels effortless and personal.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Minimal page intro */}
      <Reveal>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-glow">
          <div className="text-xs tracking-[0.28em] uppercase text-white/55">
            About Exquisite
          </div>

          <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
            Curating Luxury Living
          </h1>

          <p className="mt-5 max-w-3xl text-white/70 leading-relaxed">
            Exquisite transforms homes into refined living experiences — designed
            with intention, built with precision, and curated for those who
            appreciate luxury in every detail.
          </p>

          <p className="mt-4 max-w-3xl text-white/65 leading-relaxed">
            We believe a truly luxurious home is not about excess — it’s about
            harmony, balance, and the artful selection of elements that elevate
            everyday living.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              prefetch={false}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/30 px-6 py-3 text-sm text-white/85 hover:text-white hover:border-white/25 transition"
            >
              Explore Services
            </Link>

            <Link
              href="/contact"
              prefetch={false}
              className="inline-flex items-center justify-center rounded-full border border-brand-gold/55 bg-black/35 px-6 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </Reveal>

      {/* Philosophy */}
      <section className="mt-14 md:mt-16">
        <Reveal>
          <SectionTitle
            kicker="Our Philosophy"
            title="Luxury is curated — not crowded."
            subtitle="We prioritise quality over quantity, timeless aesthetics over trends, and craftsmanship over compromise."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10 grid gap-6 md:grid-cols-2">
          <GoldCard title="Design with Intention">
            Every layout, line, and material is chosen for a reason — to create
            harmony, comfort, and elegance in daily living.
          </GoldCard>

          <GoldCard title="Originality, Always">
            Each home is crafted uniquely for you — no templates, no repetition.
            Only thoughtful design that reflects your aspirations.
          </GoldCard>
        </Reveal>
      </section>

      {/* Values */}
      <section className="mt-14 md:mt-16">
        <Reveal>
          <SectionTitle
            kicker="What We Stand For"
            title="A standard that feels unmistakably premium"
            subtitle="Luxury lives in the details — the finishes, the proportions, the lighting, and the way a space makes you feel."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-white/10 bg-black/30 p-6 hover:border-brand-gold/25 transition"
            >
              <div className="font-serif text-lg text-white">{v.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {v.desc}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mt-14 md:mt-16">
        <Reveal>
          <div className="rounded-3xl border border-brand-gold/25 bg-white/5 p-8 md:p-10 shadow-glow">
            <div className="text-xs tracking-[0.28em] uppercase text-white/55">
              Work With Us
            </div>
            <div className="mt-3 font-serif text-3xl text-white md:text-4xl">
              Let’s create something timeless.
            </div>
            <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
              Begin your luxury home journey with a consultation. We’ll align on
              your vision, your space, and the design direction — then curate a
              concept that fits you perfectly.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex items-center justify-center rounded-full border border-brand-gold/55 bg-black/35 px-6 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
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
          </div>
        </Reveal>
      </section>
    </div>
  );
}
