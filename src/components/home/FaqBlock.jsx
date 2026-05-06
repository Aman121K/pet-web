import { useState } from 'react';
import { SectionShell } from './SectionShell.jsx';

const items = [
  {
    q: 'How many time it takes deliver from Pet square store?',
    a: 'Most orders are processed within 24 hours. Delivery time depends on your location and carrier availability.',
  },
  {
    q: 'Can I purchase from the Pet square by cheque online?',
    a: 'Currently we support standard online payments. Cheque payments are not available for online checkout.',
  },
  {
    q: 'How can I get a discount for my latest purchase?',
    a: 'Subscribe to our newsletter and use the discount code you receive. Seasonal promotions may also apply.',
  },
];

export function FaqBlock() {
  const [open, setOpen] = useState(0);

  return (
    <SectionShell className="bg-surface py-12">
      <div className="text-center">
        <h2 className="text-[16px] font-semibold text-ink">FAQ&apos;s</h2>
      </div>
      <div className="mx-auto mt-8 max-w-[720px] space-y-3">
        {items.map((it, idx) => {
          const isOpen = idx === open;
          return (
            <div key={it.q} className="border border-line bg-white">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : idx)}
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
              >
                <span className="text-[13px] font-semibold text-ink">{it.q}</span>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-line text-[12px] text-ink/70">
                  {isOpen ? '–' : '+'}
                </span>
              </button>
              {isOpen ? (
                <div className="px-4 pb-4 text-[13px] leading-relaxed text-muted">
                  {it.a}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}

