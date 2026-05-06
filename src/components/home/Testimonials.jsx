import { SectionShell } from './SectionShell.jsx';

const rows = [
  {
    name: 'Exceptional',
    text: 'Fast shipping and great quality. The packaging was neat and the product matched exactly.',
    stars: 5,
  },
  {
    name: 'Great service',
    text: 'Customer support was responsive and helpful. Delivery was on time and hassle-free.',
    stars: 5,
  },
];

function Stars({ n }) {
  return (
    <div className="flex gap-0.5 text-[#16a34a]">
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} className="text-[12px]">
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <SectionShell className="bg-white py-12">
      <div className="text-center">
        <h2 className="text-[14px] font-semibold text-ink">What are customers saying?</h2>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {rows.map((r) => (
          <div key={r.name} className="border border-line bg-white p-5">
            <Stars n={r.stars} />
            <p className="mt-3 text-[13px] font-semibold text-ink">{r.name}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{r.text}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

