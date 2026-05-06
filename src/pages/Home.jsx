import heroImg from '../assets/pets/hero.jpg';
import { CompanyLineup } from '../components/home/CompanyLineup.jsx';
import { TopPicks } from '../components/home/TopPicks.jsx';
import { Categories } from '../components/home/Categories.jsx';
import { BestSelling } from '../components/home/BestSelling.jsx';
import { PetTiles } from '../components/home/PetTiles.jsx';
import { FaqBlock } from '../components/home/FaqBlock.jsx';
import { Testimonials } from '../components/home/Testimonials.jsx';
import { PopularBlogs } from '../components/home/PopularBlogs.jsx';
import { MailingList } from '../components/home/MailingList.jsx';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <CompanyLineup />
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2px] border border-line bg-black">
            <img
              src={heroImg}
              alt=""
              className="h-[360px] w-full object-cover opacity-85 sm:h-[420px]"
            />
            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-[520px] px-8 py-10 text-white sm:px-10">
                <h1 className="text-[44px] font-semibold leading-[1.05] tracking-tight sm:text-[54px]">
                  Discover
                  <br />
                  your pets
                </h1>
                <p className="mt-4 max-w-[420px] text-[14px] text-white/75">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <Link
                  to="/shop"
                  className="mt-7 inline-flex h-10 items-center justify-center border border-white/35 px-6 text-[12px] font-semibold tracking-wider text-white hover:bg-white/10"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TopPicks />
      <Categories />
      <BestSelling />
      <PetTiles />
      <FaqBlock />
      <Testimonials />
      <PopularBlogs />
      <MailingList />
    </>
  );
}
