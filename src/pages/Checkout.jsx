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
                <span>Premium Salmon Bites x1</span>
                <span className="text-ink">$24.00</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Shipping</span>
                <span className="text-ink">$6.00</span>
              </li>
            </ul>
            <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
              <span className="text-[14px] font-semibold text-ink">Total</span>
              <span className="text-[22px] font-semibold text-ink">$30.00</span>
            </div>
            <button
              type="button"
              className="mt-6 h-11 w-full rounded-lg bg-ink text-[14px] font-semibold text-white transition hover:bg-ink/90"
            >
              Place order
            </button>
          </aside>
        </div>
      </section>
    </>
  );
}
