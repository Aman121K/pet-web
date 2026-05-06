import { SectionShell } from './SectionShell.jsx';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api.js';

function Card({ p }) {
  return (
    <article className="border border-line bg-white">
      <div className="aspect-[4/3] bg-surface">
        <img src={p.image_url} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-[14px] font-semibold leading-snug text-ink line-clamp-2">
          {p.name}
        </h3>
        <p className="mt-2 text-[12px] text-muted line-clamp-2">{p.description}</p>
        <p className="mt-3 text-[14px] font-semibold text-ink">
          ${Number(p.price).toFixed(2)}
        </p>
        <button
          type="button"
          className="mt-4 h-9 w-full bg-ink text-[12px] font-semibold tracking-wider text-white"
        >
          ADD TO CART
        </button>
      </div>
    </article>
  );
}

export function BestSelling() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchProducts().then(setItems).catch(() => setItems([]));
  }, []);

  return (
    <SectionShell className="bg-white py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-[14px] font-semibold text-ink">Best-Selling Products</h2>
        <button type="button" className="text-[12px] font-semibold text-ink/70">
          View all
        </button>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.slice(0, 4).map((p) => (
          <Card key={p.id} p={p} />
        ))}
      </div>
    </SectionShell>
  );
}

