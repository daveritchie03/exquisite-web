import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

const POSTS = {
    "luxury-living-rooms": {
        title: "Luxury Living Rooms",
        intro:
            "Design principles, layouts, and finishes that elevate everyday living into a statement space.",
        cover: "/services/luxury-living-rooms/gallery1.jpg",
        readTime: "6 min read",
        category: "Living Rooms",
        takeaways: [
            "Balance statement + calm",
            "Layer lighting in 3 levels",
            "Choose 1 hero texture",
            "Keep circulation effortless",
            "Prioritise timeless proportions",
        ],
        sections: [
            {
                kicker: "Layout",
                title: "Start with flow, not furniture",
                body:
                    "A luxury living room feels effortless because movement is effortless. We plan circulation first, then anchor the room with a clean focal line — a feature wall, a window view, or a sculpted media unit.",
            },
            {
                kicker: "Materials",
                title: "Pick one hero finish, support it with neutrals",
                body:
                    "Luxury is rarely “more”. It’s usually one strong material choice (stone, veneer, textured paint) balanced with calm surfaces so the room feels refined — not busy.",
            },
            {
                kicker: "Lighting",
                title: "Layer light for mood + function",
                body:
                    "Use three layers: ambient (overall), task (reading, corners), and accent (wash walls, art). The right mix makes the room look premium even at night.",
            },
        ],
        gallery: [
            "/services/luxury-living-rooms/gallery1.jpg",
            "/services/luxury-living-rooms/gallery2.jpg",
            "/services/luxury-living-rooms/gallery3.jpg",
            "/services/luxury-living-rooms/gallery4.jpg",
        ],
    },

    "designer-bedrooms": {
        title: "Designer Bedrooms",
        intro:
            "How to create calm, refined bedrooms with layered lighting, textures, and bespoke storage.",
        cover: "/services/designer-bedrooms/gallery1.jpg",
        readTime: "5 min read",
        category: "Bedrooms",
        takeaways: [
            "Prioritise calm lighting",
            "Use soft contrasts",
            "Storage must feel architectural",
            "Keep bedside zones clean",
            "Choose tactile fabrics",
        ],
        sections: [
            {
                kicker: "Mood",
                title: "Design for the nervous system",
                body:
                    "Great bedrooms feel quieter. We reduce visual noise with softer contrasts, fewer strong patterns, and lighting that flatters skin tones and textures.",
            },
            {
                kicker: "Storage",
                title: "Wardrobes should disappear into the architecture",
                body:
                    "Bespoke storage is what makes a bedroom feel expensive. Handles, shutters, and proportions should align with wall rhythm so it feels built-in, not added later.",
            },
            {
                kicker: "Details",
                title: "Small details do the heavy lifting",
                body:
                    "Bedside switch placement, warm LEDs, and clean skirting/shadow gaps matter more than people expect. That’s where the “premium” feeling lives.",
            },
        ],
        gallery: [
            "/services/designer-bedrooms/gallery1.jpg",
            "/services/designer-bedrooms/gallery2.jpg",
            "/services/designer-bedrooms/gallery3.jpg",
            "/services/designer-bedrooms/gallery4.jpg",
        ],
    },

    "bespoke-modular-kitchens": {
        title: "Bespoke Modular Kitchens",
        intro:
            "Ergonomic planning, premium hardware, and clean lines — kitchens designed for modern living.",
        cover: "/services/bespoke-kitchens/gallery1.jpg",
        readTime: "7 min read",
        category: "Modular Kitchens",
        takeaways: [
            "Workflow beats aesthetics",
            "Hardware quality matters",
            "Ventilation planning early",
            "Lighting must be functional",
            "Keep counters clutter-free",
        ],
        sections: [
            {
                kicker: "Planning",
                title: "Design around your routine",
                body:
                    "A luxury kitchen is one where everything is exactly where you want it. We map your cooking rhythm first — then decide cabinet modules and work zones.",
            },
            {
                kicker: "Hardware",
                title: "Premium motion = premium feeling",
                body:
                    "Soft-close isn’t a luxury feature anymore — it’s the baseline. The difference comes from stability, alignment, and how the shutter feels over years of use.",
            },
            {
                kicker: "Lighting",
                title: "Task light makes finishes look expensive",
                body:
                    "Under-cabinet LEDs, warm cove light, and correct colour temperature make laminates, quartz, and metal finishes look richer instantly.",
            },
        ],
        gallery: [
            "/services/bespoke-kitchens/gallery1.jpg",
            "/services/bespoke-kitchens/gallery2.jpg",
            "/services/bespoke-kitchens/gallery3.jpg",
            "/services/bespoke-kitchens/gallery4.jpg",
            "/services/bespoke-kitchens/gallery5.jpg",
            "/services/bespoke-kitchens/gallery6.jpg",
        ],
    },

    "premium-wardrobes-storage": {
        title: "Premium Wardrobes & Storage",
        intro:
            "Architectural-fit wardrobes with smart internals, lighting, and luxury finishes that last.",
        cover: "/services/premium-wardrobes/gallery1.jpg",
        readTime: "6 min read",
        category: "Wardrobes",
        takeaways: [
            "Internals decide usability",
            "Lighting changes everything",
            "Handles vs handleless is a design choice",
            "Ventilation avoids odour build-up",
            "Finishes should match room tone",
        ],
        sections: [
            {
                kicker: "Internals",
                title: "Plan inside first",
                body:
                    "A premium wardrobe is measured in convenience: drawer heights, hanging lengths, shoe storage, accessory trays — all tailored to your actual usage.",
            },
            {
                kicker: "Lighting",
                title: "Integrated lighting adds instant luxury",
                body:
                    "Warm, diffused strips inside wardrobes make the space feel considered. It also improves daily use — especially in early mornings and night routines.",
            },
            {
                kicker: "Finishes",
                title: "Match finishes to the room’s calm",
                body:
                    "The best wardrobes don’t shout. We usually pick a calm finish that supports the bedroom palette so the space stays refined and timeless.",
            },
        ],
        gallery: [
            "/services/premium-wardrobes/gallery1.jpg",
            "/services/premium-wardrobes/gallery2.jpg",
            "/services/premium-wardrobes/gallery3.jpg",
        ],
    },

    "luxury-bathrooms": {
        title: "Luxury Bathrooms",
        intro:
            "Spa-inspired bathrooms — zoning, materials, lighting and details that feel indulgent every day.",
        cover: "/services/luxury-bathrooms/gallery1.jpg",
        readTime: "5 min read",
        category: "Bathrooms",
        takeaways: [
            "Zoning improves comfort",
            "Matte textures feel premium",
            "Mirror lighting is key",
            "Keep wet/dry separated",
            "Hardware consistency matters",
        ],
        sections: [
            {
                kicker: "Zoning",
                title: "Separate wet + dry zones",
                body:
                    "Luxury bathrooms feel calm because they’re organised. Wet/dry separation keeps things cleaner and improves the sense of space.",
            },
            {
                kicker: "Materials",
                title: "Texture over shine",
                body:
                    "We often prefer refined matte surfaces because they look premium under warm light and show fewer marks over time.",
            },
            {
                kicker: "Lighting",
                title: "Mirror lighting is non-negotiable",
                body:
                    "Good mirror lighting should be flattering and even. It’s one of the fastest ways to make a bathroom feel “hotel-grade”.",
            },
        ],
        gallery: [
            "/services/luxury-bathrooms/gallery1.jpg",
            "/services/luxury-bathrooms/gallery2.jpg",
            "/services/luxury-bathrooms/gallery3.jpg",
        ],
    },

    "complete-home-interiors": {
        title: "Complete Home Interiors",
        intro:
            "End-to-end interior journeys — from concept to execution, with consistency across every space.",
        cover: "/services/complete-home-interiors/gallery1.jpg",
        readTime: "8 min read",
        category: "Full Home",
        takeaways: [
            "One design language across rooms",
            "Materials must be consistent",
            "Execution planning is half the design",
            "Quality checks matter",
            "Styling completes the story",
        ],
        sections: [
            {
                kicker: "Concept",
                title: "One design language, many rooms",
                body:
                    "We begin with a single concept direction so rooms don’t feel like separate projects. This creates a cohesive, premium experience across the home.",
            },
            {
                kicker: "Execution",
                title: "Timelines need structure",
                body:
                    "Luxury isn’t rushed — but it’s organised. Milestones, approvals, and clear sequencing help execution stay smooth and predictable.",
            },
            {
                kicker: "Finish",
                title: "Final detailing is where luxury lives",
                body:
                    "Edges, alignments, lighting warmth, and last-mile styling bring everything together. This is the difference between ‘done’ and ‘exquisite’.",
            },
        ],
        gallery: [
            "/services/complete-home-interiors/gallery1.jpg",
            "/services/complete-home-interiors/gallery2.jpg",
            "/services/complete-home-interiors/gallery3.jpg",
            "/services/complete-home-interiors/gallery4.jpg",
        ],
    },
};

export function generateStaticParams() {
    return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const post = POSTS[resolvedParams.slug];
    if (!post) return {};
    return {
        title: post.title,
        description: post.intro,
        alternates: { canonical: `/blogs/${resolvedParams.slug}` },
    };
}

function Gallery({ images = [] }) {
    if (!images.length) return null;

    return (
        <div className="mt-8 w-full max-w-full overflow-hidden">
            <div className="flex w-full max-w-full gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {images.map((src, i) => (
                    <div
                        key={src}
                        className="snap-start flex-none w-[88%] sm:w-[62%] lg:w-[48%] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow"
                    >
                        <div className="relative aspect-[16/9] bg-black/25">
                            <Image
                                src={src}
                                alt={`Gallery image ${i + 1}`}
                                fill
                                sizes="(max-width: 640px) 88vw, (max-width: 1024px) 62vw, 48vw"
                                className="object-cover"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25),transparent_55%,rgba(0,0,0,0.45))]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default async function BlogDetailPage({ params }) {
    const resolvedParams = await params;
    const post = POSTS[resolvedParams.slug];
    if (!post) notFound();

    const related = Object.keys(POSTS)
        .filter((k) => k !== resolvedParams.slug)
        .slice(0, 4)
        .map((k) => ({ slug: k, ...POSTS[k] }));

    return (
        <div className="grid gap-10">
            {/* SEO: BlogPosting schema (basic) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: post.title,
                        description: post.intro,
                        url: `https://exquisite.in/blogs/${resolvedParams.slug}`,
                        image: `https://exquisite.in${post.cover}`,
                        author: { "@type": "Organization", name: "Exquisite" },
                        publisher: { "@type": "Organization", name: "Exquisite" },
                    }),
                }}
            />

            {/* Hero */}
            <Reveal>
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow">
                    <div className="grid gap-6 p-8 md:grid-cols-2 md:items-center md:gap-10 md:p-10">
                        <div>
                            <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                                Blog • {post.category} • {post.readTime}
                            </div>

                            <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                                {post.title}
                            </h1>

                            <p className="mt-5 max-w-xl text-white/70 leading-relaxed">
                                {post.intro}
                            </p>

                            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/contact"
                                    prefetch={false}
                                    className="inline-flex items-center justify-center rounded-full border border-brand-gold/55 bg-black/35 px-6 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
                                >
                                    Book a Consultation
                                </Link>
                                <Link
                                    href="/blogs"
                                    prefetch={false}
                                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/85 hover:text-white hover:border-white/25 transition"
                                >
                                    Back to Blogs
                                </Link>
                            </div>
                        </div>

                        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-black/25">
                            <Image
                                src={post.cover}
                                alt={post.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />
                            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),transparent_55%,rgba(0,0,0,0.45))]" />
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* Takeaways */}
            <section>
                <Reveal>
                    <SectionTitle
                        kicker="Key Takeaways"
                        title="What matters most"
                        subtitle="A quick summary before you dive deeper."
                    />
                </Reveal>

                <Reveal delay={0.05}>
                    <div className="mt-8 flex flex-wrap gap-2">
                        {post.takeaways.map((t) => (
                            <span
                                key={t}
                                className="inline-flex items-center rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-white/75 transition hover:border-brand-gold/25 hover:text-white hover:shadow-glow"
                            >
                                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-gold/70" />
                                {t}
                            </span>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* Sections */}
            <section className="grid gap-6">
                {post.sections.map((s, i) => (
                    <Reveal key={s.title} delay={i * 0.04}>
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-glow">
                            <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                                {s.kicker}
                            </div>
                            <div className="mt-3 font-serif text-2xl text-white md:text-3xl">
                                {s.title}
                            </div>
                            <p className="mt-3 text-sm text-white/75 leading-relaxed">
                                {s.body}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </section>

            {/* Gallery carousel */}
            <section>
                <Reveal>
                    <SectionTitle
                        kicker="Inspiration"
                        title="Visual cues & finishes"
                        subtitle="A few references aligned with this style direction."
                    />
                </Reveal>

                <Reveal delay={0.05}>
                    <Gallery images={post.gallery} />
                </Reveal>
            </section>

            {/* Related */}
            <section>
                <Reveal>
                    <SectionTitle
                        kicker="Related"
                        title="Continue reading"
                        subtitle="More category-wise insights from Exquisite."
                    />
                </Reveal>

                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {related.map((r, i) => (
                        <Reveal key={r.slug} delay={i * 0.03}>
                            <Link
                                href={`/blogs/${r.slug}`}
                                prefetch={false}
                                className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow transition hover:border-brand-gold/25"
                            >
                                <div className="relative aspect-[16/10] bg-black/25">
                                    <Image
                                        src={r.cover}
                                        alt={r.title}
                                        fill
                                        sizes="(max-width: 1024px) 50vw, 25vw"
                                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.20),transparent_55%,rgba(0,0,0,0.50))]" />
                                </div>
                                <div className="p-4">
                                    <div className="text-xs tracking-[0.22em] uppercase text-white/55">
                                        {r.category}
                                    </div>
                                    <div className="mt-2 font-serif text-lg text-white">
                                        {r.title}
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section>
                <Reveal>
                    <div className="rounded-3xl border border-brand-gold/25 bg-white/5 p-8 md:p-10 shadow-glow">
                        <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                            Want this style in your home?
                        </div>

                        <div className="mt-3 font-serif text-3xl text-white md:text-4xl">
                            Let’s design your space with intention
                        </div>

                        <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
                            Share your space type, city, and timeline — we’ll recommend a
                            design direction and next steps.
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
                                href="/services"
                                prefetch={false}
                                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/85 hover:text-white hover:border-white/25 transition"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
