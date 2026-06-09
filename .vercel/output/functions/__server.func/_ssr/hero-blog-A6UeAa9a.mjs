import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as useLanguage, f as articleCategories, F as t, g as articleImages } from "./router-Dcgg3q5t.mjs";
import { a as articleContents } from "./article-contents-C5xVvFZl.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { s as supabase } from "./client-gV3vm9Ey.mjs";
import { C as Calendar, q as Clock, s as Eye, b as ArrowUpRight } from "../_libs/lucide-react.mjs";
const articleViewsQuery = {
  queryKey: ["article-views"],
  queryFn: async () => {
    const { data, error } = await supabase.from("article_views").select("slug, views");
    if (error) return {};
    const map = {};
    for (const row of data ?? []) map[row.slug] = Number(row.views) || 0;
    return map;
  },
  staleTime: 6e4
};
function useArticleViews() {
  return useQuery(articleViewsQuery);
}
const STORAGE_KEY = "matrix-viewed-articles";
function hasViewed(slug) {
  if (typeof window === "undefined") return false;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    const set = new Set(raw ? JSON.parse(raw) : []);
    return set.has(slug);
  } catch {
    return false;
  }
}
function markViewed(slug) {
  if (typeof window === "undefined") return;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    const set = new Set(raw ? JSON.parse(raw) : []);
    set.add(slug);
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  } catch {
  }
}
async function incrementArticleView(slug) {
  if (hasViewed(slug)) return false;
  markViewed(slug);
  try {
    await supabase.rpc("increment_article_view", { _slug: slug });
    return true;
  } catch {
    return false;
  }
}
function formatViews(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  return String(n);
}
function ArticleCard({ article }) {
  const { lang } = useLanguage();
  const { data: views } = useArticleViews();
  const viewCount = views?.[article.slug] ?? 0;
  const catObj = articleCategories.find((c) => c.slug === article.category);
  const cat = catObj ? t(lang, catObj.label, catObj.labelEn || catObj.label) : t(lang, "บทความ", "Article");
  const firstImg = articleContents[article.slug]?.blocks.find((b) => b.t === "img");
  const img = firstImg?.src ?? articleImages[article.category];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/blog/$slug",
      params: { slug: article.slug },
      className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card hover-lift hover:border-accent/30 hover:shadow-elev transition-all",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/9] overflow-hidden bg-gradient-hero", children: [
          img && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: img,
              alt: cat,
              loading: "lazy",
              width: 1280,
              height: 720,
              className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2 sm:top-3 sm:left-3 rounded-full bg-navy/85 ring-1 ring-white/20 backdrop-blur px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white", children: cat }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-2xl sm:text-4xl font-black text-white/40 tabular-nums drop-shadow-lg",
              children: [
                "#",
                String(article.id).padStart(2, "0")
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-3 sm:p-5 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] sm:text-[15px] font-bold text-primary leading-snug line-clamp-3 group-hover:text-accent transition-colors", children: t(lang, article.title, article.titleEn || article.title) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-3 sm:pt-5 flex items-center justify-between text-[11px] sm:text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3" }),
                article.date
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                article.readMin,
                " ",
                t(lang, "นาที", "min")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", title: t(lang, "ยอดเข้าชม", "Views"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3" }),
                formatViews(viewCount)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" })
          ] })
        ] })
      ]
    }
  );
}
const heroBlog = "/assets/hero-blog-D4hhjNQT.jpg";
export {
  ArticleCard as A,
  formatViews as f,
  heroBlog as h,
  incrementArticleView as i,
  useArticleViews as u
};
