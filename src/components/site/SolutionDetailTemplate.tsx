import { Link } from "@tanstack/react-router";
import { PageHeader } from "./PageHeader";
import { CTASection } from "./CTASection";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { resolveIcon } from "@/lib/icon-map";
import { solutionImages } from "@/data/solution-images";
import heroLed from "@/assets/hero-led.jpg";
import heroInteractive from "@/assets/hero-interactive.jpg";
import heroProjector from "@/assets/hero-projector.jpg";
import heroWireless from "@/assets/hero-wireless.jpg";
import heroAv from "@/assets/hero-av.jpg";
import { useLanguage, t } from "@/components/i18n/LanguageProvider";

const slugHero: Record<string, string> = {
  "led-display": heroLed,
  "interactive-display": heroInteractive,
  projector: heroProjector,
  "wireless-presentation": heroWireless,
  "av-solutions": heroAv,
};

export function SolutionDetailTemplate({
  slug,
  title,
  iconName,
  intro,
  introEn,
  bullets,
  bulletsEn,
  applications,
  applicationsEn,
}: {
  slug: string;
  title: string;
  iconName: string;
  intro: string;
  introEn?: string;
  bullets: string[];
  bulletsEn?: string[];
  applications: string[];
  applicationsEn?: string[];
}) {
  const { lang } = useLanguage();
  const Icon = resolveIcon(iconName);
  const img = solutionImages[slug];
  const displayIntro = introEn ? t(lang, intro, introEn) : intro;
  const displayBullets = bulletsEn && lang === "EN" ? bulletsEn : bullets;
  const displayApps = applicationsEn && lang === "EN" ? applicationsEn : applications;

  return (
    <>
      <PageHeader
        eyebrow="Solution"
        title={title}
        desc={displayIntro}
        breadcrumbs={[
          { label: t(lang, "โซลูชั่นของเรา", "Our Solutions"), href: "/solutions" },
          { label: title },
        ]}
        bgImage={slugHero[slug]}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-[1.1fr_1fr] gap-10">
          <div>
            <div className="mb-6 inline-grid h-14 w-14 place-items-center rounded-xl bg-gradient-accent text-white shadow-glow">
              <Icon className="h-7 w-7" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
              {t(lang, `จุดเด่นของระบบ ${title}`, `Key features of ${title}`)}
            </h2>
            <ul className="mt-6 space-y-3">
              {displayBullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card"
                >
                  <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm text-foreground/85 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3 flex-wrap">
              <Button asChild className="bg-gradient-accent text-white shadow-glow">
                <Link to="/contactus">
                  {t(lang, "ขอใบเสนอราคา", "Request Quote")} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contactus">{t(lang, "ปรึกษาผู้เชี่ยวชาญ", "Consult an Expert")}</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elev bg-gradient-hero">
              {img && (
                <img
                  src={img}
                  alt={`${title} mockup`}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 text-white">
                <div className="grid h-11 w-11 place-items-center rounded-xl glass">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold drop-shadow">{title}</span>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-bold text-primary mb-4">
                {t(lang, "การใช้งานที่เหมาะสม", "Best Applications")}
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {displayApps.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
