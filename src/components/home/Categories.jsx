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
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-4 py-14 lg:gap-[56px] lg:px-0 lg:py-[96px]">
        <h2 className="max-w-[320px] text-center text-[32px] font-semibold leading-[36px] text-ink lg:max-w-none lg:text-[40px] lg:leading-[44px]">
          Product categories
        </h2>
        <div className="w-full overflow-x-auto pb-2 lg:overflow-visible lg:pb-0">
          <div className="flex w-max min-w-full snap-x snap-mandatory items-start gap-5 px-1 lg:w-full lg:min-w-0 lg:justify-center lg:gap-[148px] lg:px-0">
          {cats.map((c) => (
            <div
              key={c.label}
              className="flex w-[90px] shrink-0 snap-start flex-col items-center gap-[10px] lg:w-[106px] lg:gap-[12px]"
            >
              <div className="flex h-[64px] w-[64px] items-center justify-center lg:h-[96px] lg:w-[96px]">
                <img src={c.icon} alt={c.label} className="h-[64px] w-[64px] object-contain lg:h-[96px] lg:w-[96px]" />
              </div>
              <p className="text-center text-[12px] font-semibold uppercase leading-[16px] text-ink lg:text-[18px] lg:leading-[20px]">
                {c.label}
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
