export const dynamic = "force-static";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import {
    MessageSquareText,
    LayoutGrid,
    Palette,
    Box,
    ClipboardCheck,
    Sparkles,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Our Process | Exquisite",
    description:
        "A refined, transparent interior design process — from consultation and concept to execution and handover.",
    alternates: { canonical: "/process" },
};

const STEPS = [
    {
        step: "01",
        title: "Consultation & Brief",
        desc: "We start with a conversation — your lifestyle, goals, preferences, budget, and timelines. This sets a clear direction before we design anything.",
        points: [
            "Requirement gathering",
            "Site understanding",
            "Style & functional priorities",
            "Budget & timeline alignment",
        ],
        icon: MessageSquareText
    },
    {
        step: "02",
        title: "Concept & Space Planning",
        desc: "We create the layout logic — flow, proportions, zoning, and visual balance. The foundation for a luxurious home is always an intelligent plan.",
        points: [
            "Layout options & zoning",
            "Furniture placement guidance",
            "Lighting intent planning",
            "Design direction & mood",
        ],
        icon: LayoutGrid
    },
    {
        step: "03",
        title: "Material & Finish Curation",
        desc: "Textures, tones, and finishes are chosen to feel cohesive and timeless. Every selection is curated to elevate the home — not overwhelm it.",
        points: [
            "Material palette curation",
            "Finish combinations",
            "Hardware & detailing",
            "Sampling & approvals",
        ],
        icon: Palette
    },
    {
        step: "04",
        title: "3D Visualisation",
        desc: "We bring the design to life through realistic views so you can make decisions with confidence before execution begins.",
        points: [
            "3D views for key areas",
            "Refinements & iterations",
            "Design sign-off",
            "Execution readiness",
        ],
        icon: Box
    },
    {
        step: "05",
        title: "Execution & Quality Checks",
        desc: "Our team coordinates execution and conducts quality checks at every stage — ensuring precision, alignment, and finish consistency.",
        points: [
            "Vendor coordination",
            "Site supervision",
            "Milestone quality checks",
            "Detail & finish validation",
        ],
        icon: ClipboardCheck
    },
    {
        step: "06",
        title: "Styling & Handover",
        desc: "Final touches matter. We complete the project with finishing details and a clean handover — so the home feels ready to live in.",
        points: [
            "Final detailing",
            "Styling guidance",
            "Project walkthrough",
            "Handover support",
        ],
        icon: Sparkles
    },
];

function Bullet({ children }) {
    return (
        <div className="flex gap-3 text-sm text-white/75">
            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-gold/90" />
            <span>{children}</span>
        </div>
    );
}

export default function ProcessPage() {
    return (
        <div>
            {/* Hero */}
            <Reveal>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-glow">
                    <div className="text-xs tracking-[0.28em] uppercase text-white/60">
                        Our Process
                    </div>

                    <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                        A refined journey — from concept to completion
                    </h1>

                    <p className="mt-5 max-w-3xl text-white/75 leading-relaxed">
                        Luxury interiors are not rushed. Our process is designed to be clear,
                        collaborative, and detail-driven — so you know exactly what to
                        expect at each stage.
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

            {/* Visual Introduction */}
            <section className="mt-10 md:mt-12">
                <Reveal>
                    <div className="grid gap-4 md:grid-cols-3">
                        {[
                            "/process/process-1.jpeg",
                            "/process/process-2.png",
                            "/featured/work-3.jpeg",
                        ].map((src, idx) => (
                            <div
                                key={src}
                                className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                            >
                                <Image
                                    src={src}
                                    alt="Interior design process"
                                    fill
                                    className={`object-cover kenburns-soft transition duration-700 group-hover:scale-[1.08] ${idx === 1 ? "delay-150" : ""
                                        }`}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority={idx === 0}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
                                <div className="absolute inset-0 ring-1 ring-white/5" />
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* Intro */}
            <section className="mt-14 md:mt-16">
                <Reveal>
                    <SectionTitle
                        kicker="How We Work"
                        title="Structured, transparent, and design-led"
                        subtitle="Each step is planned to reduce uncertainty, protect your time, and maintain a cohesive luxury finish across every space."
                    />
                </Reveal>
            </section>

            {/* Timeline */}
            <section className="mt-10 md:mt-12">
                <div className="relative">
                    {/* vertical line */}
                    <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-white/10 sm:block" />

                    <div className="space-y-6">
                        {STEPS.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <Reveal key={s.step} delay={i * 0.04}>
                                    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-glow">
                                        {/* dot */}
                                        <div className="absolute -left-1 top-8 hidden sm:block">
                                            <div className="h-3 w-3 rounded-full bg-brand-gold shadow-glow" />
                                        </div>

                                        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                                            <div className="md:max-w-xl">
                                                <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                                                    Step {s.step}
                                                </div>

                                                <div className="mt-3 flex items-center gap-3">
                                                    <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/35">
                                                        <Icon className="h-5 w-5 text-brand-gold" />
                                                    </div>

                                                    <div className="font-serif text-2xl text-white md:text-3xl">
                                                        {s.title}
                                                    </div>
                                                </div>

                                                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                                                    {s.desc}
                                                </p>
                                            </div>

                                            <div className="grid gap-3 md:w-[340px]">
                                                {s.points.map((p) => (
                                                    <Bullet key={p}>{p}</Bullet>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Mini FAQ */}
            <section className="mt-14 md:mt-16">
                <Reveal>
                    <SectionTitle
                        kicker="What To Expect"
                        title="Common questions"
                        subtitle="A few quick answers to help you plan confidently."
                    />
                </Reveal>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    <Reveal delay={0.05}>
                        <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                            <div className="font-serif text-lg text-white">
                                How long does a full home project take?
                            </div>
                            <p className="mt-2 text-sm text-white/75 leading-relaxed">
                                Timelines depend on scope and site readiness. After the initial
                                consultation, we provide a clear milestone-based plan so you
                                always know what comes next.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                            <div className="font-serif text-lg text-white">
                                Can I start with just one room?
                            </div>
                            <p className="mt-2 text-sm text-white/75 leading-relaxed">
                                Yes. Many clients begin with a living room, bedroom, or kitchen
                                and expand later — the design language can remain cohesive.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.11}>
                        <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                            <div className="font-serif text-lg text-white">
                                Do you help with material selection?
                            </div>
                            <p className="mt-2 text-sm text-white/75 leading-relaxed">
                                Absolutely. We curate materials, finishes, and hardware so the
                                overall palette feels refined — and stays consistent through
                                execution.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.14}>
                        <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                            <div className="font-serif text-lg text-white">
                                Is execution included?
                            </div>
                            <p className="mt-2 text-sm text-white/75 leading-relaxed">
                                We can support end-to-end execution with quality checks and
                                coordination, depending on your package and requirements.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* CTA */}
            <section className="mt-14 md:mt-16">
                <Reveal>
                    <div className="rounded-3xl border border-brand-gold/25 bg-white/5 p-8 md:p-10 shadow-glow">
                        <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                            Ready to begin?
                        </div>

                        <div className="mt-3 font-serif text-3xl text-white md:text-4xl">
                            Let’s curate your home, beautifully.
                        </div>

                        <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
                            Tell us what you’re building — we’ll guide you through the next
                            steps with clarity, intention, and premium detailing.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-brand-gold/55 bg-black/35 px-6 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
                            >
                                Book a Consultation
                            </Link>

                            <Link
                                href="/pricing"
                                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/85 hover:text-white hover:border-white/25 transition"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
