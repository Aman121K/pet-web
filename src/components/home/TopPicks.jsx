import pick1 from '../../assets/pets/home/pick-1.jpg';
import pick2 from '../../assets/pets/home/pick-2.jpg';
import product1 from '../../assets/pets/product-1.jpg';
import product2 from '../../assets/pets/product-2.jpg';
import { ProductCard } from './ProductCard.jsx';
import { SectionHeading } from './SectionHeading.jsx';

const picks = [
  {
    id: 'victorian-cage-white',
    image: product1,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    brand: 'Canagan',
    compareAt: '$222.74',
    price: '$221.00',
    quantity: 5,
  },
  {
    id: 'victorian-cage-house',
    image: product2,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    brand: 'Canagan',
    compareAt: '$222.74',
    price: '$221.00',
    quantity: 5,
  },
  {
    id: 'victorian-cage-dog',
    image: pick1,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    brand: 'Canagan',
    compareAt: '$222.74',
    price: '$221.00',
    quantity: 5,
  },
  {
    id: 'victorian-cage-puppy',
    image: pick2,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    brand: 'Canagan',
    compareAt: '$222.74',
    price: '$221.00',
    quantity: 5,
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

export function TopPicks() {
  return (
    <section className="relative h-auto border-b border-line bg-[rgba(246,246,246,0.5)] xl:h-[768px]">
      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col items-center px-6 py-16 xl:px-12 xl:py-24">
        <SectionHeading>Our top picks for your pets</SectionHeading>

        <button
          type="button"
          className="mt-5 flex h-[42px] w-[128px] items-center justify-center gap-[10px] text-[13px] font-semibold leading-[16px] tracking-normal text-ink transition hover:text-black xl:absolute xl:right-[74px] xl:top-[98px] xl:mt-0"
        >
          View all
          <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-[14px] w-[14px]">
            <path
              d="M5 12h14m-6-6 6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="mt-[56px] w-full overflow-x-auto xl:relative xl:h-[476px] xl:max-w-[1344px] xl:overflow-visible">
          <div className="hidden xl:absolute xl:left-0 xl:top-[207.5px] xl:block">
            <Arrow direction="prev" />
          </div>

          <div className="flex min-w-max gap-6 xl:absolute xl:left-12 xl:top-0 xl:h-[476px] xl:w-[1248px]">
            {picks.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="hidden xl:absolute xl:right-0 xl:top-[207.5px] xl:block">
            <Arrow direction="next" />
          </div>
        </div>
      </div>
    </section>
  );
}
