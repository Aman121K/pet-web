import { useEffect, useRef, useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

function IconSearch(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCart(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M6 6h15l-1.5 9h-12L6 6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M6 6 5 3H2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9.5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17.5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconUser(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 21a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDown(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const navLinkClass = ({ isActive }) =>
  [
    'relative flex h-[53px] items-center text-[12px] font-normal leading-[14px] tracking-normal transition-colors',
    isActive ? 'text-ink' : 'text-ink/70 hover:text-ink',
  ].join(' ');

const navUnderline = (isActive) =>
  isActive ? (
    <span className="absolute bottom-[13px] left-0 right-0 h-[1px] bg-ink" />
  ) : null;

function HeaderSearch({ className = '' }) {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="search"
        placeholder="Search..."
        className="h-8 w-full rounded-none rounded-l-[2px] border border-line bg-white px-3 text-[12px] font-normal leading-[14px] tracking-normal text-ink outline-none placeholder:text-[#9d9d9d] focus:border-ink/30"
      />
      <button
        type="button"
        className="inline-flex h-8 w-9 items-center justify-center rounded-none rounded-r-[2px] bg-ink text-white transition hover:bg-black/90"
        aria-label="Search"
      >
        <IconSearch className="h-[15px] w-[15px]" />
      </button>
    </div>
  );
}

function HeaderFeature({ href, icon, title, subtitle, className = '' }) {
  return (
    <Link
      to={href}
      className={`flex items-center gap-4 text-ink transition hover:text-ink/70 ${className}`}
    >
      <img src={icon} alt="" className="h-9 w-9 shrink-0 object-contain" />
      <div className="leading-none">
        <p className="text-[12px] font-medium leading-[14px] tracking-normal text-ink">
          {title}
        </p>
        <p className="mt-[2px] text-[12px] font-normal leading-[14px] tracking-normal text-[#6A6A6A]">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}

export function Header() {
  const [shopOpen, setShopOpen] = useState(false);
  const shopRef = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (shopRef.current && !shopRef.current.contains(e.target)) {
        setShopOpen(false);
      }
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="border-b border-line">
        <div className="relative mx-auto flex h-[80px] max-w-[1344px] items-center gap-3 px-4 pr-[136px] md:h-[82px] md:gap-4 md:px-6 xl:px-0">
          <Link to="/" className="flex min-w-0 shrink items-center gap-2 md:gap-3">
            <img
              src={logo}
              alt="Pet SQUARE"
              className="h-6 w-6 shrink-0 rounded-[2px] md:h-8 md:w-8"
            />
            <span className="whitespace-nowrap text-[18px] font-medium leading-[22px] tracking-normal text-ink md:text-[24px] md:leading-[29px]">
              PET SQUARE
            </span>
          </Link>

          <HeaderSearch className="ml-auto hidden w-[255px] md:flex" />

          <div className="ml-auto hidden items-center gap-2 md:flex">
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center border border-line bg-white text-ink transition hover:bg-surface"
              aria-label="Cart"
            >
              <IconCart className="h-[18px] w-[18px]" />
            </button>
            <Link
              to="/create-account"
              className="hidden h-8 items-center gap-2 border border-line bg-white px-3 text-[11px] font-semibold leading-[13px] tracking-normal text-ink transition hover:bg-surface sm:inline-flex"
            >
              <IconUser className="h-4 w-4" />
              SIGN IN / REGISTER
            </Link>
            <Link
              to="/create-account"
              className="inline-flex h-8 w-8 items-center justify-center border border-line bg-white text-ink transition hover:bg-surface sm:hidden"
              aria-label="Sign in"
            >
              <IconUser className="h-[18px] w-[18px]" />
            </Link>
          </div>

          <div
            className="items-center gap-1 md:hidden"
            style={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              width: 112,
            }}
          >
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center bg-ink text-white"
              aria-label="Search"
            >
              <IconSearch className="h-5 w-5" />
            </button>
            <Link
              to="/create-account"
              className="inline-flex h-10 w-10 items-center justify-center border border-ink bg-white text-ink"
              aria-label="Sign in"
            >
              <IconUser className="h-5 w-5" />
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-6 items-center justify-center bg-white text-ink"
              aria-label="Open menu"
            >
              <Menu aria-hidden size={25} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden border-b border-line md:block">
        <nav className="mx-auto flex h-[53px] max-w-[1344px] items-center justify-center gap-x-[45px] px-4 sm:px-6 xl:px-0">
          <NavLink to="/" end className={navLinkClass}>
            {(p) => (
              <>
                Home
                {navUnderline(p.isActive)}
              </>
            )}
          </NavLink>

          <div className="relative" ref={shopRef}>
            <button
              type="button"
              onClick={() => setShopOpen((v) => !v)}
              className="relative flex h-[53px] items-center gap-1 text-[12px] font-normal leading-[14px] tracking-normal text-ink/70 transition hover:text-ink"
              aria-expanded={shopOpen}
            >
              Shop
              <ChevronDown
                className={`h-4 w-4 transition ${shopOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {shopOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 min-w-[190px] rounded-[2px] border border-line bg-white py-2 shadow-modal">
                <Link
                  to="/shop"
                  className="block px-4 py-2 text-[14px] text-ink hover:bg-surface"
                  onClick={() => setShopOpen(false)}
                >
                  All products
                </Link>
                <Link
                  to="/shop"
                  className="block px-4 py-2 text-[14px] text-ink hover:bg-surface"
                  onClick={() => setShopOpen(false)}
                >
                  New arrivals
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/about" className={navLinkClass}>
            {(p) => (
              <>
                About us
                {navUnderline(p.isActive)}
              </>
            )}
          </NavLink>
          <NavLink to="/blog" className={navLinkClass}>
            {(p) => (
              <>
                Blog
                {navUnderline(p.isActive)}
              </>
            )}
          </NavLink>
          <NavLink to="/faq" className={navLinkClass}>
            {(p) => (
              <>
                FAQ's
                {navUnderline(p.isActive)}
              </>
            )}
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            {(p) => (
              <>
                Contact us
                {navUnderline(p.isActive)}
              </>
            )}
          </NavLink>
        </nav>
      </div>

      <div className="hidden h-[96px] border-b border-line bg-white md:block">
        <div className="mx-auto grid h-full max-w-[1344px] grid-cols-3 items-center px-4 sm:px-6 xl:px-0">
          <HeaderFeature
            href="/checkout"
            icon="/safe-secure.svg"
            title="Safe & Secure Shopping"
            subtitle="Your best choice"
          />
          <HeaderFeature
            href="/shop"
            icon="/next-day.svg"
            title="Next day Delivery"
            subtitle="Worry free returns"
            className="justify-center"
          />
          <HeaderFeature
            href="/shop"
            icon="/verified-icon.svg"
            title="100% verified CBD"
            subtitle="5 stars reviews products"
            className="justify-end"
          />
        </div>
      </div>

      <div className="border-b border-line bg-white md:hidden">
        <div className="flex h-[61px] items-center overflow-hidden">
          <div className="flex min-w-max items-center gap-10">
            <HeaderFeature
              href="/checkout"
              icon="/safe-secure.svg"
              title="Safe & Secure Shopping"
              subtitle="Your best choice"
              className="-ml-10 opacity-30"
            />
            <HeaderFeature
              href="/shop"
              icon="/next-day.svg"
              title="Next day Delivery"
              subtitle="Worry free returns"
            />
            <HeaderFeature
              href="/shop"
              icon="/verified-icon.svg"
              title="100% verified CBD"
              subtitle="5 stars reviews products"
              className="opacity-30"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
