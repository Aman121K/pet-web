import { useEffect, useRef, useState } from 'react';
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
    'relative pb-3 text-[15px] font-medium tracking-tight transition-colors',
    isActive ? 'text-ink' : 'text-ink/70 hover:text-ink',
  ].join(' ');

const navUnderline = (isActive) =>
  isActive ? (
    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-ink" />
  ) : null;

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
        <div className="mx-auto flex h-[78px] max-w-[1200px] items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Pet SQUARE"
              className="h-10 w-10 rounded-md"
            />
            <span className="text-[20px] font-semibold tracking-[0.22em] text-ink">
              PET SQUARE
            </span>
          </Link>

          <div className="mx-auto hidden min-w-0 max-w-[520px] flex-1 md:flex">
            <div className="flex w-full items-center">
              <input
                type="search"
                placeholder="Search..."
                className="h-10 w-full rounded-none rounded-l-md border border-line bg-white px-3 text-[14px] text-ink placeholder:text-muted/80 outline-none focus:border-ink/25"
              />
              <button
                type="button"
                className="inline-flex h-10 w-11 items-center justify-center rounded-none rounded-r-md bg-ink text-white"
                aria-label="Search"
              >
                <IconSearch className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center border border-line bg-white text-ink transition hover:bg-surface"
              aria-label="Cart"
            >
              <IconCart className="h-6 w-6" />
            </button>
            <Link
              to="/create-account"
              className="hidden h-10 items-center gap-2 border border-line bg-white px-3 text-[12px] font-semibold tracking-wide text-ink transition hover:bg-surface sm:inline-flex"
            >
              <IconUser className="h-5 w-5" />
              SIGN IN / REGISTER
            </Link>
            <Link
              to="/create-account"
              className="inline-flex h-10 w-10 items-center justify-center border border-line bg-white text-ink transition hover:bg-surface sm:hidden"
              aria-label="Sign in"
            >
              <IconUser className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-line/80">
        <nav className="mx-auto flex max-w-[1200px] items-center justify-center gap-x-8 px-4 py-0 sm:px-6 lg:gap-x-10 lg:px-8">
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
              className="relative flex items-center gap-1 pb-3 text-[15px] font-medium tracking-tight text-ink/70 transition hover:text-ink"
              aria-expanded={shopOpen}
            >
              Shop
              <ChevronDown
                className={`h-4 w-4 transition ${shopOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {shopOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-lg border border-line bg-white py-2 shadow-modal">
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
                FAQ
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

      <div className="border-b border-line md:hidden">
        <div className="mx-auto max-w-[1200px] px-4 py-3 sm:px-6">
          <div className="flex w-full items-center">
            <input
              type="search"
              placeholder="Search..."
              className="h-10 w-full rounded-none rounded-l-md border border-line bg-white px-3 text-[14px] outline-none focus:border-ink/25"
            />
            <button
              type="button"
              className="inline-flex h-10 w-11 items-center justify-center rounded-none rounded-r-md bg-ink text-white"
              aria-label="Search"
            >
              <IconSearch className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
