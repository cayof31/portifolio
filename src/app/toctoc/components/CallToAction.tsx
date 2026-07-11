'use client';

// CallToAction: Seção final com chamada clara para ação
// Link direto para WhatsApp com mensagem personizada
// Client component para animações e interatividade

export function CallToAction() {
  // Número do WhatsApp (sem símbolos)
  const whatsappNumber = '5566992717650'; 
  
  // Mensagem personalizada para a empresa
  const message = encodeURIComponent(
    'Olá Cayo, vim pela proposta comercial.\n\nPodemos conversar?'
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAFAFA] to-[#F5F5F5] relative overflow-hidden">
      {/* Elementos decorativos com efeito Material */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C2185B]/3 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#C2185B]/3 rounded-full blur-3xl" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8 sm:space-y-10">
        {/* Ícone decorativo */}
        <div className="text-7xl sm:text-8xl animate-bounce">🚀</div>

        {/* Título principal - Material Typography */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#1B1B1B]">
          Vamos construir o lar digital dos seus produtos?
        </h2>

        {/* Descrição */}
        <p className="text-lg sm:text-xl text-[#666666] leading-relaxed font-light">
          Esta proposta mostra apenas o começo do potencial. Cada detalhe pode ser
          adaptado ao estilo único da Toc toc for kids.
        </p>

        {/* Benefícios rápidos - Material List */}
        <div className="space-y-3 text-base text-[#666666] font-light">
          <p>✅ Site responsivo e rápido</p>
          <p>✅ Otimizado para busca e redes sociais</p>
          <p>✅ Sistema de agendamento/orçamento integrado</p>
        </div>

        {/* Botões de CTA - Material Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          {/* Botão primário - WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#25D366] text-white rounded-xl font-semibold text-lg hover:bg-[#1ea851] active:bg-[#158f44] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 5.411 4.406 9.857 9.846 9.857h.004c5.437 0 9.849-4.446 9.849-9.857 0-5.43-4.406-9.798-9.849-9.798M5.026 20.854a4.883 4.883 0 01-2.868-2.837l-1.284-2.27a4.878 4.878 0 012.839-6.835l1.289 2.267a4.878 4.878 0 012.837 2.837l-1.287 2.269a4.882 4.882 0 01-2.826 2.837m13.991.039s.095.1.2.275c.154.257.385.633.385 1.322 0 1.124-.629 1.79-1.282 1.906-.653.117-1.388-.227-2.207-1.062-.819-.836-1.59-2.024-2.211-3.176-.622-1.15-.903-2.06-.937-2.634-.016-.302.016-.496.079-.614.063-.118.128-.177.217-.27.178-.182.429-.437.719-.437.289 0 .5.208.577.383.077.175.164.498.164.859 0 .36-.224 1.048-.503 1.58-.279.531-.501.932-.644 1.077-.143.145-.358.363-.658.363-.299 0-.514-.218-.657-.363-.143-.145-.365-.546-.644-1.077-.279-.532-.504-1.22-.504-1.58 0-.361.088-.684.165-.859.077-.175.288-.383.577-.383.29 0 .541.255.719.437.089.093.154.152.217.27.063.118.095.312.079.614-.034.574-.315 1.484-.937 2.634-.621 1.152-1.392 2.34-2.211 3.176-.819.835-1.554 1.179-2.207 1.062-.653-.116-1.282-.782-1.282-1.906 0-.689.231-1.065.385-1.322.105-.175.2-.275.2-.275" />
            </svg>
            Conversar no WhatsApp
          </a>

          {/* Botão secundário */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border-2 border-[#C2185B] text-[#C2185B] rounded-xl font-semibold text-lg hover:bg-[#F5F5F5] active:bg-[#E8E8E8] transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
            Voltar ao topo
          </button>
        </div>

        {/* Mensagem final acolhedora - Material Card */}
        <div className="pt-8 border-t border-[#E8E8E8]">
          <p className="text-base text-[#666666] font-light">
            Pronto para transformar criatividade em realidade digital? 
          </p>
        </div>
        <div className="pt-4">
          <p className="text-base text-[#666666] font-light">
            Visitar meu Portfólio 
          </p>
        </div>
      </div>
    </section>
  );
}
