import HomeHero from "@/src/app/components/home/HomeHero";
import PremiumCTA from "../components/premium/PremiumCTA";

import {
  HeartIcon,
  TagIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <HomeHero />
      <section className=" px-6 770px:px-10 pt-[60px] 480px:pt-20 770px:pt-[120px] 990px:pt-[160px] pb-10 770px:pb-[60px] 990px:pb-20 ">
        <h2 className="text-[28px] 480px:text-[36px] 990px:text-[64px] 770px:text-5xl text-center font-bold tracking-tighter max-w-[1060px] mx-auto leading-none">
          Shopverse is a jewelry platform to shop, sell, and explore blogs &
          stories.
        </h2>
      </section>
      <section className="flex items-center justify-center border-y border-y-bgBtn">
        <div className="flex flex-col 480px:flex-row gap-10 480px:gap-6 items-center 480px:justify-between  text-center px-6 py-16 font-bold text-customGray">
          <div className="flex flex-col items-center justify-center gap-3 max-w-[290px]">
            <div className="w-14 h-14 rounded-full bg-bgLight flex items-center justify-center ">
              <HeartIcon className="w-8 h-8  text-customBlue" />
            </div>
            <p>
              Our customers love Shopverse user interface and user experience
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 max-w-[290px]">
            <div className="w-14 h-14 rounded-full bg-bgLight flex items-center justify-center">
              <TagIcon className="w-8 h-8 text-customBlue" />
            </div>
            <p>Your go-to store to find the best, most exclusive items</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 max-w-[290px]">
            <div className="w-14 h-14 rounded-full bg-bgLight flex items-center justify-center ">
              <ShieldCheckIcon className="w-8 h-8  text-customBlue" />
            </div>
            <p>
              Our products are high quality, we have over 10.000 google reviews
            </p>
          </div>
        </div>
      </section>
      <PremiumCTA />
    </>
  );
}
