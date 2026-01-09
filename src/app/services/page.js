export const dynamic = "force-static";

export const metadata = {
    title: "Luxury Interior Design Services in India | Exquisite Spaces",
    description:
        "Explore luxury interior design services by Exquisite Spaces — living rooms, designer bedrooms, bespoke modular kitchens, premium wardrobes, luxury bathrooms, and complete home interiors across India.",
    keywords: [
        "luxury interior design services",
        "turnkey interior solutions",
        "luxury home interiors",
        "residential interior design",
        "living room interior design",
        "designer bedroom interiors",
        "modular kitchen design",
        "wardrobe design",
        "luxury bathroom design",
        "complete home interiors",
        "interior designers in India",
        "Exquisite Spaces",
        "exquisitespaces.in",
    ],
    alternates: { canonical: "/services" },
    openGraph: {
        title: "Luxury Interior Design Services in India | Exquisite Spaces",
        description:
            "Luxury interior design services with bespoke materials and turnkey execution — curated for premium homes across India.",
        url: "https://exquisitespaces.in/services",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Luxury Interior Design Services in India | Exquisite Spaces",
        description:
            "Luxury interior design services with bespoke materials and turnkey execution — curated for premium homes across India.",
    },
};

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

const SERVICES = [
    {
        title: "Luxury Living Rooms",
        slug: "luxury-living-rooms",
        desc: "Elegant living spaces designed for comfort, conversation, and timeless appeal.",
        image: "/featured/luxury-living-room.jpg",
        highlights: ["Feature walls", "Lighting layers", "Premium upholstery"],
    },
    {
        title: "Designer Bedrooms",
        slug: "designer-bedrooms",
        desc: "Refined bedrooms that balance warmth, sophistication, and functionality.",
        image: "/featured/designer-bedrooms.jpg",
        highlights: ["Wardrobe planning", "Soft palettes", "Mood lighting"],
    },
    {
        title: "Bespoke Modular Kitchens",
        slug: "bespoke-kitchens",
        desc: "Thoughtfully planned kitchens crafted with premium materials and precision.",
        image: "/featured/kitchen.jpg",
        highlights: ["Ergonomic layouts", "Hardware upgrades", "Easy maintenance"],
    },
    {
        title: "Premium Wardrobes & Storage",
        slug: "premium-wardrobes",
        desc: "Custom storage solutions designed to blend seamlessly into your interiors.",
        image: "/featured/wardrobe.webp",
        highlights: ["Internal organisers", "Lighting", "Luxury finishes"],
    },
    {
        title: "Luxury Bathrooms",
        slug: "luxury-bathrooms",
        desc: "Calm, spa-inspired bathrooms curated with refined finishes and details.",
        image: "/featured/luxury-bathroom.jpg",
        highlights: ["Wet/dry zoning", "Premium fittings", "Statement surfaces"],
    },
    {
        title: "Complete Home Interiors",
        slug: "complete-home-interiors",
        desc: "End-to-end interior design solutions — from concept to flawless execution.",
        image: "/featured/home-interiors.jpg",
        highlights: ["Turnkey delivery", "Unified design language", "Timeline-led execution"],
    },
];

const VALUE_POINTS = [
    {
        k: "Design-first",
        v: "Layouts and proportions are perfected before any finish is chosen.",
    },
    {
        k: "Premium materials",
        v: "We prioritise durability, feel, and refinement — not trends for the sake of it.",
    },
    {
        k: "Execution-led planning",
        v: "Drawings, BOQs, and timelines built for real-world site delivery.",
    },
    {
        k: "Transparent milestones",
        v: "Clear stages, approvals, and progress visibility — no vague surprises.",
    },
];

const APPROACH = [
    {
        step: "01",
        title: "Discovery & Brief",
        desc: "We understand your lifestyle, space constraints, preferences, and priorities.",
    },
    {
        step: "02",
        title: "Concept & Layout",
        desc: "Zoning, furniture planning, storage strategy, and overall design direction.",
    },
    {
        step: "03",
        title: "Materials & Visualisation",
        desc: "Finish selection, lighting intent, and detailed look & feel development.",
    },
    {
        step: "04",
        title: "Execution & Handover",
        desc: "Site coordination, quality checks, and final styling — delivered with precision.",
    },
];

const FINISHES = [
    "Premium laminates & veneers",
    "Quartz & engineered stone counters",
    "Brushed metal hardware",
    "Soft-close mechanisms",
    "Fluted panels & textured walls",
    "Accent lighting & cove details",
    "Space-saving storage systems",
    "Moisture-safe bathroom finishes",
];

const CITIES = [
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Coimbatore",
    "Pune",
    "Noida",
    "Kolkata",
    "Thane",
    "Ghaziabad",
    "Gurugram",
    "Navi Mumbai",
    "Hubli",
    "Vijayawada",
    "Mysore",
    "Ranchi",
    "Visakhapatnam",
    "Ahmedabad",
    "Nagpur",
    "Surat",
    "Bhubaneswar",
];

function WhyExquisite() {
    return (
        <section className="mt-12 md:mt-14">
            <Reveal>
                <SectionTitle
                    kicker="Why Exquisite"
                    title="Luxury, with intention"
                    subtitle="A calm, premium finish is never accidental — it’s the result of planning, materials, and disciplined execution."
                />
            </Reveal>

            <Reveal delay={0.06}>
                <div className="mt-8 grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-4 shadow-glow">
                    {VALUE_POINTS.map((s) => (
                        <div
                            key={s.k}
                            className="rounded-2xl border border-white/10 bg-black/25 p-4"
                        >
                            <div className="text-xs tracking-[0.22em] uppercase text-white/55">
                                {s.k}
                            </div>
                            <div className="mt-2 text-sm text-white/80">{s.v}</div>
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}

function OurApproach() {
    return (
        <section className="mt-14 md:mt-16">
            <Reveal>
                <SectionTitle
                    kicker="How it works"
                    title="A process built for premium execution"
                    subtitle="We keep things simple for you — but detailed behind the scenes."
                />
            </Reveal>

            <Reveal delay={0.06}>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {APPROACH.map((a) => (
                        <div
                            key={a.step}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow"
                        >
                            <div className="flex items-start gap-4">
                                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-brand-gold/25 bg-black/35 text-xs tracking-[0.22em] text-white/85">
                                    {a.step}
                                </div>
                                <div>
                                    <div className="font-serif text-xl text-white">{a.title}</div>
                                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                                        {a.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}

function MaterialsFinishes() {
    return (
        <section className="mt-14 md:mt-16">
            <Reveal>
                <SectionTitle
                    kicker="Materials & Finishes"
                    title="Details that feel expensive"
                    subtitle="We focus on tactile quality, longevity, and a refined visual language — not flash."
                />
            </Reveal>

            <Reveal delay={0.06}>
                <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-glow">
                    <div className="flex flex-wrap gap-2">
                        {FINISHES.map((f) => (
                            <span
                                key={f}
                                className="group inline-flex items-center rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-white/75 transition hover:border-brand-gold/25 hover:text-white hover:shadow-glow"
                            >
                                <span className="mr-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-brand-gold ring-2 ring-brand-gold/30 transition group-hover:ring-brand-gold/50" />
                                {f}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-brand-gold/20 bg-black/25 p-4 text-sm text-white/70">
                        Want a specific finish aesthetic (warm minimal, modern luxe, classic)?
                        Share references — we’ll align the design language accordingly.
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

function ServiceLocations() {
    return (
        <section className="mt-14 md:mt-16">
            <Reveal>
                <SectionTitle
                    kicker="Service Locations"
                    title="Where we operate"
                    subtitle="We currently serve premium clients across these cities (India)."
                />
            </Reveal>

            <Reveal delay={0.06}>
                <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-glow">
                    <div className="flex flex-wrap gap-2">
                        {CITIES.map((c) => (
                            <span
                                key={c}
                                className="group inline-flex items-center rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-white/75 transition hover:border-brand-gold/25 hover:text-white hover:shadow-glow"
                            >
                                <span className="mr-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-brand-gold ring-2 ring-brand-gold/30 transition group-hover:ring-brand-gold/50" />
                                {c}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-brand-gold/20 bg-black/25 p-4 text-sm text-white/70">
                        Planning interiors outside these cities? Still{" "}
                        <Link
                            href="/contact"
                            prefetch={false}
                            className="relative inline-flex items-center font-medium text-brand-gold hover:text-white transition"
                        >
                            reach out
                            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brand-gold transition-transform duration-300 hover:scale-x-100" />
                        </Link>{" "}
                        — we may be able to support select projects.
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

export default function ServicesPage() {
    return (
        <div className="grid gap-10">
            {/* Intro */}
            <Reveal>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-glow">
                    <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                        Our Services
                    </div>

                    <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                        Luxury Interior Design Services
                    </h1>

                    <p className="mt-5 max-w-3xl text-white/70 leading-relaxed">
                        Exquisite Spaces offers luxury interior design services that blend timeless
                        aesthetics with bespoke craftsmanship. Every space is designed with
                        intention — tailored to your lifestyle, preferences, and aspirations.
                    </p>

                    <p className="mt-4 max-w-3xl text-white/65 leading-relaxed">
                        Whether it’s a single room or a complete home, we curate interiors
                        that feel refined, personal, and enduring.
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/portfolio"
                            prefetch={false}
                            aria-label="View Exquisite Spaces interior design portfolio"
                            className="inline-flex items-center justify-center rounded-full border border-brand-gold/35 bg-black/35 px-6 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
                        >
                            View Portfolio
                        </Link>
                        <Link
                            href="/contact"
                            prefetch={false}
                            aria-label="Book a luxury interior design consultation with Exquisite Spaces"
                            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/85 hover:text-white hover:border-white/25 transition"
                        >
                            Book a Consultation
                        </Link>
                    </div>
                </div>
            </Reveal>

            {/* Services grid */}
            <section className="mt-4">
                <Reveal>
                    <SectionTitle
                        kicker="What We Do"
                        title="Designed Around You"
                        subtitle="Our services cover every aspect of luxury residential interiors — each delivered with the same uncompromising attention to detail."
                    />
                </Reveal>

                <Reveal
                    delay={0.08}
                    className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {SERVICES.map((s, idx) => (
                        <Link
                            key={s.slug}
                            href={`/services/${s.slug}/`}
                            prefetch={false}
                            aria-label={`Explore ${s.title} by Exquisite Spaces`}
                            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-brand-gold/25 transition shadow-glow"
                        >
                            <div className="relative aspect-[16/10] bg-black/20">
                                <Image
                                    src={s.image}
                                    alt={`${s.title} — luxury interior design by Exquisite Spaces (India)`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                    priority={idx === 0}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
                                <div className="absolute left-4 top-4 rounded-full border border-brand-gold/30 bg-black/45 px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-white/85">
                                    {s.title}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="font-serif text-xl text-white">{s.title}</div>
                                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                                    {s.desc}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {s.highlights.map((h) => (
                                        <span
                                            key={h}
                                            className="inline-flex items-center rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] text-white/70"
                                        >
                                            {h}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-5 inline-flex items-center text-sm text-brand-gold">
                                    View details{" "}
                                    <span className="ml-2 transition group-hover:translate-x-1">
                                        →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Reveal>
            </section>

            <WhyExquisite />
            <OurApproach />
            <MaterialsFinishes />
            <ServiceLocations />

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
                            possibilities — and begin your journey toward a beautifully curated
                            home.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                prefetch={false}
                                aria-label="Book a consultation with Exquisite Spaces"
                                className="inline-flex items-center justify-center rounded-full border border-brand-gold/55 bg-black/35 px-6 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
                            >
                                Book a Consultation
                            </Link>
                            <a
                                href="tel:+919885668317"
                                aria-label="Call Exquisite Spaces at +91 988 5668 317"
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
