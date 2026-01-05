export const dynamic = "force-static";
export const dynamicParams = false;

import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";

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
    gallery: [
      "/services/luxury-living-rooms/gallery1.jpg",
      "/services/luxury-living-rooms/gallery2.jpg",
      "/services/luxury-living-rooms/gallery3.jpg",
      "/services/luxury-living-rooms/gallery4.jpg"
    ],
    image: "/featured/luxury-living-room.jpg"
  },

  "designer-bedrooms": {
    title: "Designer Bedrooms",
    intro:
      "Bedrooms curated to feel calm, refined, and deeply personal.",
    about:
      "A bedroom should feel like a private retreat. We design bedrooms that blend warmth with sophistication, using subtle colour palettes, layered lighting, and carefully selected materials.",
    includes: [
      "Space planning & layout",
      "Custom wardrobes & storage",
      "Lighting & ambience design",
      "Material & finish selection",
      "Soft furnishings guidance",
    ],
    gallery: [
      "/services/designer-bedrooms/gallery1.jpg",
      "/services/designer-bedrooms/gallery2.jpg",
      "/services/designer-bedrooms/gallery3.jpg",
      "/services/designer-bedrooms/gallery4.jpg"
    ],
    image: "/featured/designer-bedrooms.jpg"
  },

  "bespoke-kitchens": {
    title: "Bespoke Modular Kitchens",
    intro:
      "Kitchens crafted with precision, efficiency, and refined aesthetics.",
    about:
      "Our kitchens are designed around how you live and cook. Every cabinet, surface, and detail is chosen to balance beauty with functionality.",
    includes: [
      "Ergonomic layout planning",
      "Premium modular systems",
      "Hardware & accessory selection",
      "Lighting & appliance planning",
      "Finish and material curation",
    ],
    gallery: [
      "/services/bespoke-kitchens/gallery1.jpg",
      "/services/bespoke-kitchens/gallery2.jpg",
      "/services/bespoke-kitchens/gallery3.jpg",
      "/services/bespoke-kitchens/gallery4.jpg",
      "/services/bespoke-kitchens/gallery5.jpg",
      "/services/bespoke-kitchens/gallery6.jpg"
    ],
    image: "/services/bespoke-kitchens/gallery1.jpg"
  },

  "premium-wardrobes": {
    title: "Premium Wardrobes & Storage",
    intro:
      "Storage solutions that integrate seamlessly into luxury interiors.",
    about:
      "We design wardrobes that feel like part of the architecture — not add-ons. Every detail is customised for ease, elegance, and longevity.",
    includes: [
      "Custom internal planning",
      "Premium shutters & finishes",
      "Smart storage solutions",
      "Integrated lighting",
      "Hardware & detailing",
    ],
    gallery: [
      "/services/premium-wardrobes/gallery1.jpg",
      "/services/premium-wardrobes/gallery2.jpg",
      "/services/premium-wardrobes/gallery3.jpg"
    ],
    image: "/featured/wardrobe.webp"
  },

  "luxury-bathrooms": {
    title: "Luxury Bathrooms",
    intro:
      "Bathrooms inspired by calm, spa-like living.",
    about:
      "Our bathrooms are curated for tranquillity and indulgence — using refined materials, balanced layouts, and soft lighting to elevate everyday routines.",
    includes: [
      "Layout & zoning",
      "Premium surface selection",
      "Lighting & mirror planning",
      "Fixture & fitting guidance",
      "Detail-driven finishing",
    ],
    gallery: [
      "/services/luxury-bathrooms/gallery1.jpg",
      "/services/luxury-bathrooms/gallery2.jpg",
      "/services/luxury-bathrooms/gallery3.jpg"
    ],
    image: "/featured/luxury-bathroom.jpg"
  },

  "complete-home-interiors": {
    title: "Complete Home Interiors",
    intro:
      "End-to-end luxury interiors — curated from concept to completion.",
    about:
      "We manage the entire journey of your home interiors — ensuring consistency, quality, and seamless execution across every space.",
    includes: [
      "Concept & design development",
      "Material & finish curation",
      "Execution coordination",
      "Quality checks & detailing",
      "Final styling & handover",
    ],
    gallery: [
      "/services/complete-home-interiors/gallery1.jpg",
      "/services/complete-home-interiors/gallery2.jpg",
      "/services/complete-home-interiors/gallery3.jpg",
      "/services/complete-home-interiors/gallery4.jpg"
    ],
    image: "/featured/home-interiors.jpg"
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  console.log("Generating metadata for service:", slug);
  const service = SERVICES[slug];
  if (!service) return {};
  return {
    title: service.title,
    description: service.intro,
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  console.log("Rendering service detail page for:", resolvedParams);
  const service = SERVICES[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  return (
    <div>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-glow">

          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />

            {/* Soft global dim */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Subtle text-side gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
          </div>

          {/* Content */}
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

      {/* About */}
      <section className="mt-14 md:mt-16">
        <Reveal>
          <SectionTitle
            kicker="Overview"
            title="Designed with intention"
            subtitle={service.about}
          />
        </Reveal>
      </section>

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
            altPrefix={service.title}
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

        <Reveal delay={0.08} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                className="inline-flex items-center justify-center rounded-full border border-brand-gold/55 bg-black/35 px-6 py-3 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
              >
                Book a Consultation
              </Link>

              <Link
                href="/services"
                prefetch={false}
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
