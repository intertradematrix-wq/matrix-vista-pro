import type { SupabaseClient } from "@supabase/supabase-js";
import {
  products as fileProducts,
  productsByCategoryId as getFileProductsByCategoryId,
  type Product,
} from "@/data/products";
import { supabase } from "@/integrations/supabase/client";
import { CATEGORY_IDS_BY_SLUG, ensureUniqueProductSlugs } from "@/lib/seo-slugs";

type ContentDatabase = {
  public: {
    Tables: {
      content_products: {
        Row: {
          product_id: string;
          slug: string;
          name: string;
          image_url: string | null;
          price_text: string | null;
          source_url: string | null;
          brand: string;
          brand_slug: string;
          brand_category_id: string | null;
          description_text: string | null;
          description_html: string | null;
        };
      };
    };
  };
};

type ProductListContent = {
  products: Product[];
  source: "supabase" | "files";
  error?: unknown;
};

type ProductDetailContent = ProductListContent & {
  product: Product | undefined;
  relatedProducts: Product[];
};

const contentClient = supabase as unknown as SupabaseClient<ContentDatabase>;
const fileProductOrder = new Map(fileProducts.map((product, index) => [product.id, index]));

function mapProduct(row: ContentDatabase["public"]["Tables"]["content_products"]["Row"]): Product {
  return {
    id: row.product_id,
    slug: row.slug,
    name: row.name,
    image: row.image_url ?? "",
    price: row.price_text ?? "0.00",
    url: row.source_url ?? "",
    brand: row.brand,
    brandSlug: row.brand_slug,
    brandCategoryId: row.brand_category_id ?? "",
    descriptionText: row.description_text ?? undefined,
    descriptionHtml: row.description_html ?? undefined,
  };
}

function sortLikeFiles(products: Product[]) {
  return [...products].sort((a, b) => {
    const aIndex = fileProductOrder.get(a.id) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = fileProductOrder.get(b.id) ?? Number.MAX_SAFE_INTEGER;
    return aIndex - bIndex || a.id.localeCompare(b.id);
  });
}

function withSlugs(products: Product[]): Product[] {
  return ensureUniqueProductSlugs(products);
}

function fromFiles(products = fileProducts, error?: unknown): ProductListContent {
  return {
    products: withSlugs(products),
    source: "files",
    error,
  };
}

export function fallbackProductsByCategoryId(categoryId: string): ProductListContent {
  const resolvedId = CATEGORY_IDS_BY_SLUG[categoryId] ?? categoryId;
  return fromFiles(getFileProductsByCategoryId(resolvedId));
}

export async function loadProductListContent(): Promise<ProductListContent> {
  try {
    const { data, error } = await contentClient
      .from("content_products")
      .select(
        "product_id,slug,name,image_url,price_text,source_url,brand,brand_slug,brand_category_id,description_text,description_html",
      );

    if (error) throw error;

    const products = sortLikeFiles(data?.map(mapProduct) ?? []);
    if (products.length === 0) throw new Error("Supabase product snapshot is empty.");

    return {
      products,
      source: "supabase",
    };
  } catch (error) {
    console.warn("[content] Falling back to file-based product content.", error);
    return fromFiles(fileProducts, error);
  }
}

export async function loadProductsByCategoryContent(
  categorySlugOrId: string,
): Promise<ProductListContent> {
  const categoryId = CATEGORY_IDS_BY_SLUG[categorySlugOrId] ?? categorySlugOrId;
  const listContent = await loadProductListContent();
  const products =
    categoryId === "0" || !categoryId
      ? listContent.products
      : listContent.products.filter((product) => product.brandCategoryId === categoryId);

  return {
    ...listContent,
    products,
  };
}

export async function loadProductDetailContent(slugOrId: string): Promise<ProductDetailContent> {
  const listContent = await loadProductListContent();
  let product = listContent.products.find((item) => item.slug === slugOrId);

  if (!product) {
    product = listContent.products.find((item) => item.id === slugOrId);
  }

  if (!product && listContent.source === "supabase") {
    product = withSlugs(fileProducts).find(
      (item) => item.slug === slugOrId || item.id === slugOrId,
    );
  }

  const sourceProducts =
    product && listContent.products.some((item) => item.id === product.id)
      ? listContent.products
      : withSlugs(fileProducts);

  return {
    ...listContent,
    product,
    relatedProducts: product
      ? sourceProducts
          .filter(
            (item) => item.brandCategoryId === product.brandCategoryId && item.id !== product.id,
          )
          .slice(0, 4)
      : [],
  };
}
