import type { Metadata } from "next";
import { Suspense } from "react";

import { getPosts } from "@/lib/posts";
import { absoluteUrl, jsonLd, siteConfig } from "@/lib/site";
import { PostsList } from "./posts-list";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Textos, relatos tecnicos e registros de construcao publicados por Cayo Felipe.",
  alternates: {
    canonical: "/posts",
  },
  openGraph: {
    title: "Posts | Cayo Felipe",
    description:
      "Textos, relatos tecnicos e registros de construcao publicados por Cayo Felipe.",
    url: "/posts",
    type: "website",
  },
};

export default async function PostsPage() {
  const posts = getPosts().map(({ slug, href, title, description, date }) => ({
    slug,
    href,
    title,
    description,
    date,
  }));
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${absoluteUrl("/posts")}#blog`,
    url: absoluteUrl("/posts"),
    name: "Posts | Cayo Felipe",
    description:
      "Textos, relatos tecnicos e registros de construcao publicados por Cayo Felipe.",
    inLanguage: siteConfig.language,
    author: {
      "@id": `${absoluteUrl("/")}#person`,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: absoluteUrl(post.href),
    })),
  };

  return (
    <main className="min-h-screen px-5 py-32 md:px-12 lg:px-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(blogJsonLd) }}
      />
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <header className="border-b border-dashed border-white/15 pb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.24em] text-(--portfolio-accent)">
            Blog
          </p>
          <h1 className="text-5xl uppercase leading-[0.95] tracking-[0.02em] text-(--portfolio-text) md:text-7xl">
            Posts
          </h1>
          <p className="mt-5 max-w-[62ch] text-[clamp(0.96rem,2vw,1.16rem)] leading-[1.65] text-(--portfolio-muted)">
            Textos recentes, bastidores de processo e registros de construcao.
          </p>
        </header>

        <Suspense fallback={null}>
          <PostsList posts={posts} />
        </Suspense>
      </section>
    </main>
  );
}
