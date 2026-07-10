'use client';

import { useState } from 'react';
import Image from 'next/image';

// ShowcaseGallery: Galeria interativa mostrando como seria o site deles
// Usa placeholders do Unsplash e hover effects suaves
// Client component porque tem interatividade (hover e transições)

type GalleryItemType = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
};

const galleryItems: GalleryItemType[] = [
  {
    id: '1',
    title: 'Cozinha Infantil Deluxe',
    category: 'Cozinhas',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    description: 'Cozinha completa em madeira natural com acabamento premium',
  },
  {
    id: '2',
    title: 'Casinha de Bonecas',
    category: 'Casinhas',
    image:
      'https://images.unsplash.com/photo-1739133887954-ac18f17d1d5a?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Casinha artesanal com detalhes decorativos exclusivos',
  },
  {
    id: '3',
    title: 'Móvel Montessori Organizado',
    category: 'Móveis',
    image:
      'https://xihamontessori.com/wp-content/uploads/2023/09/montessori-furniture-129-1024x448.png',
    description: 'Móvel educativo desenvolvido conforme método Montessori',
  },
  {
    id: '4',
    title: 'Cozinha Retrô Pequena',
    category: 'Cozinhas',
    image:
      'https://images.unsplash.com/photo-1546532706-6cbd7895080c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Cozinha compacta ideal para apartamentos',
  },
  {
    id: '5',
    title: 'Cabana Infantil Aconchego',
    category: 'Casinhas',
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&h=500&fit=crop',
    description: 'Espaço de leitura e brincadeira aconchegante',
  },
  {
    id: '6',
    title: 'Peças em Madeira Natural',
    category: 'Acessórios',
    image:
      'https://images.unsplash.com/photo-1763310225230-6e15b125935a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Detalhes decor em madeira bruta sustentável',
  },
];

export function ShowcaseGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="showcase"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título da seção - Material Typography */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1B1B1B] mb-4">
            Como ficaria o catálogo online
          </h2>
          <p className="text-lg text-[#757575] max-w-2xl mx-auto font-light">
            Uma experiência visual limpa, intuitiva e focada em mostrar a qualidade dos produtos.
          </p>
        </div>

        {/* Grid responsivo - Material Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-xl overflow-hidden bg-white border border-[#E8E8E8] hover:shadow-lg hover:border-[#C2185B]/20 transition-all duration-300 cursor-pointer"
            >
              {/* Imagem com efeito zoom ao hover */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#F5F5F5]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-400"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay com categoria - Material Chip */}
                <div className="absolute top-3 right-3 px-3 py-1.5 bg-[#C2185B] text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.category}
                </div>
              </div>

              {/* Card info com efeito slide-up ao hover */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#1B1B1B] to-[#1B1B1B]/90 text-white transform transition-all duration-300 ${
                  hoveredId === item.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#E0E0E0]">{item.description}</p>
              </div>

              {/* Fallback info (sempre visível) */}
              <div className="p-5 sm:p-6 bg-white">
                <h3 className="text-base sm:text-lg font-semibold text-[#1B1B1B]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#757575] mt-2 font-light">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA intermediária */}
        <div className="mt-6 sm:mt-10 text-center">
            <p className="text-[#6B8B84] mb-18">
            Imagens meramente ilustrativas.
          </p>
          <p className="text-[#6B8B84] mb-6">
            Imagine seus produtos com essa apresentação profissional...
          </p>
          <button
            onClick={() =>
              document
                .getElementById('benefits')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center gap-2 px-6 py-2 bg-white border-2 border-[#C2185B] text-[#C2185B] rounded-full font-semibold hover:bg-[#F0F8F7] transition-colors duration-300"
          >
            Ver benefícios
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
