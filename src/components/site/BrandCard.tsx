import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { brandImages } from "@/data/brand-images";
import { brandLogos } from "@/data/brand-logos";
import { useLanguage, t } from "@/components/i18n/LanguageProvider";

export function BrandCard({
  slug,
  name,
  category,
  desc,
  imageUrl,
  logoUrl,
}: {
  slug: string;
  name: string;
  category: string;
  desc: string;
  color: string;
  imageUrl?: string | null;
  logoUrl?: string | null;
}) {
  const { lang } = useLanguage();
  const img = imageUrl || brandImages[slug];
  const logo = logoUrl || brandLogos[slug];

  return (
    <Link
      to="/brands/$slug" params={{ slug }}
      className="group relative flex min-h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-colors duration-300 hover:border-accent/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-[#f4f8fb]">
        {img ? (
          <img
            src={img}
            alt={`${name} product visual`}
            loading="lazy"
            width={1280}
            height={768}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/28 via-transparent to-white/4" />

        <div className="absolute left-3 top-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-full bg-white/94 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-navy ring-1 ring-white/70 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="truncate">{category}</span>
        </div>

        <div className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center overflow-hidden rounded-lg bg-white/94 text-navy ring-1 ring-white/80 backdrop-blur-sm">
          {logo ? (
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-6 w-6 object-contain"
            />
          ) : (
            <span className="text-sm font-black">{name.charAt(0)}</span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-3 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-2xl font-black leading-none tracking-tight text-navy">
              {name}
            </h3>
            <span className="mt-2 block h-[2px] w-10 rounded-full bg-accent transition-all duration-300 group-hover:w-20" />
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">{desc}</p>

        <div className="mt-auto pt-4">
          <div className="mb-3 flex items-center gap-2 rounded-xl bg-[#f8fbfd] px-3 py-2 text-xs font-semibold text-navy/75">
            <BadgeCheck className="h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
            <span className="line-clamp-1">
              {t(lang, "ตัวแทนจำหน่ายทางการ", "Authorized distributor")}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-border pt-3">
            <span className="text-xs font-semibold text-muted-foreground">
              {t(lang, "พร้อมให้คำปรึกษา", "Sales support")}
            </span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-bold text-accent">
              {t(lang, "ดูสินค้า", "View products")}
              <span className="grid h-7 w-7 place-items-center rounded-full bg-cyan/12 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
