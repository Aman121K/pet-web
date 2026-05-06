import { FeatureBar } from '../components/FeatureBar.jsx';

export function Blog() {
  return (
    <>
      <FeatureBar />
      <section className="mx-auto max-w-[800px] px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-[30px] font-semibold tracking-tight text-ink">Blog</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          Stories about nutrition, training, and everyday care. New posts can be wired to your CMS
          later — this page matches the site shell from your Figma file.
        </p>
      </section>
    </>
  );
}
