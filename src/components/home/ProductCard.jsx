export function ProductCard({
  image,
  title,
  brand,
  compareAt,
  price,
  badge = 'Sale 1%',
  quantity = 5,
}) {
  return (
    <article className="flex h-[476px] w-[294px] shrink-0 flex-col border border-line bg-white p-[13px]">
      <div className="relative h-[203px] w-full overflow-hidden bg-white">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <span className="absolute right-0 top-0 flex h-[24px] items-center bg-[#F04438] px-[9px] text-[11px] font-medium leading-none tracking-normal text-white">
          {badge}
        </span>
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="min-h-[52px] text-[18px] font-semibold leading-[26px] tracking-normal text-ink line-clamp-2">
          {title}
        </h3>
        <p className="mt-[10px] text-[14px] font-normal leading-[20px] tracking-normal text-muted">
          {brand}
        </p>

        <div className="mt-[14px] flex items-center gap-[10px]">
          <span className="text-[14px] font-normal leading-[20px] tracking-normal text-muted line-through">
            {compareAt}
          </span>
          <span className="text-[14px] font-semibold leading-[20px] tracking-normal text-ink">
            {price}
          </span>
        </div>

        <div className="mt-auto flex h-[46px] items-center gap-4">
          <div className="flex h-[46px] w-[102px] items-center border border-line bg-white">
            <button
              className="flex h-[34px] w-[34px] items-center justify-center text-[15px] font-normal leading-none text-ink/70 transition hover:bg-surface"
              type="button"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <div className="flex h-[34px] w-[34px] items-center justify-center text-[14px] font-medium leading-none tracking-normal text-ink">
              {quantity}
            </div>
            <button
              className="flex h-[34px] w-[34px] items-center justify-center text-[15px] font-normal leading-none text-ink/70 transition hover:bg-surface"
              type="button"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="flex h-[46px] w-[150px] items-center justify-center bg-ink px-4 text-[12px] font-semibold leading-none tracking-normal text-white transition hover:bg-black"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
}
