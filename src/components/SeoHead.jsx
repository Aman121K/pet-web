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

export function SeoHead({ title, description, keywords, canonical, robots, ogTitle, ogDescription, ogImage }) {
  useEffect(() => {
    const oldTitle = document.title;
    if (title) document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);
    upsertMeta('name', 'robots', robots || 'index,follow');
    upsertMeta('property', 'og:type', 'product');
    upsertMeta('property', 'og:title', ogTitle || title);
    upsertMeta('property', 'og:description', ogDescription || description);
    upsertMeta('property', 'og:image', ogImage);
    upsertCanonical(canonical);

    return () => {
      document.title = oldTitle;
    };
  }, [title, description, keywords, canonical, robots, ogTitle, ogDescription, ogImage]);

  return null;
}
