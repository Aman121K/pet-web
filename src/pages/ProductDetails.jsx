import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchProductBySlug } from '../api.js';
import { FeatureBar } from '../components/FeatureBar.jsx';
import { MailingList } from '../components/home/MailingList.jsx';
import { addToCartAndOpen } from '../components/CartDrawer.jsx';
import product1 from '../assets/pets/product-1.jpg';
import product2 from '../assets/pets/product-2.jpg';
import product3 from '../assets/pets/product-3.jpg';
import pick1 from '../assets/pets/home/pick-1.jpg';
import infoImage from '../assets/pets/modal-left.jpg';

const thumbs = [product1, infoImage, product3, product1, pick1];

const related = [
  { image: product1, sale: 1 },
  { image: infoImage, sale: 1 },
  { image: product3, sale: 1 },
  { image: pick1, sale: 1 },
];

function slugToTitle(slug) {
  return String(slug || 'product')
    .split('-')
    .filter(Boolean)
    .map((w) => w[0]?.toUpperCase() + w.slice(1))
    .join(' ');
}

function RelatedCard({ image, sale, to }) {
  return (
    <article className="border border-line bg-white p-[8px]">
      <div className="relative aspect-[1.25] overflow-hidden">
        <Link to={to} className="block h-full w-full">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </Link>
        <span className="absolute right-0 top-0 bg-[#dc3e3e] px-2 py-[2px] text-[10px] text-white">Sale {sale}%</span>
      </div>
      <h3 className="mt-2 line-clamp-2 text-[12px] font-semibold leading-[1.35] text-ink">
        Platinum Open Victorian Top with Plastic Base Bird Cage
      </h3>
      <p className="mt-2 text-[11px] text-muted">Canagan</p>
      <p className="mt-1 text-[12px] text-ink"><span className="line-through text-muted">$222.74</span> <span className="font-semibold">$221.00</span></p>
      <div className="mt-2 flex items-center gap-1">
        <button type="button" className="h-6 w-6 border border-line text-[12px]">-</button>
        <span className="inline-flex h-6 w-4 items-center justify-center text-[11px]">1</span>
        <button type="button" className="h-6 w-6 border border-line text-[12px]">+</button>
        <Link to={to} className="ml-auto inline-flex h-6 items-center bg-ink px-2 text-[9px] font-semibold text-white">ADD TO CART</Link>
      </div>
    </article>
  );
}

export function ProductDetails() {
  const { slug = '' } = useParams();
  const [apiProduct, setApiProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [mainImage, setMainImage] = useState(product1);
  const [activeTab, setActiveTab] = useState('Specifications');

  useEffect(() => {
    let mounted = true;
    fetchProductBySlug(slug)
      .then((p) => {
        if (!mounted) return;
        setApiProduct(p);
      })
      .catch(() => {
        if (!mounted) return;
        setApiProduct(null);
      });
    return () => {
      mounted = false;
    };
  }, [slug]);

  const product = useMemo(() => {
    const title = slugToTitle(slug) || 'Rosy Delight';
    return {
      name: apiProduct?.name || title,
      category: apiProduct?.category?.name || 'Fresh Food',
      price: Number(apiProduct?.price || 100),
      description:
        apiProduct?.description ||
        'H2 - Large exceptional bouquet composed of a selection of David Austin roses. Large exceptional bouquet composed of a selection of David Austin roses.',
      image: apiProduct?.imageUrl || apiProduct?.image_url || product1,
      sku: apiProduct?.sku || '054359',
    };
  }, [apiProduct, slug]);

  useEffect(() => {
    setMainImage(product.image || product1);
  }, [product.image]);

  return (
    <>
      <FeatureBar />

      <section className="border-b border-line bg-[#f4f4f4]">
        <div className="mx-auto max-w-[1200px] px-4 py-3 text-[11px] text-muted">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="px-2">&gt;</span>
          <Link to="/shop" className="hover:text-ink">Categories</Link>
          <span className="px-2">&gt;</span>
          <span>{product.name} - ${product.price.toFixed(0)}</span>
        </div>
      </section>

      <section className="bg-[#efefef] py-5 md:py-8">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="overflow-hidden border border-line bg-white">
                <img src={mainImage} alt={product.name} className="h-[260px] w-full object-cover md:h-[420px]" />
              </div>
              <div className="mt-3 flex items-center gap-2 overflow-x-auto">
                {thumbs.map((img, i) => (
                  <button
                    key={`${img}-${i}`}
                    type="button"
                    onClick={() => setMainImage(img)}
                    className="h-[56px] w-[56px] shrink-0 overflow-hidden border border-line bg-white"
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <aside className="border border-line bg-white p-4 md:p-6">
              <p className="text-[12px] text-muted">{product.category}</p>
              <h1 className="mt-2 text-[32px] font-semibold leading-[1.05] text-ink md:text-[44px]">
                H1 - {product.name} - ${product.price.toFixed(0)}
              </h1>
              <p className="mt-4 text-[12px] leading-5 text-muted">{product.description}</p>
              <p className="mt-2 text-[12px] leading-5 text-muted">
                Pro - Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance.
              </p>

              <p className="mt-4 text-[11px] text-muted">SKU <span className="text-ink">{product.sku}</span></p>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-[12px] font-semibold text-ink">Quantity</span>
                <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="h-8 w-8 border border-line bg-white text-[18px]">-</button>
                <span className="inline-flex h-8 min-w-[20px] items-center justify-center text-[13px]">{qty}</span>
                <button type="button" onClick={() => setQty((q) => q + 1)} className="h-8 w-8 border border-line bg-white text-[18px]">+</button>
              </div>

              <div className="mt-4 space-y-3 border-t border-line pt-3 text-[11px] text-muted">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-ink">Special Delivery</p>
                    <p>Free standard shipping. Calculated at checkout.</p>
                  </div>
                  <span className="inline-flex h-5 items-center bg-[#dc3e3e] px-2 text-[9px] font-semibold text-white">
                    Save 20%
                  </span>
                </div>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-3.5 w-3.5 border border-line" />
                  Add to cart warranty delivery plan
                </label>
              </div>

              <button
                type="button"
                onClick={() =>
                  addToCartAndOpen({
                    id: `detail-${slug || product.name}`,
                    title: product.name,
                    image: mainImage,
                    price: product.price,
                    qty,
                  })
                }
                className="mt-4 inline-flex h-10 w-full items-center justify-center bg-ink text-[12px] font-semibold text-white"
              >
                ADD TO CART
              </button>
            </aside>
          </div>

          <section className="mt-8 border border-line bg-white p-4 md:p-7">
            <h2 className="text-center text-[22px] font-semibold text-ink">Product details</h2>
            <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] md:grid-cols-5">
              {['Specifications', 'Descriptions', 'Product Info', 'Customer feedback', "FAQ's"].map((tab, idx) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`h-8 border border-line px-3 ${
                    activeTab === tab ? 'bg-[#dcdcdc] text-ink' : 'bg-[#f3f3f3] text-muted'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'Specifications' ? (
              <>
                <div className="mt-5 space-y-4 text-[11px] leading-5 text-muted md:text-[12px]">
                  <div className="grid grid-cols-[120px_1fr] gap-2 border-b border-line pb-3"><p className="font-semibold text-ink">PET</p><p>Dog</p></div>
                  <div className="grid grid-cols-[120px_1fr] gap-2 border-b border-line pb-3"><p className="font-semibold text-ink">LIFE STAGE</p><p>Adult</p></div>
                  <div className="grid grid-cols-[120px_1fr] gap-2 border-b border-line pb-3"><p className="font-semibold text-ink">BENEFITS</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p></div>
                  <div className="grid grid-cols-[120px_1fr] gap-2 border-b border-line pb-3"><p className="font-semibold text-ink">FEEDING GUIDE</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p></div>
                  <div className="grid grid-cols-[120px_1fr] gap-2"><p className="font-semibold text-ink">FOOD TYPE</p><p>Dry</p></div>
                </div>
                <div className="mt-8 border-t border-line pt-6 text-[11px] leading-5 text-muted md:text-[12px]">
                  <h3 className="text-[12px] font-semibold uppercase tracking-wide text-ink">Offer Details</h3>
                  <p className="mt-3">
                    Lorem ipsum is a dummy stream made from a specimen and measured by industry. Lorem
                    ipsum has been the industry's standard text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <p className="mt-3">
                    It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularized in the 1960s with
                    the release of Letraset sheets containing lorem ipsum passages.
                  </p>
                </div>
              </>
            ) : null}

            {activeTab === 'Descriptions' ? (
              <div className="mt-6 text-[12px] leading-6 text-muted md:text-[13px]">
                <p>
                  {product.description}
                </p>
                <p className="mt-3">
                  Pro - Large exceptional bouquet composed of a selection of David Austin roses,
                  known for their beauty and subtle fragrance.
                </p>
              </div>
            ) : null}

            {activeTab === 'Product Info' ? (
              <div className="mt-6 text-[12px] leading-6 text-muted md:text-[13px]">
                <p><span className="font-semibold text-ink">SKU:</span> {product.sku}</p>
                <p className="mt-2"><span className="font-semibold text-ink">Category:</span> {product.category}</p>
                <p className="mt-2"><span className="font-semibold text-ink">Base Price:</span> ${product.price.toFixed(2)}</p>
              </div>
            ) : null}

            {activeTab === 'Customer feedback' ? (
              <div className="mt-6 text-[12px] leading-6 text-muted md:text-[13px]">
                <p>4.8 / 5 average rating from verified buyers.</p>
                <p className="mt-2">“Great quality and fast delivery.”</p>
                <p className="mt-2">“My pet loved it, will buy again.”</p>
              </div>
            ) : null}

            {activeTab === "FAQ's" ? (
              <div className="mt-6 text-[12px] leading-6 text-muted md:text-[13px]">
                <p><span className="font-semibold text-ink">Q:</span> Is this product suitable for adult pets?</p>
                <p><span className="font-semibold text-ink">A:</span> Yes, it is formulated for adult pets.</p>
                <p className="mt-3"><span className="font-semibold text-ink">Q:</span> How long is shipping?</p>
                <p><span className="font-semibold text-ink">A:</span> Standard shipping takes 2-5 business days.</p>
              </div>
            ) : null}
          </section>

          <section className="mt-8">
            <h2 className="text-center text-[28px] font-semibold text-ink md:text-[40px]">You may also like...</h2>
            <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
              {related.map((r, i) => (
                <RelatedCard key={i} image={r.image} sale={r.sale} to={`/product-details/${slug || 'rosy-delight'}`} />
              ))}
            </div>
          </section>
        </div>
      </section>

      <MailingList />
    </>
  );
}
