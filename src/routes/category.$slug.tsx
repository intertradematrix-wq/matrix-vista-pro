import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { startTransition, useEffect, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, MessageCircle, Check, Sparkles, MapPin, Layers } from "lucide-react";
import { brandIntrosByCategoryId } from "@/data/brand-intros";
import { brandImages } from "@/data/brand-images";
import {
  fallbackProductsByCategoryId,
  loadProductsByCategoryContent,
} from "@/lib/content/products";
import { loadBrandIntroContent, type SiteBrandIntro } from "@/lib/content/site";
import { useLanguage, t } from "@/components/i18n/LanguageProvider";
import { CATEGORY_IDS_BY_SLUG, CATEGORY_SLUGS } from "@/lib/seo-slugs";

const catMap: Record<string, string> = {
  "0": "สินค้าทั้งหมด",
  "288194": "Unilumin",
  "235610": "Kramer",
  "288209": "Persona",
  "288210": "tranScreen",
  "237068": "Grandview",
  "237477": "HDMI Cable",
  "237677": "Newline",
  "237467": "Enewave",
  "237596": "Poly",
  "237676": "Yealink",
  "237678": "Vissonic",
  "237468": "AudioPressBox",
  "237069": "AVlink",
};

export const Route = createFileRoute("/category/$slug")({
  beforeLoad: ({ params }) => {
    const legacySlug = CATEGORY_SLUGS[params.slug];
    if (legacySlug) {
      throw redirect({
        to: "/category/$slug",
        params: { slug: legacySlug },
        statusCode: 301,
      });
    }
  },
  head: ({ params }) => {
    const slug = CATEGORY_SLUGS[params.slug] ?? params.slug;
    const id = CATEGORY_IDS_BY_SLUG[slug] ?? slug;
    const name = catMap[id] ?? "หมวดสินค้า";
    return {
      meta: [
        { title: `${name} - สินค้า - Matrix Intertrade` },
        { name: "description", content: `เลือกชม ${name} จาก Matrix Intertrade` },
        { property: "og:url", content: `/category/${slug}` },
      ],
      links: [{ rel: "canonical", href: `/category/${slug}` }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { lang } = useLanguage();
  const { slug } = Route.useParams();
  const id = CATEGORY_IDS_BY_SLUG[slug] ?? slug;
  const name = catMap[id]
    ? id === "0"
      ? t(lang, "สินค้าทั้งหมด", "All Products")
      : catMap[id]
    : t(lang, "หมวดสินค้า", "Category");
  const [productContent, setProductContent] = useState(() => fallbackProductsByCategoryId(id));
  const [intro, setIntro] = useState<SiteBrandIntro | undefined>(() => brandIntrosByCategoryId[id]);
  const products = productContent.products;
  const featuredProducts = products.slice(0, 3);
  const introImage = intro ? intro.imageUrl || brandImages[intro.brandSlug] : undefined;

  useEffect(() => {
    let isCurrent = true;
    setProductContent(fallbackProductsByCategoryId(id));
    setIntro(brandIntrosByCategoryId[id]);

    loadProductsByCategoryContent(id).then((nextContent) => {
      if (!isCurrent) return;
      startTransition(() => setProductContent(nextContent));
    });

    loadBrandIntroContent(id).then((nextIntro) => {
      if (!isCurrent || !nextIntro) return;
      startTransition(() => setIntro(nextIntro));
    });

    return () => {
      isCurrent = false;
    };
  }, [id]);

  return (
    <>
      <PageHeader
        eyebrow={intro ? `Brand · ${name}` : "Products"}
        title={name}
        desc={
          intro
            ? intro.tagline
            : t(
                lang,
                `${products.length} รายการ พร้อมคำแนะนำจากทีม Matrix Intertrade สำหรับการเลือกสินค้าและออกแบบระบบ AV`,
                `${products.length} items with advice from Matrix Intertrade team for product selection and AV design.`,
              )
        }
        breadcrumbs={[
          { label: t(lang, "สินค้า", "Products"), href: "/category/all-products" },
          { label: name },
        ]}
        variant="clean"
      />

      {intro && (
        <section className="border-b border-border bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent">
                <Sparkles className="h-3.5 w-3.5" /> {t(lang, "รู้จักแบรนด์", "About the Brand")}
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-primary">
                {name} — {intro.tagline}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground whitespace-pre-wrap">
                {intro.description}
              </p>
              {intro.origin && (
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> Origin: {intro.origin}
                </div>
              )}

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-bold text-primary mb-3">
                    {t(lang, "จุดเด่นของแบรนด์", "Brand Highlights")}
                  </h3>
                  <ul className="space-y-2">
                    {intro.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-foreground/85">
                        <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                          <Check className="h-3 w-3" />
                        </div>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-3">
                    {t(lang, "เหมาะกับการใช้งาน", "Best For")}
                  </h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {intro.bestFor.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild className="bg-gradient-accent text-white shadow-glow">
                  <Link to="/contactus">
                    {t(lang, "ขอใบเสนอราคา", "Request a Quote")}{" "}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/brands/$slug" params={{ slug: intro.brandSlug }}>
                    {t(lang, "ข้อมูลแบรนด์เพิ่มเติม", "More Brand Info")}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-elev bg-gradient-hero order-first lg:order-last">
              {introImage && (
                <img
                  src={introImage}
                  alt={`${name} brand visual`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs font-bold uppercase tracking-widest opacity-90">
                  Authorized Distributor
                </div>
                <div className="text-2xl font-black drop-shadow">{name}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {intro?.productCategories && intro.productCategories.length > 0 && (
        <section className="border-b border-border bg-secondary/30 py-10 md:py-14">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary/70">
                <Layers className="h-3.5 w-3.5" />{" "}
                {t(lang, "หมวดสินค้าของแบรนด์", "Brand Product Categories")}
              </div>
              <h2 className="mt-3 text-xl md:text-2xl font-bold tracking-tight text-primary">
                {t(lang, `สินค้าภายใต้แบรนด์ ${name}`, `Products under ${name}`)}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(
                  lang,
                  `ภาพรวมกลุ่มสินค้าทั้งหมดที่ ${name} ครอบคลุม เพื่อช่วยให้คุณเลือกโซลูชันที่เหมาะสมกับการใช้งาน`,
                  `Overview of all product lines covered by ${name} to help you choose the right solution.`,
                )}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {intro.productCategories.map((cat, i) => (
                <div
                  key={cat.name}
                  className="group relative overflow-hidden rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-lg"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent/15 to-accent/5 text-accent font-bold text-sm">
                      {i + 1}
                    </div>
                    <h3 className="text-sm font-bold text-primary leading-snug">{cat.name}</h3>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">{cat.desc}</p>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {featuredProducts.length > 0 && (
        <section className="border-b border-border bg-secondary/35 py-8 md:py-10">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-4 lg:grid-cols-3">
              {featuredProducts.map((p) => (
                <Link
                  key={p.id}
                  to="/product/$slug"
                  params={{ slug: p.slug ?? p.id }}
                  className="group grid min-w-0 overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-accent/50 sm:grid-cols-[150px_minmax(0,1fr)] lg:grid-cols-1"
                >
                  <div className="relative aspect-square min-h-[150px] bg-white sm:aspect-auto lg:aspect-[1.15/1]">
                    <div className="absolute inset-3 rounded-lg bg-secondary/55" />
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain p-7 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col justify-between gap-3 p-4">
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-accent">{p.brand}</div>
                      <h2 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-primary">
                        {p.name}
                      </h2>
                    </div>
                    <div className="flex min-w-0 items-center justify-between gap-3">
                      <span className="min-w-0 break-words text-sm font-semibold text-primary">
                        {p.price && p.price !== "0.00"
                          ? `${p.price} ${t(lang, "บาท", "THB")}`
                          : t(lang, "ติดต่อสอบถามราคา", "Contact for Price")}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
                {t(lang, "รายการสินค้า", "Product List")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(
                  lang,
                  "เลือกดูรายละเอียดสินค้า หรือส่งข้อมูลให้ทีมขายช่วยประเมินสเปกที่เหมาะกับหน้างาน",
                  "Browse product details or send info to our sales team to evaluate the right specs for your site.",
                )}
              </p>
            </div>
            <Button asChild variant="outline" className="min-h-11">
              <Link to="/contactus">
                <MessageCircle className="mr-1 h-4 w-4" />
                {t(lang, "ปรึกษาทีมขาย", "Consult Sales")}
              </Link>
            </Button>
          </div>

          {products.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
              {t(lang, "ไม่พบสินค้าในหมวดนี้", "No products found in this category")}
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((p) => {
                const hasPrice = p.price && p.price !== "0.00";
                return (
                  <article
                    key={p.id}
                    className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-accent/50"
                  >
                    <Link
                      to="/product/$slug"
                      params={{ slug: p.slug ?? p.id }}
                      className="relative block aspect-square overflow-hidden bg-secondary/45"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      {p.brand && (
                        <div className="absolute left-3 top-3 rounded-full border border-border bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold text-primary backdrop-blur">
                          {p.brand}
                        </div>
                      )}
                    </Link>
                    <div className="flex flex-1 flex-col gap-4 p-4">
                      <div className="flex-1">
                        <h3 className="min-h-[2.75rem] text-sm font-bold leading-snug text-primary line-clamp-2">
                          {p.name}
                        </h3>
                        <div className="mt-2 text-sm">
                          {hasPrice ? (
                            <span className="font-bold text-primary">
                              {p.price} {t(lang, "บาท", "THB")}
                            </span>
                          ) : (
                            <span className="font-semibold text-muted-foreground">
                              {t(lang, "ติดต่อสอบถามราคา", "Contact for Price")}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2">
                        <Button asChild size="sm" className="h-11 min-w-0">
                          <Link to="/product/$slug" params={{ slug: p.slug ?? p.id }}>
                            <Eye className="mr-1 h-3.5 w-3.5" />{" "}
                            {t(lang, "ดูรายละเอียด", "View Details")}
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="h-11 w-11 px-0">
                          <Link
                            to="/contactus"
                            aria-label={t(
                              lang,
                              `ขอใบเสนอราคา ${p.name}`,
                              `Request quote for ${p.name}`,
                            )}
                          >
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
