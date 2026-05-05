import Header from "@/components/Header";
import { getPosts } from "@/lib/posts";


// const gothicJoker = GothicJoker({
//   variable: "--font-gothic-joker",
//   subsets: ["latin"],
// });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = getPosts().map(({ slug, title }) => ({ slug, title }));

  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-[var(--portfolio-bg)] text-[var(--portfolio-text)] transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-12vw] top-[-12vh] h-[38vh] w-[48vw] bg-[var(--portfolio-glow-a)] blur-[70px]" />
        <div className="absolute bottom-[8vh] right-[-10vw] h-[32vh] w-[44vw] bg-[var(--portfolio-glow-b)] blur-[82px]" />
        <div className="absolute inset-0 bg-[radial-gradient(var(--portfolio-grain)_0.5px,transparent_0.5px)] bg-size-[2px_2px] opacity-20 mix-blend-soft-light" />
      </div>
      <div className="relative z-10 mx-auto">
        <Header posts={posts} />
        {children}
      </div>
    </div>
  );
}
