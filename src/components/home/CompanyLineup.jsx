import { SectionShell } from './SectionShell.jsx';

function Item({ title, subtitle }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 rounded-full border border-line bg-white" />
      <div>
        <p className="text-[13px] font-semibold text-ink">{title}</p>
        <p className="mt-0.5 text-[12px] text-muted">{subtitle}</p>
      </div>
    </div>
  );
}

export function CompanyLineup() {
  return (
    <SectionShell className="bg-white py-7">
      <div className="grid gap-6 sm:grid-cols-3">
        <Item title="Safe & Secure Shopping" subtitle="Your best choice" />
        <div className="hidden sm:block" />
        <Item title="Next day Delivery" subtitle="Worry free returns" />
        <div className="hidden sm:block" />
        <Item title="100% verified CBD" subtitle="5 stars reviews products" />
      </div>
    </SectionShell>
  );
}

