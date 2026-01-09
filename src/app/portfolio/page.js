export const dynamic = "force-static";

export const metadata = {
    title: "Portfolio",
    description:
        "Explore Exquisite’s curated portfolio of luxury bedrooms, modular kitchens, living rooms, and premium wardrobes.",
    alternates: { canonical: "/portfolio" },
};

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import PortfolioTabs from "@/components/PortfolioTabs";
import PartnerTicker from "@/components/PartnerTicker";

const FEATURED = [
    {
        title: "Designer Bedrooms — Calm & Contemporary",
        subtitle: "Soft palette • layered lighting • bespoke storage",
        img: "/services/designer-bedrooms/gallery1.jpg",
        tag: "Designer Bedrooms",
    },
    {
        title: "Modular Kitchens — Clean Lines",
        subtitle: "Ergonomic flow • premium hardware • clutter-free",
        img: "/services/bespoke-kitchens/gallery1.jpg",
        tag: "Modular Kitchens",
    },
    {
        title: "Luxury Living Rooms — Statement Space",
        subtitle: "Feature wall • textures • balanced proportions",
        img: "/services/luxury-living-rooms/gallery1.jpg",
        tag: "Luxury Living Rooms",
    },
    {
        title: "Premium Wardrobes — Tailored Storage",
        subtitle: "Architectural fit • internal planning • lighting",
        img: "/services/premium-wardrobes/gallery1.jpg",
        tag: "Premium Wardrobes",
    },
];

function FeaturedStrip() {
    return (
        <section className="mt-10 md:mt-12 overflow-x-hidden">
            <Reveal>
                <SectionTitle
                    kicker="Featured"
                    title="A glimpse into our signature work"
                    subtitle="A few highlights across categories — designed with intention, finished with precision."
                />
            </Reveal>

            <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {FEATURED.map((p) => (
                    <Reveal
                        key={p.title}
                        className="shrink-0 w-[88%] sm:w-[62%] lg:w-[48%] snap-start"
                    >
                        <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow">
                            <div className="relative aspect-[16/9] bg-black/20">
                                <Image
                                    src={p.img}
                                    alt={`${p.title} — luxury interior design portfolio by Exquisite Spaces`}
                                    fill
                                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 62vw, 48vw"
                                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                                    priority={false}
                                />
                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35),transparent_45%,rgba(0,0,0,0.35))]" />
                                <div className="absolute left-4 top-4 rounded-full border border-brand-gold/35 bg-black/35 px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-white/85">
                                    {p.tag}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="font-serif text-xl text-white">{p.title}</div>
                                <div className="mt-2 text-sm text-white/70">{p.subtitle}</div>
                                <div className="mt-4 h-px w-full bg-white/10" />
                                <div className="mt-4 text-xs tracking-[0.22em] uppercase text-white/55">
                                    Curated Portfolio • Exquisite
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

function StatsRow() {
    const stats = [
        { k: "Design-first", v: "Every detail planned" },
        { k: "Premium finishes", v: "Luxury materials" },
        { k: "Seamless execution", v: "Timelines respected" },
        { k: "Transparent", v: "Clear milestones" },
    ];

    return (
        <section className="mt-12 md:mt-14">
            <Reveal>
                <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-4 shadow-glow">
                    {stats.map((s) => (
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

function CTA() {
    return (
        <section className="mt-14 md:mt-16">
            <Reveal>
                <div className="rounded-3xl border border-brand-gold/25 bg-white/5 p-8 md:p-10 shadow-glow">
                    <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                        Ready to Begin?
                    </div>

                    <div className="mt-3 font-serif text-3xl text-white md:text-4xl">
                        Let’s design your space with intention
                    </div>

                    <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
                        Tell us your space type, city, and timeline — we’ll suggest a design
                        direction and next steps tailored to your home.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/contact"
                            prefetch={false}
                            className="inline-flex items-center justify-center rounded-full border border-brand-gold/55 bg-black/35 px-6 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
                        >
                            Book a Consultation
                        </Link>

                        <Link
                            href="/process"
                            prefetch={false}
                            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/85 hover:text-white hover:border-white/25 transition"
                        >
                            View Our Process
                        </Link>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

const PARTNERS = [
    { name: "Franke", logo: "/partners/franke.png" },
    { name: "Hettich", logo: "/partners/hettich.jpg" },
    { name: "Airolam", logo: "/partners/airolam.png" },
    { name: "Merino Laminates", logo: "/partners/greenply.png" },
    { name: "Aristo", logo: "/partners/aristo.jpg" },
    { name: "Walls of Fame", logo: "/partners/walls-of-fame.jpg" },
    { name: "Faber", logo: "/partners/stylam.png" },
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
                            className="group relative inline-block font-medium text-white transition-colors duration-300 hover:text-brand-gold"
                        >
                            <span className="relative z-10">reach out</span>
                            <span className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-brand-gold transition-transform duration-300 group-hover:scale-x-100" />
                        </Link>{" "}
                        — we may be able to support select projects.
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

export default function PortfolioPage() {
    return (
        <div className="grid gap-10">
            {/* SEO: Organization schema */}
            <Script
                id="portfolio-org-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Exquisite",
                        url: "https://exquisitespaces.in",
                        brand: PARTNERS.map((p) => ({
                            "@type": "Brand",
                            name: p.name,
                        })),
                    }),
                }}
            />

            <Reveal>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-glow">
                    <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                        Portfolio
                    </div>

                    <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                        Signature Spaces
                    </h1>

                    <p className="mt-5 max-w-3xl text-white/70 leading-relaxed">
                        Explore curated interiors by category — each space designed with
                        proportion, finish, and flow at the centre of every decision.
                    </p>
                </div>
            </Reveal>

            <FeaturedStrip />
            <StatsRow />

            <section className="mt-6">
                <Reveal>
                    <SectionTitle
                        kicker="Explore by Category"
                        title="Four interior categories, curated to perfection"
                        subtitle="Bedrooms, modular kitchens, living rooms, and premium wardrobes — each with its own design language and finish philosophy."
                    />
                </Reveal>

                <div className="mt-8">
                    <PortfolioTabs />
                </div>
            </section>

            <section id="auth-partners" className="mt-16 md:mt-20">
                <Reveal>
                    <h2 className="text-center font-serif text-3xl md:text-4xl text-white">
                        Authorised <span className="text-brand-gold">Partners</span>
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/65 leading-relaxed">
                        We work with trusted brands for premium finishes, durability, and refined
                        detailing — ensuring quality across every space.
                    </p>
                </Reveal>

                <Reveal delay={0.05}>
                    <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-8 shadow-glow">
                        <PartnerTicker partners={PARTNERS} />
                        <ul className="sr-only">
                            {PARTNERS.map((p) => (
                                <li key={`seo-${p.name}`}>{p.name}</li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </section>

            <ServiceLocations />
            <CTA />
        </div>
    );
}
