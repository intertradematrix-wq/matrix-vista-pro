import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/CTASection";
import heroAbout from "@/assets/hero-aboutus.jpg";
import ledLineup2026 from "@/assets/about/led-lineup-2026.jpg";
import premiumSolutions2026 from "@/assets/about/premium-solutions-2026.jpg";
import partnerKramer from "@/assets/about/partner-1.png";
import partnerGrandview from "@/assets/about/partner-2.png";
import partnerNewline from "@/assets/about/partner-3.png";
import partnerYealink from "@/assets/about/partner-4.png";
import partnerVissonic from "@/assets/about/partner-5.png";
import partnerPoly from "@/assets/about/partner-6.png";
import partnerAvlink from "@/assets/about/partner-7.png";
import partnerEnewave from "@/assets/about/partner-8.png";
import industryEducation from "@/assets/about/industries/education.jpg";
import industryHotel from "@/assets/about/industries/hotel-events.jpg";
import industryOffice from "@/assets/about/industries/office-business.jpg";
import industryVC from "@/assets/about/industries/video-conference.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage, t } from "@/components/i18n/LanguageProvider";
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
  {
    name: "Newline",
    img: partnerNewline,
    tag: "จอทัชสกรีนอัจฉริยะ คุณภาพสูง",
    tagEn: "High-quality Interactive Displays",
  },
  {
    name: "Yealink",
    img: partnerYealink,
    tag: "ชุดประชุมคุณภาพ ราคาประหยัด",
    tagEn: "Cost-effective Meeting Solutions",
  },
  {
    name: "Vissonic",
    img: partnerVissonic,
    tag: "ระบบประชุมระดับมืออาชีพ",
    tagEn: "Professional Conference Systems",
  },
  {
    name: "Poly",
    img: partnerPoly,
    tag: "รวมอุปกรณ์ชุดประชุมคุณภาพ",
    tagEn: "Quality Conference Equipment",
  },
  {
    name: "AVLink",
    img: partnerAvlink,
    tag: "The Highest Quality AV Solutions",
    tagEn: "The Highest Quality AV Solutions",
  },
  {
    name: "Enewave",
    img: partnerEnewave,
    tag: "Enewave ครบเครื่องเรื่องเสียง",
    tagEn: "Complete Audio Solutions",
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
    desc: "สำหรับองค์กรธุรกิจ หน่วยงานราชการ และรัฐวิสาหกิจ — Remarkable Screen จอภาพยุคใหม่แบบทูอินวัน เขียน-ฉายภาพได้บนจอเดียว จับคู่กับโปรเจคเตอร์อินเตอร์แอ๊คทีฟ พร้อม newline Flex, Q/Q+/Z Series และ Kramer",
    descEn:
      "For corporate organizations, government agencies, and state enterprises — Remarkable Screens, two-in-one modern displays for writing and projecting, paired with interactive projectors, along with newline Flex, Q/Q+/Z Series, and Kramer.",
    img: industryOffice,
    href: "/industry/corporate",
  },
  {
    Icon: Video,
    title: "ระบบวิดีโอคอนเฟอเร้นซ์ เพื่อทุกหน่วยงาน",
    titleEn: "Video Conference Systems",
    subtitle: "Video Conference",
    desc: "ระบบประชุมทางไกลครบวงจร Newline Q+ / Q / Z Series, Collaboration Devices และอุปกรณ์ Yealink, Poly สำหรับห้องประชุมทุกขนาด ตอบโจทย์การทำงานแบบ Hybrid Workplace ในยุคดิจิตอล",
    descEn:
      "Comprehensive teleconference systems: Newline Q+/Q/Z Series, Collaboration Devices, and Yealink, Poly equipment for meeting rooms of all sizes, answering the needs of Hybrid Workplaces in the digital era.",
    img: industryVC,
    href: "/industry/video-conference",
  },
];

function AboutPage() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={t(lang, "เกี่ยวกับบริษัท Matrix Intertrade", "About Matrix Intertrade")}
        desc={t(
          lang,
          "ผู้นำเข้าและจัดจำหน่ายระบบภาพแบรนด์ชั้นนำของโลก ด้วยประสบการณ์ทีมงานมากกว่า 20 ปี คัดสรรเฉพาะผลิตภัณฑ์คุณภาพสูงที่เชื่อถือได้ระดับแนวหน้าของโลก",
          "Importer and distributor of world-leading AV brands with over 20 years of experience. We select only the highest quality and most reliable products globally.",
        )}
        breadcrumbs={[{ label: t(lang, "เกี่ยวกับเรา", "About Us") }]}
        bgImage={heroAbout}
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
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div>
            <div className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              {t(lang, "เกี่ยวกับบริษัท Matrix Intertrade", "About Matrix Intertrade")}
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">
                  {t(lang, "บริษัท แมทริกซ์ อินเตอร์เทรด จำกัด", "Matrix Intertrade Co., Ltd.")}
                </strong>{" "}
                {t(
                  lang,
                  "เป็นผู้จัดจำหน่ายผลิตภัณฑ์ที่ใช้ในสำนักงานเพื่อเสริมประสิทธิภาพของการทำงานในหลากหลายรูปแบบ อาทิ จอรับภาพโปรเจคเตอร์ขนาดต่าง ๆ, จอ LED, กระดานอัจฉริยะ, อุปกรณ์ต่อเชื่อมระบบภาพ และการแสดงผลระบบภาพที่ทันสมัย ตอบโจทย์ยุคดิจิตอลทุกความต้องการ",
                  "is a distributor of office products designed to enhance operational efficiency in various forms, such as projection screens of all sizes, LED displays, interactive whiteboards, AV connectivity equipment, and modern visual displays, meeting every digital era requirement.",
                )}
              </p>
              <p>
                {t(
                  lang,
                  "ด้วยวิสัยทัศน์ที่เล็งเห็นว่า เครื่องมือและอุปกรณ์สำนักงานที่ดีและมีเสถียรภาพสูงเท่านั้น ที่จะตอบโจทย์การลงทุนที่คุ้มค่า และจะเพิ่มประสิทธิภาพการทำงานขององค์กรในโลกเทคโนโลยียุคปัจจุบันได้อย่างแท้จริง",
                  "With the vision that only good and highly stable office tools and equipment will provide a worthwhile investment and truly increase organizational efficiency in today's technological world.",
                )}
              </p>
              <p>
                {t(
                  lang,
                  "ผลิตภัณฑ์คุณภาพต่ำที่ดูเหมือนจะประหยัดในตอนต้น แต่กลับสร้างปัญหาในการใช้งานและบั่นทอนประสิทธิภาพในการทำงาน จากประสบการณ์อันยาวนานมากกว่า",
                  "Low-quality products that seem economical initially often create operational problems and undermine work efficiency. With over",
                )}{" "}
                <strong className="text-foreground">{t(lang, "20 ปี", "20 years")}</strong>{" "}
                {t(
                  lang,
                  "ของทีมงานเมทริกซ์ฯ ผลิตภัณฑ์ที่เราคัดสรรมาบริการท่าน ล้วนเป็นผลิตภัณฑ์ที่มีคุณภาพสูง เป็นที่เชื่อถือระดับแนวหน้าของโลกทั้งสิ้น",
                  "of experience, Matrix’s team ensures that the products we select for you are of high quality and recognized as world-leaders.",
                )}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-border bg-card p-4 text-center shadow-card"
                >
                  <div className="text-2xl md:text-3xl font-black text-gradient-accent bg-gradient-accent bg-clip-text text-transparent">
                    {s.v}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-1">
                    {t(lang, s.l, s.lEn)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-gradient-subtle py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: Target,
                t: "Mission",
                d: t(
                  lang,
                  "ส่งมอบโซลูชั่นภาพและเสียงที่ตอบโจทย์การใช้งานจริงและคุ้มค่าระยะยาวให้กับทุกองค์กร",
                  "Deliver practical and cost-effective long-term audiovisual solutions for all organizations.",
                ),
              },
              {
                Icon: Eye,
                t: "Vision",
                d: t(
                  lang,
                  "เป็นพาร์ทเนอร์อันดับหนึ่งด้านระบบภาพของไทย ที่องค์กรชั้นนำไว้วางใจเลือกใช้",
                  "To be Thailand's number one visual systems partner, trusted by leading organizations.",
                ),
              },
              {
                Icon: Heart,
                t: "Values",
                d: t(
                  lang,
                  "ความซื่อสัตย์ ความเชี่ยวชาญ และการดูแลลูกค้าตลอดอายุการใช้งานของผลิตภัณฑ์",
                  "Integrity, expertise, and customer care throughout the product lifecycle.",
                ),
              },
            ].map(({ Icon, t: title, d }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-accent text-white shadow-glow mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
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

      {/* Our Partners */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4">
              Our Partners
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              {t(lang, "แบรนด์ชั้นนำที่เราเป็นตัวแทนจำหน่าย", "Leading Brands We Represent")}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              {t(
                lang,
                "คัดสรรเฉพาะแบรนด์ที่ได้รับการยอมรับระดับโลก พร้อมการรับประกันและบริการหลังการขายในประเทศ",
                "We select only globally recognized brands with domestic warranties and after-sales support.",
              )}
            </p>
          </div>

          {/* Featured LED Lineup 2026 */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-elev ring-1 ring-border bg-navy">
            <img
              src={ledLineup2026}
              alt="Matrix Intertrade New Lineup 2026 — The Leading Choice of LED Display Solutions: Unilumin, Absen, INFiLED, LEDMAN, Daktronics, Fabulux LED"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="group rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-elev hover:border-accent/40 transition-all text-center"
              >
                <div className="aspect-square grid place-items-center bg-white rounded-xl overflow-hidden p-3 mb-3">
                  <img
                    src={p.img}
                    alt={`${p.name} partner brand of Matrix Intertrade`}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="font-bold text-primary text-sm">{p.name}</div>
                <div className="text-[11px] text-muted-foreground mt-1 leading-snug">
                  {t(lang, p.tag, p.tagEn)}
                </div>
              </div>
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
              {t(lang, "บริษัท แมทริกซ์ อินเตอร์เทรด จำกัด", "Matrix Intertrade Co., Ltd.")}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.5!2d100.45374869999999!3d13.843674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b41eaa4a621%3A0xdc28c2b815205d5b!2sMatrix%20Intertrade%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1780061893336!5m2!1sth!2sth"
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
