function IconTruck(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden {...props}>
      <path
        d="M5 10h12v10H5V10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M17 14h5l4 4v6h-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM23 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function IconShield(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden {...props}>
      <path
        d="M16 4 6 8v9c0 5 4 9 10 11 6-2 10-6 10-11V8l-10-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 16 15 19 21 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBadge(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden {...props}>
      <path
        d="M16 4 6 8v9c0 5 4 9 10 11 6-2 10-6 10-11V8l-10-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 16 15 19 21 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FeatureBar() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-[1200px] gap-6 px-4 py-5 sm:grid-cols-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink">
            <IconShield className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[14px] font-semibold tracking-tight text-ink">
              Safe &amp; Secure Shopping
            </p>
            <p className="mt-0.5 text-[12.5px] text-muted">Your best choice</p>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:justify-center">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink">
            <IconTruck className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[14px] font-semibold tracking-tight text-ink">
              Next day Delivery
            </p>
            <p className="mt-0.5 text-[12.5px] text-muted">Worry free returns</p>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:justify-end sm:text-right">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink sm:order-2">
            <IconBadge className="h-6 w-6" />
          </div>
          <div className="sm:order-1 sm:text-right">
            <p className="text-[14px] font-semibold tracking-tight text-ink">
              100% verified CBD
            </p>
            <p className="mt-0.5 text-[12.5px] text-muted">
              5 stars reviews products
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
