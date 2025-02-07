import HomeHero from "@/src/components/home/HomeHero";
import PremiumCTA from "@/src/components/premium/PremiumCTA";
import { Link } from "@/src/i18n/routing";

export const metadata = {
  title: "Welcome",
};

import {
  HeartIcon,
  TagIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home() {
  const t = await getTranslations("Home");
  const locale = await getLocale();
  return (
    <>
      <HomeHero />

      {/* WHO WE ARE */}
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

      {/* FACTS ABOUT US */}
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

      {/* BLOGS BANNER */}
      <section className="bg-bgLight dark:bg-darkModeBorder  grid grid-cols-1 990px:grid-cols-2 990px:h-[600px] 990px:overflow-hidden">
        {/* Content */}
        <div className="990px:order-2 bg-bgLight dark:bg-darkModeBorder pt-[80px] 770px:pt-[90px] 990px:pt-[120px] pb-[80px] 480px:pb-[60px] 770px:pb-[80px] px-6 770px:px-10 990px:px-8 text-center 990px:max-w-[550px] 990px:mx-auto">
          <p
            className={`text-customBlue dark:text-indigo-600 text-lg 480px:text-xl mb-6  font-semibold ${
              locale === "en" ? "tracking-tighter" : ""
            }`}
          >
            {t("subheading-blogs")}
          </p>
          <h1
            className={`text-[32px] 480px:text-5xl  font-bold leading-none mb-6 990px:mb-10 ${
              locale === "en"
                ? "tracking-tighter 770px:text-[64px]"
                : "770px:text-[60px]"
            } `}
          >
            {t("heading-blogs")}
          </h1>

          <Link
            href="/blogs"
            className={`w-full 480px:w-auto 480px:px-[50px]    text-white bg-customBlue dark:bg-indigo-600 font-bold py-3  rounded-full inline-block hover:bg-customBlueDarker dark:hover:bg-indigo-500 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
              locale === "en" ? "tracking-tighter" : ""
            }`}
          >
            <span className="mr-1">{t("blogs-link")}</span>
            <span>
              <i className="fas fa-arrow-right"></i>
            </span>
          </Link>
        </div>
        {/* IMAGE */}
        <div className="relative w-full h-[800px]">
          <Image
            src="/images/contact/image2.jpg"
            alt="contact"
            fill
            sizes="(max-width: 990px) 100vw, 50vw"
            className="object-cover dark:brightness-[85%]"
            priority
          />
        </div>
      </section>

      <PremiumCTA />
    </>
  );
}
