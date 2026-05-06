import pick1 from '../../assets/pets/home/pick-1.jpg';
import pick2 from '../../assets/pets/home/pick-2.jpg';
import pick3 from '../../assets/pets/home/pick-3.jpg';
import product1 from '../../assets/pets/product-1.jpg';

const picks = [
  {
    img: pick1,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    brand: 'Canagan',
    price: '$221.00',
    compareAt: '$222.74',
  },
  {
    img: pick2,
    title: 'Premium House Bed for Small Dogs',
    brand: 'Pet Square',
    price: '$94.99',
    compareAt: '$119.00',
  },
  {
    img: pick3,
    title: 'Healthy nutrition dry food',
    brand: 'Canagan',
    price: '$48.50',
    compareAt: '$59.00',
  },
  {
    img: product1,
    title: 'Natural cat food with salmon and vegetables',
    brand: 'Pet Square',
    price: '$36.25',
    compareAt: '$42.00',
  },
];

function Arrow({ direction }) {
  return (
    <button
      type="button"
      className="hidden h-[61px] w-10 items-center justify-center bg-white text-ink transition hover:bg-surface md:inline-flex"
      aria-label={direction === 'prev' ? 'Previous products' : 'Next products'}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className={`h-5 w-5 ${direction === 'prev' ? '' : 'rotate-180'}`}
      >
        <path
          d="m15 5-7 7 7 7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function Card(p) {
  return (
    <article className="flex h-full min-h-[420px] flex-col border border-line bg-white">
      <div className="h-[220px] bg-surface">
        <img src={p.img} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[14px] font-semibold leading-snug text-ink line-clamp-2">
          {p.title}
        </h3>
        <p className="mt-2 text-[12px] text-muted">{p.brand}</p>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-[14px] font-semibold text-ink">{p.price}</span>
          <span className="text-[12px] text-muted line-through">{p.compareAt}</span>
        </div>
        <div className="mt-auto flex items-center gap-3 pt-4">
          <div className="flex h-9 items-center border border-line bg-white">
            <button className="h-9 w-9 text-ink/70 hover:bg-surface" type="button">
              −
            </button>
            <div className="w-10 text-center text-[13px] font-semibold text-ink">1</div>
            <button className="h-9 w-9 text-ink/70 hover:bg-surface" type="button">
              +
            </button>
          </div>
          <button
            type="button"
            className="h-9 flex-1 bg-ink px-4 text-[12px] font-semibold tracking-wider text-white"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
}

export function TopPicks() {
  return (
    <section className="relative h-auto border-b border-line bg-white md:h-[768px]">
      <div className="mx-auto h-full max-w-[1440px] px-6 py-16 md:px-12 md:py-0">
        <h2 className="text-center text-[34px] font-semibold leading-[40px] tracking-normal text-ink md:pt-24 lg:text-[40px] lg:leading-[44px]">
          Featured Products
        </h2>
        <button
          type="button"
          className="mx-auto mt-4 flex h-[42px] items-center justify-center border border-line px-5 text-[12px] font-semibold leading-[14px] tracking-normal text-ink transition hover:bg-surface md:absolute md:right-[74px] md:top-24 md:mt-0"
        >
          View all products
        </button>

        <div className="mt-12 flex items-center gap-2 md:mt-14">
          <Arrow direction="prev" />
          <div className="grid min-h-[476px] flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {picks.map((p) => (
              <Card key={p.title} {...p} />
            ))}
          </div>
          <Arrow direction="next" />
        </div>
      </div>
    </section>
  );
}
