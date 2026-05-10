import { Link } from 'react-router-dom';
import product1 from '../assets/pets/product-1.jpg';

function Field({ label, placeholder, type = 'text' }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[12px] font-semibold text-ink">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-10 w-full border border-line bg-white px-3 text-[12px] outline-none placeholder:text-[#9a9a9a]"
      />
    </label>
  );
}

export function Checkout() {
  return (
    <section className="bg-[#efefef] py-6 md:py-10">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid border border-line bg-white lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-line p-4 md:p-6 lg:border-b-0 lg:border-r">
            <div className="bg-[#e7e7eb] px-4 py-5 text-[12px] text-muted">
              Already have an account? <Link to="/login" className="text-ink underline">Log in</Link> for faster checkout
            </div>

            <div className="mt-4">
              <h1 className="text-[14px] font-semibold text-ink">1 Contact information</h1>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <Field label="First Name" placeholder="Sakshi" />
                <Field label="Last Name" placeholder="Agrawal" />
                <div className="sm:col-span-2"><Field label="Email" placeholder="petsquare@gmail.com" type="email" /></div>
                <Field label="Phone" placeholder="+1 900-000-000" />
                <Field label="ZIP" placeholder="10001" />
                <div className="sm:col-span-2"><Field label="Address" placeholder="123 Pet Street, Petville" /></div>
              </div>

              <Link to="/checkout/payment" className="mt-4 inline-flex h-10 w-full items-center justify-center bg-ink text-[11px] font-semibold tracking-wide text-white">
                CONTINUE TO PAYMENT
              </Link>
            </div>

            <div className="mt-4 space-y-3">
              <p className="border-t border-line pt-3 text-[13px] text-[#b1b1b1]">2 Shipping details</p>
              <p className="border-t border-line pt-3 text-[13px] text-[#b1b1b1]">3 Payment</p>
            </div>
          </div>

          <aside className="p-4 md:p-6">
            <h2 className="text-[11px] font-semibold uppercase tracking-wide text-ink">Order Summary</h2>
            <div className="mt-3 border-b border-line pb-4">
              <article className="flex items-start gap-3">
                <img src={product1} alt="Snowfall" className="h-[94px] w-[94px] border border-line object-cover" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-[18px] font-semibold leading-[1.1] text-ink">Snowfall</h3>
                  <p className="mt-1 text-[11px] text-muted">Quantity (1)</p>
                  <p className="mt-1 text-[18px] font-semibold text-ink">$100</p>
                </div>
              </article>
            </div>

            <div className="mt-4 space-y-2 text-[12px] text-muted">
              <div className="flex items-center justify-between"><span>Subtotal</span><span className="text-ink">$100.00</span></div>
              <div className="flex items-center justify-between"><span>Shipping</span><span className="text-ink">Calculated at next step</span></div>
              <div className="flex items-center justify-between border-t border-line pt-2 text-[14px] font-semibold text-ink"><span>Total</span><span>$100.00</span></div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
