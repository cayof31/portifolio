export const siteConfig = {
  name: "Cayo Felipe",
  title: "Cayo Felipe | Desenvolvedor Full-stack",
  description:
    "Portfolio de Cayo Felipe, desenvolvedor full-stack focado em React, Next.js, TypeScript, produtos digitais, acessibilidade e experiencias web performaticas.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "pt_BR",
  language: "pt-BR",
  email: "cayofelipe31@gmail.com",
  author: {
    name: "Cayo Felipe",
    role: "Desenvolvedor Full-stack",
    image: "/cayo_profile/profile9.webp",
    sameAs: [
      "https://github.com/cayof31",
      "https://instagram.com/cayofelipee_",
      "https://www.linkedin.com/in/cayof04/",
    ],
  },
  keywords: [
    "Cayo Felipe",
    "desenvolvedor full-stack",
    "portfolio desenvolvedor",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "acessibilidade web",
    "frontend",
    "backend",
  ],
};

export function absoluteUrl(path = "/") {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${normalizedPath}`;
}

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
