import type { Metadata } from "next";
import { Suspense } from "react";

import { getPosts } from "@/lib/posts";
import { PostsList } from "./posts-list";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Posts | Portifolio",
  description: "Textos, relatos e registros publicados no portifolio.",
};

export default async function PostsPage() {
  const posts = getPosts().map(({ slug, href, title, description, date }) => ({
    slug,
    href,
    title,
    description,
    date,
  }));

  return (
    <main className="min-h-screen px-5 py-28 md:px-12 lg:px-24">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <header className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.24em] text-primary">
            Blog
          </p>
          <h1 className="text-5xl uppercase leading-none text-foreground md:text-7xl">
            Posts
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Textos recentes, bastidores de processo e registros em MDX.
          </p>
        </header>

        <Suspense fallback={null}>
          <PostsList posts={posts} />
        </Suspense>
      </section>
    </main>
  );
}
