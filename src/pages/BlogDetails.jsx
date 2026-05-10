import { Link, useParams } from 'react-router-dom';
import { MailingList } from '../components/home/MailingList.jsx';
import blog1 from '../assets/pets/home/blog-1.jpg';
import blog2 from '../assets/pets/home/blog-2.jpg';
import blog3 from '../assets/pets/home/blog-3.jpg';

const posts = {
  'pet-nutrition-101': {
    title: 'Pet Nutrition 101: Building Better Meals',
    category: 'Nutrition',
    date: 'May 08, 2026',
    author: 'Dr. Emily Carter',
    image: blog1,
    intro:
      'Learn how to read labels, pick balanced ingredients, and avoid common nutrition mistakes for dogs and cats.',
  },
  'training-basics': {
    title: 'Training Basics That Work Every Day',
    category: 'Training',
    date: 'May 02, 2026',
    author: 'Mark Wilson',
    image: blog2,
    intro:
      'Simple routines, reward timing, and consistency tips to improve behavior without stress for your pet.',
  },
  'cozy-home-for-pets': {
    title: 'Designing a Cozy Home Zone for Pets',
    category: 'Lifestyle',
    date: 'Apr 26, 2026',
    author: 'Sarah Johnson',
    image: blog3,
    intro:
      'From beds to play corners, practical ideas to create a safe and calming setup for your companion.',
  },
};

function slugToTitle(slug) {
  return String(slug || 'blog')
    .split('-')
    .filter(Boolean)
    .map((w) => w[0]?.toUpperCase() + w.slice(1))
    .join(' ');
}

export function BlogDetails() {
  const { slug = '' } = useParams();
  const post = posts[slug] || {
    title: slugToTitle(slug),
    category: 'Blog',
    date: 'May 10, 2026',
    author: 'PetSquare Team',
    image: blog1,
    intro: 'Useful pet care guidance and updates from our editorial team.',
  };

  return (
    <>
      <section className="border-b border-line bg-[#f4f4f4]">
        <div className="mx-auto max-w-[1200px] px-4 py-2 text-[10px] text-muted">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="px-2">&gt;</span>
          <Link to="/blog" className="hover:text-ink">Blog</Link>
          <span className="px-2">&gt;</span>
          {post.title}
        </div>
      </section>

      <section className="bg-[#efefef] py-8 md:py-12">
        <article className="mx-auto max-w-[1000px] border border-line bg-white">
          <img src={post.image} alt={post.title} className="h-[260px] w-full object-cover md:h-[420px]" />
          <div className="px-5 py-6 md:px-10 md:py-10">
            <p className="text-[12px] uppercase tracking-[0.08em] text-muted">
              {post.category} <span className="mx-2">•</span> {post.date}
            </p>
            <h1 className="mt-3 text-[34px] font-semibold leading-[1.1] text-ink md:text-[48px]">
              {post.title}
            </h1>
            <p className="mt-2 text-[13px] text-muted">By {post.author}</p>

            <p className="mt-6 text-[14px] leading-7 text-muted md:text-[15px]">{post.intro}</p>
            <p className="mt-4 text-[14px] leading-7 text-muted md:text-[15px]">
              Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis
              dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.
              Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac,
              vestibulum at eros.
            </p>
            <p className="mt-4 text-[14px] leading-7 text-muted md:text-[15px]">
              Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.
              Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta
              felis euismod semper.
            </p>

            <div className="mt-8">
              <Link
                to="/blog"
                className="inline-flex h-10 items-center justify-center bg-ink px-6 text-[12px] font-semibold tracking-wide text-white"
              >
                BACK TO BLOG
              </Link>
            </div>
          </div>
        </article>
      </section>

      <MailingList />
    </>
  );
}
