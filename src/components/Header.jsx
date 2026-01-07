"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import WhatsappIcon from "@/components/icons/WhatsappIcon";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blogs", label: "Blogs" },
  { href: "/process", label: "Our Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const WHATSAPP_NUMBER = "919885668317";
const WHATSAPP_TEXT = "I would like to do interiors to my house!";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

export default function Header() {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const mobileNav = useMemo(() => {
    return mobileExpanded ? nav : nav.slice(0, 6);
  }, [mobileExpanded]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" prefetch={false} className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-brand-gold/30 shadow-glow">
            <Image
              src="/brand/logo.jpeg"
              alt="Exquisite — Curating Luxury Living"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg tracking-wide">Exquisite</div>
            <div className="text-xs text-white/60 tracking-[0.18em] uppercase">
              Curating Luxury Living
            </div>
          </div>
        </Link>

        <nav className="hidden gap-6 text-sm md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              prefetch={false}
              className="text-white/70 hover:text-white transition"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="wa-soft-pulse group inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/35 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-300/60 hover:shadow-glow transition"
          >
            <WhatsappIcon className="h-5 w-5 text-emerald-400 transition group-hover:scale-110" />
          </a>

          <Link
            href="/contact"
            prefetch={false}
            className="rounded-full border border-brand-gold/40 bg-brand-charcoal px-4 py-2 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile right action */}
        <div className="md:hidden">
          <Link
            href="/contact"
            prefetch={false}
            className="rounded-full border border-brand-gold/40 bg-brand-charcoal px-4 py-2 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
          >
            Book
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t border-white/10">
        <div className="mx-auto max-w-6xl px-3 py-2">
          <div className="grid grid-cols-3 gap-2 text-xs">
            {mobileNav.map((i) => (
              <Link
                key={i.href}
                prefetch={false}
                href={i.href}
                className="rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-center text-white/75 hover:text-white hover:border-brand-gold/30 transition"
              >
                {i.label}
              </Link>
            ))}

            {/* Expand / Collapse tile (spans full row) */}
            {nav.length > 6 && (
              <button
                type="button"
                onClick={() => setMobileExpanded((v) => !v)}
                className="col-span-3 mt-1 inline-flex items-center justify-center gap-2 rounded-xl border border-brand-gold/25 bg-black/25 px-3 py-2 text-[11px] tracking-[0.22em] uppercase text-white/75 hover:text-white hover:border-brand-gold/40 hover:shadow-glow transition"
                aria-expanded={mobileExpanded}
              >
                {mobileExpanded ? "Show less" : "More"}
                {mobileExpanded ? (
                  <ChevronUp className="h-4 w-4 text-brand-gold" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-brand-gold" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
