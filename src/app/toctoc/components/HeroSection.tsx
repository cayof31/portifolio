'use client';

// Hero Section: Material Design - Primeira impressão com foco visual
// Elevação suave, tipografia hierárquica e espaçamento generoso
export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FAFAFA] via-[#F5F5F5] to-[#F0F4F3] relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Elementos decorativos com efeito Material */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C2185B]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#C2185B]/5 rounded-full blur-3xl" />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 sm:space-y-10">
        {/* Logo/Marca com animação suave */}
        <div className="inline-flex justify-center">
          <div className="text-7xl sm:text-8xl mb-6 animate-pulse">🏠</div>
        </div>

        {/* Título principal - Typography Material */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#C2185B] leading-tight tracking-tight">
          A magia da marcenaria criativa merece o mundo digital
        </h1>

        {/* Subtítulo com hierarquia clara */}
        <div className="space-y-4">
          <p className="text-xl sm:text-2xl text-[#D81B60] font-medium">
            Uma proposta de presença online exclusiva para
          </p>
          <p className="text-2xl sm:text-3xl text-[#C2185B] font-semibold">
            Toc toc for kids
          </p>
        </div>

        {/* Descrição secundária */}
        <p className="text-lg sm:text-xl text-[#666666] max-w-2xl mx-auto leading-relaxed font-light">
          Casinha e Cozinhas infantis que encantem, criem e inspirem
        </p>

        {/* CTA Principal - Material Button */}
        <div className="pt-8">
          <button
            onClick={() =>
              document
                .getElementById('problem')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#C2185B] text-white rounded-xl font-semibold hover:bg-[#8b1285] active:bg-[#680c63] transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            Veja a proposta
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
