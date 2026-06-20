import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPage } from '../api.js';
import { SeoHead } from '../components/SeoHead.jsx';
import { pageSeo } from '../hooks/useManagedPage.js';

const tabs = [
  { label: 'Shipping', to: '/shipping' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Returns', to: '/returns' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
];

export function InfoPageLayout({ title, intro, sections, active, pageKey }) {
  const [managedPage, setManagedPage] = useState(null);

  useEffect(() => {
    let mounted = true;

    if (!pageKey) {
      return undefined;
    }

    fetchPage(pageKey)
      .then((page) => {
        if (mounted) setManagedPage(page);
      })
      .catch(() => {
        if (mounted) setManagedPage(null);
      });

    return () => {
      mounted = false;
    };
  }, [pageKey]);

  const pageTitle = managedPage?.title || title;
  const pageIntro = managedPage?.intro || intro;
  const pageSections = managedPage?.sections?.length ? managedPage.sections : sections;
  const seo = pageSeo(managedPage, {
    title: `${pageTitle} | Pet Square`,
    description: pageIntro,
    canonical: pageKey ? `/${pageKey}` : '',
  });

  return (
    <>
      <SeoHead {...seo} />
      <section className="bg-surface py-8 md:py-12">
        <div className="pet-page-shell">
          <div className="grid gap-6 md:grid-cols-[300px,1fr]">
            <aside className="pet-card p-5 md:p-6">
              <h2 className="text-[34px] font-semibold leading-tight tracking-tight text-ink md:text-[38px]">Information</h2>
              <nav className="mt-6 space-y-2">
                {tabs.map((tab) => {
                  const isActive = tab.label === active;
                  return (
                    <Link
                      key={tab.label}
                      to={tab.to}
                      className={[
                        'block rounded-lg px-4 py-3 text-[16px] font-medium transition',
                        isActive ? 'bg-ink text-white' : 'text-muted hover:bg-surface hover:text-ink',
                      ].join(' ')}
                    >
                      {tab.label}
                    </Link>
                  );
                })}
              </nav>
            </aside>

            <article className="pet-card p-6 md:p-8">
              <h1 className="text-[32px] font-semibold leading-tight tracking-tight text-ink md:text-[40px]">{pageTitle}</h1>
              <p className="mt-3 max-w-[760px] text-[14px] leading-7 text-muted md:text-[15px]">{pageIntro}</p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {pageSections.map((s) => (
                  <section key={s.heading} className="rounded-xl border border-line bg-surface p-5">
                    <h3 className="text-[18px] font-semibold text-ink">{s.heading}</h3>
                    <p className="mt-2 text-[14px] leading-7 text-muted">{s.body}</p>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
