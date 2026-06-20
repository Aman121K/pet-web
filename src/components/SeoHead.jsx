import { useEffect } from 'react';

const SITE_NAME = 'Pet Square';
const DEFAULT_TITLE = 'Pet Square | Pet Food, Toys, Care & Accessories';
const DEFAULT_DESCRIPTION =
  'Shop pet food, toys, care products, bedding, and accessories for everyday pet routines at Pet Square.';

function upsertMeta(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);

  if (!content) {
    if (tag) tag.remove();
    return;
  }

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertLink(rel, href, extra = {}) {
  let link = document.head.querySelector(`link[rel="${rel}"]${extra.hreflang ? `[hreflang="${extra.hreflang}"]` : ''}`);

  if (!href) {
    if (link) link.remove();
    return;
  }

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    Object.entries(extra).forEach(([key, value]) => {
      if (value) link.setAttribute(key, value);
    });
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
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
  twitterCard = 'summary_large_image',
  twitterSite = '',
  jsonLd,
}) {
  useEffect(() => {
    const oldTitle = document.title;
    const nextTitle = title || DEFAULT_TITLE;
    const nextDescription = description || DEFAULT_DESCRIPTION;
    const nextCanonical = absoluteUrl(canonical || window.location.pathname);
    const nextOgTitle = ogTitle || nextTitle;
    const nextOgDescription = ogDescription || nextDescription;
    const nextOgImage = absoluteUrl(ogImage);
    const structuredData =
      jsonLd ||
      {
        '@context': 'https://schema.org',
        '@type': ogType === 'article' ? 'Article' : 'WebPage',
        name: nextTitle,
        description: nextDescription,
        url: nextCanonical,
        isPartOf: {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: absoluteUrl('/'),
        },
      };

    document.title = nextTitle;
    document.documentElement.setAttribute('lang', 'en');

    upsertMeta('name', 'description', nextDescription);
    upsertMeta('name', 'keywords', keywords);
    upsertMeta('name', 'robots', robots || 'index,follow');
    upsertMeta('name', 'author', SITE_NAME);
    upsertMeta('name', 'publisher', SITE_NAME);
    upsertMeta('name', 'application-name', SITE_NAME);
    upsertMeta('name', 'theme-color', '#111827');
    upsertMeta('name', 'referrer', 'strict-origin-when-cross-origin');

    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:locale', 'en_US');
    upsertMeta('property', 'og:title', nextOgTitle);
    upsertMeta('property', 'og:description', nextOgDescription);
    upsertMeta('property', 'og:image', nextOgImage);
    upsertMeta('property', 'og:url', nextCanonical);

    upsertMeta('name', 'twitter:card', twitterCard);
    upsertMeta('name', 'twitter:site', twitterSite);
    upsertMeta('name', 'twitter:title', nextOgTitle);
    upsertMeta('name', 'twitter:description', nextOgDescription);
    upsertMeta('name', 'twitter:image', nextOgImage);

    upsertLink('canonical', nextCanonical);
    upsertLink('alternate', nextCanonical, { hreflang: 'en' });

    let script = document.head.querySelector('script[data-seo-jsonld="true"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      document.title = oldTitle;
    };
  }, [
    title,
    description,
    keywords,
    canonical,
    robots,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    twitterCard,
    twitterSite,
    jsonLd,
  ]);

  return null;
}
