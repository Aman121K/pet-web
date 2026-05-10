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
      <section className="border-b border-line bg-[#f4f4f4]">
        <div className="mx-auto max-w-[1200px] px-4 py-2 text-[10px] text-muted">Home &gt; Shopping cart</div>
      </section>

      <section className="bg-[#efefef] py-7">
        <div className="mx-auto max-w-[1200px] px-4">
          <h1 className="text-center text-[42px] font-semibold text-ink md:text-[50px]">My Shopping Cart</h1>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_320px]">
            <div className="border border-line bg-white p-4">
              <div className="grid grid-cols-[1.2fr_90px_120px_90px_24px] border-b border-line pb-2 text-[10px] uppercase text-muted">
                <span>Product</span><span>Price</span><span>Quantity</span><span>Subtotal</span><span />
              </div>

              {rows.map((row) => (
                <div key={row.id} className="grid grid-cols-[1.2fr_90px_120px_90px_24px] items-center border-b border-line py-3">
                  <div className="flex items-start gap-2">
                    <img src={row.image} alt={row.title} className="h-14 w-14 border border-line object-cover" />
                    <p className="text-[11px] leading-[1.3] text-ink">{row.title}</p>
                  </div>
                  <p className="text-[12px] text-ink">${row.price.toFixed(2)}</p>
                  <div className="inline-flex h-7 items-center border border-line">
                    <button type="button" className="h-full w-7 text-[12px]">-</button>
                    <span className="inline-flex h-full w-7 items-center justify-center text-[11px]">{row.qty}</span>
                    <button type="button" className="h-full w-7 text-[12px]">+</button>
                  </div>
                  <p className="text-[12px] font-semibold text-ink">${(row.price * row.qty).toFixed(2)}</p>
                  <button type="button" className="text-[12px] text-[#b8b8b8]">×</button>
                </div>
              ))}

              <div className="mt-3 flex flex-wrap gap-2">
                <Link to="/shop" className="inline-flex h-9 items-center bg-[#e8e8e8] px-4 text-[11px] font-semibold text-ink">RETURN TO SHOP</Link>
                <button type="button" className="ml-auto h-9 bg-ink px-4 text-[11px] font-semibold text-white">UPDATE CART</button>
              </div>

              <div className="mt-4 grid grid-cols-[1fr_180px] gap-2 border border-line p-2">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-semibold text-ink">Coupon Code</span>
                  <input placeholder="Enter code" className="h-8 flex-1 border border-line px-2 text-[11px]" />
                </div>
                <button type="button" className="h-8 bg-ink text-[11px] font-semibold text-white">APPLY COUPON</button>
              </div>
            </div>

            <aside className="h-fit border border-line bg-white p-4">
              <h2 className="text-[28px] font-semibold text-ink">Cart Total</h2>
              <div className="mt-3 space-y-2 text-[12px] text-muted">
                <div className="flex items-center justify-between"><span>Subtotal:</span><span className="text-ink">${subtotal.toFixed(2)}</span></div>
                <div className="flex items-center justify-between"><span>Shipping:</span><span className="text-ink">Free</span></div>
                <div className="flex items-center justify-between border-t border-line pt-2 text-[14px] font-semibold text-ink"><span>Total:</span><span>${subtotal.toFixed(2)}</span></div>
              </div>
              <Link to="/checkout" className="mt-4 inline-flex h-10 w-full items-center justify-center bg-ink text-[11px] font-semibold text-white">
                PROCEED TO CHECKOUT
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <MailingList />
    </>
  );
}
