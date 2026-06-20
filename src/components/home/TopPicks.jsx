import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import pick1 from '../../assets/pets/home/pick-1.jpg';
import pick2 from '../../assets/pets/home/pick-2.jpg';
import product1 from '../../assets/pets/product-1.jpg';
import product2 from '../../assets/pets/product-2.jpg';
import product3 from '../../assets/pets/product-3.jpg';
import tileCat2 from '../../assets/pets/home/tile-cat-2.jpg';
import { ProductCard } from './ProductCard.jsx';
import { SectionHeading } from './SectionHeading.jsx';
import { fetchProducts } from '../../api.js';

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
  const [products, setProducts] = useState(picks);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchProducts()
      .then((items) => {
        if (items && items.length > 0) {
          setProducts(
            items.slice(0, 8).map((p, i) => ({
              id: String(p.id),
              variantId: p.variant_id,
              slug: p.slug,
              image: p.image_url || picks[i % picks.length].image,
              title: p.name,
              brand: p.brand || 'Pet Square',
              compareAt: p.formatted_compare_at_price,
              price: p.formatted_price,
              rawPrice: p.price,
              hasPrice: p.has_price,
              quantity: 1,
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  const maxDesktopIndex = Math.max(0, products.length - VISIBLE_CARDS);
  const maxMobileIndex = Math.max(0, products.length - 1);
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

        <div className="mt-8 flex w-full flex-col items-center md:hidden">
          <ProductCard {...products[activeIndex % products.length]} />
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

        <div className="mt-10 hidden w-full justify-center gap-6 md:grid xl:hidden [grid-template-columns:repeat(auto-fit,minmax(260px,294px))]">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-[44px] hidden w-full xl:relative xl:block xl:h-[516px] xl:max-w-[1344px] xl:overflow-visible">
          <div className="hidden xl:absolute xl:left-0 xl:top-[227.5px] xl:block">
            <Arrow direction="prev" onClick={handlePrev} />
          </div>

          <div className="min-w-max xl:absolute xl:left-12 xl:top-0 xl:h-[516px] xl:w-[1248px] xl:min-w-0 xl:overflow-x-hidden xl:overflow-y-visible xl:py-5">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${slideOffset}px)` }}
            >
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>

          <div className="hidden xl:absolute xl:right-0 xl:top-[227.5px] xl:block">
            <Arrow direction="next" onClick={handleNext} />
          </div>
        </div>
      </div>
    </section>
  );
}
