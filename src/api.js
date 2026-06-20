const MEDUSA_URL = (import.meta.env.VITE_MEDUSA_URL || 'http://127.0.0.1:9000').replace(/\/+$/, '');
const PUBLISHABLE_KEY = import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY || '';
const LEGACY_API = (import.meta.env.VITE_LEGACY_API_URL || '').replace(/\/+$/, '').replace(/\/health$/, '');

const USER_TOKEN_KEY = 'pet-user-token';

let cachedRegionId = null;

function ensurePublishableKey() {
  if (!PUBLISHABLE_KEY) {
    throw new Error('Missing VITE_MEDUSA_PUBLISHABLE_KEY. Add it in web/.env');
  }
}

async function medusaFetch(path, options = {}, { auth = false, publishable = false } = {}) {
  const headers = { ...(options.headers || {}) };

  if (publishable) {
    ensurePublishableKey();
    headers['x-publishable-api-key'] = PUBLISHABLE_KEY;
  }

  if (auth) {
    const token = getUserToken();
    if (!token) throw new Error('Please log in first');
    headers.Authorization = `Bearer ${token}`;
  }

  if (options.body && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const res = await fetch(`${MEDUSA_URL}${path}`, { ...options, headers });
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.message || data?.error || 'Request failed');
  }

  return data;
}

async function getRegionId() {
  if (cachedRegionId) return cachedRegionId;
  const data = await medusaFetch('/store/regions?limit=1', {}, { publishable: true });
  const region = data?.regions?.[0];
  if (!region?.id) throw new Error('No Medusa region found. Seed or create a region first.');
  cachedRegionId = region.id;
  return cachedRegionId;
}

function firstPrice(product) {
  const variant = product?.variants?.[0];
  const calc = variant?.calculated_price;

  const calculated = Number(calc?.calculated_amount ?? 0);
  const original = Number(calc?.original_amount ?? (calculated || 0));
  const currencyCode = String(calc?.currency_code || calc?.currencyCode || 'NZD').toUpperCase();

  if (Number.isFinite(calculated) && calculated > 0) {
    return {
      price: calculated,
      compareAt: original > calculated ? original : Number((calculated * 1.05).toFixed(2)),
      currencyCode,
      hasPrice: true,
    };
  }

  return {
    price: null,
    compareAt: null,
    currencyCode,
    hasPrice: false,
  };
}

export function formatMoney(amount, currencyCode = 'NZD') {
  const value = Number(amount || 0);

  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: String(currencyCode || 'NZD').toUpperCase(),
    }).format(value);
  } catch (err) {
    return `${String(currencyCode || 'NZD').toUpperCase()} ${value.toFixed(2)}`;
  }
}

function toLegacyProduct(product) {
  const price = firstPrice(product);
  const image = product?.thumbnail || product?.images?.[0]?.url || '';

  return {
    id: product.id,
    name: product.title,
    slug: product.handle,
    description: product.description || '',
    image_url: image,
    imageAltText: product.title,
    gallery: (product.images || []).map((x) => x.url).filter(Boolean),
    brand: product.brand || 'Pet Square',
    price: price.price,
    compare_at_price: price.compareAt,
    currency_code: price.currencyCode,
    has_price: price.hasPrice,
    formatted_price: price.hasPrice ? formatMoney(price.price, price.currencyCode) : 'Price not set',
    formatted_compare_at_price: price.hasPrice ? formatMoney(price.compareAt, price.currencyCode) : '',
    variant_id: product.variants?.[0]?.id,
    variants: product.variants || [],
    category: { name: product?.categories?.[0]?.name || 'General' },
    seoTitle: product.title,
    seoDescription: product.description || '',
  };
}

async function tryLegacy(path) {
  if (!LEGACY_API) return [];
  const res = await fetch(`${LEGACY_API}${path}`);
  if (!res.ok) return [];
  return res.json();
}

export function getUserToken() {
  return localStorage.getItem(USER_TOKEN_KEY) || '';
}

export function setUserToken(token) {
  if (token) localStorage.setItem(USER_TOKEN_KEY, token);
  else localStorage.removeItem(USER_TOKEN_KEY);
}

export async function subscribeEmail(email) {
  // Medusa doesn't ship newsletter subscribers by default in Store API.
  // Keep this optional through legacy API if provided.
  if (!LEGACY_API) {
    return { ok: true, message: 'Subscribed locally (demo mode)' };
  }
  const res = await fetch(`${LEGACY_API}/api/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Could not subscribe');
  return data;
}

export async function fetchProducts() {
  const regionId = await getRegionId();
  const data = await medusaFetch(`/store/products?limit=100&region_id=${encodeURIComponent(regionId)}&fields=*variants.calculated_price,*categories,*images`, {}, { publishable: true });
  return (data.products || []).map(toLegacyProduct);
}

export async function fetchCategories() {
  const data = await medusaFetch('/store/product-categories?limit=100', {}, { publishable: true });
  return (data.product_categories || []).map((c) => ({
    id: c.id,
    name: c.name,
    slug: c.handle,
  }));
}

export async function fetchBanners(_position = '') {
  try {
    const qs = _position ? `?position=${encodeURIComponent(_position)}` : '';
    const data = await medusaFetch(`/store/banners${qs}`, {}, { publishable: true });
    return (data.banners || []).map((banner) => ({
      ...banner,
      imageUrl: banner.image_url,
      ctaText: banner.cta_text,
      ctaLink: banner.link_url,
    }));
  } catch (err) {
    return tryLegacy('/api/banners');
  }
}

export async function fetchProductBySlug(slug) {
  const regionId = await getRegionId();
  const data = await medusaFetch(`/store/products?handle=${encodeURIComponent(slug)}&region_id=${encodeURIComponent(regionId)}&fields=*variants.calculated_price,*categories,*images`, {}, { publishable: true });
  const product = data?.products?.[0];
  if (!product) throw new Error('Failed to load product');
  return toLegacyProduct(product);
}

export async function registerCustomer(body) {
  const email = body?.email?.trim();
  const password = body?.password;
  if (!email || !password) throw new Error('Email and password are required');

  const reg = await medusaFetch('/auth/customer/emailpass/register', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  const token = reg?.token;
  if (!token) throw new Error('Registration failed');

  await medusaFetch('/store/customers', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      email,
      first_name: String(body?.name || '').split(' ')[0] || 'Pet',
      last_name: String(body?.name || '').split(' ').slice(1).join(' ') || 'Customer',
    }),
  }, { publishable: true });

  return { token };
}

export async function loginCustomer(body) {
  const data = await medusaFetch('/auth/customer/emailpass', {
    method: 'POST',
    body: JSON.stringify({ email: body?.email, password: body?.password }),
  });
  if (!data?.token) throw new Error('Login failed');
  return { token: data.token };
}

export async function createOrder(body) {
  const regionId = await getRegionId();
  const cartResp = await medusaFetch('/store/carts', {
    method: 'POST',
    body: JSON.stringify({ region_id: regionId }),
  }, { publishable: true });

  const cartId = cartResp?.cart?.id;
  if (!cartId) throw new Error('Unable to create cart');

  const items = Array.isArray(body?.items) ? body.items : [];
  for (const item of items) {
    if (!item?.variant_id || !item?.quantity) continue;
    await medusaFetch(`/store/carts/${cartId}/line-items`, {
      method: 'POST',
      body: JSON.stringify({ variant_id: item.variant_id, quantity: Number(item.quantity) || 1 }),
    }, { publishable: true });
  }

  const cart = await medusaFetch(`/store/carts/${cartId}`, {}, { publishable: true });
  return { cart: cart.cart, message: 'Cart created in Medusa. Complete checkout in payment flow.' };
}

export async function validateDiscount(code) {
  const trimmed = String(code || '').trim();
  if (!trimmed) throw new Error('Invalid discount code');

  const regionId = await getRegionId();
  const cartResp = await medusaFetch('/store/carts', {
    method: 'POST',
    body: JSON.stringify({ region_id: regionId }),
  }, { publishable: true });
  const cartId = cartResp?.cart?.id;

  try {
    await medusaFetch(`/store/carts/${cartId}/promotions`, {
      method: 'POST',
      body: JSON.stringify({ promo_codes: [trimmed] }),
    }, { publishable: true });
    return { valid: true, code: trimmed };
  } catch (err) {
    throw new Error(err?.message || 'Invalid discount code');
  }
}

export async function fetchBlogs() {
  try {
    const data = await medusaFetch('/store/blogs', {}, { publishable: true });
    return data.blogs || [];
  } catch (err) {
    return tryLegacy('/api/blogs');
  }
}

export async function fetchBlogBySlug(slug) {
  try {
    return await medusaFetch(`/store/blogs/${encodeURIComponent(slug)}`, {}, { publishable: true });
  } catch (err) {
    if (!LEGACY_API) throw new Error(err?.message || 'Failed to load blog');
    const res = await fetch(`${LEGACY_API}/api/blogs/${slug}`);
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Failed to load blog');
    return data;
  }
}

export async function fetchPage(key) {
  try {
    const data = await medusaFetch(`/store/pages/${encodeURIComponent(key)}`, {}, { publishable: true });
    return data.page || null;
  } catch (err) {
    return null;
  }
}

export async function fetchFaqs(page = '') {
  try {
    const qs = page ? `?page=${encodeURIComponent(page)}` : '';
    const data = await medusaFetch(`/store/faqs${qs}`, {}, { publishable: true });
    return data.faqs || [];
  } catch (err) {
    return tryLegacy('/api/faqs');
  }
}
