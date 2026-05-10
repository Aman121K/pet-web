import { FeatureBar } from '../components/FeatureBar.jsx';

const items = [
  {
    q: 'How fast is delivery?',
    a: 'Many orders qualify for next-day delivery in supported regions. Delivery estimate appears at checkout based on your PIN code.',
  },
  {
    q: 'Can I return an item?',
    a: 'Yes. Eligible products can be returned in the policy window. You can initiate returns from your account or by contacting support.',
  },
  {
    q: 'How do I track my order?',
    a: 'As soon as your order ships, we send tracking details by email. You can also view live status in your account dashboard.',
  },
  {
    q: 'Do you verify product quality?',
    a: 'All listed products go through supplier verification and quality checks. We prioritize transparent ingredients and trusted brands.',
  },
];

export function Faq() {
  return (
    <>
      <FeatureBar />
      <section className="bg-[#F5F5F5]">
        <div className="mx-auto max-w-[980px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <header className="text-center">
            <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-semibold tracking-tight text-ink">
              Frequently asked questions
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-[14px] leading-7 text-muted sm:text-[15px]">
              Everything you need to know about delivery, returns, product quality, and account support.
            </p>
          </header>

          <dl className="mt-10 space-y-4 sm:mt-12">
            {items.map((row) => (
              <div
                key={row.q}
                className="rounded-sm border border-line bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.03)] sm:p-6"
              >
                <dt className="text-[18px] font-semibold leading-tight tracking-tight text-ink">{row.q}</dt>
                <dd className="mt-3 text-[14px] leading-7 text-muted sm:text-[15px]">{row.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
