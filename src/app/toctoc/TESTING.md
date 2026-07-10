# 🧪 GUIA RÁPIDO DE TESTE - TocToc Pitch Page

## 🚀 Como Visualizar a Página

### 1. Com o servidor de desenvolvimento rodando:

```bash
# Na pasta raiz do projeto
npm run dev

# Depois, no navegador:
# http://localhost:3000/toctoc
```

### 2. Build para produção:

```bash
npm run build
npm start

# http://localhost:3000/toctoc
```

---

## ✅ Checklist de Teste Manual

### Desktop (1920x1080+)

- [ ] **Hero Section**
  - [ ] Emoji animado (bounce)
  - [ ] Texto legível e bem hierarquizado
  - [ ] Botão "Veja a proposta" funciona (scroll suave)
  - [ ] Cores pastéis suaves ao fundo

- [ ] **Problem Section**
  - [ ] Grid 2x2 dos problemas visível
  - [ ] Cards com border-left colorido
  - [ ] Hovering cards funciona (se houver effect)
  - [ ] Badge verde "Boa notícia" aparece

- [ ] **Showcase Gallery**
  - [ ] Grid 3 colunas
  - [ ] Imagens carregan (Unsplash)
  - [ ] Hover: zoom em imagem + overlay com info
  - [ ] Hover: categoria em badge aparece
  - [ ] Botão "Ver benefícios" funciona (scroll)

- [ ] **Benefits Cards**
  - [ ] Grid 2x2 com 4 cards de benefícios
  - [ ] Hover: elevation effect (sombra + translate)
  - [ ] Grid 4 colunas com stats na base
  - [ ] Todos os ícones aparecem

- [ ] **CTA**
  - [ ] Botão WhatsApp verde com ícone
  - [ ] Botão "Voltar ao topo" branco
  - [ ] Links funcionam (abrem nova aba se WhatsApp)
  - [ ] Texto e emojis decorativos aparecem

- [ ] **Footer**
  - [ ] Logo/nome da empresa
  - [ ] Mensagem final

### Mobile (375x667 - iPhone SE)

- [ ] **Responsividade Geral**
  - [ ] Nenhum overflow horizontal
  - [ ] Texto legível sem zoom
  - [ ] Espaçamento apropriado

- [ ] **Hero**
  - [ ] Emoji maior (escala bem)
  - [ ] Título reduzido mas legível
  - [ ] Botão toca sem hacks

- [ ] **Showcase**
  - [ ] Grid muda para 1 coluna
  - [ ] Imagens redimensionam bem
  - [ ] Hover effects ainda funcionam em touch

- [ ] **Buttons**
  - [ ] Todos os botões são tappáveis (mín 44x44px)
  - [ ] WhatsApp link abre app/web
  - [ ] Nenhum truncamento de texto

### Tablet (768x1024 - iPad)

- [ ] Grid muda para 2 colunas (Showcase)
- [ ] Benefícios em 2x2
- [ ] Espaçamento ajustado
- [ ] Tipografia legível

---

## 🎨 Teste de Cores

Certifique-se de que as cores pastéis aparecem correto:

```
Verde Menta (#A8E6CF):  Badges, highlights
Areia (#FFD3B6):        Backgrounds decorativos
Coral (#FF9B7B):        CTAs secundárias
Verde Escuro (#C2185B): Textos principais
Off-white (#F7F3F0):    Fundos claros
```

- [ ] Cores aparecem suaves e acolhedoras (não vibrantes)
- [ ] Contraste adequado para legibilidade
- [ ] Paleta consistente em toda página

---

## 🔗 Teste de Links

- [ ] **Scroll Smooth**
  - [ ] Hero → Showcase: suave
  - [ ] Showcase → Benefits: suave
  - [ ] Qualquer lugar → Topo: suave

- [ ] **WhatsApp**
  - [ ] Clica no botão WhatsApp
  - [ ] Abre conversa com mensagem pré-preenchida
  - [ ] URL correta: `https://wa.me/{NÚMERO}?text=...`

- [ ] **External Links**
  - [ ] Todos abrem em nova aba
  - [ ] Não há links quebrados

---

## ⚡ Teste de Performance

```bash
# Verifique no DevTools (F12)

# Lighthouse
1. Clique em Lighthouse
2. Gere audition de Performance
3. Alvo: Score > 80

# Network (aba Network)
1. Carregue a página
2. Observe:
   - Total tamanho < 500KB
   - Imagens Unsplash estão sem cache headers?
   - Sem recursos bloqueadores de render
```

### Métricas esperadas:
- **First Contentful Paint (FCP):** < 2s
- **Time to Interactive (TTI):** < 4s
- **Largest Contentful Paint (LCP):** < 3s

---

## 🐛 Teste de Acessibilidade

```bash
# No navegador, instale axe DevTools
# https://www.deque.com/axe/devtools/

1. Abra a página /toctoc
2. Rode axe DevTools
3. Procure por:
   - Cores com contraste adequado
   - Componentes interativos têm labels
   - Imagens têm alt text
   - Hierarquia de headings correta (h1, h2, h3...)
```

### Manual checks:
- [ ] Navegue com Tab apenas (sem mouse)
- [ ] Todos os botões/links são acessíveis via Tab
- [ ] Leitores de tela conseguem navegar?
- [ ] Sem hardcoded colors que quebrem com dark mode (se aplicável)

---

## 🎬 Teste de Animações

- [ ] Hero emoji: bounce smooth
- [ ] Gallery ao hover: zoom + overlay slide-up
- [ ] Cards ao hover: elevation + sombra
- [ ] Botões ao hover: cor muda suave (não instantâneo)
- [ ] Velocidade das animações é natural (nem rápido demais, nem lento)

---

## 🗂️ Teste de Estrutura

```bash
# No arquivo page.tsx, verifique:
1. Metadados exportados (Metadata)
2. Componentes importados corretamente
3. Ordem das seções lógica
4. IDs corretos para scroll smooth

# Estrutura esperada:
<main>
  <HeroSection />
  <ProblemSection />
  <ShowcaseGallery />    [id="showcase"]
  <BenefitsCards />      [id="benefits"]
  <CallToAction />
  <footer />
</main>
```

---

## 📊 Teste de SEO (On-Page)

```bash
# SEO Audit (extensão Chrome)
1. Instale "SEO Audit extension"
2. Rode análise
3. Procure por:
   - [ ] Meta title presente
   - [ ] Meta description presente (< 160 chars)
   - [ ] H1 presente e único
   - [ ] H2, H3 bem distribuídos
   - [ ] Imagens com alt text
   - [ ] Links internos com anchor text
```

---

## 🎯 Teste de Conversão

1. **Hero → CTA:**
   - Usuário entende valor em < 5 segundos?
   - Chamada para ação é clara?

2. **Problem → Showcase → Benefits:**
   - Fluxo narrativo faz sentido?
   - Cada seção motiva para próxima?

3. **CTA Final:**
   - Botão WhatsApp é impossível de perder?
   - Mensagem é personalizada e profissional?

---

## 🚨 Bugs Conhecidos / Watchlist

- [ ] Imagens do Unsplash podem levar tempo para carregarprimeira vez
- [ ] Em conexções lentas, hover effects podem parecer lagados
- [ ] WhatsApp web vs app: testar ambos os cenários

---

## 👀 DevTools Tips

```javascript
// No Console (F12):

// 1. Simular navegação até seção
document.getElementById('showcase').scrollIntoView({ behavior: 'smooth' });

// 2. Verificar viewport mobile
// DevTools → Device Toolbar (Ctrl+Shift+M)

// 3. Testar dark mode
// DevTools → Rendering → Emulate CSS media feature prefers-color-scheme: dark
```

---

## 📝 Relatório de Teste

Quando completar, documente:

```markdown
# Teste TocToc Pitch Page - [DATA]

## Ambiente
- Browser: Chrome v[X]
- Device: Desktop / Mobile / Tablet
- Viewport: [dimensões]

## Resultados
- Performance Score: [X]/100
- Accessibility Issues: [X] encontrados
- Broken Links: [X]

## Observações
[suas anotações]

## Status
- [ ] Pronto para produção
- [ ] Requer correções
```

---

**Bom teste! 🎉**
