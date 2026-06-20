import { useEffect, useState } from 'react';
import { ChevronRight, ChevronDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchFaqs } from '../../api.js';

/* ─── Decorative paw-print icon ─────────────────────────────────────── */
function PawPrint({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* four toe pads */}
      <ellipse cx="18" cy="24" rx="9" ry="12" fill="#C0C0C0" transform="rotate(-18 18 24)" />
      <ellipse cx="38" cy="11" rx="9" ry="12" fill="#C0C0C0" transform="rotate(-5 38 11)" />
      <ellipse cx="60" cy="11" rx="9" ry="12" fill="#C0C0C0" transform="rotate(5 60 11)" />
      <ellipse cx="80" cy="24" rx="9" ry="12" fill="#C0C0C0" transform="rotate(18 80 24)" />
      {/* main pad */}
      <path
        d="M14 56C14 41 28 34 50 34C72 34 86 41 86 56C86 71 70 84 50 84C30 84 14 71 14 56Z"
        fill="#C0C0C0"
      />
    </svg>
  );
}

/* ─── FAQ data ───────────────────────────────────────────────────────── */
const items = [
  {
    q: '1. How can I find my closest Pet Square store?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    q: '2. Can I purchase a Pet Square gift voucher online?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    q: '3. Is my +Plus Club Membership linked to the online store, and will I accrue any points for shopping online?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

/* ─── Single accordion item ─────────────────────────────────────────── */
function FaqItem({ q, a, isOpen, onClick }) {
  return (
    <div className="w-full rounded-[18px] bg-white px-5 py-5 shadow-[0px_4px_16px_rgba(0,0,0,0.08)] md:px-[39px]">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <span className="text-[16px] font-medium leading-[22px] text-ink md:text-[20px] md:leading-[1.35]">{q}</span>

        {/* toggle circle */}
        <div
          className={`flex h-11 w-11 flex-none items-center justify-center rounded-full transition-colors md:h-[51px] md:w-[51px] ${
            isOpen ? 'bg-ink' : 'border-2 border-ink bg-white'
          }`}
        >
          {isOpen ? (
            <ChevronDown aria-hidden size={20} strokeWidth={2} className="text-white" />
          ) : (
            <ChevronRight aria-hidden size={20} strokeWidth={2} className="text-ink" />
          )}
        </div>
      </button>

      {isOpen && (
        <p className="mt-[10px] text-[14px] font-normal leading-6 text-[rgba(28,28,28,0.5)] md:text-[18px] md:leading-[30px]">
          {a}
        </p>
      )}
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────── */
export function FaqBlock() {
  const [faqItems, setFaqItems] = useState(items);
  const [openIdx, setOpenIdx] = useState(2);

  useEffect(() => {
    fetchFaqs('home')
      .then((rows) => {
        if (Array.isArray(rows) && rows.length > 0) {
          const remote = rows.map((row, index) => ({
            q: `${index + 1}. ${row.question || ''}`,
            a: row.answer || '',
          }));
          const seen = new Set(remote.map((item) => item.q.replace(/^\d+\.\s*/, '')));
          const fill = items
            .filter((item) => !seen.has(item.q.replace(/^\d+\.\s*/, '')))
            .map((item, index) => ({
              ...item,
              q: `${remote.length + index + 1}. ${item.q.replace(/^\d+\.\s*/, '')}`,
            }));
          setFaqItems(
            [...remote, ...fill].slice(0, 4)
          );
          setOpenIdx(0);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="relative overflow-hidden bg-surface py-16 md:py-24">

      {/* Decorative paws — right margin (near heading) */}
      <PawPrint size={52} className="absolute right-8 top-8 opacity-70 md:right-[148px] md:top-[38px]" />
      <PawPrint size={42} className="absolute right-2 top-[70px] opacity-70 md:right-[108px] md:top-[82px]" />

      {/* Decorative paws — left margin (beside items) */}
      <PawPrint size={50} className="hidden md:absolute md:left-[104px] md:top-[296px] md:block" />
      <PawPrint size={44} className="hidden md:absolute md:left-[112px] md:top-[356px] md:block" />
      <PawPrint size={38} className="hidden md:absolute md:left-[122px] md:top-[408px] md:block" />

      <div className="mx-auto max-w-[1440px] px-4 md:px-12">
        {/* 896 px content column */}
        <div className="mx-auto flex max-w-[896px] flex-col gap-[46px]">

          {/* Heading */}
          <h2 className="text-center text-[32px] font-semibold leading-[36px] text-ink md:text-[40px] md:leading-[44px]">
            FAQ&apos;s
          </h2>

          {/* Accordion list */}
          <div className="flex flex-col gap-[29px]">
            {faqItems.map((item, idx) => (
              <FaqItem
                key={item.q}
                q={item.q}
                a={item.a}
                isOpen={openIdx === idx}
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              />
            ))}
          </div>

          {/* View all link */}
          <div className="flex justify-center">
            <Link
              to="/faq"
              className="flex items-center gap-[8px] text-[13px] font-semibold leading-[16px] text-ink transition hover:text-black"
            >
              <span className="underline underline-offset-2">View all</span>
              <ArrowUpRight aria-hidden size={13} strokeWidth={1.8} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
