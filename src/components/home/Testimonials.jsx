import { useState, useEffect, useCallback, useRef } from 'react';

/* ─── Data ──────────────────────────────────────────────────────────────── */
const testimonials = [
  {
    stars: 5,
    title: 'Exceptional!',
    text: 'Pet Square has the best selection of pet food. My dog loves it!',
    author: 'John D.',
  },
  {
    stars: 5,
    title: 'Amazing products!',
    text: 'My dog absolutely loves his new toys. Great customer service and quick delivery. Will definitely order again.',
    author: 'Sarah M.',
  },
  {
    stars: 5,
    title: 'Highly recommend',
    text: 'The food quality is outstanding and my cat is much healthier since switching. Very happy with the results.',
    author: 'Michael R.',
  },
  {
    stars: 5,
    title: 'Great quality!',
    text: 'Fast shipping and great quality. The packaging was neat and the product matched exactly what was described.',
    author: 'Emily T.',
  },
  {
    stars: 5,
    title: 'Love this store!',
    text: 'Best pet store online. My cats have never been happier. I love how easy it is to reorder their favourites.',
    author: 'Priya K.',
  },
  {
    stars: 5,
    title: 'Superb experience',
    text: 'The variety of products is fantastic and the prices are unbeatable. My pup is thriving on the new food!',
    author: 'David L.',
  },
];

/* ─── Inline keyframes (immune to Tailwind JIT purging) ─────────────────── */
const ANIM_DURATION = 420; // ms
const KEYFRAMES = `
  @keyframes t-in-r  { from { opacity:0; transform:translateX(68px)  } to { opacity:1; transform:translateX(0) } }
  @keyframes t-in-l  { from { opacity:0; transform:translateX(-68px) } to { opacity:1; transform:translateX(0) } }
  @keyframes t-out-l { from { opacity:1; transform:translateX(0) } to { opacity:0; transform:translateX(-68px) } }
  @keyframes t-out-r { from { opacity:1; transform:translateX(0) } to { opacity:0; transform:translateX(68px)  } }
  .t-in-r  { animation: t-in-r  ${ANIM_DURATION}ms cubic-bezier(0.4,0,0.2,1) both; }
  .t-in-l  { animation: t-in-l  ${ANIM_DURATION}ms cubic-bezier(0.4,0,0.2,1) both; }
  .t-out-l { animation: t-out-l ${ANIM_DURATION}ms cubic-bezier(0.4,0,0.2,1) both; }
  .t-out-r { animation: t-out-r ${ANIM_DURATION}ms cubic-bezier(0.4,0,0.2,1) both; }
`;

const N = testimonials.length;
const AUTO_SLIDE_MS = 3500;

/* ─── Stars ─────────────────────────────────────────────────────────────── */
function Stars({ count }) {
  return (
    <div className="flex gap-[5px]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          aria-hidden
          fill={i < count ? '#5CAA55' : 'none'}
          stroke={i < count ? '#5CAA55' : '#D1D5DB'}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Card ───────────────────────────────────────────────────────────────── */
function TestimonialCard({ stars, title, text, author, active = false }) {
  return (
    <article
      className={`flex w-full max-w-[345px] flex-none flex-col gap-4 rounded-[10px] px-6 py-[30px] md:w-[345px] ${
        active
          ? 'bg-[#F5F5F5] shadow-[6px_6px_0px_rgba(0,0,0,0.25)]'
          : 'bg-white border border-line'
      }`}
    >
      <Stars count={stars} />
      <h3 className="text-[18px] font-medium leading-[22px] text-ink md:text-[20px]">{title}</h3>
      <p className="text-[15px] font-normal leading-6 text-[rgba(28,28,28,0.5)] md:text-[18px] md:leading-[30px]">{text}</p>
      <p className="text-[14px] font-medium leading-[22px] text-muted md:text-[16px] md:leading-[24px]">By {author}</p>
    </article>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
export function Testimonials() {
  /* current = index of the LEFT (inactive) card currently displayed */
  const [current, setCurrent] = useState(0);

  /*
   * slide = { idx: number, dir: 'right' | 'left' } while a transition
   * is in flight, null at rest.
   */
  const [slide, setSlide] = useState(null);

  /* Refs so callbacks never go stale */
  const currentRef  = useRef(0);
  const busyRef     = useRef(false);
  const timerRef    = useRef(null);

  /* ── navigate ─────────────────────────────────────────────────────────── */
  const goTo = useCallback((target) => {
    if (busyRef.current) return;

    const cur = currentRef.current;
    let idx, dir;

    if (target === 'next') {
      idx = (cur + 1) % N;
      dir = 'right';
    } else if (target === 'prev') {
      idx = (cur - 1 + N) % N;
      dir = 'left';
    } else {
      idx = target;
      if (idx === cur) return;
      const fwd = (idx - cur + N) % N;
      const bwd = (cur - idx + N) % N;
      dir = fwd <= bwd ? 'right' : 'left';
    }

    busyRef.current = true;
    setSlide({ idx, dir });
  }, []);

  /* Settle after animation completes */
  useEffect(() => {
    if (!slide) return;
    const t = setTimeout(() => {
      currentRef.current = slide.idx;
      setCurrent(slide.idx);
      setSlide(null);
      busyRef.current = false;
    }, ANIM_DURATION);
    return () => clearTimeout(t);
  }, [slide]);

  /* ── auto-advance timer ───────────────────────────────────────────────── */
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goTo('next'), AUTO_SLIDE_MS);
  }, [goTo]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  /* ── dot click ───────────────────────────────────────────────────────── */
  const handleDotClick = (i) => {
    goTo(i);
    startTimer(); // reset the countdown
  };

  /* ── render helpers ──────────────────────────────────────────────────── */
  /* Pair currently on screen */
  const curA = testimonials[current];
  const curB = testimonials[(current + 1) % N];

  /* Pair animating in */
  const nxtA = slide ? testimonials[slide.idx] : null;
  const nxtB = slide ? testimonials[(slide.idx + 1) % N] : null;

  /* CSS classes */
  const outCls = slide?.dir === 'right' ? 't-out-l' : 't-out-r';
  const inCls  = slide?.dir === 'right' ? 't-in-r'  : 't-in-l';

  /* Active dot index: during a slide, preview the destination */
  const activeDot = slide ? slide.idx : current;

  return (
    <section className="bg-white py-16 md:py-24">
      <style>{KEYFRAMES}</style>

      <div className="mx-auto max-w-[1440px] px-4 md:px-16">
        <div className="flex flex-col gap-9 md:gap-[46px]">

          {/* Heading */}
          <h2 className="w-full text-center text-[24px] font-semibold leading-[31px] text-ink md:text-[40px] md:leading-[44px]">
            What are customers saying?
          </h2>

          {/* Content row */}
          <div className="grid items-end gap-8 xl:flex">

            {/* Left: cards + dots */}
            <div className="mx-auto flex w-full max-w-[345px] flex-col gap-3 md:max-w-[702px] xl:mx-0">

              {/*
               * Card stage: overflow-hidden clips cards as they fly in/out.
               * pr-[10px] pb-[10px] gives the active card's drop-shadow
               * (6px right + 6px bottom) room to render without being clipped.
               * The outgoing row is in normal flow (establishes height).
               * The incoming row is absolutely positioned over it.
               */}
              <div className="relative overflow-hidden pr-[10px] pb-[10px]">
                {/* Outgoing pair */}
                <div className={`flex gap-3 ${slide ? outCls : ''}`}>
                  <TestimonialCard {...curA} active={false} />
                  <TestimonialCard {...curB} active />
                </div>

                {/* Incoming pair (only while animating) */}
                {slide && (
                  <div className={`absolute inset-0 flex gap-3 ${inCls}`}>
                    <TestimonialCard {...nxtA} active={false} />
                    <TestimonialCard {...nxtB} active />
                  </div>
                )}
              </div>

              {/* Dots — active dot morphs into a pill */}
              <div className="flex items-center justify-center gap-[9px] md:justify-start">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => handleDotClick(i)}
                    style={{
                      height: 10,
                      width: activeDot === i ? 28 : 10,
                      borderRadius: 9999,
                      backgroundColor: activeDot === i ? '#1C1C1C' : 'transparent',
                      border: activeDot === i ? 'none' : '1px solid rgba(28,28,28,0.3)',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1), background-color 0.2s ease',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right: pet image */}
            <img
              src="/testimonials.png"
              alt="Happy pets"
              className="mx-auto h-auto w-full max-w-[486px] object-contain xl:ml-auto xl:h-[309px] xl:flex-1"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
