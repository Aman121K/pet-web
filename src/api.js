const API = import.meta.env.VITE_API_URL || '';
const USER_TOKEN_KEY = 'pet-user-token';

export function getUserToken() {
  return localStorage.getItem(USER_TOKEN_KEY) || '';
}

export function setUserToken(token) {
  if (token) localStorage.setItem(USER_TOKEN_KEY, token);
  else localStorage.removeItem(USER_TOKEN_KEY);
}

export async function subscribeEmail(email) {
  const res = await fetch(`${API}/api/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || 'Could not subscribe');
  }
  return data;
}

export async function fetchProducts() {
  const res = await fetch(`${API}/api/products`);
  if (!res.ok) throw new Error('Failed to load products');
  return res.json();
}

export async function fetchCategories() {
  const res = await fetch(`${API}/api/categories`);
  if (!res.ok) throw new Error('Failed to load categories');
  return res.json();
}

export async function fetchBanners(position = '') {
  const q = position ? `?position=${encodeURIComponent(position)}` : '';
  const res = await fetch(`${API}/api/banners${q}`);
  if (!res.ok) throw new Error('Failed to load banners');
  return res.json();
}

export async function fetchProductBySlug(slug) {
  const res = await fetch(`${API}/api/products/${slug}`);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Failed to load product');
  return data;
}

export async function registerCustomer(body) {
  const res = await fetch(`${API}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Registration failed');
  return data;
}

export async function loginCustomer(body) {
  const res = await fetch(`${API}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Login failed');
  return data;
}

export async function createOrder(body) {
  const token = getUserToken();
  const res = await fetch(`${API}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Checkout failed');
  return data;
}

export async function validateDiscount(code, subtotal) {
  const res = await fetch(`${API}/api/discounts/validate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code, subtotal }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Invalid discount code');
  return data;
}
