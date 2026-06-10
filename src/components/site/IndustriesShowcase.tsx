import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronRight, Sparkles } from "lucide-react";
import { resolveIcon } from "@/lib/icon-map";
import { industries } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { useLanguage, t } from "@/components/i18n/LanguageProvider";
import imgEducation from "@/assets/article-smart-classroom.jpg";
import imgHotel from "@/assets/hero-av.jpg";
import imgCorporate from "@/assets/article-meeting-room.jpg";
import imgGovernment from "@/assets/hero-led.jpg";
import imgHospital from "@/assets/hero-interactive.jpg";
import imgVideo from "@/assets/hero-wireless.jpg";

const industryImages: Record<string, string> = {
  education: imgEducation,
  hotel: imgHotel,
  corporate: imgCorporate,
  government: imgGovernment,
  hospital: imgHospital,
  "video-conference": imgVideo,
};

const metaTH: Record<string, { tag: string; metric: string; metricLabel: string }> = {
  education: { tag: "Smart Classroom", metric: "120+", metricLabel: "ห้องเรียน" },
  hotel: { tag: "Ballroom & MICE", metric: "60+", metricLabel: "โรงแรม" },
  corporate: { tag: "Hybrid Meeting", metric: "200+", metricLabel: "องค์กร" },
  government: { tag: "Public Sector", metric: "40+", metricLabel: "หน่วยงาน" },
  hospital: { tag: "Healthcare", metric: "25+", metricLabel: "โรงพยาบาล" },
  "video-conference": { tag: "Video Conference", metric: "300+", metricLabel: "ห้องประชุม" },
};
const metaEN: Record<string, { tag: string; metric: string; metricLabel: string }> = {
  education: { tag: "Smart Classroom", metric: "120+", metricLabel: "Classrooms" },
  hotel: { tag: "Ballroom & MICE", metric: "60+", metricLabel: "Hotels" },
  corporate: { tag: "Hybrid Meeting", metric: "200+", metricLabel: "Enterprises" },
  government: { tag: "Public Sector", metric: "40+", metricLabel: "Agencies" },
  hospital: { tag: "Healthcare", metric: "25+", metricLabel: "Hospitals" },
  "video-conference": { tag: "Video Conference", metric: "300+", metricLabel: "Meeting Rooms" },
};

type Industry = (typeof industries)[number];

export function IndustriesShowcase({
  industries: industryItems = industries,
}: {
  industries?: Industry[];
}) {
  const { lang } = useLanguage();
  const meta = lang === "EN" ? metaEN : metaTH;
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const cards = industryItems.slice(0, 5);

  return (
    <section className="relative overflow-hidden bg-[#E8E4DC] py-14 sm:py-16 lg:py-28 dark:bg-[#1a1814]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.25] [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.18)_1px,transparent_0)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-accent backdrop-blur-sm dark:bg-white/5">
              <Sparkles className="h-3.5 w-3.5" />
              {t(lang, "กลุ่มลูกค้าและการใช้งาน", "Industry Use Cases")}
            </div>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-primary sm:text-4xl md:text-5xl">
              {t(lang, "ออกแบบ", "Designed ")}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                {t(lang, "เพื่อทุกประเภทองค์กร", "for every kind of organization")}
              </span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {t(lang, "ประสบการณ์จริงจากการติดตั้งกว่า ", "Real-world experience from over ")}
              <span className="font-semibold text-primary">
                {t(lang, "500+ โปรเจ็ค", "500+ projects")}
              </span>
              {t(lang, " ครอบคลุมทุกอุตสาหกรรม", " across every industry")}
            </p>
          </div>
        </Reveal>

        <div className="group/row mt-12 hidden lg:flex lg:gap-6">
          {cards.map((ind, i) => {
            const Icon = resolveIcon(ind.icon);
            const img = industryImages[ind.slug];
            const m = meta[ind.slug] ?? { tag: "Solution", metric: "—", metricLabel: "" };
            const isActive = activeIdx === i;
            return (
              <Reveal
                key={ind.slug}
                delay={i * 100}
                variant="slide"
                className={`flex-[1_1_0%] transition-[flex-grow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:flex-[3.2_1_0%] group-hover/row:[&:not(:hover)]:flex-[0.7_1_0%] ${
                  isActive ? "!flex-[3.2_1_0%]" : activeIdx !== null ? "!flex-[0.7_1_0%]" : ""
                }`}
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={ind.title}
                  aria-expanded={isActive}
                  onClick={() => setActiveIdx(isActive ? null : i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIdx(isActive ? null : i);
                    }
                  }}
                  className={`group relative block h-[500px] w-full cursor-pointer overflow-hidden rounded-2xl bg-navy shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] transition-all duration-700 ease-out hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:h-[620px] ${
                    isActive ? "shadow-[0_30px_80px_-15px_rgba(0,0,0,0.45)]" : ""
                  }`}
                >
                  {img && (
                    <img
                      src={img}
                      alt={ind.title}
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] ${
                        isActive ? "scale-[1.04]" : ""
                      }`}
                      style={{
                        filter: "saturate(1.1) contrast(1.05)",
                        objectPosition: "center center",
                      }}
                    />
                  )}

                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.05) 55%, rgba(0,0,0,0.75) 100%)",
                    }}
                  />

                  <div className="absolute left-3 top-3 lg:left-4 lg:top-4">
                    <div className="group/badge relative">
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/40 to-cyan/30 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                      <div
                        className={`relative grid h-14 w-14 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-white to-white/90 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.35)] ring-1 ring-white/60 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-0.5 group-hover:shadow-[0_14px_32px_-6px_rgba(0,0,0,0.45)] lg:h-16 lg:w-16 ${
                          isActive ? "-translate-y-0.5" : ""
                        }`}
                      >
                        <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/80 to-transparent" />
                        <span className="pointer-events-none absolute -right-3 -top-3 h-6 w-6 rotate-45 bg-gradient-to-br from-accent to-cyan opacity-90" />
                        <Icon
                          className="relative h-6 w-6 text-navy lg:h-7 lg:w-7"
                          strokeWidth={1.75}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-3 top-3 hidden lg:block">
                    <span className="rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md ring-1 ring-white/20">
                      {m.tag}
                    </span>
                  </div>

                  <div
                    className={`absolute right-2 top-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:-translate-x-1 lg:right-3 ${
                      isActive ? "-translate-x-1" : ""
                    }`}
                  >
                    <div
                      className="whitespace-nowrap text-sm font-bold tracking-[0.18em] text-white lg:text-base"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        textShadow: "0 2px 8px rgba(0,0,0,0.65)",
                      }}
                    >
                      {t(lang, ind.title, ind.titleEn)}
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-black tracking-tight text-white drop-shadow-lg lg:text-3xl">
                        {m.metric}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90">
                        {m.metricLabel}
                      </span>
                    </div>
                    <div
                      className={`mt-2 h-[2px] w-8 origin-left rounded-full bg-gradient-accent transition-transform duration-500 group-hover:scale-x-[2.2] ${
                        isActive ? "scale-x-[2.2]" : ""
                      }`}
                    />
                    <Link
                      to="/industry/$slug"
                      params={{ slug: ind.slug }}
                      onClick={(e) => e.stopPropagation()}
                      className={`mt-3 inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white opacity-0 ring-1 ring-white/25 backdrop-blur-md transition-all duration-500 hover:bg-accent hover:ring-accent group-hover:opacity-100 ${
                        isActive ? "!opacity-100" : ""
                      }`}
                    >
                      {t(lang, "ดูผลงาน", "View")}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-3 lg:hidden">
          {industryItems.map((ind, i) => {
            const Icon = resolveIcon(ind.icon);
            const img = industryImages[ind.slug];
            const m = meta[ind.slug] ?? { tag: "", metric: "—", metricLabel: "" };
            const isOpen = openMobile === i;
            return (
              <div
                key={ind.slug}
                className="overflow-hidden rounded-2xl border border-border shadow-card"
              >
                <button
                  type="button"
                  onClick={() => setOpenMobile(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="relative flex min-h-[96px] w-full items-center gap-3 overflow-hidden p-3 text-left"
                >
                  {img && (
                    <img
                      src={img}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/40 to-transparent" />
                  <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white shadow-md">
                    <Icon className="h-6 w-6 text-navy" />
                  </div>
                  <div className="relative min-w-0 flex-1">
                    <div className="break-words text-base font-bold leading-snug text-white drop-shadow">
                      {t(lang, ind.title, ind.titleEn)}
                    </div>
                    <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                      {m.metric} · {m.metricLabel}
                    </div>
                  </div>
                  <ChevronRight
                    className={`relative h-5 w-5 text-white/90 transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid bg-card transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {t(lang, ind.desc, ind.descEn)}
                      </p>
                      <Link
                        to="/industry/$slug"
                        params={{ slug: ind.slug }}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-accent"
                      >
                        {t(lang, "ดูผลงาน", "View Projects")} <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
