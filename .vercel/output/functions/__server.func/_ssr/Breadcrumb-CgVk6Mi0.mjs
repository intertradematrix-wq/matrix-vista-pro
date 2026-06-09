import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { I as House, m as ChevronRight } from "../_libs/lucide-react.mjs";
function Breadcrumb({ items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "nav",
    {
      "aria-label": "breadcrumb",
      className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] sm:text-sm font-medium text-muted-foreground",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center transition-colors hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-4 w-4" }) }),
        items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 opacity-60" }),
          it.href && i < items.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: it.href,
              className: "underline-offset-4 transition-colors hover:text-accent hover:underline",
              children: it.label
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: it.label })
        ] }, i))
      ]
    }
  );
}
export {
  Breadcrumb as B
};
