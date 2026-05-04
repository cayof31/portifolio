import Header from "@/components/Header";
import { normalizeSlug } from "@/lib/slug";
import { source } from "@/lib/source";


// const gothicJoker = GothicJoker({
//   variable: "--font-gothic-joker",
//   subsets: ["latin"],
// });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ritualsBySlug = new Map<string, { slug: string; title: string }>();

  source.getPages().forEach((page) => {
    const rawSlug = page.slugs?.[0];
    if (typeof rawSlug !== "string" || rawSlug.length === 0) return;

    const slug = normalizeSlug(rawSlug);
    if (!slug || ritualsBySlug.has(slug)) return;

    ritualsBySlug.set(slug, {
      slug,
      title: String(page.data.title ?? page.path),
    });
  });

  const rituals = Array.from(ritualsBySlug.values());

  return (
    <div className="page-texture w-full min-h-screen">
        <Header rituals={rituals}></Header>
        {children}
    </div>
  );
}
