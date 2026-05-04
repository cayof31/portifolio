// src/components/mdx/post-toc.tsx
import { TOCItemType } from "fumadocs-core/toc";


export function PostToc({ items }: { items: TOCItemType[] }) {
  if (items.length === 0) return null;

  return (
    <aside className="mb-12 border-b border border-white/15 p-5">
      <h2 className="text-lg uppercase tracking-[0.18em] text-[--portfolio-text]">
        Sumario
      </h2>

      <nav className="mt-4" aria-label="Sumario do post">
        <ol className="space-y-2">
          {items.map((item) => (
            <li
              key={item.url}
              style={{ paddingLeft: `${Math.max((item.depth ?? 2) - 2, 0)}rem` }}
            >
              <a
                href={item.url}
                className="text-sm text-[--portfolio-muted] transition-colors hover:text-[--portfolio-accent]"
              >
                &bull; {item.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
