import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DocsBody } from "fumadocs-ui/page";

import { ContentSection } from "@/components/content/";
import { HeroSection } from "@/components/mdx/hero-section";
import { formatPostDate, getPostBySlug, getPosts } from "@/lib/posts";
import { normalizeSlug } from "@/lib/slug";
import { getMDXComponents } from "@/mdx-components";

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
      title: "Post nao encontrado | Portifolio",
    };
  }

  return {
    title: `${post.title} | Portifolio`,
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

  const MDX = post.page.data.body;
  let heroSectionIndex = 0;
  const HeroSectionWithReel = (
    props: React.ComponentProps<typeof HeroSection>,
  ) => {
    const autoVariant: NonNullable<
      React.ComponentProps<typeof HeroSection>["variant"]
    > = heroSectionIndex % 2 === 0 ? "transparent" : "texture";
    heroSectionIndex += 1;

    return (
      <HeroSection
        {...props}
        variant={props.variant ?? autoVariant}
        imageReel={props.imageReel ?? post.heroImageReel}
      />
    );
  };

  return (
    <main className="min-h-screen px-5 py-28 md:px-12 lg:px-24">
      <article className="mx-auto w-full max-w-4xl">
        <header className="mb-12 border-b border-border/70 pb-8">
          <Link
            href="/posts"
            className="text-sm uppercase tracking-[0.18em] text-primary"
          >
            Posts
          </Link>
          <h1 className="mt-5 text-5xl uppercase leading-none text-foreground md:text-7xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            {post.description}
          </p>
          <time
            dateTime={post.date}
            className="mt-5 block text-sm text-muted-foreground"
          >
            {formatPostDate(post.date)}
          </time>
        </header>

        <DocsBody className="prose max-w-none dark:prose-invert">
          <MDX
            components={getMDXComponents({
              HeroSection: HeroSectionWithReel,
              ContentSection,
            })}
          />
        </DocsBody>

        <footer className="mt-14 border-t border-border/70 pt-8">
          <Link
            href="/posts"
            className="text-sm uppercase tracking-[0.18em] text-primary"
          >
            Voltar para posts
          </Link>
        </footer>
      </article>
    </main>
  );
}
