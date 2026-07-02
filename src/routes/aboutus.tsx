import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/CTASection";
import heroAbout from "@/assets/hero-aboutus.jpg";
import ledLineup2026 from "@/assets/about/led-lineup-2026.jpg";
import premiumSolutions2026 from "@/assets/about/premium-solutions-2026.jpg";
import partnerKramer from "@/assets/about/partner-1.png";
import partnerGrandview from "@/assets/about/partner-2.png";
import partner3 from "@/assets/about/partner-3.png";
import partner4 from "@/assets/about/partner-4.png";
import partner5 from "@/assets/about/partner-5.png";
import partner6 from "@/assets/about/partner-6.png";
import partner7 from "@/assets/about/partner-7.png";
import partner8 from "@/assets/about/partner-8.png";
import industryEducation from "@/assets/about/industries/education.jpg";
import industryHotel from "@/assets/about/industries/hotel-events.jpg";
import industryOffice from "@/assets/about/industries/office-business.jpg";
import industryVC from "@/assets/about/industries/video-conference.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage, t } from "@/components/i18n/LanguageProvider";
import { useSiteContent } from "@/lib/content/use-site-content";
import {
  Target,
  Eye,
  Heart,
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  GraduationCap,
  Hotel,
  Building2,
  Video,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/aboutus")({
  head: () => ({
    meta: [
      { title: "เกี่ยวกับเรา — Matrix Intertrade" },
      {
        name: "description",
        content:
          "บริษัท แมทริกซ์ อินเตอร์เทรด จำกัด ผู้นำเข้าและจัดจำหน่ายระบบภาพแบรนด์ชั้นนำของโลก ประสบการณ์มากกว่า 20 ปี",
      },
      { property: "og:title", content: "เกี่ยวกับเรา — Matrix Intertrade" },
      {
        property: "og:description",
        content: "ผู้นำเข้าและจัดจำหน่ายระบบภาพแบรนด์ชั้นนำของโลก ด้วยประสบการณ์มากกว่า 20 ปี",
      },
      { property: "og:url", content: "/aboutus" },
    ],
    links: [{ rel: "canonical", href: "/aboutus" }],
  }),
  component: AboutPage,
});

const stats = [
  { v: "20+", l: "ปีประสบการณ์", lEn: "Years Experience" },
  { v: "500+", l: "โปรเจ็คที่สำเร็จ", lEn: "Completed Projects" },
  { v: "8+", l: "แบรนด์ระดับโลก", lEn: "Global Brands" },
  { v: "100%", l: "บริการในประเทศ", lEn: "Local Service" },
];

const partners = [
  {
    name: "Kramer",
    img: partnerKramer,
    tag: "อุปกรณ์ระบบ AV ที่ของมันต้องมี",
    tagEn: "Essential AV Equipment",
  },
  {
    name: "Grandview",
    img: partnerGrandview,
    tag: "จอรับภาพ คุณภาพเหนือราคา",
    tagEn: "High-quality Projection Screens",
  },
];

const industries = [
  {
    Icon: GraduationCap,
    title: "โรงเรียน และสถาบันการศึกษา",
    titleEn: "Schools & Educational Institutions",
    subtitle: "Education",
    desc: "ผลิตภัณฑ์สำหรับสถาบันการศึกษา มหาวิทยาลัย วิทยาลัย และโรงเรียนทุกระดับชั้น พร้อมโซลูชั่นห้องเรียนอัจฉริยะ จอภาพคุณภาพสูง Grandview Large-stage / SkyShow Series และอุปกรณ์ Kramer ครบวงจร",
    descEn:
      "Products for educational institutions, universities, colleges, and schools of all levels. Featuring smart classroom solutions, high-quality Grandview Large-stage/SkyShow Series screens, and comprehensive Kramer equipment.",
    img: industryEducation,
    href: "/industry/education",
  },
  {
    Icon: Hotel,
    title: "โรงแรมและห้องประชุมขนาดใหญ่",
    titleEn: "Hotels & Large Venues",
    subtitle: "Hotels, Live Events & Museums",
    desc: '"The show must go on" — สถานบันเทิง โรงละคร โรงแรม งานกิจกรรม Live Event และพิพิธภัณฑ์ เราคัดสรร Top Class Reliable Products ที่พิสูจน์จากการใช้งานหนักในสถานที่ที่ต้องการเสถียรภาพสูงสุดจากทุกมุมโลก',
    descEn:
      '"The show must go on" — Entertainment venues, theaters, hotels, live events, and museums. We select top-class reliable products proven by heavy use in locations demanding maximum stability worldwide.',
    img: industryHotel,
    href: "/industry/hotel",
  },
  {
    Icon: Building2,
    title: "สำนักงานและองค์กรธุรกิจ",
    titleEn: "Offices & Corporate",
    subtitle: "Corporate & Government",
    desc: "สำหรับองค์กรธุรกิจ หน่วยงานราชการ และรัฐวิสาหกิจ — Remarkable Screen จอภาพยุคใหม่แบบทูอินวัน เขียน-ฉายภาพได้บนจอเดียว จับคู่กับโปรเจคเตอร์อินเตอร์แอ๊คทีฟ พร้อมระบบภาพและเสียงที่ออกแบบให้เหมาะกับการใช้งานจริง",
    descEn:
      "For corporate organizations, government agencies, and state enterprises — Remarkable Screens, two-in-one modern displays for writing and projecting, paired with interactive projectors, with AV systems designed around real workflows.",
    img: industryOffice,
    href: "/industry/corporate",
  },
  {
    Icon: Video,
    title: "ระบบวิดีโอคอนเฟอเร้นซ์ เพื่อทุกหน่วยงาน",
    titleEn: "Video Conference Systems",
    subtitle: "Video Conference",
    desc: "ระบบประชุมทางไกลครบวงจร จอแสดงผล กล้อง ไมโครโฟน และระบบควบคุม สำหรับห้องประชุมทุกขนาด ตอบโจทย์การทำงานแบบ Hybrid Workplace ในยุคดิจิตอล",
    descEn:
      "Comprehensive teleconference systems with displays, cameras, microphones, and control equipment for meeting rooms of all sizes, answering the needs of Hybrid Workplaces in the digital era.",
    img: industryVC,
    href: "/industry/video-conference",
  },
];

function AboutPage() {
  const { lang } = useLanguage();
  const { aboutUs } = useSiteContent();

  if (!aboutUs) return null;

  const rawStats = aboutUs.statsPayload;
  const statsList = Array.isArray(rawStats) && rawStats.length > 0 ? rawStats : stats;

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={t(lang, aboutUs.introTitleTh, aboutUs.introTitleEn)}
        desc={aboutUs.introDescTh ? t(lang, aboutUs.introDescTh, aboutUs.introDescEn) : t(
          lang,
          "ผู้นำเข้าและจัดจำหน่ายระบบภาพแบรนด์ชั้นนำของโลก ด้วยประสบการณ์ทีมงานมากกว่า 20 ปี คัดสรรเฉพาะผลิตภัณฑ์คุณภาพสูงที่เชื่อถือได้ระดับแนวหน้าของโลก",
          "Importer and distributor of world-leading AV brands with over 20 years of experience. We select only the highest quality and most reliable products globally.",
        )}
        breadcrumbs={[{ label: t(lang, "เกี่ยวกับเรา", "About Us") }]}
        bgImage={heroAbout}
        variant="light"
      />

      {/* Full-width feature image */}
      <section className="bg-navy">
        <img
          src={premiumSolutions2026}
          alt="We Deliver Premium Solutions For Every Vision — Matrix Intertrade: LED Display, Interactive Display, Wireless Presentation, Projector, AV Solution"
          loading="eager"
          className="h-auto w-full object-contain"
        />
      </section>

      {/* Story */}
      <section className="bg-navy pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div>
            <div className="inline-block rounded-full bg-sky-500/10 text-sky-400 px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t(lang, aboutUs.introTitleTh, aboutUs.introTitleEn)}
            </h2>
            <div className="mt-5 space-y-4 text-slate-400 leading-relaxed text-[15px]">
              {aboutUs.storyP1Th && <p>{t(lang, aboutUs.storyP1Th, aboutUs.storyP1En)}</p>}
              {aboutUs.storyP2Th && <p>{t(lang, aboutUs.storyP2Th, aboutUs.storyP2En)}</p>}
              {aboutUs.storyP3Th && <p>{t(lang, aboutUs.storyP3Th, aboutUs.storyP3En)}</p>}
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {statsList.map((s: any) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-slate-800 bg-[#080d1a] p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-black text-sky-500">
                    {s.v}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {t(lang, s.l, s.lEn)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-navy pb-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: Target,
                t: "Mission",
                d: t(lang, aboutUs.missionTh, aboutUs.missionEn),
              },
              {
                Icon: Eye,
                t: "Vision",
                d: t(lang, aboutUs.visionTh, aboutUs.visionEn),
              },
              {
                Icon: Heart,
                t: "Values",
                d: t(lang, aboutUs.valuesTh, aboutUs.valuesEn),
              },
            ].map(({ Icon, t: title, d }) => (
              <div key={title} className="rounded-2xl border border-slate-800 bg-[#080d1a] p-7 text-left hover:border-sky-500/30 transition-colors">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-sky-500 text-white mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve — content from About sub-menu */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4">
              Industries We Serve
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              {t(lang, "ผลิตภัณฑ์ตามกลุ่มลูกค้าและการใช้งาน", "Products by Client Group & Usage")}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              {t(
                lang,
                "เราคัดสรรอุปกรณ์ระบบภาพและเสียงให้เหมาะกับการใช้งานเฉพาะของแต่ละกลุ่มองค์กร พร้อมทีมผู้เชี่ยวชาญดูแลตลอดอายุการใช้งาน",
                "We select AV equipment tailored to the specific needs of each organization type, with a team of experts providing lifetime support.",
              )}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {industries.map(({ Icon, title, titleEn, subtitle, desc, descEn, img, href }) => (
              <Link
                key={title}
                to={href}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card hover:shadow-elev hover:border-accent/40 transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-accent shadow">
                    <Icon className="h-3.5 w-3.5" />
                    {subtitle}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {t(lang, title, titleEn)}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {t(lang, desc, descEn)}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    {t(lang, "ดูรายละเอียดเพิ่มเติม", "View More Details")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="bg-gradient-subtle py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <div>
            <div className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4">
              Company Info
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              {t(lang, aboutUs.introTitleTh, aboutUs.introTitleEn)}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t(
                lang,
                "สำนักงานและคลังสินค้าตั้งอยู่ที่นนทบุรี พร้อมทีมงานเทคนิคและฝ่ายขายที่พร้อมให้บริการลูกค้าทั่วประเทศ",
                "Head office and warehouse located in Nonthaburi, with technical and sales teams ready to serve customers nationwide.",
              )}
            </p>
            <div className="mt-8 space-y-4">
              {[
                {
                  Icon: MapPin,
                  t: t(lang, "ที่อยู่", "Address"),
                  d: t(
                    lang,
                    "111/51 หมู่ที่ 8 ตำบลบางกร่าง อ.เมือง จ.นนทบุรี 11000 ประเทศไทย",
                    "111/51 Moo 8, Bang Krang, Mueang, Nonthaburi 11000, Thailand",
                  ),
                },
                { Icon: Phone, t: t(lang, "โทรศัพท์", "Phone"), d: "02-129-6193 / 092-932-8649" },
                { Icon: Mail, t: t(lang, "อีเมล", "Email"), d: "matrixintertrade2026@gmail.com" },
                { Icon: Globe, t: t(lang, "เว็บไซต์", "Website"), d: "www.matrixintertrade.com" },
                { Icon: Facebook, t: "Facebook", d: "facebook.com/MatrixIntertrade" },
              ].map(({ Icon, t: title, d }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-card"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-accent text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                      {title}
                    </div>
                    <div className="text-sm font-semibold text-primary mt-0.5">{d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Button asChild className="bg-gradient-accent text-white shadow-glow">
                <Link to="/contactus">{t(lang, "ติดต่อเรา", "Contact Us")}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/brands">{t(lang, "ดูแบรนด์ทั้งหมด", "View All Brands")}</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-elev ring-1 ring-border bg-card min-h-[420px]">
            <iframe
              title="Matrix Intertrade Location"
              src={aboutUs.mapUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.5!2d100.45374869999999!3d13.843674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b41eaa4a621%3A0xdc28c2b815205d5b!2sMatrix%20Intertrade%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1780061893336!5m2!1sth!2sth"}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full w-full min-h-[420px] border-0"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
