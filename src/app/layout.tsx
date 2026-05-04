import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

// const gothicJoker = GothicJoker({
//   variable: "--font-gothic-joker",
//   subsets: ["latin"],
// });

const cheddarGothicSans = localFont({
  src: "../../public/fonts/cheddar-gothic-sans-maisfontes.bfab/cheddar-gothic-sans.otf",
  variable: "--font-cheddar-gothic-sans",
  display: "swap",
});

const codecPro = localFont({
  src: "../../public/fonts/codec-pro/CodecPro-Regular.ttf",
  variable: "--font-codec-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portifolio",
  description: "Cria ai Gustavo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body
        className={`min-h-dvh ${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${cheddarGothicSans.variable} ${codecPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
