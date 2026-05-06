const cats = [
  { label: 'Food', icon: 'bowl' },
  { label: 'Toys', icon: 'ball' },
  { label: 'Bond', icon: 'heart' },
  { label: 'Clothing', icon: 'collar' },
  { label: 'Accessories', icon: 'toy' },
];

function ServiceIcon({ type }) {
  if (type === 'bowl') {
    return (
      <svg viewBox="0 0 100 100" fill="none" aria-hidden className="h-full w-full">
        <path d="M24 47h52l-5 25H29l-5-25Z" stroke="currentColor" strokeWidth="3" />
        <path d="M31 47c1-11 9-19 19-19s18 8 19 19" stroke="currentColor" strokeWidth="3" />
        <path d="M37 57h26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="38" cy="33" r="4" fill="currentColor" />
        <circle cx="50" cy="27" r="4" fill="currentColor" />
        <circle cx="62" cy="33" r="4" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'ball') {
    return (
      <svg viewBox="0 0 100 100" fill="none" aria-hidden className="h-full w-full">
        <circle cx="50" cy="50" r="31" stroke="currentColor" strokeWidth="3" />
        <path d="M24 47c19 1 31-7 40-22M36 76c5-18 18-28 39-31" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'heart') {
    return (
      <svg viewBox="0 0 100 100" fill="none" aria-hidden className="h-full w-full">
        <path
          d="M50 78S21 61 21 39c0-11 8-18 18-18 6 0 10 3 11 7 2-4 6-7 12-7 10 0 17 7 17 18 0 22-29 39-29 39Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 'collar') {
    return (
      <svg viewBox="0 0 100 100" fill="none" aria-hidden className="h-full w-full">
        <path d="M22 36h56v22c0 11-9 20-28 20S22 69 22 58V36Z" stroke="currentColor" strokeWidth="3" />
        <path d="M22 45h56M43 36v42M57 36v42" stroke="currentColor" strokeWidth="3" />
        <path d="M46 57h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden className="h-full w-full">
      <path d="M28 62c-7 0-12-5-12-12s5-12 12-12c3 0 6 1 8 3l28 28c2 2 3 5 3 8 0 6-5 11-11 11-3 0-6-1-8-3L20 57" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M63 38c7 0 12 5 12 12s-5 12-12 12c-3 0-6-1-8-3L27 31c-2-2-3-5-3-8 0-6 5-11 11-11 3 0 6 1 8 3l28 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Categories() {
  return (
    <section className="h-auto border-b border-line bg-white md:h-[424px]">
      <div className="mx-auto h-full max-w-[1440px] px-6 py-16 md:px-0 md:py-0">
        <h2 className="text-center text-[34px] font-semibold uppercase leading-[40px] tracking-normal text-ink md:pt-24 lg:text-[40px] lg:leading-[44px]">
          Our Services
        </h2>
        <div className="mx-auto mt-14 grid max-w-[1106px] grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-3 md:grid-cols-5 md:gap-x-0">
        {cats.map((c) => (
          <div key={c.label} className="flex flex-col items-center">
            <div className="h-[100px] w-[108px] text-ink">
              <ServiceIcon type={c.icon} />
            </div>
            <p className="mt-3 text-center text-[18px] font-normal leading-5 tracking-normal text-ink">
              {c.label}
            </p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
