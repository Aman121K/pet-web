import { Link } from 'react-router-dom';
import { FeatureBar } from '../components/FeatureBar.jsx';
import { SeoHead } from '../components/SeoHead.jsx';

export function CreateAccount() {
  return (
    <>
      <SeoHead
        title="Create Account | Pet Square"
        description="Create your Pet Square profile to save delivery addresses, track packages, and manage pet care preferences."
        canonical="/create-account"
        robots="noindex,follow"
      />
      <FeatureBar />
      <section className="mx-auto max-w-[860px] px-4 py-12 text-center sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
          <p className="text-[12px] uppercase tracking-[0.22em] text-muted">Account</p>
          <h1 className="mt-3 text-[32px] font-semibold tracking-tight text-ink">Create Account</h1>
          <p className="mx-auto mt-3 max-w-[520px] text-[15px] text-muted">
            Build your Pet SQUARE profile to save delivery addresses, track packages, and keep your
            pet care preferences in one place.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/signup"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-ink px-6 text-[14px] font-semibold text-white transition hover:bg-ink/90"
            >
              Start signup
            </Link>
            <Link
              to="/login"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-line px-6 text-[14px] font-semibold text-ink transition hover:bg-white"
            >
              I already have an account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
