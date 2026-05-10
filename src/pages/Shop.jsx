import { useEffect, useState } from 'react';
import { fetchProducts } from '../api.js';
import { FeatureBar } from '../components/FeatureBar.jsx';
import { Link } from 'react-router-dom';

function formatPrice(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
}

export function Shop() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    fetchProducts()
      .then((data) => {
        if (!cancelled) setItems(data);
      })
      .catch(() => {
        if (!cancelled) setError('Could not load products. Is the API running?');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <FeatureBar />
      <section className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <h1 className="text-[28px] font-semibold tracking-tight text-ink sm:text-[34px]">
          Shop
        </h1>
        <p className="mt-2 max-w-[640px] text-[15px] text-muted">
          Browse products synced from your admin panel. Add or edit items in the admin app to
          update this grid.
        </p>

        {error ? (
          <p className="mt-8 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-800">
            {error}
          </p>
        ) : null}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article
              key={p._id}
              className="overflow-hidden rounded-[12px] border border-line bg-white shadow-[0_8px_30px_rgba(17,17,17,0.06)]"
            >
              <div className="aspect-[4/3] bg-surface">
                <img
                  src={p.imageUrl || p.image_url || ''}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-[17px] font-semibold tracking-tight text-ink">{p.name}</h2>
                <p className="mt-2 line-clamp-2 text-[14px] text-muted">{p.description}</p>
                <p className="mt-4 text-[18px] font-semibold text-ink">{formatPrice(p.price)}</p>
                <Link
                  to={`/product-details/${p.slug}`}
                  className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-lg bg-ink text-[14px] font-semibold text-white transition hover:bg-ink/90"
                >
                  View details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
