import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import blog1 from '../../assets/pets/home/blog-1.jpg';
import blog2 from '../../assets/pets/home/blog-2.jpg';
import blog3 from '../../assets/pets/home/blog-3.jpg';

/* ─── Data ──────────────────────────────────────────────────────────────── */
const posts = [
  {
    slug: 'pet-nutrition-101',
    title: 'Pet Nutrition 101',
    description:
      'A simple guide to balanced meals, reading labels, and choosing the right food for your beloved pet.',
    author: 'Dr. Emily Carter',
    date: 'May 12, 2025',
    img: blog1,
  },
  {
    slug: 'training-basics',
    title: 'Training Basics',
    description:
      'Small habits that make a big difference — from routine to reward timing and positive reinforcement.',
    author: 'Mark Wilson',
    date: 'April 28, 2025',
    img: blog2,
  },
  {
    slug: 'cozy-home-for-pets',
    title: 'Cozy home for pets',
    description:
      'Beds, toys, and everyday essentials to keep your pet calm and comfortable at home.',
    author: 'Sarah Johnson',
    date: 'April 10, 2025',
    img: blog3,
  },
];

/* ─── Card ───────────────────────────────────────────────────────────────── */
function BlogCard({ slug, title, description, author, date, img }) {
  return (
    <article className="group flex flex-col border border-ink shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      {/* Image */}
      <div className="h-[265px] flex-none overflow-hidden">
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        {/* Title */}
        <h3 className="text-[20px] font-medium leading-[22px] text-ink">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[16px] font-normal leading-6 text-[rgba(28,28,28,0.7)]">
          {description}
        </p>

        {/* Author · Date */}
        <p className="text-[16px] font-medium leading-[150%] text-[rgba(28,28,28,0.6)]">
          {author} · {date}
        </p>

        {/* Read More Button — pushed to bottom */}
        <div className="mt-auto">
          <Link
            to={`/blog/${slug}`}
            className="relative flex h-[46px] w-full items-center justify-center overflow-hidden border border-ink px-4 text-[14px] font-bold uppercase tracking-[0.08em]"
          >
            {/*
             * Sliding fill — absolutely positioned, scales from 0→1 on the
             * x-axis from the left edge, giving a smooth wipe-in effect.
             */}
            <span
              aria-hidden
              className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100"
            />

            {/*
             * Arrow — starts hidden 10px to the left, slides right into
             * position and fades in as the fill arrives.
             */}
            <span
              aria-hidden
              className="relative mr-2 -translate-x-[10px] text-ink opacity-0 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100"
            >
              <ArrowRight aria-hidden size={18} strokeWidth={1.5} />
            </span>

            {/* Label */}
            <span className="relative text-ink transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-white">
              Read More
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
export function PopularBlogs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 md:px-16">
        <div className="flex flex-col gap-[46px]">

          {/* Heading */}
          <h2 className="text-center text-[24px] font-semibold leading-[31px] text-ink md:text-[40px] md:leading-[44px]">
            Popular blog
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
