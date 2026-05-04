import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[hsl(25_25%_6%)] border-t border-border/20 pt-24 px-8 pb-16 snap-center snap-always"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-12">
        <div>
          <h3 className="text-[1.15rem] text-primary mb-4">
            Memória & Ancestralidade
          </h3>
          <p className="text-muted-foreground text-[0.95rem] leading-[1.7] no-underline">
            Preservando histórias que não podem ser esquecidas.
          </p>
        </div>
        <div>
          <h3 className="text-[1.15rem] text-primary mb-4">Links</h3>
          <ul className="list-none flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="text-muted-foreground text-[0.95rem] leading-[1.7] no-underline hover:text-primary"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/cronologia"
                className="text-muted-foreground text-[0.95rem] leading-[1.7] no-underline hover:text-primary"
              >
                Cronologia
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[1.15rem] text-primary mb-4">Contato</h3>
          <p className="text-muted-foreground text-[0.95rem] leading-[1.7] no-underline">
            Portfolio@email.com
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-border/15 text-center">
        <p className="text-muted-foreground text-[0.85rem] opacity-70">
          &copy; 2026 Memória & Ancestralidade. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
