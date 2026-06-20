import { useEffect, useState } from 'react';
import { BrandLineup } from '../components/home/BrandLineup.jsx';
import { TopPicks } from '../components/home/TopPicks.jsx';
import { Categories } from '../components/home/Categories.jsx';
import { BestSelling } from '../components/home/BestSelling.jsx';
import { PetTiles } from '../components/home/PetTiles.jsx';
import { FaqBlock } from '../components/home/FaqBlock.jsx';
import { Testimonials } from '../components/home/Testimonials.jsx';
import { PopularBlogs } from '../components/home/PopularBlogs.jsx';
import { MailingList } from '../components/home/MailingList.jsx';
import { fetchBanners } from '../api.js';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead.jsx';
import { pageSeo, useManagedPage } from '../hooks/useManagedPage.js';

const heroImage =
  '/fluffy-dog-sitting-blue-home-workout-instruments-with-several-dumbbells-around.png';

export function Home() {
  const [banner, setBanner] = useState(null);
  const page = useManagedPage('home');
  const seo = pageSeo(page, {
    title: 'Pet Square | Pet Food, Toys, Care & Accessories',
    description: 'Shop food, care, toys, bedding, and accessories for every pet routine at Pet Square.',
    canonical: '/',
  });
  const sections = page?.sections?.length
    ? page.sections.slice(0, 4)
    : [
        { heading: 'Curated by Pet Type', body: 'Browse essentials for dogs, cats, birds, fish, and small pets.' },
        { heading: 'Everyday Staples', body: 'Keep food, toys, grooming, and bedding easy to discover.' },
        { heading: 'Admin Managed', body: 'Products, categories, blogs, FAQs, banners, and SEO come from Medusa.' },
        { heading: 'Reliable Shopping', body: 'Clear product cards and category paths help customers move faster.' },
      ];

  useEffect(() => {
    fetchBanners('home-hero')
      .then((rows) => setBanner(rows?.[0] || null))
      .catch(() => setBanner(null));
  }, []);

  return (
    <>
      <SeoHead {...seo} />
      <section className="border-b border-line bg-surface py-4 md:py-6">
        <div className="pet-page-shell">
          <div className="overflow-hidden border border-line bg-white md:grid md:min-h-[560px] md:grid-cols-[58%_42%]">
            <div className="relative flex min-h-[390px] flex-col justify-center overflow-hidden bg-ink px-6 py-10 text-white sm:px-10 md:min-h-[560px] md:px-12 md:py-14">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07)_0%,transparent_42%)]" />
              <div className="relative z-10 max-w-[720px]">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">Pet Square Essentials</p>
                <h1 className="mt-4 text-[40px] font-semibold leading-[1.02] tracking-tight sm:text-[56px] md:text-[68px]">
                  <span className="block">{banner?.title || 'Discover the best for'}</span>
                  <span className="mt-3 block">{banner?.subtitle || 'your pets at Pet Square.'}</span>
                </h1>
                <p className="mt-5 max-w-[540px] text-[15px] leading-7 text-white/75 md:text-[17px]">
                  {banner?.intro || 'Shop food, care, toys, and accessories organized by pet type and daily routine.'}
                </p>
                <Link
                  to={banner?.ctaLink || '/shop'}
                  className="mt-7 inline-flex h-12 items-center justify-center border border-white/70 px-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-ink"
                >
                  {String(banner?.ctaText || 'SHOP NOW').toUpperCase()}
                </Link>
                <div className="mt-8 grid max-w-[560px] grid-cols-2 gap-3 text-white/80 sm:grid-cols-4">
                  {['Products', 'Categories', 'Blogs', 'FAQs'].map((label) => (
                    <div key={label} className="border border-white/20 px-3 py-3">
                      <p className="text-[18px] font-semibold text-white">4+</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.08em]">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-6 flex items-center gap-2 md:mt-8">
                <span className="h-2.5 w-2.5 bg-white" />
                <span className="h-2.5 w-2.5 bg-white/35" />
                <span className="h-2.5 w-2.5 bg-white/35" />
              </div>
            </div>

            <div className="relative flex h-[320px] items-center justify-center overflow-hidden bg-[#e7e7e7] md:h-full">
              <div className="absolute h-[260px] w-[260px] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:h-[300px] sm:w-[300px] md:h-[380px] md:w-[380px]" />
              <img
                src={banner?.imageUrl || banner?.image_url || heroImage}
                alt="Pet hero"
                className="relative z-10 h-auto w-[410px] max-w-none object-contain sm:w-[480px] md:w-[560px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-line bg-white py-12">
        <div className="pet-page-shell">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {sections.map((section) => (
              <article key={section.heading} className="border border-line bg-surface p-5">
                <h2 className="text-[18px] font-semibold leading-tight text-ink">{section.heading}</h2>
                <p className="mt-3 text-[13px] leading-6 text-muted">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <BrandLineup />
      <TopPicks />
      <Categories />
      <BestSelling />
      <PetTiles />
      <FaqBlock />
      <Testimonials />
      <PopularBlogs />
      <MailingList />
    </>
  );
}
