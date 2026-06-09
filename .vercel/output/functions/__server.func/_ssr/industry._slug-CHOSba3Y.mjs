import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./PageHeader-BEiJ_Rsw.mjs";
import { C as CTASection } from "./CTASection-T4g6095r.mjs";
import { J as Icons, h as Building2, j as Check, A as ArrowRight } from "../_libs/lucide-react.mjs";
import { b as Route$7, G as useLanguage, F as t, B as Button, m as cn } from "./router-BERCXs_H.mjs";
import { h as heroSolutions } from "./hero-solutions-CuJhccH0.mjs";
import "../_libs/react-dom.mjs";
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
function LazyImage({ className, onLoad, ...props }) {
  const [loaded, setLoaded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      loading: "lazy",
      decoding: "async",
      ...props,
      onLoad: (e) => {
        setLoaded(true);
        onLoad?.(e);
      },
      className: cn("lazy-img", loaded && "is-loaded", className)
    }
  );
}
function IndustryPage() {
  const {
    ind
  } = Route$7.useLoaderData();
  const {
    lang
  } = useLanguage();
  const Icon = Icons[ind.icon] ?? Building2;
  const isHotel = ind.slug === "hotel";
  const featuresTH = ["ออกแบบระบบให้เหมาะกับขนาดและการใช้งานจริง", "อุปกรณ์จากแบรนด์ระดับโลกที่ผ่านการรับรอง", "บริการ Site Survey และให้คำปรึกษาฟรี", "ติดตั้งและทดสอบโดยทีมช่างผู้เชี่ยวชาญ", "บริการหลังการขายและ Training สำหรับทีมงาน"];
  const featuresEN = ["System design tailored to your space and real-world usage", "Equipment from world-class, fully certified brands", "Free on-site survey and expert consultation", "Installation and commissioning by specialist engineers", "After-sales service and team training included"];
  const features = t(lang, featuresTH, featuresEN);
  const hotelTitleEN = "Hotels & Large Conference Halls";
  const hotelDescEN = "End-to-end AV solutions for hotels, ballrooms, conference halls, live events, theatres and museums — built on Top-Class, mission-critical equipment.";
  const displayTitle = isHotel ? t(lang, ind.title, hotelTitleEN) : t(lang, ind.title, ind.titleEn);
  const displayDesc = isHotel ? t(lang, ind.desc, hotelDescEN) : t(lang, ind.desc, ind.descEn);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Industry", title: displayTitle, desc: displayDesc, breadcrumbs: [{
      label: t(lang, "เกี่ยวกับเรา", "About Us"),
      href: "/aboutus"
    }, {
      label: displayTitle
    }], bgImage: heroSolutions }),
    !["education", "hotel", "corporate", "video-conference"].includes(ind.slug) && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 inline-grid h-14 w-14 place-items-center rounded-xl bg-gradient-accent text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-primary tracking-tight", children: t(lang, `โซลูชั่นสำหรับ${displayTitle}`, `Solutions for ${displayTitle}`) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: [
          displayDesc,
          " ",
          t(lang, "เราเข้าใจความต้องการเฉพาะของแต่ละองค์กร และออกแบบระบบที่ตอบโจทย์การใช้งานจริง", "We understand the unique needs of every organization and design systems that match real-world use.")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/85", children: f })
        ] }, f)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] rounded-3xl bg-gradient-hero relative overflow-hidden shadow-elev grid place-items-center group", children: ind.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ind.imageUrl, alt: ind.title, loading: "lazy", width: 1280, height: 960, className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-32 w-32 text-white/20" }) })
    ] }) }),
    ind.slug === "education" && /* @__PURE__ */ jsxRuntimeExports.jsx(EducationContent, {}),
    ind.slug === "hotel" && /* @__PURE__ */ jsxRuntimeExports.jsx(HotelContent, {}),
    ind.slug === "corporate" && /* @__PURE__ */ jsxRuntimeExports.jsx(CorporateContent, {}),
    ind.slug === "video-conference" && /* @__PURE__ */ jsxRuntimeExports.jsx(VideoConferenceContent, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
const EDU_PRODUCTS = [{
  title: "Grandview Large-stage Series",
  desc: 'จอสำหรับห้องบรรยายขนาดกลาง - ใหญ่ หากห้องเรียนหรือห้องบรรยายของคุณมีขนาดใหญ่เกินกว่าที่ Remarkable Screen จะรองรับได้ Grandview มีจอตั้งแต่ขนาด 100" - 500" ทุกฟอร์แมต ทั้งแบบมือดึงและแบบมอเตอร์',
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1670901206682.png",
  href: "/category/237068"
}, {
  title: "SkyShow Series",
  desc: "จอสำหรับห้องเพดานสูง หอประชุม หรือห้องบรรยายเพดานสูง โดย Grandview ออกแบบให้เหมาะกับการใช้งานบนเวทีและฮอลล์ขนาดใหญ่",
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1670901315618.jpg",
  href: "/category/237068"
}, {
  title: "KRAMER",
  desc: "อุปกรณ์เพื่อทุกคำตอบสำหรับโซลูชั่นในการนำเสนองานภาพ เสียง และการแลกเปลี่ยนความเห็นในยุคดิจิตอล 4.0",
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1670901329807.jpg",
  href: "/category/235610"
}];
function EducationContent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-2xl md:text-3xl font-bold text-primary tracking-tight", children: "ผลิตภัณฑ์สำหรับสถาบันการศึกษา" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-muted-foreground max-w-2xl mx-auto", children: "โซลูชั่นภาพและเสียงครบวงจรสำหรับห้องเรียน ห้องบรรยาย และหอประชุมทุกขนาด" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: EDU_PRODUCTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group rounded-2xl overflow-hidden border border-border bg-card shadow-card hover:shadow-elev transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: p.img, alt: p.title, className: "h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-primary", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-foreground/80 leading-relaxed line-clamp-5", children: p.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: p.href, children: [
            "ดูเพิ่มเติม ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
          ] }) })
        ] })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: "https://www.matrixintertrade.com/images/ready-template/crop-1670901144604.jpg", alt: "Remarkable Screen ห้องเรียน", className: "aspect-[4/3] w-full object-cover rounded-2xl shadow-card col-span-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: "https://www.matrixintertrade.com/images/ready-template/crop-1670900202024.png", alt: "Remarkable Screen ตัวอย่าง", className: "aspect-square w-full object-cover rounded-2xl shadow-card" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: "https://www.matrixintertrade.com/images/ready-template/crop-1671003815569.jpg", alt: "Interactive Display ในห้องเรียน", className: "aspect-square w-full object-cover rounded-2xl shadow-card" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-accent/15 text-accent px-3 py-1 text-xs font-semibold", children: "มหาวิทยาลัย · วิทยาลัย · โรงเรียนทุกระดับชั้น" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl md:text-3xl font-bold text-primary tracking-tight", children: "Remarkable Screen — จอ 2-in-1 สำหรับห้องเรียนยุคใหม่" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "ห้องเรียน ห้องเล็กเชอร์ และห้องบรรยายในยุคปัจจุบัน ขาดการนำเสนอภาพผ่านสื่อมีเดียไม่ได้ Grandview มีจอฉายภาพคุณภาพสูงที่ตอบทุกความต้องการ ทุกขนาด" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: ["Remarkable Screen เป็นได้ทั้งกระดานเขียนด้วย Marking pen ลบได้เหมือนไวท์บอร์ด และเป็นจอฉายภาพคุณภาพสูงในเวลาเดียวกัน", "หมดยุคการดึงจอลง-ขึ้นเพื่อสลับระหว่างฉายภาพและเขียนบรรยาย", "โครงสร้างแข็งแรง 4 ชั้น ดีไซน์ทันสมัย เหมาะกับทุกห้องเรียน", "ใช้งานร่วมกับโปรเจคเตอร์อินเตอร์แอ๊คทีฟได้อย่างราบรื่น เขียน ขยาย คอมเม้นต์บนสไลด์ และบันทึกส่งให้ผู้เรียนได้ทันที", 'มีขนาดให้เลือกตั้งแต่ 50" จนถึง 106"'].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/85 leading-relaxed", children: f })
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-gradient-accent text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contactus", children: [
            "ปรึกษาผู้เชี่ยวชาญ ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$id", params: {
            id: "237068"
          }, children: "ดูสินค้า Grandview" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20 bg-gradient-hero text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold", children: "Interactive Display · AI · IoT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl md:text-3xl font-bold tracking-tight", children: "จออินเตอร์แอคทีฟ ขายดีอันดับ 1 ในอเมริกาและยุโรป" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/85 leading-relaxed", children: "จอแสดงผลที่เป็นมากกว่าจอ TV — เขียน แสดงความเห็น เชื่อมต่อประชุมออนไลน์ และแลกเปลี่ยนข้อมูลแบบไร้สาย พลิกโฉมวิธีการเรียนการสอนในห้องเรียนและสำนักงานยุค AI & IoT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-white text-primary hover:bg-white/90", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/interactive-display", children: [
            "ดูโซลูชั่น Interactive Display ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "border-white/40 text-white hover:bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$id", params: {
            id: "237677"
          }, children: "ดูสินค้าทั้งหมด" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: "https://www.matrixintertrade.com/images/ready-template/crop-1671003815569.jpg", alt: "Interactive Display สำหรับการเรียนการสอน", className: "aspect-[4/3] w-full object-cover rounded-3xl shadow-elev" })
    ] }) })
  ] });
}
const HOTEL_BANNERS = ["https://www.matrixintertrade.com/images/banner/crop-1671073076283.jpg", "https://www.matrixintertrade.com/images/banner/crop-1671073103305.jpg", "https://www.matrixintertrade.com/images/banner/crop-1671073124819.jpg", "https://www.matrixintertrade.com/images/banner/crop-1671073152740.jpg", "https://www.matrixintertrade.com/images/banner/crop-1671073175999.jpg"];
const HOTEL_PRODUCTS = [{
  title: "Grandview CNV — Cyber / Elegant / Large-stage Series",
  descTH: 'จอสำหรับห้องบรรยายและฮอลล์ขนาดกลาง - ใหญ่ รองรับห้องที่ใหญ่เกินกว่า Remarkable Screen ตั้งแต่ขนาด 100" ถึง 500" ทุกฟอร์แมต ทั้งแบบมือดึงและแบบมอเตอร์',
  descEN: `Projection screens for medium-to-large halls and auditoriums — for rooms beyond Remarkable Screen's range, from 100" up to 500" in every format, available in pull-down and motorized versions.`,
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1671075328335.jpg",
  href: "/category/237068"
}, {
  title: "KRAMER",
  descTH: "อุปกรณ์เพื่อทุกคำตอบสำหรับโซลูชั่นในการนำเสนองานภาพ เสียง และการแลกเปลี่ยนความเห็นในยุคดิจิตอล 4.0",
  descEN: "Equipment that answers every need in audio, video and collaborative presentation for the Digital 4.0 era.",
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1671075351806.jpg",
  href: "/category/235610"
}];
function HotelContent() {
  const {
    lang
  } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 md:py-16 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: HOTEL_BANNERS.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src, alt: `Hotel banner ${i + 1}`, className: `aspect-[4/3] w-full object-cover rounded-2xl shadow-card ${i === 0 ? "col-span-2 md:col-span-1" : ""}` }, src)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 md:px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-accent/15 text-accent px-3 py-1 text-xs font-semibold", children: t(lang, "Live Event · พิพิธภัณฑ์ · โรงละคร · โรงแรม", "Live Events · Museums · Theatres · Hotels") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl md:text-3xl font-bold text-primary tracking-tight", children: t(lang, "สถานบันเทิง โรงละคร โรงแรม งานกิจกรรม", "Entertainment Venues, Theatres, Hotels & Live Events") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: '"The show must go on"' }),
        " — ",
        t(lang, "เราทราบดีว่างานของคุณพลาดไม่ได้ หากพลาด ความเสียหายต่อคุณและลูกค้าของคุณอาจมากมายเกินรับไหว อุปกรณ์ที่เราคัดสรรจึงเป็น Top Class reliable products ที่ผ่านการพิสูจน์อย่างโชกโชนจากกิจกรรมสำคัญและการใช้งานหนัก ในสถานที่ที่ต้องการเสถียรภาพสูงสุดจากทุกมุมโลก", "we know your show cannot afford to fail. The cost to you and your clients could be more than anyone can bear. That's why we select only Top-Class, proven equipment battle-tested in major events and demanding installations worldwide.")
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-16 md:pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-center text-xl md:text-2xl font-bold text-primary tracking-tight", children: t(lang, "ผลิตภัณฑ์เพื่อกิจการโรงแรม งานกิจกรรม Live Event และงานพิพิธภัณฑ์", "Products for Hotels, Live Events and Museums") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto", children: HOTEL_PRODUCTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group rounded-2xl overflow-hidden border border-border bg-card shadow-card hover:shadow-elev transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: p.img, alt: p.title, className: "h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold text-primary", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-foreground/80 leading-relaxed", children: t(lang, p.descTH, p.descEN) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: p.href, children: [
            "Read more ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
          ] }) })
        ] })
      ] }, p.title)) })
    ] }) })
  ] });
}
const CORP_PRODUCTS = [{
  title: "Grandview CNV — Cyber / Elegant / Large-stage Series",
  descTH: 'จอสำหรับห้องประชุมและฮอลล์ขนาดกลาง-ใหญ่ ตั้งแต่ 100" ถึง 500" ทุกฟอร์แมต ทั้งแบบมือดึงและมอเตอร์ ตอบโจทย์ทุกขนาดของห้องประชุมในองค์กร',
  descEN: 'Projection screens for medium-to-large corporate meeting rooms and halls, from 100" up to 500" in every format — manual and motorized options for any room size.',
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1670902079322.jpg",
  href: "/category/237068"
}, {
  title: "newline Flex",
  descTH: "จอ Interactive Display แบบยืดหยุ่น พร้อมระบบสัมผัสและเขียนความคิดเห็นได้บนสไลด์ เหมาะสำหรับห้องประชุมและห้องอบรมยุคใหม่ในองค์กร",
  descEN: "Flexible interactive display with touch and annotation — ideal for modern corporate meeting and training rooms.",
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1671003627930.jpg",
  href: "/interactive-display"
}, {
  title: "newline Q, Q+, Z Series",
  descTH: "จอทัชสกรีนอัจฉริยะระดับมืออาชีพ สำหรับห้องประชุมทุกขนาด รองรับการประชุมออนไลน์ การนำเสนอแบบไร้สาย และการ Collaborate แบบเรียลไทม์",
  descEN: "Professional smart touchscreens for every meeting room size — built for online meetings, wireless presentation and real-time collaboration.",
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1671003513171.jpg",
  href: "/interactive-display"
}, {
  title: "KRAMER",
  descTH: "อุปกรณ์ระบบ AV ครบวงจร สำหรับการนำเสนอภาพ เสียง และการแลกเปลี่ยนความเห็นในห้องประชุมยุคดิจิตอล 4.0",
  descEN: "End-to-end AV equipment for presentation, audio and collaboration in Digital 4.0 corporate meeting rooms.",
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1670902119602.jpg",
  href: "/category/235610"
}];
function CorporateContent() {
  const {
    lang
  } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-accent/15 text-accent px-3 py-1 text-xs font-semibold", children: t(lang, "องค์กรธุรกิจ · หน่วยงานราชการ · รัฐวิสาหกิจ", "Corporate · Government · State Enterprise") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl md:text-3xl font-bold text-primary tracking-tight", children: t(lang, "Remarkable Screen — จอ 2-in-1 สำหรับห้องประชุมยุคดิจิตอล 4.0", "Remarkable Screen — the 2-in-1 display for Digital 4.0 meeting rooms") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: t(lang, "Remarkable Screen จอภาพยุคใหม่ล่าสุดแบบทูอินวัน เป็นได้ทั้งกระดานเขียนบรรยายด้วย Marking pen ลบได้เหมือนไวท์บอร์ด และเป็นจอฉายภาพคุณภาพสูงจากโปรเจคเตอร์ในเวลาเดียวกัน — ทางเลือกใหม่อันชาญฉลาดสำหรับห้องประชุมในสำนักงาน", "Remarkable Screen is the new 2-in-1 display — a whiteboard you can write on with a marker pen AND a high-quality projection screen at the same time. The smart new choice for any office meeting room.") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: [t(lang, "หมดยุคของการดึงจอลง-ขึ้นเพื่อสลับระหว่างฉายภาพและเขียนบรรยาย — ทำได้สองอย่างพร้อมกันบนจอเดียว", "No more pulling screens up and down to switch between projecting and writing — do both at once on a single surface."), t(lang, "ดีไซน์ทันสมัย โครงสร้างแข็งแรงถึง 4 ชั้น ผิวจอเรียบสนิท ภาพสวย คุณภาพสูงเหมือนจริง", "Modern design with a 4-layer reinforced structure and perfectly flat surface for stunning, true-to-life image quality."), t(lang, "ใช้คู่กับโปรเจคเตอร์อินเตอร์แอ๊คทีฟ — เขียน ขยาย คอมเม้นต์บนสไลด์ บันทึกและส่งให้ผู้เข้าประชุมได้ทันที", "Pair with an interactive projector — write, zoom, annotate on slides, save and share instantly with every meeting attendee."), t(lang, "การจับคู่ระหว่างจอกับโปรเจคเตอร์อินเตอร์แอ๊คทีฟราบรื่นทุกจุดสัมผัส", "Seamless touch response on every point thanks to the perfectly flat surface and rigid construction."), t(lang, 'มีให้เลือกหลายขนาด ตั้งแต่ 50" จนถึง 106" ตามความเหมาะสมของห้อง', 'Available in multiple sizes from 50" up to 106" to fit any room.')].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/85 leading-relaxed", children: f })
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-gradient-accent text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contactus", children: [
            t(lang, "ปรึกษาผู้เชี่ยวชาญ", "Talk to a specialist"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/interactive-display", children: t(lang, "ดูโซลูชั่น Interactive Display", "Interactive Display solutions") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: "https://www.matrixintertrade.com/images/ready-template/crop-1670902079322.jpg", alt: "Remarkable Screen สำนักงาน", className: "aspect-[4/3] w-full object-cover rounded-2xl shadow-card col-span-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: "https://www.matrixintertrade.com/images/ready-template/crop-1671003627930.jpg", alt: "newline Flex", className: "aspect-square w-full object-cover rounded-2xl shadow-card" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: "https://www.matrixintertrade.com/images/ready-template/crop-1671003513171.jpg", alt: "newline Q Series", className: "aspect-square w-full object-cover rounded-2xl shadow-card" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-center text-xl md:text-2xl font-bold text-primary tracking-tight", children: t(lang, "ผลิตภัณฑ์สำหรับสำนักงาน องค์กรธุรกิจ และหน่วยงานราชการ", "Products for Offices, Corporate and Government") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-muted-foreground max-w-2xl mx-auto", children: t(lang, "โซลูชั่นภาพและเสียงครบวงจร ตอบโจทย์ทุกห้องประชุมและทุกการใช้งานในองค์กรยุคใหม่", "End-to-end AV solutions for every meeting room and every use case in the modern enterprise.") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: CORP_PRODUCTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group rounded-2xl overflow-hidden border border-border bg-card shadow-card hover:shadow-elev transition-all flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: p.img, alt: p.title, className: "h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-primary leading-snug", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-foreground/80 leading-relaxed flex-1", children: t(lang, p.descTH, p.descEN) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "mt-5 self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: p.href, children: [
            t(lang, "ดูเพิ่มเติม", "Read more"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
          ] }) })
        ] })
      ] }, p.title)) })
    ] }) })
  ] });
}
const VC_PRODUCTS = [{
  title: "Q+ Series — Newline",
  descTH: "จอภาพ Interactive Digital รองรับระบบสัมผัส รุ่นสูงสุดของ Newline สำหรับห้องประชุมระดับมืออาชีพ",
  descEN: "Top-tier Newline Interactive Digital touchscreen for professional meeting rooms.",
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1671421815130.jpg",
  href: "/interactive-display"
}, {
  title: "Q Series — Newline",
  descTH: "จอภาพ Interactive Digital รองรับระบบสัมผัส รุ่นมาตรฐาน เหมาะสำหรับห้องประชุมและห้องเรียนทุกขนาด",
  descEN: "Standard Newline Interactive Digital touchscreen — ideal for meeting rooms and classrooms of any size.",
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1671422226683.jpg",
  href: "/interactive-display"
}, {
  title: "Z Series — Newline",
  descTH: "จอภาพ Interactive Digital รองรับระบบสัมผัส ดีไซน์ทันสมัย ตอบโจทย์การประชุมและการนำเสนอแบบไร้สาย",
  descEN: "Newline Interactive Digital touchscreen with modern design — built for wireless meetings and presentations.",
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1671422237599.jpg",
  href: "/interactive-display"
}, {
  title: "Collaboration Devices",
  descTH: "ชุดอุปกรณ์วิดีโอคอนเฟอเร้นซ์ครบชุด สำหรับการประชุมทางไกล รองรับการเชื่อมต่อกับแพลตฟอร์มประชุมยอดนิยม",
  descEN: "Complete video conferencing kits for remote meetings — compatible with all major conferencing platforms.",
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1671422347547.jpg",
  href: "/category/235610"
}, {
  title: "AV Over IP",
  descTH: "การส่งสัญญาณภาพและเสียงผ่านระบบ Network รองรับการกระจายสัญญาณคุณภาพสูงในระยะไกลและหลายจุดพร้อมกัน",
  descEN: "Transmit audio and video over standard IP networks — high-quality distribution across long distances and multiple endpoints.",
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1671422620134.jpg",
  href: "/category/235610"
}, {
  title: "Video Switchers 4K",
  descTH: "เครื่องสลับสัญญาณภาพ รองรับความละเอียดสูงสุดถึง 4K สำหรับห้องประชุมและงานอีเวนต์ที่ต้องการคุณภาพสูง",
  descEN: "Video switchers supporting up to 4K resolution — for meeting rooms and live events that demand top image quality.",
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1671422658470.jpg",
  href: "/category/235610"
}, {
  title: "Collaboration Devices — Video Conference",
  descTH: "อุปกรณ์สำหรับ Video Conference (การประชุมทางไกล) เพื่อการสื่อสารทั้งภายในและภายนอกองค์กรอย่างมีประสิทธิภาพ",
  descEN: "Devices for video conferencing — efficient communication inside and across organizations.",
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1671422641501.jpg",
  href: "/category/235610"
}, {
  title: "Room Control Systems",
  descTH: "อุปกรณ์สำหรับควบคุมอุปกรณ์ต่างๆ ภายในห้องเรียน ห้องประชุม ทั้งภาพ เสียง แสง และระบบนำเสนอจากจุดควบคุมเดียว",
  descEN: "Control all classroom and meeting room devices — video, audio, lighting and presentation — from a single control panel.",
  img: "https://www.matrixintertrade.com/images/ready-template/crop-1671422671970.jpg",
  href: "/category/235610"
}];
function VideoConferenceContent() {
  const {
    lang
  } = useLanguage();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: "https://www.matrixintertrade.com/images/ready-template/crop-1671421815130.jpg", alt: "newline Interactive Display", className: "aspect-[4/3] w-full object-cover rounded-3xl shadow-elev" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-accent/15 text-accent px-3 py-1 text-xs font-semibold", children: t(lang, "Video Conference · Interactive Display · AV Over IP", "Video Conference · Interactive Display · AV Over IP") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl md:text-3xl font-bold text-primary tracking-tight", children: t(lang, "newline จออินเตอร์แอคทีฟ — มากกว่าจอ TV ทั่วไป", "newline Interactive Display — far more than a TV") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: t(lang, "จอแสดงผลเพียงหนึ่งเดียวที่คุณสามารถใช้ขีดเขียน แสดงความเห็น เชื่อมต่อการประชุมออนไลน์ และแลกเปลี่ยนข้อมูลกันในการประชุมแบบไร้สาย ทำงานร่วมกับอุปกรณ์ชุดประชุมอื่นๆ ได้อย่างลงตัว", "The single display where you can write, annotate, join online meetings and share data wirelessly — working seamlessly with every other conferencing device in the room.") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-gradient-accent text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contactus", children: [
            t(lang, "ปรึกษาผู้เชี่ยวชาญ", "Talk to a specialist"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/interactive-display", children: t(lang, "ดูโซลูชั่น Interactive Display", "Interactive Display solutions") }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-center text-xl md:text-2xl font-bold text-primary tracking-tight", children: t(lang, "ผลิตภัณฑ์สำหรับระบบวิดีโอคอนเฟอเร้นซ์ เพื่อทุกหน่วยงาน", "Video Conferencing Products for Every Organization") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-muted-foreground max-w-2xl mx-auto", children: t(lang, "โซลูชั่นภาพ เสียง และการประชุมทางไกลครบวงจร สำหรับห้องประชุม ห้องเรียน และห้องควบคุมทุกขนาด", "End-to-end audio, video and conferencing solutions for meeting rooms, classrooms and control rooms of any size.") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: VC_PRODUCTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group rounded-2xl overflow-hidden border border-border bg-card shadow-card hover:shadow-elev transition-all flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyImage, { src: p.img, alt: p.title, className: "h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-primary leading-snug", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-foreground/80 leading-relaxed flex-1", children: t(lang, p.descTH, p.descEN) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "mt-5 self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: p.href, children: [
            t(lang, "ดูเพิ่มเติม", "Read more"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
          ] }) })
        ] })
      ] }, p.title)) })
    ] }) })
  ] });
}
export {
  IndustryPage as component
};
