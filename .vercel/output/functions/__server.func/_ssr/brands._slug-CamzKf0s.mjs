import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./PageHeader-BEiJ_Rsw.mjs";
import { C as CTASection } from "./CTASection-T4g6095r.mjs";
import { G as useLanguage, d as Route$5, i as brandImages, F as t, B as Button } from "./router-BERCXs_H.mjs";
import "../_libs/react-dom.mjs";
import { j as Check, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "./Breadcrumb-CgVk6Mi0.mjs";
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
const heroBrands = "/assets/hero-brands-B3zRnDJ-.jpg";
function BrandPage() {
  const {
    lang
  } = useLanguage();
  const {
    brand
  } = Route$5.useLoaderData();
  const img = brand.imageUrl || brandImages[brand.slug];
  const highlights = [t(lang, "ผู้ผลิตที่ได้รับการรับรองมาตรฐานสากล", "Manufacturer certified to international standards"), t(lang, "รับประกันสินค้าและบริการหลังการขาย", "Product warranty and after-sales service"), t(lang, "อะไหล่และทีมเทคนิคพร้อมในประเทศ", "Local spare parts and technical team ready"), t(lang, "ผลิตภัณฑ์ครอบคลุมทุกการใช้งาน", "Products covering all applications")];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Brand", title: brand.name, desc: t(lang, brand.desc, brand.descEn), breadcrumbs: [{
      label: t(lang, "ผลิตภัณฑ์ของเรา", "Our Brands"),
      href: "/brands"
    }, {
      label: brand.name
    }], bgImage: heroBrands }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `aspect-[5/4] rounded-3xl bg-gradient-to-br ${brand.color} relative overflow-hidden shadow-elev`, children: [
        img && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: `${brand.name} product mockup`, width: 1280, height: 1024, className: "absolute inset-0 h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-6 right-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-full glass px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white mb-2", children: brand.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg", children: brand.name })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-3", children: brand.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-primary tracking-tight", children: t(lang, `เกี่ยวกับ ${brand.name}`, `About ${brand.name}`) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: [
          t(lang, brand.desc, brand.descEn),
          " ",
          t(lang, "เราเป็นตัวแทนจำหน่ายอย่างเป็นทางการในประเทศไทย พร้อมทีม Sales Engineer และทีมช่างที่ผ่านการอบรมโดยตรงจากผู้ผลิต", "We are an official authorized distributor in Thailand, equipped with a Sales Engineering and technical team directly trained by the manufacturer.")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2.5", children: highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: h })
        ] }, h)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-gradient-accent text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contactus", children: [
            t(lang, "ขอใบเสนอราคา", "Request Quote"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$id", params: {
            id: "0"
          }, children: t(lang, "ดูสินค้าทั้งหมด", "View All Products") }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  BrandPage as component
};
