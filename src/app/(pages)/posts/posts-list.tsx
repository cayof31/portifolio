"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { formatPostDate } from "@/lib/posts";

const POSTS_PER_PAGE = 6;

type PostSummary = {
  slug: string;
  href: string;
  title: string;
  description: string;
  date: string;
};

export function PostsList({ posts }: { posts: PostSummary[] }) {
  const searchParams = useSearchParams();
  const currentPage = Math.max(Number(searchParams.get("page") ?? "1") || 1, 1);
  const totalPages = Math.max(Math.ceil(posts.length / POSTS_PER_PAGE), 1);
  const safePage = Math.min(currentPage, totalPages);
  const paginatedPosts = posts.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE,
  );

  return (
    <>
      <div className="flex flex-col gap-5">
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-border/70 py-7 first:pt-0"
            >
              <Link
                href={post.href}
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <time
                  dateTime={post.date}
                  className="text-sm text-muted-foreground"
                >
                  {formatPostDate(post.date)}
                </time>
                <h2 className="mt-3 text-3xl uppercase leading-tight text-foreground transition-colors group-hover:text-primary md:text-4xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
                  {post.description}
                </p>
              </Link>
            </article>
          ))
        ) : (
          <p className="border-y border-border/70 py-8 text-muted-foreground">
            Nenhum post publicado ainda.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <footer className="flex items-center justify-between gap-4 border-t border-border/70 pt-6">
          {safePage > 1 ? (
            <Link
              href={`/posts?page=${safePage - 1}`}
              className="text-sm uppercase tracking-[0.18em] text-primary"
            >
              Posts recentes
            </Link>
          ) : (
            <span />
          )}

          <span className="text-sm text-muted-foreground">
            Pagina {safePage} de {totalPages}
          </span>

          {safePage < totalPages ? (
            <Link
              href={`/posts?page=${safePage + 1}`}
              className="text-sm uppercase tracking-[0.18em] text-primary"
            >
              Posts antigos
            </Link>
          ) : (
            <span />
          )}
        </footer>
      )}
    </>
  );
}
