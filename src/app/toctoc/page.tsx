'use client';

import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { BenefitsCards } from './components/BenefitsCards';
import { CallToAction } from './components/CallToAction';

/**
 * Página de Pitch Comercial - Toc toc for kids
 *
 * Arquitetura:
 * - Client Component (página) para máxima compatibilidade com ThemeProvider
 * - Componentes filhos também Client Components com 'use client'
 *   pois usam hooks (useState, etc) e interatividade
 * - Layout.tsx é Server Component (cuida de metadata)
 *
 * Estrutura Visual:
 * 1. Hero: Primeira impressão emocional
 * 2. Problem: Contextualiza o desafio
 * 3. Showcase: Galeria interativa do que seria o site
 * 4. Benefits: Por que ter um site
 * 5. CTA: Chamada à ação com WhatsApp
 */
export default function TocTocPitchPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#FAFAFA] to-[#F5F5F5]">
      {/* 
        Todas as seções são Client Components
        que têm transições, hover effects e interatividade suave.
      */}

      {/* Seção 1: Hero - Impacto visual e emocional */}
      <HeroSection />

      {/* Seção 2: O Problema - Contextualização */}
      <ProblemSection />

      {/* Seção 3: Showcase - Galeria do site proposto */}
      <ShowcaseGallery />

      {/* Seção 4: Por que ter um site - Benefícios */}
      <BenefitsCards />

      {/* Seção 5: CTA - Chamada à ação final */}
      <CallToAction />

      {/* Footer Material Design */}
      <footer className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-[#1B1B1B] text-white text-center text-sm border-t border-[#333333]\">
        <p className="font-light">
          Proposta realizada com ❤️ para{' '}
          <span className="font-semibold">Toc toc for kids Casinha e Cozinhas Infantis</span>
        </p>
        <p className="mt-2 text-[#B0B0B0] font-light">
          Uma presença digital que honra sua criatividade.
        </p>
      </footer>
    </main>
  );
}
