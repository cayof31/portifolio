import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DocsBody } from "fumadocs-ui/page";

import { ContentSection } from "@/components/content/";
import { ImageReel } from "@/components/mdx/image-reel";
import { formatPostDate } from "@/lib/date";
import { getPostBySlug, getPosts } from "@/lib/posts";
import { normalizeSlug } from "@/lib/slug";
import { getMDXComponents } from "@/mdx-components";
import { PostToc } from "@/components/mdx/postToc";

export const dynamic = "force-static";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const post = getPostBySlug(rawSlug);

  if (!post) {
    return {
      title: "Post nao encontrado | Portfolio",
    };
  }

  return {
    title: `${post.title} | Portfolio`,
    description: post.description,
    alternates: {
      canonical: post.href,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: post.href,
      images: post.heroImageReel?.[0]?.src
        ? [{ url: post.heroImageReel[0].src, alt: post.heroImageReel[0].alt }]
        : undefined,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);
  if (!slug) notFound();

  const post = getPostBySlug(slug);
  if (!post) notFound();
  const toc = post.page.data.toc ?? [];
  const MDX = post.page.data.body;

  return (
    <main className="min-h-screen py-32">
      <article className="mx-auto w-full max-w-5xl">
        <header className="mb-12 border-b border-dashed border-white/15 pb-8">
          <Link
            href="/posts"
            className="text-sm uppercase tracking-[0.18em] text-(--portfolio-accent)"
          >
            Posts
          </Link>
          <h1 className="mt-5 text-5xl uppercase leading-[0.95] tracking-[0.02em] text-(--portfolio-muted) md:text-7xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-(--portfolio-muted)">
            {post.description}
          </p>
          <time
            dateTime={post.date}
            className="mt-5 block text-sm text-(--portfolio-muted)"
          >
            {formatPostDate(post.date)}
          </time>
        </header>

        <PostToc items={toc} />

        <DocsBody className="portfolio-mdx prose dark:prose-invert">
          <MDX
            components={getMDXComponents({
              ContentSection,
              ImageReel,
            })}
          />
          <ImageReel images={post.heroImageReel} />
        </DocsBody>

        <footer className="mt-8 border-t border-dashed border-white/15 pt-8">
          <Link
            href="/posts"
            className="text-sm uppercase tracking-[0.18em] text-(--portfolio-muted)"
          >
            Voltar para posts
          </Link>
        </footer>
      </article>
    </main>
  );
}
