import { Link } from "@/src/i18n/routing";
import MarqueeText from "./MarqueeText";
import { getLocale, getTranslations } from "next-intl/server";

export default async function PremiumCTA() {
  const t = await getTranslations("Home");
  const locale = await getLocale();

  return (
    <section>
      <MarqueeText />

      {/* CONTENT */}
      <div className="bg-customBlue dark:bg-indigo-800 text-center py-[60px] 480px:py-20 770px:py-[120px] px-6 770px:px-[70px]">
        <div className=" max-w-screen-xl mx-auto">
          <p className="text-white dark:text-darkModeText text-lg 480px:text-xl mb-6 font-semibold">
            {t("premium-subheading")}
          </p>
          <h1
            className={`text-[28px] 480px:text-4xl 770px:text-5xl font-bold   text-white dark:text-darkModeText mb-14 ${
              locale === "en"
                ? "tracking-tighter leading-none 990px:text-[64px] "
                : ""
            }`}
          >
            {t("premium-heading")}
          </h1>
          <Link
            href={"/pricing"}
            className="btn relative inline-block rounded-full transition-all duration-200 px-20 py-[15px] bg-white dark:bg-bgLighter font-medium text-customDark hover:-translate-y-[3px] active:-translate-y-[1px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
          >
            {t("go-premium")}
          </Link>
        </div>
      </div>
    </section>
  );
}
