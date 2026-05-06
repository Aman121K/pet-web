export function SectionShell({ children, className = '' }) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

