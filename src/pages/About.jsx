import { FeatureBar } from '../components/FeatureBar.jsx';
import { MailingList } from '../components/home/MailingList.jsx';
import aboutPortrait from '../assets/pets/about-portrait.png';
import aboutIcon0 from '../assets/pets/about-icon-0.svg';
import aboutIcon1 from '../assets/pets/about-icon-1.svg';
import aboutIcon2 from '../assets/pets/about-icon-2.svg';
import aboutIcon3 from '../assets/pets/about-icon-3.svg';
import product2 from '../assets/pets/product-2.jpg';
import product3 from '../assets/pets/product-3.jpg';

const spotlightImages = [
  aboutPortrait,
  product2,
  product3,
];

const values = [
  {
    title: 'Best in Class',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy.',
    iconSrc: aboutIcon0,
  },
  {
    title: 'Authenticity',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy.',
    iconSrc: aboutIcon1,
  },
  {
    title: 'Email Support',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy.',
    iconSrc: aboutIcon2,
  },
  {
    title: 'Discounts Available',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy.',
    iconSrc: aboutIcon3,
  },
  {
    title: 'Powerful Marketing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy.',
    iconSrc: aboutIcon0,
  },
  {
    title: 'Inventory management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy.',
    iconSrc: aboutIcon1,
  },
];

const team = [
  { name: 'Blake Matthews', role: 'CEO & Co-Founder', image: aboutPortrait },
  { name: 'Jack Newman', role: 'CTO', image: product2 },
  { name: 'Sarina Martins', role: 'Marketing', image: product3 },
  { name: 'Spencer Wright', role: 'Project management', image: aboutPortrait },
  { name: 'Caroline Ming', role: 'Sales', image: product2 },
  { name: 'Anna Mills', role: 'Design lead', image: product3 },
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
                className={`h-[240px] w-full rounded-sm object-cover sm:h-[300px] lg:h-[320px] ${
                  index === 0 ? 'object-top' : ''
                }`}
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
                  <img src={value.iconSrc} alt="" className="h-8 w-8 object-contain" />
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
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mb-3 h-[180px] w-full rounded-sm object-cover object-top"
                  />
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
