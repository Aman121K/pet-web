import { useEffect, useId, useState } from 'react';
import { subscribeEmail } from '../api.js';
import modalLeftImg from '../assets/pets/modal-left.jpg';

const STORAGE_KEY = 'pet-square-hide-newsletter';

export function NewsletterModal() {
  const labelId = useId();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [hideAgain, setHideAgain] = useState(false);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.localStorage.getItem(STORAGE_KEY) === '1') return;
    const t = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(t);
  }, []);

  function close() {
    setOpen(false);
    setStatus('');
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      await subscribeEmail(email);
      setStatus('Thanks — you are subscribed.');
      setEmail('');
      window.setTimeout(close, 1200);
    } catch (err) {
      setStatus(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/45 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
    >
      <div className="relative w-full max-w-modal overflow-hidden rounded-[2px] border border-line bg-white shadow-modal">
        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 z-10 inline-flex h-7 w-7 items-center justify-center text-ink/55 transition hover:bg-surface hover:text-ink"
          aria-label="Close"
        >
          <span className="text-[18px] leading-none">&times;</span>
        </button>

        <div className="flex h-auto flex-col md:h-[300px] md:flex-row">
          <div className="relative h-44 w-full shrink-0 md:h-auto md:w-[50%]">
            <img
              src={modalLeftImg}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center px-7 py-6 md:w-[50%] md:px-10">
            <h2
              id={labelId}
              className="text-center text-[22px] font-semibold leading-snug tracking-tight text-ink sm:text-[24px]"
            >
              Subscribe to Our Newsletter
            </h2>
            <p className="mt-3 text-center text-[12.5px] leading-relaxed text-muted sm:text-[13px]">
              Subscribe to our <span className="font-semibold text-ink">newsletter</span>{' '}
              and Save your <span className="font-semibold text-ink">20% money</span> with
              discount code today.
            </p>

            <form onSubmit={onSubmit} className="mt-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-9 w-full flex-1 rounded-full border border-line bg-white px-4 text-[12.5px] text-ink outline-none placeholder:text-muted/70 focus:border-ink/25 sm:min-w-0"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="h-9 shrink-0 rounded-full bg-ink px-6 text-[12px] font-semibold text-white transition hover:bg-ink/90 disabled:opacity-60 sm:w-[132px]"
                >
                  {loading ? '…' : 'Subscribe'}
                </button>
              </div>
              {status ? (
                <p className="mt-2 text-[13px] text-muted" role="status">
                  {status}
                </p>
              ) : null}
            </form>

            <label className="mt-5 flex cursor-pointer items-center justify-center gap-2 text-[11.5px] text-muted">
              <input
                type="checkbox"
                checked={hideAgain}
                onChange={(e) => {
                  const v = e.target.checked;
                  setHideAgain(v);
                  if (typeof window !== 'undefined') {
                    if (v) window.localStorage.setItem(STORAGE_KEY, '1');
                    else window.localStorage.removeItem(STORAGE_KEY);
                  }
                }}
                className="h-3.5 w-3.5 rounded border-line text-ink focus:ring-ink"
              />
              Do not show this window
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
