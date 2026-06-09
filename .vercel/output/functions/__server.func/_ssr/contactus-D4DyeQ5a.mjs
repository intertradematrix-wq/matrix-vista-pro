import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-BEiJ_Rsw.mjs";
import { G as useLanguage, F as t, B as Button, m as cn } from "./router-BERCXs_H.mjs";
import { I as Input } from "./input-DrRZOGuM.mjs";
import { T as Textarea } from "./textarea-DGXaeTQM.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as Reveal, a as RevealStagger } from "./Reveal-Colxt0Ml.mjs";
import "../_libs/react-dom.mjs";
import { W as MapPin, a2 as Phone, V as Mail, X as MessageCircle, m as ChevronRight, q as Clock, i as Car, $ as Navigation, S as LoaderCircle, n as CircleCheck, a7 as Send, a9 as ShieldCheck } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
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
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
function ContactForm() {
  const { lang } = useLanguage();
  const [done, setDone] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    if (loading) return;
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      topic: String(fd.get("topic") || ""),
      message: String(fd.get("message") || "")
    };
    setLoading(true);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("send failed");
      setDone(true);
      toast.success(t(lang, "ส่งคำขอเรียบร้อย ทีมงานจะติดต่อกลับโดยเร็ว", "Request sent. Our team will contact you shortly."));
      e.target.reset();
    } catch (err) {
      console.error(err);
      toast.error(t(lang, "ส่งคำขอไม่สำเร็จ กรุณาลองใหม่อีกครั้ง", "Failed to send request. Please try again."));
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      className: "relative rounded-2xl border border-border bg-card shadow-elev p-8 md:p-10 space-y-6 overflow-hidden",
      onSubmit,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-gold to-brand-red" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-primary", children: t(lang, "ส่งคำขอใบเสนอราคา", "Request a Quote") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: t(lang, "กรอกข้อมูลของคุณ เพื่อให้เราติดต่อกลับโดยเร็วที่สุด", "Fill out the form below and we will get back to you shortly.") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t(lang, "ชื่อ-นามสกุล *", "Full Name *"), htmlFor: "name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "name",
              name: "name",
              required: true,
              placeholder: t(lang, "คุณ...", "Your Name..."),
              className: "h-11 rounded-xl bg-card border-border/60 focus:ring-brand-red/20 focus:border-brand-red transition-all"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t(lang, "บริษัท / องค์กร", "Company / Organization"), htmlFor: "company", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "company",
              name: "company",
              placeholder: t(lang, "ชื่อองค์กร", "Company Name"),
              className: "h-11 rounded-xl bg-card border-border/60 focus:ring-brand-red/20 focus:border-brand-red transition-all"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t(lang, "อีเมล *", "Email *"), htmlFor: "email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "email",
              name: "email",
              required: true,
              type: "email",
              placeholder: "you@company.com",
              className: "h-11 rounded-xl bg-card border-border/60 focus:ring-brand-red/20 focus:border-brand-red transition-all"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t(lang, "โทรศัพท์ *", "Phone *"), htmlFor: "phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "phone",
              name: "phone",
              required: true,
              placeholder: "0xx-xxx-xxxx",
              className: "h-11 rounded-xl bg-card border-border/60 focus:ring-brand-red/20 focus:border-brand-red transition-all"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t(lang, "หัวข้อที่สนใจ", "Topic of Interest"), htmlFor: "topic", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            id: "topic",
            name: "topic",
            className: "flex h-11 w-full rounded-xl border border-border/60 bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "LED Display" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Interactive Display" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Projector" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Wireless Presentation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "AV Solutions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: t(lang, "อื่นๆ", "Others") })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t(lang, "รายละเอียดความต้องการ", "Details / Requirements"), htmlFor: "message", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            id: "message",
            name: "message",
            rows: 4,
            placeholder: t(lang, "กรุณาระบุขนาดพื้นที่ จำนวน และรายละเอียดงาน...", "Please specify room size, quantity, and other details..."),
            className: "rounded-xl bg-card border-border/60 focus:ring-brand-red/20 focus:border-brand-red transition-all resize-none"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            size: "lg",
            disabled: loading,
            className: "w-full h-12 rounded-xl bg-gradient-to-r from-[#901a1e] to-brand-red text-white hover:opacity-95 shadow-md group overflow-hidden relative border-none",
            children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-5 w-5 animate-spin" }),
              " ",
              t(lang, "กำลังส่ง...", "Sending...")
            ] }) : done ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mr-2 h-5 w-5" }),
              " ",
              t(lang, "ส่งคำขอเรียบร้อย", "Request Sent")
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" }),
                t(lang, "ส่งคำขอใบเสนอราคา", "Request a Quote")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex items-center justify-center gap-2 text-[11px] font-medium text-muted-foreground bg-muted/40 py-2.5 rounded-lg border border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-brand-red" }),
          t(lang, "ทีมงานจะติดต่อกลับภายใน 1 วันทำการ", "Our team will reply within 1 business day")
        ] })
      ]
    }
  );
}
function Field({
  label,
  htmlFor,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor, className: "text-xs font-semibold text-foreground/80", children: label }),
    children
  ] });
}
const heroContact = "/assets/hero-contactus-1Ynvj22Z.jpg";
const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d208564.31411982139!2d100.08820455287514!3d13.754200668610048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x30e29b41eaa4a621%3A0xdc28c2b815205d5b!2zTWF0cml4IEludGVydHJhZGUgQ28uLEx0ZC4gRmFjdG9yeSBGb3J3YXJkIDExMS81NiDguKvguKHguLnguYjguJfguLXguYggOCDguJUg4LiV4Liz4Lia4LilIOC4muC4suC4h-C4geC4o-C5iOC4suC4hyDguK0u4LmA4Lih4Li34Lit4LiHIOC4meC4meC4l-C4muC4uOC4o-C4tSAxMTAwMA!3m2!1d13.843674!2d100.45374869999999!4m5!1s0x30e29b41eaa4a621%3A0xdc28c2b815205d5b!2zTWF0cml4IEludGVydHJhZGUgQ28uLEx0ZC4gRmFjdG9yeSBGb3J3YXJkIDExMS81NiDguKvguKHguLnguYjguJfguLXguYggOCDguJUg4LiV4Liz4Lia4LilIOC4muC4suC4h-C4geC4o-C5iOC4suC4hyDguK0u4LmA4Lih4Li34Lit4LiHIOC4meC4meC4l-C4muC4uOC4o-C4tSAxMTAwMA!3m2!1d13.843674!2d100.45374869999999!5e0!3m2!1sth!2sth!4v1780061893336!5m2!1sth!2sth";
const DIRECTIONS_URL = "https://maps.app.goo.gl/1SFM9izkXdenp7LYA";
function ContactPage() {
  const {
    lang
  } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Contact", title: t(lang, "ติดต่อทีมผู้เชี่ยวชาญของเรา", "Contact Our Experts"), desc: t(lang, "ขอใบเสนอราคา หรือนัดหมาย Site Survey ฟรี ทีมงานพร้อมตอบกลับภายใน 1 วันทำการ", "Request a quote or schedule a free site survey. We reply within 1 business day."), breadcrumbs: [{
      label: t(lang, "ติดต่อเรา", "Contact Us")
    }], bgImage: heroContact }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-16 md:py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background to-muted/30 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-primary tracking-tight", children: t(lang, "ติดต่อเรา พร้อมให้บริการ", "We're Here to Help") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: t(lang, "ช่องทางการติดต่อ Matrix Intertrade", "Contact Channels") })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RevealStagger, { step: 100, className: "space-y-4", children: [{
            Icon: MapPin,
            label: t(lang, "ที่อยู่", "Address"),
            d: t(lang, "บจก.แมทริกซ์ อินเตอร์เทรด 111/51 หมู่ที่ 8 ต.บางกร่าง อ.เมือง จ.นนทบุรี 11000", "Matrix Intertrade 111/51 Moo 8, Bang Krang, Mueang, Nonthaburi 11000")
          }, {
            Icon: Phone,
            label: t(lang, "โทรศัพท์", "Phone"),
            d: "02-129-6193 / 094-888-7041"
          }, {
            Icon: Mail,
            label: t(lang, "อีเมล", "Email"),
            d: "matrixintertrade2026@gmail.com"
          }, {
            Icon: MessageCircle,
            label: "Line OA",
            d: "@MatrixIntertrade"
          }].map(({
            Icon,
            label,
            d
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-center gap-5 rounded-[1.5rem] border border-border/60 bg-card p-5 shadow-sm hover:shadow-elev transition-all duration-300 hover:-translate-y-1 cursor-default", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-muted-foreground mb-1", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold text-primary leading-snug", children: d })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5 shrink-0 text-muted-foreground/40 group-hover:text-brand-red group-hover:translate-x-1 transition-all" })
          ] }, label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, variant: "slide", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-gradient-subtle py-16 md:py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dot-pattern opacity-40 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan/10 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 md:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4", children: "Find Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-primary tracking-tight", children: t(lang, "แผนที่บริษัท & เส้นทางเดินทาง", "Office Map & Directions") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-2xl mx-auto", children: t(lang, "นัดหมายเข้าชม Showroom และคลังสินค้าของเราที่นนทบุรี ทีมงานพร้อมต้อนรับและสาธิตสินค้าจริง", "Schedule a visit to our Showroom and Warehouse in Nonthaburi. Our team is ready to welcome you and provide live demonstrations.") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.6fr] gap-6 items-stretch", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden bg-gradient-hero text-white p-7 md:p-8 shadow-elev ring-1 ring-white/10 flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-56 w-56 rounded-full bg-accent/30 blur-3xl pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest backdrop-blur", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent animate-pulse" }),
                "Head Office & Warehouse"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-4 text-2xl md:text-3xl font-bold leading-tight drop-shadow", children: [
                "Matrix Intertrade",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Co., Ltd."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-white/85 leading-relaxed", children: [
                t(lang, "111/51 หมู่ที่ 8 ต.บางกร่าง อ.เมือง", "111/51 Moo 8, Bang Krang, Mueang"),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                t(lang, "จ.นนทบุรี 11000 ประเทศไทย", "Nonthaburi 11000, Thailand")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-6 space-y-3", children: [{
              Icon: Clock,
              label: t(lang, "เวลาทำการ", "Business Hours"),
              d: t(lang, "จันทร์–ศุกร์ 08:30–17:30 น.", "Mon–Fri 08:30–17:30")
            }, {
              Icon: Phone,
              label: t(lang, "โทรนัดหมาย", "Appointments"),
              d: "02-129-6193"
            }, {
              Icon: Car,
              label: t(lang, "ที่จอดรถ", "Parking"),
              d: t(lang, "มีที่จอดรถภายในบริษัท", "Parking available on-site")
            }].map(({
              Icon,
              label,
              d
            }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-xl bg-white/10 ring-1 ring-white/15 backdrop-blur px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/15 ring-1 ring-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-white/70", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mt-0.5", children: d })
              ] })
            ] }, label)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-6 flex flex-col sm:flex-row gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-gradient-accent text-white shadow-glow hover:opacity-95", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: DIRECTIONS_URL, target: "_blank", rel: "noopener noreferrer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { className: "h-4 w-4" }),
                t(lang, "นำทาง Google Maps", "Google Maps Directions")
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:021296193", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                t(lang, "โทรสอบถาม", "Call Us")
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden shadow-elev ring-1 ring-border bg-card min-h-[420px] lg:min-h-[520px] group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Matrix Intertrade Location Map", src: MAP_EMBED_URL, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", allowFullScreen: true, className: "absolute inset-0 h-full w-full border-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-3xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary shadow-card ring-1 ring-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-accent" }),
              "Matrix Intertrade HQ"
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  ContactPage as component
};
