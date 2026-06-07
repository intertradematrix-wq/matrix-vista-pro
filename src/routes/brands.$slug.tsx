import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";
import { brandImages } from "@/data/brand-images";
import { loadBrandDetailContent } from "@/lib/content/site";
import { Check, ArrowRight } from "lucide-react";
import heroBrands from "@/assets/hero-brands.jpg";

export const Route = createFileRoute("/brands/$slug")({
  loader: async ({ params }) => {
    const brand = await loadBrandDetailContent(params.slug);
    if (!brand) throw notFound();
    return { brand };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.brand.name} — Matrix Intertrade` },
      { name: "description", content: loaderData?.brand.desc },
      { property: "og:url", content: `/brands/${loaderData?.brand.slug}` },
    ],
    links: [{ rel: "canonical", href: `/brands/${loaderData?.brand.slug}` }],
  }),
  component: BrandPage,
  notFoundComponent: () => <div className="p-20 text-center">Brand not found</div>,
  errorComponent: () => <div className="p-20 text-center">เกิดข้อผิดพลาด</div>,
});

function BrandPage() {
  const { brand } = Route.useLoaderData();
  const img = brand.imageUrl || brandImages[brand.slug];
  const highlights = [
    "ผู้ผลิตที่ได้รับการรับรองมาตรฐานสากล",
    "รับประกันสินค้าและบริการหลังการขาย",
    "อะไหล่และทีมเทคนิคพร้อมในประเทศ",
    "ผลิตภัณฑ์ครอบคลุมทุกการใช้งาน",
  ];
  return (
    <>
      <PageHeader
        eyebrow="Brand"
        title={brand.name}
        desc={brand.desc}
        breadcrumbs={[{ label: "ผลิตภัณฑ์ของเรา", href: "/brands" }, { label: brand.name }]}
        bgImage={heroBrands}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-10">
          <div
            className={`aspect-[5/4] rounded-3xl bg-gradient-to-br ${brand.color} relative overflow-hidden shadow-elev`}
          >
            {img && (
              <img
                src={img}
                alt={`${brand.name} product mockup`}
                width={1280}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-block rounded-full glass px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white mb-2">
                {brand.category}
              </div>
              <div className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg">
                {brand.name}
              </div>
            </div>
          </div>
          <div>
            <div className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-3">
              {brand.category}
            </div>
            <h2 className="text-3xl font-bold text-primary tracking-tight">
              เกี่ยวกับ {brand.name}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {brand.desc} เราเป็นตัวแทนจำหน่ายอย่างเป็นทางการในประเทศไทย พร้อมทีม Sales Engineer
              และทีมช่างที่ผ่านการอบรมโดยตรงจากผู้ผลิต
            </p>
            <ul className="mt-6 space-y-2.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent mt-0.5">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex gap-3 flex-wrap">
              <Button asChild className="bg-gradient-accent text-white shadow-glow">
                <Link to="/contactus">
                  ขอใบเสนอราคา <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/category/$id" params={{ id: "0" }}>ดูสินค้าทั้งหมด</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
