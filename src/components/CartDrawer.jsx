import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const OPEN_EVENT = 'pet:cart-open';
const ADD_EVENT = 'pet:add-to-cart';

function normalizePayload(payload = {}) {
  return {
    id: payload.id || `${payload.title || 'item'}-${Date.now()}`,
    title: payload.title || 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    image: payload.image || '/fluffy-dog-sitting-blue-home-workout-instruments-with-several-dumbbells-around.png',
    price: Number(payload.price || 100),
    qty: Math.max(1, Number(payload.qty || 1)),
  };
}

export function CartDrawer() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    function onOpen() {
      setOpen(true);
    }

    function onAdd(e) {
      const item = normalizePayload(e.detail || {});
      setItems((prev) => {
        const idx = prev.findIndex((p) => p.id === item.id || p.title === item.title);
        if (idx === -1) return [...prev, item];
        return prev.map((p, i) => (i === idx ? { ...p, qty: p.qty + item.qty } : p));
      });
      setOpen(true);
    }

    window.addEventListener(OPEN_EVENT, onOpen);
    window.addEventListener(ADD_EVENT, onAdd);
    return () => {
      window.removeEventListener(OPEN_EVENT, onOpen);
      window.removeEventListener(ADD_EVENT, onAdd);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90]">
      <button
        type="button"
        aria-label="Close cart"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/45"
      />

      <aside className="absolute right-0 top-0 flex h-full w-full max-w-[430px] flex-col bg-[#ececef] shadow-2xl">
        <div className="flex h-14 items-center justify-between border-b border-[#b8b8b8] px-4">
          <p className="text-[12px] font-semibold text-ink">Shopping Cart</p>
          <button type="button" onClick={() => setOpen(false)} className="text-[18px] text-ink">
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3">
          {items.length === 0 ? (
            <p className="py-6 text-[13px] text-muted">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <article key={item.id} className="flex items-start gap-3 border-b border-line py-3">
                <img src={item.image} alt={item.title} className="h-[56px] w-[56px] border border-line object-cover" />
                <div className="min-w-0 flex-1">
                  <h3 className="line-clamp-2 text-[13px] font-semibold leading-[1.25] text-ink">{item.title}</h3>
                  <div className="mt-2 flex items-center gap-2 text-[11px] text-muted">
                    <button type="button" onClick={() => changeQty(item.id, -1)} className="h-5 w-5 border border-line">-</button>
                    <span>{item.qty}</span>
                    <button type="button" onClick={() => changeQty(item.id, 1)} className="h-5 w-5 border border-line">+</button>
                    <span className="text-ink">${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <button type="button" onClick={() => removeItem(item.id)} className="text-[12px] text-muted">×</button>
              </article>
            ))
          )}
        </div>

        <div className="border-t border-[#b8b8b8] px-3 py-3">
          <div className="mb-2 flex items-center justify-between text-[12px] text-ink">
            <span>{items.length} Product</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Link to="/checkout" className="mb-2 inline-flex h-10 w-full items-center justify-center bg-ink text-[12px] font-semibold text-white" onClick={() => setOpen(false)}>
            CHECK OUT
          </Link>
          <button type="button" className="h-10 w-full border border-line bg-white text-[12px] font-semibold text-ink" onClick={() => setOpen(false)}>
            CONTINUE SHOPPING
          </button>
        </div>
      </aside>
    </div>
  );
}

export function openCartDrawer() {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
}

export function addToCartAndOpen(payload) {
  window.dispatchEvent(new CustomEvent(ADD_EVENT, { detail: payload }));
}
