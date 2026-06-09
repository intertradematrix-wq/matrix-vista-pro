import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { G as useLanguage, c as Route$6, o as fallbackProductsByCategoryId, j as brandIntrosByCategoryId, i as brandImages, y as loadProductsByCategoryContent, w as loadBrandIntroContent, l as catMap, F as t, B as Button } from "./router-Dcgg3q5t.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./PageHeader-BEiJ_Rsw.mjs";
import { C as CTASection } from "./CTASection-B6eI5FLv.mjs";
import "../_libs/react-dom.mjs";
import { aa as Sparkles, W as MapPin, j as Check, A as ArrowRight, N as Layers, X as MessageCircle, s as Eye } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
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
import "../_libs/isbot.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./Breadcrumb-CgVk6Mi0.mjs";
function CategoryPage() {
  const {
    lang
  } = useLanguage();
  const {
    id
  } = Route$6.useParams();
  const name = catMap[id] ? id === "0" ? t(lang, "สินค้าทั้งหมด", "All Products") : catMap[id] : t(lang, "หมวดสินค้า", "Category");
  const [productContent, setProductContent] = reactExports.useState(() => fallbackProductsByCategoryId(id));
  const [intro, setIntro] = reactExports.useState(() => brandIntrosByCategoryId[id]);
  const products = productContent.products;
  const featuredProducts = products.slice(0, 3);
  const introImage = intro ? intro.imageUrl || brandImages[intro.brandSlug] : void 0;
  reactExports.useEffect(() => {
    let isCurrent = true;
    setProductContent(fallbackProductsByCategoryId(id));
    setIntro(brandIntrosByCategoryId[id]);
    loadProductsByCategoryContent(id).then((nextContent) => {
      if (!isCurrent) return;
      reactExports.startTransition(() => setProductContent(nextContent));
    });
    loadBrandIntroContent(id).then((nextIntro) => {
      if (!isCurrent || !nextIntro) return;
      reactExports.startTransition(() => setIntro(nextIntro));
    });
    return () => {
      isCurrent = false;
    };
  }, [id]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: intro ? `Brand · ${name}` : "Products", title: name, desc: intro ? intro.tagline : t(lang, `${products.length} รายการ พร้อมคำแนะนำจากทีม Matrix Intertrade สำหรับการเลือกสินค้าและออกแบบระบบ AV`, `${products.length} items with advice from Matrix Intertrade team for product selection and AV design.`), breadcrumbs: [{
      label: t(lang, "สินค้า", "Products"),
      href: "/category/0"
    }, {
      label: name
    }], variant: "clean" }),
    intro && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-white py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-accent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " ",
          t(lang, "รู้จักแบรนด์", "About the Brand")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-2xl md:text-3xl font-bold tracking-tight text-primary", children: [
          name,
          " — ",
          intro.tagline
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[15px] leading-relaxed text-muted-foreground whitespace-pre-wrap", children: intro.description }),
        intro.origin && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
          " Origin: ",
          intro.origin
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-primary mb-3", children: t(lang, "จุดเด่นของแบรนด์", "Brand Highlights") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: intro.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-foreground/85", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h })
            ] }, h)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-primary mb-3", children: t(lang, "เหมาะกับการใช้งาน", "Best For") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 gap-2", children: intro.bestFor.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-foreground/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
              b
            ] }, b)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-gradient-accent text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contactus", children: [
            t(lang, "ขอใบเสนอราคา", "Request a Quote"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/brands/$slug", params: {
            slug: intro.brandSlug
          }, children: t(lang, "ข้อมูลแบรนด์เพิ่มเติม", "More Brand Info") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[5/4] overflow-hidden rounded-3xl shadow-elev bg-gradient-hero order-first lg:order-last", children: [
        introImage && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: introImage, alt: `${name} brand visual`, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-5 left-5 right-5 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest opacity-90", children: "Authorized Distributor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black drop-shadow", children: name })
        ] })
      ] })
    ] }) }),
    intro?.productCategories && intro.productCategories.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-secondary/30 py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-primary/8 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-3.5 w-3.5" }),
          " ",
          t(lang, "หมวดสินค้าของแบรนด์", "Brand Product Categories")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-xl md:text-2xl font-bold tracking-tight text-primary", children: t(lang, `สินค้าภายใต้แบรนด์ ${name}`, `Products under ${name}`) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t(lang, `ภาพรวมกลุ่มสินค้าทั้งหมดที่ ${name} ครอบคลุม เพื่อช่วยให้คุณเลือกโซลูชันที่เหมาะสมกับการใช้งาน`, `Overview of all product lines covered by ${name} to help you choose the right solution.`) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: intro.productCategories.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent/15 to-accent/5 text-accent font-bold text-sm", children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-primary leading-snug", children: cat.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] leading-relaxed text-muted-foreground", children: cat.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" })
      ] }, cat.name)) })
    ] }) }),
    featuredProducts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-secondary/35 py-8 md:py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 lg:grid-cols-3", children: featuredProducts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$id", params: {
      id: p.id
    }, className: "group grid min-w-0 overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-accent/50 sm:grid-cols-[150px_minmax(0,1fr)] lg:grid-cols-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square min-h-[150px] bg-white sm:aspect-auto lg:aspect-[1.15/1]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-3 rounded-lg bg-secondary/55" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, loading: "lazy", className: "absolute inset-0 h-full w-full object-contain p-7 transition-transform duration-500 group-hover:scale-[1.03]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-col justify-between gap-3 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-accent", children: p.brand }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1 line-clamp-2 text-base font-bold leading-snug text-primary", children: p.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 break-words text-sm font-semibold text-primary", children: p.price && p.price !== "0.00" ? `${p.price} ${t(lang, "บาท", "THB")}` : t(lang, "ติดต่อสอบถามราคา", "Contact for Price") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" })
        ] })
      ] })
    ] }, p.id)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold tracking-tight text-primary md:text-3xl", children: t(lang, "รายการสินค้า", "Product List") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: t(lang, "เลือกดูรายละเอียดสินค้า หรือส่งข้อมูลให้ทีมขายช่วยประเมินสเปกที่เหมาะกับหน้างาน", "Browse product details or send info to our sales team to evaluate the right specs for your site.") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "min-h-11", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contactus", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "mr-1 h-4 w-4" }),
          t(lang, "ปรึกษาทีมขาย", "Consult Sales")
        ] }) })
      ] }),
      products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground", children: t(lang, "ไม่พบสินค้าในหมวดนี้", "No products found in this category") }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: products.map((p) => {
        const hasPrice = p.price && p.price !== "0.00";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-accent/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$id", params: {
            id: p.id
          }, className: "relative block aspect-square overflow-hidden bg-secondary/45", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, loading: "lazy", className: "absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]" }),
            p.brand && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-3 rounded-full border border-border bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold text-primary backdrop-blur", children: p.brand })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-4 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "min-h-[2.75rem] text-sm font-bold leading-snug text-primary line-clamp-2", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm", children: hasPrice ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary", children: [
                p.price,
                " ",
                t(lang, "บาท", "THB")
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-muted-foreground", children: t(lang, "ติดต่อสอบถามราคา", "Contact for Price") }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[minmax(0,1fr)_auto] gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", className: "h-11 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$id", params: {
                id: p.id
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "mr-1 h-3.5 w-3.5" }),
                " ",
                t(lang, "ดูรายละเอียด", "View Details")
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "h-11 w-11 px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contactus", "aria-label": t(lang, `ขอใบเสนอราคา ${p.name}`, `Request quote for ${p.name}`), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" }) }) })
            ] })
          ] })
        ] }, p.id);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  CategoryPage as component
};
