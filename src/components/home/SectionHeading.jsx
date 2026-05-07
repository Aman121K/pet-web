export function SectionHeading({ children, className = '' }) {
  return (
    <h2
      className={`w-full max-w-[512px] text-center text-[32px] font-semibold leading-[38px] tracking-normal text-ink xl:text-[40px] xl:leading-[44px] ${className}`}
    >
      {children}
    </h2>
  );
}
