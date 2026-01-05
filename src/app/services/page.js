export const dynamic = "force-static";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export const metadata = {
    title: "Luxury Interior Design Services",
    description:
        "Explore Exquisite’s luxury interior design services — curated living rooms, bespoke kitchens, designer bedrooms, premium wardrobes, and complete home interiors.",
    alternates: { canonical: "/services" },
};

const services = [
    {
        title: "Luxury Living Rooms",
        slug: "luxury-living-rooms",
        desc: "Elegant living spaces designed for comfort, conversation, and timeless appeal.",
        image: "/featured/luxury-living-room.jpg"
    },
    {
        title: "Designer Bedrooms",
        slug: "designer-bedrooms",
        desc: "Refined bedrooms that balance warmth, sophistication, and functionality.",
        image: "/featured/designer-bedrooms.jpg"
    },
    {
        title: "Bespoke Modular Kitchens",
        slug: "bespoke-kitchens",
        desc: "Thoughtfully planned kitchens crafted with premium materials and precision.",
        image: "/featured/kitchen.jpg"
    },
    {
        title: "Premium Wardrobes & Storage",
        slug: "premium-wardrobes",
        desc: "Custom storage solutions designed to blend seamlessly into your interiors.",
        image: "/featured/wardrobe.webp"
    },
    {
        title: "Luxury Bathrooms",
        slug: "luxury-bathrooms",
        desc: "Calm, spa-inspired bathrooms curated with refined finishes and details.",
        image: "/featured/luxury-bathroom.jpg"
    },
    {
        title: "Complete Home Interiors",
        slug: "complete-home-interiors",
        desc: "End-to-end interior design solutions — from concept to flawless execution.",
        image: "/featured/home-interiors.jpg"
    },
];

export default function ServicesPage() {
    return (
        <div>
            {/* Intro */}
            <Reveal>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-glow">
                    <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                        Our Services
                    </div>

                    <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                        Interior Design, Curated to Perfection
                    </h1>

                    <p className="mt-5 max-w-3xl text-white/70 leading-relaxed">
                        Exquisite offers luxury interior design services that blend timeless
                        aesthetics with bespoke craftsmanship. Every space is designed with
                        intention — tailored to your lifestyle, preferences, and aspirations.
                    </p>

                    <p className="mt-4 max-w-3xl text-white/65 leading-relaxed">
                        Whether it’s a single room or a complete home, we curate interiors
                        that feel refined, personal, and enduring.
                    </p>
                </div>
            </Reveal>

            {/* Services grid */}
            <section className="mt-14 md:mt-16">
                <Reveal>
                    <SectionTitle
                        kicker="What We Do"
                        title="Designed Around You"
                        subtitle="Our services cover every aspect of luxury residential interiors — each delivered with the same uncompromising attention to detail."
                    />
                </Reveal>

                <Reveal delay={0.08} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((s) => (
                        <Link
                            key={s.slug}
                            href={`/services/${s.slug}/`}
                            prefetch={false}
                            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-brand-gold/25 transition"
                        >
                            <div className="relative aspect-[16/10]">
                                <Image
                                    src={s.image}
                                    alt={s.title}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                    priority={false}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
                            </div>

                            <div className="p-6">
                                <div className="font-serif text-xl text-white">{s.title}</div>
                                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                                    {s.intro}
                                </p>

                                <div className="mt-5 inline-flex items-center text-sm text-brand-gold">
                                    View details <span className="ml-2 transition group-hover:translate-x-1">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Reveal>
            </section>

            {/* CTA */}
            <section className="mt-14 md:mt-16">
                <Reveal>
                    <div className="rounded-3xl border border-brand-gold/25 bg-white/5 p-8 md:p-10 shadow-glow">
                        <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                            Let’s Begin
                        </div>
                        <div className="mt-3 font-serif text-3xl text-white md:text-4xl">
                            Design a Home That Reflects You
                        </div>
                        <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
                            Speak with our design team to explore ideas, materials, and
                            possibilities — and begin your journey toward a beautifully
                            curated home.
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
