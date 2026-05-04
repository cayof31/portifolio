"use client";

import React from "react";
import Modal from "../Modal/index";
import Image from "next/image";

type HeroImageItem = {
  src: string;
  alt?: string;
  caption?: string;
};

export function HeroSection({
  videoSrc,
  videoTitle,
  thumbnail,
  children,
  imageReel,
  variant,
  legendaSrc,
}: {
  videoSrc: string;
  videoTitle?: string;
  thumbnail?: string;
  children: React.ReactNode;
  imageReel?: HeroImageItem[];
  legendaSrc?: string;
  variant?: "transparent" | "texture";
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeImageIndex, setActiveImageIndex] = React.useState<number | null>(null);
  const hasImageReel = (imageReel?.length ?? 0) > 0;
  const imageReelRef = React.useRef<HTMLDivElement | null>(null);
  const activeImage =
    activeImageIndex !== null ? imageReel?.[activeImageIndex] ?? null : null;
  const contentPreviewClassName = [
    "prose",
    "dark:prose-invert",
    "max-w-none",
    "text-lg",
    "[&>h2]:my-0",
    "[&>p]:my-0",
    "[&>h2]:text-[clamp(1.8rem,4vw,2.3rem)]",
    "[&>h2]:text-primary",
    "[&>h2]:leading-[1.2]",
    "[&>h2]:uppercase",
    "[&>p]:text-[clamp(1.5rem,1.8vw,1.4rem)]",
    "[&>p]:text-foreground",
    "text-justify",
    "[&>p]:leading-[1.8]",
    "[&>p]:opacity-85",
    "line-clamp-6",
  ].join(" ");

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

  return (
    <section className="chronology-section not-prose" data-variant={variant}>
      <div className="grid w-full grid-cols-1 items-center gap-4 px-2 sm:px-4 md:grid-cols-2 md:gap-60 md:px-32 md:text-left text-justify">
        <div className="z-1 mx-auto flex w-full text-justify max-w-[94vw] aspect-video items-center justify-center overflow-hidden rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.3)] md:max-w-none md:rounded-xl">
          {/* <video
            className="w-full h-full border-none"
            src={videoSrc}
            title={videoTitle || "Vídeo"}
            controls
          /> */}
          <video
            controls
            controlsList="nodownload noplaybackrate noremoteplayback"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            preload="metadata" // Carrega só os primeiros segundos/tamanho
            className="w-full h-full object-contain z-1"
            poster={`${thumbnail}`} // Se você tiver um frame salvo
            crossOrigin="anonymous"
          >
            <track
            kind="subtitles"
            src={legendaSrc}
            srcLang="pt"
            label="Português"
            default/> 

            <source src={videoSrc} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>

        <div
          onClick={() => setIsOpen(true)}
          className="relative mx-auto w-full max-w-[94vw] cursor-pointer rounded-2xl bg-black/70 bg-size-[140%_140%] p-4 md:max-w-none md:rounded-[32px] md:p-6"
        >
          <aside className="relative">
            <div className={contentPreviewClassName}>{children}</div>
          </aside>
          <p className="mt-3 text-right text-xs md:absolute md:bottom-2 md:right-5 md:mt-0 md:text-base">
            Clique para ler mais
          </p>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={videoTitle || "Texto completo"}
      >
      {children}
      </Modal>

      {hasImageReel && (
        <div className="film-strip absolute bottom-0 left-1/2 z-10 w-full -translate-x-1/2 bg-black px-1 pb-1 shadow-[0_8px_25px_rgba(0,0,0,0.5)] md:px-6 md:pb-2">
          <button
            type="button"
            onClick={() => scrollImageReel("left")}
            aria-label="Rolar imagens para a esquerda"
            className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 rounded-full px-3 py-2 text-3xl text-zinc-100 transition-colors hover:bg-zinc-800 md:block"
          >
            {"<"}
          </button>

          <div className="relative mx-2 overflow-hidden md:mx-12">
            <div
              ref={imageReelRef}
              className="no-scrollbar flex gap-2 overflow-x-auto px-2 py-3 scroll-smooth md:gap-3 md:px-4 md:py-5"
            >
              {imageReel?.map((item, index) => (
                <figure
                  key={`${item.src}-${index}`}
                  className="min-w-28 max-w-36 shrink-0 bg-black p-1 md:min-w-40 md:max-w-52"
                >
                  <button
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className="block w-full cursor-zoom-in"
                    aria-label={`Abrir imagem ${index + 1} em tela cheia`}
                  >
                    {/* URLs externas dinâmicas vindas do CMS/bucket. */}
                    <Image
                      width={240}
                      height={160}
                      src={item.src}
                      alt={item.alt || `Imagem ${index + 1}`}
                      loading="lazy"
                      className="h-20 w-full object-cover md:h-28"
                    />
                  </button>
                  {/* <figcaption className="pt-1 text-center text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                    {item.caption || item.alt || `Frame ${index + 1}`}
                  </figcaption> */}
                </figure>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollImageReel("right")}
            aria-label="Rolar imagens para a direita"
            className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 rounded-full px-3 py-2 text-3xl text-zinc-100 transition-colors hover:bg-zinc-800 md:block"
          >
            {">"}
          </button>
        </div>
      )}

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

      <style jsx>{`
        .film-strip::before,
        .film-strip::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 10px;
          z-index: 10;
          pointer-events: none;
          background: repeating-linear-gradient(
            to right,
            transparent 0,
            transparent 4px,
            rgba(255, 255, 255, 0.95) 4px,
            rgba(255, 255, 255, 0.95) 12px,
            transparent 12px,
            transparent 18px
          );
        }

        .film-strip::before {
          top: 0.3rem;
        }

        .film-strip::after {
          bottom: 0.3rem;
        }
      `}</style>
    </section>
  );
}
