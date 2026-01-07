export const dynamic = "force-static";

export const metadata = {
    title: "Portfolio",
    description:
        "Explore Exquisite’s curated portfolio of luxury bedrooms, modular kitchens, living rooms, and premium wardrobes.",
    alternates: { canonical: "/portfolio" },
};

import PortfolioTabs from "@/components/PortfolioTabs";

export default function PortfolioPage() {
    return (
        <div className="grid gap-10">
            {/* Page Header */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-glow">
                <div className="text-xs tracking-[0.28em] uppercase text-white/55">
                    Portfolio
                </div>

                <h1 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                    Signature Spaces
                </h1>

                <p className="mt-5 max-w-3xl text-white/70 leading-relaxed">
                    A curated collection of luxury interiors — crafted with intention,
                    refined materials, and timeless design sensibilities.
                </p>
            </div>

            {/* Portfolio Content */}
            <PortfolioTabs />
        </div>
    );
}
