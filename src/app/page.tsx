import type { Metadata } from "next";

import Capa from "@/components/Capa";
import { getPosts } from "@/lib/posts";
import { absoluteUrl, jsonLd, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${absoluteUrl("/")}#profile-page`,
  url: absoluteUrl("/"),
  name: siteConfig.title,
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  mainEntity: {
    "@type": "Person",
    "@id": `${absoluteUrl("/")}#person`,
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.role,
    url: absoluteUrl("/"),
    image: absoluteUrl(siteConfig.author.image),
    sameAs: siteConfig.author.sameAs,
    knowsAbout: siteConfig.keywords,
  },
};

export default function Home() {
  const posts = getPosts()
    .slice(0, 5)
    .map(({ slug, title, date }) => ({ slug, title, date }));

  return (
    <div className="min-h-screen bg-[var(--portfolio-bg)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(profilePageJsonLd) }}
      />
      <Capa posts={posts} />
    </div>
  );
}
