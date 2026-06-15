import { Link } from 'react-router-dom';
import { MailingList } from '../components/home/MailingList.jsx';
import product1 from '../assets/pets/product-1.jpg';
import product2 from '../assets/pets/product-2.jpg';

const rows = [
  { id: 1, image: product1, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', price: 14, qty: 5 },
  { id: 2, image: product2, title: 'Platinum Open Victorian Top with Plastic Base Bird Cage', price: 14, qty: 5 },
];

export function ShoppingCart() {
  const subtotal = rows.reduce((sum, r) => sum + r.price * r.qty, 0);

  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="pet-page-shell py-2 text-[12px] text-muted">Home / Shopping cart</div>
      </section>

      <section className="bg-surface py-6 md:py-8">
        <div className="pet-page-shell">
          <h1 className="text-center text-[40px] font-semibold tracking-tight text-ink md:text-[48px]">My Shopping Cart</h1>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_340px]">
            <div className="pet-card p-4 md:p-5">
              <div className="hidden grid-cols-[1.2fr_90px_120px_90px_24px] border-b border-line pb-2 text-[11px] uppercase tracking-wide text-muted md:grid">
                <span>Product</span><span>Price</span><span>Quantity</span><span>Subtotal</span><span />
              </div>

              {rows.map((row) => (
                <div key={row.id} className="grid gap-3 border-b border-line py-4 md:grid-cols-[1.2fr_90px_120px_90px_24px] md:items-center">
                  <div className="flex items-start gap-3">
                    <img src={row.image} alt={row.title} className="h-16 w-16 rounded-lg border border-line object-cover" />
                    <p className="text-[13px] leading-[1.4] text-ink">{row.title}</p>
                  </div>
                  <p className="text-[13px] text-ink">${row.price.toFixed(2)}</p>
                  <div className="inline-flex h-9 w-fit items-center rounded-lg border border-line bg-white">
                    <button type="button" className="h-full w-8 text-[13px]">-</button>
                    <span className="inline-flex h-full w-8 items-center justify-center text-[12px]">{row.qty}</span>
                    <button type="button" className="h-full w-8 text-[13px]">+</button>
                  </div>
                  <p className="text-[13px] font-semibold text-ink">${(row.price * row.qty).toFixed(2)}</p>
                  <button type="button" className="text-[15px] text-muted">×</button>
                </div>
              ))}

              <div className="mt-4 flex flex-wrap gap-2">
                <Link to="/shop" className="pet-btn-secondary">Return to shop</Link>
                <button type="button" className="pet-btn-primary ml-auto">Update cart</button>
              </div>

              <div className="mt-4 grid gap-2 rounded-xl border border-line p-3 md:grid-cols-[1fr_190px]">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-medium text-ink">Coupon code</span>
                  <input placeholder="Enter code" className="h-10 flex-1 rounded-lg border border-line px-3 text-[13px]" />
                </div>
                <button type="button" className="pet-btn-primary h-10">Apply coupon</button>
              </div>
            </div>

            <aside className="pet-card h-fit p-5">
              <h2 className="text-[30px] font-semibold tracking-tight text-ink">Cart Total</h2>
              <div className="mt-4 space-y-3 text-[13px] text-muted">
                <div className="flex items-center justify-between"><span>Subtotal:</span><span className="text-ink">${subtotal.toFixed(2)}</span></div>
                <div className="flex items-center justify-between"><span>Shipping:</span><span className="text-ink">Free</span></div>
                <div className="flex items-center justify-between border-t border-line pt-3 text-[15px] font-semibold text-ink"><span>Total:</span><span>${subtotal.toFixed(2)}</span></div>
              </div>
              <Link to="/checkout" className="pet-btn-primary mt-5 inline-flex h-11 w-full items-center justify-center">Proceed to checkout</Link>
            </aside>
          </div>
        </div>
      </section>

      <MailingList />
    </>
  );
}
