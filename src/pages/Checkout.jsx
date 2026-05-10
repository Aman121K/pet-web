import { useEffect, useState } from 'react';
import { createOrder, fetchProducts, getUserToken, validateDiscount } from '../api.js';
import { FeatureBar } from '../components/FeatureBar.jsx';

function Input({ id, label, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="text-[13px] font-semibold tracking-wide text-ink/80">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        className="mt-1 h-11 w-full rounded-lg border border-line px-3 text-[14px] outline-none focus:border-ink/25 focus:ring-2 focus:ring-ink/10"
      />
    </div>
  );
}

export function Checkout() {
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);

  useEffect(() => {
    fetchProducts()
      .then((rows) => setProduct(rows?.[0] || null))
      .catch(() => setProduct(null));
  }, []);

  async function onPlaceOrder() {
    if (!getUserToken()) {
      setStatus('Please login first to place order.');
      return;
    }
    if (!product?._id) {
      setStatus('No product available for checkout.');
      return;
    }
    try {
      const order = await createOrder({
        items: [{ productId: product._id, qty: 1 }],
        discountCode,
        shippingAddress: {
          name: 'Demo Customer',
          email: 'customer@example.com',
          line1: '123 Pet Street',
          city: 'San Francisco',
          zip: '94103',
          country: 'US',
        },
      });
      setStatus(`Order placed: ${order.orderNo}`);
    } catch (e) {
      setStatus(e.message);
    }
  }

  const price = Number(product?.price || 24);
  const shipping = price >= 100 ? 0 : 6;
  const taxable = Math.max(0, price - discountAmount);
  const tax = Number((taxable * 0.05).toFixed(2));
  const total = Number((taxable + shipping + tax).toFixed(2));

  async function onApplyDiscount() {
    setStatus('');
    try {
      const result = await validateDiscount(discountCode, price);
      setDiscountAmount(Number(result.discountAmount || 0));
      setStatus(`Discount applied: -$${Number(result.discountAmount || 0).toFixed(2)}`);
    } catch (e) {
      setDiscountAmount(0);
      setStatus(e.message);
    }
  }

  return (
    <>
      <FeatureBar />
      <section className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <h1 className="text-[30px] font-semibold tracking-tight text-ink">Checkout</h1>

        <div className="mt-7 grid gap-8 lg:grid-cols-[1.35fr,0.9fr]">
          <form className="space-y-6 rounded-2xl border border-line bg-white p-6 sm:p-8">
            <div>
              <h2 className="text-[18px] font-semibold text-ink">Shipping details</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Input id="fname" label="First name" placeholder="Ava" />
                <Input id="lname" label="Last name" placeholder="Johnson" />
                <div className="sm:col-span-2">
                  <Input id="address" label="Address" placeholder="123 Pet Street" />
                </div>
                <Input id="city" label="City" placeholder="San Francisco" />
                <Input id="zip" label="ZIP code" placeholder="94103" />
              </div>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold text-ink">Payment</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Input id="card" label="Card number" placeholder="1234 5678 9012 3456" />
                </div>
                <Input id="exp" label="Expiry" placeholder="MM/YY" />
                <Input id="cvv" label="CVV" placeholder="123" />
              </div>
            </div>
          </form>

          <aside className="h-fit rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h2 className="text-[18px] font-semibold text-ink">Order summary</h2>
            <ul className="mt-4 space-y-3 text-[14px] text-muted">
              <li className="flex items-center justify-between">
                <span>{product?.name || 'Premium Salmon Bites'} x1</span>
                <span className="text-ink">${price.toFixed(2)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Shipping</span>
                <span className="text-ink">${shipping.toFixed(2)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Discount</span>
                <span className="text-ink">-${discountAmount.toFixed(2)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Tax</span>
                <span className="text-ink">${tax.toFixed(2)}</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-2">
              <input
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value.toUpperCase())}
                placeholder="Discount code"
                className="h-10 flex-1 rounded-lg border border-line px-3 text-[13px]"
              />
              <button
                type="button"
                onClick={onApplyDiscount}
                className="h-10 rounded-lg border border-line bg-white px-4 text-[12px] font-semibold text-ink"
              >
                Apply
              </button>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
              <span className="text-[14px] font-semibold text-ink">Total</span>
              <span className="text-[22px] font-semibold text-ink">${total.toFixed(2)}</span>
            </div>
            <button
              type="button"
              onClick={onPlaceOrder}
              className="mt-6 h-11 w-full rounded-lg bg-ink text-[14px] font-semibold text-white transition hover:bg-ink/90"
            >
              Place order
            </button>
            {status ? <p className="mt-3 text-[13px] text-muted">{status}</p> : null}
          </aside>
        </div>
      </section>
    </>
  );
}
