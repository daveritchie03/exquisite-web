export const dynamic = "force-static";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

const PLANS = [
    {
        name: "Essentials",
        subtitle: "Perfect for a single space refresh",
        price: "₹",
        range: "25K – 60K",
        popular: false,
        highlights: [
            "1 room design concept",
            "Layout + furniture guidance",
            "Material palette suggestions",
            "2 revisions included",
            "Shopping checklist",
        ],
        cta: { label: "Enquire Essentials", href: "/contact" },
    },
    {
        name: "Signature",
        subtitle: "Most chosen for premium home interiors",
        price: "₹",
        range: "80K – 2.5L",
        popular: true,
        highlights: [
            "2–3 spaces design + coordination",
            "Moodboards + 3D visual direction",
            "Material + finish curation",
            "Lighting intent planning",
            "Vendor alignment + guidance",
            "4 revisions included",
        ],
        cta: { label: "Book Signature", href: "/contact" },
    },
    {
        name: "Bespoke",
        subtitle: "For complete luxury home interiors",
        price: "₹",
        range: "3L+",
        popular: false,
        highlights: [
            "Full home design + execution support",
            "Detailed drawings + specifications",
            "End-to-end material finalisation",
            "Site visits + quality checks",
            "Styling + final handover",
            "Priority support",
        ],
        cta: { label: "Talk Bespoke", href: "/contact" },
    },
];

const FAQS = [
    {
        q: "Are these fixed prices?",
        a: "These are guidance ranges. Final cost depends on scope, space size, chosen materials, and execution requirements. We’ll share a clear estimate after consultation.",
    },
    {
        q: "Do you provide execution too?",
        a: "Yes. We offer both design-only and design + execution support depending on the plan. Bespoke typically includes the most complete support.",
    },
    {
        q: "What’s included in a consultation?",
        a: "A short discovery call to understand your space, goals, style preferences, and timeline—followed by the best plan recommendation and next steps.",
    },
    {
        q: "Can I customise a plan?",
        a: "Absolutely. Many clients start with Signature and tailor add-ons (extra rooms, more revisions, site visits, etc.).",
    },
];

function Check() {
    return (
        <span className="mt-[1px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-black/35 text-brand-gold">
            ✓
        </span>
    );
}

function FAQItem({ q, a }) {
    return (
        <details className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-medium text-white/90">{q}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-black/35 text-white/70 transition group-open:rotate-45 group-open:text-white">
                    +
                </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{a}</p>
        </details>
    );
}

export const metadata = {
    title: "Interior Design Pricing in India | Exquisite Spaces (Essentials, Signature, Bespoke)",
    description:
        "Explore Exquisite Spaces’ interior design pricing in India — curated plans for luxury home interiors: Essentials (₹25K–60K), Signature (₹80K–2.5L), and Bespoke (₹3L+). Book a consultation for a tailored estimate.",
    keywords: [
        "interior design pricing India",
        "interior design cost India",
        "luxury interior design pricing",
        "home interior design packages",
        "modular kitchen design cost",
        "bedroom interior design cost",
        "living room interior design cost",
        "turnkey home interiors pricing",
        "Exquisite Spaces pricing",
    ],
    alternates: { canonical: "/pricing" },
    openGraph: {
        title: "Interior Design Pricing in India | Exquisite Spaces",
        description:
            "Luxury interior design plans with transparent ranges — Essentials (₹25K–60K), Signature (₹80K–2.5L), and Bespoke (₹3L+). Book a consultation for a tailored estimate.",
        url: "https://exquisitespaces.in/pricing",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Interior Design Pricing in India | Exquisite Spaces",
        description:
            "Explore interior design pricing — Essentials, Signature, Bespoke. Book a consultation for a tailored estimate.",
    },
};

export default function PricingPage() {
    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: "Pricing | Exquisite Spaces",
                        url: "https://exquisitespaces.in/pricing",
                        description:
                            "Explore Exquisite Spaces’ interior design pricing in India — curated plans for luxury home interiors: Essentials, Signature, and Bespoke.",
                        isPartOf: {
                            "@type": "WebSite",
                            name: "Exquisite Spaces",
                            url: "https://exquisitespaces.in",
                        },
                        about: [
                            { "@type": "Service", name: "Luxury Interior Design" },
                            { "@type": "Service", name: "Home Interiors" },
                            { "@type": "Service", name: "Modular Kitchen Design" },
                        ],
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: FAQS.map((f) => ({
                            "@type": "Question",
                            name: f.q,
                            acceptedAnswer: { "@type": "Answer", text: f.a },
                        })),
                    }),
                }}
            />

            {/* Hero */}
            <section className="pt-2">
                <Reveal>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-glow">
                        <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                            Pricing
                        </div>
                        <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                            Transparent plans. Luxury results.
                        </h1>
                        <p className="mt-5 max-w-3xl text-white/70 leading-relaxed">
                            Choose a plan that matches your scope — from a single space refresh
                            to full home interiors. All plans include thoughtful curation,
                            refined detailing, and a seamless experience.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-brand-gold/55 bg-black/35 px-6 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
                            >
                                Book a Consultation
                            </Link>
                            <a
                                href="#plans"
                                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/85 hover:text-white hover:border-white/25 transition"
                            >
                                View Plans
                            </a>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Plans */}
            <section id="plans" className="mt-14 md:mt-16">
                <Reveal>
                    <SectionTitle
                        kicker="Plans"
                        title="Designed to fit your scope"
                        subtitle="Select a curated plan — each one built to keep the process clear, elevated, and detail-driven."
                    />
                </Reveal>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                    {PLANS.map((p, idx) => (
                        <Reveal key={p.name} delay={idx * 0.06}>
                            <div
                                className={[
                                    "group relative overflow-hidden rounded-3xl border bg-white/5 p-7 md:p-8 shadow-glow transition",
                                    "hover:-translate-y-1 hover:border-white/20",
                                    p.popular
                                        ? "border-brand-gold/35"
                                        : "border-white/10 hover:border-white/20",
                                ].join(" ")}
                            >
                                {/* sheen - MUST NOT block clicks */}
                                <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100">
                                    <div className="absolute -left-32 top-10 h-56 w-56 rounded-full bg-brand-gold/10 blur-3xl" />
                                    <div className="absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
                                </div>

                                {p.popular && (
                                    <div className="absolute right-6 top-6 z-20 rounded-full border border-brand-gold/35 bg-black/55 px-3 py-1 text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-brand-gold">
                                        Most Chosen
                                    </div>
                                )}

                                {/* content wrapper so badge never overlaps */}
                                <div
                                    className={[
                                        "relative z-10",
                                        p.popular ? "pt-10 md:pt-11" : "",
                                    ].join(" ")}
                                >
                                    <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                                        {p.subtitle}
                                    </div>

                                    <div className="mt-4 font-serif text-3xl text-white">
                                        {p.name}
                                    </div>

                                    <div className="mt-4 flex items-baseline gap-2">
                                        <span className="text-white/60">{p.price}</span>
                                        <span className="text-2xl text-white">{p.range}</span>
                                    </div>

                                    <div className="mt-6 grid gap-3">
                                        {p.highlights.map((h) => (
                                            <div
                                                key={h}
                                                className="flex items-start gap-3 text-sm text-white/75"
                                            >
                                                <Check />
                                                <span className="leading-relaxed">{h}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8">
                                        <Link
                                            href={p.cta.href}
                                            className={[
                                                "inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm transition",
                                                p.popular
                                                    ? "border border-brand-gold/55 bg-black/45 text-white hover:border-brand-gold hover:shadow-glow"
                                                    : "border border-white/15 bg-white/5 text-white/85 hover:text-white hover:border-white/25",
                                            ].join(" ")}
                                        >
                                            {p.cta.label}
                                        </Link>
                                    </div>

                                    <div className="mt-4 text-xs text-white/45">
                                        *Pricing depends on scope & materials.
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Add-ons */}
            <section className="mt-14 md:mt-16">
                <Reveal>
                    <SectionTitle
                        kicker="Optional Add-ons"
                        title="Tailor the experience"
                        subtitle="Add extra rooms, more revisions, site visits, or premium sourcing—based on your plan and timeline."
                    />
                </Reveal>

                <Reveal delay={0.08}>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            "Extra room / space design",
                            "Additional 3D visual direction",
                            "On-site visits & coordination",
                            "Premium material sourcing",
                            "Styling & final dressing",
                            "Fast-track timeline support",
                        ].map((a) => (
                            <div
                                key={a}
                                className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white/80 hover:border-brand-gold/25 transition"
                            >
                                <span className="text-brand-gold">＋</span>
                                <span className="ml-2">{a}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* FAQ */}
            <section className="mt-14 md:mt-16">
                <Reveal>
                    <SectionTitle
                        kicker="FAQ"
                        title="Common questions"
                        subtitle="Clear answers so you can choose with confidence."
                    />
                </Reveal>

                <Reveal delay={0.08}>
                    <div className="mt-10 grid gap-4 lg:grid-cols-2">
                        {FAQS.map((f) => (
                            <FAQItem key={f.q} q={f.q} a={f.a} />
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* CTA */}
            <section className="mt-14 md:mt-16">
                <Reveal>
                    <div className="rounded-3xl border border-brand-gold/25 bg-white/5 p-8 md:p-10 shadow-glow">
                        <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                            Next Step
                        </div>

                        <div className="mt-3 font-serif text-3xl text-white md:text-4xl">
                            Get a tailored estimate
                        </div>

                        <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
                            Tell us about your space and timeline. We’ll recommend the best
                            plan and share a clear estimate aligned to your scope.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-brand-gold/55 bg-black/35 px-6 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
                            >
                                Book a Consultation
                            </Link>

                            <Link
                                href="/services"
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
