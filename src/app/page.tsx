import Capa from "@/components/Capa";
import { getPosts } from "@/lib/posts";


export default function Home() {
  const posts = getPosts()
    .slice(0, 5)
    .map(({ slug, title, date }) => ({ slug, title, date }));

  return (
    <div className="min-h-screen bg-[var(--portfolio-bg)]">
      <Capa posts={posts} />
    </div>
  );
}
