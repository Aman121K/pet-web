import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../api.js';

const cats = [
  { label: 'FOOD', icon: '/food.svg' },
  { label: 'TOYS', icon: '/toys.svg' },
  { label: 'BOND', icon: '/bond.svg' },
  { label: 'CLOTHING', icon: '/clothing.svg' },
  { label: 'ACCESSORIES', icon: '/accessories.svg' },
];

export function Categories() {
  const [items, setItems] = useState(cats);

  useEffect(() => {
    fetchCategories()
      .then((rows) => {
        if (Array.isArray(rows) && rows.length > 0) {
          const icons = ['/food.svg', '/toys.svg', '/bond.svg', '/clothing.svg', '/accessories.svg'];
          setItems(
            rows.slice(0, 6).map((category, index) => ({
              label: category.name,
              slug: category.slug,
              icon: icons[index % icons.length],
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-4 py-14 lg:gap-[56px] lg:px-0 lg:py-[96px]">
        <h2 className="max-w-[320px] text-center text-[32px] font-semibold leading-[36px] text-ink lg:max-w-none lg:text-[40px] lg:leading-[44px]">
          Product categories
        </h2>
        <div className="w-full overflow-x-auto pb-2 sm:overflow-visible lg:pb-0">
          <div className="mx-auto flex w-max min-w-full snap-x snap-mandatory items-start justify-center gap-5 px-1 sm:w-full sm:min-w-0 sm:flex-wrap sm:gap-8 sm:px-0 md:gap-12 lg:gap-[148px]">
          {items.map((c) => (
            <Link
              key={c.slug || c.label}
              to={c.slug ? `/shop?category=${encodeURIComponent(c.slug)}` : '/shop'}
              className="flex w-[90px] shrink-0 snap-start flex-col items-center gap-[10px] sm:shrink lg:w-[106px] lg:gap-[12px]"
            >
              <div className="flex h-[64px] w-[64px] items-center justify-center lg:h-[96px] lg:w-[96px]">
                <img src={c.icon} alt={c.label} className="h-[64px] w-[64px] object-contain lg:h-[96px] lg:w-[96px]" />
              </div>
              <p className="text-center text-[12px] font-semibold uppercase leading-[16px] text-ink lg:text-[18px] lg:leading-[20px]">
                {c.label}
              </p>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
