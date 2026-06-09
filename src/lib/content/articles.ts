import type { SupabaseClient } from "@supabase/supabase-js";
import {
  articles as fileArticles,
  articleCategories as fileArticleCategories,
  getArticle as getFileArticle,
  type Article,
} from "@/data/articles";
import type { ArticleBlock } from "@/data/article-contents";
import { supabase } from "@/integrations/supabase/client";

type ArticleCategory = (typeof fileArticleCategories)[number];

type ContentDatabase = {
  public: {
    Tables: {
      content_article_categories: {
        Row: {
          slug: string;
          label: string;
        };
      };
      content_articles: {
        Row: {
          article_id: number;
          title: string;
          slug: string;
          category: string;
          excerpt: string;
          published_date: string;
          read_min: number;
          canonical_url: string | null;
          cover_image_url: string | null;
          blocks: ArticleBlock[] | null;
        };
      };
    };
  };
};

type ArticleListContent = {
  articles: Article[];
  articleCategories: ArticleCategory[];
  source: "supabase" | "files";
  error?: unknown;
};

const contentClient = supabase as unknown as SupabaseClient<ContentDatabase>;

function fromFiles(error?: unknown): ArticleListContent {
  return {
    articles: fileArticles,
    articleCategories: fileArticleCategories,
    source: "files",
    error,
  };
}

export async function loadArticleListContent(): Promise<ArticleListContent> {
  try {
    const [categoriesResult, articlesResult] = await Promise.all([
      contentClient.from("content_article_categories").select("slug,label").order("slug"),
      contentClient
        .from("content_articles")
        .select(
          "article_id,title,slug,category,excerpt,published_date,read_min,canonical_url,cover_image_url,blocks",
        )
        .order("article_id", { ascending: true }),
    ]);

    if (categoriesResult.error) throw categoriesResult.error;
    if (articlesResult.error) throw articlesResult.error;

    const articleCategories =
      categoriesResult.data?.map((row: any) => ({
        slug: row.slug,
        label: row.label,
        labelEn: row.label,
      })) ?? [];

    const articles =
      articlesResult.data?.map((r) => {
        const row = r as any;
        return {
          id: row.article_id,
          title: row.title,
          slug: row.slug,
          category: row.category,
          excerpt: row.excerpt,
          date: row.published_date,
          readMin: row.read_min,
          canonicalUrl: row.canonical_url ?? undefined,
          coverImageUrl: row.cover_image_url ?? undefined,
          blocks: row.blocks ?? undefined,
        };
      }) ?? [];

    if (articleCategories.length === 0 || articles.length === 0) {
      throw new Error("Supabase content snapshot is empty.");
    }

    return {
      articles,
      articleCategories,
      source: "supabase",
    };
  } catch (error) {
    console.warn("[content] Falling back to file-based article content.", error);
    return fromFiles(error);
  }
}

export async function loadArticleDetailContent(slug: string): Promise<
  ArticleListContent & {
    article: Article | undefined;
    relatedArticles: Article[];
    category: ArticleCategory | undefined;
  }
> {
  const listContent = await loadArticleListContent();
  let article = listContent.articles.find((item) => item.slug === slug);

  if (!article && listContent.source === "supabase") {
    article = getFileArticle(slug);
  }

  const sourceArticles =
    article && listContent.articles.some((item) => item.slug === article.slug)
      ? listContent.articles
      : fileArticles;
  const sourceCategories =
    listContent.articleCategories.length > 0
      ? listContent.articleCategories
      : fileArticleCategories;

  return {
    ...listContent,
    article,
    category: article ? sourceCategories.find((item) => item.slug === article.category) : undefined,
    relatedArticles: article
      ? sourceArticles
          .filter((item) => item.category === article.category && item.id !== article.id)
          .slice(0, 3)
      : [],
  };
}

export const fallbackArticleListContent = fromFiles();
