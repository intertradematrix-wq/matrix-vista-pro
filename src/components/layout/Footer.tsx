import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Youtube, Music2, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import matrixLogo from "@/assets/matrix-logo.png";
import { useSiteContent } from "@/lib/content/use-site-content";
import { useLanguage, t } from "@/components/i18n/LanguageProvider";

export function Footer() {
  const { solutions, brands, articleCategories } = useSiteContent();
  const { lang } = useLanguage();

  return (
    <footer className="relative mt-24 overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-cyan/10 blur-3xl pointer-events-none" />

      {/* Top CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 py-8 md:flex-row md:items-center md:px-6">
          <div className="min-w-0">
            <h3 className="break-words text-xl font-bold tracking-tight md:text-2xl">
              {t(lang, "พร้อมเริ่มโปรเจ็คของคุณแล้วหรือยัง?", "Ready to start your project?")}
            </h3>
            <p className="mt-1.5 break-words text-sm text-white/80">
              {t(lang, "ขอใบเสนอราคา หรือนัด Site Survey ฟรีจากทีมผู้เชี่ยวชาญ", "Request a quote or schedule a free site survey with our experts")}
            </p>
          </div>
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button
              asChild
              className="min-h-11 w-full bg-gradient-accent font-semibold text-white shadow-glow hover:opacity-90 sm:w-auto"
            >
              <Link to="/contactus">
                {t(lang, "ขอใบเสนอราคา", "Request Quote")} <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="min-h-11 w-full border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white sm:w-auto"
            >
              <a href="tel:021296193">
                <Phone className="mr-1.5 h-4 w-4" />
                02-129-6193
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-9 px-4 py-10 sm:py-12 md:grid-cols-2 md:px-6 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-4 space-y-5">
          <img src={matrixLogo} alt="Matrix Intertrade Co., Ltd." className="h-14 w-auto" />
          <p className="max-w-md break-words text-sm leading-relaxed text-white/80">
            {t(lang, "บจก.แมทริกซ์ อินเตอร์เทรด — ผู้เชี่ยวชาญด้าน AV Solutions, LED Display, Interactive Display, Projector, Wireless Presentation และ Smart Classroom สำหรับองค์กรในประเทศไทย", "Matrix Intertrade Co., Ltd. — Experts in AV Solutions, LED Display, Interactive Display, Projector, Wireless Presentation, and Smart Classroom for enterprises in Thailand.")}
          </p>
          <div className="space-y-2.5 text-sm text-white/85">
            <div className="flex items-start gap-3">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 border border-white/10">
                <MapPin className="h-4 w-4 text-cyan" />
              </div>
              <span className="min-w-0 break-words pt-1">
                {t(lang, "111/51 หมู่ที่ 8 ต.บางกร่าง อ.เมือง จ.นนทบุรี 11000", "111/51 Moo 8, Bang Krang, Mueang, Nonthaburi 11000")}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 border border-white/10">
                <Phone className="h-4 w-4 text-cyan" />
              </div>
              <span className="min-w-0 break-words">02-129-6193 / 094-888-7041</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 border border-white/10">
                <Mail className="h-4 w-4 text-cyan" />
              </div>
              <span className="min-w-0 break-all">matrixintertrade2026@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 border border-white/10">
                <span className="text-[10px] font-extrabold text-[#06C755]">LINE</span>
              </div>
              <span className="min-w-0 break-words">@MatrixIntertrade</span>
            </div>
          </div>
          <div className="flex gap-2 pt-1">
            {[
              {
                Icon: Facebook,
                href: "https://www.facebook.com/MatrixIntertrade",
                label: "Facebook",
              },
              {
                Icon: Youtube,
                href: "https://www.youtube.com/@matrixintertrade",
                label: "Youtube",
              },
              { Icon: Music2, href: "https://www.tiktok.com/@matrixintertrade", label: "TikTok" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-gradient-accent hover:border-transparent hover:shadow-glow transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          className="lg:col-span-2"
          title={t(lang, "โซลูชั่น", "Solutions")}
          items={solutions.map((s) => ({ label: t(lang, s.title, (s as any).titleEn || s.title), href: `/${s.slug}` }))}
        />
        <FooterCol
          className="lg:col-span-2"
          title={t(lang, "แบรนด์สินค้า", "Brands")}
          items={brands
            .filter((b) => !["Enewave", "Newline", "Poly", "Vissonic", "Yealink"].includes(b.name))
            .map((b) => ({ label: b.name, href: `/brands/${b.slug}` }))}
        />
        <FooterCol
          className="lg:col-span-2"
          title={t(lang, "บทความ", "Articles")}
          items={articleCategories.slice(0, 6).map((c) => ({ label: t(lang, c.label, (c as any).labelEn || c.label), href: "/blog" }))}
        />

        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white">Newsletter</h4>
          <p className="text-xs text-white/80 leading-relaxed">
            {t(lang, "รับบทความและคู่มือเลือก AV ใหม่ก่อนใคร", "Get the latest AV articles and guides before anyone else")}
          </p>
          <form
            className="flex min-w-0 overflow-hidden rounded-xl border border-white/15 bg-white/5 transition-colors focus-within:border-cyan"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder={lang === "EN" ? "Your email" : "อีเมลของคุณ"}
              className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-xs text-white outline-none placeholder:text-white/60"
            />
            <button
              type="submit"
              aria-label={lang === "EN" ? "Subscribe" : "สมัคร"}
              className="grid h-11 w-11 shrink-0 place-items-center bg-gradient-accent transition-opacity hover:opacity-90"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-white/75 md:flex-row md:px-6 md:text-left">
          <div>© {new Date().getFullYear()} Matrix Intertrade Co., Ltd. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link to="/aboutus" className="hover:text-cyan transition-colors">
              {t(lang, "เกี่ยวกับเรา", "About Us")}
            </Link>
            <Link to="/contactus" className="hover:text-cyan transition-colors">
              {t(lang, "ติดต่อเรา", "Contact Us")}
            </Link>
            <Link to="/blog" className="hover:text-cyan transition-colors">
              {t(lang, "บทความ", "Articles")}
            </Link>
            <span>{t(lang, "นโยบายความเป็นส่วนตัว", "Privacy Policy")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
  className,
}: {
  title: string;
  items: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-4 text-white">{title}</h4>
      <ul className="space-y-2.5 text-sm text-white/80">
        {items.map((i, idx) => (
          <li key={i.label + idx}>
            <Link
              to={i.href}
              className="group inline-flex min-w-0 items-center gap-1 break-words transition-colors hover:text-cyan"
            >
              <span>{i.label}</span>
              <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
