import { source } from "@/lib/source";
import { normalizeSlug } from "@/lib/slug";

type SourcePage = ReturnType<typeof source.getPages>[number];

export type BlogPost = {
  page: SourcePage;
  slug: string;
  href: string;
  title: string;
  description: string;
  date: string;
  heroImageReel?: SourcePage["data"]["heroImageReel"];
};

export function getPosts(): BlogPost[] {
  const postsBySlug = new Map<string, BlogPost>();

  source.getPages().forEach((page) => {
    const rawSlug = page.slugs?.[0];
    if (typeof rawSlug !== "string" || rawSlug.length === 0) return;

    const slug = normalizeSlug(rawSlug);
    if (!slug || postsBySlug.has(slug)) return;

    postsBySlug.set(slug, {
      page,
      slug,
      href: `/posts/${slug}`,
      title: String(page.data.title ?? page.path),
      description: String(page.data.description ?? ""),
      date: String(page.data.date ?? ""),
      heroImageReel: page.data.heroImageReel,
    });
  });

  return Array.from(postsBySlug.values()).sort((a, b) =>
    b.date.localeCompare(a.date),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const normalizedSlug = normalizeSlug(slug);

  return getPosts().find((post) => post.slug === normalizedSlug);
}

export function formatPostDate(date: string): string {
  if (!date) return "";

  const parsedDate = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsedDate.getTime())) return date;

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}
