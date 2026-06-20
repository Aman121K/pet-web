import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead.jsx';

function Field({ label, placeholder }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[12px] font-semibold text-ink">{label}</span>
      <input
        placeholder={placeholder}
        className="h-10 w-full border border-line bg-white px-3 text-[12px] outline-none placeholder:text-[#9a9a9a]"
      />
    </label>
  );
}

export function CheckoutPayment() {
  return (
    <>
      <SeoHead
        title="Payment | Pet Square Checkout"
        description="Enter payment information to complete your Pet Square checkout."
        canonical="/checkout/payment"
        robots="noindex,follow"
      />
      <section className="bg-[#efefef] py-6 md:py-10">
        <div className="mx-auto max-w-[900px] border border-line bg-white p-4 md:p-6">
        <h1 className="text-[18px] font-semibold text-ink">Payment information</h1>
        <p className="mt-1 text-[12px] text-muted">Step 2 of 3</p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="sm:col-span-2"><Field label="Cardholder Name" placeholder="Sakshi Agrawal" /></div>
          <div className="sm:col-span-2"><Field label="Card Number" placeholder="1234 5678 9012 3456" /></div>
          <Field label="Expiry" placeholder="MM/YY" />
          <Field label="CVV" placeholder="123" />
          <div className="sm:col-span-2"><Field label="Billing Address" placeholder="123 Pet Street, Petville" /></div>
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Link to="/checkout" className="inline-flex h-10 items-center justify-center border border-line px-6 text-[11px] font-semibold text-ink">
            BACK
          </Link>
          <Link to="/order-confirmation" className="inline-flex h-10 items-center justify-center bg-ink px-6 text-[11px] font-semibold text-white">
            PAY NOW
          </Link>
        </div>
        </div>
      </section>
    </>
  );
}
