import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useEditor, E as EditorContent } from "../_libs/tiptap__react.mjs";
import { i as index_default } from "../_libs/tiptap__starter-kit.mjs";
import { i as index_default$2 } from "../_libs/tiptap__extension-link.mjs";
import { i as index_default$1 } from "../_libs/tiptap__extension-image.mjs";
import { s as supabase } from "./client-gV3vm9Ey.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { B as Button, m as cn, g as articleImages, i as brandImages, E as solutionImages } from "./router-Dcgg3q5t.mjs";
import { I as Input } from "./input-BXvk-cJV.mjs";
import { R as Root2, L as List, T as Trigger, C as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { T as Textarea } from "./textarea-DsiSiEtS.mjs";
import { a as brandLogos } from "./brand-logos-BaPSpWQ3.mjs";
import "../_libs/react-dom.mjs";
import { T as Lock, S as LoaderCircle, U as LogOut, a6 as Search, K as Image$1, E as ExternalLink, a5 as Save, d as Bold, M as Italic, ad as Strikethrough, H as Heading2, w as Heading3, Q as List$1, R as ListOrdered, P as Link } from "../_libs/lucide-react.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/tiptap__core.mjs";
import "../_libs/prosemirror-transform.mjs";
import "../_libs/prosemirror-model.mjs";
import "../_libs/orderedmap.mjs";
import "../_libs/prosemirror-commands.mjs";
import "../_libs/prosemirror-state.mjs";
import "../_libs/prosemirror-schema-list.mjs";
import "../_libs/prosemirror-view.mjs";
import "../_libs/prosemirror-keymap.mjs";
import "../_libs/w3c-keyname.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiptap__extension-blockquote.mjs";
import "../_libs/tiptap__extension-bold.mjs";
import "../_libs/tiptap__extension-code.mjs";
import "../_libs/tiptap__extension-code-block.mjs";
import "../_libs/tiptap__extension-document.mjs";
import "../_libs/tiptap__extension-hard-break.mjs";
import "../_libs/tiptap__extension-heading.mjs";
import "../_libs/@tiptap/extension-horizontal-rule+[...].mjs";
import "../_libs/tiptap__extension-italic.mjs";
import "../_libs/tiptap__extension-list.mjs";
import "../_libs/tiptap__extension-paragraph.mjs";
import "../_libs/tiptap__extension-strike.mjs";
import "../_libs/tiptap__extension-text.mjs";
import "../_libs/tiptap__extension-underline.mjs";
import "../_libs/tiptap__extensions.mjs";
import "../_libs/prosemirror-dropcursor.mjs";
import "../_libs/prosemirror-gapcursor.mjs";
import "../_libs/prosemirror-history.mjs";
import "../_libs/rope-sequence.mjs";
import "../_libs/linkifyjs.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/zod.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const Card = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
const Tabs = Root2;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;
const CONTENT_CONFIG = {
  products: {
    label: "Products",
    description: "Product cards and product detail pages",
    key: "product_id",
    title: "name",
    subtitle: (item) => `${text(item.brand) || "No brand"} · ${text(item.product_id)}`,
    image: (item) => text(item.image_url),
    href: (item) => `/product/${text(item.product_id)}`,
    fields: [{
      key: "product_id",
      label: "Product ID",
      readOnly: true
    }, {
      key: "name",
      label: "Name"
    }, {
      key: "image_url",
      label: "Image URL",
      type: "image"
    }, {
      key: "price_text",
      label: "Price Text"
    }, {
      key: "source_url",
      label: "Source URL"
    }, {
      key: "brand",
      label: "Brand"
    }, {
      key: "brand_slug",
      label: "Brand Slug"
    }, {
      key: "brand_category_id",
      label: "Brand Category ID"
    }, {
      key: "description_text",
      label: "Description Text",
      type: "textarea",
      rows: 5
    }, {
      key: "description_html",
      label: "Description HTML",
      type: "richtext"
    }, {
      key: "payload",
      label: "Payload JSON",
      type: "json",
      rows: 8
    }]
  },
  articles: {
    label: "Articles",
    description: "Article list, cover image and article body blocks",
    key: "slug",
    title: "title",
    subtitle: (item) => `${text(item.category)} · ${text(item.slug)}`,
    image: (item) => text(item.cover_image_url) || firstImageFromBlocks(item.blocks),
    href: (item) => `/blog/${text(item.slug)}`,
    fields: [{
      key: "slug",
      label: "Slug",
      readOnly: true
    }, {
      key: "article_id",
      label: "Article ID",
      readOnly: true
    }, {
      key: "title",
      label: "Title"
    }, {
      key: "category",
      label: "Category Slug"
    }, {
      key: "excerpt",
      label: "Excerpt",
      type: "textarea",
      rows: 4
    }, {
      key: "published_date",
      label: "Published Date"
    }, {
      key: "read_min",
      label: "Read Minutes",
      type: "number"
    }, {
      key: "canonical_url",
      label: "Canonical URL"
    }, {
      key: "cover_image_url",
      label: "Cover Image URL",
      type: "image"
    }, {
      key: "blocks",
      label: "Blocks JSON",
      type: "json",
      rows: 16
    }, {
      key: "payload",
      label: "Payload JSON",
      type: "json",
      rows: 8
    }]
  },
  articleCategories: {
    label: "Article Categories",
    description: "Blog category labels and cover imagery",
    key: "slug",
    title: "label",
    subtitle: (item) => text(item.slug),
    image: (item) => text(item.image_url),
    href: () => "/blog",
    fields: [{
      key: "slug",
      label: "Slug",
      readOnly: true
    }, {
      key: "label",
      label: "Label"
    }, {
      key: "image_url",
      label: "Image URL",
      type: "image"
    }, {
      key: "payload",
      label: "Payload JSON",
      type: "json",
      rows: 10
    }]
  },
  brands: {
    label: "Brands",
    description: "Brand landing cards, logos and color accents",
    key: "slug",
    title: "name",
    subtitle: (item) => `${text(item.category)} · ${text(item.slug)}`,
    image: (item) => text(item.logo_url) || text(item.image_url),
    href: (item) => `/brands/${text(item.slug)}`,
    fields: [{
      key: "slug",
      label: "Slug",
      readOnly: true
    }, {
      key: "name",
      label: "Name"
    }, {
      key: "category",
      label: "Category"
    }, {
      key: "description",
      label: "Description",
      type: "textarea",
      rows: 5
    }, {
      key: "color",
      label: "Color"
    }, {
      key: "image_url",
      label: "Image URL",
      type: "image"
    }, {
      key: "logo_url",
      label: "Logo URL",
      type: "image"
    }, {
      key: "accent",
      label: "Accent JSON",
      type: "json",
      rows: 8
    }, {
      key: "payload",
      label: "Payload JSON",
      type: "json",
      rows: 8
    }]
  },
  brandIntros: {
    label: "Brand Intros",
    description: "Category intro text, highlights and best-for lists",
    key: "category_id",
    title: "tagline",
    subtitle: (item) => `${text(item.brand_slug)} · ${text(item.category_id)}`,
    href: (item) => `/category/${text(item.category_id)}`,
    fields: [{
      key: "category_id",
      label: "Category ID",
      readOnly: true
    }, {
      key: "brand_slug",
      label: "Brand Slug"
    }, {
      key: "tagline",
      label: "Tagline"
    }, {
      key: "description",
      label: "Description",
      type: "textarea",
      rows: 5
    }, {
      key: "highlights",
      label: "Highlights JSON",
      type: "json",
      rows: 8
    }, {
      key: "best_for",
      label: "Best For JSON",
      type: "json",
      rows: 8
    }, {
      key: "origin",
      label: "Origin"
    }, {
      key: "payload",
      label: "Payload JSON",
      type: "json",
      rows: 8
    }]
  },
  solutions: {
    label: "Solutions",
    description: "Solution cards and navigation entries",
    key: "slug",
    title: "title",
    subtitle: (item) => text(item.slug),
    image: (item) => text(item.image_url),
    href: (item) => `/${text(item.slug)}`,
    fields: [{
      key: "slug",
      label: "Slug",
      readOnly: true
    }, {
      key: "title",
      label: "Title"
    }, {
      key: "icon",
      label: "Icon"
    }, {
      key: "description",
      label: "Description",
      type: "textarea",
      rows: 5
    }, {
      key: "image_url",
      label: "Image URL",
      type: "image"
    }, {
      key: "payload",
      label: "Payload JSON",
      type: "json",
      rows: 10
    }]
  },
  industries: {
    label: "Industries",
    description: "Industry showcase cards and industry pages",
    key: "slug",
    title: "title",
    subtitle: (item) => text(item.slug),
    image: (item) => text(item.image_url),
    href: (item) => `/industry/${text(item.slug)}`,
    fields: [{
      key: "slug",
      label: "Slug",
      readOnly: true
    }, {
      key: "title",
      label: "Title"
    }, {
      key: "icon",
      label: "Icon"
    }, {
      key: "description",
      label: "Description",
      type: "textarea",
      rows: 5
    }, {
      key: "image_url",
      label: "Image URL",
      type: "image"
    }, {
      key: "payload",
      label: "Payload JSON",
      type: "json",
      rows: 12
    }]
  },
  navItems: {
    label: "Navigation",
    description: "Header mega-menu links, descriptions and images",
    key: "id",
    title: "label",
    subtitle: (item) => `${text(item.href)} · depth ${text(item.depth)}`,
    image: (item) => text(item.image_url),
    href: (item) => text(item.href),
    fields: [{
      key: "id",
      label: "ID",
      readOnly: true
    }, {
      key: "parent_id",
      label: "Parent ID"
    }, {
      key: "depth",
      label: "Depth",
      type: "number"
    }, {
      key: "sort_order",
      label: "Sort Order",
      type: "number"
    }, {
      key: "label",
      label: "Label"
    }, {
      key: "href",
      label: "Href"
    }, {
      key: "description",
      label: "Description",
      type: "textarea",
      rows: 4
    }, {
      key: "image_url",
      label: "Image URL",
      type: "image"
    }, {
      key: "payload",
      label: "Payload JSON",
      type: "json",
      rows: 8
    }]
  }
};
const CONTENT_KINDS = Object.keys(CONTENT_CONFIG);
function AdminPage() {
  const [email, setEmail] = reactExports.useState("");
  const [sessionToken, setSessionToken] = reactExports.useState(null);
  const [adminEmail, setAdminEmail] = reactExports.useState(null);
  const [content, setContent] = reactExports.useState({});
  const [activeKind, setActiveKind] = reactExports.useState("products");
  const [selectedIds, setSelectedIds] = reactExports.useState({});
  const [draft, setDraft] = reactExports.useState({});
  const [query, setQuery] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(true);
  const [status, setStatus] = reactExports.useState("");
  const [saveState, setSaveState] = reactExports.useState("idle");
  const config = CONTENT_CONFIG[activeKind];
  const items = content[activeKind] ?? [];
  const selectedId = selectedIds[activeKind] ?? "";
  const selectedItem = items.find((item) => text(item[config.key]) === selectedId) ?? items[0];
  reactExports.useEffect(() => {
    supabase.auth.getSession().then(({
      data
    }) => {
      setSessionToken(data.session?.access_token ?? null);
      setLoading(false);
    });
    const {
      data: subscription
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionToken(session?.access_token ?? null);
    });
    return () => subscription.subscription.unsubscribe();
  }, []);
  reactExports.useEffect(() => {
    if (!sessionToken) {
      setContent({});
      setAdminEmail(null);
      return;
    }
    void loadAdminContent(sessionToken);
  }, [sessionToken]);
  reactExports.useEffect(() => {
    if (!selectedItem) {
      setDraft({});
      return;
    }
    const nextId = text(selectedItem[config.key]);
    if (!selectedId) setSelectedIds((current) => ({
      ...current,
      [activeKind]: nextId
    }));
    setDraft(toDraft(selectedItem, config.fields));
    setSaveState("idle");
  }, [activeKind, config.fields, config.key, selectedId, selectedItem]);
  const filteredItems = reactExports.useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return items;
    return items.filter((item) => config.fields.some((field) => text(item[field.key]).toLowerCase().includes(term)));
  }, [config.fields, items, query]);
  async function loadAdminContent(token) {
    setLoading(true);
    setStatus("");
    try {
      const response = await fetch("/api/admin/content", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error ?? "Cannot load admin content");
      const data = payload;
      setContent(Object.fromEntries(CONTENT_KINDS.map((kind) => [kind, data[kind] ?? []])));
      setAdminEmail(data.userEmail);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Cannot load admin content");
    } finally {
      setLoading(false);
    }
  }
  async function sendMagicLink() {
    setStatus("");
    setLoading(true);
    const {
      error
    } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin + "/admin"
      }
    });
    setLoading(false);
    setStatus(error ? error.message : "Magic link sent. Open the email link in this same browser to access the admin panel.");
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
    let values;
    try {
      values = fromDraft(draft, config.fields);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Invalid form value");
      setSaveState("error");
      return;
    }
    const id = text(selectedItem[config.key]);
    try {
      const response = await fetch("/api/admin/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`
        },
        body: JSON.stringify({
          kind: activeKind,
          id,
          values
        })
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error ?? `Cannot save ${config.label}`);
      const saved = payload.item;
      setContent((current) => ({
        ...current,
        [activeKind]: (current[activeKind] ?? []).map((item) => text(item[config.key]) === id ? saved : item)
      }));
      setSelectedIds((current) => ({
        ...current,
        [activeKind]: text(saved[config.key])
      }));
      setSaveState("saved");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : `Cannot save ${config.label}`);
      setSaveState("error");
    }
  }
  if (loading && !sessionToken) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminShell, { status: "Checking session..." });
  }
  if (!sessionToken) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminShell, { status, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mx-auto max-w-md border-primary/10 shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Admin sign in" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Use a Supabase Auth user listed in ADMIN_EMAILS." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", value: email, onChange: (event) => setEmail(event.target.value), placeholder: "admin@example.com" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full", disabled: !email || loading, onClick: sendMagicLink, children: [
          loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Send Magic Link"
        ] })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdminShell, { status, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "mb-3", children: "Admin Panel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight text-primary md:text-4xl", children: "Content management" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Edit Supabase-backed content with visual image and page previews." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-sm text-muted-foreground", children: [
        adminEmail && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: adminEmail }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => void loadAdminContent(sessionToken), children: "Refresh" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: signOut, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "mr-2 h-4 w-4" }),
          "Sign out"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeKind, onValueChange: (value) => setActiveKind(value), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "h-auto flex-wrap justify-start", children: CONTENT_KINDS.map((kind) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: kind, children: [
          CONTENT_CONFIG[kind].label,
          " (",
          content[kind]?.length ?? 0,
          ")"
        ] }, kind)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: config.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:max-w-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "pl-9", value: query, onChange: (event) => setQuery(event.target.value), placeholder: "Search this section..." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: activeKind, className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-[360px_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContentList, { kind: activeKind, config, items: filteredItems, allContent: content, selectedId, onSelect: (item) => {
          setSelectedIds((current) => ({
            ...current,
            [activeKind]: text(item[config.key])
          }));
          setSaveState("idle");
        } }),
        selectedItem && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 xl:grid-cols-[1fr_420px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContentEditor, { config, draft, setDraft }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContentPreview, { kind: activeKind, config, item: mergePreviewItem(selectedItem, draft, config.fields), allContent: content, saveState, onSave: saveCurrentItem })
        ] })
      ] }) })
    ] })
  ] });
}
function AdminShell({
  children,
  status
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-[radial-gradient(circle_at_top_left,hsl(var(--accent)/0.16),transparent_34rem),linear-gradient(180deg,#fff,hsl(var(--secondary)/0.55))] px-4 py-8 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    status && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 rounded-xl border border-border bg-white px-4 py-3 text-sm text-muted-foreground shadow-sm", children: status }),
    children
  ] }) });
}
function ContentList({
  kind,
  config,
  items,
  allContent,
  selectedId,
  onSelect
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Items" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Select an item to edit and preview." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "max-h-[72vh] space-y-2 overflow-auto pr-3", children: items.map((item) => {
      const id = text(item[config.key]);
      const image = previewImage(kind, config, item, allContent);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => onSelect(item), className: `flex w-full gap-3 rounded-xl border p-3 text-left transition ${selectedId === id ? "border-accent bg-accent/10" : "border-border bg-white hover:border-accent/40"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-lg bg-secondary", children: image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "", className: "h-full w-full object-cover", loading: "lazy" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Image$1, { className: "h-5 w-5 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "line-clamp-2 text-sm font-semibold text-primary", children: text(item[config.title]) || id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 truncate text-xs text-muted-foreground", children: config.subtitle(item) })
        ] })
      ] }, id);
    }) })
  ] });
}
function ContentEditor({
  config,
  draft,
  setDraft
}) {
  const update = (key, value) => setDraft({
    ...draft,
    [key]: value
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { children: [
        "Edit ",
        config.label
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Changes are saved to Supabase only. File fallbacks are not edited." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "grid gap-4", children: config.fields.map((field) => {
      const value = draft[field.key] ?? "";
      if (field.type === "textarea" || field.type === "json") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TextField, { label: field.label, value, rows: field.rows ?? 5, onChange: (next) => update(field.key, next), readOnly: field.readOnly }, field.key);
      }
      if (field.type === "image") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ImageField, { label: field.label, value, onChange: (next) => update(field.key, next) }, field.key);
      }
      if (field.type === "richtext") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(RichTextField, { label: field.label, value, onChange: (next) => update(field.key, next), readOnly: field.readOnly }, field.key);
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: field.label, type: field.type === "number" ? "number" : "text", value, disabled: field.readOnly, onChange: (next) => update(field.key, next) }, field.key);
    }) })
  ] });
}
function ContentPreview({
  kind,
  config,
  item,
  allContent,
  saveState,
  onSave
}) {
  const image = previewImage(kind, config, item, allContent);
  const href = config.href?.(item);
  const title = text(item[config.title]) || text(item[config.key]);
  const description = previewDescription(kind, item);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-5 self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: config.label })
      ] }),
      href && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: "_blank", rel: "noopener noreferrer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "mr-2 h-4 w-4" }),
        "Open"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border bg-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[16/10] bg-secondary/60", children: image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: title, className: "absolute inset-0 h-full w-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-full place-items-center text-sm text-muted-foreground", children: "No preview image" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: text(item[config.key]) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold leading-tight text-primary", children: title }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-6 text-sm leading-relaxed text-muted-foreground", children: description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewFacts, { config, item })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full", onClick: onSave, disabled: saveState === "saving", children: [
        saveState === "saving" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "mr-2 h-4 w-4" }),
        saveState === "saved" ? "Saved" : "Save to Supabase"
      ] }),
      saveState === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: "Save failed." })
    ] })
  ] }) });
}
function PreviewFacts({
  config,
  item
}) {
  const fields = config.fields.filter((field) => field.type !== "json" && !field.readOnly).slice(0, 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 rounded-xl bg-secondary/60 p-4 text-xs", children: fields.map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: field.label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-muted-foreground", children: text(item[field.key]) || "-" })
  ] }, field.key)) });
}
function Field({
  label,
  value,
  onChange,
  disabled,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1.5 text-sm font-medium text-primary", children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type, value, disabled, onChange: (event) => onChange?.(event.target.value) })
  ] });
}
function RichTextField({
  label,
  value,
  onChange,
  readOnly
}) {
  const editor = useEditor({
    extensions: [index_default, index_default$2.configure({
      openOnClick: false
    }), index_default$1],
    content: value,
    editable: !readOnly,
    onUpdate: ({
      editor: editor2
    }) => {
      onChange(editor2.getHTML());
    }
  });
  reactExports.useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, {
        emitUpdate: false
      });
    }
  }, [value, editor]);
  if (!editor) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5 text-sm font-medium text-primary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-border bg-card shadow-sm focus-within:border-accent focus-within:ring-1 focus-within:ring-accent/20 transition-all", children: [
      !readOnly && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1 border-b border-border bg-muted/40 p-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => editor.chain().focus().toggleBold().run(), className: `h-8 w-8 p-0 ${editor.isActive("bold") ? "bg-accent/15 text-accent" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bold, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => editor.chain().focus().toggleItalic().run(), className: `h-8 w-8 p-0 ${editor.isActive("italic") ? "bg-accent/15 text-accent" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Italic, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => editor.chain().focus().toggleStrike().run(), className: `h-8 w-8 p-0 ${editor.isActive("strike") ? "bg-accent/15 text-accent" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Strikethrough, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-4 bg-border mx-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => editor.chain().focus().toggleHeading({
          level: 2
        }).run(), className: `h-8 w-8 p-0 ${editor.isActive("heading", {
          level: 2
        }) ? "bg-accent/15 text-accent" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heading2, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => editor.chain().focus().toggleHeading({
          level: 3
        }).run(), className: `h-8 w-8 p-0 ${editor.isActive("heading", {
          level: 3
        }) ? "bg-accent/15 text-accent" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heading3, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-4 bg-border mx-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => editor.chain().focus().toggleBulletList().run(), className: `h-8 w-8 p-0 ${editor.isActive("bulletList") ? "bg-accent/15 text-accent" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(List$1, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => editor.chain().focus().toggleOrderedList().run(), className: `h-8 w-8 p-0 ${editor.isActive("orderedList") ? "bg-accent/15 text-accent" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListOrdered, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-4 bg-border mx-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => {
          const url = window.prompt("URL:");
          if (url === null) return;
          if (url === "") {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
            return;
          }
          editor.chain().focus().extendMarkRange("link").setLink({
            href: url
          }).run();
        }, className: `h-8 w-8 p-0 ${editor.isActive("link") ? "bg-accent/15 text-accent" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => {
          const url = window.prompt("Image URL (You can upload from another tab and paste here):");
          if (url) {
            editor.chain().focus().setImage({
              src: url
            }).run();
          }
        }, className: "h-8 w-8 p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image$1, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 min-h-[250px] prose prose-sm max-w-none text-foreground/90 focus:outline-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditorContent, { editor }) })
    ] })
  ] });
}
function ImageField({
  label,
  value,
  onChange
}) {
  const [imgError, setImgError] = reactExports.useState(false);
  const [uploading, setUploading] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  const handleChange = (next) => {
    setImgError(false);
    onChange(next);
  };
  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploading(true);
      const session = await supabase.auth.getSession();
      const token = session.data.session?.access_token;
      if (!token) throw new Error("Not logged in. Please refresh.");
      let uploadFile = file;
      if (file.type.startsWith("image/") && file.type !== "image/webp" && file.type !== "image/gif" && file.type !== "image/svg+xml") {
        uploadFile = await new Promise((resolve) => {
          const img = new Image();
          const url2 = URL.createObjectURL(file);
          img.onload = () => {
            URL.revokeObjectURL(url2);
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            if (!ctx) return resolve(file);
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob) => {
              if (!blob) return resolve(file);
              const baseName = file.name.substring(0, file.name.lastIndexOf(".")) || file.name;
              resolve(new File([blob], `${baseName}.webp`, {
                type: "image/webp"
              }));
            }, "image/webp", 0.85);
          };
          img.onerror = () => {
            URL.revokeObjectURL(url2);
            resolve(file);
          };
          img.src = url2;
        });
      }
      const formData = new FormData();
      formData.append("file", uploadFile);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || `Upload failed with status ${res.status}`);
      }
      const {
        url
      } = await res.json();
      handleChange(url);
    } catch (err) {
      console.error("Upload failed", err);
      alert(`Upload failed: ${err instanceof Error ? err.message : "Unknown error"}`);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1.5 text-sm font-medium text-primary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "secondary", size: "sm", className: "h-7 text-xs", disabled: uploading, onClick: () => fileInputRef.current?.click(), children: uploading ? "Uploading..." : "Upload Image" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", className: "hidden", ref: fileInputRef, onChange: handleUpload }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", value, placeholder: "https://...", onChange: (event) => handleChange(event.target.value) }),
    value && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 overflow-hidden rounded-xl border border-border bg-secondary/40", children: !imgError ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: value, alt: "preview", className: "max-h-48 w-full object-contain p-2", onError: () => setImgError(true) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-20 items-center justify-center gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Image$1, { className: "h-4 w-4" }),
      "ไม่สามารถโหลดรูปได้"
    ] }) })
  ] });
}
function TextField({
  label,
  value,
  onChange,
  rows,
  readOnly
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "grid gap-1.5 text-sm font-medium text-primary", children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value, rows, readOnly, onChange: (event) => onChange(event.target.value), className: readOnly ? "opacity-70" : void 0 })
  ] });
}
function toDraft(item, fields) {
  return Object.fromEntries(fields.map((field) => {
    const value = item[field.key];
    if (field.type === "json") return [field.key, JSON.stringify(value ?? defaultJsonValue(field.key), null, 2)];
    return [field.key, text(value)];
  }));
}
function fromDraft(draft, fields) {
  const values = {};
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
    } else {
      values[field.key] = value;
    }
  }
  return values;
}
function mergePreviewItem(item, draft, fields) {
  const merged = {
    ...item
  };
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
    } else {
      merged[field.key] = value;
    }
  }
  return merged;
}
function defaultJsonValue(key) {
  if (key === "blocks" || key === "highlights" || key === "best_for") return [];
  return {};
}
function text(value) {
  if (value === null || value === void 0) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return JSON.stringify(value);
}
function firstImageFromBlocks(blocks) {
  if (!Array.isArray(blocks)) return null;
  const imageBlock = blocks.find((block) => typeof block === "object" && block !== null && "t" in block && "src" in block && block.t === "img" && typeof block.src === "string");
  return imageBlock?.src ?? null;
}
function previewImage(kind, config, item, allContent) {
  const direct = config.image?.(item);
  if (direct) return direct;
  if (kind === "articleCategories") {
    return articleImages[text(item.slug)] ?? null;
  }
  if (kind === "brands") {
    const slug = text(item.slug);
    return brandLogos[slug] || brandImages[slug] || firstProductImageForBrand(slug, allContent) || null;
  }
  if (kind === "brandIntros") {
    const brandSlug = text(item.brand_slug);
    const brand = (allContent.brands ?? []).find((candidate) => text(candidate.slug) === brandSlug);
    return text(brand?.logo_url) || text(brand?.image_url) || brandLogos[brandSlug] || brandImages[brandSlug] || firstProductImageForBrand(brandSlug, allContent) || null;
  }
  if (kind === "solutions") {
    return solutionImages[text(item.slug)] ?? null;
  }
  if (kind === "navItems") {
    return imageForHref(text(item.href), allContent);
  }
  if (kind === "industries") {
    const payloadImg = item.payload?.image_url;
    if (typeof payloadImg === "string" && payloadImg) return payloadImg;
  }
  return null;
}
function firstProductImageForBrand(brandSlug, allContent) {
  if (!brandSlug) return "";
  const product = (allContent.products ?? []).find((candidate) => text(candidate.brand_slug) === brandSlug && text(candidate.image_url));
  return text(product?.image_url);
}
function imageForHref(href, allContent) {
  if (!href) return null;
  const solutionMatch = href.match(/^\/([^/]+)$/);
  if (solutionMatch?.[1] && solutionImages[solutionMatch[1]]) {
    return solutionImages[solutionMatch[1]];
  }
  const brandMatch = href.match(/^\/brands\/([^/]+)$/);
  if (brandMatch?.[1]) {
    const slug = brandMatch[1];
    return brandLogos[slug] || brandImages[slug] || firstProductImageForBrand(slug, allContent) || null;
  }
  const categoryMatch = href.match(/^\/category\/([^/]+)$/);
  if (categoryMatch?.[1]) {
    const intro = (allContent.brandIntros ?? []).find((candidate) => text(candidate.category_id) === categoryMatch[1]);
    const brandSlug = text(intro?.brand_slug);
    return brandLogos[brandSlug] || brandImages[brandSlug] || firstProductImageForBrand(brandSlug, allContent) || null;
  }
  return null;
}
function previewDescription(kind, item) {
  if (kind === "products") return text(item.description_text);
  if (kind === "articles") return text(item.excerpt);
  if (kind === "brandIntros") return text(item.description);
  if (kind === "navItems") return text(item.description);
  return text(item.description) || text(item.payload);
}
export {
  AdminPage as component
};
