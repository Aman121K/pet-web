import { FeatureBar } from '../components/FeatureBar.jsx';
import { Link } from 'react-router-dom';
import blog1 from '../assets/pets/home/blog-1.jpg';
import blog2 from '../assets/pets/home/blog-2.jpg';
import blog3 from '../assets/pets/home/blog-3.jpg';

const posts = [
  {
    slug: 'pet-nutrition-101',
    title: 'Pet Nutrition 101: Building Better Meals',
    excerpt:
      'Learn how to read labels, pick balanced ingredients, and avoid common nutrition mistakes for dogs and cats.',
    category: 'Nutrition',
    date: 'May 08, 2026',
    image: blog1,
  },
  {
    slug: 'training-basics',
    title: 'Training Basics That Work Every Day',
    excerpt:
      'Simple routines, reward timing, and consistency tips to improve behavior without stress for your pet.',
    category: 'Training',
    date: 'May 02, 2026',
    image: blog2,
  },
  {
    slug: 'cozy-home-for-pets',
    title: 'Designing a Cozy Home Zone for Pets',
    excerpt:
      'From beds to play corners, here are practical ideas to create a safe and calming setup for your companion.',
    category: 'Lifestyle',
    date: 'Apr 26, 2026',
    image: blog3,
  },
];

export function Blog() {
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

          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
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
        </div>
      </section>
    </>
  );
}
