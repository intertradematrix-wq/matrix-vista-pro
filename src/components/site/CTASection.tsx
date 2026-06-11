import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, FileText, Package } from "lucide-react";
import { useLanguage, t } from "@/components/i18n/LanguageProvider";

export function CTASection() {
  const { lang } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cyan/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-28 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight">
          {t(lang, "ต้องการออกแบบระบบ AV หรือจอ LED ", "Need an AV system or LED display ")}
          <span className="text-gradient-accent bg-gradient-to-r from-cyan to-white bg-clip-text text-transparent">
            {t(lang, "สำหรับองค์กรของคุณ?", "for your organization?")}
          </span>
        </h2>
        <p className="mt-4 text-white/85 max-w-2xl mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
          {t(
            lang,
            "ทีมผู้เชี่ยวชาญพร้อมให้คำปรึกษาฟรี ออกแบบโซลูชั่นตามหน้างานจริงของคุณ",
            "Our expert team offers free consultation and tailor-made solutions for your site.",
          )}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-white text-navy hover:bg-white/90">
            <Link to="/contactus">
              <Phone className="mr-2 h-4 w-4" /> {t(lang, "ติดต่อฝ่ายขาย", "Contact Sales")}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-gradient-accent text-white hover:opacity-90 shadow-glow"
          >
            <Link to="/contactus">
              <FileText className="mr-2 h-4 w-4" /> {t(lang, "ขอใบเสนอราคา", "Request Quote")}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
          >
            <Link to="/category/$slug" params={{ slug: "all-products" }}>
              <Package className="mr-2 h-4 w-4" /> {t(lang, "ดูสินค้า", "View Products")}{" "}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
