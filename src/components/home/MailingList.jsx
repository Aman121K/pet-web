import { useState } from 'react';
import { SectionShell } from './SectionShell.jsx';
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
    <SectionShell className="bg-white py-12">
      <div className="mx-auto max-w-[820px] border border-line bg-white p-8 text-center">
        <h2 className="text-[14px] font-semibold text-ink">
          Join our mailing list for exclusive updates!
        </h2>
        <form onSubmit={onSubmit} className="mx-auto mt-5 flex max-w-[560px] gap-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Your email address"
            className="h-10 flex-1 border border-line px-3 text-[13px] outline-none focus:border-ink/30"
          />
          <button
            type="submit"
            disabled={loading}
            className="h-10 bg-ink px-6 text-[12px] font-semibold tracking-wider text-white disabled:opacity-60"
          >
            SUBSCRIBE
          </button>
        </form>
        {status ? <p className="mt-3 text-[12px] text-muted">{status}</p> : null}
      </div>
    </SectionShell>
  );
}

