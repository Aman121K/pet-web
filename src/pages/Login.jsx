import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { loginCustomer, setUserToken } from '../api.js';
import { FeatureBar } from '../components/FeatureBar.jsx';

function Field({ id, label, type = 'text', placeholder, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="text-[13px] font-semibold tracking-wide text-ink/80">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-1 h-11 w-full rounded-lg border border-line bg-white px-3 text-[14px] text-ink outline-none transition focus:border-ink/25 focus:ring-2 focus:ring-ink/10"
      />
    </div>
  );
}

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await loginCustomer({ email, password });
      setUserToken(data.token);
      navigate('/checkout');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <FeatureBar />
      <section className="bg-gradient-to-b from-surface to-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid w-full max-w-[1060px] overflow-hidden rounded-none border border-line bg-white shadow-[0_20px_70px_rgba(17,17,17,0.08)] lg:grid-cols-2">
          <div className="relative hidden bg-ink p-10 text-white lg:block">
            <p className="text-[12px] uppercase tracking-[0.2em] text-white/70">PET SQUARE</p>
            <h1 className="mt-4 text-[38px] font-semibold leading-tight tracking-tight">
              Welcome back.
            </h1>
            <p className="mt-4 max-w-[360px] text-[15px] text-white/75">
              Sign in to track orders, save pet preferences, and checkout faster.
            </p>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <h2 className="text-[28px] font-semibold tracking-tight text-ink">Log in</h2>
            <p className="mt-1 text-[14px] text-muted">Use your email and password to continue.</p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <Field
                id="email"
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Field
                id="password"
                label="Password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex items-center justify-between text-[13px]">
                <label className="inline-flex items-center gap-2 text-muted">
                  <input type="checkbox" className="h-4 w-4 rounded border-line" /> Remember me
                </label>
                <a href="#" className="font-medium text-ink hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="h-11 w-full rounded-lg bg-ink text-[14px] font-semibold text-white transition hover:bg-ink/90 disabled:opacity-60"
              >
                {loading ? 'Logging in…' : 'Log in'}
              </button>
              {error ? <p className="text-[13px] text-red-600">{error}</p> : null}
            </form>

            <p className="mt-6 text-[14px] text-muted">
              New here?{' '}
              <Link to="/signup" className="font-semibold text-ink hover:underline">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
