import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { registerCustomer, setUserToken } from '../api.js';
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

export function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const data = await registerCustomer({
        name: `${firstName} ${lastName}`.trim(),
        email,
        password,
      });
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
        <div className="mx-auto w-full max-w-[720px] rounded-2xl border border-line bg-white p-6 shadow-[0_20px_70px_rgba(17,17,17,0.08)] sm:p-8 lg:p-10">
          <h1 className="text-[30px] font-semibold tracking-tight text-ink">Sign up</h1>
          <p className="mt-1 text-[14px] text-muted">
            Create your Pet SQUARE account for faster checkout and order tracking.
          </p>

          <form onSubmit={onSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
            <Field
              id="first-name"
              label="First name"
              placeholder="Ava"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Field
              id="last-name"
              label="Last name"
              placeholder="Johnson"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className="sm:col-span-2">
              <Field
                id="email"
                label="Email"
                type="email"
                placeholder="ava@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Field
              id="password"
              label="Password"
              type="password"
              placeholder="Minimum 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Field
              id="confirm-password"
              label="Confirm password"
              type="password"
              placeholder="Repeat password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label className="sm:col-span-2 inline-flex items-start gap-2 text-[13px] text-muted">
              <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-line" />
              I agree to the terms and privacy policy.
            </label>
            <button
              type="submit"
              disabled={loading}
              className="sm:col-span-2 h-11 rounded-lg bg-ink text-[14px] font-semibold text-white transition hover:bg-ink/90 disabled:opacity-60"
            >
              {loading ? 'Creating account…' : 'Create account'}
            </button>
            {error ? <p className="sm:col-span-2 text-[13px] text-red-600">{error}</p> : null}
          </form>

          <p className="mt-6 text-[14px] text-muted">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-ink hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
