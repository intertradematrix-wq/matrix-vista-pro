import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button, I as useTheme, m as cn } from "./router-Dcgg3q5t.mjs";
import "../_libs/react-dom.mjs";
import { n as CircleCheck, L as Info, ai as TriangleAlert, p as CircleX, ac as Star, y as Heart, c as Bell, a6 as Search, a8 as Settings, V as Mail, a2 as Phone, W as MapPin, C as Calendar, D as Download, aj as Upload, ah as Trash2, ab as SquarePen, s as Eye, j as Check, A as ArrowRight, ae as Sun, Z as Moon } from "../_libs/lucide-react.mjs";
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
function ThemeToggle({ className }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: toggle,
      "aria-label": isDark ? "เปลี่ยนเป็นโหมดสว่าง" : "เปลี่ยนเป็นโหมดมืด",
      title: isDark ? "Light mode" : "Dark mode",
      className: cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur",
        "text-foreground/80 transition-all hover:border-accent hover:text-accent hover:shadow-glow",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Sun,
          {
            className: cn(
              "h-4 w-4 transition-all",
              isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Moon,
          {
            className: cn(
              "absolute h-4 w-4 transition-all",
              isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
            )
          }
        )
      ]
    }
  );
}
const tokens = [{
  name: "background / foreground",
  bg: "bg-background",
  fg: "text-foreground"
}, {
  name: "card / card-foreground",
  bg: "bg-card",
  fg: "text-card-foreground"
}, {
  name: "muted / muted-foreground",
  bg: "bg-muted",
  fg: "text-muted-foreground"
}, {
  name: "primary / primary-foreground",
  bg: "bg-primary",
  fg: "text-primary-foreground"
}, {
  name: "secondary / secondary-foreground",
  bg: "bg-secondary",
  fg: "text-secondary-foreground"
}, {
  name: "accent / accent-foreground",
  bg: "bg-accent",
  fg: "text-accent-foreground"
}, {
  name: "destructive / destructive-foreground",
  bg: "bg-destructive",
  fg: "text-destructive-foreground"
}, {
  name: "popover / popover-foreground",
  bg: "bg-popover",
  fg: "text-popover-foreground"
}];
const swatchIcons = [Star, Heart, Bell, Search, Settings, Mail, Phone, MapPin, Calendar, Download, Upload, Trash2, SquarePen, Eye, Check, ArrowRight];
function ThemePreviewPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground", children: "Contrast QA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-bold", children: "Theme Preview" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-sm font-semibold text-muted-foreground hover:text-foreground", children: "← กลับหน้าแรก" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {})
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl space-y-12 px-4 py-10 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-xl font-bold", children: "Design Tokens" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4", children: tokens.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${t.bg} ${t.fg} rounded-xl border border-border p-4 shadow-sm`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider opacity-70", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-base font-semibold", children: "Aa — ทดสอบ ก ข ค ง" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs opacity-80", children: "The quick brown fox jumps over the lazy dog 0123456789" })
        ] }, t.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-card p-6 text-card-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-xl font-bold", children: "Typography" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-black tracking-tight", children: "Heading 1 — หัวข้อใหญ่" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold", children: "Heading 2 — หัวข้อรอง" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-semibold", children: "Heading 3 — หัวข้อย่อย" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: "Body — ข้อความปกติ เนื้อหาทั่วไปในเว็บไซต์ Matrix Intertrade" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Muted — ข้อความรอง / คำอธิบายเพิ่มเติม" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/70", children: "Tiny — ข้อความเล็กสุด เช่น caption / meta" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-accent underline underline-offset-4 hover:opacity-80", href: "#", children: "Inline link — ลิงก์ภายในข้อความ" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-card p-6 text-card-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-xl font-bold", children: "Buttons" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Default" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", children: "Secondary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "Outline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", children: "Ghost" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "link", children: "Link" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "destructive", children: "Destructive" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: true, children: "Disabled" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-accent text-accent-foreground hover:opacity-90", children: "Accent" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-card p-6 text-card-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-xl font-bold", children: "Icons" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SwatchRow, { label: "on background", boxClass: "bg-background border-border", iconClass: "text-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SwatchRow, { label: "on card", boxClass: "bg-card border-border", iconClass: "text-card-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SwatchRow, { label: "on muted", boxClass: "bg-muted border-border", iconClass: "text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SwatchRow, { label: "on primary", boxClass: "bg-primary border-transparent", iconClass: "text-primary-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SwatchRow, { label: "on accent", boxClass: "bg-accent border-transparent", iconClass: "text-accent-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SwatchRow, { label: "on destructive", boxClass: "bg-destructive border-transparent", iconClass: "text-destructive-foreground" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl border border-border bg-card p-6 text-card-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-xl font-bold", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { icon: CircleCheck, className: "border-green-500/30 bg-green-500/10 text-foreground", iconClass: "text-green-500", title: "Success", body: "บันทึกข้อมูลเรียบร้อยแล้ว" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { icon: Info, className: "border-sky-500/30 bg-sky-500/10 text-foreground", iconClass: "text-sky-500", title: "Info", body: "ข้อมูลเพิ่มเติมสำหรับผู้ใช้งาน" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { icon: TriangleAlert, className: "border-amber-500/30 bg-amber-500/10 text-foreground", iconClass: "text-amber-500", title: "Warning", body: "กรุณาตรวจสอบก่อนยืนยัน" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Alert, { icon: CircleX, className: "border-destructive/30 bg-destructive/10 text-foreground", iconClass: "text-destructive", title: "Error", body: "เกิดข้อผิดพลาด กรุณาลองใหม่" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-xl font-bold", children: "Brand Surfaces" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-navy p-6 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-white/60", children: "bg-navy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-lg font-bold", children: "หัวข้อบนพื้นน้ำเงินเข้ม" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/80", children: "ข้อความรองพร้อมไอคอน" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: swatchIcons.slice(0, 8).map((I, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-5 w-5 text-white" }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-accent p-6 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-white/70", children: "bg-gradient-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-lg font-bold", children: "หัวข้อบนแอ็คเซนต์" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/85", children: "ข้อความรองพร้อมไอคอน" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: swatchIcons.slice(0, 8).map((I, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-5 w-5 text-white" }, i)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pt-4 text-center text-xs text-muted-foreground", children: "เคล็ดลับ: บุ๊กมาร์กหน้านี้ไว้ใช้ตรวจ contrast บนทุก deploy — กดปุ่ม Theme ขวาบนเพื่อสลับโหมด" })
    ] })
  ] });
}
function SwatchRow({
  label,
  boxClass,
  iconClass
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border p-4 ${boxClass}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mb-3 text-[10px] font-bold uppercase tracking-wider opacity-70 ${iconClass}`, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: swatchIcons.map((I, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: `h-5 w-5 ${iconClass}` }, i)) })
  ] });
}
function Alert({
  icon: Icon,
  title,
  body,
  className,
  iconClass
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-start gap-3 rounded-xl border p-4 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `mt-0.5 h-5 w-5 shrink-0 ${iconClass}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm opacity-80", children: body })
    ] })
  ] });
}
export {
  ThemePreviewPage as component
};
