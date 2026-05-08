const cats = [
  { label: 'FOOD', icon: '/food.svg' },
  { label: 'TOYS', icon: '/toys.svg' },
  { label: 'BOND', icon: '/bond.svg' },
  { label: 'CLOTHING', icon: '/clothing.svg' },
  { label: 'ACCESSORIES', icon: '/accessories.svg' },
];

export function Categories() {
  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-4 py-14 md:gap-[56px] md:px-0 md:py-[96px]">
        <h2 className="max-w-[320px] text-center text-[32px] font-semibold leading-[36px] text-ink md:max-w-none md:text-[40px] md:leading-[44px]">
          Product categories
        </h2>
        <div className="grid w-full max-w-[360px] grid-cols-3 justify-items-center gap-x-5 gap-y-8 md:flex md:max-w-none md:items-start md:justify-center md:gap-[148px]">
          {cats.map((c) => (
            <div key={c.label} className="flex w-[90px] flex-col items-center gap-[10px] md:w-[106px] md:gap-[12px]">
              <div className="flex h-[64px] w-[64px] items-center justify-center md:h-[96px] md:w-[96px]">
                <img src={c.icon} alt={c.label} className="h-[64px] w-[64px] object-contain md:h-[96px] md:w-[96px]" />
              </div>
              <p className="text-center text-[12px] font-semibold uppercase leading-[16px] text-ink md:text-[18px] md:leading-[20px]">
                {c.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
