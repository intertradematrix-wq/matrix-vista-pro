import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState, useRef } from "react";
import {
  ExternalLink,
  ImageIcon,
  Loader2,
  Lock,
  LogOut,
  Save,
  Search,
  Bold,
  Italic,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Link as LinkIcon,
  ChevronDown,
  ChevronRight,
  Globe,
  Share2,
  SearchCheck,
  EyeOff,
  Tags,
  Code2,
  AlertTriangle,
  Plus,
  Trash2,
} from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import LinkExtension from "@tiptap/extension-link";
import ImageExtension from "@tiptap/extension-image";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { articleImages } from "@/data/article-images";
import { brandImages } from "@/data/brand-images";
import { brandLogos } from "@/data/brand-logos";
import { solutionImages } from "@/data/solution-images";

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

type FieldType = "text" | "textarea" | "number" | "json" | "image" | "richtext" | "toggle";
type ContentItem = Record<string, unknown>;
type Draft = Record<string, string>;

type FieldConfig = {
  key: string;
  label: string;
  type?: FieldType;
  rows?: number;
  readOnly?: boolean;
  group?: string;
  placeholder?: string;
  maxLength?: number;
};

type ContentConfig = {
  label: string;
  description: string;
  key: string;
  title: string;
  subtitle: (item: ContentItem) => string;
  image?: (item: ContentItem) => string | null;
  href?: (item: ContentItem) => string | null;
  fields: FieldConfig[];
};

type AdminPayload = {
  ok: boolean;
  userEmail: string;
} & Record<ContentKind, ContentItem[]>;

type SaveState = "idle" | "saving" | "saved" | "error";

const CONTENT_CONFIG: Record<ContentKind, ContentConfig> = {
  products: {
    label: "Products",
    description: "Product cards and product detail pages",
    key: "product_id",
    title: "name",
    subtitle: (item) => `${text(item.brand) || "No brand"} · ${text(item.product_id)}`,
    image: (item) => text(item.image_url),
    href: (item) => `/product/${text(item.product_id)}`,
    fields: [
      { key: "product_id", label: "Product ID", readOnly: true },
      { key: "name", label: "Name" },
      { key: "image_url", label: "Image URL", type: "image" },
      { key: "price_text", label: "Price Text" },
      { key: "source_url", label: "Source URL" },
      { key: "brand", label: "Brand" },
      { key: "brand_slug", label: "Brand Slug" },
      { key: "brand_category_id", label: "Brand Category ID" },
      { key: "description_text", label: "Description Text", type: "textarea", rows: 5 },
      { key: "description_html", label: "Description HTML", type: "richtext" },
      { key: "payload", label: "Payload JSON", type: "json", rows: 8, group: "advanced" },
      {
        key: "seo_title",
        label: "SEO Title",
        group: "seo",
        placeholder: "ถ้าไม่กรอก จะใช้ชื่อสินค้าแทน",
        maxLength: 60,
      },
      {
        key: "seo_description",
        label: "Meta Description",
        type: "textarea",
        rows: 3,
        group: "seo",
        placeholder: "คำอธิบายสำหรับ Google Search (แนะนำ 150-160 ตัวอักษร)",
        maxLength: 160,
      },
      {
        key: "seo_keywords",
        label: "Keywords",
        group: "seo",
        placeholder: "คั่นด้วยเครื่องหมายจุลภาค เช่น projector, LED, display",
      },
      {
        key: "og_title",
        label: "OG Title",
        group: "seo",
        placeholder: "ถ้าไม่กรอก จะใช้ SEO Title แทน",
      },
      {
        key: "og_description",
        label: "OG Description",
        type: "textarea",
        rows: 3,
        group: "seo",
        placeholder: "คำอธิบายสำหรับ Facebook/Twitter share",
      },
      { key: "og_image_url", label: "OG Image", type: "image", group: "seo" },
      {
        key: "seo_canonical_url",
        label: "Canonical URL",
        group: "seo",
        placeholder: "ถ้าหน้านี้ซ้ำกับหน้าอื่น ใส่ URL หน้าหลัก",
      },
      { key: "seo_no_index", label: "ซ่อนจาก Google (No Index)", type: "toggle", group: "seo" },
    ],
  },
  articles: {
    label: "Articles",
    description: "Article list, cover image and article body blocks",
    key: "slug",
    title: "title",
    subtitle: (item) => `${text(item.category)} · ${text(item.slug)}`,
    image: (item) => text(item.cover_image_url) || firstImageFromBlocks(item.blocks),
    href: (item) => `/blog/${text(item.slug)}`,
    fields: [
      { key: "slug", label: "Slug", readOnly: true },
      { key: "article_id", label: "Article ID", readOnly: true },
      { key: "title", label: "Title" },
      { key: "category", label: "Category Slug" },
      { key: "excerpt", label: "Excerpt", type: "textarea", rows: 4 },
      { key: "published_date", label: "Published Date" },
      { key: "read_min", label: "Read Minutes", type: "number" },
      { key: "canonical_url", label: "Canonical URL" },
      { key: "cover_image_url", label: "Cover Image URL", type: "image" },
      { key: "content_html", label: "Article Content", type: "richtext" },
      { key: "blocks", label: "Legacy Blocks JSON", type: "json", rows: 8, group: "advanced" },
      { key: "payload", label: "Payload JSON", type: "json", rows: 8, group: "advanced" },
      {
        key: "seo_title",
        label: "SEO Title",
        group: "seo",
        placeholder: "ถ้าไม่กรอก จะใช้ Title แทน",
        maxLength: 60,
      },
      {
        key: "seo_description",
        label: "Meta Description",
        type: "textarea",
        rows: 3,
        group: "seo",
        placeholder: "คำอธิบายสำหรับ Google Search (แนะนำ 150-160 ตัวอักษร)",
        maxLength: 160,
      },
      {
        key: "seo_keywords",
        label: "Keywords",
        group: "seo",
        placeholder: "คั่นด้วยเครื่องหมายจุลภาค",
      },
      {
        key: "og_title",
        label: "OG Title",
        group: "seo",
        placeholder: "ถ้าไม่กรอก จะใช้ SEO Title แทน",
      },
      {
        key: "og_description",
        label: "OG Description",
        type: "textarea",
        rows: 3,
        group: "seo",
        placeholder: "คำอธิบายสำหรับ Facebook/Twitter share",
      },
      { key: "og_image_url", label: "OG Image", type: "image", group: "seo" },
      { key: "seo_no_index", label: "ซ่อนจาก Google (No Index)", type: "toggle", group: "seo" },
    ],
  },
  articleCategories: {
    label: "Article Categories",
    description: "Blog category labels and cover imagery",
    key: "slug",
    title: "label",
    subtitle: (item) => text(item.slug),
    image: (item) => text(item.image_url),
    href: () => "/blog",
    fields: [
      { key: "slug", label: "Slug", readOnly: true },
      { key: "label", label: "Label" },
      { key: "image_url", label: "Image URL", type: "image" },
      { key: "payload", label: "Payload JSON", type: "json", rows: 10, group: "advanced" },
    ],
  },
  brands: {
    label: "Brands",
    description: "Brand landing cards, logos and color accents",
    key: "slug",
    title: "name",
    subtitle: (item) => `${text(item.category)} · ${text(item.slug)}`,
    image: (item) => text(item.logo_url) || text(item.image_url),
    href: (item) => `/brands/${text(item.slug)}`,
    fields: [
      { key: "slug", label: "Slug", readOnly: true },
      { key: "name", label: "Name" },
      { key: "category", label: "Category" },
      { key: "description", label: "Description", type: "textarea", rows: 5 },
      { key: "color", label: "Color" },
      { key: "image_url", label: "Image URL", type: "image" },
      { key: "logo_url", label: "Logo URL", type: "image" },
      { key: "accent", label: "Accent JSON", type: "json", rows: 8, group: "advanced" },
      { key: "payload", label: "Payload JSON", type: "json", rows: 8, group: "advanced" },
      {
        key: "seo_title",
        label: "SEO Title",
        group: "seo",
        placeholder: "ถ้าไม่กรอก จะใช้ชื่อแบรนด์แทน",
        maxLength: 60,
      },
      {
        key: "seo_description",
        label: "Meta Description",
        type: "textarea",
        rows: 3,
        group: "seo",
        placeholder: "คำอธิบายสำหรับ Google Search (แนะนำ 150-160 ตัวอักษร)",
        maxLength: 160,
      },
      {
        key: "seo_keywords",
        label: "Keywords",
        group: "seo",
        placeholder: "คั่นด้วยเครื่องหมายจุลภาค",
      },
      {
        key: "og_title",
        label: "OG Title",
        group: "seo",
        placeholder: "ถ้าไม่กรอก จะใช้ SEO Title แทน",
      },
      {
        key: "og_description",
        label: "OG Description",
        type: "textarea",
        rows: 3,
        group: "seo",
        placeholder: "คำอธิบายสำหรับ Facebook/Twitter share",
      },
      { key: "og_image_url", label: "OG Image", type: "image", group: "seo" },
      {
        key: "seo_canonical_url",
        label: "Canonical URL",
        group: "seo",
        placeholder: "ถ้าหน้านี้ซ้ำกับหน้าอื่น",
      },
      { key: "seo_no_index", label: "ซ่อนจาก Google (No Index)", type: "toggle", group: "seo" },
    ],
  },
  brandIntros: {
    label: "Brand Intros",
    description: "Category intro text, highlights and best-for lists",
    key: "category_id",
    title: "tagline",
    subtitle: (item) => `${text(item.brand_slug)} · ${text(item.category_id)}`,
    href: (item) => `/category/${text(item.category_id)}`,
    fields: [
      { key: "category_id", label: "Category ID", readOnly: true },
      { key: "brand_slug", label: "Brand Slug" },
      { key: "tagline", label: "Tagline" },
      { key: "description", label: "Description", type: "textarea", rows: 5 },
      { key: "highlights", label: "Highlights JSON", type: "json", rows: 8, group: "advanced" },
      { key: "best_for", label: "Best For JSON", type: "json", rows: 8, group: "advanced" },
      { key: "origin", label: "Origin" },
      { key: "payload", label: "Payload JSON", type: "json", rows: 8, group: "advanced" },
    ],
  },
  solutions: {
    label: "Solutions",
    description: "Solution cards and navigation entries",
    key: "slug",
    title: "title",
    subtitle: (item) => text(item.slug),
    image: (item) => text(item.image_url),
    href: (item) => `/${text(item.slug)}`,
    fields: [
      { key: "slug", label: "Slug", readOnly: true },
      { key: "title", label: "Title" },
      { key: "icon", label: "Icon" },
      { key: "description", label: "Description", type: "textarea", rows: 5 },
      { key: "image_url", label: "Image URL", type: "image" },
      { key: "payload", label: "Payload JSON", type: "json", rows: 10, group: "advanced" },
      {
        key: "seo_title",
        label: "SEO Title",
        group: "seo",
        placeholder: "ถ้าไม่กรอก จะใช้ Title แทน",
        maxLength: 60,
      },
      {
        key: "seo_description",
        label: "Meta Description",
        type: "textarea",
        rows: 3,
        group: "seo",
        placeholder: "คำอธิบายสำหรับ Google Search",
        maxLength: 160,
      },
      {
        key: "seo_keywords",
        label: "Keywords",
        group: "seo",
        placeholder: "คั่นด้วยเครื่องหมายจุลภาค",
      },
      {
        key: "og_title",
        label: "OG Title",
        group: "seo",
        placeholder: "ถ้าไม่กรอก จะใช้ SEO Title แทน",
      },
      { key: "og_description", label: "OG Description", type: "textarea", rows: 3, group: "seo" },
      { key: "og_image_url", label: "OG Image", type: "image", group: "seo" },
      { key: "seo_canonical_url", label: "Canonical URL", group: "seo" },
      { key: "seo_no_index", label: "ซ่อนจาก Google (No Index)", type: "toggle", group: "seo" },
    ],
  },
  industries: {
    label: "Industries",
    description: "Industry showcase cards and industry pages",
    key: "slug",
    title: "title",
    subtitle: (item) => text(item.slug),
    image: (item) => text(item.image_url),
    href: (item) => `/industry/${text(item.slug)}`,
    fields: [
      { key: "slug", label: "Slug", readOnly: true },
      { key: "title", label: "Title" },
      { key: "icon", label: "Icon" },
      { key: "description", label: "Description", type: "textarea", rows: 5 },
      { key: "image_url", label: "Image URL", type: "image" },
      { key: "payload", label: "Payload JSON", type: "json", rows: 12, group: "advanced" },
      {
        key: "seo_title",
        label: "SEO Title",
        group: "seo",
        placeholder: "ถ้าไม่กรอก จะใช้ Title แทน",
        maxLength: 60,
      },
      {
        key: "seo_description",
        label: "Meta Description",
        type: "textarea",
        rows: 3,
        group: "seo",
        placeholder: "คำอธิบายสำหรับ Google Search",
        maxLength: 160,
      },
      {
        key: "seo_keywords",
        label: "Keywords",
        group: "seo",
        placeholder: "คั่นด้วยเครื่องหมายจุลภาค",
      },
      {
        key: "og_title",
        label: "OG Title",
        group: "seo",
        placeholder: "ถ้าไม่กรอก จะใช้ SEO Title แทน",
      },
      { key: "og_description", label: "OG Description", type: "textarea", rows: 3, group: "seo" },
      { key: "og_image_url", label: "OG Image", type: "image", group: "seo" },
      { key: "seo_canonical_url", label: "Canonical URL", group: "seo" },
      { key: "seo_no_index", label: "ซ่อนจาก Google (No Index)", type: "toggle", group: "seo" },
    ],
  },
  navItems: {
    label: "Navigation",
    description: "Header mega-menu links, descriptions and images",
    key: "id",
    title: "label",
    subtitle: (item) => `${text(item.href)} · depth ${text(item.depth)}`,
    image: (item) => text(item.image_url),
    href: (item) => text(item.href),
    fields: [
      { key: "id", label: "ID", readOnly: true },
      { key: "parent_id", label: "Parent ID" },
      { key: "depth", label: "Depth", type: "number" },
      { key: "sort_order", label: "Sort Order", type: "number" },
      { key: "label", label: "Label" },
      { key: "href", label: "Href" },
      { key: "description", label: "Description", type: "textarea", rows: 4 },
      { key: "image_url", label: "Image URL", type: "image" },
      { key: "payload", label: "Payload JSON", type: "json", rows: 8, group: "advanced" },
    ],
  },
  contactSubmissions: {
    label: "Contact Submissions",
    description: "Inquiries from the Contact Us page",
    key: "id",
    title: "name",
    subtitle: (item) => {
      const dateStr = item.created_at
        ? new Date(item.created_at as string).toLocaleString("th-TH", { timeZone: "Asia/Bangkok" })
        : "";
      return `${dateStr ? `[${dateStr}] ` : ""}${item.topic || "No Topic"} · ${item.email}`;
    },
    fields: [
      { key: "id", label: "Submission ID", readOnly: true },
      { key: "created_at", label: "Submitted At", readOnly: true },
      { key: "name", label: "Name", readOnly: true },
      { key: "company", label: "Company", readOnly: true },
      { key: "email", label: "Email", readOnly: true },
      { key: "phone", label: "Phone", readOnly: true },
      { key: "topic", label: "Topic", readOnly: true },
      { key: "message", label: "Message", type: "textarea", rows: 6, readOnly: true },
      { key: "is_read", label: "Mark as Read", type: "toggle" },
    ],
  },
};

const CONTENT_KINDS = Object.keys(CONTENT_CONFIG) as ContentKind[];

function blocksToHtml(blocks: unknown): string {
  if (!Array.isArray(blocks)) return "";
  return blocks
    .map((b) => {
      if (!b || typeof b !== "object") return "";
      if (b.t === "img" && b.src) return `<img src="${b.src}" />`;
      if (b.t === "h2" && b.text) return `<h2>${b.text}</h2>`;
      if (b.t === "h3" && b.text) return `<h3>${b.text}</h3>`;
      if (b.t === "li" && b.text) return `<ul><li>${b.text}</li></ul>`;
      if (b.text) return `<p>${b.text}</p>`;
      return "";
    })
    .join("");
}

export const Route = createFileRoute("/admin/")({
  component: AdminPage,
});

function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [adminEmail, setAdminEmail] = useState<string | null>(null);
  const [content, setContent] = useState<Partial<Record<ContentKind, ContentItem[]>>>({});
  const [activeKind, setActiveKind] = useState<ContentKind>("products");
  const [selectedIds, setSelectedIds] = useState<Partial<Record<ContentKind, string>>>({});
  const [draft, setDraft] = useState<Draft>({});
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [isCreating, setIsCreating] = useState(false);

  const config = CONTENT_CONFIG[activeKind];
  const items = content[activeKind] ?? [];
  const selectedId = selectedIds[activeKind] ?? "";
  const foundItem = items.find((item) => text(item[config.key]) === selectedId);
  const selectedItem = isCreating
    ? ({ [config.key]: selectedId } as unknown as ContentItem)
    : (foundItem ?? items[0]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }: any) => {
      setSessionToken(data.session?.access_token ?? null);
      setLoading(false);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setSessionToken(session?.access_token ?? null);
    });

    return () => subscription.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!sessionToken) {
      setContent({});
      setAdminEmail(null);
      return;
    }
    void loadAdminContent(sessionToken);
  }, [sessionToken]);

  useEffect(() => {
    if (!selectedItem) {
      setDraft({});
      return;
    }

    if (isCreating) {
      // Draft is already initialized by onAddNew, don't overwrite it here
      return;
    }

    const nextId = text(selectedItem[config.key]);
    if (!selectedId) setSelectedIds((current) => ({ ...current, [activeKind]: nextId }));

    const initialDraft = toDraft(selectedItem, config.fields);

    // Auto-migrate legacy blocks to content_html for articles
    if (activeKind === "articles" && !initialDraft.content_html && selectedItem.blocks) {
      try {
        const blocks =
          typeof selectedItem.blocks === "string"
            ? JSON.parse(selectedItem.blocks)
            : selectedItem.blocks;
        initialDraft.content_html = blocksToHtml(blocks);
      } catch (e) {
        // ignore parse errors
      }
    }

    // Auto-populate SEO fields if they are empty
    const hasSeo = config.fields.some((f) => f.group === "seo");
    if (hasSeo) {
      const mainTitle = text(
        selectedItem[config.title] ||
          selectedItem["name"] ||
          selectedItem["title"] ||
          selectedItem["label"] ||
          "",
      );
      const mainDesc = text(
        selectedItem["excerpt"] ||
          selectedItem["description"] ||
          selectedItem["description_text"] ||
          "",
      );
      const mainImage = config.image ? config.image(selectedItem) || "" : "";

      if (!initialDraft.seo_title && mainTitle) initialDraft.seo_title = mainTitle;
      if (!initialDraft.seo_description && mainDesc) initialDraft.seo_description = mainDesc;
      if (!initialDraft.og_title && initialDraft.seo_title)
        initialDraft.og_title = initialDraft.seo_title;
      if (!initialDraft.og_description && initialDraft.seo_description)
        initialDraft.og_description = initialDraft.seo_description;
      if (!initialDraft.og_image_url && mainImage) initialDraft.og_image_url = mainImage;
    }

    setDraft(initialDraft);
    setSaveState("idle");
  }, [activeKind, config.fields, config.key, selectedId, selectedItem, isCreating]);

  const filteredItems = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return items;
    return items.filter((item) =>
      config.fields.some((field) => text(item[field.key]).toLowerCase().includes(term)),
    );
  }, [config.fields, items, query]);

  async function loadAdminContent(token: string) {
    setLoading(true);
    setStatus("");
    try {
      const response = await fetch("/api/admin/content", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error ?? "Cannot load admin content");
      const data = payload as AdminPayload;
      setContent(
        Object.fromEntries(CONTENT_KINDS.map((kind) => [kind, data[kind] ?? []])) as Record<
          ContentKind,
          ContentItem[]
        >,
      );
      setAdminEmail(data.userEmail);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Cannot load admin content");
    } finally {
      setLoading(false);
    }
  }

  async function signIn() {
    setStatus("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    setStatus(error ? error.message : "Signed in successfully.");
  }

  async function signOut() {
    await supabase.auth.signOut();
    setSessionToken(null);
    setAdminEmail(null);
  }

  async function saveCurrentItem() {
    if (!sessionToken || !selectedItem) return;
    setSaveState("saving");
    setStatus("");

    let values: Record<string, unknown>;
    try {
      values = fromDraft(draft, config.fields);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Invalid form value");
      setSaveState("error");
      return;
    }

    const id = isCreating ? String(draft[config.key] ?? "").trim() : text(selectedItem[config.key]);
    if (!id) {
      setStatus("Primary key (ID/Slug) is required");
      setSaveState("error");
      return;
    }

    try {
      const response = await fetch("/api/admin/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify({
          kind: activeKind,
          id,
          values,
          action: isCreating ? "create" : "update",
        }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error ?? `Cannot save ${config.label}`);

      const saved = payload.item as ContentItem;
      setContent((current) => {
        const list = current[activeKind] ?? [];
        return {
          ...current,
          [activeKind]: isCreating
            ? [...list, saved]
            : list.map((item) =>
                text(item[config.key]) === (isCreating ? id : text(selectedItem[config.key]))
                  ? saved
                  : item,
              ),
        };
      });
      setSelectedIds((current) => ({ ...current, [activeKind]: text(saved[config.key]) }));
      setIsCreating(false);
      setSaveState("saved");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : `Cannot save ${config.label}`);
      setSaveState("error");
    }
  }

  async function deleteCurrentItem() {
    if (!sessionToken || !selectedItem || isCreating) return;
    if (
      !window.confirm(
        `Are you sure you want to delete this ${config.label}? This action cannot be undone.`,
      )
    )
      return;

    setSaveState("saving");
    setStatus("");
    const id = text(selectedItem[config.key]);

    try {
      const response = await fetch("/api/admin/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify({ kind: activeKind, id, values: {}, action: "delete" }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error ?? `Cannot delete ${config.label}`);

      setContent((current) => {
        const list = current[activeKind] ?? [];
        return {
          ...current,
          [activeKind]: list.filter((item) => text(item[config.key]) !== id),
        };
      });
      setSelectedIds((current) => ({ ...current, [activeKind]: "" }));
      setSaveState("idle");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : `Cannot delete ${config.label}`);
      setSaveState("error");
    }
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        if (sessionToken && selectedItem) {
          void saveCurrentItem();
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sessionToken, selectedItem, draft, activeKind, config]); // Re-bind when state used in saveCurrentItem changes

  const isDirty = useMemo(() => {
    if (!selectedItem) return false;
    const originalDraft = toDraft(selectedItem, config.fields);
    return JSON.stringify(originalDraft) !== JSON.stringify(draft);
  }, [selectedItem, draft, config.fields]);

  function discardDraft() {
    if (selectedItem) {
      setDraft(toDraft(selectedItem, config.fields));
      setSaveState("idle");
    }
  }

  if (loading && !sessionToken) {
    return <AdminShell status="Checking session..." />;
  }

  if (!sessionToken) {
    return (
      <AdminShell status={status}>
        <Card className="mx-auto max-w-md border-primary/10 shadow-xl">
          <CardHeader>
            <div className="mb-2 grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Lock className="h-5 w-5" />
            </div>
            <CardTitle>Admin sign in</CardTitle>
            <CardDescription>Sign in using your Supabase admin credentials.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="admin@example.com"
            />
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
            <Button className="w-full" disabled={!email || !password || loading} onClick={signIn}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign In
            </Button>
          </CardContent>
        </Card>
      </AdminShell>
    );
  }

  return (
    <AdminShell status={status}>
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <Badge variant="secondary" className="mb-3">
            Admin Panel
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Content management
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Edit Supabase-backed content with visual image and page previews.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {adminEmail && <span>{adminEmail}</span>}
          <Button variant="outline" onClick={() => void loadAdminContent(sessionToken)}>
            Refresh
          </Button>
          <Button variant="outline" onClick={signOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
          </Button>
        </div>
      </div>

      <Tabs
        value={activeKind}
        onValueChange={(value) => {
          setActiveKind(value as ContentKind);
          setIsCreating(false);
        }}
      >
        <div className="flex flex-col gap-3">
          <TabsList className="h-auto flex-wrap justify-start">
            {CONTENT_KINDS.map((kind) => (
              <TabsTrigger key={kind} value={kind}>
                {CONTENT_CONFIG[kind].label} ({content[kind]?.length ?? 0})
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">{config.description}</p>
            <div className="relative w-full md:max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-9"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search this section..."
              />
            </div>
          </div>
        </div>

        <TabsContent value={activeKind} className="mt-5">
          <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
            <ContentList
              kind={activeKind}
              config={config}
              items={filteredItems}
              allContent={content}
              selectedId={selectedId}
              isCreating={isCreating}
              onSelect={(item) => {
                setIsCreating(false);
                setSelectedIds((current) => ({
                  ...current,
                  [activeKind]: text(item[config.key]),
                }));
                setSaveState("idle");
              }}
              onAddNew={() => {
                setIsCreating(true);
                const newId = `new-${Date.now()}`;
                setSelectedIds((current) => ({
                  ...current,
                  [activeKind]: newId,
                }));
                const newDraft: Draft = { [config.key]: newId };
                config.fields.forEach((f) => {
                  if (f.key !== config.key) newDraft[f.key] = "";
                });
                setDraft(newDraft);
                setSaveState("idle");
              }}
            />
            {selectedItem && (
              <div className="grid gap-5 xl:grid-cols-[1fr_420px]">
                <ContentEditor
                  config={config}
                  draft={draft}
                  setDraft={setDraft}
                  isCreating={isCreating}
                />
                <ContentPreview
                  kind={activeKind}
                  config={config}
                  item={mergePreviewItem(selectedItem, draft, config.fields)}
                  allContent={content}
                  saveState={saveState}
                  onSave={saveCurrentItem}
                  isDirty={isDirty || isCreating}
                  onDiscard={discardDraft}
                  isCreating={isCreating}
                  onDelete={deleteCurrentItem}
                />
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </AdminShell>
  );
}

function AdminShell({ children, status }: { children?: ReactNode; status?: string }) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,hsl(var(--accent)/0.16),transparent_34rem),linear-gradient(180deg,#fff,hsl(var(--secondary)/0.55))] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        {status && (
          <div className="mb-5 rounded-xl border border-border bg-white px-4 py-3 text-sm text-muted-foreground shadow-sm">
            {status}
          </div>
        )}
        {children}
      </div>
    </main>
  );
}

function ContentList({
  kind,
  config,
  items,
  allContent,
  selectedId,
  isCreating,
  onSelect,
  onAddNew,
}: {
  kind: ContentKind;
  config: ContentConfig;
  items: ContentItem[];
  allContent: Partial<Record<ContentKind, ContentItem[]>>;
  selectedId: string;
  isCreating?: boolean;
  onSelect: (item: ContentItem) => void;
  onAddNew?: () => void;
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-base">Items</CardTitle>
          <CardDescription>Select an item to edit and preview.</CardDescription>
        </div>
        {onAddNew && (
          <Button variant="outline" size="sm" onClick={onAddNew} disabled={isCreating}>
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        )}
      </CardHeader>
      <CardContent className="max-h-[72vh] space-y-2 overflow-auto pr-3">
        {isCreating && (
          <button className="flex w-full flex-col items-start gap-1 rounded-lg border border-primary bg-primary/10 px-3 py-2 text-left text-sm transition-colors">
            <div className="font-semibold text-primary">New {config.label}</div>
            <div className="text-xs text-muted-foreground">{selectedId}</div>
          </button>
        )}
        {items.map((item) => {
          const id = text(item[config.key]);
          const image = previewImage(kind, config, item, allContent);
          return (
            <button
              key={id}
              type="button"
              onClick={() => onSelect(item)}
              className={`flex w-full gap-3 rounded-xl border p-3 text-left transition ${
                selectedId === id
                  ? "border-accent bg-accent/10"
                  : "border-border bg-white hover:border-accent/40"
              }`}
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-lg bg-secondary">
                {image ? (
                  <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <ImageIcon className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div className="min-w-0">
                <div className="line-clamp-2 text-sm font-semibold text-primary">
                  {text(item[config.title]) || id}
                </div>
                <div className="mt-1 truncate text-xs text-muted-foreground">
                  {config.subtitle(item)}
                </div>
              </div>
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
}

function ContentEditor({
  config,
  draft,
  setDraft,
  isCreating,
}: {
  config: ContentConfig;
  draft: Draft;
  setDraft: (draft: Draft) => void;
  isCreating?: boolean;
}) {
  const [seoOpen, setSeoOpen] = useState(false);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const update = (key: string, value: string) => setDraft({ ...draft, [key]: value });

  const regularFields = config.fields.filter((f) => f.group !== "seo" && f.group !== "advanced");
  const seoFields = config.fields.filter((f) => f.group === "seo");
  const advancedFields = config.fields.filter((f) => f.group === "advanced");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit {config.label}</CardTitle>
        <CardDescription>
          Changes are saved to Supabase only. File fallbacks are not edited.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {regularFields.map((field) => renderField(field, draft, update, isCreating))}

        {seoFields.length > 0 && (
          <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.03] to-transparent overflow-hidden">
            <button
              type="button"
              onClick={() => setSeoOpen(!seoOpen)}
              className="flex w-full items-center gap-2.5 px-4 py-3.5 text-left transition-colors hover:bg-accent/5"
            >
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <SearchCheck className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-semibold text-primary">SEO Settings</span>
                <span className="ml-2 text-xs text-muted-foreground">
                  Title, Meta, OG Tags, Canonical
                </span>
              </div>
              {seoOpen ? (
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform" />
              ) : (
                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform" />
              )}
            </button>
            {seoOpen && (
              <div className="grid gap-4 border-t border-accent/10 px-4 py-4">
                {seoFields.map((field) => renderField(field, draft, update, isCreating))}
              </div>
            )}
          </div>
        )}

        {advancedFields.length > 0 && (
          <div className="rounded-xl border border-border overflow-hidden">
            <button
              type="button"
              onClick={() => setAdvancedOpen(!advancedOpen)}
              className="flex w-full items-center gap-2.5 px-4 py-3.5 text-left transition-colors hover:bg-muted/50"
            >
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-secondary text-muted-foreground">
                <Code2 className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="flex items-center gap-2 text-sm font-semibold text-primary">
                  Developer & Advanced
                  <AlertTriangle className="h-3.5 w-3.5 text-orange-500" />
                </span>
                <span className="text-xs text-muted-foreground">
                  Raw JSON structures (Payload, Blocks)
                </span>
              </div>
              {advancedOpen ? (
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform" />
              ) : (
                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform" />
              )}
            </button>
            {advancedOpen && (
              <div className="grid gap-4 border-t border-border px-4 py-4 bg-muted/20">
                <div className="text-xs text-orange-600 bg-orange-50 px-3 py-2 rounded-lg font-medium">
                  Warning: Modifying JSON directly can break page rendering. Do not edit unless you
                  know what you are doing.
                </div>
                {advancedFields.map((field) => renderField(field, draft, update, isCreating))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function renderField(
  field: FieldConfig,
  draft: Draft,
  update: (key: string, value: string) => void,
  isCreating: boolean = false,
) {
  let value = draft[field.key] ?? "";

  if (field.key === "created_at" && value) {
    try {
      value = new Date(value).toLocaleString("th-TH", { timeZone: "Asia/Bangkok" });
    } catch (e) {
      // ignore
    }
  }

  if (field.type === "toggle") {
    return (
      <ToggleField
        key={field.key}
        label={field.label}
        checked={value === "true"}
        onChange={(checked) => update(field.key, String(checked))}
      />
    );
  }

  if (field.type === "textarea" || field.type === "json") {
    return (
      <div key={field.key} className="grid gap-1.5">
        <TextField
          label={field.label}
          value={value}
          rows={field.rows ?? 5}
          onChange={(next) => update(field.key, next)}
          readOnly={field.readOnly}
          placeholder={field.placeholder}
        />
        {field.maxLength && <CharCount value={value} max={field.maxLength} />}
      </div>
    );
  }

  if (field.type === "image") {
    return (
      <ImageField
        key={field.key}
        label={field.label}
        value={value}
        onChange={(next) => update(field.key, next)}
      />
    );
  }

  if (field.type === "richtext") {
    return (
      <RichTextField
        key={field.key}
        label={field.label}
        value={value}
        onChange={(next) => update(field.key, next)}
        readOnly={field.readOnly}
      />
    );
  }

  return (
    <div key={field.key} className="grid gap-1.5">
      <Field
        label={field.label}
        type={field.type === "number" ? "number" : "text"}
        value={value}
        disabled={field.readOnly}
        onChange={(next) => update(field.key, next)}
        placeholder={field.placeholder}
      />
      {field.maxLength && <CharCount value={value} max={field.maxLength} />}
    </div>
  );
}

function ContentPreview({
  kind,
  config,
  item,
  allContent,
  saveState,
  onSave,
  isDirty,
  onDiscard,
  isCreating,
  onDelete,
}: {
  kind: ContentKind;
  config: ContentConfig;
  item: ContentItem;
  allContent: Partial<Record<ContentKind, ContentItem[]>>;
  saveState: SaveState;
  onSave: () => void;
  isDirty?: boolean;
  onDiscard?: () => void;
  isCreating?: boolean;
  onDelete?: () => void;
}) {
  const image = previewImage(kind, config, item, allContent);
  const href = config.href?.(item);
  const title = text(item[config.title]) || text(item[config.key]);
  const description = previewDescription(kind, item);

  const hasSeoFields = config.fields.some((f) => f.group === "seo");
  const seoTitle = text(item.seo_title) || title;
  const seoDesc = text(item.seo_description) || description || "";
  const ogTitle = text(item.og_title) || seoTitle;
  const ogDesc = text(item.og_description) || seoDesc;
  const ogImage = text(item.og_image_url) || image || "";
  const isNoIndex = item.seo_no_index === true || text(item.seo_no_index) === "true";

  return (
    <div className="sticky top-5 self-start space-y-5">
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <CardTitle>Preview</CardTitle>
              <CardDescription>{config.label}</CardDescription>
            </div>
            {href && (
              <Button asChild variant="outline" size="sm">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open
                </a>
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-border bg-white">
            <div className="relative aspect-[16/10] bg-secondary/60">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="grid h-full place-items-center text-sm text-muted-foreground">
                  No preview image
                </div>
              )}
            </div>
            <div className="space-y-3 p-5">
              <Badge variant="secondary">{text(item[config.key])}</Badge>
              <h2 className="text-2xl font-bold leading-tight text-primary">{title}</h2>
              {description && (
                <p className="line-clamp-6 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              )}
              <PreviewFacts config={config} item={item} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button
              className="w-full"
              onClick={onSave}
              disabled={saveState === "saving" || (saveState !== "error" && !isDirty)}
            >
              {saveState === "saving" ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}
              {saveState === "saved" && !isDirty
                ? "Saved"
                : isCreating
                  ? "Create Item"
                  : "Save to Supabase"}
              <kbd className="pointer-events-none ml-2 hidden h-5 select-none items-center gap-1 rounded border border-primary-foreground/20 bg-primary-foreground/10 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>S
              </kbd>
            </Button>
            {isDirty && onDiscard && (
              <Button
                variant="outline"
                className="w-full text-muted-foreground"
                onClick={onDiscard}
                disabled={saveState === "saving"}
              >
                Discard Changes
              </Button>
            )}
            {!isCreating && onDelete && (
              <Button
                variant="outline"
                className="w-full text-destructive border-destructive/20 hover:bg-destructive/10"
                onClick={onDelete}
                disabled={saveState === "saving"}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete {config.label}
              </Button>
            )}
            {saveState === "error" && (
              <p className="text-sm text-destructive font-medium px-1">
                Save failed. Check console or try again.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {hasSeoFields && (
        <Card className="border-accent/15">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-accent" />
              <CardTitle className="text-base">Google Search Preview</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl border border-border bg-white p-4 space-y-1.5">
              {isNoIndex && (
                <div className="flex items-center gap-1.5 mb-2">
                  <EyeOff className="h-3.5 w-3.5 text-orange-500" />
                  <span className="text-xs font-medium text-orange-600">
                    หน้านี้ถูกตั้งค่า No Index — จะไม่ปรากฏบน Google
                  </span>
                </div>
              )}
              <div
                className="text-xs text-[#202124] truncate"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                www.matrixintertrade.com{href || "/"}
              </div>
              <div
                className="text-lg leading-snug"
                style={{ fontFamily: "Arial, sans-serif", color: "#1a0dab" }}
              >
                {seoTitle.slice(0, 60)}
                {seoTitle.length > 60 && "..."}
              </div>
              <div
                className="text-sm leading-relaxed line-clamp-2"
                style={{ fontFamily: "Arial, sans-serif", color: "#4d5156" }}
              >
                {seoDesc.slice(0, 160)}
                {seoDesc.length > 160 && "..."}
              </div>
              {text(item.seo_keywords) && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <Tags className="h-3.5 w-3.5 text-muted-foreground mt-0.5" />
                  {text(item.seo_keywords)
                    .split(",")
                    .filter(Boolean)
                    .slice(0, 6)
                    .map((kw, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                      >
                        {kw.trim()}
                      </span>
                    ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {hasSeoFields && (
        <Card className="border-accent/15">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Share2 className="h-4 w-4 text-accent" />
              <CardTitle className="text-base">Social Media Preview</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-xl border border-border bg-[#f0f2f5]">
              <div className="relative aspect-[1.91/1] bg-secondary/60">
                {ogImage ? (
                  <img
                    src={ogImage}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="grid h-full place-items-center text-sm text-muted-foreground">
                    No OG image
                  </div>
                )}
              </div>
              <div className="bg-[#f0f2f5] px-3 py-2.5 space-y-0.5">
                <div className="text-[10px] uppercase tracking-wider text-[#65676b]">
                  matrixintertrade.com
                </div>
                <div className="text-sm font-semibold leading-snug text-[#1c1e21] line-clamp-2">
                  {ogTitle}
                </div>
                <div className="text-xs leading-snug text-[#65676b] line-clamp-1">{ogDesc}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function PreviewFacts({ config, item }: { config: ContentConfig; item: ContentItem }) {
  const fields = config.fields
    .filter((field) => field.type !== "json" && !field.readOnly && field.group !== "seo")
    .slice(0, 5);

  return (
    <div className="grid gap-2 rounded-xl bg-secondary/60 p-4 text-xs">
      {fields.map((field) => (
        <div key={field.key} className="grid gap-0.5">
          <span className="font-semibold text-primary">{field.label}</span>
          <span className="truncate text-muted-foreground">{text(item[field.key]) || "-"}</span>
        </div>
      ))}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  disabled,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-primary">
      {label}
      <Input
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </label>
  );
}

function ToggleField({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none group">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
          checked ? "bg-accent" : "bg-muted"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </button>
      <span className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
        {label}
      </span>
      {checked && (
        <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-orange-600">
          Active
        </span>
      )}
    </label>
  );
}

function CharCount({ value, max }: { value: string; max: number }) {
  const len = value.length;
  const pct = Math.min((len / max) * 100, 100);
  const isOver = len > max;
  const isGood = len > 0 && len <= max;
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${
            isOver ? "bg-destructive" : isGood ? "bg-green-500" : "bg-muted-foreground/30"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span
        className={`text-[10px] font-medium tabular-nums ${
          isOver ? "text-destructive" : "text-muted-foreground"
        }`}
      >
        {len}/{max}
      </span>
    </div>
  );
}

function RichTextField({
  label,
  value,
  onChange,
  readOnly,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
}) {
  const editor = useEditor({
    extensions: [StarterKit, LinkExtension.configure({ openOnClick: false }), ImageExtension],
    content: value,
    editable: !readOnly,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, { emitUpdate: false } as any);
    }
  }, [value, editor]);

  if (!editor) return null;

  return (
    <div className="grid gap-1.5 text-sm font-medium text-primary">
      <span>{label}</span>
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm focus-within:border-accent focus-within:ring-1 focus-within:ring-accent/20 transition-all">
        {!readOnly && (
          <div className="flex flex-wrap items-center gap-1 border-b border-border bg-muted/40 p-1.5">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`h-8 w-8 p-0 ${editor.isActive("bold") ? "bg-accent/15 text-accent" : ""}`}
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`h-8 w-8 p-0 ${editor.isActive("italic") ? "bg-accent/15 text-accent" : ""}`}
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={`h-8 w-8 p-0 ${editor.isActive("strike") ? "bg-accent/15 text-accent" : ""}`}
            >
              <Strikethrough className="h-4 w-4" />
            </Button>
            <div className="w-px h-4 bg-border mx-1" />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={`h-8 w-8 p-0 ${editor.isActive("heading", { level: 2 }) ? "bg-accent/15 text-accent" : ""}`}
            >
              <Heading2 className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              className={`h-8 w-8 p-0 ${editor.isActive("heading", { level: 3 }) ? "bg-accent/15 text-accent" : ""}`}
            >
              <Heading3 className="h-4 w-4" />
            </Button>
            <div className="w-px h-4 bg-border mx-1" />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`h-8 w-8 p-0 ${editor.isActive("bulletList") ? "bg-accent/15 text-accent" : ""}`}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`h-8 w-8 p-0 ${editor.isActive("orderedList") ? "bg-accent/15 text-accent" : ""}`}
            >
              <ListOrdered className="h-4 w-4" />
            </Button>
            <div className="w-px h-4 bg-border mx-1" />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                const url = window.prompt("URL:");
                if (url === null) return;
                if (url === "") {
                  editor.chain().focus().extendMarkRange("link").unsetLink().run();
                  return;
                }
                editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
              }}
              className={`h-8 w-8 p-0 ${editor.isActive("link") ? "bg-accent/15 text-accent" : ""}`}
            >
              <LinkIcon className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                const url = window.prompt(
                  "Image URL (You can upload from another tab and paste here):",
                );
                if (url) {
                  editor.chain().focus().setImage({ src: url }).run();
                }
              }}
              className="h-8 w-8 p-0"
            >
              <ImageIcon className="h-4 w-4" />
            </Button>
          </div>
        )}
        <div className="p-3 min-h-[250px] prose prose-sm max-w-none text-foreground/90 focus:outline-none">
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  );
}

function ImageField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const [imgError, setImgError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Reset error when URL changes
  const handleChange = (next: string) => {
    setImgError(false);
    onChange(next);
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploading(true);

      const session = await supabase.auth.getSession();
      const token = session.data.session?.access_token;
      if (!token) throw new Error("Not logged in. Please refresh.");

      // Convert image to WebP format to save Egress bandwidth
      let uploadFile = file;
      if (
        file.type.startsWith("image/") &&
        file.type !== "image/webp" &&
        file.type !== "image/gif" &&
        file.type !== "image/svg+xml"
      ) {
        uploadFile = await new Promise<File>((resolve) => {
          const img = new Image();
          const url = URL.createObjectURL(file);
          img.onload = () => {
            URL.revokeObjectURL(url);
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            if (!ctx) return resolve(file);
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(
              (blob) => {
                if (!blob) return resolve(file);
                const baseName = file.name.substring(0, file.name.lastIndexOf(".")) || file.name;
                resolve(new File([blob], `${baseName}.webp`, { type: "image/webp" }));
              },
              "image/webp",
              0.85,
            );
          };
          img.onerror = () => {
            URL.revokeObjectURL(url);
            resolve(file);
          };
          img.src = url;
        });
      }

      const formData = new FormData();
      formData.append("file", uploadFile);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || `Upload failed with status ${res.status}`);
      }

      const { url } = await res.json();
      handleChange(url);
    } catch (err) {
      console.error("Upload failed", err);
      alert(`Upload failed: ${err instanceof Error ? err.message : "Unknown error"}`);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="grid gap-1.5 text-sm font-medium text-primary">
      <div className="flex items-center justify-between">
        <span>{label}</span>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          className="h-7 text-xs"
          disabled={uploading}
          onClick={() => fileInputRef.current?.click()}
        >
          {uploading ? "Uploading..." : "Upload Image"}
        </Button>
      </div>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleUpload}
      />
      <Input
        type="text"
        value={value}
        placeholder="https://..."
        onChange={(event) => handleChange(event.target.value)}
      />
      {value && (
        <div className="mt-1 overflow-hidden rounded-xl border border-border bg-secondary/40">
          {!imgError ? (
            <img
              src={value}
              alt="preview"
              className="max-h-48 w-full object-contain p-2"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex h-20 items-center justify-center gap-2 text-xs text-muted-foreground">
              <ImageIcon className="h-4 w-4" />
              ไม่สามารถโหลดรูปได้
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  rows,
  readOnly,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows: number;
  readOnly?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-primary">
      {label}
      <Textarea
        value={value}
        rows={rows}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={readOnly ? "opacity-70" : undefined}
      />
    </label>
  );
}

function toDraft(item: ContentItem, fields: FieldConfig[]): Draft {
  return Object.fromEntries(
    fields.map((field) => {
      const value = item[field.key];
      if (field.type === "json")
        return [field.key, JSON.stringify(value ?? defaultJsonValue(field.key), null, 2)];
      if (field.type === "toggle")
        return [field.key, value === true || value === "true" ? "true" : "false"];
      return [field.key, text(value)];
    }),
  );
}

function fromDraft(draft: Draft, fields: FieldConfig[]) {
  const values: Record<string, unknown> = {};
  for (const field of fields) {
    if (field.readOnly) continue;
    const value = draft[field.key] ?? "";
    if (field.type === "json") {
      try {
        values[field.key] = JSON.parse(value || JSON.stringify(defaultJsonValue(field.key)));
      } catch {
        throw new Error(`${field.label} contains invalid JSON.`);
      }
    } else if (field.type === "number") {
      values[field.key] = value === "" ? null : Number(value);
    } else if (field.type === "toggle") {
      values[field.key] = value === "true";
    } else {
      values[field.key] = value;
    }
  }
  return values;
}

function mergePreviewItem(item: ContentItem, draft: Draft, fields: FieldConfig[]) {
  const merged: ContentItem = { ...item };
  for (const field of fields) {
    const value = draft[field.key] ?? "";
    if (field.type === "json") {
      try {
        merged[field.key] = JSON.parse(value || JSON.stringify(defaultJsonValue(field.key)));
      } catch {
        merged[field.key] = item[field.key];
      }
    } else if (field.type === "number") {
      merged[field.key] = value === "" ? null : Number(value);
    } else if (field.type === "toggle") {
      merged[field.key] = value === "true";
    } else {
      merged[field.key] = value;
    }
  }
  return merged;
}

function defaultJsonValue(key: string) {
  if (key === "blocks" || key === "highlights" || key === "best_for") return [];
  return {};
}

function text(value: unknown) {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return JSON.stringify(value);
}

function firstImageFromBlocks(blocks: unknown) {
  if (!Array.isArray(blocks)) return null;
  const imageBlock = blocks.find(
    (block): block is { t: "img"; src: string } =>
      typeof block === "object" &&
      block !== null &&
      "t" in block &&
      "src" in block &&
      block.t === "img" &&
      typeof block.src === "string",
  );
  return imageBlock?.src ?? null;
}

function previewImage(
  kind: ContentKind,
  config: ContentConfig,
  item: ContentItem,
  allContent: Partial<Record<ContentKind, ContentItem[]>>,
) {
  const direct = config.image?.(item);
  if (direct) return direct;

  if (kind === "articleCategories") {
    return articleImages[text(item.slug)] ?? null;
  }

  if (kind === "brands") {
    const slug = text(item.slug);
    return (
      brandLogos[slug] || brandImages[slug] || firstProductImageForBrand(slug, allContent) || null
    );
  }

  if (kind === "brandIntros") {
    const brandSlug = text(item.brand_slug);
    const brand = (allContent.brands ?? []).find((candidate) => text(candidate.slug) === brandSlug);
    return (
      text(brand?.logo_url) ||
      text(brand?.image_url) ||
      brandLogos[brandSlug] ||
      brandImages[brandSlug] ||
      firstProductImageForBrand(brandSlug, allContent) ||
      null
    );
  }

  if (kind === "solutions") {
    return solutionImages[text(item.slug)] ?? null;
  }

  if (kind === "navItems") {
    return imageForHref(text(item.href), allContent);
  }

  // industries: prefer image_url from Supabase (already returned via config.image)
  // fallback: try to find an image_url from payload
  if (kind === "industries") {
    const payloadImg = (item.payload as Record<string, unknown>)?.image_url;
    if (typeof payloadImg === "string" && payloadImg) return payloadImg;
  }

  return null;
}

function firstProductImageForBrand(
  brandSlug: string,
  allContent: Partial<Record<ContentKind, ContentItem[]>>,
) {
  if (!brandSlug) return "";
  const product = (allContent.products ?? []).find(
    (candidate) => text(candidate.brand_slug) === brandSlug && text(candidate.image_url),
  );
  return text(product?.image_url);
}

function imageForHref(href: string, allContent: Partial<Record<ContentKind, ContentItem[]>>) {
  if (!href) return null;

  const solutionMatch = href.match(/^\/([^/]+)$/);
  if (solutionMatch?.[1] && solutionImages[solutionMatch[1]]) {
    return solutionImages[solutionMatch[1]];
  }

  const brandMatch = href.match(/^\/brands\/([^/]+)$/);
  if (brandMatch?.[1]) {
    const slug = brandMatch[1];
    return (
      brandLogos[slug] || brandImages[slug] || firstProductImageForBrand(slug, allContent) || null
    );
  }

  const categoryMatch = href.match(/^\/category\/([^/]+)$/);
  if (categoryMatch?.[1]) {
    const intro = (allContent.brandIntros ?? []).find(
      (candidate) => text(candidate.category_id) === categoryMatch[1],
    );
    const brandSlug = text(intro?.brand_slug);
    return (
      brandLogos[brandSlug] ||
      brandImages[brandSlug] ||
      firstProductImageForBrand(brandSlug, allContent) ||
      null
    );
  }

  return null;
}

function previewDescription(kind: ContentKind, item: ContentItem) {
  if (kind === "products") return text(item.description_text);
  if (kind === "articles") return text(item.excerpt);
  if (kind === "brandIntros") return text(item.description);
  if (kind === "navItems") return text(item.description);
  return text(item.description) || text(item.payload);
}
