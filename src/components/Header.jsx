import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Our Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
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

        <Link
          href="/contact"
          prefetch={false}
          className="rounded-full border border-brand-gold/40 bg-brand-charcoal px-4 py-2 text-sm text-white hover:border-brand-gold hover:shadow-glow transition"
        >
          Book a Consultation
        </Link>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2 px-3 py-2 text-xs">
          {nav.slice(0, 6).map((i) => (
            <Link
              key={i.href}
              prefetch={false}
              href={i.href}
              className="rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-center text-white/75 hover:text-white hover:border-brand-gold/30 transition"
            >
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
