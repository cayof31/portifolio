"use client";

import Image from "next/image";
import React from "react";

export type ImageReelItem = {
  src: string;
  alt?: string;
  caption?: string;
};

export function ImageReel({ images }: { images?: ImageReelItem[] }) {
  const [activeImageIndex, setActiveImageIndex] = React.useState<number | null>(
    null,
  );
  const imageReelRef = React.useRef<HTMLDivElement | null>(null);
  const activeImage =
    activeImageIndex !== null ? images?.[activeImageIndex] ?? null : null;

  const scrollImageReel = React.useCallback((direction: "left" | "right") => {
    const container = imageReelRef.current;
    if (!container) return;

    const step = Math.max(container.clientWidth * 0.7, 220);
    container.scrollBy({
      left: direction === "right" ? step : -step,
      behavior: "smooth",
    });
  }, []);

  React.useEffect(() => {
    if (activeImageIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeImageIndex]);

  if (!images || images.length === 0) return null;

  return (
    <section className="not-prose my-5 py-2">
      <div className="relative overflow-hidden">
        <button
          type="button"
          onClick={() => scrollImageReel("left")}
          aria-label="Rolar imagens para a esquerda"
          className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-2xl text-[#f8efe6] transition-colors hover:bg-black md:block"
        >
          {"<"}
        </button>

        <div
          ref={imageReelRef}
          className="flex gap-3 overflow-x-auto scroll-smooth px-1 py-3 md:px-12"
        >
          {images.map((item, index) => (
            <figure
              key={`${item.src}-${index}`}
              className="min-w-44 max-w-52 shrink-0 bg-black/35 p-1"
            >
              <button
                type="button"
                onClick={() => setActiveImageIndex(index)}
                className="block w-full cursor-zoom-in"
                aria-label={`Abrir imagem ${index + 1} em tela cheia`}
              >
                <Image
                  width={280}
                  height={190}
                  src={item.src}
                  alt={item.alt || `Imagem ${index + 1}`}
                  loading="lazy"
                  className="h-28 w-full object-cover"
                />
              </button>
              {item.caption && (
                <figcaption className="pt-2 text-center text-[11px] uppercase tracking-[0.08em] text-[rgba(238,219,205,0.72)]">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollImageReel("right")}
          aria-label="Rolar imagens para a direita"
          className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/70 px-3 py-2 text-2xl text-[#f8efe6] transition-colors hover:bg-black md:block"
        >
          {">"}
        </button>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-80 flex items-center justify-center bg-black/90 p-2 md:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt || "Imagem ampliada"}
          onClick={() => setActiveImageIndex(null)}
        >
          <button
            type="button"
            aria-label="Fechar imagem"
            className="absolute right-4 top-4 rounded-md bg-black/70 px-3 py-2 text-sm text-white transition-colors hover:bg-black"
            onClick={() => setActiveImageIndex(null)}
          >
            Fechar
          </button>

          <div
            className="relative h-[85vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              fill
              src={activeImage.src}
              alt={activeImage.alt || "Imagem ampliada"}
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
