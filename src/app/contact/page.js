export const dynamic = "force-static";

export const metadata = {
    title: "Contact Exquisite Spaces | Book a Luxury Interior Design Consultation",
    description:
        "Book a consultation with Exquisite Spaces for luxury home interiors, modular kitchens, bedrooms, living rooms, and turnkey execution across India. Response within 24 hours.",
    keywords: [
        "contact Exquisite Spaces",
        "book interior design consultation",
        "luxury interior designers in India",
        "interior designers Hyderabad",
        "turnkey home interiors",
        "bespoke interiors",
        "modular kitchen design",
        "living room interior design",
        "bedroom interior design",
        "premium home interiors",
        "Exquisite Spaces",
        "exquisitespaces.in",
    ],
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contact Exquisite Spaces | Book a Consultation",
        description:
            "Start your luxury home interior journey with Exquisite Spaces. Book a consultation — response within 24 hours.",
        url: "https://exquisitespaces.in/contact",
        type: "website",
        images: [
            {
                url: "/featured/contact.jpg",
                width: 1200,
                height: 630,
                alt: "Exquisite Spaces — luxury interior design consultation",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Exquisite Spaces | Book a Consultation",
        description:
            "Start your luxury home interior journey with Exquisite Spaces. Book a consultation — response within 24 hours.",
        images: ["/featured/contact.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Exquisite Spaces",
        url: "https://exquisitespaces.in/contact",
        image: "https://exquisitespaces.in/featured/contact.jpg",
        telephone: "+919885668317",
        email: "hello@exquisitespaces.in",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "te"],
        sameAs: [
            "https://www.instagram.com/exquisiteInteriors/",
            "https://in.pinterest.com/ExquisiteInteriors/",
            "https://www.facebook.com/ExquisiteInteriors/",
            "https://www.youtube.com/@ExquisiteInteriors/",
        ],
    };

    return (
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Form Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10 shadow-glow">
                <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                    Contact
                </div>

                <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                    Book a Consultation
                </h1>

                <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
                    Tell us a little about your space. We’ll get back within 24 hours with
                    next steps and a design discovery call.
                </p>

                <div className="mt-8">
                    <ContactForm />
                </div>

                {/* Quick notes */}
                <div className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-black/25 p-5 text-sm text-white/70 md:grid-cols-3">
                    <div>
                        <div className="text-xs tracking-[0.22em] uppercase text-white/50">
                            Response time
                        </div>
                        <div className="mt-1 text-white/80">Within 24 hours</div>
                    </div>
                    <div>
                        <div className="text-xs tracking-[0.22em] uppercase text-white/50">
                            Project type
                        </div>
                        <div className="mt-1 text-white/80">Homes & luxury interiors</div>
                    </div>
                    <div>
                        <div className="text-xs tracking-[0.22em] uppercase text-white/50">
                            Location
                        </div>
                        <div className="mt-1 text-white/80">India (remote + onsite)</div>
                    </div>
                </div>
            </div>

            {/* Luxe Side Panel */}
            <aside className="rounded-3xl border border-white/10 bg-white/5 shadow-glow overflow-hidden">
                <div className="relative h-[260px] sm:h-[320px] lg:h-[360px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />

                    <Image
                        src="/featured/contact.jpg"
                        alt="A refined luxury home interior by Exquisite Spaces"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                        loading="lazy"
                        fetchPriority="auto"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

                    <div className="absolute left-6 right-6 bottom-6">
                        <div className="text-xs tracking-[0.28em] uppercase text-white/70">
                            Prefer a quick call?
                        </div>
                        <div className="mt-2 font-serif text-2xl text-white">
                            Speak with our design team
                        </div>

                        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="tel:+919885668317"
                                aria-label="Call Exquisite Spaces at +91 988 5668 317"
                                className="inline-flex items-center justify-center rounded-full border border-brand-gold/55 bg-black/35 px-5 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
                            >
                                Call: +91 988 5668 317
                            </a>

                            <a
                                href="mailto:hello@exquisitespaces.in"
                                aria-label="Email Exquisite Spaces to book a consultation"
                                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/85 hover:text-white hover:border-white/25 transition"
                            >
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>

                {/* Info blocks */}
                <div className="p-7 md:p-8">
                    <div className="grid gap-4">
                        <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                            <div className="text-xs tracking-[0.28em] uppercase text-white/50">
                                What to expect
                            </div>
                            <ul className="mt-3 space-y-2 text-sm text-white/75">
                                <li className="flex gap-2">
                                    <span className="text-brand-gold">✓</span>A short discovery call
                                    to understand your style & needs
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-brand-gold">✓</span>Mood & direction
                                    references aligned to your space
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-brand-gold">✓</span>Transparent scope
                                    guidance (no pushy sales)
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                            <div className="text-xs tracking-[0.28em] uppercase text-white/50">
                                Working hours
                            </div>
                            <div className="mt-2 text-sm text-white/75">
                                Mon–Sat • 10:00 AM – 7:00 PM
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
