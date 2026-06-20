import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead.jsx';

export function ErrorPage() {
  return (
    <>
      <SeoHead
        title="Page Not Found | Pet Square"
        description="The Pet Square page you requested could not be found."
        canonical="/404"
        robots="noindex,nofollow"
      />
      <section className="border-b border-line bg-[#f4f4f4]">
        <div className="mx-auto max-w-[1200px] px-4 py-2 text-[10px] text-muted">
          Home <span className="px-2">&gt;</span> 404
        </div>
      </section>

      <section className="bg-[#efefef] py-10 md:py-14">
        <div className="mx-auto flex min-h-[58vh] max-w-[1200px] flex-col items-center justify-center px-4 text-center">
          <div className="relative">
            <p className="text-[150px] font-semibold leading-[0.9] text-ink md:text-[280px]">404</p>
          </div>

          <h1 className="mt-4 text-[42px] font-semibold leading-[1.1] text-ink md:text-[58px]">
            Oops! page not found
          </h1>
          <p className="mt-4 max-w-[640px] text-[13px] leading-6 text-muted md:text-[15px]">
            Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis
            tortor at metus mollis.
          </p>

          <div className="mt-7">
            <Link
              to="/"
              className="inline-flex h-12 items-center justify-center bg-ink px-10 text-[13px] font-semibold tracking-wide text-white"
            >
              BACK TO HOME
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#efefef] pb-8">
        <div className="mx-auto max-w-[760px] px-4 text-center">
          <h2 className="text-[36px] font-semibold text-ink md:text-[48px]">
            Join our mailing list for exclusive updates!
          </h2>
          <p className="mt-2 text-[12px] text-muted md:text-[13px]">
            Sign up to our newsletter and receive exclusive discounts and deals
          </p>
          <div className="mx-auto mt-4 flex max-w-[540px] flex-col gap-2 sm:flex-row">
            <input
              placeholder="Your email address"
              className="h-10 flex-1 border border-line bg-white px-3 text-[12px] outline-none"
            />
            <button type="button" className="h-10 bg-ink px-8 text-[11px] font-semibold text-white">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
