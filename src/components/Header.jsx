import { useEffect, useRef, useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { openCartDrawer } from './CartDrawer.jsx';
import { COUNT_EVENT } from './CartDrawer.jsx';
import logoIcon from '../assets/Frame 29.png';
import logoIcon2x from '../assets/Frame 29@2x.png';
import logoIcon3x from '../assets/Frame 29@3x.png';
import logoWordmark from '../assets/Pet Square.png';
import logoWordmark2x from '../assets/Pet Square@2x.png';
import logoWordmark3x from '../assets/Pet Square@3x.png';
import { shopCategories } from '../data/shopCategories.js';

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
    'relative flex h-[64px] items-center text-[16px] font-semibold leading-[20px] tracking-normal transition-colors',
    isActive ? 'text-ink' : 'text-ink/70 hover:text-ink',
  ].join(' ');

const navUnderline = (isActive) =>
  isActive ? (
    <span className="absolute bottom-[17px] left-0 right-0 h-[2px] bg-ink" />
  ) : null;

function getStoredCartCount() {
  try {
    const raw = window.localStorage.getItem('pet-cart-items');
    if (!raw) return 0;
    const items = JSON.parse(raw);
    return items.reduce((sum, item) => sum + Number(item.qty || 0), 0);
  } catch {
    return 0;
  }
}

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
  const [activeShopCategory, setActiveShopCategory] = useState('cat');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [cartCount, setCartCount] = useState(getStoredCartCount);
  const shopRef = useRef(null);
  const activeMegaCategory =
    shopCategories.find((category) => category.key === activeShopCategory) || shopCategories[1];

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

  useEffect(() => {
    function onCount(e) {
      setCartCount(Number(e?.detail?.count || 0));
    }
    window.addEventListener(COUNT_EVENT, onCount);
    return () => window.removeEventListener(COUNT_EVENT, onCount);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="border-b border-line">
        <div className="relative mx-auto flex h-[72px] max-w-[1344px] items-center gap-3 px-4 sm:px-6 xl:px-0">
          <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={() => setMobileOpen(false)}>
            <img
              src={logoIcon}
              alt="Pet SQUARE icon"
              srcSet={`${logoIcon2x} 2x, ${logoIcon3x} 3x`}
              className="h-[26px] w-[26px] shrink-0 sm:h-[30px] sm:w-[30px] md:h-[34px] md:w-[34px]"
            />
            <img
              src={logoWordmark}
              alt="Pet SQUARE"
              srcSet={`${logoWordmark2x} 2x, ${logoWordmark3x} 3x`}
              className="h-[18px] w-auto shrink-0 sm:h-[20px] md:h-[24px]"
            />
          </Link>

          <HeaderSearch className="ml-auto hidden w-[255px] md:flex" />

          <div className="ml-auto hidden items-center gap-2 md:ml-0 md:flex">
            <button
              type="button"
              className="relative inline-flex h-8 w-8 items-center justify-center border border-ink bg-ink text-white transition hover:bg-[#2a2a2a]"
              aria-label="Cart"
              onClick={openCartDrawer}
            >
              <IconCart className="h-[18px] w-[18px]" />
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full border border-ink bg-white px-1 text-[10px] font-semibold text-ink">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              ) : null}
            </button>
            <Link
              to="/create-account"
              className="hidden h-8 items-center gap-2 border border-line bg-white px-3 text-[11px] font-semibold leading-[13px] tracking-normal text-ink transition hover:bg-surface sm:inline-flex"
            >
              <img src="/user--avatar 1.svg" alt="" className="h-4 w-4 object-contain" />
              SIGN IN / REGISTER
            </Link>
            <Link
              to="/create-account"
              className="inline-flex h-8 w-8 items-center justify-center border border-line bg-white text-ink transition hover:bg-surface sm:hidden"
              aria-label="Sign in"
            >
              <img src="/user--avatar 1.svg" alt="" className="h-[18px] w-[18px] object-contain" />
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-1 md:hidden">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center bg-ink text-white"
              aria-label="Search"
            >
              <IconSearch className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center bg-white text-ink"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <IconClose className="h-5 w-5" />
              ) : (
                <Menu aria-hidden size={25} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden border-b border-line lg:block">
        <nav className="mx-auto flex h-[64px] max-w-[1344px] items-center justify-center gap-x-[52px] px-4 sm:px-6 xl:px-0">
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
              className="relative flex h-[64px] items-center gap-1.5 text-[16px] font-semibold leading-[20px] tracking-normal text-ink/70 transition hover:text-ink"
              aria-expanded={shopOpen}
            >
              Shop
              <ChevronDown
                className={`h-4 w-4 transition ${shopOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {shopOpen && (
              <div className="shop-mega-menu fixed left-1/2 top-[137px] z-50 max-h-[calc(100vh-160px)] w-[min(1180px,calc(100vw-32px))] -translate-x-1/2 overflow-y-auto border border-line bg-white shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
                <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
                  <aside className="border-b border-line bg-[#fbfbfb] p-5 lg:border-b-0 lg:border-r">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#29748a]">Shop All</p>
                    <div className="mt-4 space-y-3">
                      {shopCategories.slice(1, 6).map((category) => (
                        <Link
                          key={category.key}
                          to={`/shop?category=${category.key}`}
                          onMouseEnter={() => setActiveShopCategory(category.key)}
                          onFocus={() => setActiveShopCategory(category.key)}
                          onClick={() => setShopOpen(false)}
                          className={`group flex min-h-[86px] overflow-hidden border text-left transition ${
                            activeMegaCategory.key === category.key
                              ? 'border-[#f3b5b5] bg-[#fff1f1]'
                              : 'border-line bg-white hover:border-[#f3b5b5] hover:bg-[#fff7f7]'
                          }`}
                        >
                          <div className="flex min-w-0 flex-1 flex-col justify-center px-4">
                            <span className="text-[16px] font-semibold leading-5 text-[#9d1f1f]">
                              {category.label}
                            </span>
                            <span className="mt-2 text-[13px] font-semibold uppercase tracking-[0.06em] text-ink">
                              {category.eyebrow}
                              <span className="ml-2 text-[#9d1f1f] transition group-hover:translate-x-1">›</span>
                            </span>
                          </div>
                          <img src={category.image} alt="" className="h-[86px] w-[96px] object-cover" />
                        </Link>
                      ))}
                    </div>
                  </aside>

                  <div className="grid gap-x-10 gap-y-8 p-6 lg:grid-cols-3">
                    {activeMegaCategory.groups.map((group) => (
                      <section key={group.title}>
                        <h3 className="border-b border-line pb-3 text-[15px] font-semibold text-[#29748a]">
                          {group.title}
                        </h3>
                        <div className="mt-4 space-y-3">
                          {group.items.map((item) => (
                            <Link
                              key={item}
                              to={`/shop?category=${activeMegaCategory.key}&subcategory=${encodeURIComponent(item)}`}
                              onClick={() => setShopOpen(false)}
                              className="block text-[14px] leading-5 text-ink/80 transition hover:text-[#b42323]"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
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
        <div className="fixed inset-0 z-[70] bg-black text-white md:hidden">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-end px-4 pt-6">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileShopOpen(false);
                }}
                className="inline-flex h-10 w-10 items-center justify-center text-white"
                aria-label="Close menu"
              >
                <IconClose className="h-7 w-7" />
              </button>
            </div>

            <nav className="mobile-menu-scroll mt-8 overflow-y-auto px-5 pb-28">
              <NavLink
                to="/"
                end
                onClick={() => {
                  setMobileOpen(false);
                  setMobileShopOpen(false);
                }}
                className="block py-3 text-[36px] font-normal leading-[1.12] text-white sm:text-[40px]"
              >
                Home
              </NavLink>

              <button
                type="button"
                onClick={() => setMobileShopOpen((v) => !v)}
                className="flex w-full items-center justify-between py-3 text-left text-[36px] font-normal leading-[1.12] text-white sm:text-[40px]"
              >
                <span>Shop</span>
                <ChevronDown className={`h-8 w-8 transition ${mobileShopOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileShopOpen ? (
                <div className="mt-2 overflow-hidden border border-[#d8d8d8] bg-white text-ink">
                  {shopCategories.slice(1).map((row) => (
                    <Link
                      key={row.key}
                      to={`/shop?category=${row.key}`}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileShopOpen(false);
                      }}
                      className="flex h-16 items-center border-b border-[#e5e5e5] bg-white px-3 text-[14px] text-[#333] transition hover:bg-[#fff1f1]"
                    >
                      {row.image ? (
                        <img src={row.image} alt="" className="mr-3 h-[46px] w-[70px] object-cover" />
                      ) : (
                        <span className="mr-3 inline-block w-[64px]" />
                      )}
                      <span className="flex-1 font-semibold">{row.label}</span>
                      <span className="text-[24px] text-[#b42323]">›</span>
                    </Link>
                  ))}
                </div>
              ) : null}

              {navItems.slice(2).map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileShopOpen(false);
                  }}
                  className="block py-3 text-[36px] font-normal leading-[1.12] text-white sm:text-[40px]"
                >
                  {item.label.replace("FAQ's", 'FAQ')}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      ) : null}

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white px-4 py-3 md:hidden">
        <div className="mx-auto flex max-w-[360px] items-center gap-3">
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center bg-ink text-white"
            aria-label="Cart"
            onClick={openCartDrawer}
          >
            <IconCart className="h-[18px] w-[18px]" />
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-white px-1 text-[10px] font-semibold text-ink">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            ) : null}
          </button>
          <Link
            to="/create-account"
            className="inline-flex h-10 flex-1 items-center justify-center gap-2 border border-ink bg-white px-3 text-[12px] font-semibold leading-[1] text-ink"
          >
            <img src="/user--avatar 1.svg" alt="" className="h-5 w-5 object-contain" />
            <span>SIGN IN / REGISTER</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
