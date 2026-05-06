import { Link } from 'react-router-dom';

function SocialIcon({ label }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line bg-white text-[12px] font-semibold text-ink/70">
      {label}
    </span>
  );
}

function PaymentPill({ label }) {
  return (
    <span className="inline-flex h-7 items-center rounded-md border border-line bg-white px-2 text-[11px] font-semibold text-ink/70">
      {label}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[14px] font-semibold text-ink">Contact Us</p>
            <div className="mt-4 space-y-2 text-[13px] leading-relaxed text-muted">
              <p>Pet Square Store</p>
              <p>123 Pet Street, City</p>
              <p className="text-ink/80">+1 (000) 000-0000</p>
              <p className="text-ink/80">support@petsquare.example</p>
            </div>
            <p className="mt-5 text-[13px] font-medium text-ink">Follow Us</p>
            <div className="mt-3 flex items-center gap-2">
              <SocialIcon label="f" />
              <SocialIcon label="in" />
              <SocialIcon label="ig" />
              <SocialIcon label="yt" />
            </div>
          </div>

          <div>
            <p className="text-[14px] font-semibold text-ink">Navigate</p>
            <ul className="mt-4 space-y-2 text-[13px] text-muted">
              <li>
                <Link to="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-ink">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-ink">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ink">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[14px] font-semibold text-ink">Information</p>
            <ul className="mt-4 space-y-2 text-[13px] text-muted">
              <li>
                <Link to="/about" className="hover:text-ink">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-ink">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-ink">
                  Shipping policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ink">
                  Returns policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[14px] font-semibold text-ink">Categories</p>
            <ul className="mt-4 space-y-2 text-[13px] text-muted">
              <li>
                <Link to="/shop" className="hover:text-ink">
                  Dog food
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-ink">
                  Cat food
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-ink">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-ink">
                  Beds &amp; toys
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-muted">
            &copy; {new Date().getFullYear()} Pet SQUARE. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentPill label="VISA" />
            <PaymentPill label="MC" />
            <PaymentPill label="AMEX" />
            <PaymentPill label="PayPal" />
          </div>
        </div>
      </div>
    </footer>
  );
}

