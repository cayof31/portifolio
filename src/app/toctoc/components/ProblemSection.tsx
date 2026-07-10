'use client';

// ProblemSection: Material Design - Contextualiza o desafio
// Cards elevados, espaçamento generoso, tipografia clara
type ProblemItemType = {
  problem: string;
  consequence: string;
  icon: string;
};

const problemItems: ProblemItemType[] = [
  {
    problem: 'Dependência de plataformas externas',
    consequence: 'Algoritmos mudam, alcance diminui, sem controle total',
    icon: '📱',
  },
  {
    problem: 'Sem narrativa própria na web',
    consequence: 'Falta de credibilidade e profissionalismo',
    icon: '🔗',
  },
  {
    problem: 'Catálogo desorganizado',
    consequence: 'Clientes não conseguem explorar produtos facilmente',
    icon: '📦',
  },
  {
    problem: 'Sem presença em buscas (SEO)',
    consequence: 'Perdem cliente que procuram "cozinha infantil" no Google',
    icon: '🔍',
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        {/* Título da seção - Material Typography */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1B1B1B] mb-4">
            O desafio atual
          </h2>
          <p className="text-lg text-[#757575] max-w-2xl mx-auto font-light">
            Produtos excepcionais merecem uma vitrine à altura. Veja o que está sendo deixado de lado.
          </p>
        </div>

        {/* Grid de problemas - Material Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 font-serif">
          {problemItems.map((item, index) => (
            <div
              key={index}
              className="p-7 sm:p-8 rounded-xl bg-white border border-[#E8E8E8] hover:shadow-md hover:border-[#C2185B]/20 transition-all duration-200"
            >
              {/* Ícone */}
              <div className="text-5xl mb-5">{item.icon}</div>

              {/* Problema */}
              <h3 className="text-lg sm:text-xl font-semibold text-[#1B1B1B] mb-3">
                {item.problem}
              </h3>

              {/* Consequência */}
              <p className="text-[#666666] text-sm sm:text-base font-light leading-relaxed">
                 {item.consequence}
              </p>
            </div>
          ))}
        </div>

        {/* Mensagem de esperança - Material Card */}
        <div className="mt-16 sm:mt-20 p-8 bg-[#FCE4EC] rounded-xl border border-[#C2185B]/20 text-center shadow-sm">
          <p className="text-lg text-[#C2185B] font-medium">
             A boa notícia? Tudo isso é reversível com uma estratégia digital pensada.
          </p>
        </div>
      </div>
    </section>
  );
}
