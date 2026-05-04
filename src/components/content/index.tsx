export function ContentSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`flex flex-col items-center justify-center px-0 py-10 ${className}`}
    >
      <div className="portfolio-mdx">{children}</div>
    </section>
  );
}
