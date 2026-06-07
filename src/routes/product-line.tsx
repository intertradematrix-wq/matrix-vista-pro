import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/CTASection";
import { BrandCard } from "@/components/site/BrandCard";
import { brands } from "@/data/site";
import heroProductLine from "@/assets/hero-productline.jpg";

export const Route = createFileRoute("/product-line")({
  head: () => ({
    meta: [
      { title: "Product Line — Matrix Intertrade" },
      { name: "description", content: "ภาพรวมไลน์สินค้าทั้งหมดของ Matrix Intertrade" },
      { property: "og:url", content: "/product-line" },
    ],
    links: [{ rel: "canonical", href: "/product-line" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Product Line"
        title="Product Line ทั้งหมด"
        desc="ภาพรวมแบรนด์และไลน์สินค้าที่เราจำหน่าย"
        breadcrumbs={[{ label: "สินค้า", href: "/category/0" }, { label: "Product Line" }]}
        bgImage={heroProductLine}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <BrandCard key={b.slug} {...b} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  ),
});
