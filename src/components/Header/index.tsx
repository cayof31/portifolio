'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

type RitualNavItem = {
  slug: string;
  title: string;
};

type HeaderProps = {
  rituals: RitualNavItem[];
};

type HeaderLinkItem = {
  type: 'link';
  name: string;
  path: string;
};

type HeaderRitualItem = {
  type: 'rituals';
  name: string;
};

type HeaderNavItem = HeaderLinkItem | HeaderRitualItem;

const navItems: HeaderNavItem[] = [
  { type: 'link', name: 'Início', path: '/' },
  { type: 'link', name: 'Cronologia', path: '/cronologia' },
  { type: 'rituals', name: 'Rituais' },
  { type: 'link', name: 'Contato', path: '/Contato' },
];

const Header = ({ rituals }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRitualsExpanded, setIsRitualsExpanded] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-transparent">
      <nav className="relative max-w-300 mx-auto px-8 py-8">
        <span
          data-header-name-anchor
          aria-hidden="true"
          className="pointer-events-none absolute left-20 top-[2.2rem] h-8 w-44 -translate-x-1/2 -translate-y-1/2 md:left-28 md:top-[2.8rem]"
        />
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-secondary no-underline tracking-[0.5px]"
            aria-label="Ir para página inicial"
          >
            <Image
              src="/variantes/9.png"
              alt="Logo"
              width={80}
              height={60}
              className="inline-block mr-2"
            />
          </Link>

          <ul className="hidden md:flex list-none gap-8">
            {navItems.map((item) => (
              <li key={item.type === 'link' ? item.path : 'rituais-desktop'} className={item.type === 'rituals' ? 'relative' : ''}>
                {item.type === 'link' ? (
                  <Link
                    href={item.path}
                    className={`no-underline text-[1.2rem] transition-colors duration-300 hover:text-white ${
                      isActive(item.path)
                        ? 'text-white'
                        : 'text-(--nav)'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsRitualsExpanded((prev) => !prev)}
                      className="no-underline text-[1.2rem] transition-colors duration-300 hover:text-white text-(--nav)"
                    >
                      {item.name}
                    </button>

                    {isRitualsExpanded && (
                      <ul className="absolute left-1/2 top-full z-40 mt-3 max-h-[56svh] w-[min(82vw,360px)] -translate-x-1/2 overflow-y-auto rounded-xl border border-white/15 bg-black/95 p-2 shadow-2xl">
                        {rituals.map((ritual, index) => (
                          <li key={`desktop-${ritual.slug}`}>
                            <Link
                              href={`/rituais/${ritual.slug}`}
                              onClick={() => setIsRitualsExpanded(false)}
                              className="group flex items-center gap-3 rounded-lg px-3 py-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                            >
                              <span className="text-xs text-secondary/90 transition-colors group-hover:text-white">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <span className="text-sm tracking-[0.05em] uppercase">{ritual.title}</span>
                            </Link>
                          </li>
                        ))}

                        {rituals.length === 0 && (
                          <li className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/70">
                            Nenhum ritual disponível no momento.
                          </li>
                        )}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="md:hidden text-(--nav) hover:text-white"
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
              className="mobile-menu-backdrop fixed inset-0 z-40 bg-black/70 md:hidden"
              onClick={() => {
                setIsMenuOpen(false);
                setIsRitualsExpanded(false);
              }}
            />

            <div className="mobile-menu-panel fixed inset-0 z-50 flex h-svh w-screen flex-col bg-black/95 p-8 text-white md:hidden">
              <div className="flex items-center justify-between">
                <span className="font-heading text-2xl tracking-[0.08em] uppercase">Menu</span>
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsRitualsExpanded(false);
                  }}
                  aria-label="Fechar menu"
                  className="rounded-md p-1 text-white/90 transition-colors hover:bg-white/10"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <ul className="mt-10 flex flex-1 list-none flex-col gap-4 overflow-y-auto pb-6">
                {navItems.map((item) => (
                  <li key={item.type === 'link' ? item.path : 'rituais-mobile'}>
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
                          setIsRitualsExpanded(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => setIsRitualsExpanded((prev) => !prev)}
                          className="block w-full rounded-xl px-4 py-3 text-left text-2xl tracking-[0.06em] uppercase transition-colors duration-300 hover:bg-white/10 hover:text-white text-(--nav)"
                        >
                          {item.name}
                        </button>

                        {isRitualsExpanded && (
                          <ul className="mt-2 space-y-1 rounded-xl border border-white/15 bg-white/5 p-2">
                            {rituals.map((ritual, index) => (
                              <li key={`mobile-${ritual.slug}`}>
                                <Link
                                  href={`/rituais/${ritual.slug}`}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsRitualsExpanded(false);
                                  }}
                                  className="group flex items-center gap-3 rounded-lg px-3 py-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                                >
                                  <span className="text-xs text-secondary/90 transition-colors group-hover:text-white">
                                    {String(index + 1).padStart(2, '0')}
                                  </span>
                                  <span className="text-sm tracking-[0.05em] uppercase">{ritual.title}</span>
                                </Link>
                              </li>
                            ))}

                            {rituals.length === 0 && (
                              <li className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/70">
                                Nenhum ritual disponível no momento.
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