import { FeatureBar } from '../components/FeatureBar.jsx';

export function About() {
  return (
    <>
      <FeatureBar />
      <section className="mx-auto max-w-[800px] px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-[30px] font-semibold tracking-tight text-ink">About us</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          Pet SQUARE is built around one idea: pet parents deserve a calm, trustworthy place to
          shop. We focus on quality suppliers, transparent reviews, and delivery you can plan
          around.
        </p>
      </section>
    </>
  );
}
