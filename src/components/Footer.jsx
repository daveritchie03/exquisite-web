import Link from "next/link";
import WhatsappIcon from "@/components/icons/WhatsappIcon";

const WHATSAPP_NUMBER = "919885668317";
const WHATSAPP_TEXT = "I would like to do interiors to my house!";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-brand-black">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-serif text-xl">Exquisite</div>
            <div className="mt-2 text-sm text-white/65">
              Exquisite — Curating Luxury Living
            </div>
            <div className="mt-4 text-sm text-white/55">
              Hyderabad, India (Serving premium clients across India)
            </div>
          </div>

          <div className="text-sm">
            <div className="text-white/80 mb-3">Quick Links</div>
            <div className="grid gap-2 text-white/60">
              <Link
                className="hover:text-white"
                prefetch={false}
                href="/services"
              >
                Services
              </Link>
              <Link
                className="hover:text-white"
                prefetch={false}
                href="/process"
              >
                Our Process
              </Link>
              <Link
                className="hover:text-white"
                prefetch={false}
                href="/pricing"
              >
                Pricing
              </Link>
              <Link
                className="hover:text-white"
                prefetch={false}
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="text-sm">
            <div className="text-white/80 mb-3">Contact</div>
            <div className="grid gap-2 text-white/60">
              <a className="hover:text-white" href="tel:+919885668317">
                +91 988 566 8317
              </a>
              <a
                className="hover:text-white"
                href="mailto:contact@exquisite.in"
              >
                contact@exquisite.in
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/45">
          © {new Date().getFullYear()} Exquisite. All rights reserved.
        </div>
      </div>
      {/* Mobile Floating WhatsApp FAB */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="wa-soft-pulse bottom-5 fixed right-5 z-[60] grid h-14 w-14 place-items-center rounded-full border border-emerald-300/40 bg-emerald-500/20 backdrop-blur md:hidden shadow-[0_18px_55px_rgba(0,0,0,0.55)] transition hover:bg-emerald-500/25 hover:border-emerald-300/60"
      >
        <WhatsappIcon className="h-7 w-7 text-emerald-300" />
      </a>
    </footer>
  );
}
