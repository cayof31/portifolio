import { getPosts } from "@/lib/posts";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const posts = getPosts();

  const items = posts
    .map((post) => {
      const url = `${siteUrl}${post.href}`;

      return `
        <item>
          <title>${escapeXml(post.title)}</title>
          <description>${escapeXml(post.description)}</description>
          <link>${escapeXml(url)}</link>
          <guid>${escapeXml(url)}</guid>
          <pubDate>${new Date(`${post.date}T00:00:00`).toUTCString()}</pubDate>
        </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Portifolio - Posts</title>
        <description>Textos publicados no portifolio.</description>
        <link>${escapeXml(siteUrl)}</link>
        ${items}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
