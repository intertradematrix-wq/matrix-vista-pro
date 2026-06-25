import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactForm } from "@/components/site/ContactForm";
import { useLanguage, t } from "@/components/i18n/LanguageProvider";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import heroContact from "@/assets/hero-contactus.jpg";
import headOfficeWarehouseCard from "@/assets/contact/head-office-warehouse-card.png";
import { Reveal, RevealStagger } from "@/components/site/Reveal";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d208564.31411982139!2d100.08820455287514!3d13.754200668610048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x30e29b41eaa4a621%3A0xdc28c2b815205d5b!2zTWF0cml4IEludGVydHJhZGUgQ28uLEx0ZC4gRmFjdG9yeSBGb3J3YXJkIDExMS81NiDguKvguKHguLnguYjguJfguLXguYggOCDguJUg4LiV4Liz4Lia4LilIOC4muC4suC4h-C4geC4o-C5iOC4suC4hyDguK0u4LmA4Lih4Li34Lit4LiHIOC4meC4meC4l-C4muC4uOC4o-C4tSAxMTAwMA!3m2!1d13.843674!2d100.45374869999999!4m5!1s0x30e29b41eaa4a621%3A0xdc28c2b815205d5b!2zTWF0cml4IEludGVydHJhZGUgQ28uLEx0ZC4gRmFjdG9yeSBGb3J3YXJkIDExMS81NiDguKvguKHguLnguYjguJfguLXguYggOCDguJUg4LiV4Liz4Lia4LilIOC4muC4suC4h-C4geC4o-C5iOC4suC4hyDguK0u4LmA4Lih4Li34Lit4LiHIOC4meC4meC4l-C4muC4uOC4o-C4tSAxMTAwMA!3m2!1d13.843674!2d100.45374869999999!5e0!3m2!1sth!2sth!4v1780061893336!5m2!1sth!2sth";

const DIRECTIONS_URL = "https://maps.app.goo.gl/1SFM9izkXdenp7LYA";

export const Route = createFileRoute("/contactus")({
  head: () => ({
    meta: [
      { title: "ติดต่อเรา — Matrix Intertrade" },
      { name: "description", content: "ขอใบเสนอราคา หรือปรึกษาผู้เชี่ยวชาญด้าน AV Solutions ฟรี" },
      { property: "og:title", content: "ติดต่อเรา — Matrix Intertrade" },
      { property: "og:description", content: "ติดต่อทีมขายและฝ่ายเทคนิคของ Matrix Intertrade" },
      { property: "og:url", content: "/contactus" },
    ],
    links: [{ rel: "canonical", href: "/contactus" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Matrix Intertrade Co., Ltd.",
          image: "https://matrix-vista-pro.lovable.app/og-image.jpg",
          url: "https://matrix-vista-pro.lovable.app/contactus",
          telephone: "+66-2-129-6193",
          email: "matrixintertrade2026@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "111/51 หมู่ที่ 8 ต.บางกร่าง",
            addressLocality: "อ.เมือง",
            addressRegion: "จ.นนทบุรี",
            postalCode: "11000",
            addressCountry: "TH",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:30",
              closes: "17:30",
            },
          ],
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={t(lang, "ติดต่อทีมผู้เชี่ยวชาญของเรา", "Contact Our Experts")}
        desc={t(
          lang,
          "ขอใบเสนอราคา หรือนัดหมาย Site Survey ฟรี ทีมงานพร้อมตอบกลับภายใน 1 วันทำการ",
          "Request a quote or schedule a free site survey. We reply within 1 business day.",
        )}
        breadcrumbs={[{ label: t(lang, "ติดต่อเรา", "Contact Us") }]}
        bgImage={heroContact}
        variant="light"
      />
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
          <div className="space-y-8">
            <Reveal delay={100}>
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                  {t(lang, "ติดต่อเรา พร้อมให้บริการ", "We're Here to Help")}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {t(lang, "ช่องทางการติดต่อ Matrix Intertrade", "Contact Channels")}
                </p>
              </div>
            </Reveal>

            <RevealStagger step={100} className="space-y-4">
              {[
                {
                  Icon: MapPin,
                  label: t(lang, "ที่อยู่", "Address"),
                  d: t(
                    lang,
                    "บจก.แมทริกซ์ อินเตอร์เทรด 111/51 หมู่ที่ 8 ต.บางกร่าง อ.เมือง จ.นนทบุรี 11000",
                    "Matrix Intertrade 111/51 Moo 8, Bang Krang, Mueang, Nonthaburi 11000",
                  ),
                },
                {
                  Icon: Phone,
                  label: t(lang, "โทรศัพท์", "Phone"),
                  d: "02-129-6193 / 094-888-7041",
                },
                {
                  Icon: Mail,
                  label: t(lang, "อีเมล", "Email"),
                  d: "matrixintertrade2026@gmail.com",
                },
                { Icon: MessageCircle, label: "Line OA", d: "@MatrixIntertrade" },
              ].map(({ Icon, label, d }) => (
                <div
                  key={label}
                  className="group flex items-center gap-5 rounded-[1.5rem] border border-border/60 bg-card p-5 shadow-sm hover:shadow-elev transition-all duration-300 hover:-translate-y-1 cursor-default"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-muted-foreground mb-1">{label}</div>
                    <div className="text-base font-semibold text-primary leading-snug">{d}</div>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground/40 group-hover:text-brand-red group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </RevealStagger>
          </div>
          <Reveal delay={300} variant="slide">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map / Find Us */}
      <section className="relative bg-gradient-subtle py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-10">
            <div className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4">
              Find Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              {t(lang, "แผนที่บริษัท & เส้นทางเดินทาง", "Office Map & Directions")}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              {t(
                lang,
                "นัดหมายเข้าชม Showroom และคลังสินค้าของเราที่นนทบุรี ทีมงานพร้อมต้อนรับและสาธิตสินค้าจริง",
                "Schedule a visit to our Showroom and Warehouse in Nonthaburi. Our team is ready to welcome you and provide live demonstrations.",
              )}
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-6 items-stretch">
            {/* Info panel */}
            <div className="relative overflow-hidden rounded-[28px] bg-black shadow-[0_28px_70px_-34px_rgba(0,0,0,0.75)] ring-1 ring-[#f5c542]/45">
              <img
                src={headOfficeWarehouseCard}
                alt={t(
                  lang,
                  "ข้อมูล Head Office & Warehouse ของ Matrix Intertrade Co., Ltd. พร้อมที่อยู่ เวลาทำการ เบอร์โทร และที่จอดรถ",
                  "Head Office and Warehouse information for Matrix Intertrade Co., Ltd. with address, business hours, phone, and parking details",
                )}
                loading="lazy"
                decoding="async"
                width={1122}
                height={1401}
                sizes="(max-width: 1024px) 100vw, 420px"
                className="block h-auto w-full select-none object-contain"
              />
              <div className="sr-only">
                <h3>Matrix Intertrade Co., Ltd.</h3>
                <p>
                  {t(
                    lang,
                    "111/51 หมู่ที่ 8 ต.บางกร่าง อ.เมือง จ.นนทบุรี 11000 ประเทศไทย",
                    "111/51 Moo 8, Bang Krang, Mueang, Nonthaburi 11000, Thailand",
                  )}
                </p>
                <p>{t(lang, "เวลาทำการ จันทร์-ศุกร์ 08:30-17:30 น.", "Business hours Monday-Friday 08:30-17:30")}</p>
                <p>{t(lang, "โทรนัดหมาย 02-129-6193", "Appointments 02-129-6193")}</p>
                <p>{t(lang, "มีที่จอดรถภายในบริษัท", "Parking available on-site")}</p>
              </div>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(lang, "นำทาง Google Maps", "Google Maps Directions")}
                className="absolute bottom-[6.2%] left-[5.8%] h-[8.5%] w-[44.8%] rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5c542]"
              />
              <a
                href="tel:021296193"
                aria-label={t(lang, "โทรสอบถาม 02-129-6193", "Call 02-129-6193")}
                className="absolute bottom-[6.2%] right-[5.8%] h-[8.5%] w-[40.5%] rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff3333]"
              />
            </div>

            {/* Map */}
            <div className="relative rounded-3xl overflow-hidden shadow-elev ring-1 ring-border bg-card min-h-[420px] lg:min-h-[520px] group">
              <iframe
                title="Matrix Intertrade Location Map"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-3xl" />
              <div className="pointer-events-none absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary shadow-card ring-1 ring-border">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                Matrix Intertrade HQ
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
