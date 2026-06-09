import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Breadcrumb } from "./Breadcrumb-CgVk6Mi0.mjs";
function PageHeader({
  eyebrow,
  title,
  desc,
  breadcrumbs,
  bgImage,
  variant = "default"
}) {
  const clean = variant === "clean";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: `relative overflow-hidden border-b border-border ${clean ? "bg-white" : bgImage ? "bg-navy" : "bg-gradient-subtle"}`,
      children: [
        clean ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" }) : bgImage ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: bgImage,
              alt: "",
              "aria-hidden": "true",
              className: "absolute inset-0 h-full w-full object-cover opacity-60",
              loading: "eager"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dot-pattern opacity-20 pointer-events-none" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dot-pattern opacity-60 pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan/10 blur-3xl pointer-events-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `relative mx-auto min-w-0 max-w-7xl px-4 md:px-6 ${clean ? "py-8 sm:py-10 md:py-14" : "py-10 sm:py-14 md:py-20"}`,
            children: [
              breadcrumbs && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `mb-6 ${bgImage && !clean ? "[&_*]:!text-white [&_a]:!text-white/90 [&_a:hover]:!text-cyan [&_a:hover]:underline [&_span.font-semibold]:!text-white [&_svg]:!text-white/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]" : ""}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumb, { items: breadcrumbs })
                }
              ),
              eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `mb-4 inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase leading-snug tracking-[0.14em] ${bgImage && !clean ? "bg-accent/20 ring-1 ring-accent/40 text-accent" : "bg-secondary text-primary ring-1 ring-border"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 break-words", children: eyebrow })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: `max-w-4xl break-words text-[28px] font-bold leading-tight tracking-tight text-balance sm:text-3xl md:text-5xl lg:text-6xl ${bgImage && !clean ? "text-white drop-shadow-lg" : "text-primary"}`,
                  children: title
                }
              ),
              desc && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `mt-4 max-w-3xl break-words text-sm leading-relaxed text-pretty sm:mt-5 sm:text-base md:text-lg ${bgImage && !clean ? "text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]" : "text-muted-foreground"}`,
                  children: desc
                }
              )
            ]
          }
        )
      ]
    }
  );
}
export {
  PageHeader as P
};
