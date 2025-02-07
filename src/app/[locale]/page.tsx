import HomeHero from "@/src/components/home/HomeHero";
import PremiumCTA from "@/src/components/premium/PremiumCTA";

import {
  HeartIcon,
  TagIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Home");
  const locale = await getLocale();
  return (
    <>
      <HomeHero />
      <section className=" px-6 770px:px-10 pt-[60px] 480px:pt-20 770px:pt-[120px] 990px:pt-[160px] pb-10 770px:pb-[60px] 990px:pb-20">
        <h2
          className={`text-[28px] 480px:text-[36px]  770px:text-5xl text-center font-bold  max-w-[1060px] mx-auto  ${
            locale === "en"
              ? "990px:text-[64px] leading-none tracking-tighter"
              : ""
          }`}
        >
          {t("about")}
        </h2>
      </section>
      <section className="flex items-center justify-center border-y border-y-bgBtn dark:border-y-darkModeBorder">
        <div className="flex flex-col 480px:flex-row gap-10 480px:gap-10 items-center 480px:justify-between  text-center px-6 py-16 font-bold text-customGray dark:text-bgDark">
          <div className="flex flex-col items-center justify-center gap-3 max-w-[290px]">
            <div className="w-14 h-14 rounded-full bg-bgLight dark:bg-darkModeBorder flex items-center justify-center ">
              <HeartIcon className="w-8 h-8  text-customBlue dark:text-indigo-500" />
            </div>
            <p>{t("fact1")}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 max-w-[290px]">
            <div className="w-14 h-14 rounded-full bg-bgLight dark:bg-darkModeBorder flex items-center justify-center">
              <TagIcon className="w-8 h-8 text-customBlue dark:text-indigo-500" />
            </div>
            <p>{t("fact2")}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 max-w-[290px]">
            <div className="w-14 h-14 rounded-full bg-bgLight dark:bg-darkModeBorder flex items-center justify-center ">
              <ShieldCheckIcon className="w-8 h-8  text-customBlue dark:text-indigo-500" />
            </div>
            <p>{t("fact3")}</p>
          </div>
        </div>
      </section>
      <PremiumCTA />
    </>
  );
}
