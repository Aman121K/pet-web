import { useEffect, useState } from 'react';
import { fetchPage } from '../api.js';

export function useManagedPage(pageKey) {
  const [page, setPage] = useState(null);

  useEffect(() => {
    let mounted = true;

    if (!pageKey) {
      setPage(null);
      return undefined;
    }

    fetchPage(pageKey)
      .then((row) => {
        if (mounted) setPage(row || null);
      })
      .catch(() => {
        if (mounted) setPage(null);
      });

    return () => {
      mounted = false;
    };
  }, [pageKey]);

  return page;
}

export function pageSeo(page, fallback = {}) {
  const seo = page?.seo || {};

  return {
    title: seo.title || fallback.title || (page?.title ? `${page.title} | Pet Square` : 'Pet Square'),
    description: seo.description || fallback.description || page?.intro || '',
    keywords: seo.keywords || fallback.keywords || '',
    canonical: seo.canonical_url || fallback.canonical || '',
    robots: seo.robots || fallback.robots || 'index,follow',
    ogTitle: seo.og_title || fallback.ogTitle || seo.title || fallback.title || page?.title || '',
    ogDescription:
      seo.og_description || fallback.ogDescription || seo.description || fallback.description || page?.intro || '',
    ogImage: seo.og_image_url || fallback.ogImage || '',
    ogType: fallback.ogType || 'website',
  };
}
