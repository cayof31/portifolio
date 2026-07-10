/**
 * CONFIGURAÇÕES DA PÁGINA TOCTOC
 * 
 * Arquivo centralizado para constantes da página de pitch.
 * Facilita manutenção e customização futura.
 */

export const TOCTOC_CONFIG = {
  // Informações da empresa
  company: {
    name: 'Toc toc for kids',
    tagline: 'Casinha e Cozinhas infantis',
    whatsapp: '5565992717650', //  SUBSTITUIR PELO NÚMERO REAL
  },

  // Paleta de cores Material Design 3
  // colors: {
  //   primary: '#C2185B', // Verde Material 600 - headings
  //   primaryLight: '#D81B60', // Verde Material 700
  //   accent: '#FCE4EC', // Verde Material 50
  //   accentStrong: '#C2185B', // Verde Material 600
  //   surface: '#FAFAFA', // Superfície
  //   onSurface: '#1B1B1B', // Texto principal
  //   onSurfaceVariant: '#666666', // Texto secundário
  //   outline: '#E8E8E8', // Borders
  // },
    colors: {
    primary: '#C2185B', // Rosa Material 600 - headings
    primaryLight: '#D81B60', // Rosa Material 700
    accent: '#FCE4EC', // Rosa Material 50
    accentStrong: '#C2185B', // Rosa Material 600
    surface: '#FAFAFA', // Superfície
    onSurface: '#1B1B1B', // Texto principal
    onSurfaceVariant: '#666666', // Texto secundário
    outline: '#E8E8E8', // Borders
  },

  // Seções e IDs para navegação
  sections: {
    hero: 'hero',
    problem: 'problem',
    showcase: 'showcase',
    benefits: 'benefits',
    cta: 'cta',
  },

  // Mensagem padrão WhatsApp
  whatsappMessage: `Olá Toc toc for kids! 👋\n\nGostaria de saber mais sobre a proposta digital para transformar meus produtos em um catálogo online profissional.\n\nPodemos conversar?`,

  // URLs de placeholders
  unsplashTags: [
    'wood toy',
    'wooden toys',
    'montessori',
    'kids room',
    'toy kitchen',
    'playhouse',
    'natural wood furniture',
  ],

  // Metadados
  metadata: {
    title: 'Proposta Digital - Toc toc for kids',
    description:
      'Proposta comercial: Transforme a criatividade em realidade digital. Um site profissional para suas cozinhas e casinhas infantis de marcenaria.',
  },
};

/**
 * Função helper para gerar link WhatsApp
 * @param message - Mensagem personalizada (usa default se não informado)
 * @returns URL para WhatsApp
 */
export const getWhatsappLink = (message?: string): string => {
  const text = encodeURIComponent(message || TOCTOC_CONFIG.whatsappMessage);
  return `https://wa.me/${TOCTOC_CONFIG.company.whatsapp}?text=${text}`;
};

/**
 * Função helper para gerar URL Unsplash com tag específica
 * @param tag - Tag para buscar
 * @param width - Largura em px
 * @param height - Altura em px
 * @returns URL da imagem
 */
export const getUnsplashUrl = (
  tag: string = 'wood toy',
  width: number = 500,
  height: number = 500
): string => {
  return `https://images.unsplash.com/photo-?w=${width}&h=${height}&fit=crop&q=80`;
};
