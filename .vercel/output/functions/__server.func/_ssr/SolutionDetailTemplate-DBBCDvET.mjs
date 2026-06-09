import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./PageHeader-BEiJ_Rsw.mjs";
import { C as CTASection } from "./CTASection-T4g6095r.mjs";
import { G as useLanguage, F as t, B as Button, E as solutionImages } from "./router-BERCXs_H.mjs";
import { J as Icons, Y as Monitor, j as Check, A as ArrowRight } from "../_libs/lucide-react.mjs";
import { b as imgHotel, c as imgVideo, a as imgHospital, i as imgGovernment } from "./hero-av-BU0yt1UL.mjs";
const heroProjector = "/assets/hero-projector-mm_1Bee2.jpg";
const slugHero = {
  "led-display": imgGovernment,
  "interactive-display": imgHospital,
  projector: heroProjector,
  "wireless-presentation": imgVideo,
  "av-solutions": imgHotel
};
function SolutionDetailTemplate({
  slug,
  title,
  iconName,
  intro,
  introEn,
  bullets,
  bulletsEn,
  applications,
  applicationsEn
}) {
  const { lang } = useLanguage();
  const iconMap = Icons;
  const Icon = iconMap[iconName] ?? Monitor;
  const img = solutionImages[slug];
  const displayIntro = introEn ? t(lang, intro, introEn) : intro;
  const displayBullets = bulletsEn && lang === "EN" ? bulletsEn : bullets;
  const displayApps = applicationsEn && lang === "EN" ? applicationsEn : applications;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        eyebrow: "Solution",
        title,
        desc: displayIntro,
        breadcrumbs: [{ label: t(lang, "โซลูชั่นของเรา", "Our Solutions"), href: "/solutions" }, { label: title }],
        bgImage: slugHero[slug]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-[1.1fr_1fr] gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 inline-grid h-14 w-14 place-items-center rounded-xl bg-gradient-accent text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-primary tracking-tight", children: t(lang, `จุดเด่นของระบบ ${title}`, `Key features of ${title}`) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: displayBullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/85 leading-relaxed", children: b })
            ]
          },
          b
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-gradient-accent text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contactus", children: [
            t(lang, "ขอใบเสนอราคา", "Request Quote"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contactus", children: t(lang, "ปรึกษาผู้เชี่ยวชาญ", "Consult an Expert") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elev bg-gradient-hero", children: [
          img && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: img,
              alt: `${title} mockup`,
              loading: "lazy",
              width: 1280,
              height: 960,
              className: "absolute inset-0 h-full w-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-5 left-5 right-5 flex items-center gap-3 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl glass", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold drop-shadow", children: title })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-primary mb-4", children: t(lang, "การใช้งานที่เหมาะสม", "Best Applications") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-2", children: displayApps.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
            a
          ] }, a)) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  SolutionDetailTemplate as S
};
