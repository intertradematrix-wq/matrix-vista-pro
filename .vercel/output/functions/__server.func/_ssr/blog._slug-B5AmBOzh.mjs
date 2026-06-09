import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./PageHeader-BEiJ_Rsw.mjs";
import { C as CTASection } from "./CTASection-B6eI5FLv.mjs";
import { u as useArticleViews, i as incrementArticleView, h as heroBlog, f as formatViews, A as ArticleCard } from "./hero-blog-A6UeAa9a.mjs";
import { a as articleContents } from "./article-contents-C5xVvFZl.mjs";
import { a as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { G as useLanguage, e as Route$4, F as t } from "./router-Dcgg3q5t.mjs";
import "../_libs/react-dom.mjs";
import { C as Calendar, q as Clock, s as Eye, af as Tag, E as ExternalLink } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "./Breadcrumb-CgVk6Mi0.mjs";
import "./client-gV3vm9Ey.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/zod.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function BlogDetail() {
  const {
    lang
  } = useLanguage();
  const {
    article,
    category: cat,
    relatedArticles: related
  } = Route$4.useLoaderData();
  const content = articleContents[article.slug];
  const blocks = article.blocks ?? content?.blocks ?? [];
  const firstImg = blocks.find((b) => b.t === "img");
  const coverImg = article.coverImageUrl ?? firstImg?.src;
  const contentBlocks = blocks.filter((b) => b !== firstImg);
  const {
    data: views
  } = useArticleViews();
  const viewCount = views?.[article.slug] ?? 0;
  const queryClient = useQueryClient();
  reactExports.useEffect(() => {
    incrementArticleView(article.slug).then((counted) => {
      if (counted) queryClient.invalidateQueries({
        queryKey: ["article-views"]
      });
    });
  }, [article.slug, queryClient]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: t(lang, cat?.label ?? "", cat?.labelEn ?? cat?.label ?? ""), title: article.title, breadcrumbs: [{
      label: t(lang, "บทความ", "Articles"),
      href: "/blog"
    }, {
      label: t(lang, cat?.label ?? "", cat?.labelEn ?? cat?.label ?? "")
    }], bgImage: coverImg ?? heroBlog }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
          article.date
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
          article.readMin,
          " ",
          t(lang, "นาทีในการอ่าน", "min read")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", title: t(lang, "ยอดเข้าชม", "Views"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }),
          formatViews(viewCount),
          " ",
          t(lang, "ครั้ง", "views")
        ] }),
        cat && /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", search: {
          category: cat.slug
        }, className: "inline-flex items-center gap-1.5 text-accent font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-4 w-4" }),
          t(lang, cat.label, cat.labelEn ?? cat.label)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[16/9] rounded-2xl bg-gradient-hero shadow-elev mb-10 relative overflow-hidden", children: [
        coverImg && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: coverImg, alt: article.title, className: "absolute inset-0 h-full w-full object-cover", loading: "eager" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-lg max-w-none text-foreground/85 leading-relaxed space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-foreground font-medium", children: article.excerpt }),
        contentBlocks.map((b, i) => {
          if (b.t === "img") return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.src, alt: `${article.title} - ภาพประกอบ`, loading: "lazy", className: "my-6 w-full rounded-xl border border-border shadow-card" }, i);
          if (b.t === "h2") return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-primary mt-10 mb-3", children: b.text }, i);
          if (b.t === "h3") return /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-primary mt-6 mb-2", children: b.text }, i);
          if (b.t === "li") return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "ml-6 list-disc", children: b.text }, i);
          return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed", children: b.text }, i);
        }),
        (article.canonicalUrl || content?.url) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pt-6 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: article.canonicalUrl || content?.url, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1.5 text-accent font-semibold hover:underline", children: [
          t(lang, "อ่านบนเว็บไซต์ matrixintertrade.com", "Read on matrixintertrade.com"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" })
        ] }) })
      ] })
    ] }) }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-subtle py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-primary mb-8", children: t(lang, "บทความที่เกี่ยวข้อง", "Related Articles") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: related.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleCard, { article: a }, a.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  BlogDetail as component
};
