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
import tileDog from '../assets/pets/home/tile-dog.jpg';
import tileCat from '../assets/pets/home/tile-cat.jpg';
import tileFish from '../assets/pets/home/tile-fish.jpg';
import blog1 from '../assets/pets/home/blog-1.jpg';
import pick1 from '../assets/pets/home/pick-1.jpg';

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
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
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

  useEffect(() => {
    function onCount(e) {
      setCartCount(Number(e?.detail?.count || 0));
    }
    window.addEventListener(COUNT_EVENT, onCount);
    try {
      const raw = window.localStorage.getItem('pet-cart-items');
      if (raw) {
        const items = JSON.parse(raw);
        const count = items.reduce((sum, item) => sum + Number(item.qty || 0), 0);
        setCartCount(count);
      }
    } catch {}
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

            <nav className="mt-8 px-5">
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
                  {[
                    { name: 'Dog', image: tileDog },
                    { name: 'Cat', image: tileCat, active: true },
                    { name: 'Food' },
                    { name: 'Toys', active: true },
                    { name: 'Grooming' },
                    { name: 'Clothing' },
                    { name: 'Fish', image: tileFish },
                    { name: 'Bird', image: blog1 },
                    { name: 'Chicken', image: pick1 },
                  ].map((row) => (
                    <Link
                      key={row.name}
                      to="/shop"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileShopOpen(false);
                      }}
                      className={`flex h-14 items-center border-b border-[#e5e5e5] px-3 text-[14px] ${
                        row.active ? 'bg-[#1c1c1c] text-white' : 'bg-white text-[#666]'
                      }`}
                    >
                      {row.image ? (
                        <img src={row.image} alt="" className="mr-3 h-[40px] w-[64px] object-cover" />
                      ) : (
                        <span className="mr-3 inline-block w-[64px]" />
                      )}
                      <span className="flex-1">{row.name}</span>
                      {row.name === 'Cat' ? <span className="text-[24px]">→</span> : null}
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
