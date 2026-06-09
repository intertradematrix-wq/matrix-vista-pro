import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as useLanguage, H as useSiteContent, h as articles, B as Button, F as t, g as articleImages, m as cn, E as solutionImages } from "./router-Dcgg3q5t.mjs";
import { B as BrandCard } from "./BrandCard-BtmFJ6CK.mjs";
import { C as CTASection } from "./CTASection-B6eI5FLv.mjs";
import { R as Reveal } from "./Reveal-DA4x5ZZd.mjs";
import { I as IndustriesShowcase } from "./IndustriesShowcase-C4fB4tjd.mjs";
import { a as brandLogos, b as brandAccent } from "./brand-logos-BaPSpWQ3.mjs";
import { l as ledLineup2026 } from "./led-lineup-2026-DN2O5sm1.mjs";
import { a as articleContents } from "./article-contents-C5xVvFZl.mjs";
import "../_libs/react-dom.mjs";
import { b as ArrowUpRight, o as CirclePlay, aa as Sparkles, ak as UserRoundCheck, r as DraftingCompass, B as BadgeCheck, a1 as PanelsTopLeft, O as LifeBuoy, g as BriefcaseBusiness, e as BookOpen, an as VolumeX, am as Volume2, l as ChevronLeft, m as ChevronRight } from "../_libs/lucide-react.mjs";
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
import "./hero-av-BU0yt1UL.mjs";
function SolutionSplitPanels({ solutions }) {
  const loop = [...solutions, ...solutions, ...solutions];
  const scrollerRef = reactExports.useRef(null);
  const [paused, setPaused] = reactExports.useState(false);
  const rafRef = reactExports.useRef(null);
  const lastTsRef = reactExports.useRef(null);
  const dragRef = reactExports.useRef({
    active: false,
    startX: 0,
    startLeft: 0,
    moved: false
  });
  reactExports.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const third = el.scrollWidth / 3;
    el.scrollLeft = third;
  }, [solutions.length]);
  reactExports.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const speed = 28;
    const tick = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1e3;
      lastTsRef.current = ts;
      if (!paused && !dragRef.current.active) {
        el.scrollLeft += speed * dt;
        const third = el.scrollWidth / 3;
        if (el.scrollLeft >= third * 2) el.scrollLeft -= third;
        else if (el.scrollLeft <= 0) el.scrollLeft += third;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [paused]);
  const scrollByCards = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const step = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };
  const onMouseDown = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    dragRef.current = { active: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
  };
  const onMouseMove = (e) => {
    const el = scrollerRef.current;
    if (!el || !dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.startX;
    if (Math.abs(dx) > 4) dragRef.current.moved = true;
    el.scrollLeft = dragRef.current.startLeft - dx;
  };
  const endDrag = () => {
    dragRef.current.active = false;
  };
  const onTouchStart = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    const touch = e.touches[0];
    dragRef.current = {
      active: true,
      startX: touch.clientX,
      startLeft: el.scrollLeft,
      moved: false
    };
    setPaused(true);
  };
  const onTouchMove = (e) => {
    const el = scrollerRef.current;
    if (!el || !dragRef.current.active) return;
    const touch = e.touches[0];
    const dx = touch.clientX - dragRef.current.startX;
    if (Math.abs(dx) > 4) dragRef.current.moved = true;
    el.scrollLeft = dragRef.current.startLeft - dx;
  };
  const onTouchEnd = () => {
    dragRef.current.active = false;
    setPaused(false);
  };
  reactExports.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const handler = (e) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta === 0) return;
      e.preventDefault();
      el.scrollLeft += delta;
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByCards(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByCards(1);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative -mx-4 md:-mx-6",
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => {
        setPaused(false);
        endDrag();
      },
      onFocusCapture: () => setPaused(true),
      onBlurCapture: () => setPaused(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-20 bg-gradient-to-r from-background to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-20 bg-gradient-to-l from-background to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-14 right-4 md:right-6 z-20 hidden md:flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => scrollByCards(-1),
              "aria-label": "ก่อนหน้า",
              className: "grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground hover:bg-accent hover:text-white hover:border-accent transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => scrollByCards(1),
              "aria-label": "ถัดไป",
              className: "grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground hover:bg-accent hover:text-white hover:border-accent transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: scrollerRef,
            onMouseDown,
            onMouseMove,
            onMouseUp: endDrag,
            onTouchStart,
            onTouchMove,
            onTouchEnd,
            onKeyDown,
            tabIndex: 0,
            className: "no-scrollbar flex gap-5 md:gap-6 overflow-x-auto scroll-smooth px-4 md:px-6 pb-4 cursor-grab active:cursor-grabbing select-none touch-pan-x",
            style: { scrollbarWidth: "none", WebkitOverflowScrolling: "touch" },
            children: loop.map((s, i) => {
              const img = s.imageUrl || solutionImages[s.slug];
              const num = String(i % solutions.length + 1).padStart(2, "0");
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: `/${s.slug}`,
                  "data-card": true,
                  draggable: false,
                  onClick: (e) => {
                    if (dragRef.current.moved) e.preventDefault();
                  },
                  className: "group relative w-[76vw] max-w-[420px] shrink-0 sm:w-[44vw] md:w-[32vw] lg:w-[26vw] xl:w-[22vw]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] overflow-hidden rounded-sm bg-muted", children: [
                      img && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: img,
                          alt: s.title,
                          loading: "lazy",
                          draggable: false,
                          className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-navy translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5" }) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-start justify-between gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground", children: [
                        num,
                        " — Solution"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-base md:text-lg font-semibold text-foreground tracking-tight truncate group-hover:text-accent transition-colors", children: s.title })
                    ] }) })
                  ]
                },
                `${s.slug}-${i}`
              );
            })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex md:hidden items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => scrollByCards(-1),
              "aria-label": "ก่อนหน้า",
              className: "grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => scrollByCards(1),
              "aria-label": "ถัดไป",
              className: "grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            }
          )
        ] })
      ]
    }
  );
}
function HeroVideo({ src }) {
  const wrapRef = reactExports.useRef(null);
  const videoRef = reactExports.useRef(null);
  const [muted, setMuted] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      tx = nx * 14;
      ty = ny * 10;
    };
    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      video.style.setProperty("--px", `${cx.toFixed(2)}px`);
      video.style.setProperty("--py", `${cy.toFixed(2)}px`);
      raf = requestAnimationFrame(tick);
    };
    wrap.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  reactExports.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryUnmute = async () => {
      try {
        v.muted = false;
        v.volume = 1;
        await v.play();
        setMuted(false);
      } catch {
        v.muted = true;
        await v.play().catch(() => {
        });
      }
    };
    void tryUnmute();
    const onGesture = async () => {
      if (!v.muted) return;
      v.muted = false;
      v.volume = 1;
      try {
        await v.play();
        setMuted(false);
      } catch {
        v.muted = true;
      }
    };
    const opts = { once: true, passive: true };
    window.addEventListener("pointerdown", onGesture, opts);
    window.addEventListener("keydown", onGesture, opts);
    window.addEventListener("touchstart", onGesture, opts);
    window.addEventListener("scroll", onGesture, opts);
    return () => {
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("scroll", onGesture);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: wrapRef, className: "absolute inset-0 overflow-hidden bg-navy", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "video",
      {
        ref: videoRef,
        className: "video-pan absolute inset-0 h-full w-full object-contain sm:object-cover",
        style: { translate: "var(--px, 0) var(--py, 0)" },
        src,
        autoPlay: true,
        muted,
        loop: true,
        playsInline: true,
        preload: "metadata",
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          const v = videoRef.current;
          if (!v) return;
          const next = !muted;
          v.muted = next;
          if (!next) {
            v.volume = 1;
            v.play().catch(() => {
            });
          }
          setMuted(next);
        },
        "aria-label": muted ? "เปิดเสียง" : "ปิดเสียง",
        className: "absolute top-4 right-4 z-20 grid h-10 w-10 md:h-11 md:w-11 place-items-center rounded-full bg-black/50 text-white ring-1 ring-white/20 backdrop-blur hover:bg-black/70 transition-colors",
        children: muted ? /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-5 w-5" })
      }
    )
  ] });
}
function Marquee({
  children,
  speed = 40,
  className,
  fade = true,
  pauseOnHover = true,
  stepped = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn("marquee group relative overflow-hidden", fade && "marquee-fade", className),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: cn(
            "flex w-max gap-4 md:gap-12 will-change-transform",
            stepped ? "marquee-track-stepped" : "marquee-track",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          ),
          style: { animationDuration: `${speed}s` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 md:gap-12 shrink-0", children }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 md:gap-12 shrink-0", "aria-hidden": "true", children })
          ]
        }
      )
    }
  );
}
function CountUp({
  to,
  duration = 2e3,
  suffix,
  prefix,
  className,
  suffixClassName
}) {
  const ref = reactExports.useRef(null);
  const [value, setValue] = reactExports.useState(0);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setValue(to);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(to * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className, children: [
    prefix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: suffixClassName, children: prefix }),
    value.toLocaleString(),
    suffix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: suffixClassName, children: suffix })
  ] });
}
const processWorkflowPremium = "/assets/process-workflow-premium-C_xXrUx3.png";
const whyTH = [{
  icon: UserRoundCheck,
  title: "ให้คำปรึกษาโดยผู้เชี่ยวชาญ",
  desc: "ทีม Sales Engineer ที่เข้าใจ AV จริง"
}, {
  icon: DraftingCompass,
  title: "ออกแบบระบบตามหน้างานจริง",
  desc: "Site Survey + Design ก่อนเสนอราคา"
}, {
  icon: BadgeCheck,
  title: "สินค้าและแบรนด์คุณภาพ",
  desc: "ตัวแทนแบรนด์ระดับโลก"
}, {
  icon: PanelsTopLeft,
  title: "รองรับงานทุกขนาด",
  desc: "ตั้งแต่ห้องประชุมเล็กถึง LED ขนาดใหญ่"
}, {
  icon: LifeBuoy,
  title: "บริการหลังการขาย",
  desc: "ทีมช่างเทคนิคพร้อมดูแลตลอดอายุการใช้งาน"
}, {
  icon: BriefcaseBusiness,
  title: "ประสบการณ์ด้าน AV",
  desc: "ผ่านงานองค์กร โรงเรียน โรงแรม หน่วยงานรัฐ"
}];
const whyEN = [{
  icon: UserRoundCheck,
  title: "Expert consultation",
  desc: "Sales engineers who truly understand AV"
}, {
  icon: DraftingCompass,
  title: "Site-tailored design",
  desc: "Site survey + design before quotation"
}, {
  icon: BadgeCheck,
  title: "Quality brands & products",
  desc: "Authorized dealer of world-class brands"
}, {
  icon: PanelsTopLeft,
  title: "Any project size",
  desc: "From small meeting rooms to large LED walls"
}, {
  icon: LifeBuoy,
  title: "After-sales service",
  desc: "Technical team to support the full lifecycle"
}, {
  icon: BriefcaseBusiness,
  title: "Proven AV experience",
  desc: "Enterprises, schools, hotels, government"
}];
const processTH = [{
  n: "01",
  title: "รับโจทย์และสำรวจความต้องการ",
  desc: "เก็บข้อมูลพื้นที่ การใช้งาน และเป้าหมายของระบบ"
}, {
  n: "02",
  title: "ออกแบบ Solution",
  desc: "วางระบบ AV / LED ตามหน้างานจริง"
}, {
  n: "03",
  title: "เสนอราคาและแผนติดตั้ง",
  desc: "ใบเสนอราคาแบบโปร่งใส พร้อม Timeline"
}, {
  n: "04",
  title: "ติดตั้งและทดสอบระบบ",
  desc: "ทีมช่างผู้เชี่ยวชาญ พร้อม Commissioning"
}, {
  n: "05",
  title: "ส่งมอบและดูแลหลังการขาย",
  desc: "Training + Maintenance + Support"
}];
const processEN = [{
  n: "01",
  title: "Brief & requirements survey",
  desc: "Gather space, usage, and system goals"
}, {
  n: "02",
  title: "Solution design",
  desc: "Plan the AV / LED system for your real site"
}, {
  n: "03",
  title: "Quotation & install plan",
  desc: "Transparent quote with a clear timeline"
}, {
  n: "04",
  title: "Installation & commissioning",
  desc: "Expert technicians with full commissioning"
}, {
  n: "05",
  title: "Handover & after-sales",
  desc: "Training + Maintenance + Support"
}];
function HomePage() {
  const {
    lang
  } = useLanguage();
  const {
    solutions,
    brands,
    industries,
    articleCategories
  } = useSiteContent();
  const why = lang === "EN" ? whyEN : whyTH;
  const steps = lang === "EN" ? processEN : processTH;
  const featuredArticles = articles.slice(0, 6);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-navy text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-video sm:aspect-auto sm:h-[78svh] sm:min-h-[460px] md:h-[88svh] md:min-h-[600px] md:max-h-[820px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "sr-only", children: "Matrix Intertrade — ผู้เชี่ยวชาญ LED Display และ AV Solutions ครบวงจรสำหรับองค์กรไทย" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HeroVideo, { src: "/videos/hero.mp4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/65 via-black/25 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-3 sm:bottom-6 md:bottom-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-3 sm:px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fade-up flex flex-row items-center gap-2 sm:gap-3 sm:justify-start justify-center flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-gradient-accent text-white hover:opacity-90 shadow-glow h-8 sm:h-11 px-3 sm:px-5 text-xs sm:text-sm font-semibold rounded-full sm:rounded-md btn-press btn-shimmer glow-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/solutions", children: [
            t(lang, "ดูโซลูชั่นของเรา", "Explore Our Solutions"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1 h-3.5 w-3.5 sm:h-4 sm:w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-md h-8 sm:h-11 px-3 sm:px-5 text-xs sm:text-sm font-semibold rounded-full sm:rounded-md btn-press btn-shimmer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contactus", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "mr-1 sm:mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" }),
            t(lang, "ขอคำปรึกษาฟรี", "Free Consultation")
          ] }) })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-t border-white/10 bg-gradient-to-r from-navy via-black/40 to-navy overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 z-10 bg-gradient-to-r from-navy to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 z-10 bg-gradient-to-l from-navy to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6 py-4 md:py-5 flex items-center gap-4 md:gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent animate-pulse shadow-glow" }),
            t(lang, "พันธมิตรที่ไว้วางใจ", "Trusted Partners")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { speed: 120, className: "flex-1", children: brands.concat(brands).map((b, i) => {
            const logo = b.logoUrl || brandLogos[b.slug];
            const accent = (b.accent && typeof b.accent === "object" && "from" in b.accent && "to" in b.accent ? b.accent : brandAccent[b.slug]) ?? {
              from: "#22d3ee",
              to: "#2563eb"
            };
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/brands/$slug", params: {
              slug: b.slug
            }, className: "group inline-flex items-center gap-1.5 md:gap-2.5 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.09] hover:border-accent/40 px-2 py-1 md:px-4 md:py-2 backdrop-blur transition-all duration-300 whitespace-nowrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative grid h-5 w-5 md:h-8 md:w-8 shrink-0 place-items-center rounded-full ring-1 ring-white/25 shadow-glow overflow-hidden", style: {
                backgroundImage: `linear-gradient(135deg, ${accent.from}, ${accent.to})`
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/35 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative text-[9px] md:text-xs font-black text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] tracking-tight", children: b.name.charAt(0) }),
                logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", "aria-hidden": "true", loading: "lazy", width: 32, height: 32, className: "absolute inset-0 h-full w-full object-contain p-1 opacity-0 transition-opacity duration-300", onLoad: (e) => {
                  e.currentTarget.style.opacity = "1";
                  const mono = e.currentTarget.previousElementSibling;
                  if (mono) mono.style.opacity = "0";
                }, onError: (e) => {
                  e.currentTarget.style.display = "none";
                } }) : null
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] md:text-[15px] font-extrabold text-white tracking-tight", children: b.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline text-[10px] font-semibold uppercase tracking-wider text-white/75 group-hover:text-cyan transition-colors", children: b.category })
            ] }, `${b.slug}-${i}`);
          }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { eyebrow: t(lang, "โซลูชั่นของเรา", "Our Solutions"), title: t(lang, "โซลูชั่นภาพและเสียงครบทุกความต้องการ", "Complete AV solutions for every need"), desc: t(lang, "ตอบโจทย์ทั้งห้องประชุม ห้องเรียน หน่วยงานรัฐ โรงแรม และองค์กรขนาดใหญ่", "Meeting rooms, classrooms, government, hotels and enterprises"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SolutionSplitPanels, { solutions }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IndustriesShowcase, { industries }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-navy text-white py-16 sm:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-cyan/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:gap-5 lg:grid-cols-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 h-full flex flex-col justify-between bg-gradient-to-br from-white/10 to-white/[0.02] hover-tilt", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-cyan/90 mb-4 sm:mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" }),
            " ",
            t(lang, "ผลงานที่ผ่านมา", "Track Record")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[64px] sm:text-[88px] md:text-[140px] leading-[0.85] font-black tracking-tighter", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: 500, className: "bg-gradient-to-br from-white via-white to-cyan/80 bg-clip-text text-transparent", suffix: "+", suffixClassName: "text-gold-gradient" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 sm:mt-4 text-sm sm:text-base md:text-xl text-white/85 font-medium max-w-md", children: t(lang, "โปรเจ็คติดตั้งสำเร็จทั่วประเทศ — องค์กร โรงเรียน โรงแรม หน่วยงานรัฐ", "Successful installations nationwide — enterprises, schools, hotels, government") })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-5", children: [{
          n: 20,
          suffix: "+",
          label: t(lang, "แบรนด์ระดับโลก", "World-class brands"),
          tone: "from-accent/25 to-transparent"
        }, {
          n: 15,
          suffix: "+",
          label: t(lang, "ปีประสบการณ์", "Years of experience"),
          tone: "from-cyan/20 to-transparent"
        }, {
          n: 98,
          suffix: "%",
          label: t(lang, "ความพึงพอใจของลูกค้า", "Customer satisfaction"),
          tone: "from-accent/15 to-cyan/15"
        }, {
          n: 24,
          suffix: "/7",
          label: t(lang, "บริการหลังการขาย", "After-sales support"),
          tone: "from-cyan/15 to-accent/10"
        }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 90, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 h-full bg-gradient-to-br ${s.tone} hover-tilt`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-4xl md:text-5xl font-black tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CountUp, { to: s.n, className: "text-white", suffix: s.suffix, suffixClassName: "text-gold-gradient ml-0.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/80 font-medium leading-snug", children: s.label })
        ] }) }, s.label)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { eyebrow: t(lang, "แบรนด์พันธมิตร", "Partner Brands"), title: t(lang, "แบรนด์ระดับโลกที่เราเป็นตัวแทนจำหน่าย", "World-class brands we represent"), desc: t(lang, "คัดเลือกเฉพาะแบรนด์คุณภาพ พร้อมการรับประกันและบริการหลังการขาย", "Only quality brands with full warranty and after-sales support"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-10 rounded-3xl overflow-hidden shadow-elev ring-1 ring-border bg-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ledLineup2026, alt: "Matrix Intertrade New Lineup 2026 — The Leading Choice of LED Display Solutions", loading: "lazy", className: "w-full h-auto object-contain" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5", children: brands.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(BrandCard, { ...b }, b.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-y border-border/70 bg-[#f5f8fb] py-16 sm:py-24 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/45 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-36 top-12 h-[420px] w-[420px] rounded-full bg-cyan/18 blur-[110px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-40 bottom-0 h-[360px] w-[360px] rounded-full bg-navy/8 blur-[110px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white bg-white/78 p-5 shadow-[0_18px_44px_-34px_rgba(0,44,84,0.4)] backdrop-blur-sm sm:p-6 lg:sticky lg:top-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            t(lang, "ทำไมต้อง Matrix Intertrade", "Why Matrix Intertrade")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-5xl", children: [
            t(lang, "ทำไมองค์กรชั้นนำเลือก", "Why leading organizations choose"),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Matrix Intertrade" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base", children: t(lang, "6 เหตุผลสำคัญที่ทำให้องค์กรชั้นนำไว้วางใจให้เราดูแลระบบ AV", "Six reasons why leading organizations trust us with their AV systems") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-[#f8fbfd] px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold uppercase tracking-[0.18em] text-accent", children: "Project-ready" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold text-navy", children: t(lang, "ทีมขาย + วิศวกรร่วมออกแบบตั้งแต่ต้น", "Sales and engineering aligned from day one") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-[#f8fbfd] px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold uppercase tracking-[0.18em] text-accent", children: "Long-term care" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold text-navy", children: t(lang, "ดูแลหลังส่งมอบ พร้อมแนะนำการใช้งานจริง", "After-handover support for real operation") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 sm:gap-4", children: why.map((w, i) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 70, variant: "slide", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative h-full rounded-2xl border border-border bg-white p-5 shadow-[0_16px_42px_-34px_rgba(0,44,84,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/55 hover:shadow-[0_24px_56px_-34px_rgba(0,173,238,0.55)] sm:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-4 sm:mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-grid h-12 w-12 place-items-center rounded-xl border border-cyan/25 bg-cyan/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-xl bg-gradient-to-b from-white/25 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(w.icon, { className: "relative h-5 w-5", strokeWidth: 1.85 })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold leading-snug tracking-tight text-navy sm:text-lg", children: w.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: w.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center gap-2 pt-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-gradient-to-r from-accent/35 via-border to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground", children: [
                  "0",
                  i + 1
                ] })
              ] })
            ] })
          ] }) }, w.title);
        }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-[#07101b] py-6 sm:py-8 md:py-10 lg:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7a94a]/70 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#d7a94a]/10 blur-[110px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-cyan/10 blur-[110px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1540px] px-3 sm:px-4 md:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sr-only", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t(lang, "กระบวนการที่ออกแบบมาเพื่อความสำเร็จของโปรเจ็ค", "A process designed for project success") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { children: steps.map((step) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            step.n,
            ". ",
            step.title,
            " — ",
            step.desc
          ] }, step.n)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full overflow-hidden rounded-lg bg-[#07101b] shadow-[0_24px_80px_-44px_rgba(215,169,74,0.55)] ring-1 ring-white/5 sm:rounded-xl lg:max-w-[1180px] lg:rounded-2xl xl:max-w-[1240px] 2xl:max-w-[1320px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: processWorkflowPremium, alt: t(lang, "อินโฟกราฟิกขั้นตอนการทำงาน 5 ขั้นตอน ตั้งแต่รับโจทย์ สำรวจ ออกแบบ เสนอราคา ติดตั้ง ทดสอบ ส่งมอบ และดูแลหลังการขาย", "Five-step workflow infographic from survey and solution design to quotation, installation, handover, and after-sales support"), loading: "lazy", sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 96vw, 1500px", className: "block h-auto w-full select-none object-contain" }) }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-[#f4f8fb] py-16 sm:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": "true", className: "absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(0,173,238,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,248,251,0.96))]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-10 flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-white bg-white/70 p-5 shadow-[0_18px_44px_-34px_rgba(0,44,84,0.4)] backdrop-blur-sm sm:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent shadow-[0_8px_24px_-18px_rgba(0,173,238,0.9)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
              t(lang, "ศูนย์ความรู้", "Knowledge Hub")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold tracking-tight text-navy sm:text-4xl", children: t(lang, "บทความและคู่มือเลือก AV ล่าสุด", "Latest articles & AV buying guides") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground", children: t(lang, "รวมบทความเลือกซื้อ ความรู้เชิงลึก และ case study สำหรับองค์กรที่วางระบบ AV", "Buying guides, technical insights, and case studies for teams planning practical AV systems") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "border-border bg-white text-navy shadow-card hover:border-accent hover:bg-white hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", children: [
            t(lang, "ดูบทความทั้งหมด", "View all articles"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1 h-4 w-4" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-start gap-5 lg:grid-cols-[minmax(0,1.28fr)_minmax(360px,0.72fr)] lg:gap-7", children: [
          featuredArticles[0] && (() => {
            const lead = featuredArticles[0];
            const leadContent = articleContents[lead.slug];
            const leadImg = leadContent?.blocks.find((b) => b.t === "img")?.src ?? articleImages[lead.category];
            const leadSummary = leadContent?.blocks.filter((b) => b.t === "p").slice(0, 2).map((b) => b.text).join(" ") ?? lead.excerpt;
            const leadCat = articleCategories.find((c) => c.slug === lead.category)?.label ?? "บทความ";
            return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0, variant: "slide", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
              slug: lead.slug
            }, className: "group grid overflow-hidden rounded-2xl border border-cyan/25 bg-white shadow-[0_22px_52px_-28px_rgba(0,44,84,0.45)] ring-1 ring-white transition-all duration-500 hover:-translate-y-1 hover:border-cyan/60 hover:shadow-[0_30px_70px_-30px_rgba(0,173,238,0.55)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-white sm:aspect-[16/10]", children: [
                leadImg && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: leadImg, alt: lead.title, loading: "eager", className: "absolute inset-0 h-full w-full bg-white object-contain transition-transform duration-700 group-hover:scale-[1.025]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0)_44%,rgba(255,255,255,0.34)_100%)]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-cyan px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-navy ring-1 ring-white/70 shadow-[0_8px_24px_-12px_rgba(0,173,238,0.8)]", children: leadCat }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-navy ring-1 ring-border backdrop-blur-sm", children: [
                    lead.readMin,
                    " ",
                    t(lang, "นาที", "min")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-5 top-4 font-black text-navy/18 [font-size:clamp(3rem,8vw,5.5rem)] leading-none", children: [
                  "#",
                  String(lead.id).padStart(2, "0")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 border-t border-border/70 p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-[11px] font-medium text-muted-foreground tracking-wide", children: lead.date }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold leading-snug text-navy sm:text-2xl md:text-[26px]", children: lead.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 line-clamp-2 text-[13px] leading-relaxed text-foreground/70 sm:text-sm", children: leadSummary })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex w-fit items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white ring-1 ring-navy/10 transition-all duration-300 group-hover:bg-accent", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3.5 w-3.5" }),
                  t(lang, "อ่านบทความ", "Read article"),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
                ] })
              ] })
            ] }) });
          })(),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/80 bg-white/60 p-3 shadow-[0_18px_44px_-34px_rgba(0,44,84,0.45)] backdrop-blur-sm sm:p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between px-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-navy", children: t(lang, "บทความที่น่าสนใจ", "Featured reads") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold text-accent", children: [
                featuredArticles.slice(1, 5).length,
                " ",
                t(lang, "บทความ", "articles")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: featuredArticles.slice(1, 5).map((a, i) => {
              const aContent = articleContents[a.slug];
              const aImg = aContent?.blocks.find((b) => b.t === "img")?.src ?? articleImages[a.category];
              const aCat = articleCategories.find((c) => c.slug === a.category)?.label ?? "บทความ";
              return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, variant: "slide", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
                slug: a.slug
              }, className: "group flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/55 hover:shadow-[0_18px_42px_-28px_rgba(0,173,238,0.55)] sm:gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[82px] w-[112px] shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-border sm:h-[92px] sm:w-[128px]", children: [
                  aImg && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aImg, alt: aCat, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-black/8 to-black/0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-1.5 right-1.5 rounded-full bg-navy/75 px-1.5 py-0.5 text-[9px] font-black text-white tabular-nums", children: [
                    "#",
                    String(a.id).padStart(2, "0")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 inline-block rounded-full bg-cyan/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent ring-1 ring-cyan/25", children: aCat }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "line-clamp-2 text-[13px] font-bold leading-snug text-navy transition-colors group-hover:text-accent sm:text-base", children: a.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2 text-[11px] text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.date }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      a.readMin,
                      " ",
                      t(lang, "นาที", "min")
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 shrink-0 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" })
              ] }) }, a.id);
            }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function SectionHeader({
  eyebrow,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-3", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-primary tracking-tight", children: title }),
    desc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: desc })
  ] });
}
function Section({
  eyebrow,
  title,
  desc,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 sm:py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow, title, desc }),
    children
  ] }) });
}
export {
  HomePage as component
};
