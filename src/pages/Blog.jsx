import { FeatureBar } from '../components/FeatureBar.jsx';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { fetchBlogs } from '../api.js';
import blog1 from '../assets/pets/home/blog-1.jpg';
import blog2 from '../assets/pets/home/blog-2.jpg';
import blog3 from '../assets/pets/home/blog-3.jpg';
import product1 from '../assets/pets/product-1.jpg';
import product3 from '../assets/pets/product-3.jpg';
import { SeoHead } from '../components/SeoHead.jsx';
import { pageSeo, useManagedPage } from '../hooks/useManagedPage.js';

const fallbackPosts = [
  {
    slug: 'pet-nutrition-101',
    title: 'Pet Nutrition 101',
    excerpt: 'A practical guide to balanced feeding, labels, portions, and everyday nutrition choices.',
    category: 'Nutrition',
    image: blog1,
    date: 'May 12, 2025',
  },
  {
    slug: 'training-basics',
    title: 'Training Basics',
    excerpt: 'Small habits that make daily routines calmer, clearer, and easier for pets and owners.',
    category: 'Training',
    image: blog2,
    date: 'Apr 28, 2025',
  },
  {
    slug: 'cozy-home-for-pets',
    title: 'Cozy Home for Pets',
    excerpt: 'Beds, toys, bowls, and comfort essentials that help pets settle into a healthy routine.',
    category: 'Home',
    image: blog3,
    date: 'Apr 10, 2025',
  },
  {
    slug: 'choosing-pet-toys',
    title: 'Choosing Safer Pet Toys',
    excerpt: 'Match toys to your pet size, chewing style, age, and energy level before you buy.',
    category: 'Toys',
    image: product1,
    date: 'Mar 24, 2025',
  },
  {
    slug: 'grooming-routine',
    title: 'Building a Grooming Routine',
    excerpt: 'Simple grooming habits for cleaner coats, healthier paws, and easier weekly care.',
    category: 'Care',
    image: product3,
    date: 'Mar 02, 2025',
  },
];

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
  const page = useManagedPage('blog');
  const seo = pageSeo(page, {
    title: 'Pet Care Blog | Pet Square',
    description: 'Read Pet Square guides on pet nutrition, toys, care routines, and everyday pet shopping.',
    canonical: '/blog',
  });

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
    () => {
      const remote = posts.map((post, index) => ({
        ...post,
        image: post.featuredImageUrl || fallbackPosts[index % fallbackPosts.length].image,
        date: formatDate(post.publishedAt || post.createdAt),
      }));
      const seen = new Set(remote.map((post) => post.slug));
      return [...remote, ...fallbackPosts.filter((post) => !seen.has(post.slug))].slice(0, 5);
    },
    [posts]
  );

  return (
    <>
      <SeoHead {...seo} />
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
