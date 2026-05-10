import { FeatureBar } from '../components/FeatureBar.jsx';
import { MailingList } from '../components/home/MailingList.jsx';

const spotlightImages = [
  '/images/product-1.jpg',
  '/images/product-2.jpg',
  '/images/product-3.jpg',
];

const values = [
  {
    title: 'Best in Class',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy.',
    icon: (
      <path d="M9 13h2V9h10v4h2v10H9V13Zm4 10h6v-6h-6v6Zm2-18h2v4h-2V5Z" />
    ),
  },
  {
    title: 'Authenticity',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy.',
    icon: <path d="M8 10h6v6H8v-6Zm10 0h6v6h-6v-6ZM8 20h6v6H8v-6Zm10 0h6v6h-6v-6Z" />,
  },
  {
    title: 'Email Support',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy.',
    icon: <path d="M5 9h22v14H5V9Zm2 2v1l9 6 9-6v-1H7Zm18 10V14l-9 6-9-6v7h18Z" />,
  },
  {
    title: 'Discounts Available',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy.',
    icon: <path d="m16 5 3 6 7 1-5 5 1 8-6-3-6 3 1-8-5-5 7-1 3-6Z" />,
  },
  {
    title: 'Powerful Marketing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy.',
    icon: <path d="M6 14h3l4-4v12l-4-4H6v-4Zm9-2 9-3v14l-9-3V12Z" />,
  },
  {
    title: 'Inventory management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy.',
    icon: (
      <path d="M7 8h18v16H7V8Zm2 2v3h14v-3H9Zm0 5v7h14v-7H9Zm2 2h4v3h-4v-3Zm6 0h4v3h-4v-3Z" />
    ),
  },
];

const team = [
  { name: 'Blake Matthews', role: 'CEO & Co-Founder' },
  { name: 'Jack Newman', role: 'CTO' },
  { name: 'Sarina Martins', role: 'Marketing' },
  { name: 'Spencer Wright', role: 'Project management' },
  { name: 'Caroline Ming', role: 'Sales' },
  { name: 'Anna Mills', role: 'Design lead' },
];

export function About() {
  return (
    <>
      <FeatureBar />
      <section className="border-b border-line bg-surface/40">
        <div className="mx-auto max-w-[1200px] px-4 py-3 text-[12px] text-muted sm:px-6 lg:px-8">
          Home <span className="px-2 text-muted/70">{'>'}</span> About us
        </div>
      </section>
      <section className="bg-[#F5F5F5]">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 sm:py-14 md:py-20 lg:px-8">
          <header className="mx-auto max-w-[760px] text-center">
            <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              We are proud of our products
            </h1>
            <p className="mx-auto mt-5 max-w-[680px] text-[14px] leading-7 text-muted sm:text-[15px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </header>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {spotlightImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`About team scene ${index + 1}`}
                className="h-[240px] w-full rounded-sm object-cover sm:h-[300px] lg:h-[320px]"
              />
            ))}
          </div>

          <section className="mx-auto mt-14 max-w-[760px] text-center sm:mt-16">
            <p className="text-[13px] text-muted">Our Story</p>
            <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-tight text-ink">
              We&apos;re a team of data analysts
            </h2>
            <p className="mt-5 text-[14px] leading-7 text-muted sm:text-[15px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
              eos et accusam et justo duo dolores et ea rebum.
            </p>
          </section>

          <section className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-2">
            <article className="rounded-sm border border-line bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] sm:p-8 md:p-10">
              <p className="text-[13px] text-muted">Our Goals</p>
              <h3 className="mt-3 text-[clamp(1.6rem,3.3vw,2.4rem)] font-semibold leading-[1.12] tracking-tight text-ink">
                To upscale your business to the next level
              </h3>
              <p className="mt-4 text-[14px] leading-7 text-muted sm:text-[15px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                vero eos et accusam et justo duo dolores et ea rebum.
              </p>
            </article>
            <article className="rounded-sm border border-line bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] sm:p-8 md:p-10">
              <p className="text-[13px] text-muted">Our Vision</p>
              <h3 className="mt-3 text-[clamp(1.6rem,3.3vw,2.4rem)] font-semibold leading-[1.12] tracking-tight text-ink">
                To provide solutions for growing companies
              </h3>
              <p className="mt-4 text-[14px] leading-7 text-muted sm:text-[15px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                vero eos et accusam et justo duo dolores et ea rebum.
              </p>
            </article>
          </section>

          <section className="mt-14 text-center sm:mt-16">
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-[1.12] tracking-tight text-ink">
              Our corporate values
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-[14px] text-muted sm:text-[15px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
            </p>
            <div className="mt-8 grid gap-4 rounded-sm bg-[#EFEFEF] p-5 text-left sm:mt-10 sm:grid-cols-2 sm:gap-5 sm:p-8 lg:grid-cols-3">
              {values.map((value) => (
                <article key={value.title} className="rounded-sm bg-white p-5">
                  <svg
                    viewBox="0 0 32 32"
                    className="h-6 w-6 fill-ink"
                    aria-hidden
                  >
                    {value.icon}
                  </svg>
                  <h3 className="mt-3 text-[17px] font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-muted">{value.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 sm:mt-16">
            <div className="max-w-[420px]">
              <h2 className="text-[clamp(1.9rem,4.4vw,2.9rem)] font-semibold leading-[1.08] tracking-tight text-ink">
                Our talented Team
              </h2>
              <p className="mt-4 text-[14px] leading-7 text-muted sm:text-[15px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="rounded-sm border border-line bg-[#DCDCDC] p-4 transition hover:bg-[#D3D3D3]"
                >
                  <h3 className="text-[14px] font-semibold text-ink">{member.name}</h3>
                  <p className="mt-1 text-[12px] text-muted">{member.role}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
      <section className="bg-[#F5F5F5] pb-16">
        <MailingList />
      </section>
    </>
  );
}
