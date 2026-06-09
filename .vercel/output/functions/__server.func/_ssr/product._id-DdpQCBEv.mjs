import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Breadcrumb } from "./Breadcrumb-CgVk6Mi0.mjs";
import { C as CTASection } from "./CTASection-B6eI5FLv.mjs";
import { G as useLanguage, a as Route$8, A as productDetailById, F as t, B as Button } from "./router-Dcgg3q5t.mjs";
import "../_libs/react-dom.mjs";
import { A as ArrowRight, a2 as Phone, V as Mail, E as ExternalLink, x as Headset, a4 as Ruler, ao as Wrench, a9 as ShieldCheck, n as CircleCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
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
import "util";
import "crypto";
import "async_hooks";
import "stream";
function ProductPage() {
  const {
    lang
  } = useLanguage();
  const {
    product: p,
    relatedProducts: related
  } = Route$8.useLoaderData();
  const hasPrice = p.price && p.price !== "0.00";
  const detail = productDetailById(p.id);
  const descriptionHtml = p.descriptionHtml ?? detail?.descriptionHtml;
  const serviceHighlights = [{
    icon: Headset,
    label: t(lang, "ปรึกษาทีมขาย", "Consult Sales")
  }, {
    icon: Ruler,
    label: t(lang, "ออกแบบระบบ", "System Design")
  }, {
    icon: Wrench,
    label: t(lang, "ติดตั้งหน้างาน", "On-site Installation")
  }, {
    icon: ShieldCheck,
    label: t(lang, "รับประกันสินค้า", "Product Warranty")
  }];
  const promiseItems = [t(lang, "ให้คำปรึกษาและออกแบบระบบโดยทีมวิศวกร", "Consultation and system design by engineers"), t(lang, "ติดตั้งโดยช่างผู้ชำนาญ พร้อมตรวจเช็กหน้างาน", "Installation by specialists with on-site inspection"), t(lang, "ดูแลหลังการขายและบำรุงรักษาระยะยาว", "After-sales care and long-term maintenance")];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-secondary/60 to-transparent pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: [{
        label: t(lang, "สินค้า", "Products"),
        href: "/category/0"
      }, ...p.brand ? [{
        label: p.brand,
        href: `/category/${p.brandCategoryId}`
      }] : [], {
        label: p.name
      }] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl gap-8 px-4 pb-12 md:px-6 md:pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-2 min-w-0 lg:order-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate", children: p.brand || "Product" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "max-w-2xl break-words text-[clamp(1.9rem,8vw,4.5rem)] font-bold leading-[1.08] tracking-normal text-primary", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl break-words text-sm leading-relaxed text-muted-foreground md:text-base", children: t(lang, "เลือกสินค้า AV พร้อมคำแนะนำจากทีม Matrix Intertrade สำหรับการออกแบบ ติดตั้ง และดูแลระบบในองค์กร", "Select AV products with advice from the Matrix Intertrade team for corporate system design, installation, and maintenance.") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 min-w-0 rounded-xl border border-border bg-white p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-muted-foreground", children: t(lang, "ราคา", "Price") }),
            hasPrice ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 break-words text-3xl font-bold text-primary", children: [
              p.price,
              " ",
              t(lang, "บาท", "THB")
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 break-words text-xl font-bold text-primary sm:text-2xl", children: t(lang, "ติดต่อสอบถามราคา", "Contact for Price") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs leading-relaxed text-muted-foreground", children: t(lang, "ราคาอาจเปลี่ยนตามรุ่น สเปก และเงื่อนไขโครงการ กรุณายืนยันกับฝ่ายขาย", "Prices may vary based on model, specs, and project conditions. Please confirm with sales.") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "min-h-11 min-w-0 sm:min-w-48", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contactus", children: [
              t(lang, "ขอใบเสนอราคา", "Request Quote"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "lg", className: "min-h-11 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:0941887041", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mr-1 h-4 w-4" }),
              " 094-888-7041"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "lg", className: "min-h-11 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:matrixintertrade2026@gmail.com", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mr-1 h-4 w-4" }),
              " Email"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.url, target: "_blank", rel: "noopener noreferrer", className: "mt-4 inline-flex max-w-full items-center gap-1 break-words text-xs font-medium text-muted-foreground transition-colors hover:text-accent", children: [
            t(lang, "ดูข้อมูลต้นทางบน matrixintertrade.com", "View original source on matrixintertrade.com"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-1 lg:order-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[1.12/1] overflow-hidden rounded-xl border border-border bg-secondary/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-lg bg-white" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, className: "absolute inset-0 h-full w-full object-contain p-5 sm:p-10 md:p-12", loading: "eager" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 pb-10 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4", children: serviceHighlights.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-white px-4 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 break-words text-sm font-semibold text-primary", children: item.label })
      ] }, item.label)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/35 py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-3", children: promiseItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 gap-3 rounded-xl border border-border bg-white p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-1 h-5 w-5 shrink-0 text-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "min-w-0 break-words text-sm leading-relaxed text-foreground", children: item })
    ] }, item)) }) }) }),
    descriptionHtml && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border bg-white py-10 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-6 text-xl font-bold text-primary md:text-2xl", children: t(lang, "รายละเอียดสินค้า", "Product Details") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "product-detail-content min-w-0 leading-relaxed text-foreground/90", dangerouslySetInnerHTML: {
        __html: descriptionHtml
      } })
    ] }) }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/35 py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-primary md:text-2xl", children: t(lang, `สินค้าอื่นในกลุ่ม ${p.brand}`, `Other products by ${p.brand}`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: t(lang, "เปรียบเทียบรุ่นใกล้เคียงก่อนขอใบเสนอราคา", "Compare similar models before requesting a quote") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "min-h-11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$id", params: {
          id: p.brandCategoryId
        }, children: t(lang, "ดูทั้งหมด", "View All") }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: related.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$id", params: {
        id: r.id
      }, className: "group overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-accent/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-square overflow-hidden bg-secondary/45", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.image, alt: r.name, loading: "lazy", className: "absolute inset-0 h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-[1.03]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[2.5rem] text-sm font-bold leading-snug text-primary line-clamp-2", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs font-semibold text-accent", children: r.price && r.price !== "0.00" ? `${r.price} ${t(lang, "บาท", "THB")}` : t(lang, "ติดต่อสอบถามราคา", "Contact for Price") })
        ] })
      ] }, r.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  ProductPage as component
};
