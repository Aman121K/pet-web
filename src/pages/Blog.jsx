import { FeatureBar } from '../components/FeatureBar.jsx';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { fetchBlogs } from '../api.js';
import blog1 from '../assets/pets/home/blog-1.jpg';

function formatDate(value) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' });
}

export function Blog() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const rows = await fetchBlogs();
        if (mounted) setPosts(Array.isArray(rows) ? rows : []);
      } catch (err) {
        if (mounted) setError(err.message || 'Failed to load blogs');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const items = useMemo(
    () =>
      posts.map((post) => ({
        ...post,
        image: post.featuredImageUrl || blog1,
        date: formatDate(post.publishedAt || post.createdAt),
      })),
    [posts]
  );

  return (
    <>
      <FeatureBar />
      <section className="bg-[#F5F5F5]">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <header className="mx-auto max-w-[760px] text-center">
            <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-semibold tracking-tight text-ink">
              Blog & pet care insights
            </h1>
            <p className="mt-4 text-[14px] leading-7 text-muted sm:text-[15px]">
              Practical guides on nutrition, health, training, and everyday routines to help your pets
              stay active and happy.
            </p>
          </header>

          {loading && <p className="mt-10 text-center text-muted">Loading blog posts...</p>}
          {!loading && error && <p className="mt-10 text-center text-red-600">{error}</p>}
          {!loading && !error && items.length === 0 && (
            <p className="mt-10 text-center text-muted">No blog posts available right now.</p>
          )}

          {!loading && !error && items.length > 0 && (
            <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {items.map((post) => (
              <article
                key={post.slug || post.title}
                className="overflow-hidden rounded-sm border border-line bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="aspect-[4/3] bg-surface">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted">
                    {post.category} <span className="mx-2">•</span> {post.date}
                  </p>
                  <h2 className="mt-2 text-[20px] font-semibold leading-tight tracking-tight text-ink">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-6 text-muted">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-5 inline-flex h-10 items-center justify-center border border-line px-5 text-[12px] font-semibold tracking-[0.08em] text-ink transition hover:bg-surface"
                  >
                    READ MORE
                  </Link>
                </div>
              </article>
            ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
