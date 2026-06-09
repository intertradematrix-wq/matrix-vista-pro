import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { brands, industries } from "@/data/site";
import { articles } from "@/data/articles";
import { products } from "@/data/products";

const BASE_URL = "https://www.matrixintertrade.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/aboutus", changefreq: "monthly", priority: "0.7" },
          { path: "/solutions", changefreq: "monthly", priority: "0.8" },
          { path: "/led-display", changefreq: "monthly", priority: "0.8" },
          { path: "/interactive-display", changefreq: "monthly", priority: "0.8" },
          { path: "/projector", changefreq: "monthly", priority: "0.8" },
          { path: "/wireless-presentation", changefreq: "monthly", priority: "0.8" },
          { path: "/av-solutions", changefreq: "monthly", priority: "0.8" },
          { path: "/brands", changefreq: "monthly", priority: "0.7" },
          { path: "/product-line", changefreq: "monthly", priority: "0.6" },
          { path: "/category/0", changefreq: "weekly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/contactus", changefreq: "monthly", priority: "0.6" },
        ];

        const entries: SitemapEntry[] = [
          ...staticPaths,
          ...brands.map((b) => ({
            path: `/brands/${b.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
          ...industries.map((i) => ({
            path: `/industry/${i.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
          ...articles.map((a) => ({
            path: `/blog/${a.slug}`,
            changefreq: "monthly" as const,
            priority: "0.5",
          })),
          ...products.map((p) => ({
            path: `/product/${p.id}`,
            changefreq: "monthly" as const,
            priority: "0.5",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
