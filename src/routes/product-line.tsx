import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/CTASection";
import { BrandCard } from "@/components/site/BrandCard";
import { brands } from "@/data/site";
import heroProductLine from "@/assets/hero-productline.jpg";
import { useLanguage, t } from "@/components/i18n/LanguageProvider";

export const Route = createFileRoute("/product-line")({
  head: () => ({
    meta: [
      { title: "Product Line — Matrix Intertrade" },
      { name: "description", content: "ภาพรวมไลน์สินค้าทั้งหมดของ Matrix Intertrade" },
      { property: "og:url", content: "/product-line" },
    ],
    links: [{ rel: "canonical", href: "/product-line" }],
  }),
  component: ProductLinePage,
});

function ProductLinePage() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHeader
        eyebrow="Product Line"
        title={t(lang, "Product Line ทั้งหมด", "All Product Lines")}
        desc={t(
          lang,
          "ภาพรวมแบรนด์และไลน์สินค้าที่เราจำหน่าย",
          "Overview of brands and product lines we distribute",
        )}
        breadcrumbs={[
          { label: t(lang, "สินค้า", "Products"), href: "/category/0" },
          { label: "Product Line" },
        ]}
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
  );
}
