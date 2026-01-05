export const dynamic = "force-static";

export const metadata = {
    title: "Contact",
    description: "Book a consultation with Exquisite.",
    alternates: { canonical: "/contact" },
};

import ContactForm from "./ContactForm";

export default function ContactPage() {
    return (
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
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
                    {/* Replace with your own curated image later */}
                    <img
                        src="/featured/contact.jpg"
                        alt="Luxury interior"
                        className="h-full w-full object-cover"
                    />
                    {/* Softer overlay so image doesn't get too dark */}
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
                                className="inline-flex items-center justify-center rounded-full border border-brand-gold/55 bg-black/35 px-5 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
                            >
                                Call: +91 988 5668 317
                            </a>

                            <a
                                href="mailto:hello@exquisiteinteriors.com"
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
                                    <span className="text-brand-gold">✓</span>
                                    A short discovery call to understand your style & needs
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-brand-gold">✓</span>
                                    Mood & direction references aligned to your space
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-brand-gold">✓</span>
                                    Transparent scope guidance (no pushy sales)
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
