import { Link } from 'react-router-dom';

export function ErrorPage() {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-[900px] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <p className="text-[14px] font-semibold tracking-[0.18em] text-muted">ERROR 404</p>
      <h1 className="mt-3 text-[40px] font-semibold tracking-tight text-ink sm:text-[54px]">
        Page not found
      </h1>
      <p className="mt-4 max-w-[540px] text-[15px] text-muted">
        The page you are looking for was moved or does not exist.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-ink px-6 text-[14px] font-semibold text-white transition hover:bg-ink/90"
        >
          Go to home
        </Link>
        <Link
          to="/contact"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-line px-6 text-[14px] font-semibold text-ink transition hover:bg-surface"
        >
          Contact support
        </Link>
      </div>
    </section>
  );
}
