import { useState } from 'react';

function calcSalePercent(compareAt, price) {
  const a = parseFloat(String(compareAt).replace(/[^0-9.]/g, ''));
  const b = parseFloat(String(price).replace(/[^0-9.]/g, ''));
  if (!a || !b || a <= b) return null;
  const pct = Math.round(((a - b) / a) * 100);
  return pct > 0 ? pct : null;
}

export function ProductCard({ image, title, brand, compareAt, price, quantity = 1 }) {
  const [qty, setQty] = useState(quantity);
  const salePercent = calcSalePercent(compareAt, price);

  return (
    <article className="flex h-[525px] w-[min(324px,calc(100vw-32px))] flex-none flex-col bg-white p-[13px] shadow-[inset_0_0_0_1px_#1C1C1C] sm:h-[476px] sm:w-[294px]">
      <div className="relative h-[224px] w-full overflow-hidden bg-white sm:h-[203px]">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        {salePercent !== null && (
          <span className="absolute right-0 top-0 flex h-[30px] items-center rounded-[4px] bg-[#D63B3B] px-[10px] text-[16px] font-normal leading-none tracking-normal text-white">
            Sale{salePercent}%
          </span>
        )}
      </div>

      <div className="mt-[27px] flex flex-1 flex-col">
        <div>
          <h3 className="line-clamp-2 text-[20px] font-semibold leading-[28px] text-ink sm:text-[18px] sm:leading-[26px]">
            {title}
          </h3>
          <p className="mt-6 text-[16px] font-semibold leading-[24px] text-muted">{brand}</p>
          <div className="mt-[7px] flex items-baseline gap-[10px]">
            <span className="text-[18px] font-normal leading-[30px] text-muted line-through">
              {compareAt}
            </span>
            <span className="text-[18px] font-semibold leading-[30px] text-ink">{price}</span>
          </div>
        </div>

        <div className="mt-auto flex h-[46px] items-center gap-3">
          <div className="flex h-[46px] w-[106px] items-center justify-center border border-line bg-white px-[7px]">
            <button
              type="button"
              aria-label="Decrease quantity"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-[3px] bg-surface text-[26px] font-normal leading-none text-muted transition hover:bg-[#ededed]"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <span className="flex h-[34px] w-[24px] items-center justify-center text-[20px] font-normal leading-none text-ink">
              {qty}
            </span>
            <button
              type="button"
              aria-label="Increase quantity"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-[3px] bg-surface text-[26px] font-normal leading-none text-ink transition hover:bg-[#ededed]"
              onClick={() => setQty((q) => q + 1)}
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="flex h-[46px] w-[150px] items-center justify-center bg-ink text-[18px] font-semibold leading-none text-white transition hover:bg-[#333]"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
}
