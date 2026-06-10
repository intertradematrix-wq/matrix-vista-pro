import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { SolutionCard } from "@/components/site/SolutionCard";
import { SolutionSplitPanels } from "@/components/site/SolutionSplitPanels";
import { BrandCard } from "@/components/site/BrandCard";
import { ArticleCard } from "@/components/site/ArticleCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { HeroVideo } from "@/components/site/HeroVideo";
import { IndustriesShowcase } from "@/components/site/IndustriesShowcase";
import { Marquee } from "@/components/site/Marquee";
import { CountUp } from "@/components/site/CountUp";
import { useLanguage, t } from "@/components/i18n/LanguageProvider";
import { brandLogos, brandAccent } from "@/data/brand-logos";
import ledLineup2026 from "@/assets/about/led-lineup-2026.jpg";
import processWorkflowPremium from "@/assets/process-workflow-premium.png";
import { articles } from "@/data/articles";
import { articleImages } from "@/data/article-images";
import { useSiteContent } from "@/lib/content/use-site-content";
import heroPoster from "@/assets/hero-led.jpg";
import {
  ArrowUpRight,
  ArrowRight,
  UserRoundCheck,
  DraftingCompass,
  BadgeCheck,
  PanelsTopLeft,
  LifeBuoy,
  BriefcaseBusiness,
  Sparkles,
  Check,
  PlayCircle,
  BookOpen,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matrix Intertrade — ผู้เชี่ยวชาญ LED & AV ครบวงจร" },
      {
        name: "description",
        content:
          "LED Display, Interactive Display, Projector, Wireless Presentation และ AV Solutions สำหรับองค์กรไทย พร้อมทีมออกแบบและติดตั้ง",
      },
      { property: "og:title", content: "Matrix Intertrade — ผู้เชี่ยวชาญ LED & AV ครบวงจร" },
      {
        property: "og:description",
        content:
          "ออกแบบ ติดตั้ง และดูแลระบบ LED Display, Interactive Display และ AV Solutions ให้องค์กรไทย",
      },
      { property: "og:url", content: "https://www.matrixintertrade.com/" },
    ],
    links: [{ rel: "canonical", href: "https://www.matrixintertrade.com/" }],
  }),
  component: HomePage,
});

// Lazy-load the article section to avoid pulling 587KB of article-contents.ts
// into the initial bundle. It's below the fold so users won't notice the delay.
const LazyArticlesSection = lazy(() => import("@/components/site/ArticlesSection"));

const trustBadges = [
  "AV Solution Specialist",
  "LED Display",
  "Smart Classroom",
  "Meeting Room Technology",
];

const whyTH = [
  {
    icon: UserRoundCheck,
    title: "ให้คำปรึกษาโดยผู้เชี่ยวชาญ",
    desc: "ทีม Sales Engineer ที่เข้าใจ AV จริง",
  },
  {
    icon: DraftingCompass,
    title: "ออกแบบระบบตามหน้างานจริง",
    desc: "Site Survey + Design ก่อนเสนอราคา",
  },
  { icon: BadgeCheck, title: "สินค้าและแบรนด์คุณภาพ", desc: "ตัวแทนแบรนด์ระดับโลก" },
  { icon: PanelsTopLeft, title: "รองรับงานทุกขนาด", desc: "ตั้งแต่ห้องประชุมเล็กถึง LED ขนาดใหญ่" },
  { icon: LifeBuoy, title: "บริการหลังการขาย", desc: "ทีมช่างเทคนิคพร้อมดูแลตลอดอายุการใช้งาน" },
  {
    icon: BriefcaseBusiness,
    title: "ประสบการณ์ด้าน AV",
    desc: "ผ่านงานองค์กร โรงเรียน โรงแรม หน่วยงานรัฐ",
  },
];
const whyEN = [
  {
    icon: UserRoundCheck,
    title: "Expert consultation",
    desc: "Sales engineers who truly understand AV",
  },
  {
    icon: DraftingCompass,
    title: "Site-tailored design",
    desc: "Site survey + design before quotation",
  },
  {
    icon: BadgeCheck,
    title: "Quality brands & products",
    desc: "Authorized dealer of world-class brands",
  },
  {
    icon: PanelsTopLeft,
    title: "Any project size",
    desc: "From small meeting rooms to large LED walls",
  },
  {
    icon: LifeBuoy,
    title: "After-sales service",
    desc: "Technical team to support the full lifecycle",
  },
  {
    icon: BriefcaseBusiness,
    title: "Proven AV experience",
    desc: "Enterprises, schools, hotels, government",
  },
];

const processTH = [
  {
    n: "01",
    title: "รับโจทย์และสำรวจความต้องการ",
    desc: "เก็บข้อมูลพื้นที่ การใช้งาน และเป้าหมายของระบบ",
  },
  { n: "02", title: "ออกแบบ Solution", desc: "วางระบบ AV / LED ตามหน้างานจริง" },
  { n: "03", title: "เสนอราคาและแผนติดตั้ง", desc: "ใบเสนอราคาแบบโปร่งใส พร้อม Timeline" },
  { n: "04", title: "ติดตั้งและทดสอบระบบ", desc: "ทีมช่างผู้เชี่ยวชาญ พร้อม Commissioning" },
  { n: "05", title: "ส่งมอบและดูแลหลังการขาย", desc: "Training + Maintenance + Support" },
];
const processEN = [
  { n: "01", title: "Brief & requirements survey", desc: "Gather space, usage, and system goals" },
  { n: "02", title: "Solution design", desc: "Plan the AV / LED system for your real site" },
  { n: "03", title: "Quotation & install plan", desc: "Transparent quote with a clear timeline" },
  {
    n: "04",
    title: "Installation & commissioning",
    desc: "Expert technicians with full commissioning",
  },
  { n: "05", title: "Handover & after-sales", desc: "Training + Maintenance + Support" },
];

function HomePage() {
  const { lang } = useLanguage();
  const { solutions, brands, industries, articleCategories } = useSiteContent();
  const why = lang === "EN" ? whyEN : whyTH;
  const steps = lang === "EN" ? processEN : processTH;
  const featuredArticles = articles.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        {/* Video stage — responsive aspect for crisp framing on every device */}
        <div className="relative w-full aspect-video sm:aspect-auto sm:h-[78svh] sm:min-h-[460px] md:h-[88svh] md:min-h-[600px] md:max-h-[820px]">
          <h1 className="sr-only">
            Matrix Intertrade — ผู้เชี่ยวชาญ LED Display และ AV Solutions ครบวงจรสำหรับองค์กรไทย
          </h1>
          <HeroVideo src="/videos/hero.mp4" poster={heroPoster} />
          {/* Subtle bottom gradient so buttons stay readable without hiding the video */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />

          {/* CTAs anchored bottom-left on desktop, centered on mobile */}
          <div className="absolute inset-x-0 bottom-3 sm:bottom-6 md:bottom-10">
            <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
              <div className="fade-up flex flex-row items-center gap-2 sm:gap-3 sm:justify-start justify-center flex-wrap">
                <Button
                  asChild
                  className="bg-gradient-accent text-white hover:opacity-90 shadow-glow h-8 sm:h-11 px-3 sm:px-5 text-xs sm:text-sm font-semibold rounded-full sm:rounded-md btn-press btn-shimmer glow-pulse"
                >
                  <Link to="/solutions">
                    {t(lang, "ดูโซลูชั่นของเรา", "Explore Our Solutions")}{" "}
                    <ArrowUpRight className="ml-1 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-md h-8 sm:h-11 px-3 sm:px-5 text-xs sm:text-sm font-semibold rounded-full sm:rounded-md btn-press btn-shimmer"
                >
                  <Link to="/contactus">
                    <PlayCircle className="mr-1 sm:mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    {t(lang, "ขอคำปรึกษาฟรี", "Free Consultation")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Brand strip — premium marquee with pill cards */}
        <div className="relative border-t border-white/10 bg-gradient-to-r from-navy via-black/40 to-navy overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 z-10 bg-gradient-to-r from-navy to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 z-10 bg-gradient-to-l from-navy to-transparent" />
          {/* subtle top accent line */}
          <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 md:py-5 flex items-center gap-4 md:gap-6">
            <div className="hidden sm:flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse shadow-glow" />
              {t(lang, "พันธมิตรที่ไว้วางใจ", "Trusted Partners")}
            </div>
            <Marquee speed={120} className="flex-1">
              {brands.concat(brands).map((b, i) => {
                const logo = b.logoUrl || brandLogos[b.slug];
                const accent = (b.accent &&
                typeof b.accent === "object" &&
                "from" in b.accent &&
                "to" in b.accent
                  ? (b.accent as { from: string; to: string })
                  : brandAccent[b.slug]) ?? { from: "#22d3ee", to: "#2563eb" };
                return (
                  <Link
                    key={`${b.slug}-${i}`}
                    to={"/brands/$slug"}
                    params={{ slug: b.slug }}
                    className="group inline-flex items-center gap-1.5 md:gap-2.5 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.09] hover:border-accent/40 px-2 py-1 md:px-4 md:py-2 backdrop-blur transition-all duration-300 whitespace-nowrap"
                  >
                    <span
                      className="relative grid h-5 w-5 md:h-8 md:w-8 shrink-0 place-items-center rounded-full ring-1 ring-white/25 shadow-glow overflow-hidden"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                      }}
                    >
                      {/* glossy highlight */}
                      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/35 to-transparent" />
                      {/* monogram (always visible — guaranteed render) */}
                      <span className="relative text-[9px] md:text-xs font-black text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] tracking-tight">
                        {b.name.charAt(0)}
                      </span>
                      {/* optional favicon overlay (fades in only if it loads cleanly) */}
                      {logo ? (
                        <img
                          src={logo}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          width={32}
                          height={32}
                          className="absolute inset-0 h-full w-full object-contain p-1 opacity-0 transition-opacity duration-300"
                          onLoad={(e) => {
                            e.currentTarget.style.opacity = "1";
                            const mono = e.currentTarget
                              .previousElementSibling as HTMLElement | null;
                            if (mono) mono.style.opacity = "0";
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : null}
                    </span>
                    <span className="text-[11px] md:text-[15px] font-extrabold text-white tracking-tight">
                      {b.name}
                    </span>
                    <span className="hidden md:inline text-[10px] font-semibold uppercase tracking-wider text-white/75 group-hover:text-cyan transition-colors">
                      {b.category}
                    </span>
                  </Link>
                );
              })}
            </Marquee>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <Section
        eyebrow={t(lang, "โซลูชั่นของเรา", "Our Solutions")}
        title={t(
          lang,
          "โซลูชั่นภาพและเสียงครบทุกความต้องการ",
          "Complete AV solutions for every need",
        )}
        desc={t(
          lang,
          "ตอบโจทย์ทั้งห้องประชุม ห้องเรียน หน่วยงานรัฐ โรงแรม และองค์กรขนาดใหญ่",
          "Meeting rooms, classrooms, government, hotels and enterprises",
        )}
      >
        <SolutionSplitPanels solutions={solutions} />
      </Section>

      {/* INDUSTRIES */}
      <IndustriesShowcase industries={industries} />

      {/* STATS — asymmetric bento, hero metric + 4 sidekicks */}
      <section className="relative overflow-hidden bg-navy text-white py-16 sm:py-24">
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-cyan/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-3 sm:gap-5 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 h-full flex flex-col justify-between bg-gradient-to-br from-white/10 to-white/[0.02] hover-tilt">
                <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-cyan/90 mb-4 sm:mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />{" "}
                  {t(lang, "ผลงานที่ผ่านมา", "Track Record")}
                </div>
                <div>
                  <div className="text-[64px] sm:text-[88px] md:text-[140px] leading-[0.85] font-black tracking-tighter">
                    <CountUp
                      to={500}
                      className="bg-gradient-to-br from-white via-white to-cyan/80 bg-clip-text text-transparent"
                      suffix="+"
                      suffixClassName="text-gold-gradient"
                    />
                  </div>
                  <div className="mt-3 sm:mt-4 text-sm sm:text-base md:text-xl text-white/85 font-medium max-w-md">
                    {t(
                      lang,
                      "โปรเจ็คติดตั้งสำเร็จทั่วประเทศ — องค์กร โรงเรียน โรงแรม หน่วยงานรัฐ",
                      "Successful installations nationwide — enterprises, schools, hotels, government",
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-5">
              {[
                {
                  n: 20,
                  suffix: "+",
                  label: t(lang, "แบรนด์ระดับโลก", "World-class brands"),
                  tone: "from-accent/25 to-transparent",
                },
                {
                  n: 15,
                  suffix: "+",
                  label: t(lang, "ปีประสบการณ์", "Years of experience"),
                  tone: "from-cyan/20 to-transparent",
                },
                {
                  n: 98,
                  suffix: "%",
                  label: t(lang, "ความพึงพอใจของลูกค้า", "Customer satisfaction"),
                  tone: "from-accent/15 to-cyan/15",
                },
                {
                  n: 24,
                  suffix: "/7",
                  label: t(lang, "บริการหลังการขาย", "After-sales support"),
                  tone: "from-cyan/15 to-accent/10",
                },
              ].map((s, i) => (
                <Reveal key={s.label} delay={i * 90}>
                  <div
                    className={`glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 h-full bg-gradient-to-br ${s.tone} hover-tilt`}
                  >
                    <div className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight">
                      <CountUp
                        to={s.n}
                        className="text-white"
                        suffix={s.suffix}
                        suffixClassName="text-gold-gradient ml-0.5"
                      />
                    </div>
                    <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/80 font-medium leading-snug">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <Section
        eyebrow={t(lang, "แบรนด์พันธมิตร", "Partner Brands")}
        title={t(lang, "แบรนด์ระดับโลกที่เราเป็นตัวแทนจำหน่าย", "World-class brands we represent")}
        desc={t(
          lang,
          "คัดเลือกเฉพาะแบรนด์คุณภาพ พร้อมการรับประกันและบริการหลังการขาย",
          "Only quality brands with full warranty and after-sales support",
        )}
      >
        <div className="mb-10 rounded-3xl overflow-hidden shadow-elev ring-1 ring-border bg-navy">
          <img
            src={ledLineup2026}
            alt="Matrix Intertrade New Lineup 2026 — The Leading Choice of LED Display Solutions"
            loading="lazy"
            decoding="async"
            width={1920}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="grid gap-3 sm:gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {brands.map((b) => (
            <BrandCard key={b.slug} {...b} />
          ))}
        </div>
      </Section>

      {/* WHY */}
      <section className="relative overflow-hidden border-y border-border/70 bg-[#f5f8fb] py-16 sm:py-24 md:py-28">
        {/* ambient backdrop */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/45 to-transparent" />
        <div className="pointer-events-none absolute -left-36 top-12 h-[420px] w-[420px] rounded-full bg-cyan/18 blur-[110px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[360px] w-[360px] rounded-full bg-navy/8 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="rounded-2xl border border-white bg-white/78 p-5 shadow-[0_18px_44px_-34px_rgba(0,44,84,0.4)] backdrop-blur-sm sm:p-6 lg:sticky lg:top-24">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                {t(lang, "ทำไมต้อง Matrix Intertrade", "Why Matrix Intertrade")}
              </div>
              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-navy md:text-5xl">
                {t(lang, "ทำไมองค์กรชั้นนำเลือก", "Why leading organizations choose")}
                <br />
                <span className="text-accent">Matrix Intertrade</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t(
                  lang,
                  "6 เหตุผลสำคัญที่ทำให้องค์กรชั้นนำไว้วางใจให้เราดูแลระบบ AV",
                  "Six reasons why leading organizations trust us with their AV systems",
                )}
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-xl border border-border bg-[#f8fbfd] px-4 py-3">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                    Project-ready
                  </div>
                  <div className="mt-1 text-sm font-semibold text-navy">
                    {t(
                      lang,
                      "ทีมขาย + วิศวกรร่วมออกแบบตั้งแต่ต้น",
                      "Sales and engineering aligned from day one",
                    )}
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-[#f8fbfd] px-4 py-3">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                    Long-term care
                  </div>
                  <div className="mt-1 text-sm font-semibold text-navy">
                    {t(
                      lang,
                      "ดูแลหลังส่งมอบ พร้อมแนะนำการใช้งานจริง",
                      "After-handover support for real operation",
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {why.map((w, i) => {
                return (
                  <Reveal key={w.title} delay={i * 70} variant="slide">
                    <article className="group relative h-full rounded-2xl border border-border bg-white p-5 shadow-[0_16px_42px_-34px_rgba(0,44,84,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/55 hover:shadow-[0_24px_56px_-34px_rgba(0,173,238,0.55)] sm:p-6">
                      {/* hover sheen */}
                      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative flex h-full flex-col">
                        {/* icon */}
                        <div className="relative mb-4 sm:mb-5">
                          <div className="relative inline-grid h-12 w-12 place-items-center rounded-xl border border-cyan/25 bg-cyan/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                            {/* inner highlight */}
                            <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-xl bg-gradient-to-b from-white/25 to-transparent" />
                            <w.icon className="relative h-5 w-5" strokeWidth={1.85} />
                          </div>
                        </div>

                        <h3 className="text-base font-bold leading-snug tracking-tight text-navy sm:text-lg">
                          {w.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {w.desc}
                        </p>

                        {/* bottom accent */}
                        <div className="mt-auto flex items-center gap-2 pt-5">
                          <div className="h-px flex-1 bg-gradient-to-r from-accent/35 via-border to-transparent" />
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                            0{i + 1}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS — premium workflow image */}
      <section className="relative overflow-hidden bg-[#07101b] py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7a94a]/70 to-transparent" />
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#d7a94a]/10 blur-[110px]" />
        <div className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-cyan/10 blur-[110px]" />

        <div className="relative mx-auto max-w-[1540px] px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="sr-only">
            <h2>
              {t(
                lang,
                "กระบวนการที่ออกแบบมาเพื่อความสำเร็จของโปรเจ็ค",
                "A process designed for project success",
              )}
            </h2>
            <ol>
              {steps.map((step) => (
                <li key={step.n}>
                  {step.n}. {step.title} — {step.desc}
                </li>
              ))}
            </ol>
          </div>

          <Reveal>
            <div className="mx-auto w-full overflow-hidden rounded-lg bg-[#07101b] shadow-[0_24px_80px_-44px_rgba(215,169,74,0.55)] ring-1 ring-white/5 sm:rounded-xl lg:max-w-[1180px] lg:rounded-2xl xl:max-w-[1240px] 2xl:max-w-[1320px]">
              <div className="relative w-full">
                <img
                  src={processWorkflowPremium}
                  alt={t(
                    lang,
                    "อินโฟกราฟิกขั้นตอนการทำงาน 5 ขั้นตอน ตั้งแต่รับโจทย์ สำรวจ ออกแบบ เสนอราคา ติดตั้ง ทดสอบ ส่งมอบ และดูแลหลังการขาย",
                    "Five-step workflow infographic from survey and solution design to quotation, installation, handover, and after-sales support",
                  )}
                  loading="lazy"
                  decoding="async"
                  width={1500}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 96vw, 1500px"
                  className="block h-auto w-full select-none object-contain"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ARTICLES — lazy-loaded (article-contents.ts is 587KB) */}
      <Suspense fallback={
        <section className="relative overflow-hidden bg-[#f4f8fb] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
            <div className="h-8 w-48 mx-auto rounded bg-border/40 animate-pulse" />
          </div>
        </section>
      }>
        <LazyArticlesSection />
      </Suspense>

      <CTASection />
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl mb-6 sm:mb-10">
      {eyebrow && (
        <div className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-2 sm:mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight leading-snug">
        {title}
      </h2>
      {desc && <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground">{desc}</p>}
    </div>
  );
}

function Section({
  eyebrow,
  title,
  desc,
  children,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-10 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader eyebrow={eyebrow} title={title} desc={desc} />
        {children}
      </div>
    </section>
  );
}
