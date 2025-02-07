import { Link } from "@/src/i18n/routing";
import { getLocale, getTranslations } from "next-intl/server";

export default async function HomeHeroContent() {
  const t = await getTranslations("Home");
  const locale = await getLocale();
  return (
    <div className=" bg-bgLight dark:bg-darkModeBgLighter pt-[100px] 770px:pt-[140px] 990px:pt-[80px] pb-[80px] 480px:pb-[60px] 770px:pb-[80px] px-6 770px:px-10 990px:px-8 text-center ">
      <p
        className={`text-customBlue dark:text-indigo-600 text-lg 480px:text-xl mb-6  font-semibold ${
          locale === "en" ? "tracking-tighter" : ""
        }`}
      >
        {t("your-platform")}
      </p>
      <h1
        className={`text-[32px] 480px:text-5xl   font-bold  mb-6 990px:mb-10 dark:text-darkModeText ${
          locale === "en"
            ? "770px:text-[64px] 990px:text-[80px] leading-none tracking-tighter"
            : "leading-loose"
        }`}
      >
        {t("hero-heading")}
      </h1>
      <Link
        href="/products"
        className={`w-full 480px:w-auto 480px:px-[50px]    text-white bg-customBlue dark:bg-indigo-600 font-bold py-3  rounded-full inline-block hover:bg-customBlueDarker dark:hover:bg-indigo-500 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
          locale === "en" ? "tracking-tighter" : ""
        }`}
      >
        <span className="mr-1">{t("product-link")}</span>
        <span>
          <i className="fas fa-arrow-right"></i>
        </span>
      </Link>
    </div>
  );
}
