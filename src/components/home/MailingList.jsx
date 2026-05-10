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
    <section className="bg-surface py-20 sm:py-[72px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-4 pb-6 sm:gap-[46px] sm:px-8 sm:pb-0 md:px-16">

        {/* Text group */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="max-w-[520px] text-[24px] font-semibold leading-[1.15] text-ink sm:max-w-none">
            Join our mailing list for exclusive updates!
          </h2>
          <p className="max-w-[560px] text-[14px] font-normal leading-[1.4] text-muted sm:max-w-none sm:text-[18px] sm:leading-6">
            Sign up to our newsletter and receive exclusive discounts and deals
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="flex w-full max-w-[650px] flex-col gap-4 pb-4 sm:flex-row sm:gap-3 sm:pb-0"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your email"
            className="h-11 flex-1 border border-[#d1d1d1] bg-white px-4 py-3 text-[13px] font-normal text-ink placeholder:font-normal placeholder:text-[#7f7f7f] outline-none focus:border-ink/40 sm:h-[50px] sm:py-0 sm:text-[15px]"
          />
          <button
            type="submit"
            disabled={loading}
            className="h-11 w-full shrink-0 bg-ink px-8 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition-opacity disabled:opacity-60 sm:h-[50px] sm:w-auto sm:text-[13px]"
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
