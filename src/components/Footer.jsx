import { Link } from 'react-router-dom';
import {
  contactInfo,
  socialLinks,
  navLinks,
  infoLinks,
  categoryLinks,
  paymentMethods,
  copyright,
} from '../data/footerData.js';

/* ─── Contact icons ──────────────────────────────────────────────────────── */
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="mt-[2px] shrink-0">
      <path
        d="M12.8333 10.48V12.23C12.8339 12.3951 12.8 12.5585 12.7337 12.7097C12.6675 12.8608 12.5703 12.9965 12.4484 13.1082C12.3265 13.2199 12.1826 13.3051 12.026 13.3582C11.8694 13.4112 11.7037 13.4309 11.5392 13.4158C9.68341 13.2131 7.90131 12.5763 6.33586 11.5583C4.88102 10.6289 3.64338 9.3912 2.71394 7.93633C1.69272 6.36395 1.0558 4.5731 0.856693 2.70833C0.841685 2.54427 0.861196 2.37893 0.914056 2.22262C0.966917 2.06631 1.05194 1.92256 1.16297 1.80083C1.27399 1.67909 1.40861 1.58207 1.5591 1.51596C1.70959 1.44984 1.87269 1.41609 2.03752 1.41667H3.78752C4.07655 1.41383 4.35687 1.51595 4.57797 1.70433C4.79907 1.89272 4.94605 2.15483 4.99252 2.44167C5.07897 3.01459 5.22992 3.57591 5.44169 4.11417C5.51957 4.31475 5.5374 4.53349 5.49305 4.74403C5.4487 4.95456 5.34416 5.14793 5.19252 5.30083L4.45336 6.04C5.31895 7.54882 6.55121 8.78108 8.06002 9.64667L8.79919 8.9075C8.95209 8.75586 9.14546 8.65132 9.35599 8.60697C9.56653 8.56262 9.78527 8.58045 9.98586 8.65833C10.5241 8.8701 11.0854 9.02105 11.6583 9.1075C11.9481 9.15436 12.2128 9.30381 12.4015 9.52868C12.5902 9.75355 12.6905 10.0382 12.8333 10.48Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="mt-[2px] shrink-0">
      <path
        d="M2.33325 2.33334H11.6666C12.3041 2.33334 12.8333 2.8625 12.8333 3.5V10.5C12.8333 11.1375 12.3041 11.6667 11.6666 11.6667H2.33325C1.69575 11.6667 1.16659 11.1375 1.16659 10.5V3.5C1.16659 2.8625 1.69575 2.33334 2.33325 2.33334Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8333 3.5L6.99992 7.58333L1.16659 3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="mt-[2px] shrink-0">
      <path
        d="M12.8333 5.83333C12.8333 9.91667 6.99992 13.4167 6.99992 13.4167C6.99992 13.4167 1.16659 9.91667 1.16659 5.83333C1.16659 4.30624 1.77909 2.84251 2.8731 1.7485C3.96712 0.654484 5.43085 0.0419922 6.95792 0.0419922C8.485 0.0419922 9.94873 0.654484 11.0427 1.7485C12.1368 2.84251 12.8333 4.30624 12.8333 5.83333Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7.58333C7.9665 7.58333 8.75 6.79983 8.75 5.83333C8.75 4.86683 7.9665 4.08333 7 4.08333C6.0335 4.08333 5.25 4.86683 5.25 5.83333C5.25 6.79983 6.0335 7.58333 7 7.58333Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Social icons ───────────────────────────────────────────────────────── */
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M18 10.056C18 5.604 14.418 2 10 2C5.582 2 2 5.604 2 10.056C2 14.075 4.925 17.397 8.75 18V12.376H6.719V10.056H8.75V8.288C8.75 6.275 9.944 5.159 11.772 5.159C12.647 5.159 13.563 5.318 13.563 5.318V7.294H12.554C11.56 7.294 11.25 7.914 11.25 8.551V10.056H13.469L13.114 12.376H11.25V18C15.075 17.397 18 14.075 18 10.056Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="16" height="16" rx="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="10" r="3.5" />
      <circle cx="14.5" cy="5.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ─── Payment badges ─────────────────────────────────────────────────────── */
function ApplePayBadge() {
  return (
    <span className="inline-flex h-[26px] items-center rounded-[4px] bg-ink px-2.5">
      <svg width="42" height="16" viewBox="0 0 42 16" fill="white" aria-label="Apple Pay">
        <text x="0" y="12" fontSize="10" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif"> Pay</text>
        <path d="M4 3.5C4.6 2.8 5.4 2.3 6.2 2.3C6.3 3.2 5.9 4 5.3 4.6C4.7 5.2 3.9 5.6 3 5.6C2.9 4.7 3.4 3.9 4 3.5ZM6.1 5.8C7.2 5.8 8.1 6.5 8.7 6.5C9.3 6.5 10.1 5.9 11.1 5.9C12.6 5.9 14 6.8 14.7 8.2C12.6 9.3 11.2 11.5 11.2 14C11.2 14.8 11.4 15.5 11.6 16H10.8C10.4 14.9 10.2 14.1 10.2 14C10.2 12 11.3 10.3 13 9.3C12.5 8.7 11.7 8.3 10.8 8.3C10.1 8.3 9.4 8.6 8.8 8.6C8.1 8.6 7.1 8.3 6.1 8.3C4.2 8.3 2.5 9.5 2.5 12.1C2.5 14.7 4.3 18 6.2 18C7 18 7.7 17.5 8.5 17.5C9.3 17.5 9.9 18 10.8 18C11.6 18 12.3 17.3 12.9 16H11.6C11.2 15.5 10.9 14.9 10.9 14C10.9 12.1 12 10.5 13.6 9.7C13 8.8 12 8.3 10.9 8.3C9.9 8.3 9.3 8.7 8.6 8.7C7.8 8.7 7 8.3 6.1 8.3C4.8 8.3 3.7 9 3 10.2C2.3 11.4 2 12.8 2 14C2 14.7 2.1 15.3 2.3 16H1.5C1.2 15.3 1 14.7 1 14C1 12.6 1.3 11 2.1 9.6C2.9 8.2 4.1 7.1 5.5 6.3C5.3 6.1 5.2 5.9 6.1 5.8Z" />
      </svg>
    </span>
  );
}

function MastercardBadge() {
  return (
    <span className="inline-flex h-[26px] items-center rounded-[4px] bg-[#1A1F71] px-2">
      <svg width="36" height="22" viewBox="0 0 36 22" aria-label="Mastercard">
        <circle cx="13" cy="11" r="10" fill="#EB001B" />
        <circle cx="23" cy="11" r="10" fill="#F79E1B" />
        <path d="M18 4.5a10 10 0 0 1 0 13A10 10 0 0 1 18 4.5z" fill="#FF5F00" />
      </svg>
    </span>
  );
}

function PaypalBadge() {
  return (
    <span className="inline-flex h-[26px] items-center rounded-[4px] bg-[#003087] px-2.5">
      <svg width="42" height="12" viewBox="0 0 42 12" aria-label="PayPal">
        <text x="0" y="10" fontSize="10" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">PayPal</text>
      </svg>
    </span>
  );
}

function PaymentBadge({ type, label }) {
  if (type === 'applepay') return <ApplePayBadge />;
  if (type === 'mastercard') return <MastercardBadge />;
  if (type === 'paypal') return <PaypalBadge />;
  return (
    <span className="inline-flex h-[26px] items-center rounded-[4px] border border-line bg-white px-2 text-[11px] font-semibold text-ink">
      {label}
    </span>
  );
}

/* ─── Social icon resolver ───────────────────────────────────────────────── */
function SocialButton({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center text-ink/80 transition-colors hover:text-ink"
    >
      {icon === 'facebook' ? <FacebookIcon /> : <InstagramIcon />}
    </a>
  );
}

/* ─── Column heading ─────────────────────────────────────────────────────── */
function ColHeading({ children }) {
  return (
    <p className="text-[16px] font-semibold leading-[1.2] text-ink">
      {children}
    </p>
  );
}

/* ─── Link list ──────────────────────────────────────────────────────────── */
function LinkList({ links, internal = true }) {
  return (
    <ul className="mt-5 flex flex-col gap-[14px]">
      {links.map(({ label, href }) => (
        <li key={label}>
          {internal ? (
            <Link
              to={href}
              className="text-[14px] font-normal leading-[1.4] text-muted transition-colors hover:text-ink"
            >
              {label}
            </Link>
          ) : (
            <a
              href={href}
              className="text-[14px] font-normal leading-[1.4] text-muted transition-colors hover:text-ink"
            >
              {label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="bg-[#EBEBEB] pt-[60px] pb-[24px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-24">

        {/* Main 4-column grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-x-[80px] xl:gap-x-[147px]">

          {/* ── Column 1: Contact Us ── */}
          <div>
            <ColHeading>Contact Us</ColHeading>
            <ul className="mt-5 flex flex-col gap-[14px]">
              <li className="flex items-start gap-2.5 text-[14px] font-normal leading-[1.4] text-muted">
                <PhoneIcon />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-start gap-2.5 text-[14px] font-normal leading-[1.4] text-muted">
                <EmailIcon />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-start gap-2.5 text-[14px] font-normal leading-[1.4] text-muted">
                <LocationIcon />
                <span>{contactInfo.address}</span>
              </li>
            </ul>

            {/* Follow Us */}
            <p className="mt-7 text-[16px] font-semibold leading-[1.2] text-ink">Follow Us</p>
            <div className="mt-3 flex items-center gap-1 -ml-2">
              {socialLinks.map((s) => (
                <SocialButton key={s.icon} {...s} />
              ))}
            </div>
          </div>

          {/* ── Column 2: Navigate ── */}
          <div>
            <ColHeading>Navigate</ColHeading>
            <LinkList links={navLinks} internal />
          </div>

          {/* ── Column 3: Information ── */}
          <div>
            <ColHeading>Information</ColHeading>
            <LinkList links={infoLinks} internal={false} />
          </div>

          {/* ── Column 4: Categories ── */}
          <div>
            <ColHeading>Categories</ColHeading>
            <LinkList links={categoryLinks} internal />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#D6D6D6] pt-[18px] sm:flex-row sm:items-center sm:justify-between">
          {/* Accepted payments */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[13px] font-semibold text-ink">Accepted payments</span>
            <div className="flex items-center gap-2">
              {paymentMethods.map((pm) => (
                <PaymentBadge key={pm.type} {...pm} />
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-[14px] font-normal text-muted">{copyright}</p>
        </div>

      </div>
    </footer>
  );
}
