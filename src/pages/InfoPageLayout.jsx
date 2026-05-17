import { Link } from 'react-router-dom';

const tabs = [
  { label: 'Shipping', to: '/shipping' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Returns', to: '/returns' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
];

export function InfoPageLayout({ title, intro, sections, active }) {
  return (
    <section className="bg-[#f1f1f1] py-8 md:py-12">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid gap-6 md:grid-cols-[280px,1fr]">
          <aside className="rounded-xl border border-line bg-white p-5 md:p-6">
            <h2 className="text-[34px] font-semibold leading-tight text-ink md:text-[38px]">Information</h2>
            <nav className="mt-6 space-y-2">
              {tabs.map((tab) => {
                const isActive = tab.label === active;
                return (
                  <Link
                    key={tab.label}
                    to={tab.to}
                    className={[
                      'block rounded-lg px-4 py-3 text-[20px] transition',
                      isActive ? 'bg-ink text-white' : 'text-muted hover:bg-surface hover:text-ink',
                    ].join(' ')}
                  >
                    {tab.label}
                  </Link>
                );
              })}
            </nav>
          </aside>

          <article className="rounded-xl border border-line bg-white p-6 md:p-8">
            <h1 className="text-[32px] font-semibold leading-tight text-ink md:text-[40px]">{title}</h1>
            <p className="mt-3 max-w-[760px] text-[14px] leading-7 text-muted md:text-[15px]">{intro}</p>

            <div className="mt-8 space-y-7">
              {sections.map((s) => (
                <section key={s.heading} className="rounded-lg border border-line bg-surface/40 p-5">
                  <h3 className="text-[18px] font-semibold text-ink">{s.heading}</h3>
                  <p className="mt-2 text-[14px] leading-7 text-muted">{s.body}</p>
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
