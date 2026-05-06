import { Link } from 'react-router-dom';
import blog1 from '../../assets/pets/home/blog-1.jpg';
import blog2 from '../../assets/pets/home/blog-2.jpg';
import blog3 from '../../assets/pets/home/blog-3.jpg';
import { SectionShell } from './SectionShell.jsx';

const posts = [
  {
    slug: 'pet-nutrition-101',
    title: 'Pet Nutrition 101',
    excerpt: 'A simple guide to balanced meals, reading labels, and choosing the right food.',
    img: blog1,
  },
  {
    slug: 'training-basics',
    title: 'Training Basics',
    excerpt: 'Small habits that make a big difference — from routine to reward timing.',
    img: blog2,
  },
  {
    slug: 'cozy-home-for-pets',
    title: 'Cozy home for pets',
    excerpt: 'Beds, toys, and everyday essentials to keep your pet calm and comfortable.',
    img: blog3,
  },
];

export function PopularBlogs() {
  return (
    <SectionShell className="bg-white py-12">
      <div className="text-center">
        <h2 className="text-[14px] font-semibold text-ink">Popular blog</h2>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {posts.map((p) => (
          <article key={p.slug} className="border border-line bg-white">
            <div className="aspect-[4/3] bg-surface">
              <img src={p.img} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <p className="text-[13px] font-semibold text-ink">{p.title}</p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-muted line-clamp-3">
                {p.excerpt}
              </p>
              <Link
                to={`/blog/${p.slug}`}
                className="mt-4 inline-flex h-8 items-center justify-center border border-line px-4 text-[11px] font-semibold tracking-wider text-ink"
              >
                READ MORE
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

