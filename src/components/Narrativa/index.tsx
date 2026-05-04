'use client';

import { useEffect, useRef, useState } from 'react';

const conteudos = [
  {
    id: 1,
    texto: "A terra guarda memórias profundas. Cada grão de solo conta uma história de quem pisou aqui antes de nós.",
    imagem: "url('/FundoCapa.svg')" // Substitua pelas suas imagens
  },
  {
    id: 2,
    texto: "As raízes se entrelaçam formando uma rede invisível de sabedoria ancestral.",
    imagem: "url('/sua-imagem-2.jpg')"
  },
  {
    id: 3,
    texto: "Ouvir o silêncio da natureza é o primeiro passo para entender nossa própria origem.",
    imagem: "url('/sua-imagem-3.jpg')"
  }
];

export default function Narrativa() {
  const [fundoAtivo, setFundoAtivo] = useState(conteudos[0].imagem);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Usamos IntersectionObserver para saber qual card de texto está no centro da tela
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setFundoAtivo(conteudos[index].imagem);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } // Dispara quando o card chega no meio da tela
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full bg-black">
      {/* Fundo Fixo (Sticky) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out opacity-50 z-110"
          style={{ backgroundImage: fundoAtivo }}
        />
        {/* Overlay escuro para facilitar a leitura */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Textos que rolam por cima (Scrollytelling) */}
      <div className="relative z-10 pb-[20vh] -mt-[100vh]">
        {conteudos.map((item, index) => (
          <div 
            key={item.id}
            ref={(el) => { refs.current[index] = el; }}
            data-index={index}
            className="h-screen flex items-center justify-center w-full"
          >
            <div className="bg-card/90 backdrop-blur-sm p-8 md:p-12 rounded-xl max-w-2xl w-[90%] shadow-earth border border-border/50 transition-all duration-700 hover:scale-[1.02]">
              <p className="text-xl md:text-3xl font-organic text-foreground leading-relaxed text-center">
                {item.texto}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}