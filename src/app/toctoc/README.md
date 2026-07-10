# 📱 Proposta Digital - Toc toc for kids

## 📋 Visão Geral

Esta é uma página de pitch/proposta comercial para **Toc toc for kids Casinha e Cozinhas Infantis**. 
A página demonstra o valor de uma presença digital profissional mostrando um catálogo online responsivo, interativo e otimizado para SEO.

**URL:** `/toctoc`

---

## 🏗️ Arquitetura

```
toctoc/
├── page.tsx                  # Página principal (Server Component)
├── layout.tsx               # Layout da rota (wrapper)
└── components/
    ├── HeroSection.tsx      # Seção de impacto inicial
    ├── ProblemSection.tsx   # Contextualiza o desafio atual
    ├── ShowcaseGallery.tsx  # Galeria interativa do site proposto
    ├── BenefitsCards.tsx    # 4 benefícios principais
    └── CallToAction.tsx     # CTA final com WhatsApp
```

---

## 🎨 Paleta de Cores (Pastéis Acolhedores)

| Cor | Hex | Uso |
|-----|-----|-----|
| rosa Menta | `#A8E6CF` | Destaques, badges, borders |
| Areia | `#FFD3B6` | Elementos decorativos |
| Coral Suave | `#FF9B7B` | Ênfase, CTAs secundárias |
| rosa Escuro | `#C2185B` | Textos principais, headers |
| rosa Médio | `#4A7C6E` | Subtítulos |
| rosa Claro | `#6B8B84` | Descrições, textos longos |
| Off-white | `#F7F3F0` | Fundo claro |
| Azul Aqua | `#F0F8F7` | Fundo alternativo |

---

## 🧩 Componentes

### 1. **HeroSection** (`HeroSection.tsx`)
- **Tipo:** Client Component (animações)
- **Responsabilidade:** Primeira impressão, impacto visual
- **Features:**
  - Efeito de bounce no emoji
  - Gradiente de fundo com blur decorativo
  - Botão suave que rola até a galeria
  - Tipografia hierárquica clara

**Para customizar:**
- Altere o emoji (linha ~19)
- Edite o título e subtítulo (linhas ~22-25)
- Mude o nome da empresa no subtítulo (linha ~24)

---

### 2. **ProblemSection** (`ProblemSection.tsx`)
- **Tipo:** Client Component
- **Responsabilidade:** Contextualizar por que ter um site é importante
- **Features:**
  - Grid de 4 problemas com ícones
  - Cards com border-left para destaque
  - Seção de esperança/positividade no final

**Para customizar:**
- Adicione/remova problemas no array `problemItems` (linhas ~8-24)
- Mude os ícones conforme necessário
- Adapte as mensagens de consequência

---

### 3. **ShowcaseGallery** (`ShowcaseGallery.tsx`)
- **Tipo:** Client Component (hover effects, useState)
- **Responsabilidade:** Mostrar como seria o site deles visualmente
- **Features:**
  - Grid responsivo 1x2x3 colunas
  - Imagens do Unsplash (placeholders)
  - Hover effect: zoom + overlay com slide-up
  - Categoria em badge no hover
  - Fallback info sempre visível

**Para customizar:**
- Altere as URLs das imagens no array `galleryItems` (linhas ~23-58)
  - Sugestão: Use Unsplash com tags como `wood toy`, `montessori`, `kids room`
  - Qualidade: `w=500&h=500&fit=crop`
- Edite títulos, descrições e categorias
- Ajuste o delay/duração das transições (busque `duration-` no código)

**Tags Unsplash recomendadas:**
```
- 'wood toy'
- 'montessori toys'
- 'kids room furniture'
- 'natural wood furniture'
- 'toy kitchen'
- 'playhouse'
```

---

### 4. **BenefitsCards** (`BenefitsCards.tsx`)
- **Tipo:** Client Component (hover effects)
- **Responsabilidade:** Comunicar os 4 benefícios principais
- **Features:**
  - Grid 2x2 com cards com hover effect
  - Elevação ao hover (translate-y)
  - Badges de destaques
  - Seção de stats/números na base

**Para customizar:**
- Edite o array `benefits` (linhas ~8-40)
- Altere os ícones e números/stats (linhas ~97-108)
- Ajuste as descrições conforme dinâmica

---

### 5. **CallToAction** (`CallToAction.tsx`)
- **Tipo:** Client Component (interatividade)
- **Responsabilidade:** Conversão final - levar para WhatsApp
- **Features:**
  - Botão WhatsApp com link direto
  - Botão secundário para voltar ao topo
  - Animações e efeitos de escala
  - Mensagem pré-formatada para WhatsApp

**Para customizar (MUITO IMPORTANTE):**
- **Altere o número de WhatsApp:**
  ```ts
  const whatsappNumber = '5565999999999'; // Seu número aqui!
  ```
  Formato: País (55) + DDD + número sem símbolos

- Customize a mensagem no array (linhas ~16-18)
- Adapte benefícios listados nos checkmarks
- Mude o emoji/tonalidade conforme necessário

---

## 🎭 Componentes Utilizados

- **Next.js Image:** Otimização automática de imagens
- **Lucide Icons:** Ícones SVG (importáveis, mas aqui usamos emojis por simplicidade)
- **Tailwind CSS:** Estilização responsiva
- **Radix UI:** Não é necessário para esta página, mas está disponível no projeto

---

## 📱 Responsividade

Todos os componentes seguem mobile-first:

| Breakpoint | Tailwind | Uso |
|-----------|----------|-----|
| Mobile | default | Telas < 640px |
| Small | `sm:` | Telas ≥ 640px |
| Medium | `md:` | Telas ≥ 768px |
| Large | `lg:` | Telas ≥ 1024px |

**Exemplo:** `text-2xl sm:text-3xl lg:text-4xl` = responsivo em 3 tamanhos

---

## 🔧 Como Estender/Modificar

### Adicionar uma nova seção:

1. Crie um novo arquivo em `components/NovaSecao.tsx`
2. Marque como `'use client'` se tiver interatividade
3. Exporte um componente funcional
4. Importe em `page.tsx` e adicione à renderização

### Trocar cores consistently:

Exemplo para trocar rosa menta por outra cor:
```bash
# Terminal: substitua globalmente
sed -i 's/#A8E6CF/#SEU_HEX_AQUI/g' components/*.tsx
```

### Adicionar scroll smooth:

Todos os botões já têm scroll suave. Use:
```tsx
onClick={() =>
  document.getElementById('alvo')?.scrollIntoView({ behavior: 'smooth' })
}
```

---

## 🚀 Performance

- **Server Component (page.tsx):** Renderization no servidor
- **Client Components:** Apenas o necessário (interatividade)
- **Imagens:** Otimizadas via Next.js Image + Unsplash CDN
- **CSS:** Inteiramente Tailwind (purged na build)
- **Animations:** Apenas CSS transitions (sem JavaScript pesado)

---

## ✅ Checklist para Produção

- [ ] Substitua imagens reais pelo menos na seção Showcase
- [ ] Atualize o número de WhatsApp
- [ ] Customize a mensagem de WhatsApp (CTA)
- [ ] Teste em mobile (certifique-se de responsive)
- [ ] Validar cores em diferentes iluminações
- [ ] Ajuste metadados (title, description) se necessário
- [ ] Teste todos os links (CTAs, scroll smooth, WhatsApp)

---

## 📞 Integração com WhatsApp

A CTA usa a API `wa.me/` do WhatsApp. A mensagem é codificada em URL e aparece no campo de chat do WhatsApp quando o usuário clica.

**Formato:**
```
https://wa.me/{PAÍS}{DDD}{NÚMERO}?text={MENSAGEM_CODIFICADA}
```

**Exemplo Brasil:**
```
https://wa.me/5565999999999?text=Olá!
```

---

## 📚 Referências

- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/)
- [Unsplash API](https://unsplash.com/api)
- [WhatsApp API](https://www.whatsapp.com/business/downloads/links/)

---

## 💡 Próximos Passos Sugeridos

1. **Imagens Reais:** Substitua os placeholders do Unsplash por fotos reais dos produtos
2. **Formulário de Orçamento:** Adicione um formulário na seção Showcase
3. **Integração com Analytics:** Rastreie cliques em CTA via Google Analytics
4. **Dark Mode:** Estenda a paleta para suportar tema escuro
5. **Animações Avançadas:** Use Framer Motion para transições mais elaboradas
6. **Múltiplas Páginas:** Crie páginas de "Sobre", "Portfólio", "Contato"

---

**Desenvolvido com ❤️ e atenção aos detalhes.**
