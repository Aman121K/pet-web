import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FeatureBar } from '../components/FeatureBar.jsx';
import { MailingList } from '../components/home/MailingList.jsx';
import { addToCartAndOpen } from '../components/CartDrawer.jsx';
import { getShopCategory, shopCategories } from '../data/shopCategories.js';
import { fetchFaqs, fetchProducts, formatMoney } from '../api.js';
import heroDogs from '../assets/pets/hero.jpg';
import infoImage from '../assets/pets/modal-left.jpg';
import product1 from '../assets/pets/product-1.jpg';
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
  const { image, fallbackImage, sale, title, brand, compareAt, price, currencyCode, rawPrice } = item;
  const canAdd = item.hasPrice !== false;
  const slug = String(item.slug || title || 'product')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  const to = `/product-details/${slug}`;
  return (
    <article className="product-hover-card pet-card overflow-hidden">
      <div className="relative aspect-[1.15] overflow-hidden bg-surface">
        <Link to={to} className="block h-full w-full">
          <img
            src={image || fallbackImage}
            alt=""
            className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
            onError={(event) => {
              if (fallbackImage && event.currentTarget.src !== fallbackImage) {
                event.currentTarget.src = fallbackImage;
              }
            }}
          />
        </Link>
        {sale > 0 ? (
          <span className="absolute right-2 top-2 rounded-md bg-rose-600 px-2 py-1 text-[10px] font-semibold text-white">
            -{sale}%
          </span>
        ) : null}
      </div>
      <div className="p-3">
        <Link to={to}>
          <h3 className="line-clamp-2 text-[13px] font-medium leading-[1.35] text-ink hover:underline">
            {title}
          </h3>
        </Link>
        <p className="mt-1 text-[12px] text-muted">{brand}</p>
        <div className="mt-2 flex items-center gap-2 text-[13px]">
          {compareAt ? (
            <span className="text-muted line-through">
              {typeof compareAt === 'number' ? formatMoney(compareAt, currencyCode) : compareAt}
            </span>
          ) : null}
          <span className="font-semibold text-ink">
            {typeof price === 'number' ? formatMoney(price, currencyCode) : price}
          </span>
        </div>
        <div className="product-cell-actions mt-3 flex items-center gap-2">
          <div className="inline-flex h-8 items-center rounded-lg border border-line bg-white">
            <button type="button" onClick={onDecrease} className="h-full w-8 text-[14px] text-muted">-</button>
            <span className="inline-flex h-full min-w-[24px] items-center justify-center text-[12px] text-ink">{qty}</span>
            <button type="button" onClick={onIncrease} className="h-full w-8 text-[14px] text-ink">+</button>
          </div>
          <button
            type="button"
            disabled={!canAdd}
            onClick={() => addToCartAndOpen({ id: item.id, variant_id: item.variant_id, title, image, price: rawPrice || price, qty })}
            className="pet-btn-primary ml-auto h-8 px-3 text-[11px] disabled:cursor-not-allowed disabled:bg-muted"
          >
            {canAdd ? 'Add' : 'Unavailable'}
          </button>
        </div>
      </div>
    </article>
  );
}

const categoryFaqs = [
  {
    question: 'How do I choose the right category?',
    answer:
      'Start with your pet type, then use the subcategories for food, health, treats, or accessories. You can still sort and filter products after choosing a category.',
  },
  {
    question: 'Can I mix products from different categories?',
    answer:
      'Yes. Add items from any category to your cart and checkout together in one order.',
  },
  {
    question: 'Are health and diet products suitable for every pet?',
    answer:
      'Some products depend on age, breed, or medical needs. Check the product details and speak with your vet for special diets or treatments.',
  },
  {
    question: 'Where do I find new arrivals and bundles?',
    answer:
      'Use Shop All for the widest list, then sort by Latest or choose bundle-related subcategories from the category panel.',
  },
];

function CategoryExplorer({ activeCategory, activeSubcategory, onCategoryChange, onSubcategoryChange }) {
  const selected = getShopCategory(activeCategory);

  return (
    <section className="mt-5 border border-line bg-white">
      <div className="grid lg:grid-cols-[292px_1fr]">
        <aside className="border-b border-line bg-[#fbfbfb] p-4 lg:border-b-0 lg:border-r lg:p-5">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#29748a]">Shop by pet</p>
              <h2 className="mt-1 text-[22px] font-semibold leading-tight text-ink">Categories</h2>
            </div>
            <button
              type="button"
              onClick={() => {
                onCategoryChange('all');
                onSubcategoryChange('');
              }}
              className="text-[12px] font-semibold text-[#b42323] hover:underline"
            >
              Reset
            </button>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {shopCategories.map((category) => (
              <button
                key={category.key}
                type="button"
                onClick={() => {
                  onCategoryChange(category.key);
                  onSubcategoryChange('');
                }}
                className={`category-card group flex min-h-[86px] overflow-hidden border text-left transition ${
                  selected.key === category.key
                    ? 'border-[#f0a9a9] bg-[#fff1f1] shadow-[0_10px_24px_rgba(180,35,35,0.08)]'
                    : 'border-line bg-white hover:border-[#f0a9a9] hover:bg-[#fff7f7]'
                }`}
              >
                <div className="flex min-w-0 flex-1 flex-col justify-center px-4">
                  <span className="text-[15px] font-semibold leading-5 text-ink">{category.label}</span>
                  <span className="mt-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#9d1f1f]">
                    {category.eyebrow}
                    <span className="ml-2 transition group-hover:translate-x-1">›</span>
                  </span>
                </div>
                <img src={category.image} alt="" className="category-card-image h-[86px] w-[92px] object-cover" />
              </button>
            ))}
          </div>
        </aside>

        <div className="p-4 sm:p-5 lg:p-6">
          <div className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#29748a]">
                {selected.eyebrow}
              </p>
              <h2 className="mt-1 text-[26px] font-semibold leading-tight text-ink md:text-[32px]">
                {selected.label} categories
              </h2>
              <p className="mt-2 max-w-[620px] text-[14px] leading-6 text-muted">{selected.description}</p>
            </div>
            {activeSubcategory ? (
              <button
                type="button"
                onClick={() => onSubcategoryChange('')}
                className="self-start border border-line px-3 py-2 text-[12px] font-semibold text-ink hover:bg-surface sm:self-auto"
              >
                Clear {activeSubcategory}
              </button>
            ) : null}
          </div>

          <div className="mt-5 grid gap-x-8 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
            {selected.groups.map((group) => (
              <section key={group.title}>
                <h3 className="border-b border-line pb-3 text-[15px] font-semibold text-[#29748a]">
                  {group.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => onSubcategoryChange(item)}
                      className={`border px-3 py-2 text-left text-[13px] leading-5 transition ${
                        activeSubcategory === item
                          ? 'border-[#b42323] bg-[#b42323] text-white'
                          : 'border-line bg-white text-ink/80 hover:border-[#f0a9a9] hover:bg-[#fff7f7] hover:text-[#b42323]'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryFaq() {
  const [items, setItems] = useState(categoryFaqs);

  useEffect(() => {
    fetchFaqs('category')
      .then((rows) => {
        if (Array.isArray(rows) && rows.length > 0) {
          setItems(rows.map((row) => ({ question: row.question, answer: row.answer })));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="mt-10 border border-line bg-white p-4 sm:p-6 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#29748a]">Category FAQ</p>
          <h2 className="mt-2 text-[26px] font-semibold leading-tight text-ink md:text-[32px]">
            Help choosing the right product
          </h2>
          <p className="mt-3 text-[14px] leading-6 text-muted">
            Quick answers for browsing categories, subcategories, bundles, and pet-specific products.
          </p>
        </div>
        <div className="divide-y divide-line border border-line">
          {items.map((item) => (
            <details key={item.question} className="group bg-white p-4 open:bg-[#fffafa]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-ink">
                {item.question}
                <span className="text-[22px] leading-none text-[#b42323] group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[14px] leading-6 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterSelect({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-10 w-full border border-line bg-white px-3 text-[13px] text-ink outline-none sm:w-auto sm:min-w-[160px]"
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
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialCategory = params.get('category') || 'all';
  const initialSubcategory = params.get('subcategory') || '';
  const [products, setProducts] = useState(baseCards);
  const [qtyById, setQtyById] = useState(() => Object.fromEntries(baseCards.map((c) => [c.id, 1])));
  const [category, setCategory] = useState(() => getShopCategory(initialCategory).key);
  const [subcategory, setSubcategory] = useState(initialSubcategory);
  const [priceRange, setPriceRange] = useState('all');
  const [rating, setRating] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const selectedCategory = getShopCategory(category);

  useEffect(() => {
    fetchProducts()
      .then((items) => {
        if (Array.isArray(items) && items.length > 0) {
          const mapped = items.map((p, index) => ({
            id: p.id,
            variant_id: p.variants?.[0]?.id,
            slug: p.slug,
            image: p.image_url || baseCards[index % baseCards.length].image,
            fallbackImage: baseCards[index % baseCards.length].image,
            sale: 0,
            title: p.name,
            brand: p.brand || 'Pet Square',
            compareAt: p.compare_at_price,
            price: p.price,
            rawPrice: p.price,
            currencyCode: p.currency_code,
            hasPrice: p.has_price,
            rating: 5,
            category: String(p.category?.name || '').toLowerCase(),
          }));
          setProducts(mapped);
          setQtyById(Object.fromEntries(mapped.map((c) => [c.id, 1])));
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    let cancelled = false;
    const nextParams = new URLSearchParams(location.search);
    queueMicrotask(() => {
      if (cancelled) return;
      setCategory(getShopCategory(nextParams.get('category') || 'all').key);
      setSubcategory(nextParams.get('subcategory') || '');
    });
    return () => {
      cancelled = true;
    };
  }, [location.search]);

  const cards = useMemo(() => {
    let rows = [...products];
    if (selectedCategory.productFilter !== 'all') {
      rows = rows.filter(
        (r) =>
          r.category === selectedCategory.productFilter ||
          r.category.includes(selectedCategory.productFilter)
      );
    }
    if (priceRange === 'low') rows = rows.filter((r) => r.price < 210);
    if (priceRange === 'mid') rows = rows.filter((r) => r.price >= 210 && r.price <= 216);
    if (priceRange === 'high') rows = rows.filter((r) => r.price > 216);
    if (rating !== 'all') rows = rows.filter((r) => r.rating >= Number(rating));

    if (sortBy === 'latest') rows.sort((a, b) => b.id - a.id);
    if (sortBy === 'priceLow') rows.sort((a, b) => a.price - b.price);
    if (sortBy === 'priceHigh') rows.sort((a, b) => b.price - a.price);
    if (sortBy === 'ratingHigh') rows.sort((a, b) => b.rating - a.rating);
    return rows;
  }, [products, selectedCategory.productFilter, priceRange, rating, sortBy]);

  const total = cards.length;

  return (
    <>
      <FeatureBar />

      <section className="border-b border-line bg-surface py-2">
        <div className="pet-page-shell text-[12px] text-muted">Home <span className="px-1">/</span> Shop</div>
      </section>

      <section className="bg-surface py-6 md:py-8">
        <div className="pet-page-shell">
          <div className="overflow-hidden border border-line bg-white md:grid md:grid-cols-[1fr_1.1fr] md:items-center">
            <div className="order-2 p-6 md:order-1 md:p-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#29748a]">Pet Square Shop</p>
              <h1 className="mt-2 max-w-[520px] text-[32px] font-semibold leading-[1.08] tracking-tight text-ink md:text-[44px]">
                Find the right food, care, and gear by category
              </h1>
              <p className="mt-4 max-w-[520px] text-[14px] leading-6 text-muted md:text-[16px]">
                Choose a category on the left, then narrow by subcategory on the right.
              </p>
              <a href="#shop-categories" className="pet-btn-primary mt-6">Explore categories</a>
            </div>
            <div className="order-1 md:order-2">
              <img src={heroDogs} alt="Pets" className="h-[220px] w-full object-cover md:h-[300px]" />
            </div>
          </div>

          <div id="shop-categories">
            <CategoryExplorer
              activeCategory={category}
              activeSubcategory={subcategory}
              onCategoryChange={setCategory}
              onSubcategoryChange={setSubcategory}
            />
          </div>

          <div className="pet-card mt-5 p-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
                <FilterSelect value={priceRange} onChange={setPriceRange} options={[{ value: 'all', label: 'Price' }, { value: 'low', label: 'Under $210' }, { value: 'mid', label: '$210 - $216' }, { value: 'high', label: 'Above $216' }]} />
                <FilterSelect value={rating} onChange={setRating} options={[{ value: 'all', label: 'Rating' }, { value: '4', label: '4.0+' }, { value: '4.5', label: '4.5+' }]} />
                <FilterSelect value={sortBy} onChange={setSortBy} options={[{ value: 'latest', label: 'Latest' }, { value: 'priceLow', label: 'Price low to high' }, { value: 'priceHigh', label: 'Price high to low' }, { value: 'ratingHigh', label: 'Rating high to low' }]} />
              </div>
              <div className="text-[12px] text-muted">
                Showing {total} products in {selectedCategory.label}
                {subcategory ? ` / ${subcategory}` : ''}
              </div>
            </div>
          </div>

          <div className="shop-product-grid mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {cards.map((card) => (
              <ProductCell
                key={card.id}
                item={card}
                qty={qtyById[card.id] || 1}
                onDecrease={() =>
                  setQtyById((prev) => ({ ...prev, [card.id]: Math.max(1, (prev[card.id] || 1) - 1) }))
                }
                onIncrease={() =>
                  setQtyById((prev) => ({ ...prev, [card.id]: (prev[card.id] || 1) + 1 }))
                }
              />
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <button type="button" className="pet-btn-secondary">View more</button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-center">
            <img src={infoImage} alt="Dog house" className="border border-line object-cover" />
            <div>
              <h3 className="text-[28px] font-semibold leading-[1.15] tracking-tight text-ink md:text-[38px]">Curated products for daily pet care.</h3>
              <p className="mt-3 text-[14px] leading-7 text-muted">
                Shop by pet type, routine, and need so you can compare essentials without guessing where they belong.
              </p>
            </div>
          </div>

          <CategoryFaq />
        </div>
      </section>

      <MailingList />
    </>
  );
}
