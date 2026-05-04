import { DocsBody } from "fumadocs-ui/page";

import { notFound } from "next/navigation";
export const dynamic = 'force-static';

import { source } from "@/lib/source";
import { normalizeSlug } from "@/lib/slug";

import { HeroSection } from "@/components/mdx/hero-section";
import { ContentSection } from "@/components/content/";
import { getMDXComponents } from "@/mdx-components";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = new Set<string>();

  source.getPages().forEach((page) => {
    const rawSlug = page.slugs?.[0];
    if (typeof rawSlug !== "string" || rawSlug.length === 0) return;

    const slug = normalizeSlug(rawSlug);
    if (slug) slugs.add(slug);
  });

  return Array.from(slugs).map((slug) => ({ slug }));
}

export default async function Ritual({ params }: PageProps) {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);
  if (!slug || slug.length === 0) {
    notFound();
  }

  const page = source
    .getPages()
    .find((entry) => normalizeSlug(entry.slugs?.[0] ?? "") === slug);
  if (!page) {
    notFound();
  }

  const MDX = page.data.body;
  let heroSectionIndex = 0;
  const HeroSectionWithReel = (props: React.ComponentProps<typeof HeroSection>) => {
    const autoVariant: NonNullable<React.ComponentProps<typeof HeroSection>["variant"]> =
      heroSectionIndex % 2 === 0 ? "transparent" : "texture";
    heroSectionIndex += 1;

    return (
      <HeroSection
        {...props}
        variant={props.variant ?? autoVariant}
        imageReel={props.imageReel ?? page.data.heroImageReel}
      />
    );
  };

  return (
    <div className="w-full min-h-screen">
      {/* Header */}

      {/* Main onde o MDX Renderiza */}
      <main className="w-full">
        {/* A classe 'prose' estiliza textos padrão. 'max-w-none' impede que o texto fique estreito */}
        <DocsBody className="prose dark:prose-invert items-center max-w-none justify-center">
          <MDX components={getMDXComponents({ HeroSection: HeroSectionWithReel, ContentSection })} />
        </DocsBody>
      </main>

      {/* Footer */}
    </div>
  );
}
