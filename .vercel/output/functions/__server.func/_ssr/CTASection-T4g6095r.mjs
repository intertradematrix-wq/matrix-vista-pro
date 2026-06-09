import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as useLanguage, F as t, B as Button } from "./router-BERCXs_H.mjs";
import { a2 as Phone, u as FileText, a0 as Package, A as ArrowRight } from "../_libs/lucide-react.mjs";
function CTASection() {
  const { lang } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-hero", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cyan/30 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/40 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-28 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight", children: [
        t(lang, "ต้องการออกแบบระบบ AV หรือจอ LED ", "Need an AV system or LED display "),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-accent bg-gradient-to-r from-cyan to-white bg-clip-text text-transparent", children: t(lang, "สำหรับองค์กรของคุณ?", "for your organization?") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/85 max-w-2xl mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]", children: t(
        lang,
        "ทีมผู้เชี่ยวชาญพร้อมให้คำปรึกษาฟรี ออกแบบโซลูชั่นตามหน้างานจริงของคุณ",
        "Our expert team offers free consultation and tailor-made solutions for your site."
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-white text-navy hover:bg-white/90", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contactus", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mr-2 h-4 w-4" }),
          " ",
          t(lang, "ติดต่อฝ่ายขาย", "Contact Sales")
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            size: "lg",
            className: "bg-gradient-accent text-white hover:opacity-90 shadow-glow",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contactus", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "mr-2 h-4 w-4" }),
              " ",
              t(lang, "ขอใบเสนอราคา", "Request Quote")
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            size: "lg",
            variant: "outline",
            className: "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/category/$id", params: { id: "0" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "mr-2 h-4 w-4" }),
              " ",
              t(lang, "ดูสินค้า", "View Products"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
            ] })
          }
        )
      ] })
    ] })
  ] });
}
export {
  CTASection as C
};
