import type { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import {
  articleCategories as fallbackArticleCategories,
  brands as fallbackBrands,
  industries as fallbackIndustries,
  nav as fallbackNav,
  solutions as fallbackSolutions,
  type NavItem,
} from "@/data/site";
import {
  brandIntrosByCategoryId as fallbackBrandIntrosByCategoryId,
  type BrandIntro,
} from "@/data/brand-intros";
import { CATEGORY_SLUGS } from "@/lib/seo-slugs";

export type SiteBrand = (typeof fallbackBrands)[number] & {
  imageUrl?: string | null;
  logoUrl?: string | null;
  accent?: unknown;
};

export type SiteSolution = (typeof fallbackSolutions)[number] & {
  imageUrl?: string | null;
};

export type SiteIndustry = (typeof fallbackIndustries)[number] & {
  imageUrl?: string | null;
  showcaseImageUrl?: string | null;
  showOnBrands?: boolean;
  sortOrder?: number | null;
  cardTagTh?: string | null;
  cardTagEn?: string | null;
  metricValue?: string | null;
  metricLabelTh?: string | null;
  metricLabelEn?: string | null;
  linkUrl?: string | null;
};

export type SiteShowcaseSection = {
  eyebrowTh: string;
  eyebrowEn: string;
  titlePrefixTh: string;
  titlePrefixEn: string;
  titleHighlightTh: string;
  titleHighlightEn: string;
  descriptionPrefixTh: string;
  descriptionPrefixEn: string;
  descriptionHighlightTh: string;
  descriptionHighlightEn: string;
  descriptionSuffixTh: string;
  descriptionSuffixEn: string;
  isEnabled: boolean;
};

export type SiteArticleCategory = (typeof fallbackArticleCategories)[number] & {
  imageUrl?: string | null;
};

export type SiteBrandIntro = BrandIntro & {
  imageUrl?: string | null;
  logoUrl?: string | null;
  payload?: Record<string, unknown> | null;
};

export type SiteAboutUs = {
  introTitleTh: string;
  introTitleEn: string;
  introDescTh: string;
  introDescEn: string;
  storyP1Th: string;
  storyP1En: string;
  storyP2Th: string;
  storyP2En: string;
  storyP3Th: string;
  storyP3En: string;
  missionTh: string;
  missionEn: string;
  visionTh: string;
  visionEn: string;
  valuesTh: string;
  valuesEn: string;
  addressTh: string;
  addressEn: string;
  phone: string;
  email: string;
  website: string;
  facebook: string;
  mapUrl: string;
  statsPayload: any;
};

export type SiteContent = {
  nav: NavItem[];
  brands: SiteBrand[];
  solutions: SiteSolution[];
  industries: SiteIndustry[];
  industryShowcase: SiteShowcaseSection;
  articleCategories: SiteArticleCategory[];
  brandIntrosByCategoryId: Record<string, SiteBrandIntro>;
  aboutUs: SiteAboutUs | null;
  source: "files" | "supabase";
};

type NavRow = {
  id: string;
  parent_id: string | null;
  depth: number | null;
  sort_order: number | null;
  label: string;
  href: string;
  description: string | null;
  image_url: string | null;
};

type BrandRow = {
  slug: string;
  name: string;
  category: string | null;
  description: string | null;
  color: string | null;
  image_url: string | null;
  logo_url: string | null;
  accent: unknown;
};

type BrandIntroRow = {
  category_id: string;
  brand_slug: string;
  tagline: string | null;
  description: string | null;
  highlights: unknown;
  best_for: unknown;
  origin: string | null;
  payload: unknown;
};

type SolutionRow = {
  slug: string;
  title: string;
  icon: string | null;
  description: string | null;
  image_url: string | null;
};

type IndustryRow = {
  slug: string;
  title: string;
  icon: string | null;
  description: string | null;
  image_url?: string | null;
  showcase_image_url?: string | null;
  show_on_brands?: boolean | null;
  sort_order?: number | null;
  card_tag_th?: string | null;
  card_tag_en?: string | null;
  metric_value?: string | null;
  metric_label_th?: string | null;
  metric_label_en?: string | null;
  link_url?: string | null;
};

type SiteSectionRow = {
  section_key: string;
  eyebrow_th: string | null;
  eyebrow_en: string | null;
  title_prefix_th: string | null;
  title_prefix_en: string | null;
  title_highlight_th: string | null;
  title_highlight_en: string | null;
  description_prefix_th: string | null;
  description_prefix_en: string | null;
  description_highlight_th: string | null;
  description_highlight_en: string | null;
  description_suffix_th: string | null;
  description_suffix_en: string | null;
  is_enabled: boolean | null;
};

type AboutUsRow = {
  id: string;
  intro_title_th: string | null;
  intro_title_en: string | null;
  intro_desc_th: string | null;
  intro_desc_en: string | null;
  story_p1_th: string | null;
  story_p1_en: string | null;
  story_p2_th: string | null;
  story_p2_en: string | null;
  story_p3_th: string | null;
  story_p3_en: string | null;
  mission_th: string | null;
  mission_en: string | null;
  vision_th: string | null;
  vision_en: string | null;
  values_th: string | null;
  values_en: string | null;
  address_th: string | null;
  address_en: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  facebook: string | null;
  map_url: string | null;
  stats_payload: any;
};

type ArticleCategoryRow = {
  slug: string;
  label: string;
  image_url: string | null;
};

type ContentDatabase = {
  public: {
    Tables: {
      content_nav_items: { Row: NavRow };
      content_brands: { Row: BrandRow };
      content_solutions: { Row: SolutionRow };
      content_industries: { Row: IndustryRow };
      content_site_sections: { Row: SiteSectionRow };
      content_article_categories: { Row: ArticleCategoryRow };
      content_brand_category_intros: { Row: BrandIntroRow };
      content_about_us: { Row: AboutUsRow };
    };
  };
};

type LocalizedFallback = {
  descEn?: string;
  labelEn?: string;
  titleEn?: string;
};

const contentClient = supabase as unknown as SupabaseClient<ContentDatabase>;

const fallbackIndustryShowcase: SiteShowcaseSection = {
  eyebrowTh: "กลุ่มลูกค้าและการใช้งาน",
  eyebrowEn: "Industry Use Cases",
  titlePrefixTh: "ออกแบบ",
  titlePrefixEn: "Designed ",
  titleHighlightTh: "เพื่อทุกประเภทองค์กร",
  titleHighlightEn: "for every kind of organization",
  descriptionPrefixTh: "ประสบการณ์จริงจากการติดตั้งกว่า ",
  descriptionPrefixEn: "Real-world experience from over ",
  descriptionHighlightTh: "500+ โปรเจ็ค",
  descriptionHighlightEn: "500+ projects",
  descriptionSuffixTh: " ครอบคลุมทุกอุตสาหกรรม",
  descriptionSuffixEn: " across every industry",
  isEnabled: true,
};

const industryCardFallbacks: Record<
  string,
  {
    sortOrder: number;
    cardTagTh: string;
    cardTagEn: string;
    metricValue: string;
    metricLabelTh: string;
    metricLabelEn: string;
  }
> = {
  education: {
    sortOrder: 10,
    cardTagTh: "Smart Classroom",
    cardTagEn: "Smart Classroom",
    metricValue: "120+",
    metricLabelTh: "ห้องเรียน",
    metricLabelEn: "Classrooms",
  },
  hotel: {
    sortOrder: 20,
    cardTagTh: "Ballroom & MICE",
    cardTagEn: "Ballroom & MICE",
    metricValue: "60+",
    metricLabelTh: "โรงแรม",
    metricLabelEn: "Hotels",
  },
  corporate: {
    sortOrder: 30,
    cardTagTh: "Hybrid Meeting",
    cardTagEn: "Hybrid Meeting",
    metricValue: "200+",
    metricLabelTh: "องค์กร",
    metricLabelEn: "Enterprises",
  },
  government: {
    sortOrder: 40,
    cardTagTh: "Public Sector",
    cardTagEn: "Public Sector",
    metricValue: "40+",
    metricLabelTh: "หน่วยงาน",
    metricLabelEn: "Agencies",
  },
  hospital: {
    sortOrder: 50,
    cardTagTh: "Healthcare",
    cardTagEn: "Healthcare",
    metricValue: "25+",
    metricLabelTh: "โรงพยาบาล",
    metricLabelEn: "Hospitals",
  },
  "video-conference": {
    sortOrder: 60,
    cardTagTh: "Video Conference",
    cardTagEn: "Video Conference",
    metricValue: "300+",
    metricLabelTh: "ห้องประชุม",
    metricLabelEn: "Meeting Rooms",
  },
};

function withIndustryCardFallbacks(
  industry: (typeof fallbackIndustries)[number] & { imageUrl?: string | null },
  row?: IndustryRow,
  index: number = 0,
): SiteIndustry {
  const fallback = industryCardFallbacks[industry.slug];
  return {
    ...industry,
    showOnBrands: row?.show_on_brands ?? true,
    sortOrder: row?.sort_order ?? fallback?.sortOrder ?? (index + 1) * 10,
    cardTagTh: row?.card_tag_th ?? fallback?.cardTagTh ?? "Solution",
    cardTagEn: row?.card_tag_en ?? fallback?.cardTagEn ?? "Solution",
    metricValue: row?.metric_value ?? fallback?.metricValue ?? "-",
    metricLabelTh: row?.metric_label_th ?? fallback?.metricLabelTh ?? "",
    metricLabelEn: row?.metric_label_en ?? fallback?.metricLabelEn ?? "",
    showcaseImageUrl: imageUrlOrUndefined(row?.showcase_image_url) ?? null,
    linkUrl: row?.link_url?.trim() || null,
  };
}

export const fallbackSiteContent: SiteContent = {
  nav: fallbackNav,
  brands: fallbackBrands,
  solutions: fallbackSolutions,
  industries: fallbackIndustries.map((industry, index) =>
    withIndustryCardFallbacks(industry, undefined, index),
  ),
  industryShowcase: fallbackIndustryShowcase,
  articleCategories: fallbackArticleCategories,
  brandIntrosByCategoryId: fallbackBrandIntrosByCategoryId,
  source: "files",
};

function asStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function asProductCategories(value: unknown): BrandIntro["productCategories"] {
  if (!value || typeof value !== "object" || !("productCategories" in value)) return undefined;
  const productCategories = (value as { productCategories?: unknown }).productCategories;
  if (!Array.isArray(productCategories)) return undefined;

  return productCategories
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const maybe = item as { name?: unknown; desc?: unknown };
      if (typeof maybe.name !== "string" || typeof maybe.desc !== "string") return null;
      return { name: maybe.name, desc: maybe.desc };
    })
    .filter((item): item is { name: string; desc: string } => item !== null);
}

function orderBySort<T extends { sort_order?: number | null; slug?: string; id?: string }>(
  rows: T[],
) {
  return [...rows].sort((a, b) => {
    const left = a.sort_order ?? Number.MAX_SAFE_INTEGER;
    const right = b.sort_order ?? Number.MAX_SAFE_INTEGER;
    if (left !== right) return left - right;
    return String(a.slug ?? a.id ?? "").localeCompare(String(b.slug ?? b.id ?? ""));
  });
}

function normalizeNavHref(href: string): string {
  const [path, suffix = ""] = href.split(/([?#].*)/, 2);
  const legacyCategoryMatch = path.match(/^\/category\/([^/]+)$/);
  if (!legacyCategoryMatch) return href;

  const slug = CATEGORY_SLUGS[legacyCategoryMatch[1]];
  return slug ? `/category/${slug}${suffix}` : href;
}

function imageUrlOrUndefined(value: string | null | undefined): string | undefined {
  const url = value?.trim();
  if (!url) return undefined;
  if (url.startsWith("@/") || url.startsWith("src/")) return undefined;
  if (/^(https?:\/\/|\/|data:image\/|blob:)/i.test(url)) return url;
  return undefined;
}

function normalizeNavItem<T extends { href: string; submenu?: Array<{ href: string }> }>(
  item: T,
): T {
  return {
    ...item,
    href: normalizeNavHref(item.href),
    submenu: item.submenu?.map((subItem) => ({
      ...subItem,
      href: normalizeNavHref(subItem.href),
    })),
  };
}

function dedupeNavItems(items: NavItem[]): NavItem[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = normalizeNavHref(item.href);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function mapNav(rows: NavRow[] | null | undefined): NavItem[] {
  if (!rows?.length) return fallbackNav;

  const sorted = orderBySort(rows);
  const childrenByParent = new Map<string, NavRow[]>();
  for (const row of sorted) {
    if (!row.parent_id) continue;
    const bucket = childrenByParent.get(row.parent_id) ?? [];
    bucket.push(row);
    childrenByParent.set(row.parent_id, bucket);
  }

  const topLevel = sorted.filter((row) => !row.parent_id);
  if (topLevel.length === 0) return fallbackNav;

  const dbNav = dedupeNavItems(
    topLevel.map((row) => {
      const submenu = (childrenByParent.get(row.id) ?? []).map((child) => ({
        label: child.label === "Projector" ? "Projection Screen" : child.label,
        href: normalizeNavHref(child.href),
        desc: child.description ?? undefined,
        image: imageUrlOrUndefined(child.image_url),
      }));
      return normalizeNavItem({
        label: row.label,
        href: normalizeNavHref(row.href),
        submenu: submenu.length > 0 && row.href !== "/brands" ? submenu : undefined,
      });
    }),
  );

  const dbByHref = new Map(dbNav.map((item) => [item.href, item]));
  const merged = fallbackNav.map((fallbackItem) => {
    const normalizedFallback = normalizeNavItem(fallbackItem);
    const dbItem = dbByHref.get(normalizedFallback.href);
    if (!dbItem) return fallbackItem;
    return {
      ...normalizedFallback,
      ...dbItem,
      submenu:
        dbItem.submenu && dbItem.submenu.length > 0
          ? mergeSubmenu(normalizedFallback.submenu, dbItem.submenu)
          : normalizedFallback.submenu,
    };
  });

  const fallbackHrefs = new Set(fallbackNav.map((item) => normalizeNavHref(item.href)));
  return dedupeNavItems([...merged, ...dbNav.filter((item) => !fallbackHrefs.has(item.href))]);
}

function mergeSubmenu(fallbackItems: NavItem["submenu"], dbItems: NonNullable<NavItem["submenu"]>) {
  const normalizedDbItems = dbItems.map(normalizeNavItem);
  const dbByHref = new Map(normalizedDbItems.map((item) => [item.href, item]));
  const merged = (fallbackItems ?? []).map((fallbackItem) => ({
    ...fallbackItem,
    href: normalizeNavHref(fallbackItem.href),
    ...((dbByHref.get(normalizeNavHref(fallbackItem.href)) as any) || {}),
    image: (dbByHref.get(normalizeNavHref(fallbackItem.href)) as any)?.image || fallbackItem.image,
    desc: (dbByHref.get(normalizeNavHref(fallbackItem.href)) as any)?.desc || fallbackItem.desc,
  }));
  const fallbackHrefs = new Set((fallbackItems ?? []).map((item) => normalizeNavHref(item.href)));
  return [...merged, ...normalizedDbItems.filter((item) => !fallbackHrefs.has(item.href))];
}

function mapBrands(rows: BrandRow[] | null | undefined): SiteBrand[] {
  if (!rows?.length) return fallbackBrands;
  const rowsBySlug = new Map(rows.map((row) => [row.slug, row]));
  const mapped = fallbackBrands.map((fallback) => {
    const row = rowsBySlug.get(fallback.slug);
    if (!row) return fallback;
    return {
      slug: row.slug,
      name: row.name || fallback.name,
      category: row.category || fallback.category,
      desc: row.description || fallback.desc,
      descEn: (fallback as LocalizedFallback).descEn,
      color: row.color || fallback.color,
      imageUrl: imageUrlOrUndefined(row.image_url),
      logoUrl: imageUrlOrUndefined(row.logo_url),
      accent: row.accent,
    };
  });

  const fallbackSlugs = new Set(fallbackBrands.map((brand) => brand.slug));
  const additions = rows
    .filter((row) => !fallbackSlugs.has(row.slug))
    .map((row) => {
      const fallback = fallbackBrands.find((brand) => brand.slug === row.slug);
      return {
        slug: row.slug,
        name: row.name,
        category: row.category ?? fallback?.category ?? "",
        desc: row.description ?? fallback?.desc ?? "",
        descEn: (fallback as LocalizedFallback | undefined)?.descEn,
        color: row.color ?? fallback?.color ?? "from-blue-500 to-cyan-500",
        imageUrl: imageUrlOrUndefined(row.image_url),
        logoUrl: imageUrlOrUndefined(row.logo_url),
        accent: row.accent,
      };
    });
  return [...mapped, ...additions];
}

function mapSolutions(rows: SolutionRow[] | null | undefined): SiteSolution[] {
  if (!rows?.length) return fallbackSolutions;
  const rowsBySlug = new Map(rows.map((row) => [row.slug, row]));
  const mapped = fallbackSolutions.map((fallback) => {
    const row = rowsBySlug.get(fallback.slug);
    if (!row) return fallback;
    return {
      slug: row.slug,
      title: row.title || fallback.title,
      titleEn: (fallback as LocalizedFallback).titleEn,
      icon: row.icon || fallback.icon,
      desc: row.description || fallback.desc,
      descEn: (fallback as LocalizedFallback).descEn,
      imageUrl: imageUrlOrUndefined(row.image_url),
    };
  });

  const fallbackSlugs = new Set(fallbackSolutions.map((solution) => solution.slug));
  const additions = rows
    .filter((row) => !fallbackSlugs.has(row.slug))
    .map((row) => {
      const fallback = fallbackSolutions.find((solution) => solution.slug === row.slug);
      return {
        slug: row.slug,
        title: row.title,
        titleEn: (fallback as LocalizedFallback | undefined)?.titleEn,
        icon: row.icon ?? fallback?.icon ?? "Monitor",
        desc: row.description ?? fallback?.desc ?? "",
        descEn: (fallback as LocalizedFallback | undefined)?.descEn,
        imageUrl: imageUrlOrUndefined(row.image_url),
      };
    });
  return [...mapped, ...additions];
}

function mapIndustries(rows: IndustryRow[] | null | undefined): SiteIndustry[] {
  if (!rows?.length) {
    return fallbackIndustries.map((industry, index) =>
      withIndustryCardFallbacks(industry, undefined, index),
    );
  }
  const rowsBySlug = new Map(rows.map((row) => [row.slug, row]));
  const mapped = fallbackIndustries.map((fallback, index) => {
    const row = rowsBySlug.get(fallback.slug);
    if (!row) return withIndustryCardFallbacks(fallback, undefined, index);
    return withIndustryCardFallbacks(
      {
        slug: row.slug,
        title: row.title || fallback.title,
        titleEn: (fallback as LocalizedFallback).titleEn,
        icon: row.icon || fallback.icon,
        desc: row.description || fallback.desc,
        descEn: (fallback as LocalizedFallback).descEn,
        imageUrl: imageUrlOrUndefined(row.image_url),
        showcaseImageUrl: imageUrlOrUndefined(row.showcase_image_url),
      },
      row,
      index,
    );
  });

  const fallbackSlugs = new Set(fallbackIndustries.map((industry) => industry.slug));
  const additions = rows
    .filter((row) => !fallbackSlugs.has(row.slug))
    .map((row, index) => {
      const fallback = fallbackIndustries.find((industry) => industry.slug === row.slug);
      return withIndustryCardFallbacks(
        {
          slug: row.slug,
          title: row.title,
          titleEn: (fallback as LocalizedFallback | undefined)?.titleEn,
          icon: row.icon ?? fallback?.icon ?? "Building2",
          desc: row.description ?? fallback?.desc ?? "",
          descEn: (fallback as LocalizedFallback | undefined)?.descEn,
          imageUrl: imageUrlOrUndefined(row.image_url),
          showcaseImageUrl: imageUrlOrUndefined(row.showcase_image_url),
        },
        row,
        fallbackIndustries.length + index,
      );
    });
  return [...mapped, ...additions];
}

function mapIndustryShowcase(rows: SiteSectionRow[] | null | undefined): SiteShowcaseSection {
  const row = rows?.find((item) => item.section_key === "industries_showcase");
  if (!row) return fallbackIndustryShowcase;

  return {
    eyebrowTh: row.eyebrow_th || fallbackIndustryShowcase.eyebrowTh,
    eyebrowEn: row.eyebrow_en || fallbackIndustryShowcase.eyebrowEn,
    titlePrefixTh: row.title_prefix_th || fallbackIndustryShowcase.titlePrefixTh,
    titlePrefixEn: row.title_prefix_en || fallbackIndustryShowcase.titlePrefixEn,
    titleHighlightTh: row.title_highlight_th || fallbackIndustryShowcase.titleHighlightTh,
    titleHighlightEn: row.title_highlight_en || fallbackIndustryShowcase.titleHighlightEn,
    descriptionPrefixTh:
      row.description_prefix_th || fallbackIndustryShowcase.descriptionPrefixTh,
    descriptionPrefixEn:
      row.description_prefix_en || fallbackIndustryShowcase.descriptionPrefixEn,
    descriptionHighlightTh:
      row.description_highlight_th || fallbackIndustryShowcase.descriptionHighlightTh,
    descriptionHighlightEn:
      row.description_highlight_en || fallbackIndustryShowcase.descriptionHighlightEn,
    descriptionSuffixTh:
      row.description_suffix_th || fallbackIndustryShowcase.descriptionSuffixTh,
    descriptionSuffixEn:
      row.description_suffix_en || fallbackIndustryShowcase.descriptionSuffixEn,
    isEnabled: row.is_enabled ?? fallbackIndustryShowcase.isEnabled,
  };
}

function mapArticleCategories(
  rows: ArticleCategoryRow[] | null | undefined,
): SiteArticleCategory[] {
  if (!rows?.length) return fallbackArticleCategories;
  const rowsBySlug = new Map(rows.map((row) => [row.slug, row]));
  const mapped = fallbackArticleCategories.map((fallback) => {
    const row = rowsBySlug.get(fallback.slug);
    return {
      slug: fallback.slug,
      label: row?.label || fallback.label,
      labelEn: (fallback as LocalizedFallback).labelEn,
      imageUrl: imageUrlOrUndefined(row?.image_url),
    };
  });
  const fallbackSlugs = new Set(fallbackArticleCategories.map((category) => category.slug));
  return [
    ...mapped,
    ...rows
      .filter((row) => !fallbackSlugs.has(row.slug))
      .map((row) => ({
        slug: row.slug,
        label: row.label,
        labelEn: row.label,
        imageUrl: imageUrlOrUndefined(row.image_url),
      })),
  ];
}

function mapBrandIntros(
  rows: BrandIntroRow[] | null | undefined,
  brands: SiteBrand[],
): Record<string, SiteBrandIntro> {
  if (!rows?.length) return fallbackBrandIntrosByCategoryId;

  const dbIntros = Object.fromEntries(
    rows.map((row) => {
      const fallback = fallbackBrandIntrosByCategoryId[row.category_id];
      const brand = brands.find((item) => item.slug === row.brand_slug);
      const payload =
        row.payload && typeof row.payload === "object"
          ? (row.payload as Record<string, unknown>)
          : null;

      return [
        row.category_id,
        {
          brandSlug: row.brand_slug,
          tagline: row.tagline ?? fallback?.tagline ?? "",
          description: row.description ?? fallback?.description ?? "",
          highlights: asStringArray(row.highlights).length
            ? asStringArray(row.highlights)
            : (fallback?.highlights ?? []),
          bestFor: asStringArray(row.best_for).length
            ? asStringArray(row.best_for)
            : (fallback?.bestFor ?? []),
          origin: row.origin ?? fallback?.origin,
          productCategories: asProductCategories(payload) ?? fallback?.productCategories,
          imageUrl: brand?.imageUrl,
          logoUrl: brand?.logoUrl,
          payload,
        },
      ];
    }),
  );

  return {
    ...fallbackBrandIntrosByCategoryId,
    ...dbIntros,
  };
}

async function loadIndustryRows() {
  const result = await contentClient
    .from("content_industries")
    .select(
      "slug,title,icon,description,image_url,showcase_image_url,show_on_brands,sort_order,card_tag_th,card_tag_en,metric_value,metric_label_th,metric_label_en,link_url",
    )
    .order("sort_order", { ascending: true });

  if (!result.error) return result;

  const fallbackResult = await contentClient
    .from("content_industries")
    .select(
      "slug,title,icon,description,image_url,show_on_brands,sort_order,card_tag_th,card_tag_en,metric_value,metric_label_th,metric_label_en,link_url",
    )
    .order("sort_order", { ascending: true });

  if (!fallbackResult.error) {
    console.warn("[content] Loaded industries without showcase_image_url fallback", result.error);
    return fallbackResult;
  }

  const legacyResult = await contentClient
    .from("content_industries")
    .select("slug,title,icon,description,image_url")
    .order("slug", { ascending: true });

  if (!legacyResult.error) {
    console.warn("[content] Loaded industries with legacy schema fallback", result.error);
    return legacyResult;
  }

  return result;
}

async function loadSiteSectionRows() {
  const result = await contentClient
    .from("content_site_sections")
    .select(
      "section_key,eyebrow_th,eyebrow_en,title_prefix_th,title_prefix_en,title_highlight_th,title_highlight_en,description_prefix_th,description_prefix_en,description_highlight_th,description_highlight_en,description_suffix_th,description_suffix_en,is_enabled",
    )
    .order("section_key", { ascending: true });

  if (!result.error) return result;

  console.warn("[content] Loaded site sections from file fallback", result.error);
  return { data: null, error: null };
}

export async function loadSiteContent(): Promise<SiteContent> {
  try {
    const [
      navResult,
      brandsResult,
      solutionsResult,
      industriesResult,
      siteSectionsResult,
      articleCategoriesResult,
      brandIntrosResult,
    ] = await Promise.all([
      contentClient
        .from("content_nav_items")
        .select("id,parent_id,depth,sort_order,label,href,description,image_url")
        .order("sort_order", { ascending: true }),
      contentClient
        .from("content_brands")
        .select("slug,name,category,description,color,image_url,logo_url,accent")
        .order("slug", { ascending: true }),
      contentClient
        .from("content_solutions")
        .select("slug,title,icon,description,image_url")
        .order("slug", { ascending: true }),
      loadIndustryRows(),
      loadSiteSectionRows(),
      contentClient
        .from("content_article_categories")
        .select("slug,label,image_url")
        .order("slug", { ascending: true }),
      contentClient
        .from("content_brand_category_intros")
        .select("category_id,brand_slug,tagline,description,highlights,best_for,origin,payload")
        .order("category_id", { ascending: true }),
    ]);

    const firstError =
      navResult.error ??
      brandsResult.error ??
      solutionsResult.error ??
      industriesResult.error ??
      siteSectionsResult.error ??
      articleCategoriesResult.error ??
      brandIntrosResult.error;
    if (firstError) throw firstError;

    const brands = mapBrands(brandsResult.data as BrandRow[] | null);
    return {
      nav: mapNav(navResult.data as NavRow[] | null),
      brands,
      solutions: mapSolutions(solutionsResult.data as SolutionRow[] | null),
      industries: mapIndustries(industriesResult.data as IndustryRow[] | null),
      industryShowcase: mapIndustryShowcase(siteSectionsResult.data as SiteSectionRow[] | null),
      articleCategories: mapArticleCategories(
        articleCategoriesResult.data as ArticleCategoryRow[] | null,
      ),
      brandIntrosByCategoryId: mapBrandIntros(
        brandIntrosResult.data as BrandIntroRow[] | null,
        brands,
      ),
      source: "supabase",
    };
  } catch (error) {
    console.warn("[content] Falling back to file-based site content", error);
    return fallbackSiteContent;
  }
}

export async function loadBrandDetailContent(slug: string): Promise<SiteBrand | undefined> {
  const content = await loadSiteContent();
  return content.brands.find((brand) => brand.slug === slug);
}

export async function loadIndustryDetailContent(slug: string): Promise<SiteIndustry | undefined> {
  const content = await loadSiteContent();
  return content.industries.find((industry) => industry.slug === slug);
}

export async function loadBrandIntroContent(
  categoryId: string,
): Promise<SiteBrandIntro | undefined> {
  const content = await loadSiteContent();
  return content.brandIntrosByCategoryId[categoryId];
}

function mapAboutUs(row: AboutUsRow): SiteAboutUs {
  return {
    introTitleTh: row.intro_title_th ?? "",
    introTitleEn: row.intro_title_en ?? "",
    introDescTh: row.intro_desc_th ?? "",
    introDescEn: row.intro_desc_en ?? "",
    storyP1Th: row.story_p1_th ?? "",
    storyP1En: row.story_p1_en ?? "",
    storyP2Th: row.story_p2_th ?? "",
    storyP2En: row.story_p2_en ?? "",
    storyP3Th: row.story_p3_th ?? "",
    storyP3En: row.story_p3_en ?? "",
    missionTh: row.mission_th ?? "",
    missionEn: row.mission_en ?? "",
    visionTh: row.vision_th ?? "",
    visionEn: row.vision_en ?? "",
    valuesTh: row.values_th ?? "",
    valuesEn: row.values_en ?? "",
    addressTh: row.address_th ?? "",
    addressEn: row.address_en ?? "",
    phone: row.phone ?? "",
    email: row.email ?? "",
    website: row.website ?? "",
    facebook: row.facebook ?? "",
    mapUrl: row.map_url ?? "",
    statsPayload: row.stats_payload,
  };
}
