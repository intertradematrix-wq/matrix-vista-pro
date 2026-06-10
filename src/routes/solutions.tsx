import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { SolutionCard } from "@/components/site/SolutionCard";
import { CTASection } from "@/components/site/CTASection";
import { useSiteContent } from "@/lib/content/use-site-content";
import heroSolutions from "@/assets/hero-solutions.jpg";
import { useLanguage, t } from "@/components/i18n/LanguageProvider";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "โซลูชั่นของเรา — Matrix Intertrade" },
      {
        name: "description",
        content:
          "LED Display, Interactive Display, Projector, Wireless Presentation, AV Solutions สำหรับองค์กรไทย",
      },
      { property: "og:title", content: "โซลูชั่นของเรา — Matrix Intertrade" },
      { property: "og:description", content: "โซลูชั่น AV ครบวงจรสำหรับองค์กร" },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  const { lang } = useLanguage();
  const { solutions } = useSiteContent();

  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title={t(lang, "โซลูชั่นของเรา", "Our Solutions")}
        desc={t(
          lang,
          "ทุกโซลูชั่นออกแบบมาเพื่อรองรับการใช้งานจริงในระดับองค์กร พร้อมการดูแลตลอดอายุการใช้งาน",
          "Every solution is designed for real-world enterprise use, complete with lifetime support.",
        )}
        breadcrumbs={[{ label: t(lang, "โซลูชั่นของเรา", "Our Solutions") }]}
        bgImage={heroSolutions}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <SolutionCard key={s.slug} {...s} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
