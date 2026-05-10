import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ProductCard } from './ProductCard.jsx';
import { SectionHeading } from './SectionHeading.jsx';
import { fetchProducts } from '../../api.js';
import pick1 from '../../assets/pets/home/pick-1.jpg';
import pick2 from '../../assets/pets/home/pick-2.jpg';
import product1 from '../../assets/pets/product-1.jpg';
import product2 from '../../assets/pets/product-2.jpg';
import product3 from '../../assets/pets/product-3.jpg';
import tileCat2 from '../../assets/pets/home/tile-cat-2.jpg';

const VISIBLE_CARDS = 4;
const CARD_WIDTH = 294;
const CARD_GAP = 24;

const FALLBACK_PRODUCTS = [
  {
    id: 'bs-1',
    image: pick1,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    brand: 'Canagan',
    compareAt: '$222.74',
    price: '$221.00',
    quantity: 5,
  },
  {
    id: 'bs-2',
    image: product2,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    brand: 'Canagan',
    compareAt: '$222.74',
    price: '$221.00',
    quantity: 5,
  },
  {
    id: 'bs-3',
    image: pick2,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    brand: 'Canagan',
    compareAt: '$222.74',
    price: '$221.00',
    quantity: 5,
  },
  {
    id: 'bs-4',
    image: product3,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    brand: 'Canagan',
    compareAt: '$222.74',
    price: '$221.00',
    quantity: 5,
  },
  {
    id: 'bs-5',
    image: tileCat2,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    brand: 'Canagan',
    compareAt: '$222.74',
    price: '$221.00',
    quantity: 5,
  },
  {
    id: 'bs-6',
    image: product1,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    brand: 'Canagan',
    compareAt: '$222.74',
    price: '$221.00',
    quantity: 5,
  },
];

function Arrow({ direction, onClick }) {
  const Icon = direction === 'prev' ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[61px] w-[57px] items-center justify-center border border-line bg-white text-ink transition hover:bg-surface"
      aria-label={direction === 'prev' ? 'Previous products' : 'Next products'}
    >
      <Icon aria-hidden size={20} strokeWidth={1.8} />
    </button>
  );
}

export function BestSelling() {
  const [products, setProducts] = useState(FALLBACK_PRODUCTS);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchProducts()
      .then((items) => {
        if (items && items.length > 0) {
          const mapped = items.map((p, i) => ({
            id: String(p.id),
            image: p.image_url || FALLBACK_PRODUCTS[i % FALLBACK_PRODUCTS.length].image,
            title: p.name,
            brand: p.brand || 'Canagan',
            compareAt: p.compare_at_price
              ? `$${Number(p.compare_at_price).toFixed(2)}`
              : `$${(Number(p.price) * 1.05).toFixed(2)}`,
            price: `$${Number(p.price).toFixed(2)}`,
            quantity: 1,
          }));
          setProducts(mapped);
        }
      })
      .catch(() => {});
  }, []);

  const maxDesktopIndex = Math.max(0, products.length - VISIBLE_CARDS);
  const maxMobileIndex = Math.max(0, products.length - 1);
  const slideOffset = Math.min(activeIndex, maxDesktopIndex) * (CARD_WIDTH + CARD_GAP);

  function handlePrev() {
    setActiveIndex((i) => (i === 0 ? maxMobileIndex : i - 1));
  }
  function handleNext() {
    setActiveIndex((i) => (i === maxMobileIndex ? 0 : i + 1));
  }

  return (
    <section className="relative h-auto bg-[rgba(246,246,246,0.5)] xl:h-[768px]">
      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col items-center px-4 py-12 xl:px-12 xl:py-24">

        <SectionHeading>Best-Selling Products</SectionHeading>

        <button
          type="button"
          className="mt-5 flex h-[42px] items-center justify-center gap-[10px] text-[13px] font-semibold leading-[16px] text-ink transition hover:text-black xl:absolute xl:right-[74px] xl:top-[98px] xl:mt-0"
        >
          <span className="underline underline-offset-2">View all</span>
          <ArrowUpRight aria-hidden size={13} strokeWidth={1.8} />
        </button>

        <div className="mt-8 flex w-full flex-col items-center xl:hidden">
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

        <div className="mt-14 hidden w-full overflow-x-auto xl:relative xl:block xl:h-[476px] xl:max-w-[1344px] xl:overflow-hidden">
          <div className="hidden xl:absolute xl:left-0 xl:top-[207.5px] xl:block">
            <Arrow direction="prev" onClick={handlePrev} />
          </div>

          <div className="min-w-max xl:absolute xl:left-12 xl:top-0 xl:h-[476px] xl:w-[1248px] xl:min-w-0 xl:overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${slideOffset}px)` }}
            >
              {products.map((product) => (
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
