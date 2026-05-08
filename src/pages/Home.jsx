import { BrandLineup } from '../components/home/BrandLineup.jsx';
import { TopPicks } from '../components/home/TopPicks.jsx';
import { Categories } from '../components/home/Categories.jsx';
import { BestSelling } from '../components/home/BestSelling.jsx';
import { PetTiles } from '../components/home/PetTiles.jsx';
import { FaqBlock } from '../components/home/FaqBlock.jsx';
import { Testimonials } from '../components/home/Testimonials.jsx';
import { PopularBlogs } from '../components/home/PopularBlogs.jsx';
import { MailingList } from '../components/home/MailingList.jsx';
import { Link } from 'react-router-dom';

const heroImage =
  '/fluffy-dog-sitting-blue-home-workout-instruments-with-several-dumbbells-around.png';

export function Home() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="flex w-full flex-col md:grid md:h-[555px] md:grid-cols-[65.5555556%_34.4444444%]">
          <div className="relative min-h-[425px] overflow-hidden bg-[#1C1C1C] md:h-full">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#202020_0px,#202020_22px,#1C1C1C_22px,#1C1C1C_46px)] opacity-70" />

            <div className="relative mx-6 mt-[102px] h-auto max-w-[720px] border border-white/30 px-6 py-8 text-white sm:mx-12 sm:px-10 sm:py-10 md:ml-[97px] md:mt-20 md:h-[344px] md:w-[720px] md:p-0">
              <h1 className="text-[34px] font-semibold leading-[40px] tracking-normal sm:text-[48px] sm:leading-[58px] md:absolute md:left-10 md:top-10 md:text-[56px] md:leading-[62px]">
                <span className="block md:hidden">Discover the best for</span>
                <span className="block md:hidden">your pets at Pet</span>
                <span className="block md:hidden">Square.</span>
                <span className="hidden md:block">Discover the best for</span>
                <span className="mt-4 hidden md:block">your pets at Pet Square.</span>
              </h1>
              <p className="mt-[10px] max-w-[419px] text-[15px] font-normal leading-[30px] tracking-normal text-white/72 md:absolute md:left-10 md:top-[204px] md:mt-0 md:text-[16px] md:text-white/70">
                Lorem Ipsum is simply dummy text of the printing
              </p>
              <Link
                to="/shop"
                className="mt-[18px] inline-flex h-[38px] items-center justify-center border border-white/70 px-[16px] text-[14px] font-semibold leading-none tracking-normal text-white transition hover:bg-white/10 md:absolute md:left-10 md:top-[258px] md:mt-0 md:h-[46px] md:w-[133px] md:px-0 md:text-[15px]"
              >
                SHOP NOW
              </Link>
            </div>

            <div className="absolute left-[99px] top-[462px] hidden items-center gap-2 md:flex">
              <span className="h-[10px] w-[10px] rounded-full bg-white" />
              <span className="h-[10px] w-[10px] rounded-full bg-white/35" />
              <span className="h-[10px] w-[10px] rounded-full bg-white/35" />
            </div>
          </div>

          <div className="relative flex h-[360px] items-center justify-center overflow-hidden bg-[#D9D9D9] md:h-full">
            <div className="absolute h-[278px] w-[278px] rounded-full bg-white sm:h-[300px] sm:w-[300px] md:h-[330px] md:w-[330px]" />
            <img
              src={heroImage}
              alt=""
              className="relative z-10 h-auto w-[435px] max-w-none object-contain md:w-[500px] md:translate-x-[12px] md:translate-y-[-22px]"
            />
          </div>
        </div>
      </section>
      <BrandLineup />
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
