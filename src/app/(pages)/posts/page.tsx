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
    <main className="min-h-screen px-5 py-32 md:px-12 lg:px-24">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <header className="border-b border-dashed border-white/15 pb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[rgba(245,194,163,0.9)]">
            Blog
          </p>
          <h1 className="text-5xl uppercase leading-[0.95] tracking-[0.02em] text-[#f8efe6] md:text-7xl">
            Posts
          </h1>
          <p className="mt-5 max-w-[62ch] text-[clamp(0.96rem,2vw,1.16rem)] leading-[1.65] text-[rgba(246,234,223,0.92)]">
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
