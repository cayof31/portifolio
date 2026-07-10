'use client';

// BenefitsCards: Apresenta os 4 principais benefícios de ter um site
// Cards com ícones, títulos e descrições em layout responsivo
// Usa padrão de cores pastéis consistente

type BenefitType = {
  icon: string;
  title: string;
  description: string;
  highlight: string;
};

const benefits: BenefitType[] = [
  {
    icon: '📚',
    title: 'Catálogo Organizado 24/7',
    description:
      'Todos os produtos em um só lugar, sempre disponível. Clientes exploram no seu tempo.',
    highlight: 'Sem limites de conteúdo',
  },
  {
    icon: '🏆',
    title: 'Maior Credibilidade',
    description:
      'Um site profissional transmite confiança. Pais preferem comprar de marcas que investem na presença digital.',
    highlight: '+40% mais confiança',
  },
  {
    icon: '💬',
    title: 'Facilidade de Orçamento',
    description:
      'Formulário integrado. Clientes solicitam orçamentos diretamente. Menos esforço, mais conversões.',
    highlight: 'Automação inteligente',
  },
  {
    icon: '🔍',
    title: 'Posicionamento no Google',
    description:
      'Quando alguém procura "cozinha infantil madeira", seu site aparece. SEO traz clientes que estão buscando.',
    highlight: 'Tráfego orgânico contínuo',
  },
];

export function BenefitsCards() {
  return (
    <section
      id="benefits"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F5F5F5]\"
    >
      <div className="max-w-6xl mx-auto">
        {/* Título da seção - Material Typography */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1B1B1B] mb-4">
            Por que ter um site?
          </h2>
          <p className="text-lg text-[#757575] max-w-2xl mx-auto font-light">
            Benefícios concretos que vão impulsionar o crescimento da Toc toc for kids.
          </p>
        </div>

        {/* Grid de benefícios - Material Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-7 sm:p-8 rounded-xl bg-white border border-[#E8E8E8] hover:shadow-md hover:border-[#C2185B]/20 transition-all duration-200"
            >
              {/* Ícone */}
              <div className="text-5xl sm:text-6xl mb-5">{benefit.icon}</div>

              {/* Título */}
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1B1B1B] mb-3">
                {benefit.title}
              </h3>

              {/* Descrição */}
              <p className="text-[#666666] mb-5 text-sm sm:text-base leading-relaxed font-light">
                {benefit.description}
              </p>

              {/* Destaque em badge - Material Chip */}
              <div className="inline-block px-3 py-1.5 bg-[#FCE4EC] text-[#C2185B] text-xs sm:text-sm font-semibold rounded-full">
                 {benefit.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Seção de números/stats - Material Stats Cards */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { number: '24/7', label: 'Disponibilidade' },
            { number: '∞', label: 'Produtos' },
            { number: '🌍', label: 'Alcance global' },
            { number: '📈', label: 'Crescimento' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-5 sm:p-6 bg-gradient-to-br from-[#FCE4EC] to-[#F0F8F7] rounded-xl border border-[#C2185B]/10 hover:border-[#C2185B]/30 transition-colors duration-200"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#C2185B] mb-2">
                {stat.number}
              </div>
              <p className="text-xs sm:text-sm text-[#666666] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
