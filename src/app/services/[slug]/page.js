export const dynamic = "force-static";
export const dynamicParams = false;

import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";

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

const SERVICES = {
  "luxury-living-rooms": {
    title: "Luxury Living Rooms",
    intro:
      "Living rooms designed for elegance, comfort, and timeless sophistication.",
    about:
      "The living room sets the tone for your home. At Exquisite, we design luxury living spaces that feel inviting yet refined — balancing proportion, lighting, textures, and layout to create harmony.",
    includes: [
      "Custom layout planning",
      "Premium finishes and materials",
      "Thoughtful lighting design",
      "Bespoke furniture guidance",
      "Colour and texture curation",
    ],
    bestFor: [
      "New homes that need a strong design identity",
      "Homes where the living area doubles as a hosting space",
      "Clients who want a statement wall + balanced styling",
      "Spaces that need smart layout fixes without feeling crowded",
    ],
    quickFacts: [
      { k: "Ideal timeline", v: "2–6 weeks (design + execution planning)" },
      { k: "Focus areas", v: "Layout • Lighting • Feature wall • Styling" },
      { k: "Deliverables", v: "Moodboard • Layout • Finish palette • Guidance" },
    ],
    materials: [
      "Luxury wall finishes (panels, textures, fluted details)",
      "Premium laminates, veneers, and paint systems",
      "Soft furnishings guidance (curtains, rugs, upholstery)",
      "Layered lighting (ambient + accent + task)",
    ],
    faqs: [
      {
        q: "Can you design around existing furniture?",
        a: "Yes — we often retain key pieces and curate finishes, layout, lighting, and styling around them to elevate the space.",
      },
      {
        q: "Will you suggest budgets and alternatives?",
        a: "Absolutely. We propose premium-first options and smart alternatives that still keep the overall look refined.",
      },
      {
        q: "Do you manage execution as well?",
        a: "Yes. If you opt for end-to-end execution, we coordinate vendors, timelines, and detailing checks.",
      },
    ],
    gallery: [
      "/services/luxury-living-rooms/gallery1.jpg",
      "/services/luxury-living-rooms/gallery2.jpg",
      "/services/luxury-living-rooms/gallery3.jpg",
      "/services/luxury-living-rooms/gallery4.jpg",
    ],
    image: "/featured/luxury-living-room.jpg",
  },

  "designer-bedrooms": {
    title: "Designer Bedrooms",
    intro: "Bedrooms curated to feel calm, refined, and deeply personal.",
    about:
      "A bedroom should feel like a private retreat. We design bedrooms that blend warmth with sophistication, using subtle colour palettes, layered lighting, and carefully selected materials.",
    includes: [
      "Space planning & layout",
      "Custom wardrobes & storage",
      "Lighting & ambience design",
      "Material & finish selection",
      "Soft furnishings guidance",
    ],
    bestFor: [
      "Master bedrooms that need a calm, hotel-like feel",
      "Rooms that require better storage without heaviness",
      "Spaces where lighting currently feels flat or harsh",
      "Clients who want subtle luxury — not loud decor",
    ],
    quickFacts: [
      { k: "Ideal timeline", v: "2–5 weeks depending on scope" },
      { k: "Focus areas", v: "Wardrobes • Bed backdrop • Lighting • Soft tones" },
      { k: "Deliverables", v: "Layout • Storage plan • Finish palette • Styling" },
    ],
    materials: [
      "Wardrobe finishes (laminates, glass, fluted shutters)",
      "Bed backdrop options (panels, textures, soft walls)",
      "Lighting layers (cove, bedside, accent, warm tone)",
      "Soft furnishings (sheers, blackout, upholstery cues)",
    ],
    faqs: [
      {
        q: "Can you design kid bedrooms too?",
        a: "Yes — we balance play, storage, and longevity so it doesn’t feel outdated quickly.",
      },
      {
        q: "Will the bedroom look too dark with a luxury theme?",
        a: "Not at all. Luxury is about balance — we control contrast, lighting temperature, and finishes to keep it bright yet refined.",
      },
      {
        q: "Do you include wardrobe internals planning?",
        a: "Yes, internal planning is a key part — hanging, drawers, accessories, and lighting if required.",
      },
    ],
    gallery: [
      "/services/designer-bedrooms/gallery1.jpg",
      "/services/designer-bedrooms/gallery2.jpg",
      "/services/designer-bedrooms/gallery3.jpg",
      "/services/designer-bedrooms/gallery4.jpg",
    ],
    image: "/featured/designer-bedrooms.jpg",
  },

  "bespoke-kitchens": {
    title: "Bespoke Modular Kitchens",
    intro: "Kitchens crafted with precision, efficiency, and refined aesthetics.",
    about:
      "Our kitchens are designed around how you live and cook. Every cabinet, surface, and detail is chosen to balance beauty with functionality.",
    includes: [
      "Ergonomic layout planning",
      "Premium modular systems",
      "Hardware & accessory selection",
      "Lighting & appliance planning",
      "Finish and material curation",
    ],
    bestFor: [
      "Homes where cooking is frequent and workflow matters",
      "Clients who want clutter-free countertops",
      "Compact kitchens that need storage + movement balance",
      "Premium handles, channels, and hardware detailing",
    ],
    quickFacts: [
      { k: "Ideal timeline", v: "3–8 weeks depending on site readiness" },
      { k: "Focus areas", v: "Workflow • Storage • Hardware • Lighting" },
      { k: "Deliverables", v: "Layout • Elevations • Finish palette • Specs" },
    ],
    materials: [
      "Countertops (quartz, granite guidance)",
      "Shutters (premium laminates, acrylic, glass options)",
      "Hardware & accessories (soft-close, baskets, organisers)",
      "Task lighting + under-cabinet lighting planning",
    ],
    faqs: [
      {
        q: "Do you plan appliances placement too?",
        a: "Yes — we plan appliance zones for safe ventilation, accessibility, and clean elevations.",
      },
      {
        q: "Can you make a small kitchen feel bigger?",
        a: "Yes — with finish choice, lighting, smarter storage, and cleaner lines, compact kitchens can feel significantly more open.",
      },
      {
        q: "Do you support parallel / L / U / island kitchens?",
        a: "Yes — we design based on your space, workflow, and usage patterns.",
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
    image: "/services/bespoke-kitchens/gallery1.jpg",
  },

  "premium-wardrobes": {
    title: "Premium Wardrobes & Storage",
    intro: "Storage solutions that integrate seamlessly into luxury interiors.",
    about:
      "We design wardrobes that feel like part of the architecture — not add-ons. Every detail is customised for ease, elegance, and longevity.",
    includes: [
      "Custom internal planning",
      "Premium shutters & finishes",
      "Smart storage solutions",
      "Integrated lighting",
      "Hardware & detailing",
    ],
    bestFor: [
      "Wardrobes that need better internal planning",
      "Spaces where wardrobes must look architectural and clean",
      "Clients who want lighting + accessories inside wardrobes",
      "Homes that need maximum storage without bulk",
    ],
    quickFacts: [
      { k: "Ideal timeline", v: "2–6 weeks depending on size" },
      { k: "Focus areas", v: "Internals • Shutters • Lighting • Accessories" },
      { k: "Deliverables", v: "Internal plan • Finish palette • Elevation cues" },
    ],
    materials: [
      "Shutters (laminate, glass, fluted, matte finish options)",
      "Accessories (trouser pull-out, organisers, mirrors)",
      "Lighting (sensor lights, warm strips if required)",
      "Hardware detailing (channels, handles, soft-close)",
    ],
    faqs: [
      {
        q: "Do you customise internals based on personal usage?",
        a: "Yes — we plan hanging, shelves, drawers and accessories based on your wardrobe habits.",
      },
      {
        q: "Will wardrobes look too heavy visually?",
        a: "No — we use clean shutter lines, balanced proportions, and finish strategy so wardrobes feel integrated, not bulky.",
      },
      {
        q: "Can you build wardrobe + dresser combinations?",
        a: "Yes — we can plan full wall solutions with dressers, mirrors, and storage together.",
      },
    ],
    gallery: [
      "/services/premium-wardrobes/gallery1.jpg",
      "/services/premium-wardrobes/gallery2.jpg",
      "/services/premium-wardrobes/gallery3.jpg",
    ],
    image: "/featured/wardrobe.webp",
  },

  "luxury-bathrooms": {
    title: "Luxury Bathrooms",
    intro: "Bathrooms inspired by calm, spa-like living.",
    about:
      "Our bathrooms are curated for tranquillity and indulgence — using refined materials, balanced layouts, and soft lighting to elevate everyday routines.",
    includes: [
      "Layout & zoning",
      "Premium surface selection",
      "Lighting & mirror planning",
      "Fixture & fitting guidance",
      "Detail-driven finishing",
    ],
    bestFor: [
      "Bathrooms that feel cramped or poorly zoned",
      "Homes that want a spa-like premium feel",
      "Upgrades with better lighting and premium surfaces",
      "Clients who want refined detailing — not loud patterns",
    ],
    quickFacts: [
      { k: "Ideal timeline", v: "2–6 weeks depending on scope" },
      { k: "Focus areas", v: "Zoning • Surfaces • Lighting • Fixtures" },
      { k: "Deliverables", v: "Surface palette • Layout cues • Fixture guidance" },
    ],
    materials: [
      "Surface selection (tiles/stone guidance and combinations)",
      "Mirror + vanity design direction",
      "Lighting strategy (warm vs neutral balance)",
      "Fittings selection and style consistency",
    ],
    faqs: [
      {
        q: "Can you make a small bathroom look premium?",
        a: "Yes — the right lighting, surface strategy, and clean detailing can elevate even compact bathrooms beautifully.",
      },
      {
        q: "Do you help with tile combinations?",
        a: "Yes — we recommend balanced combinations that look refined and avoid visual clutter.",
      },
      {
        q: "Is waterproofing and execution included?",
        a: "Execution can be included if you opt for end-to-end. We coordinate quality checks and detailing.",
      },
    ],
    gallery: [
      "/services/luxury-bathrooms/gallery1.jpg",
      "/services/luxury-bathrooms/gallery2.jpg",
      "/services/luxury-bathrooms/gallery3.jpg",
    ],
    image: "/featured/luxury-bathroom.jpg",
  },

  "complete-home-interiors": {
    title: "Complete Home Interiors",
    intro: "End-to-end luxury interiors — curated from concept to completion.",
    about:
      "We manage the entire journey of your home interiors — ensuring consistency, quality, and seamless execution across every space.",
    includes: [
      "Concept & design development",
      "Material & finish curation",
      "Execution coordination",
      "Quality checks & detailing",
      "Final styling & handover",
    ],
    bestFor: [
      "New apartments and villas needing end-to-end interiors",
      "Clients who want one consistent design language across rooms",
      "Homes with multiple rooms and complex coordination needs",
      "Clients who value timeline, quality, and premium finishing",
    ],
    quickFacts: [
      { k: "Ideal timeline", v: "Varies by scope (typically 6–16 weeks)" },
      { k: "Focus areas", v: "Consistency • Quality • Coordination • Detailing" },
      { k: "Deliverables", v: "Concept • Finishes • Execution plan • Styling" },
    ],
    materials: [
      "Full-home finish strategy (walls, floors, ceilings)",
      "Storage and carpentry strategy across rooms",
      "Lighting language across spaces",
      "Final styling direction for a cohesive look",
    ],
    faqs: [
      {
        q: "Do you handle everything end-to-end?",
        a: "Yes — design, materials, coordination and finishing checks, depending on your scope selection.",
      },
      {
        q: "How do you keep all rooms consistent?",
        a: "We define a home-wide design language early and ensure each room follows the same material, lighting, and proportion strategy.",
      },
      {
        q: "Can you work with a fixed timeline?",
        a: "Yes — we can plan milestones and execution scheduling based on your move-in date.",
      },
    ],
    gallery: [
      "/services/complete-home-interiors/gallery1.jpg",
      "/services/complete-home-interiors/gallery2.jpg",
      "/services/complete-home-interiors/gallery3.jpg",
      "/services/complete-home-interiors/gallery4.jpg",
    ],
    image: "/featured/home-interiors.jpg",
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = SERVICES[slug];
  if (!service) return {};

  const title = `${service.title} | Luxury Interior Design in India | Exquisite Spaces`;
  const description = `${service.intro} Bespoke materials, premium finishes, and turnkey execution by Exquisite Spaces across India.`;

  return {
    title,
    description,
    keywords: [
      `${service.title.toLowerCase()}`,
      "luxury interior design",
      "turnkey home interiors",
      "premium home interiors",
      "interior designers in India",
      "Exquisite Spaces",
      "exquisitespaces.in",
    ],
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://exquisitespaces.in/services/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function QuickFacts({ facts = [] }) {
  if (!facts.length) return null;

  return (
    <section className="mt-10">
      <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-3 shadow-glow">
        {facts.map((f) => (
          <div
            key={f.k}
            className="rounded-2xl border border-white/10 bg-black/25 p-4"
          >
            <div className="text-xs tracking-[0.22em] uppercase text-white/55">
              {f.k}
            </div>
            <div className="mt-2 text-sm text-white/80">{f.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BestFor({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="mt-14 md:mt-16">
      <Reveal>
        <SectionTitle
          kicker="Best For"
          title="Designed for real homes"
          subtitle="A few situations where this service delivers the strongest transformation."
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-10 grid gap-4 sm:grid-cols-2">
        {items.map((t) => (
          <div
            key={t}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow"
          >
            <div className="text-xs tracking-[0.22em] uppercase text-white/55">
              Use case
            </div>
            <div className="mt-2 text-sm text-white/80 leading-relaxed">{t}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function ProcessTimeline() {
  const steps = [
    {
      k: "01",
      t: "Discovery Call",
      d: "We understand your space, preferences, timeline, and the kind of luxury you like.",
    },
    {
      k: "02",
      t: "Design Direction",
      d: "Moodboard + layout ideas + finish language — aligned to your home and budget comfort.",
    },
    {
      k: "03",
      t: "Planning & Detailing",
      d: "We refine storage, lighting, materials, and the micro-details that make it feel premium.",
    },
    {
      k: "04",
      t: "Execution & Handover",
      d: "If you opt in, we coordinate execution and perform detailing checks before handover.",
    },
  ];

  return (
    <section className="mt-14 md:mt-16">
      <Reveal>
        <SectionTitle
          kicker="Process"
          title="How we work"
          subtitle="A clear, low-friction process — designed to keep quality high and decisions easy."
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-10 grid gap-4 md:grid-cols-2">
        {steps.map((s) => (
          <div
            key={s.k}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow"
          >
            <div className="flex items-center justify-between">
              <div className="text-xs tracking-[0.22em] uppercase text-white/55">
                Step {s.k}
              </div>
              <div className="rounded-full border border-brand-gold/25 bg-black/25 px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-white/70">
                Exquisite Spaces
              </div>
            </div>
            <div className="mt-3 font-serif text-xl text-white">{s.t}</div>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.d}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function MaterialsFinishes({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="mt-14 md:mt-16">
      <Reveal>
        <SectionTitle
          kicker="Materials & Finishes"
          title="Luxury lives in the details"
          subtitle="Finishes are curated to look refined today — and still feel premium years later."
        />
      </Reveal>

      <Reveal
        delay={0.08}
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((m) => (
          <div
            key={m}
            className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white/80 hover:border-brand-gold/25 transition"
          >
            <span className="text-brand-gold">✦</span>
            <span className="ml-2">{m}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

function FAQ({ faqs = [] }) {
  if (!faqs.length) return null;

  return (
    <section className="mt-14 md:mt-16">
      <Reveal>
        <SectionTitle
          kicker="FAQ"
          title="Questions we get often"
          subtitle="Short answers — like we’d explain on a discovery call."
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-10 grid gap-4">
        {faqs.map((f) => (
          <div
            key={f.q}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow"
          >
            <div className="font-serif text-lg text-white">{f.q}</div>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.a}</p>
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

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = SERVICES[slug];

  if (!service) notFound();

  const faqJsonLd =
    service.faqs?.length
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      }
      : null;

  return (
    <div>
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}

      {/* Hero */}
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow">
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={`${service.title} — luxury interior design by Exquisite Spaces (India)`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
          </div>

          <div className="relative p-8 md:p-10">
            <div className="text-xs tracking-[0.28em] uppercase text-white/55">
              Service
            </div>

            <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
              {service.title}
            </h1>

            <p className="mt-5 max-w-3xl text-white/70 leading-relaxed">
              {service.intro}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Quick facts */}
      <div className="mt-6">
        <QuickFacts facts={service.quickFacts} />
      </div>

      {/* Overview */}
      <section className="mt-14 md:mt-16">
        <Reveal>
          <SectionTitle
            kicker="Overview"
            title="Designed with intention"
            subtitle={service.about}
          />
        </Reveal>
      </section>

      {/* Best for */}
      <BestFor items={service.bestFor} />

      {/* Gallery */}
      <section className="mt-14 md:mt-16">
        <Reveal>
          <SectionTitle
            kicker="Gallery"
            title="A closer look"
            subtitle="A few visuals that represent the style, finishes, and detailing we curate for this service."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <ImageCarousel
            images={service.gallery}
            altPrefix={`${service.title} by Exquisite Spaces`}
          />
        </Reveal>
      </section>

      {/* Includes */}
      <section className="mt-14 md:mt-16">
        <Reveal>
          <SectionTitle
            kicker="What’s Included"
            title="A refined, end-to-end approach"
            subtitle="Every element is thoughtfully curated to maintain harmony, functionality, and timeless appeal."
          />
        </Reveal>

        <Reveal
          delay={0.08}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {service.includes.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white/80 hover:border-brand-gold/25 transition"
            >
              <span className="text-brand-gold">✔</span>
              <span className="ml-2">{item}</span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Process */}
      <ProcessTimeline />

      {/* Materials */}
      <MaterialsFinishes items={service.materials} />

      {/* FAQ */}
      <FAQ faqs={service.faqs} />

      {/* Locations */}
      <ServiceLocations />

      {/* CTA */}
      <section className="mt-14 md:mt-16">
        <Reveal>
          <div className="rounded-3xl border border-brand-gold/25 bg-white/5 p-8 md:p-10 shadow-glow">
            <div className="text-xs tracking-[0.28em] uppercase text-white/55">
              Let’s Discuss Your Space
            </div>

            <div className="mt-3 font-serif text-3xl text-white md:text-4xl">
              Begin your design journey
            </div>

            <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
              Speak with our design team to explore ideas, materials, and
              possibilities tailored specifically to your home.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                prefetch={false}
                aria-label={`Book a consultation for ${service.title} with Exquisite Spaces`}
                className="inline-flex items-center justify-center rounded-full border border-brand-gold/55 bg-black/35 px-6 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
              >
                Book a Consultation
              </Link>

              <Link
                href="/services"
                prefetch={false}
                aria-label="View all luxury interior design services by Exquisite Spaces"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/85 hover:text-white hover:border-white/25 transition"
              >
                View All Services
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
