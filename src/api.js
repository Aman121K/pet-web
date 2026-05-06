const API = import.meta.env.VITE_API_URL || '';

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
