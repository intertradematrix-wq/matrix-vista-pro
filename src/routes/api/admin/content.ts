import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import type { Database } from "@/integrations/supabase/types";
import { slugifyText } from "@/lib/seo-slugs";

type ContentKind =
  | "products"
  | "articles"
  | "articleCategories"
  | "brands"
  | "brandIntros"
  | "solutions"
  | "industries"
  | "navItems"
  | "contactSubmissions";

type ContentConfig = {
  table: string;
  key: string;
  select: string;
  order: string;
  fields: string[];
  requiredFields?: string[];
  nullableFields?: string[];
  numericFields?: string[];
  booleanFields?: string[];
  jsonFields?: Record<string, "array" | "object" | "any">;
  slugFields?: string[];
  uniqueFields?: string[];
  foreignKeys?: Array<{
    field: string;
    table: string;
    key: string;
    label: string;
  }>;
  allowCreate?: boolean;
};

const CONTENT_CONFIG: Record<ContentKind, ContentConfig> = {
  products: {
    table: "content_products",
    key: "product_id",
    select:
      "product_id,slug,name,image_url,price_text,source_url,brand,brand_slug,brand_category_id,description_text,description_html,payload,seo_title,seo_description,seo_keywords,og_title,og_description,og_image_url,seo_canonical_url,seo_no_index,updated_at",
    order: "product_id",
    fields: [
      "name",
      "slug",
      "image_url",
      "price_text",
      "source_url",
      "brand",
      "brand_slug",
      "brand_category_id",
      "description_text",
      "description_html",
      "payload",
      "seo_title",
      "seo_description",
      "seo_keywords",
      "og_title",
      "og_description",
      "og_image_url",
      "seo_canonical_url",
      "seo_no_index",
    ],
    requiredFields: ["name", "slug", "brand", "brand_slug"],
    nullableFields: [
      "image_url",
      "price_text",
      "source_url",
      "brand_category_id",
      "description_text",
      "description_html",
      "seo_title",
      "seo_description",
      "seo_keywords",
      "og_title",
      "og_description",
      "og_image_url",
      "seo_canonical_url",
    ],
    booleanFields: ["seo_no_index"],
    jsonFields: { payload: "object" },
    slugFields: ["slug"],
    uniqueFields: ["slug"],
    foreignKeys: [
      {
        field: "brand_slug",
        table: "content_brands",
        key: "slug",
        label: "Brand",
      },
    ],
  },
  articles: {
    table: "content_articles",
    key: "slug",
    select:
      "slug,article_id,title,category,excerpt,published_date,read_min,canonical_url,cover_image_url,content_html,blocks,payload,seo_title,seo_description,seo_keywords,og_title,og_description,og_image_url,seo_no_index,updated_at",
    order: "article_id",
    fields: [
      "article_id",
      "title",
      "category",
      "excerpt",
      "published_date",
      "read_min",
      "canonical_url",
      "cover_image_url",
      "content_html",
      "blocks",
      "payload",
      "seo_title",
      "seo_description",
      "seo_keywords",
      "og_title",
      "og_description",
      "og_image_url",
      "seo_no_index",
      "is_featured",
    ],
    requiredFields: ["title", "category", "excerpt"],
    nullableFields: [
      "published_date",
      "read_min",
      "canonical_url",
      "cover_image_url",
      "content_html",
      "seo_title",
      "seo_description",
      "seo_keywords",
      "og_title",
      "og_description",
      "og_image_url",
    ],
    numericFields: ["article_id", "read_min"],
    booleanFields: ["seo_no_index", "is_featured"],
    jsonFields: { blocks: "array", payload: "object" },
    uniqueFields: ["article_id"],
    foreignKeys: [
      {
        field: "category",
        table: "content_article_categories",
        key: "slug",
        label: "Article category",
      },
    ],
  },
  articleCategories: {
    table: "content_article_categories",
    key: "slug",
    select: "slug,label,image_url,payload,updated_at",
    order: "slug",
    fields: ["label", "image_url", "payload"],
    requiredFields: ["label"],
    nullableFields: ["image_url"],
    jsonFields: { payload: "object" },
  },
  brands: {
    table: "content_brands",
    key: "slug",
    select:
      "slug,name,category,description,color,image_url,logo_url,accent,payload,seo_title,seo_description,seo_keywords,og_title,og_description,og_image_url,seo_canonical_url,seo_no_index,updated_at",
    order: "slug",
    fields: [
      "name",
      "category",
      "description",
      "color",
      "image_url",
      "logo_url",
      "accent",
      "payload",
      "seo_title",
      "seo_description",
      "seo_keywords",
      "og_title",
      "og_description",
      "og_image_url",
      "seo_canonical_url",
      "seo_no_index",
    ],
    requiredFields: ["name", "category", "description"],
    nullableFields: [
      "color",
      "image_url",
      "logo_url",
      "seo_title",
      "seo_description",
      "seo_keywords",
      "og_title",
      "og_description",
      "og_image_url",
      "seo_canonical_url",
    ],
    booleanFields: ["seo_no_index"],
    jsonFields: { accent: "object", payload: "object" },
  },
  brandIntros: {
    table: "content_brand_category_intros",
    key: "category_id",
    select:
      "category_id,brand_slug,tagline,description,highlights,best_for,origin,payload,updated_at",
    order: "category_id",
    fields: ["brand_slug", "tagline", "description", "highlights", "best_for", "origin", "payload"],
    requiredFields: ["brand_slug", "tagline", "description"],
    nullableFields: ["origin"],
    jsonFields: { highlights: "array", best_for: "array", payload: "object" },
    foreignKeys: [
      {
        field: "brand_slug",
        table: "content_brands",
        key: "slug",
        label: "Brand",
      },
    ],
  },
  solutions: {
    table: "content_solutions",
    key: "slug",
    select:
      "slug,title,icon,description,image_url,payload,seo_title,seo_description,seo_keywords,og_title,og_description,og_image_url,seo_canonical_url,seo_no_index,updated_at",
    order: "slug",
    fields: [
      "title",
      "icon",
      "description",
      "image_url",
      "payload",
      "seo_title",
      "seo_description",
      "seo_keywords",
      "og_title",
      "og_description",
      "og_image_url",
      "seo_canonical_url",
      "seo_no_index",
    ],
    requiredFields: ["title", "description"],
    nullableFields: [
      "icon",
      "image_url",
      "seo_title",
      "seo_description",
      "seo_keywords",
      "og_title",
      "og_description",
      "og_image_url",
      "seo_canonical_url",
    ],
    booleanFields: ["seo_no_index"],
    jsonFields: { payload: "object" },
  },
  industries: {
    table: "content_industries",
    key: "slug",
    select:
      "slug,title,icon,description,image_url,payload,seo_title,seo_description,seo_keywords,og_title,og_description,og_image_url,seo_canonical_url,seo_no_index,updated_at",
    order: "slug",
    fields: [
      "title",
      "icon",
      "description",
      "image_url",
      "payload",
      "seo_title",
      "seo_description",
      "seo_keywords",
      "og_title",
      "og_description",
      "og_image_url",
      "seo_canonical_url",
      "seo_no_index",
    ],
    requiredFields: ["title", "description"],
    nullableFields: [
      "icon",
      "image_url",
      "seo_title",
      "seo_description",
      "seo_keywords",
      "og_title",
      "og_description",
      "og_image_url",
      "seo_canonical_url",
    ],
    booleanFields: ["seo_no_index"],
    jsonFields: { payload: "object" },
  },
  navItems: {
    table: "content_nav_items",
    key: "id",
    select: "id,parent_id,depth,sort_order,label,href,description,image_url,payload,updated_at",
    order: "sort_order",
    fields: [
      "parent_id",
      "depth",
      "sort_order",
      "label",
      "href",
      "description",
      "image_url",
      "payload",
    ],
    requiredFields: ["depth", "sort_order", "label", "href"],
    nullableFields: ["parent_id", "description", "image_url"],
    numericFields: ["depth", "sort_order"],
    jsonFields: { payload: "object" },
    foreignKeys: [
      {
        field: "parent_id",
        table: "content_nav_items",
        key: "id",
        label: "Parent navigation item",
      },
    ],
  },
  contactSubmissions: {
    table: "contact_submissions",
    key: "id",
    select: "id,name,company,email,phone,topic,message,created_at,is_read",
    order: "created_at",
    fields: [
      "id",
      "name",
      "company",
      "email",
      "phone",
      "topic",
      "message",
      "created_at",
      "is_read",
    ],
    requiredFields: ["name", "email", "phone"],
    nullableFields: ["company", "topic", "message"],
    booleanFields: ["is_read"],
    allowCreate: false,
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
    "contactSubmissions",
  ]),
  action: z.enum(["update", "create", "delete"]).optional().default("update"),
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

function tableName(config: ContentConfig) {
  return config.table as keyof Database["public"]["Tables"];
}

function normalizeId(config: ContentConfig, id: string) {
  const trimmed = id.trim();
  return config.key === "slug" ? slugifyText(trimmed, "") : trimmed;
}

function isPlainObject(value: unknown) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function fieldLabel(field: string) {
  return field
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function normalizeContentValues(config: ContentConfig, rawValues: Record<string, unknown>) {
  const values: Record<string, unknown> = {};

  for (const [field, value] of Object.entries(rawValues)) {
    if (!config.fields.includes(field)) continue;

    let nextValue = normalizeValue(value);
    if (config.slugFields?.includes(field) && typeof nextValue === "string") {
      nextValue = slugifyText(nextValue, "");
    }

    if (nextValue === null) {
      values[field] = null;
      continue;
    }

    if (config.numericFields?.includes(field)) {
      const numberValue =
        typeof nextValue === "number" ? nextValue : Number(String(nextValue ?? "").trim());
      if (!Number.isFinite(numberValue)) {
        return {
          error: jsonError(`${fieldLabel(field)} must be a valid number.`, 400),
          values,
        };
      }
      values[field] = numberValue;
      continue;
    }

    if (config.booleanFields?.includes(field)) {
      if (typeof nextValue === "boolean") {
        values[field] = nextValue;
      } else if (nextValue === "true" || nextValue === "false") {
        values[field] = nextValue === "true";
      } else {
        return {
          error: jsonError(`${fieldLabel(field)} must be true or false.`, 400),
          values,
        };
      }
      continue;
    }

    values[field] = nextValue;
  }

  for (const [field, shape] of Object.entries(config.jsonFields ?? {})) {
    if (!(field in values) || values[field] === null) continue;
    const value = values[field];
    const valid =
      shape === "any" ||
      (shape === "array" && Array.isArray(value)) ||
      (shape === "object" && isPlainObject(value));
    if (!valid) {
      return {
        error: jsonError(`${fieldLabel(field)} must be valid ${shape} JSON.`, 400),
        values,
      };
    }
  }

  return { values };
}

function validateRequiredFields(
  config: ContentConfig,
  id: string,
  values: Record<string, unknown>,
  action: "create" | "update",
) {
  if (!id) return jsonError("Primary key (ID/Slug) is required.", 400);

  for (const field of config.requiredFields ?? []) {
    if (action === "update" && !(field in values)) continue;
    const value = values[field];
    if (value === null || value === undefined || (typeof value === "string" && !value.trim())) {
      return jsonError(`${fieldLabel(field)} is required.`, 400);
    }
  }

  return null;
}

async function ensureItemExists(config: ContentConfig, id: string) {
  const { data, error } = await supabaseAdmin
    .from(tableName(config))
    .select(config.key)
    .eq(config.key, id)
    .maybeSingle();

  if (error) return jsonError("Failed to verify the item before saving.", 500, error);
  if (!data) return jsonError("This item no longer exists. Refresh and try again.", 404);
  return null;
}

async function ensureUniqueFields(
  config: ContentConfig,
  id: string,
  values: Record<string, unknown>,
  action: "create" | "update",
) {
  for (const field of config.uniqueFields ?? []) {
    if (!(field in values)) continue;
    const value = values[field];
    if (value === null || value === undefined || value === "") continue;

    let query = supabaseAdmin.from(tableName(config)).select(config.key).eq(field, value).limit(1);

    if (action === "update") query = query.neq(config.key, id);

    const { data, error } = await query.maybeSingle();
    if (error) return jsonError(`Failed to validate ${fieldLabel(field)}.`, 500, error);
    if (data) {
      return jsonError(
        `${fieldLabel(field)} is already in use. Choose a different value before saving.`,
        409,
      );
    }
  }

  return null;
}

async function ensureForeignKeys(config: ContentConfig, values: Record<string, unknown>) {
  for (const fk of config.foreignKeys ?? []) {
    const value = values[fk.field];
    if (value === null || value === undefined || value === "") continue;

    const { data, error } = await supabaseAdmin
      .from(fk.table as keyof Database["public"]["Tables"])
      .select(fk.key)
      .eq(fk.key, value)
      .maybeSingle();

    if (error) return jsonError(`Failed to validate ${fk.label}.`, 500, error);
    if (!data) {
      return jsonError(`${fk.label} "${String(value)}" does not exist.`, 400);
    }
  }

  return null;
}

async function hasColumn(config: ContentConfig, field: string) {
  const { error } = await supabaseAdmin
    .from(tableName(config))
    .select(field)
    .limit(1)
    .maybeSingle();

  return !error;
}

async function selectForWrite(config: ContentConfig, values: Record<string, unknown>) {
  if (!("image_url" in values) || (await hasColumn(config, "image_url"))) {
    return { values, select: config.select };
  }

  const fallbackValues = { ...values };
  delete fallbackValues.image_url;
  return {
    values: fallbackValues,
    select: config.select
      .split(",")
      .filter((column) => column.trim() !== "image_url")
      .join(","),
  };
}

async function executeWrite(
  config: ContentConfig,
  action: "create" | "update",
  id: string,
  values: Record<string, unknown>,
) {
  const write = await selectForWrite(config, values);
  const query = supabaseAdmin.from(tableName(config));

  if (action === "create") {
    return query
      .insert({ [config.key]: id, ...write.values })
      .select(write.select)
      .single();
  }

  return query.update(write.values).eq(config.key, id).select(write.select).single();
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
  const result = await supabaseAdmin
    .from(tableName(config))
    .select(config.select)
    .order(config.order, {
      ascending: true,
    });

  // If the query failed (e.g. missing column like image_url), retry without optional columns
  if (result.error && config.select.includes("image_url")) {
    const fallbackSelect = config.select
      .split(",")
      .filter((col) => col.trim() !== "image_url")
      .join(",");
    const fallbackResult = await supabaseAdmin
      .from(tableName(config))
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
        if (!parsed.success)
          return jsonError("Invalid content payload", 400, parsed.error.flatten());

        const config = CONTENT_CONFIG[parsed.data.kind];
        const action = parsed.data.action;
        const id = normalizeId(config, parsed.data.id);

        if (action === "delete") {
          if (!id) return jsonError("Primary key (ID/Slug) is required.", 400);
          const { error } = await supabaseAdmin.from(tableName(config)).delete().eq(config.key, id);

          if (error) return jsonError(`Failed to delete ${parsed.data.kind}`, 500, error);
          return Response.json({ ok: true, kind: parsed.data.kind, deletedId: id });
        }

        if (action === "create" && config.allowCreate === false) {
          return jsonError(`${parsed.data.kind} cannot be created from Content Management.`, 400);
        }

        const normalized = normalizeContentValues(config, parsed.data.values);
        if ("error" in normalized && normalized.error) return normalized.error;
        const values = normalized.values;

        if (Object.keys(values).length === 0) {
          return jsonError("No supported fields to update", 400);
        }

        const requiredError = validateRequiredFields(config, id, values, action);
        if (requiredError) return requiredError;

        if (action === "update") {
          const existsError = await ensureItemExists(config, id);
          if (existsError) return existsError;
        }

        const uniqueError = await ensureUniqueFields(config, id, values, action);
        if (uniqueError) return uniqueError;

        const fkError = await ensureForeignKeys(config, values);
        if (fkError) return fkError;

        if (action === "create" && parsed.data.kind === "articles" && !values.article_id) {
          const { data: maxIdData } = await supabaseAdmin
            .from("content_articles")
            .select("article_id")
            .order("article_id", { ascending: false })
            .limit(1)
            .maybeSingle();
          values.article_id = (maxIdData?.article_id || 0) + 1;
        }

        const result = await executeWrite(config, action, id, values);

        if (result.error) {
          if (result.error.code === "23505") {
            return jsonError(
              `A ${parsed.data.kind} item with this ID or slug already exists.`,
              409,
              result.error,
            );
          }

          if (result.error.code === "23503") {
            return jsonError(
              "A referenced item does not exist. Check linked category or brand.",
              400,
              result.error,
            );
          }

          if (result.error.code === "23502") {
            return jsonError("A required field is missing.", 400, result.error);
          }

          if (result.error.code === "PGRST116" && action === "update") {
            return jsonError(
              "This item no longer exists. Refresh and try again.",
              404,
              result.error,
            );
          }

          return jsonError(`Failed to ${action} ${parsed.data.kind}`, 500, result.error);
        }
        return Response.json({ ok: true, kind: parsed.data.kind, item: result.data });
      },
    },
  },
});
