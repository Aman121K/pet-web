import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import product1 from '../assets/pets/product-1.jpg';
import product2 from '../assets/pets/product-2.jpg';

const initialItems = [
  {
    id: 1,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    price: 100,
    qty: 5,
    image: product1,
  },
  {
    id: 2,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    price: 100,
    qty: 5,
    image: product2,
  },
];

function QtyControl({ qty, onDec, onInc }) {
  return (
    <div className="inline-flex h-6 items-center border border-line bg-white">
      <button type="button" onClick={onDec} className="h-full w-6 text-[12px] text-muted">-</button>
      <span className="inline-flex h-full min-w-[22px] items-center justify-center text-[11px] text-ink">{qty}</span>
      <button type="button" onClick={onInc} className="h-full w-6 text-[12px] text-ink">+</button>
    </div>
  );
}

function CartRow({ item, compact = false, onRemove, onDec, onInc }) {
  return (
    <article className={`flex items-start gap-3 border-b border-line ${compact ? 'py-3' : 'py-4'}`}>
      <img src={item.image} alt={item.title} className={`${compact ? 'h-[56px] w-[56px]' : 'h-[96px] w-[96px]'} border border-line object-cover`} />
      <div className="min-w-0 flex-1">
        <h3 className={`${compact ? 'text-[13px]' : 'text-[20px]'} line-clamp-2 font-semibold leading-[1.2] text-ink`}>
          {item.title}
        </h3>
        <div className={`mt-2 flex items-center gap-2 ${compact ? 'text-[11px]' : 'text-[13px]'} text-muted`}>
          <span>Quantity ({item.qty})</span>
          <QtyControl qty={item.qty} onDec={onDec} onInc={onInc} />
          <span className="text-ink">${item.price.toFixed(0)}</span>
        </div>
      </div>
      <button type="button" onClick={onRemove} className={`${compact ? 'text-[11px]' : 'text-[12px]'} text-muted hover:text-ink`}>
        {compact ? '×' : 'Remove'}
      </button>
    </article>
  );
}

export function Checkout() {
  const [items, setItems] = useState(initialItems);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.qty, 0),
    [items]
  );

  function changeQty(id, delta) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <section className="min-h-[calc(100vh-125px)] bg-[#454545] p-4 md:p-8">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-[34px] font-medium text-[#b7b7b7] md:text-[48px]">Shopping Cart</h1>

        <div className="mt-4 grid min-h-[680px] overflow-hidden bg-[#6f6f6f] md:grid-cols-[1fr_610px]">
          <div className="hidden md:block" />

          <aside className="flex h-full flex-col bg-[#ececef]">
            <div className="flex h-14 items-center justify-between border-b border-[#b8b8b8] px-4">
              <p className="text-[12px] font-semibold text-ink">Shopping Cart</p>
              <button type="button" className="text-[18px] text-ink">×</button>
            </div>

            <div className="hidden border-b border-[#b8b8b8] px-4 md:block">
              {items.slice(0, 1).map((item) => (
                <CartRow
                  key={item.id}
                  item={item}
                  onRemove={() => removeItem(item.id)}
                  onDec={() => changeQty(item.id, -1)}
                  onInc={() => changeQty(item.id, 1)}
                />
              ))}
            </div>

            <div className="hidden border-b border-[#b8b8b8] px-4 py-3 md:flex md:items-center md:justify-between">
              <span className="text-[30px] text-ink">Subtotal</span>
              <span className="text-[30px] font-semibold text-ink">${subtotal.toFixed(2)}</span>
            </div>

            <div className="hidden h-[120px] border-b border-[#b8b8b8] px-4 py-4 md:block">
              <p className="text-[22px] text-[#a4a4a4]">Gift Message</p>
            </div>

            <div className="hidden flex-1 items-end justify-center px-4 pb-6 text-center md:flex">
              <p className="text-[11px] text-muted">
                Shipping &amp; taxes calculated at checkout
                <br />
                Free standard shipping within Kyiv
              </p>
            </div>

            <button type="button" className="hidden h-12 bg-ink text-[12px] font-semibold tracking-wide text-white md:block">
              CHECK OUT
            </button>

            <div className="flex flex-1 flex-col px-3 pb-3 md:hidden">
              <div className="flex-1 overflow-y-auto">
                {items.map((item) => (
                  <CartRow
                    key={item.id}
                    compact
                    item={item}
                    onRemove={() => removeItem(item.id)}
                    onDec={() => changeQty(item.id, -1)}
                    onInc={() => changeQty(item.id, 1)}
                  />
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between text-[12px] text-ink">
                <span>{items.length} Product</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <button type="button" className="mt-2 h-10 bg-ink text-[12px] font-semibold text-white">
                CHECK OUT
              </button>

              <Link
                to="/shop"
                className="mt-2 inline-flex h-10 items-center justify-center border border-line bg-white text-[12px] font-semibold text-ink"
              >
                GO TO CART
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
