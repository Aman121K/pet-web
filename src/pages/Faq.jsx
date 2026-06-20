import { FeatureBar } from '../components/FeatureBar.jsx';
import { useEffect, useState } from 'react';
import { fetchFaqs } from '../api.js';
import { SeoHead } from '../components/SeoHead.jsx';
import { pageSeo, useManagedPage } from '../hooks/useManagedPage.js';

const fallbackFaqs = [
  { q: 'Where do FAQs come from?', a: 'FAQs are managed from the Pages section in Medusa admin.' },
  { q: 'Can each page have different FAQs?', a: 'Yes. Checkout, category, blog, and other pages can each have their own FAQ set.' },
  { q: 'Can I edit FAQ SEO?', a: 'Yes. Edit the SEO object on the faq page in Medusa Pages.' },
  { q: 'How many FAQs should I add?', a: 'Use at least four to five useful FAQs for important pages.' },
  { q: 'Can FAQ content be updated without code?', a: 'Yes. Admin users can update FAQ content directly from Medusa.' },
];

export function Faq() {
  const [items, setItems] = useState(fallbackFaqs);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const page = useManagedPage('faq');
  const seo = pageSeo(page, {
    title: 'Pet Square FAQs | Delivery, Returns, Orders & Products',
    description: 'Find answers to common Pet Square questions about products, delivery, returns, checkout, and support.',
    canonical: '/faq',
  });

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const rows = await fetchFaqs();
        if (mounted) {
          const remote = (Array.isArray(rows) ? rows : []).map((row) => ({
              q: row.question || '',
              a: row.answer || '',
            }));
          const seen = new Set(remote.map((item) => item.q));
          setItems([...remote, ...fallbackFaqs.filter((item) => !seen.has(item.q))].slice(0, 8));
        }
      } catch (err) {
        if (mounted) setError(err.message || 'Failed to load FAQs');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <SeoHead {...seo} />
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

          {loading && <p className="mt-10 text-center text-muted">Loading FAQs...</p>}
          {!loading && error && <p className="mt-10 text-center text-red-600">{error}</p>}
          {!loading && !error && items.length === 0 && (
            <p className="mt-10 text-center text-muted">No FAQs available right now.</p>
          )}

          {!loading && !error && items.length > 0 && (
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
          )}
        </div>
      </section>
    </>
  );
}
