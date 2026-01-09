export default function sitemap() {
    const baseUrl = "https://exquisitespaces.in";
    const now = new Date();

    const staticRoutes = [
        "",
        "/about",
        "/services",
        "/contact",
        "/portfolio",
        "/blogs",
        "/pricing",
        "/process",
    ];

    const serviceSlugs = [
        "luxury-living-rooms",
        "designer-bedrooms",
        "bespoke-kitchens",
        "premium-wardrobes",
        "luxury-bathrooms",
        "complete-home-interiors",
    ];

    const blogSlugs = [
        "luxury-living-rooms",
        "designer-bedrooms",
        "bespoke-modular-kitchens",
        "premium-wardrobes-storage",
        "luxury-bathrooms",
        "complete-home-interiors",
    ];

    return [
        ...staticRoutes.map((path) => ({
            url: `${baseUrl}${path}`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: path === "" ? 1 : 0.8,
        })),

        ...serviceSlugs.map((slug) => ({
            url: `${baseUrl}/services/${slug}`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        })),

        ...blogSlugs.map((slug) => ({
            url: `${baseUrl}/blogs/${slug}`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.6,
        })),
    ];
}
