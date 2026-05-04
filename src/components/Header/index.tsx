'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Moon, Sun, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/theme-toggle';

type PostNavItem = {
  slug: string;
  title: string;
};

type HeaderProps = {
  posts: PostNavItem[];
};

type HeaderLinkItem = {
  type: 'link';
  name: string;
  path: string;
};

type HeaderPostsItem = {
  type: 'posts';
  name: string;
};

type HeaderNavItem = HeaderLinkItem | HeaderPostsItem;

const navItems: HeaderNavItem[] = [
  { type: 'link', name: 'Início', path: '/' },
  { type: 'posts', name: 'Posts' },
];

const Header = ({ posts }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPostsExpanded, setIsPostsExpanded] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;


  

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-transparent ">
      <nav className="relative max-w-5xl mx-auto py-8 px-4">
        <span
          data-header-name-anchor
          aria-hidden="true"
          className="pointer-events-none absolute left-20 top-[2.2rem] h-8 w-44 -translate-x-1/2 -translate-y-1/2 md:left-28 md:top-[2.8rem]"
        />
        <div className="flex items-center justify-between  overflow-hidden ">
          <Link
            href="/"
            className="text-xl font-bold text-secondary no-underline tracking-[0.5px] items-center justify-center w-16 h-16 overflow-hidden rounded-full max-w-20"
            aria-label="Ir para página inicial"
          >
            <Image
              src="/cayo_profile/profile9.webp"
              alt="Logo"
              width={80}
              height={60}
              className="object-cover w-full h-full scale-180 object-center"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
          <ul className="flex list-none gap-8">
            {navItems.map((item) => (
              <li key={item.type === 'link' ? item.path : 'posts-desktop'} className={item.type === 'posts' ? 'relative' : ''}>
                {item.type === 'link' ? (
                  <Link
                    href={item.path}
                    className={`no-underline text-[1.2rem] transition-colors duration-300 hover:text-[--portfolio-text] ${
                      isActive(item.path)
                        ? 'text-[--portfolio-text]'
                        : 'text-(--nav)'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsPostsExpanded((prev) => !prev)}
                      className="no-underline text-[1.2rem] transition-colors duration-300 hover:text-[--portfolio-text] text-(--nav)"
                    >
                      {item.name}
                    </button>

                    {isPostsExpanded && (
                      <ul className="absolute left-1/2 top-full z-40 mt-3 max-h-[56svh] w-[min(82vw,360px)] -translate-x-1/2 overflow-y-auto rounded-xl border border-[--portfolio-border] bg-[--portfolio-panel-strong] p-2 shadow-2xl">
                        <li>
                          <Link
                            href="/posts"
                            onClick={() => setIsPostsExpanded(false)}
                            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-[--portfolio-text] opacity-90 transition-colors hover:bg-[--portfolio-panel] hover:opacity-100"
                          >
                            <span className="text-xs text-secondary/90 transition-colors group-hover:text-white">
                              00
                            </span>
                            <span className="text-sm tracking-[0.05em] uppercase">Todos os posts</span>
                          </Link>
                        </li>
                        {posts.map((post, index) => (
                          <li key={`desktop-${post.slug}`}>
                            <Link
                              href={`/posts/${post.slug}`}
                              onClick={() => setIsPostsExpanded(false)}
                              className="group flex items-center gap-3 rounded-lg px-3 py-2 text-[--portfolio-text] opacity-90 transition-colors hover:bg-[--portfolio-panel] hover:opacity-100"
                            >
                              <span className="text-xs text-secondary/90 transition-colors group-hover:text-white">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <span className="text-sm tracking-[0.05em] uppercase">{post.title}</span>
                            </Link>
                          </li>
                        ))}

                        {posts.length === 0 && (
                          <li className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/70">
                            Nenhum post disponível no momento.
                          </li>
                        )}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
          <ThemeToggle />
          </div>

          <button
            type="button"
            className="md:hidden text-(--nav) hover:text-[--portfolio-text]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <>
            <button
              type="button"
              aria-label="Fechar menu de navegação"
              className="mobile-menu-backdrop fixed inset-0 z-40 bg-[--portfolio-backdrop] md:hidden"
              onClick={() => {
                setIsMenuOpen(false);
                setIsPostsExpanded(false);
              }}
            />

            <div className="mobile-menu-panel fixed inset-0 z-50 flex h-svh w-screen flex-col bg-[--portfolio-panel-strong] p-8 text-[--portfolio-text] md:hidden">
              <div className="flex items-center justify-between">
                <span className="font-heading text-2xl tracking-[0.08em] uppercase">Menu</span>
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsPostsExpanded(false);
                    }}
                    aria-label="Fechar menu"
                    className="rounded-md p-1 text-[--portfolio-text] opacity-90 transition-colors hover:bg-[--portfolio-panel] hover:opacity-100"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <ul className="mt-10 flex flex-1 list-none flex-col gap-4 overflow-y-auto pb-6">
                {navItems.map((item) => (
                  <li key={item.type === 'link' ? item.path : 'posts-mobile'}>
                    {item.type === 'link' ? (
                      <Link
                        href={item.path}
                        className={`block rounded-xl px-4 py-3 no-underline text-2xl tracking-[0.06em] uppercase transition-colors duration-300 hover:bg-white/10 hover:text-white ${
                          isActive(item.path)
                            ? 'bg-white/10 text-white'
                            : 'text-(--nav)'
                        }`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsPostsExpanded(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => setIsPostsExpanded((prev) => !prev)}
                          className="block w-full rounded-xl px-4 py-3 text-left text-2xl tracking-[0.06em] uppercase transition-colors duration-300 hover:bg-white/10 hover:text-white text-(--nav)"
                        >
                          {item.name}
                        </button>

                        {isPostsExpanded && (
                          <ul className="mt-2 space-y-1 rounded-xl border border-white/15 bg-white/5 p-2">
                            <li>
                              <Link
                                href="/posts"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsPostsExpanded(false);
                                }}
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                              >
                                <span className="text-xs text-secondary/90 transition-colors group-hover:text-white">
                                  00
                                </span>
                                <span className="text-sm tracking-[0.05em] uppercase">Todos os posts</span>
                              </Link>
                            </li>
                            {posts.map((post, index) => (
                              <li key={`mobile-${post.slug}`}>
                                <Link
                                  href={`/posts/${post.slug}`}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsPostsExpanded(false);
                                  }}
                                  className="group flex items-center gap-3 rounded-lg px-3 py-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                                >
                                  <span className="text-xs text-secondary/90 transition-colors group-hover:text-white">
                                    {String(index + 1).padStart(2, '0')}
                                  </span>
                                  <span className="text-sm tracking-[0.05em] uppercase">{post.title}</span>
                                </Link>
                              </li>
                            ))}

                            {posts.length === 0 && (
                              <li className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/70">
                                Nenhum post disponível no momento.
                              </li>
                            )}
                          </ul>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <style jsx>{`
          .mobile-menu-backdrop {
            animation: mobileMenuBackdropIn 220ms ease-out;
          }

          .mobile-menu-panel {
            animation: mobileMenuPanelIn 280ms cubic-bezier(0.22, 1, 0.36, 1);
            transform-origin: right center;
          }

          @keyframes mobileMenuBackdropIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes mobileMenuPanelIn {
            from {
              opacity: 0;
              transform: translateX(28px) scale(0.99);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }
        `}</style>
      </nav>
    </header>
  );
};

export default Header;
