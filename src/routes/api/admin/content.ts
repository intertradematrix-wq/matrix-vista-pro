import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import type { Database } from "@/integrations/supabase/types";

type ContentKind =
  | "products"
  | "articles"
  | "articleCategories"
  | "brands"
  | "brandIntros"
  | "solutions"
  | "industries"
  | "navItems";

type ContentConfig = {
  table: string;
  key: string;
  select: string;
  order: string;
  fields: string[];
};

const CONTENT_CONFIG: Record<ContentKind, ContentConfig> = {
  products: {
    table: "content_products",
    key: "product_id",
    select:
      "product_id,name,image_url,price_text,source_url,brand,brand_slug,brand_category_id,description_text,description_html,payload,updated_at",
    order: "product_id",
    fields: [
      "name",
      "image_url",
      "price_text",
      "source_url",
      "brand",
      "brand_slug",
      "brand_category_id",
      "description_text",
      "description_html",
      "payload",
    ],
  },
  articles: {
    table: "content_articles",
    key: "slug",
    select:
      "slug,article_id,title,category,excerpt,published_date,read_min,canonical_url,cover_image_url,blocks,payload,updated_at",
    order: "article_id",
    fields: [
      "title",
      "category",
      "excerpt",
      "published_date",
      "read_min",
      "canonical_url",
      "cover_image_url",
      "blocks",
      "payload",
    ],
  },
  articleCategories: {
    table: "content_article_categories",
    key: "slug",
    select: "slug,label,image_url,payload,updated_at",
    order: "slug",
    fields: ["label", "image_url", "payload"],
  },
  brands: {
    table: "content_brands",
    key: "slug",
    select: "slug,name,category,description,color,image_url,logo_url,accent,payload,updated_at",
    order: "slug",
    fields: ["name", "category", "description", "color", "image_url", "logo_url", "accent", "payload"],
  },
  brandIntros: {
    table: "content_brand_category_intros",
    key: "category_id",
    select: "category_id,brand_slug,tagline,description,highlights,best_for,origin,payload,updated_at",
    order: "category_id",
    fields: ["brand_slug", "tagline", "description", "highlights", "best_for", "origin", "payload"],
  },
  solutions: {
    table: "content_solutions",
    key: "slug",
    select: "slug,title,icon,description,image_url,payload,updated_at",
    order: "slug",
    fields: ["title", "icon", "description", "image_url", "payload"],
  },
  industries: {
    table: "content_industries",
    key: "slug",
    select: "slug,title,icon,description,image_url,payload,updated_at",
    order: "slug",
    fields: ["title", "icon", "description", "image_url", "payload"],
  },
  navItems: {
    table: "content_nav_items",
    key: "id",
    select: "id,parent_id,depth,sort_order,label,href,description,image_url,payload,updated_at",
    order: "sort_order",
    fields: ["parent_id", "depth", "sort_order", "label", "href", "description", "image_url", "payload"],
  },
};

const UpdateSchema = z.object({
  kind: z.enum([
    "products",
    "articles",
    "articleCategories",
    "brands",
    "brandIntros",
    "solutions",
    "industries",
    "navItems",
  ]),
  id: z.string().min(1),
  values: z.record(z.unknown()),
});

function jsonError(message: string, status: number, details?: unknown) {
  return Response.json({ error: message, details }, { status });
}

function getAdminEmails() {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

function normalizeValue(value: unknown) {
  if (typeof value !== "string") return value;
  const trimmed = value.trim();
  return trimmed === "" ? null : trimmed;
}

async function requireAdmin(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return { response: jsonError("Unauthorized: missing bearer token", 401) };
  }

  const adminEmails = getAdminEmails();
  if (adminEmails.length === 0) {
    return {
      response: jsonError(
        "Admin access is not configured. Set ADMIN_EMAILS to a comma-separated allow-list.",
        403,
      ),
    };
  }

  const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const SUPABASE_PUBLISHABLE_KEY =
    process.env.SUPABASE_PUBLISHABLE_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    return { response: jsonError("Supabase auth environment is not configured", 500) };
  }

  const token = authHeader.replace("Bearer ", "");
  const authClient = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { Authorization: `Bearer ${token}` } },
  });

  const { data, error } = await authClient.auth.getUser(token);
  const email = data.user?.email?.toLowerCase();
  if (error || !email) {
    return { response: jsonError("Unauthorized: invalid session", 401) };
  }

  if (!adminEmails.includes(email)) {
    return { response: jsonError("Forbidden: this user is not an admin", 403) };
  }

  return { email };
}

async function loadKind(config: ContentConfig) {
  const result = await supabaseAdmin.from(config.table as any).select(config.select).order(config.order, {
    ascending: true,
  });

  // If the query failed (e.g. missing column like image_url), retry without optional columns
  if (result.error && config.select.includes("image_url")) {
    const fallbackSelect = config.select
      .split(",")
      .filter((col) => col.trim() !== "image_url")
      .join(",");
    const fallbackResult = await supabaseAdmin
      .from(config.table as any)
      .select(fallbackSelect)
      .order(config.order, { ascending: true });

    if (!fallbackResult.error) {
      console.warn(`[admin] Column image_url missing from ${config.table}, loaded without it`);
      return fallbackResult;
    }
  }

  return result;
}


export const Route = createFileRoute("/api/admin/content")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const admin = await requireAdmin(request);
        if ("response" in admin) return admin.response;

        const entries = await Promise.all(
          Object.entries(CONTENT_CONFIG).map(async ([kind, config]) => {
            const result = await loadKind(config);
            return [kind, result] as const;
          }),
        );

        const payload: Record<string, unknown> = { ok: true, userEmail: admin.email };
        for (const [kind, result] of entries) {
          if (result.error) return jsonError(`Failed to load ${kind}`, 500, result.error);
          payload[kind] = result.data ?? [];
        }

        return Response.json(payload);
      },
      POST: async ({ request }) => {
        const admin = await requireAdmin(request);
        if ("response" in admin) return admin.response;

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return jsonError("Invalid JSON body", 400);
        }

        const parsed = UpdateSchema.safeParse(body);
        if (!parsed.success) return jsonError("Invalid content payload", 400, parsed.error.flatten());

        const config = CONTENT_CONFIG[parsed.data.kind];
        const values = Object.fromEntries(
          Object.entries(parsed.data.values)
            .filter(([field]) => config.fields.includes(field))
            .map(([field, value]) => [field, normalizeValue(value)]),
        );

        if (Object.keys(values).length === 0) {
          return jsonError("No supported fields to update", 400);
        }

        const { data, error } = await supabaseAdmin
          .from(config.table as any)
          .update(values as any)
          .eq(config.key, parsed.data.id)
          .select(config.select)
          .single();

        if (error) {
          // Retry without image_url if the column doesn't exist yet
          if (config.select.includes("image_url")) {
            const fallbackValues = Object.fromEntries(
              Object.entries(values).filter(([field]) => field !== "image_url"),
            );
            const fallbackSelect = config.select
              .split(",")
              .filter((col) => col.trim() !== "image_url")
              .join(",");

            if (Object.keys(fallbackValues).length > 0) {
              const retry = await supabaseAdmin
                .from(config.table as any)
                .update(fallbackValues as any)
                .eq(config.key, parsed.data.id)
                .select(fallbackSelect)
                .single();

              if (!retry.error) {
                return Response.json({ ok: true, kind: parsed.data.kind, item: retry.data });
              }
            }
          }
          return jsonError(`Failed to update ${parsed.data.kind}`, 500, error);
        }
        return Response.json({ ok: true, kind: parsed.data.kind, item: data });
      },
    },
  },
});
