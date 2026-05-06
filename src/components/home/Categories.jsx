import { SectionShell } from './SectionShell.jsx';

const cats = [
  { label: 'Food' },
  { label: 'Pets' },
  { label: 'Toys' },
  { label: 'Grooming' },
  { label: 'Accessories' },
];

export function Categories() {
  return (
    <SectionShell className="bg-white py-10">
      <div className="text-center">
        <h2 className="text-[14px] font-semibold text-ink">Product categories</h2>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-8">
        {cats.map((c) => (
          <div key={c.label} className="flex flex-col items-center gap-2">
            <div className="h-10 w-10 rounded-full border border-line bg-white" />
            <p className="text-[12px] font-semibold text-muted">{c.label}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

