import { useEffect } from 'react';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(url) {
  if (!url) return;
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function absoluteUrl(url) {
  if (!url) return '';

  try {
    return new URL(url, window.location.origin).toString();
  } catch (err) {
    return url;
  }
}

export function SeoHead({
  title,
  description,
  keywords,
  canonical,
  robots,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
}) {
  useEffect(() => {
    const oldTitle = document.title;
    if (title) document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);
    upsertMeta('name', 'robots', robots || 'index,follow');
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:title', ogTitle || title);
    upsertMeta('property', 'og:description', ogDescription || description);
    upsertMeta('property', 'og:image', absoluteUrl(ogImage));
    upsertMeta('property', 'og:url', absoluteUrl(canonical || window.location.pathname));
    upsertCanonical(absoluteUrl(canonical || window.location.pathname));

    return () => {
      document.title = oldTitle;
    };
  }, [title, description, keywords, canonical, robots, ogTitle, ogDescription, ogImage, ogType]);

  return null;
}
