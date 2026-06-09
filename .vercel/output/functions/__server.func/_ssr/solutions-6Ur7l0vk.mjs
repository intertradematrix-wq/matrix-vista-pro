import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-BEiJ_Rsw.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { J as Icons, Y as Monitor, b as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { G as useLanguage, H as useSiteContent, F as t, E as solutionImages } from "./router-BERCXs_H.mjs";
import { C as CTASection } from "./CTASection-T4g6095r.mjs";
import { h as heroSolutions } from "./hero-solutions-CuJhccH0.mjs";
import "../_libs/react-dom.mjs";
import "./Breadcrumb-CgVk6Mi0.mjs";
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
const ORDER = {
  "led-display": "01",
  "interactive-display": "02",
  projector: "03",
  "wireless-presentation": "04",
  "av-solutions": "05"
};
function SolutionCard({
  slug,
  title,
  titleEn,
  icon,
  desc,
  descEn,
  imageUrl
}) {
  const { lang } = useLanguage();
  const Icon = Icons[icon] ?? Monitor;
  const img = imageUrl || solutionImages[slug];
  const index = ORDER[slug] ?? "•";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: `/${slug}`,
      className: "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-elev",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-navy", children: [
          img && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: img,
              alt: `${title} solution`,
              loading: "lazy",
              width: 1280,
              height: 960,
              className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-cyan/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-5 top-5 flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md ring-1 ring-white/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: index }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-white/30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Solution" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-5 bottom-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-balance text-2xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] sm:text-[26px]", children: t(lang, title, titleEn || title) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-[3px] w-10 rounded-full bg-gradient-accent transition-all duration-500 group-hover:w-20" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-3 text-sm leading-relaxed text-muted-foreground", children: t(lang, desc, descEn || desc) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm font-bold text-accent", children: [
            t(lang, "ดูรายละเอียด", "View Details"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-accent transition-transform duration-500 group-hover:scale-x-100" })
      ]
    }
  );
}
function SolutionsPage() {
  const {
    lang
  } = useLanguage();
  const {
    solutions
  } = useSiteContent();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Solutions", title: t(lang, "โซลูชั่นของเรา", "Our Solutions"), desc: t(lang, "ทุกโซลูชั่นออกแบบมาเพื่อรองรับการใช้งานจริงในระดับองค์กร พร้อมการดูแลตลอดอายุการใช้งาน", "Every solution is designed for real-world enterprise use, complete with lifetime support."), breadcrumbs: [{
      label: t(lang, "โซลูชั่นของเรา", "Our Solutions")
    }], bgImage: heroSolutions }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 md:px-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: solutions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SolutionCard, { ...s }, s.slug)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  SolutionsPage as component
};
