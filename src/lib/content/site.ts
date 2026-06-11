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
};

export type SiteArticleCategory = (typeof fallbackArticleCategories)[number] & {
  imageUrl?: string | null;
};

export type SiteBrandIntro = BrandIntro & {
  imageUrl?: string | null;
  logoUrl?: string | null;
  payload?: Record<string, unknown> | null;
};

export type SiteContent = {
  nav: NavItem[];
  brands: SiteBrand[];
  solutions: SiteSolution[];
  industries: SiteIndustry[];
  articleCategories: SiteArticleCategory[];
  brandIntrosByCategoryId: Record<string, SiteBrandIntro>;
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
      content_article_categories: { Row: ArticleCategoryRow };
      content_brand_category_intros: { Row: BrandIntroRow };
    };
  };
};

type LocalizedFallback = {
  descEn?: string;
  labelEn?: string;
  titleEn?: string;
};

const contentClient = supabase as unknown as SupabaseClient<ContentDatabase>;

export const fallbackSiteContent: SiteContent = {
  nav: fallbackNav,
  brands: fallbackBrands,
  solutions: fallbackSolutions,
  industries: fallbackIndustries,
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
    ...(dbByHref.get(normalizeNavHref(fallbackItem.href)) ?? {}),
    image: dbByHref.get(normalizeNavHref(fallbackItem.href))?.image || fallbackItem.image,
    desc: dbByHref.get(normalizeNavHref(fallbackItem.href))?.desc || fallbackItem.desc,
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
  if (!rows?.length) return fallbackIndustries;
  const rowsBySlug = new Map(rows.map((row) => [row.slug, row]));
  const mapped = fallbackIndustries.map((fallback) => {
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

  const fallbackSlugs = new Set(fallbackIndustries.map((industry) => industry.slug));
  const additions = rows
    .filter((row) => !fallbackSlugs.has(row.slug))
    .map((row) => {
      const fallback = fallbackIndustries.find((industry) => industry.slug === row.slug);
      return {
        slug: row.slug,
        title: row.title,
        titleEn: (fallback as LocalizedFallback | undefined)?.titleEn,
        icon: row.icon ?? fallback?.icon ?? "Building2",
        desc: row.description ?? fallback?.desc ?? "",
        descEn: (fallback as LocalizedFallback | undefined)?.descEn,
        imageUrl: imageUrlOrUndefined(row.image_url),
      };
    });
  return [...mapped, ...additions];
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

export async function loadSiteContent(): Promise<SiteContent> {
  try {
    const [
      navResult,
      brandsResult,
      solutionsResult,
      industriesResult,
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
      contentClient
        .from("content_industries")
        .select("slug,title,icon,description,image_url")
        .order("slug", { ascending: true }),
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
      articleCategoriesResult.error ??
      brandIntrosResult.error;
    if (firstError) throw firstError;

    const brands = mapBrands(brandsResult.data as BrandRow[] | null);
    return {
      nav: mapNav(navResult.data as NavRow[] | null),
      brands,
      solutions: mapSolutions(solutionsResult.data as SolutionRow[] | null),
      industries: mapIndustries(industriesResult.data as IndustryRow[] | null),
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
