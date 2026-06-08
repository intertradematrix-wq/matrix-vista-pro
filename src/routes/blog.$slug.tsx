import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/CTASection";
import { ArticleCard } from "@/components/site/ArticleCard";
import { articleContents } from "@/data/article-contents";
import { loadArticleDetailContent } from "@/lib/content/articles";
import { Calendar, Clock, Tag, ExternalLink, Eye } from "lucide-react";
import heroBlog from "@/assets/hero-blog.jpg";
import { incrementArticleView, useArticleViews, formatViews } from "@/lib/article-views";
import { useQueryClient } from "@tanstack/react-query";
import { useLanguage, t } from "@/components/i18n/LanguageProvider";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const content = await loadArticleDetailContent(params.slug);
    const article = content.article;
    if (!article) throw notFound();
    return { article, category: content.category, relatedArticles: content.relatedArticles };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.article.title} — Matrix Intertrade` },
      { name: "description", content: loaderData?.article.excerpt },
      { property: "og:type", content: "article" },
      { property: "og:title", content: loaderData?.article.title },
      { property: "og:description", content: loaderData?.article.excerpt },
      { property: "og:url", content: `/blog/${loaderData?.article.slug}` },
    ],
    links: [
      {
        rel: "canonical",
        href: loaderData?.article.canonicalUrl || `/blog/${loaderData?.article.slug}`,
      },
    ],
    scripts: loaderData?.article
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: loaderData.article.title,
              description: loaderData.article.excerpt,
              datePublished: loaderData.article.date,
              author: { "@type": "Organization", name: "Matrix Intertrade" },
              publisher: {
                "@type": "Organization",
                name: "Matrix Intertrade",
              },
              mainEntityOfPage: `https://matrix-vista-pro.lovable.app/blog/${loaderData.article.slug}`,
            }),
          },
        ]
      : [],
  }),
  component: BlogDetail,
  notFoundComponent: () => <div className="p-20 text-center">ไม่พบบทความ</div>,
  errorComponent: () => <div className="p-20 text-center">เกิดข้อผิดพลาด</div>,
});

function BlogDetail() {
  const { lang } = useLanguage();
  const { article, category: cat, relatedArticles: related } = Route.useLoaderData();
  const content = articleContents[article.slug];
  const blocks = article.blocks ?? content?.blocks ?? [];
  const firstImg = blocks.find((b) => b.t === "img") as { t: "img"; src: string } | undefined;
  const coverImg = article.coverImageUrl ?? firstImg?.src;
  const contentBlocks = blocks.filter((b) => b !== firstImg);
  const { data: views } = useArticleViews();
  const viewCount = views?.[article.slug] ?? 0;
  const queryClient = useQueryClient();
  useEffect(() => {
    incrementArticleView(article.slug).then((counted) => {
      if (counted) queryClient.invalidateQueries({ queryKey: ["article-views"] });
    });
  }, [article.slug, queryClient]);
  return (
    <>
      <PageHeader
        eyebrow={t(lang, cat?.label ?? "", cat?.labelEn ?? cat?.label ?? "")}
        title={article.title}
        breadcrumbs={[{ label: t(lang, "บทความ", "Articles"), href: "/blog" }, { label: t(lang, cat?.label ?? "", cat?.labelEn ?? cat?.label ?? "") }]}
        bgImage={coverImg ?? heroBlog}
      />
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="mb-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {article.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readMin} {t(lang, "นาทีในการอ่าน", "min read")}
            </span>
            <span className="inline-flex items-center gap-1.5" title={t(lang, "ยอดเข้าชม", "Views")}>
              <Eye className="h-4 w-4" />
              {formatViews(viewCount)} {t(lang, "ครั้ง", "views")}
            </span>
            {cat && (
              <Link
                to="/blog"
                search={{ category: cat.slug }}
                className="inline-flex items-center gap-1.5 text-accent font-semibold"
              >
                <Tag className="h-4 w-4" />
                {t(lang, cat.label, cat.labelEn ?? cat.label)}
              </Link>
            )}
          </div>
          <div className="aspect-[16/9] rounded-2xl bg-gradient-hero shadow-elev mb-10 relative overflow-hidden">
            {coverImg && (
              <img
                src={coverImg}
                alt={article.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          <div className="prose prose-lg max-w-none text-foreground/85 leading-relaxed space-y-5">
            <p className="text-xl text-foreground font-medium">{article.excerpt}</p>
            {contentBlocks.map((b, i) => {
              if (b.t === "img")
                return (
                  <img
                    key={i}
                    src={b.src}
                    alt={`${article.title} - ภาพประกอบ`}
                    loading="lazy"
                    className="my-6 w-full rounded-xl border border-border shadow-card"
                  />
                );
              if (b.t === "h2")
                return (
                  <h2 key={i} className="text-2xl font-bold text-primary mt-10 mb-3">
                    {b.text}
                  </h2>
                );
              if (b.t === "h3")
                return (
                  <h3 key={i} className="text-xl font-bold text-primary mt-6 mb-2">
                    {b.text}
                  </h3>
                );
              if (b.t === "li")
                return (
                  <li key={i} className="ml-6 list-disc">
                    {b.text}
                  </li>
                );
              return (
                <p key={i} className="leading-relaxed">
                  {b.text}
                </p>
              );
            })}
            {(article.canonicalUrl || content?.url) && (
              <p className="pt-6 text-sm text-muted-foreground">
                <a
                  href={article.canonicalUrl || content?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent font-semibold hover:underline"
                >
                  {t(lang, "อ่านบนเว็บไซต์ matrixintertrade.com", "Read on matrixintertrade.com")}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </p>
            )}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-gradient-subtle py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-2xl font-bold text-primary mb-8">{t(lang, "บทความที่เกี่ยวข้อง", "Related Articles")}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
