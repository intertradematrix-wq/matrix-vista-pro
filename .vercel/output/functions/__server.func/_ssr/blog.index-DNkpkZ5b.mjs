import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-BEiJ_Rsw.mjs";
import { h as heroBlog, A as ArticleCard } from "./hero-blog-A6UeAa9a.mjs";
import { C as CTASection } from "./CTASection-B6eI5FLv.mjs";
import { I as Input } from "./input-BXvk-cJV.mjs";
import { G as useLanguage, R as Route$a, n as fallbackArticleListContent, v as loadArticleListContent, F as t } from "./router-Dcgg3q5t.mjs";
import "../_libs/react-dom.mjs";
import { a6 as Search } from "../_libs/lucide-react.mjs";
import "./Breadcrumb-CgVk6Mi0.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "./article-contents-C5xVvFZl.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
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
function BlogPage() {
  const {
    lang
  } = useLanguage();
  const {
    category
  } = Route$a.useSearch();
  const [q, setQ] = reactExports.useState("");
  const [cat, setCat] = reactExports.useState(category);
  const [content, setContent] = reactExports.useState(fallbackArticleListContent);
  const {
    articles,
    articleCategories
  } = content;
  reactExports.useEffect(() => {
    let isCurrent = true;
    loadArticleListContent().then((nextContent) => {
      if (!isCurrent) return;
      reactExports.startTransition(() => setContent(nextContent));
    });
    return () => {
      isCurrent = false;
    };
  }, []);
  const filtered = articles.filter((a) => (!cat || a.category === cat) && (!q || a.title.toLowerCase().includes(q.toLowerCase())));
  const featured = articles.slice(0, 3);
  const currentCat = cat ? articleCategories.find((c) => c.slug === cat) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Knowledge Hub", title: t(lang, "บทความและคู่มือ AV Solutions", "Articles and AV Solutions Guide"), desc: t(lang, "ความรู้ คู่มือเลือกซื้อ และ Case Study สำหรับองค์กรที่กำลังวางระบบ AV", "Knowledge, buying guides, and case studies for organizations planning AV systems."), breadcrumbs: [{
      label: t(lang, "บทความ", "Articles")
    }], bgImage: heroBlog }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-md flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: t(lang, "ค้นหาบทความ...", "Search articles..."), className: "pl-9" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(void 0), className: `rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${!cat ? "bg-gradient-accent text-white shadow-glow" : "bg-secondary text-foreground hover:bg-secondary/70"}`, children: t(lang, "ทั้งหมด", "All") }),
          articleCategories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(c.slug), className: `rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${cat === c.slug ? "bg-gradient-accent text-white shadow-glow" : "bg-secondary text-foreground hover:bg-secondary/70"}`, children: t(lang, c.label, c.labelEn) }, c.slug))
        ] })
      ] }),
      !cat && !q && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-5 text-lg font-bold text-primary", children: t(lang, "บทความแนะนำ", "Featured Articles") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: featured.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleCard, { article: a }, a.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-5 text-lg font-bold text-primary", children: [
        cat && currentCat ? t(lang, currentCat.label, currentCat.labelEn) : t(lang, "บทความล่าสุด", "Latest Articles"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-normal text-muted-foreground", children: [
          "(",
          filtered.length,
          ")"
        ] })
      ] }),
      filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground", children: t(lang, "ไม่พบบทความที่ตรงกับการค้นหา", "No articles match your search") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: filtered.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleCard, { article: a }, a.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  BlogPage as component
};
