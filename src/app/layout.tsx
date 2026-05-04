import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import ThemeProvider from "@/components/ThemeProvider";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Portfolio",
  description: "Cria ai Gustavo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`min-h-dvh ${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${cheddarGothicSans.variable} ${codecPro.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
