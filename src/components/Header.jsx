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

function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About us' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: "FAQ's" },
  { to: '/contact', label: 'Contact us' },
];

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

export function Header() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="border-b border-line">
        <div className="mx-auto flex h-[72px] max-w-[1344px] items-center gap-3 px-4 sm:px-6 xl:px-0">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center border border-line text-ink lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>

          <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={() => setMobileOpen(false)}>
            <img
              src={logo}
              alt="Pet SQUARE"
              className="h-8 w-8 rounded-[2px]"
            />
            <span className="text-[20px] font-medium leading-[1.1] tracking-normal text-ink sm:text-[24px]">
              PET SQUARE
            </span>
          </Link>

          <HeaderSearch className="ml-auto hidden w-[255px] md:flex" />

          <div className="ml-auto flex items-center gap-2 md:ml-0">
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
        </div>
      </div>

      <div className="hidden border-b border-line lg:block">
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

          {navItems.slice(2).map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {(p) => (
                <>
                  {item.label}
                  {navUnderline(p.isActive)}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {mobileOpen ? (
        <div className="absolute inset-x-0 top-[72px] z-50 border-b border-line bg-white shadow-lg lg:hidden">
          <div className="mx-auto max-w-[1344px] px-4 py-4 sm:px-6">
            <HeaderSearch className="mb-4" />
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-sm px-3 py-2 text-[14px] ${isActive ? 'bg-surface text-ink' : 'text-ink/75 hover:bg-surface hover:text-ink'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
