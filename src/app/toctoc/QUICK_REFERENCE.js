#!/usr/bin/env node
/**
 * 📋 QUICK REFERENCE - TocToc Pitch Page
 * 
 * Este arquivo usa comentários para documentar visualmente
 * a estrutura e como cada componente se relaciona.
 * 
 * NÃO EXECUTE - É SÓ REFERÊNCIA!
 */

// ┌─────────────────────────────────────────────────────────────┐
// │                    ESTRUTURA DA PÁGINA                      │
// └─────────────────────────────────────────────────────────────┘

// URL: /toctoc
// └── page.tsx (Server Component - renderiza estrutura)
//     ├── <HeroSection /> (Client Component)
//     │   ├── Emoji: 🏠 (bounce animation)
//     │   ├── Título: "A magia da marcenaria..."
//     │   ├── Subtítulo: "Proposta para Toc toc..."
//     │   └── Button: "Veja a proposta" → scroll smooth
//     │
//     ├── <ProblemSection /> (Client Component)
//     │   ├── Título: "O desafio atual"
//     │   ├── Grid 2x2 de problemas:
//     │   │   ├── 📱 Dependência plataformas
//     │   │   ├── 🔗 Sem narrativa web
//     │   │   ├── 📦 Catálogo desorganizado
//     │   │   └── 🔍 Invisível no Google
//     │   └── Box esperança: "É reversível!"
//     │
//     ├── <ShowcaseGallery /> (Client Component - INTERATIVO)
//     │   ├── Título: "Como ficaria..."
//     │   ├── Grid responsivo (1x2x3 colunas):
//     │   │   ├── Card 1: Cozinha Deluxe
//     │   │   ├── Card 2: Casinha Medieval
//     │   │   ├── Card 3: Móvel Montessori
//     │   │   ├── Card 4: Cozinha Retrô
//     │   │   ├── Card 5: Cabana Aconchego
//     │   │   └── Card 6: Peças Naturais
//     │   │
//     │   └── Cada card tem:
//     │       ├── Imagem (zoom ao hover)
//     │       ├── Badge categoria (aparece ao hover)
//     │       ├── Overlay com descrição (slide-up)
//     │       └── Info fallback (sempre visível)
//     │
//     ├── <BenefitsCards /> (Client Component)
//     │   ├── Título: "Por que ter um site?"
//     │   ├── Grid 2x2 de benefícios:
//     │   │   ├── 📚 Catálogo 24/7
//     │   │   ├── 🏆 Maior credibilidade
//     │   │   ├── 💬 Facilidade orçamento
//     │   │   └── 🔍 Posicionamento Google
//     │   │
//     │   └── Grid 4 colunas de stats:
//     │       ├── 24/7 Disponibilidade
//     │       ├── ∞ Produtos
//     │       ├── 🌍 Alcance global
//     │       └── 📈 Crescimento
//     │
//     ├── <CallToAction /> (Client Component)
//     │   ├── Emoji: 🚀 (decorativo)
//     │   ├── Título: "Vamos construir?"
//     │   ├── Lista de benefícios (checkmarks):
//     │   │   ├── ✅ Site responsivo e rápido
//     │   │   ├── ✅ Otimizado para busca
//     │   │   └── ✅ Sistema de orçamento
//     │   │
//     │   └── 2 Botões:
//     │       ├── [🟢 WhatsApp] (primário)
//     │       └── [⬜ Voltar ao topo] (secundário)
//     │
//     └── <footer>
//         └── © Feito com ❤️ para Toc toc for kids


// ┌─────────────────────────────────────────────────────────────┐
// │                    PALETA DE CORES                          │
// └─────────────────────────────────────────────────────────────┘

const COLORS = {
  // Verde escuro - headings
  primary: '#C2185B',
  // Verde médio - subtítulos
  secondary: '#4A7C6E',
  // Verde menta - highlights, badges
  accent: '#A8E6CF',
  // Coral - ênfase
  accent2: '#FF9B7B',
  // Areia - decorativo
  accent3: '#FFD3B6',
  // Off-white - fundo claro
  lightBg: '#F7F3F0',
  // Azul aqua - fundo alternativo
  lightBg2: '#F0F8F7',
  // Verde claro - textos longos
  textLight: '#6B8B84',
};

// AMOSTRA VISUAL:
// ┌──────────────────────────────────────────┐
// │ ▄▄▄ Verde Menta (#A8E6CF)               │
// │ ▄▄▄ Areia (#FFD3B6)                      │
// │ ▄▄▄ Coral (#FF9B7B)                      │
// │ ▄▄▄ Verde Escuro (#C2185B)              │
// │ ▄▄▄ Off-White (#F7F3F0)                 │
// └──────────────────────────────────────────┘

// ┌─────────────────────────────────────────────────────────────┐
// │                  RESPONSIVIDADE                             │
// └─────────────────────────────────────────────────────────────┘

const BREAKPOINTS = {
  mobile: '<640px',   // default (sem prefixo)
  sm: '≥640px',       // sm: prefixo
  md: '≥768px',       // md: prefixo
  lg: '≥1024px',      // lg: prefixo
};

// EXEMPLO:
// className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
// = 1 coluna mobile, 2 tablets, 3 desktop

// ┌─────────────────────────────────────────────────────────────┐
// │                FILES E LINHAS IMPORTANTES                   │
// └─────────────────────────────────────────────────────────────┘

const FILES = {
  'page.tsx': {
    linhas: '1-86',
    funcao: 'Orquestra tudo, Server Component',
    editavel: false,
  },
  'components/HeroSection.tsx': {
    linhas: '1-54',
    emoji: '🏠',
    editaveis: [
      'Linha 19: Emoji',
      'Linha 22-25: Título e subtítulo',
    ],
  },
  'components/ProblemSection.tsx': {
    linhas: '1-71',
    editaveis: [
      'Linhas 8-24: Array problemItems (add/remove)',
      'Linha 1: Ícones',
    ],
  },
  'components/ShowcaseGallery.tsx': {
    linhas: '1-148',
    notas: 'MAIS COMPLEXO - tem useState!',
    editaveis: [
      'Linhas 23-58: Array galleryItems (imagens)',
      'Linha 27: URLs Unsplash',
    ],
  },
  'components/BenefitsCards.tsx': {
    linhas: '1-108',
    editaveis: [
      'Linhas 8-40: Array benefits',
      'Linhas 97-108: Stats/números',
    ],
  },
  'components/CallToAction.tsx': {
    linhas: '1-105',
    critico: 'SUBSTITUA WhatsApp AQUI',
    editaveis: [
      'Linha 14: whatsappNumber = "SEU_NÚMERO"',
      'Linhas 16-18: Mensagem do WhatsApp',
    ],
  },
  'config.ts': {
    linhas: '1-75',
    uso: 'Configurações centralizadas',
    editaveis: [
      'Linha 11: whatsapp número (repetido!)',
      'Linha 7: company.name',
    ],
  },
};

// ┌─────────────────────────────────────────────────────────────┐
// │              AÇÕES IMEDIATAS NECESSÁRIAS                    │
// └─────────────────────────────────────────────────────────────┘

const TODO = [
  {
    prioridade: '🔴 CRÍTICO',
    acao: 'Substituir número de WhatsApp',
    arquivos: [
      'src/app/toctoc/components/CallToAction.tsx (linha ~14)',
      'src/app/toctoc/config.ts (linha ~11)',
    ],
    formato: '5565991234567',
    exemplo: '55 (Brasil) + 65 (Cuiabá) + 991234567',
  },
  {
    prioridade: '🟡 IMPORTANTE',
    acao: 'Testar no navegador',
    como: 'npm run dev → http://localhost:3000/toctoc',
    tempo: '2 minutos',
  },
  {
    prioridade: '🟢 RECOMENDADO',
    acao: 'Substituir imagens Unsplash por reais',
    arquivo: 'components/ShowcaseGallery.tsx',
    linhas: '23-58',
    tempo: '15-30 minutos',
  },
  {
    prioridade: '⚪ OPCIONAL',
    acao: 'Customizar textos/cores',
    referencia: 'Ver CUSTOMIZATION.md',
    tempo: 'N/A',
  },
];

// ┌─────────────────────────────────────────────────────────────┐
// │              CHECKLIST DE TESTE                             │
// └─────────────────────────────────────────────────────────────┘

const TESTING_CHECKLIST = {
  desktop: [
    '☐ Hero: Emoji animado (bounce)',
    '☐ Gallery: Hover faz zoom + overlay',
    '☐ Benefits: Cards levantam ao hover',
    '☐ CTA: Botão WhatsApp abre conversa',
    '☐ Scroll: Smooth (sem pulos)',
  ],
  mobile: [
    '☐ Sem overflow horizontal',
    '☐ Buttons tappáveis (min 44x44px)',
    '☐ Texto legível sem zoom',
    '☐ Grid responsivo (1 coluna)',
  ],
  accessibility: [
    '☐ Navega com Tab (sem mouse)',
    '☐ Contraste de cores adequado',
    '☐ Semantic HTML (h1, h2, button, etc)',
  ],
  performance: [
    '☐ Lighthouse score > 80',
    '☐ FCP < 2s',
    '☐ LCP < 3s',
  ],
};

// ┌─────────────────────────────────────────────────────────────┐
// │              COMANDOS ÚTEIS                                 │
// └─────────────────────────────────────────────────────────────┘

const COMMANDS = {
  'Iniciar dev': 'npm run dev',
  'Build': 'npm run build',
  'Produção local': 'npm start',
  'Lint': 'npm run lint',
};

// ┌─────────────────────────────────────────────────────────────┐
// │              DÚVIDAS? CONSULTE:                             │
// └─────────────────────────────────────────────────────────────┘

const DOCS = {
  'Estrutura técnica': 'README.md',
  'Como testar': 'TESTING.md',
  'Como customizar': 'CUSTOMIZATION.md',
  'Como usar (comece aqui)': 'SETUP.md',
  'Visão rápida': 'INDEX.md',
  'Este arquivo': 'QUICK_REFERENCE.js (comentários)',
};

//
// ╔═════════════════════════════════════════════════════════════╗
// ║                  RESUMO FINAL                              ║
// ║                                                             ║
// ║  ✅ Página criada                                           ║
// ║  ✅ 5 componentes modulares                                ║
// ║  ✅ Totalmente responsivo                                  ║
// ║  ✅ Documentação completa                                  ║
// ║                                                             ║
// ║    AÇÃO NECESSÁRIA:                                      ║
// ║     Atualizar número WhatsApp em 2 arquivos               ║
// ║                                                             ║
// ║  🚀 PRÓXIMO PASSO:                                         ║
// ║     npm run dev → /toctoc → Testar                        ║
// ║                                                             ║
// ║  Sucesso! Boa sorte com a apresentação 🎉                 ║
// ╚═════════════════════════════════════════════════════════════╝
//

export { COLORS, BREAKPOINTS, FILES, TODO, TESTING_CHECKLIST, COMMANDS, DOCS };
