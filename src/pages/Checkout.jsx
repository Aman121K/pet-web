import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchFaqs } from '../api.js';
import product1 from '../assets/pets/product-1.jpg';

const checkoutFaqs = [
  {
    question: 'When will my order be delivered?',
    answer: 'Standard delivery is calculated at checkout after your address is entered. Most orders show the delivery estimate before payment.',
  },
  {
    question: 'Can I change items after checkout?',
    answer: 'If the order has not been packed yet, contact support as soon as possible and we will help update the order.',
  },
  {
    question: 'Are payments secure?',
    answer: 'Yes. Payment details are handled through secure checkout fields and are not stored on this website.',
  },
  {
    question: 'How do returns work?',
    answer: 'Eligible unused items can be returned within the return window. Perishable and hygiene-sensitive products may have restrictions.',
  },
];

function Field({ label, placeholder, type = 'text' }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[12px] font-semibold uppercase tracking-wide text-muted">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-line bg-white px-3 text-[13px] outline-none placeholder:text-muted"
      />
    </label>
  );
}

function CheckoutFaq() {
  const [items, setItems] = useState(checkoutFaqs);

  useEffect(() => {
    fetchFaqs('checkout')
      .then((rows) => {
        if (Array.isArray(rows) && rows.length > 0) {
          setItems(rows.map((row) => ({ question: row.question, answer: row.answer })));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="mt-6 border border-line bg-white p-4 sm:p-6 lg:p-7">
      <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#29748a]">Checkout FAQ</p>
          <h2 className="mt-2 text-[24px] font-semibold leading-tight text-ink md:text-[30px]">
            Questions before you pay
          </h2>
          <p className="mt-3 text-[14px] leading-6 text-muted">
            Delivery, returns, and payment answers for a smoother checkout.
          </p>
        </div>
        <div className="divide-y divide-line border border-line">
          {items.map((item) => (
            <details key={item.question} className="group p-4 open:bg-[#fffafa]">
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

export function Checkout() {
  return (
    <section className="bg-surface py-6 md:py-10">
      <div className="pet-page-shell">
        <div className="overflow-hidden rounded-none border border-line bg-white lg:grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-line p-5 md:p-7 lg:border-b-0 lg:border-r">
            <div className="rounded-none border border-line bg-surface px-4 py-4 text-[13px] text-muted">
              Already have an account? <Link to="/login" className="font-medium text-ink underline">Log in</Link> for faster checkout
            </div>

            <div className="mt-5">
              <h1 className="text-[16px] font-semibold tracking-tight text-ink">1. Contact information</h1>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Field label="First Name" placeholder="Sakshi" />
                <Field label="Last Name" placeholder="Agrawal" />
                <div className="sm:col-span-2"><Field label="Email" placeholder="petsquare@gmail.com" type="email" /></div>
                <Field label="Phone" placeholder="+1 900-000-000" />
                <Field label="ZIP" placeholder="10001" />
                <div className="sm:col-span-2"><Field label="Address" placeholder="123 Pet Street, Petville" /></div>
              </div>

              <Link to="/checkout/payment" className="pet-btn-primary mt-5 inline-flex h-11 w-full items-center justify-center">
                Continue to payment
              </Link>
            </div>

            <div className="mt-5 space-y-3 text-[13px] text-muted">
              <p className="border-t border-line pt-3">2. Shipping details</p>
              <p className="border-t border-line pt-3">3. Payment</p>
            </div>
          </div>

          <aside className="p-5 md:p-7">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">Order Summary</h2>
            <div className="mt-3 border-b border-line pb-4">
              <article className="flex items-start gap-3">
                <img src={product1} alt="Snowfall" className="h-[94px] w-[94px] rounded-lg border border-line object-cover" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-[20px] font-semibold leading-[1.1] tracking-tight text-ink">Snowfall</h3>
                  <p className="mt-1 text-[12px] text-muted">Quantity (1)</p>
                  <p className="mt-2 text-[18px] font-semibold text-ink">$100.00</p>
                </div>
              </article>
            </div>

            <div className="mt-4 space-y-3 text-[13px] text-muted">
              <div className="flex items-center justify-between"><span>Subtotal</span><span className="text-ink">$100.00</span></div>
              <div className="flex items-center justify-between"><span>Shipping</span><span className="text-ink">Calculated at next step</span></div>
              <div className="flex items-center justify-between border-t border-line pt-3 text-[15px] font-semibold text-ink"><span>Total</span><span>$100.00</span></div>
            </div>
          </aside>
        </div>

        <CheckoutFaq />
      </div>
    </section>
  );
}
