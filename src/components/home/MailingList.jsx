import { useState } from 'react';
import { subscribeEmail } from '../../api.js';

export function MailingList() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      await subscribeEmail(email);
      setEmail('');
      setStatus('Subscribed!');
    } catch (err) {
      setStatus(err.message || 'Could not subscribe');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-surface py-[72px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-[46px] px-4 sm:px-8 md:px-16">

        {/* Text group */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-[24px] font-semibold leading-[1.1] text-ink">
            Join our mailing list for exclusive updates!
          </h2>
          <p className="text-[18px] font-normal leading-6 text-muted">
            Sign up to our newsletter and receive exclusive discounts and deals
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="flex w-full max-w-[650px] flex-col gap-3 sm:flex-row"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Your email address"
            className="h-[50px] flex-1 border border-[#d1d1d1] bg-white px-4 text-[15px] font-normal text-ink placeholder:text-muted outline-none focus:border-ink/40"
          />
          <button
            type="submit"
            disabled={loading}
            className="h-[50px] shrink-0 bg-ink px-8 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-opacity disabled:opacity-60"
          >
            Subscribe
          </button>
        </form>

        {status ? (
          <p className="text-[13px] text-muted">{status}</p>
        ) : null}

      </div>
    </section>
  );
}

