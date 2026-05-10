import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FeatureBar } from '../components/FeatureBar.jsx';
import { FaqBlock } from '../components/home/FaqBlock.jsx';
import { MailingList } from '../components/home/MailingList.jsx';
import { addToCartAndOpen } from '../components/CartDrawer.jsx';
import heroDogs from '../assets/pets/hero.jpg';
import infoImage from '../assets/pets/modal-left.jpg';
import product1 from '../assets/pets/product-1.jpg';
import product2 from '../assets/pets/product-2.jpg';
import product3 from '../assets/pets/product-3.jpg';
import pick1 from '../assets/pets/home/pick-1.jpg';
import pick2 from '../assets/pets/home/pick-2.jpg';

const baseCards = [
  { id: 1, image: pick1, sale: 35, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 221.0, rating: 4.3, category: 'dog' },
  { id: 2, image: infoImage, sale: 25, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 219.0, rating: 4.8, category: 'dog' },
  { id: 3, image: product3, sale: 35, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 218.0, rating: 4.2, category: 'cat' },
  { id: 4, image: product3, sale: 35, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 217.0, rating: 4.6, category: 'fish' },
  { id: 5, image: product1, sale: 35, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 216.0, rating: 4.1, category: 'dog' },
  { id: 6, image: pick1, sale: 35, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 215.0, rating: 4.7, category: 'cat' },
  { id: 7, image: infoImage, sale: 25, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 214.0, rating: 4.4, category: 'bird' },
  { id: 8, image: product3, sale: 35, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 213.0, rating: 4.3, category: 'dog' },
  { id: 9, image: product1, sale: 35, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 212.0, rating: 4.9, category: 'dog' },
  { id: 10, image: product1, sale: 35, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 211.0, rating: 4.0, category: 'fish' },
  { id: 11, image: infoImage, sale: 25, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 210.0, rating: 4.5, category: 'bird' },
  { id: 12, image: product3, sale: 35, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 209.0, rating: 4.4, category: 'cat' },
  { id: 13, image: product1, sale: 35, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 208.0, rating: 4.2, category: 'dog' },
  { id: 14, image: product1, sale: 35, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 207.0, rating: 4.6, category: 'cat' },
  { id: 15, image: infoImage, sale: 25, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 206.0, rating: 4.8, category: 'fish' },
  { id: 16, image: product3, sale: 35, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 205.0, rating: 4.1, category: 'dog' },
  { id: 17, image: infoImage, sale: 25, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 204.0, rating: 4.7, category: 'bird' },
  { id: 18, image: product3, sale: 35, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 203.0, rating: 4.3, category: 'cat' },
  { id: 19, image: product1, sale: 35, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 202.0, rating: 4.5, category: 'dog' },
  { id: 20, image: pick2, sale: 25, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', brand: 'Canagan', compareAt: 222.74, price: 201.0, rating: 4.6, category: 'cat' },
];

function ProductCell({ item, qty, onIncrease, onDecrease }) {
  const { image, sale, title, brand, compareAt, price } = item;
  const slug = String(title || 'product')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  const to = `/product-details/${slug}`;
  return (
    <article className="border border-line bg-white p-[6px]">
      <div className="relative aspect-[1.38] overflow-hidden bg-surface">
        <Link to={to} className="block h-full w-full">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </Link>
        <span className="absolute right-0 top-0 bg-[#dc3e3e] px-[6px] py-[2px] text-[9px] font-semibold text-white">
          Sale {sale}%
        </span>
      </div>
      <div className="pt-2">
        <Link to={to}>
          <h3 className="line-clamp-2 text-[10px] leading-[1.35] text-ink">
            {title}
          </h3>
        </Link>
        <p className="mt-1 text-[10px] text-muted">{brand}</p>
        <div className="mt-1 flex items-center gap-1 text-[10px]">
          <span className="text-muted line-through">${compareAt.toFixed(2)}</span>
          <span className="font-semibold text-ink">${price.toFixed(2)}</span>
        </div>
        <div className="mt-2 flex items-center gap-1">
          <button type="button" onClick={onDecrease} className="h-5 w-5 border border-line text-[12px] leading-none text-muted">-</button>
          <span className="inline-flex h-5 min-w-[16px] items-center justify-center text-[10px] text-ink">{qty}</span>
          <button type="button" onClick={onIncrease} className="h-5 w-5 border border-line text-[12px] leading-none text-ink">+</button>
          <button
            type="button"
            onClick={() => addToCartAndOpen({ id: item.id, title, image, price, qty })}
            className="ml-auto inline-flex h-5 items-center bg-ink px-2 text-[9px] font-semibold text-white"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
}

function FilterSelect({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-8 min-w-[120px] border border-line bg-white px-2 text-[10px] text-[#6d6d6d] outline-none"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function Shop() {
  const [qtyById, setQtyById] = useState(() =>
    Object.fromEntries(baseCards.map((c) => [c.id, 1]))
  );
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [rating, setRating] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const cards = useMemo(() => {
    let rows = [...baseCards];
    if (category !== 'all') rows = rows.filter((r) => r.category === category);
    if (priceRange === 'low') rows = rows.filter((r) => r.price < 210);
    if (priceRange === 'mid') rows = rows.filter((r) => r.price >= 210 && r.price <= 216);
    if (priceRange === 'high') rows = rows.filter((r) => r.price > 216);
    if (rating !== 'all') rows = rows.filter((r) => r.rating >= Number(rating));

    if (sortBy === 'latest') rows.sort((a, b) => b.id - a.id);
    if (sortBy === 'priceLow') rows.sort((a, b) => a.price - b.price);
    if (sortBy === 'priceHigh') rows.sort((a, b) => b.price - a.price);
    if (sortBy === 'ratingHigh') rows.sort((a, b) => b.rating - a.rating);
    return rows;
  }, [category, priceRange, rating, sortBy]);

  const total = cards.length;

  return (
    <>
      <FeatureBar />

      <section className="border-b border-line bg-[#f6f6f6]">
        <div className="mx-auto max-w-[1200px] px-4 py-2 text-[10px] text-muted">
          Home <span className="px-1">&gt;</span> Shop
        </div>
      </section>

      <section className="bg-[#f1f1f1] py-3">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="overflow-hidden rounded-[6px] bg-[#1e1e1e] md:grid md:grid-cols-[1fr_1.1fr] md:items-center">
            <div className="order-2 px-5 py-5 text-white md:order-1 md:px-7">
              <h1 className="max-w-[320px] text-[24px] font-semibold leading-[1.1] md:text-[32px]">
                Find everything you need to welcome them home
              </h1>
              <button type="button" className="mt-4 h-8 border border-white/60 px-4 text-[11px] font-semibold">
                EXPLORE NOW
              </button>
            </div>
            <div className="order-1 md:order-2">
              <img src={heroDogs} alt="Pets" className="h-[170px] w-full object-cover md:h-[220px]" />
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
              <FilterSelect
                value={category}
                onChange={setCategory}
                options={[
                  { value: 'all', label: 'Select Category' },
                  { value: 'dog', label: 'Dog' },
                  { value: 'cat', label: 'Cat' },
                  { value: 'fish', label: 'Fish' },
                  { value: 'bird', label: 'Bird' },
                ]}
              />
              <FilterSelect
                value={priceRange}
                onChange={setPriceRange}
                options={[
                  { value: 'all', label: 'Select Price' },
                  { value: 'low', label: 'Under $210' },
                  { value: 'mid', label: '$210 - $216' },
                  { value: 'high', label: 'Above $216' },
                ]}
              />
              <FilterSelect
                value={rating}
                onChange={setRating}
                options={[
                  { value: 'all', label: 'Select Rating' },
                  { value: '4', label: '4.0+' },
                  { value: '4.5', label: '4.5+' },
                ]}
              />
              <FilterSelect
                value={sortBy}
                onChange={setSortBy}
                options={[
                  { value: 'latest', label: 'Sort by: Latest' },
                  { value: 'priceLow', label: 'Price: Low to High' },
                  { value: 'priceHigh', label: 'Price: High to Low' },
                  { value: 'ratingHigh', label: 'Rating: High to Low' },
                ]}
              />
            </div>
            <div className="flex items-center justify-between gap-4 text-[10px] text-muted md:justify-end">
              <span>Showing 1-{total}</span>
              <span>{total} result found</span>
            </div>
          </div>

          <div className="mt-4 border border-line bg-white p-5 text-center">
            <h2 className="text-[22px] font-semibold text-ink md:text-[32px]">To upscale your business to the next level</h2>
            <p className="mx-auto mt-2 max-w-[760px] text-[12px] leading-6 text-muted md:text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {cards.map((card, idx) => (
              <ProductCell
                key={card.id}
                item={card}
                qty={qtyById[card.id] || 1}
                onDecrease={() =>
                  setQtyById((prev) => ({
                    ...prev,
                    [card.id]: Math.max(1, (prev[card.id] || 1) - 1),
                  }))
                }
                onIncrease={() =>
                  setQtyById((prev) => ({
                    ...prev,
                    [card.id]: (prev[card.id] || 1) + 1,
                  }))
                }
              />
            ))}
          </div>

          <div className="mt-5 flex justify-center">
            <button type="button" className="text-[10px] font-semibold text-ink underline underline-offset-2">
              VIEW MORE
            </button>
          </div>

          <div className="mt-7 grid gap-4 border-t border-line pt-6 md:grid-cols-2 md:items-center">
            <img src={infoImage} alt="Dog house" className="h-[170px] w-full object-cover md:h-[240px]" />
            <div>
              <h3 className="text-[24px] font-semibold leading-[1.15] text-ink md:text-[38px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p className="mt-3 text-[12px] leading-6 text-muted md:text-[13px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor ut
                ullamcorper eleifend. Maecenas quis elit sodales auctor eget et elit.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-[24px] font-semibold leading-[1.15] text-ink md:text-[38px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p className="mt-3 text-[12px] leading-6 text-muted md:text-[13px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor ut
                ullamcorper eleifend. Maecenas quis elit sodales auctor eget et elit.
              </p>
            </div>
            <img src={infoImage} alt="Dog house" className="h-[170px] w-full object-cover md:h-[240px]" />
          </div>
        </div>
      </section>

      <FaqBlock />
      <MailingList />
    </>
  );
}
