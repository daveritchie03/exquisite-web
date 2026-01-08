export const dynamic = "force-static";

export const metadata = {
    title: "Blogs",
    description:
        "Explore luxury interior design insights from Exquisite — living rooms, bedrooms, modular kitchens, wardrobes, bathrooms, and complete home interiors.",
    alternates: { canonical: "/blogs" },
};

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

const POSTS = [
    {
        slug: "luxury-living-rooms",
        title: "Luxury Living Rooms",
        excerpt:
            "Design principles, layouts, and finishes that elevate everyday living into a statement space.",
        cover: "/services/luxury-living-rooms/gallery1.jpg",
        tag: "Living Rooms",
        readTime: "6 min read",
    },
    {
        slug: "designer-bedrooms",
        title: "Designer Bedrooms",
        excerpt:
            "How to create calm, refined bedrooms with layered lighting, textures, and bespoke storage.",
        cover: "/services/designer-bedrooms/gallery1.jpg",
        tag: "Bedrooms",
        readTime: "5 min read",
    },
    {
        slug: "bespoke-modular-kitchens",
        title: "Bespoke Modular Kitchens",
        excerpt:
            "Ergonomic planning, premium hardware, and clean lines — kitchens designed for modern living.",
        cover: "/services/bespoke-kitchens/gallery1.jpg",
        tag: "Modular Kitchens",
        readTime: "7 min read",
    },
    {
        slug: "premium-wardrobes-storage",
        title: "Premium Wardrobes & Storage",
        excerpt:
            "Architectural-fit wardrobes with smart internals, lighting, and luxury finishes that last.",
        cover: "/services/premium-wardrobes/gallery1.jpg",
        tag: "Wardrobes",
        readTime: "6 min read",
    },
    {
        slug: "luxury-bathrooms",
        title: "Luxury Bathrooms",
        excerpt:
            "Spa-inspired bathrooms — zoning, materials, lighting and details that feel indulgent every day.",
        cover: "/services/luxury-bathrooms/gallery1.jpg",
        tag: "Bathrooms",
        readTime: "5 min read",
    },
    {
        slug: "complete-home-interiors",
        title: "Complete Home Interiors",
        excerpt:
            "End-to-end interior journeys — from concept to execution, with consistency across every space.",
        cover: "/services/complete-home-interiors/gallery1.jpg",
        tag: "Full Home",
        readTime: "8 min read",
    },
];

const FEATURED = POSTS.slice(0, 4);
const CATEGORIES = [
    {
        title: "Bedrooms",
        desc: "Calm palettes, layered lighting, and storage-led design.",
        img: "/services/designer-bedrooms/gallery3.jpg",
        href: "/blogs/designer-bedrooms",
    },
    {
        title: "Modular Kitchens",
        desc: "Ergonomic layouts with premium hardware and clean lines.",
        img: "/services/bespoke-kitchens/gallery3.jpg",
        href: "/blogs/bespoke-modular-kitchens",
    },
    {
        title: "Living Rooms",
        desc: "Proportion, texture, and statement details that last.",
        img: "/services/luxury-living-rooms/gallery3.jpg",
        href: "/blogs/luxury-living-rooms",
    },
    {
        title: "Wardrobes",
        desc: "Internal planning, lighting, and architectural fit.",
        img: "/services/premium-wardrobes/gallery3.jpg",
        href: "/blogs/premium-wardrobes-storage",
    },
];

function FeaturedStrip() {
    return (
        <div className="mt-8 -mx-4 px-4 overflow-x-hidden">
            <div className="relative">
                <div
                    className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory
      [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
      overscroll-x-contain"
                    style={{ WebkitOverflowScrolling: "touch" }}
                >
                    {FEATURED.map((p, i) => (
                        <Reveal
                            key={p.slug}
                            delay={i * 0.04}
                            className="snap-start flex-none w-[88%] sm:w-[62%] lg:w-[48%]"
                        >
                            <Link
                                href={`/blogs/${p.slug}`}
                                prefetch={false}
                                className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow transition hover:border-brand-gold/25"
                            >
                                <div className="relative aspect-[16/9] bg-black/25">
                                    <Image
                                        src={p.cover}
                                        alt={p.title}
                                        fill
                                        sizes="(max-width: 640px) 88vw, (max-width: 1024px) 62vw, 48vw"
                                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.30),transparent_55%,rgba(0,0,0,0.55))]" />
                                    <div className="absolute left-4 top-4 rounded-full border border-brand-gold/30 bg-black/45 px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-white/85">
                                        {p.tag}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="font-serif text-xl text-white">{p.title}</div>
                                    <div className="mt-2 text-sm text-white/70">{p.excerpt}</div>
                                    <div className="mt-4 text-xs tracking-[0.22em] uppercase text-white/45">
                                        {p.readTime}
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
}

function CategoryGrid() {
    return (
        <section className="mt-12 md:mt-14">
            <div className="mx-auto max-w-6xl px-4">
                <Reveal>
                    <SectionTitle
                        kicker="Browse by Space"
                        title="Pick a category"
                        subtitle="Each category has its own design language — explore what makes it feel premium."
                    />
                </Reveal>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {CATEGORIES.map((c, i) => (
                        <Reveal key={c.title} delay={i * 0.04}>
                            <Link
                                href={c.href}
                                prefetch={false}
                                className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow transition hover:border-brand-gold/25"
                            >
                                <div className="relative aspect-[4/5] bg-black/25">
                                    <Image
                                        src={c.img}
                                        alt={c.title}
                                        fill
                                        sizes="(max-width: 1024px) 50vw, 25vw"
                                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,0.70))]" />
                                    <div className="absolute bottom-0 p-4">
                                        <div className="font-serif text-lg text-white">
                                            {c.title}
                                        </div>
                                        <div className="mt-1 text-xs text-white/70">{c.desc}</div>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PostsGrid() {
    return (
        <section className="mt-12 md:mt-14">
            <div className="mx-auto max-w-6xl px-4">
                <Reveal>
                    <SectionTitle
                        kicker="All Articles"
                        title="Browse all posts"
                        subtitle="Short reads. Clear takeaways. Luxury-focused."
                    />
                </Reveal>

                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {POSTS.map((p, i) => (
                        <Reveal key={p.slug} delay={i * 0.03}>
                            <Link
                                href={`/blogs/${p.slug}`}
                                prefetch={false}
                                className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow transition hover:border-brand-gold/25"
                            >
                                <div className="relative aspect-[16/10] bg-black/25">
                                    <Image
                                        src={p.cover}
                                        alt={p.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25),transparent_55%,rgba(0,0,0,0.55))]" />
                                    <div className="absolute left-4 top-4 rounded-full border border-brand-gold/30 bg-black/45 px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-white/85">
                                        {p.tag}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="font-serif text-xl text-white">{p.title}</div>
                                    <div className="mt-2 text-sm text-white/70">{p.excerpt}</div>
                                    <div className="mt-4 flex items-center justify-between text-xs tracking-[0.22em] uppercase text-white/45">
                                        <span>{p.readTime}</span>
                                        <span className="text-white/55 group-hover:text-white transition">
                                            Read →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTA() {
    return (
        <section className="mt-14 md:mt-16">
            <div className="mx-auto max-w-6xl px-4">
                <Reveal>
                    <div className="rounded-3xl border border-brand-gold/25 bg-white/5 p-8 md:p-10 shadow-glow">
                        <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                            Want a tailored recommendation?
                        </div>

                        <div className="mt-3 font-serif text-3xl text-white md:text-4xl">
                            Book a consultation — we’ll guide the direction
                        </div>

                        <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
                            Tell us your space type, city, and timeline. We’ll recommend a
                            design approach and the next best steps.
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
            </div>
        </section>
    );
}

export default function BlogsPage() {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 pb-24">
            <div className="grid gap-10">
                {/* SEO: Blog schema (basic) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Blog",
                            name: "Exquisite Blog",
                            url: "https://exquisite.in/blogs",
                            blogPost: POSTS.map((p) => ({
                                "@type": "BlogPosting",
                                headline: p.title,
                                description: p.excerpt,
                                url: `https://exquisite.in/blogs/${p.slug}`,
                            })),
                        }),
                    }}
                />

                {/* Hero */}
                <Reveal>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-glow">
                        <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                            Blogs
                        </div>

                        <h1 className="mt-4 font-serif text-4xl md:text-5xl text-white leading-[1.05] break-words [text-wrap:balance]">
                            Luxury Interiors — Insights & Ideas
                        </h1>

                        <p className="mt-5 max-w-3xl text-white/70 leading-relaxed">
                            Space-wise insights on finishes, layout, lighting, and execution —
                            written to help you make better interior decisions.
                        </p>
                    </div>
                </Reveal>

                <FeaturedStrip />
                <CategoryGrid />
                <PostsGrid />
                <CTA />
            </div>
        </div>
    );
}
