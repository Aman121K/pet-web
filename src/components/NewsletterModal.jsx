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
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
    >
      <div className="relative w-full max-w-[654px] overflow-hidden border-[4px] border-[#1ea0ff] bg-white shadow-modal">
        <button
          type="button"
          onClick={close}
          className="absolute right-[8px] top-[6px] z-10 inline-flex h-6 w-6 items-center justify-center text-[#4a4a4a] transition hover:text-black"
          aria-label="Close"
        >
          <span className="text-[14px] leading-none">×</span>
        </button>

        <div className="flex h-auto flex-col md:h-[300px] md:flex-row">
          <div className="relative h-[180px] w-full shrink-0 md:h-full md:w-[300px]">
            <img
              src={modalLeftImg}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center px-5 py-5 md:w-[354px] md:px-9 md:py-0">
            <h2
              id={labelId}
              className="text-center text-[42px] font-semibold leading-[34px] tracking-[-0.02em] text-ink md:text-[40px]"
            >
              <span className="block text-[23px] leading-[26px]">Subcribe to Our</span>
              <span className="block text-[39px] leading-[38px] md:text-[38px]">Newsletter</span>
            </h2>
            <p className="mt-3 text-center text-[11px] leading-[16px] text-[#666] md:mt-4">
              Subscribe to our <span className="font-semibold text-ink">newsletter</span>{' '}
              and Save your <span className="font-semibold text-ink">20%
              money</span> with
              discount code today.
            </p>

            <form onSubmit={onSubmit} className="mt-4 md:mt-5">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-[30px] w-full min-w-0 flex-1 rounded-full border border-[#d7d7d7] bg-white px-3 text-[10px] text-ink outline-none placeholder:text-[#9c9c9c] focus:border-ink/25"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="h-[30px] w-[96px] shrink-0 rounded-full bg-ink px-4 text-[10px] font-semibold text-white transition hover:bg-ink/90 disabled:opacity-60"
                >
                  {loading ? '…' : 'Subscribe'}
                </button>
              </div>
              {status ? (
                <p className="mt-2 text-[11px] text-muted" role="status">
                  {status}
                </p>
              ) : null}
            </form>

            <label className="mt-4 flex cursor-pointer items-center justify-center gap-1.5 text-[10px] text-[#8b8b8b] md:mt-5">
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
                className="h-3 w-3 rounded border-[#d0d0d0] text-ink focus:ring-ink"
              />
              Do not show this window
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
