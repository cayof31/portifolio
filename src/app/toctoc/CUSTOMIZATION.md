# 🎨 GUIA AVANÇADO - Customizações & Extensões

## 📦 Estrutura Final de Arquivos

```
src/app/toctoc/
├── page.tsx                  [86 linhas] Server Component - Orquestra
├── layout.tsx                [18 linhas] Layout wrapper
├── config.ts                 [75 linhas] Configurações centralizadas
│
├── components/
│   ├── HeroSection.tsx       [54 linhas] 'use client'
│   ├── ProblemSection.tsx    [71 linhas] 'use client'
│   ├── ShowcaseGallery.tsx   [148 linhas] 'use client' (interativo)
│   ├── BenefitsCards.tsx     [108 linhas] 'use client'
│   └── CallToAction.tsx      [105 linhas] 'use client'
│
├── README.md                 [Documentação modular]
├── TESTING.md                [Guia de testes]
└── CUSTOMIZATION.md          [Este arquivo]
```

**Total: ~700 linhas de código + documentação**

---

## 🔧 Customizações Comuns

### 1. **Trocar Paleta de Cores**

**Opção A: Via `config.ts`**

```ts
// config.ts
export const TOCTOC_CONFIG = {
  colors: {
    primary: '#NEW_COLOR', // Novo verde escuro
    accent: '#NEW_COLOR',  // Novo verde menta
    // ...
  },
};

// Use em componentes:
import { TOCTOC_CONFIG } from '../config';
// className={`bg-[${TOCTOC_CONFIG.colors.primary}]`} ❌ Não funciona!
// Tailwind não interpreta cores dinâmicas via string.
```

**Opção B: Criar classe CSS custom (RECOMENDADO)**

```css
/* src/app/toctoc/toctoc.css (novo arquivo) */
:root {
  --toctoc-primary: #C2185B;
  --toctoc-accent: #A8E6CF;
  --toctoc-accent2: #FF9B7B;
}

.toctoc-primary { color: var(--toctoc-primary); }
.toctoc-bg-primary { background-color: var(--toctoc-primary); }
```

**Opção C: Estender Tailwind (MELHOR)**

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        toctoc: {
          primary: '#C2185B',
          accent: '#A8E6CF',
          accent2: '#FF9B7B',
          lightBg: '#F7F3F0',
        },
      },
    },
  },
};

// Uso em componentes:
className="bg-toctoc-primary text-toctoc-accent"
```

---

### 2. **Adicionar/Remover Seções**

#### Adicionar Nova Seção (ex: Testimonials)

**Passo 1: Criar componente**

```tsx
// components/TestimonialsSection.tsx
'use client';

export function TestimonialsSection() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-[#C2185B]">
          O que clientes dizem
        </h2>
        {/* Conteúdo */}
      </div>
    </section>
  );
}
```

**Passo 2: Importar em `page.tsx`**

```tsx
// page.tsx
import { TestimonialsSection } from './components/TestimonialsSection';

export default function TocTocPitchPage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ShowcaseGallery />
      <TestimonialsSection />  {/* ← NOVO */}
      <BenefitsCards />
      <CallToAction />
      <footer />
    </main>
  );
}
```

#### Remover Seção

Simplesmente remova a importação e o componente do `page.tsx`.

---

### 3. **Integrar com Banco de Dados**

**Exemplo: Produtos do banco em vez de hardcoded**

```tsx
// components/ShowcaseGallery.tsx
'use client';

import { useEffect, useState } from 'react';

type Product = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
};

export function ShowcaseGallery() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch de seu backend/CMS
    fetch('/api/toctoc/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) return <div>Carregando produtos...</div>;

  return (
    <section>
      <div className="grid grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id}>
            <img src={product.imageUrl} alt={product.title} />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

### 4. **Adicionar Formulário de Orçamento**

```tsx
// components/QuoteForm.tsx
'use client';

import { useState } from 'react';

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productInterest: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enviar para seu backend
    console.log('Enviando:', formData);
    
    // Aqui você poderia:
    // 1. Salvar em banco de dados
    // 2. Enviar email
    // 3. Integrar com CRM
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="seu@email.com"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      {/* Mais campos... */}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-[#C2185B] text-white rounded font-bold"
      >
        Solicitar Orçamento
      </button>
    </form>
  );
}
```

---

### 5. **Adicionar Analytics**

```tsx
// page.tsx - adicione em componentes de CTA
'use client';

import { useEffect } from 'react';

export function CallToAction() {
  const handleWhatsappClick = () => {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'contact_whatsapp', {
        event_category: 'engagement',
        event_label: 'Clique WhatsApp CTA',
      });
    }

    // Seu próprio evento
    console.log('Evento: Clique no CTA WhatsApp');
  };

  return (
    <a
      href={whatsappLink}
      onClick={handleWhatsappClick}
      className="bg-[#25D366] text-white"
    >
      Conversar no WhatsApp
    </a>
  );
}
```

---

### 6. **Integrar com CMS (Headless)**

**Exemplo com Contentful:**

```tsx
// lib/contentful.ts
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getGalleryProducts() {
  const response = await client.getEntries({
    content_type: 'product',
    limit: 6,
  });
  return response.items;
}

// components/ShowcaseGallery.tsx (Server Component)
import { getGalleryProducts } from '@/lib/contentful';

export async function ShowcaseGallery() {
  const products = await getGalleryProducts();

  return (
    <section className="grid grid-cols-3 gap-8">
      {products.map(product => (
        // Renderize dinâmico
      ))}
    </section>
  );
}
```

---

### 7. **Adicionar Dark Mode**

```tsx
// layout.tsx
'use client';

import { useEffect, useState } from 'react';

export default function TocTocLayout({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(dark);
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
      {children}
    </div>
  );
}
```

**Classes CSS:**

```ts
// Hero section em dark mode:
className="dark:bg-slate-900 dark:text-white"
```

---

### 8. **Adicionar Internacionalização (i18n)**

```tsx
// i18n/pt.json
{
  "hero": {
    "title": "A magia da marcenaria criativa merece o mundo digital",
    "subtitle": "Uma proposta de presença online exclusiva para Toc toc for kids"
  }
}

// components/HeroSection.tsx
'use client';

import { useLanguage } from '@/hooks/useLanguage';

export function HeroSection() {
  const t = useLanguage();

  return (
    <section>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </section>
  );
}
```

---

### 9. **Adicionar Animações Avançadas (Framer Motion)**

```bash
npm install framer-motion
```

```tsx
// components/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>A magia da marcenaria criativa</h1>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
        }}
      >
        🏠
      </motion.div>
    </section>
  );
}
```

---

### 10. **Otimizar Imagens com Sharp**

```bash
npm install sharp
```

```tsx
// lib/image-optimizer.ts
import sharp from 'sharp';
import fs from 'fs/promises';

export async function optimizeImage(inputPath: string, outputPath: string) {
  await sharp(inputPath)
    .resize(1200, 800, {
      fit: 'cover',
      position: 'center',
    })
    .webp({ quality: 80 })
    .toFile(outputPath);
}
```

---

## 🚀 Performance Avançada

### Lazy Loading de Componentes

```tsx
// page.tsx
import dynamic from 'next/dynamic';

const ShowcaseGallery = dynamic(() =>
  import('./components/ShowcaseGallery').then(mod => mod.ShowcaseGallery),
  { loading: () => <div>Carregando galeria...</div> }
);

export default function TocTocPitchPage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ShowcaseGallery /> {/* Carrega sob demanda */}
      <BenefitsCards />
      <CallToAction />
    </main>
  );
}
```

### Preload Crítico

```tsx
// page.tsx
import { preload } from 'react-dom';

export default function TocTocPitchPage() {
  // Precarrega primeira imagem da galeria
  preload(
    'https://images.unsplash.com/photo-...',
    { as: 'image' }
  );

  return <main>...</main>;
}
```

---

## 🔐 Segurança

### Validação de Entrada (Formulários)

```ts
// lib/validation.ts
import { z } from 'zod';

export const quoteFormSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  phone: z.string().regex(/\d{10,}/),
  message: z.string().max(500),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
```

### Rate Limiting (WhatsApp)

```tsx
// utils/rateLimit.ts
const clickTimestamps: Map<string, number> = new Map();

export function rateLimitWhatsapp(): boolean {
  const now = Date.now();
  const lastClick = clickTimestamps.get('whatsapp') || 0;
  
  // Máximo 1 clique a cada 2 segundos
  if (now - lastClick < 2000) return false;
  
  clickTimestamps.set('whatsapp', now);
  return true;
}
```

---

## 📊 Monitoramento

### Error Tracking (Sentry)

```bash
npm install @sentry/nextjs
```

```ts
// next.config.mjs
import { withSentryConfig } from '@sentry/nextjs';

export default withSentryConfig(
  nextConfig,
  {
    org: 'seu-org',
    project: 'seu-project',
  }
);
```

---

## 🎯 Testing

### Unit Tests com Jest

```bash
npm install --save-dev jest @testing-library/react
```

```ts
// components/__tests__/HeroSection.test.tsx
import { render, screen } from '@testing-library/react';
import { HeroSection } from '../HeroSection';

describe('HeroSection', () => {
  it('renderiza título', () => {
    render(<HeroSection />);
    expect(screen.getByText(/magia da marcenaria/i)).toBeInTheDocument();
  });
});
```

---

## 📈 SEO Avançado

### Schema.org / JSON-LD

```tsx
// components/SchemaMarkup.tsx
export function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Toc toc for kids',
          url: 'https://seu-site.com/toctoc',
          description: 'Cozinhas e casinhas infantis',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Rua X, 123',
            addressLocality: 'Cuiabá',
            addressRegion: 'MT',
            postalCode: 'XXXXX-XXX',
            addressCountry: 'BR',
          },
        }),
      }}
    />
  );
}
```

---

## 🤝 Integração com Terceiros

### SendGrid (Email)

```bash
npm install @sendgrid/mail
```

### Stripe (Pagamentos)

```bash
npm install @stripe/stripe-js
```

### Calendly (Agendamento)

```tsx
<iframe
  src="https://calendly.com/seu-usuario"
  width="100%"
  height="600"
/>
```

---

## 💾 Backup das Customizações

Crie um `CUSTOMIZATIONS_LOG.md`:

```markdown
# Log de Customizações - TocToc Pitch

## 2024-07-10
- Integrado Google Analytics
- Adicionada seção Testimonials
- Mudou paleta de cores para verde mais escuro

## 2024-07-15
- Formulário de orçamento funcional
- Conectado com Contentful

## 2024-08-01
- Implementado Dark Mode
- Adicionado Framer Motion animations
```

---

**Continue inovando! 🚀**
