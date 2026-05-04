export function ContentSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`py-12 px-8 md:px-24 flex flex-col items-center justify-center ${className}`}
    >
      <div className="max-w-200 w-full prose dark:prose-invert">
        {children}
      </div>
    </section>
  );
}
