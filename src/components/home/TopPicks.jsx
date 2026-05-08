import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import pick1 from '../../assets/pets/home/pick-1.jpg';
import pick2 from '../../assets/pets/home/pick-2.jpg';
import product1 from '../../assets/pets/product-1.jpg';
import product2 from '../../assets/pets/product-2.jpg';
import product3 from '../../assets/pets/product-3.jpg';
import tileCat2 from '../../assets/pets/home/tile-cat-2.jpg';
import { ProductCard } from './ProductCard.jsx';
import { SectionHeading } from './SectionHeading.jsx';

const VISIBLE_CARDS = 4;
const CARD_WIDTH = 294;
const CARD_GAP = 24;

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
  {
    id: 'victorian-cage-cat',
    image: tileCat2,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    brand: 'Canagan',
    compareAt: '$222.74',
    price: '$221.00',
    quantity: 5,
  },
  {
    id: 'victorian-cage-pets',
    image: product3,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    brand: 'Canagan',
    compareAt: '$222.74',
    price: '$221.00',
    quantity: 5,
  },
];

function Arrow({ direction, onClick }) {
  const isPrev = direction === 'prev';
  const Icon = isPrev ? ArrowLeft : ArrowRight;

  return (
    <button
      type="button"
      className="hidden h-[61px] w-10 items-center justify-center bg-white text-ink transition hover:bg-white xl:inline-flex"
      aria-label={isPrev ? 'Previous products' : 'Next products'}
      onClick={onClick}
    >
      <Icon aria-hidden size={24} strokeWidth={2} />
    </button>
  );
}

export function TopPicks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxDesktopIndex = Math.max(0, picks.length - VISIBLE_CARDS);
  const maxMobileIndex = Math.max(0, picks.length - 1);
  const slideOffset = Math.min(activeIndex, maxDesktopIndex) * (CARD_WIDTH + CARD_GAP);

  function handlePrev() {
    setActiveIndex((current) => (current === 0 ? maxMobileIndex : current - 1));
  }

  function handleNext() {
    setActiveIndex((current) => (current === maxMobileIndex ? 0 : current + 1));
  }

  return (
    <section className="relative h-auto border-b border-line bg-[rgba(246,246,246,0.5)] xl:h-[768px]">
      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col items-center px-4 py-12 xl:px-12 xl:py-24">
        <SectionHeading>Our top picks for your pets</SectionHeading>

        <button
          type="button"
          className="mt-5 flex h-[42px] w-[128px] items-center justify-center gap-[8px] text-[13px] font-semibold leading-[16px] tracking-normal text-ink transition hover:text-black xl:absolute xl:right-[74px] xl:top-[98px] xl:mt-0"
        >
          <span className="underline underline-offset-2">View all</span>
          <ArrowUpRight aria-hidden size={13} strokeWidth={1.8} />
        </button>

        <div className="mt-8 flex w-full flex-col items-center xl:hidden">
          <ProductCard {...picks[activeIndex]} />
          <div className="mt-[28px] flex items-center justify-center gap-12">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-ink"
              aria-label="Previous products"
              onClick={handlePrev}
            >
              <ArrowLeft aria-hidden size={24} strokeWidth={2} />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-ink"
              aria-label="Next products"
              onClick={handleNext}
            >
              <ArrowRight aria-hidden size={24} strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="mt-[56px] hidden w-full overflow-x-auto xl:relative xl:block xl:h-[476px] xl:max-w-[1344px] xl:overflow-hidden">
          <div className="hidden xl:absolute xl:left-0 xl:top-[207.5px] xl:block">
            <Arrow direction="prev" onClick={handlePrev} />
          </div>

          <div className="min-w-max xl:absolute xl:left-12 xl:top-0 xl:h-[476px] xl:w-[1248px] xl:min-w-0 xl:overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${slideOffset}px)` }}
            >
              {picks.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>

          <div className="hidden xl:absolute xl:right-0 xl:top-[207.5px] xl:block">
            <Arrow direction="next" onClick={handleNext} />
          </div>
        </div>
      </div>
    </section>
  );
}
