import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as useLanguage, i as brandImages, F as t } from "./router-Dcgg3q5t.mjs";
import { a as brandLogos } from "./brand-logos-BaPSpWQ3.mjs";
import { B as BadgeCheck, b as ArrowUpRight } from "../_libs/lucide-react.mjs";
const nameToCatId = {
  Unilumin: "288194",
  KramerAV: "235610",
  Kramer: "235610",
  Persona: "288209",
  tranScreen: "288210",
  Grandview: "237068",
  "HDMI Cable": "237477",
  Newline: "237677",
  Enewave: "237467",
  Poly: "237596",
  Yealink: "237676",
  Vissonic: "237678",
  AudioPressBox: "237468",
  AVlink: "237069"
};
function BrandCard({
  slug,
  name,
  category,
  desc,
  descEn,
  imageUrl,
  logoUrl
}) {
  const { lang } = useLanguage();
  const img = imageUrl || brandImages[slug];
  const logo = logoUrl || brandLogos[slug];
  const categoryId = nameToCatId[name] || nameToCatId[slug];
  const targetUrl = categoryId ? `/category/${categoryId}` : `/brands/${slug}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: targetUrl,
      className: "group relative flex min-h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-elev focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/11] overflow-hidden bg-muted/30", children: [
          img ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: img,
              alt: `${name} product visual`,
              loading: "lazy",
              width: 1280,
              height: 768,
              className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            }
          ) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-3 top-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-navy ring-1 ring-black/5 backdrop-blur-md shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-cyan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: category })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3 grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white text-navy ring-1 ring-black/5 shadow-md", children: logo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: logo,
              alt: "",
              "aria-hidden": "true",
              loading: "lazy",
              className: "h-6 w-6 object-contain"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-black", children: name.charAt(0) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex items-end justify-between gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "truncate text-2xl font-black leading-tight tracking-tight text-navy transition-colors duration-300 group-hover:text-accent", children: name }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-relaxed text-muted-foreground line-clamp-2", children: t(lang, desc, descEn || desc) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-2 rounded-lg bg-accent/5 px-3 py-2 text-[13px] font-semibold text-navy border border-accent/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4 shrink-0 text-accent", strokeWidth: 2.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1", children: t(lang, "ตัวแทนจำหน่ายทางการ", "Authorized distributor") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 border-t border-border/60 pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-muted-foreground/80", children: t(lang, "พร้อมให้คำปรึกษา", "Sales support") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 whitespace-nowrap text-sm font-bold text-accent transition-colors", children: [
                t(lang, "ดูสินค้า", "View products"),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-7 w-7 place-items-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }) })
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  BrandCard as B
};
