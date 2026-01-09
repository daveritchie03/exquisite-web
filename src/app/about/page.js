import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import GoldCard from "@/components/GoldCard";

export const metadata = {
    title: "About Exquisite Spaces | Luxury Interior Designers in Hyderabad",
    description:
        "Exquisite Spaces is a luxury interior design studio in Hyderabad delivering bespoke, turnkey home interiors across India — crafted with premium materials and precision execution.",
    keywords: [
        "about Exquisite Spaces",
        "luxury interior designers in Hyderabad",
        "interior designers Hyderabad",
        "premium home interiors Hyderabad",
        "turnkey interior solutions",
        "bespoke interiors",
        "residential interior design",
        "luxury interior design India",
        "Exquisite Spaces",
        "exquisitespaces.in",
    ],
    alternates: { canonical: "/about" },
    openGraph: {
        title: "About Exquisite Spaces | Luxury Interior Designers in Hyderabad",
        description:
            "Luxury interior design studio in Hyderabad delivering bespoke, turnkey home interiors across India.",
        url: "https://exquisitespaces.in/about",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Exquisite Spaces | Luxury Interior Designers in Hyderabad",
        description:
            "Luxury interior design studio in Hyderabad delivering bespoke, turnkey home interiors across India.",
    },
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

const STATS = [
    { k: "Design-first", v: "Thoughtful planning" },
    { k: "Turnkey-ready", v: "End-to-end support" },
    { k: "Premium finish", v: "Detail-led execution" },
    { k: "Transparent", v: "Clear milestones" },
];

const PROCESS = [
    {
        step: "01",
        title: "Discovery & Direction",
        desc: "We understand your space, priorities, lifestyle, and the kind of luxury you love — then align on a clear direction.",
    },
    {
        step: "02",
        title: "Design & Visualisation",
        desc: "Layouts, material palettes, and design language — structured so decisions feel easy, not overwhelming.",
    },
    {
        step: "03",
        title: "Planning & Detailing",
        desc: "We refine storage, lighting, finishes, and micro-details — the part that makes a home feel truly premium.",
    },
    {
        step: "04",
        title: "Execution & Handover",
        desc: "If you opt for turnkey, we coordinate execution and quality checks, then hand over a space that’s ready to live in.",
    },
];

const REASONS = [
    {
        title: "Luxury without clutter",
        desc: "We keep spaces calm and intentional — premium doesn’t need to be loud to feel expensive.",
    },
    {
        title: "Materials that age well",
        desc: "Finishes are curated to look refined today and still feel premium years later.",
    },
    {
        title: "A process that feels effortless",
        desc: "Clear milestones, clean communication, and decisions guided with taste — not pressure.",
    },
    {
        title: "Detailing you can feel",
        desc: "Edges, alignments, lighting temperature, spacing — the small things that make the big difference.",
    },
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

function StatsRow() {
    return (
        <section className="mt-12 md:mt-14">
            <Reveal>
                <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-4 shadow-glow">
                    {STATS.map((s) => (
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

function HowWeWork() {
    return (
        <section className="mt-14 md:mt-16">
            <Reveal>
                <SectionTitle
                    kicker="How We Work"
                    title="A process designed for clarity"
                    subtitle="Luxury feels effortless when the journey is structured — here’s how we keep it smooth and precise."
                />
            </Reveal>

            <Reveal delay={0.08} className="mt-10 grid gap-4 md:grid-cols-2">
                {PROCESS.map((p) => (
                    <div
                        key={p.step}
                        className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow"
                    >
                        <div className="flex items-center justify-between">
                            <div className="text-xs tracking-[0.22em] uppercase text-white/55">
                                Step {p.step}
                            </div>
                            <div className="rounded-full border border-brand-gold/25 bg-black/25 px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-white/70">
                                Exquisite
                            </div>
                        </div>
                        <div className="mt-3 font-serif text-xl text-white">{p.title}</div>
                        <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.desc}</p>
                    </div>
                ))}
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
                    subtitle="We currently serve premium home interiors across these cities in India."
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
                            className="text-brand-gold hover:text-white transition"
                        >
                            reach out
                        </Link>{" "}
                        — we may be able to support select projects.
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

function WhyChooseUs() {
    return (
        <section className="mt-14 md:mt-16">
            <Reveal>
                <SectionTitle
                    kicker="Why Exquisite"
                    title="A standard that feels unmistakably premium"
                    subtitle="The difference is in the decisions — and the discipline to execute them well."
                />
            </Reveal>

            <Reveal delay={0.08} className="mt-10 grid gap-6 sm:grid-cols-2">
                {REASONS.map((r) => (
                    <div
                        key={r.title}
                        className="rounded-2xl border border-white/10 bg-black/30 p-6 hover:border-brand-gold/25 transition"
                    >
                        <h3 className="font-serif text-lg text-white">{r.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/70">{r.desc}</p>
                    </div>
                ))}
            </Reveal>
        </section>
    );
}

export default function AboutPage() {
    const orgJsonLd = {
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness"],
        name: "Exquisite Spaces",
        url: "https://exquisitespaces.in",
        description:
            "Luxury interior design studio in Hyderabad delivering bespoke, turnkey home interiors across India.",
        areaServed: CITIES.map((c) => ({
            "@type": "City",
            name: c,
        })),
        address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressCountry: "IN",
        },
        telephone: "+91 988 5668 317",
        sameAs: [
            "https://exquisitespaces.in",
        ],
    };

    return (
        <div>
            {/* SEO: Organization / LocalBusiness JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
            />

            {/* Minimal page intro */}
            <Reveal>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-glow">
                    <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                        About Exquisite Spaces
                    </div>

                    <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                        Luxury Interior Design Studio in Hyderabad
                    </h1>

                    <p className="mt-5 max-w-3xl text-white/70 leading-relaxed">
                        Exquisite Spaces transforms homes into refined living experiences — designed
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
                            aria-label="Explore luxury interior design services by Exquisite Spaces"
                            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/30 px-6 py-3 text-sm text-white/85 hover:text-white hover:border-white/25 transition"
                        >
                            Explore Services
                        </Link>

                        <Link
                            href="/contact"
                            prefetch={false}
                            aria-label="Book a consultation with Exquisite Spaces"
                            className="inline-flex items-center justify-center rounded-full border border-brand-gold/55 bg-black/35 px-6 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
                        >
                            Book a Consultation
                        </Link>
                    </div>
                </div>
            </Reveal>

            {/* NEW: Stats row */}
            <StatsRow />

            {/* Philosophy */}
            <section className="mt-14 md:mt-16">
                <Reveal>
                    <SectionTitle
                        kicker="Our Philosophy"
                        title="Luxury interiors are curated — not crowded."
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
                            <h2 className="font-serif text-lg text-white">{v.title}</h2>
                            <p className="mt-3 text-sm leading-relaxed text-white/70">
                                {v.desc}
                            </p>
                        </div>
                    ))}
                </Reveal>
            </section>

            {/* NEW: Why choose us */}
            <WhyChooseUs />

            {/* NEW: How we work */}
            <HowWeWork />

            {/* NEW: Locations */}
            <ServiceLocations />

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
                                aria-label="Book a luxury interior design consultation with Exquisite Spaces"
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
