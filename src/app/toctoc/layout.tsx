import type { Metadata } from 'next';
import type { ReactNode } from 'react';

/**
 * Metadados da página /toctoc
 * Importante para SEO e compartilhamento em redes sociais
 */
export const metadata: Metadata = {
  title: 'Proposta Digital - Toc toc for kids',
  description:
    'Proposta comercial: Transforme a criatividade em realidade digital. Um site profissional para suas cozinhas e casinhas infantis de marcenaria.',
  robots: {
    index: false, // Não aparece no Google (é uma proposta comercial)
    follow: false,
  },
  openGraph: {
    title: 'Proposta Digital - Toc toc for kids',
    description:
      'Descubra como um site profissional pode transformar sua marcenaria criativa infantil.',
    type: 'website',
  },
};

/**
 * Layout da rota /toctoc
 *
 * Este layout é wrapper de todos os components dentro de /toctoc
 * - Pode ser usado para aplicar estilos específicos
 * - Pode conter navegação contextual
 * - Herda Provider do layout raiz da aplicação
 */
export default function TocTocLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      {/* 
        O children renderiza a página dentro deste layout.
        Neste caso, é bastante simples - apenas o wrapper.
        No futuro, pode adicionar:
        - Header customizado
        - Sidebar
        - Sidebar contextual de navegação
      */}
      {children}
    </div>
  );
}
