import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchProductBySlug } from '../api.js';
import { FeatureBar } from '../components/FeatureBar.jsx';

function Spec({ label, value }) {
  return (
    <li className="flex items-center justify-between border-b border-line py-3 text-[14px]">
      <span className="text-muted">{label}</span>
      <span className="font-medium text-ink">{value}</span>
    </li>
  );
}

export function ProductDetails() {
  const { slug = '' } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProductBySlug(slug)
      .then(setProduct)
      .catch((e) => setError(e.message));
  }, [slug]);

  const name = product?.name || 'Product';
  const image = product?.imageUrl || '/images/product-1.jpg';
  const price = Number(product?.price || 0);

  return (
    <>
      <FeatureBar />
      <section className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <p className="text-[13px] text-muted">
          <Link to="/shop" className="hover:text-ink">Shop</Link> / {name}
        </p>
        {error ? <p className="mt-3 text-[13px] text-red-600">{error}</p> : null}

        <div className="mt-5 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            <img src={image} alt={name} className="h-full w-full object-cover" />
          </div>

          <div>
            <h1 className="text-[32px] font-semibold tracking-tight text-ink">{name}</h1>
            <p className="mt-3 text-[15px] text-muted">
              {product?.description || 'Premium nutrition and accessories for your pets.'}
            </p>
            <p className="mt-5 text-[30px] font-semibold text-ink">${price.toFixed(2)}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="h-11 w-full rounded-lg border border-line px-3 text-[14px] outline-none sm:w-28"
              />
              <button
                type="button"
                className="h-11 flex-1 rounded-lg bg-ink px-6 text-[14px] font-semibold text-white transition hover:bg-ink/90"
              >
                Add to cart
              </button>
              <Link
                to="/checkout"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-line px-6 text-[14px] font-semibold text-ink transition hover:bg-surface"
              >
                Buy now
              </Link>
            </div>

            <ul className="mt-8 rounded-xl border border-line bg-white px-4">
              <Spec label="Weight" value="1.5 lb" />
              <Spec label="Category" value={product?.category?.name || 'General'} />
              <Spec label="SKU" value={product?.sku || 'N/A'} />
              <Spec label="Stock" value={String(product?.stock ?? 'N/A')} />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
