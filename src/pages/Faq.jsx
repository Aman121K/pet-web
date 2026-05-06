import { FeatureBar } from '../components/FeatureBar.jsx';

const items = [
  {
    q: 'How fast is delivery?',
    a: 'Many orders qualify for next-day delivery in supported regions. You will see an estimate at checkout.',
  },
  {
    q: 'Can I return an item?',
    a: 'Yes — we offer worry-free returns on eligible products within the policy window.',
  },
];

export function Faq() {
  return (
    <>
      <FeatureBar />
      <section className="mx-auto max-w-[800px] px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-[30px] font-semibold tracking-tight text-ink">FAQ</h1>
        <dl className="mt-8 space-y-6">
          {items.map((row) => (
            <div key={row.q} className="rounded-lg border border-line bg-white p-5">
              <dt className="text-[16px] font-semibold text-ink">{row.q}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-muted">{row.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
