import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactForm } from "@/components/site/ContactForm";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, MessageCircle, Navigation, Clock, Car } from "lucide-react";
import heroContact from "@/assets/hero-contactus.jpg";

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
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="ติดต่อทีมผู้เชี่ยวชาญของเรา"
        desc="ขอใบเสนอราคา หรือนัดหมาย Site Survey ฟรี ทีมงานพร้อมตอบกลับภายใน 1 วันทำการ"
        breadcrumbs={[{ label: "ติดต่อเรา" }]}
        bgImage={heroContact}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div className="space-y-5">
            {[
              {
                Icon: MapPin,
                t: "ที่อยู่",
                d: "บจก.แมทริกซ์ อินเตอร์เทรด 111/51 หมู่ที่ 8 ต.บางกร่าง อ.เมือง จ.นนทบุรี 11000",
              },
              { Icon: Phone, t: "โทรศัพท์", d: "02-129-6193 / 094-888-7041" },
              { Icon: Mail, t: "อีเมล", d: "matrixintertrade2026@gmail.com" },
              { Icon: MessageCircle, t: "Line OA", d: "@MatrixIntertrade" },
            ].map(({ Icon, t, d }) => (
              <div
                key={t}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-accent text-white shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {t}
                  </div>
                  <div className="text-base font-semibold text-primary mt-1">{d}</div>
                </div>
              </div>
            ))}
          </div>
          <ContactForm />
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
              แผนที่บริษัท &amp; เส้นทางเดินทาง
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              นัดหมายเข้าชม Showroom และคลังสินค้าของเราที่นนทบุรี
              ทีมงานพร้อมต้อนรับและสาธิตสินค้าจริง
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-6 items-stretch">
            {/* Info panel */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-hero text-white p-7 md:p-8 shadow-elev ring-1 ring-white/10 flex flex-col">
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-accent/30 blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Head Office &amp; Warehouse
                </div>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold leading-tight drop-shadow">
                  Matrix Intertrade
                  <br />
                  Co., Ltd.
                </h3>
                <p className="mt-3 text-sm text-white/85 leading-relaxed">
                  111/51 หมู่ที่ 8 ต.บางกร่าง อ.เมือง
                  <br />
                  จ.นนทบุรี 11000 ประเทศไทย
                </p>
              </div>

              <div className="relative mt-6 space-y-3">
                {[
                  { Icon: Clock, t: "เวลาทำการ", d: "จันทร์–ศุกร์ 08:30–17:30 น." },
                  { Icon: Phone, t: "โทรนัดหมาย", d: "02-129-6193" },
                  { Icon: Car, t: "ที่จอดรถ", d: "มีที่จอดรถภายในบริษัท" },
                ].map(({ Icon, t, d }) => (
                  <div
                    key={t}
                    className="flex items-start gap-3 rounded-xl bg-white/10 ring-1 ring-white/15 backdrop-blur px-4 py-3"
                  >
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/15 ring-1 ring-white/20">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                        {t}
                      </div>
                      <div className="text-sm font-semibold mt-0.5">{d}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-gradient-accent text-white shadow-glow hover:opacity-95"
                >
                  <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                    <Navigation className="h-4 w-4" />
                    นำทาง Google Maps
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
                >
                  <a href="tel:021296193">
                    <Phone className="h-4 w-4" />
                    โทรสอบถาม
                  </a>
                </Button>
              </div>
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
