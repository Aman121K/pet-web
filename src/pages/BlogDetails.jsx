import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MailingList } from '../components/home/MailingList.jsx';
import { fetchBlogBySlug } from '../api.js';
import blog1 from '../assets/pets/home/blog-1.jpg';

function formatDate(value) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' });
}

export function BlogDetails() {
  const { slug = '' } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const row = await fetchBlogBySlug(slug);
        if (mounted) setPost(row || null);
      } catch (err) {
        if (mounted) setError(err.message || 'Failed to load blog');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [slug]);

  const title = post?.title || 'Blog';
  const category = post?.category || 'General';
  const date = formatDate(post?.publishedAt || post?.createdAt);
  const author = post?.authorName || 'Pet Square Team';
  const image = post?.featuredImageUrl || blog1;
  const imageAlt = post?.featuredImageAlt || title;

  return (
    <>
      <section className="border-b border-line bg-[#f4f4f4]">
        <div className="mx-auto max-w-[1200px] px-4 py-2 text-[10px] text-muted">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="px-2">&gt;</span>
          <Link to="/blog" className="hover:text-ink">Blog</Link>
          <span className="px-2">&gt;</span>
          {title}
        </div>
      </section>

      <section className="bg-[#efefef] py-8 md:py-12">
        <article className="mx-auto max-w-[1000px] border border-line bg-white">
          <img src={image} alt={imageAlt} className="h-[260px] w-full object-cover md:h-[420px]" />
          <div className="px-5 py-6 md:px-10 md:py-10">
            {loading && <p className="text-muted">Loading blog...</p>}
            {!loading && error && <p className="text-red-600">{error}</p>}

            {!loading && !error && post && (
              <>
                <p className="text-[12px] uppercase tracking-[0.08em] text-muted">
                  {category} <span className="mx-2">•</span> {date}
                </p>
                <h1 className="mt-3 text-[34px] font-semibold leading-[1.1] text-ink md:text-[48px]">
                  {title}
                </h1>
                <p className="mt-2 text-[13px] text-muted">By {author}</p>
                {!!post.excerpt && (
                  <p className="mt-6 text-[14px] leading-7 text-muted md:text-[15px]">{post.excerpt}</p>
                )}
                {post.content ? (
                  <div
                    className="prose prose-sm mt-6 max-w-none text-muted md:prose-base"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                ) : (
                  <p className="mt-6 text-[14px] leading-7 text-muted md:text-[15px]">
                    This post does not have content yet.
                  </p>
                )}
              </>
            )}

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
