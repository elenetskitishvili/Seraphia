import { getLocale, getTranslations } from "next-intl/server";

export default async function ContactFAQ() {
  const t = await getTranslations("Contact");
  const locale = await getLocale();
  return (
    <div className="border-t dark:border-y border-t-bgBtn dark:border-y-darkModeBorder text-center  py-[60px] 480px:py-20 770px:py-[120px] 990px:py-40">
      <p
        className={`text-customGray dark:text-darkModeTextSecondary text-lg 480px:text-xl mb-3  font-semibold  ${
          locale === "en" ? "tracking-tighter" : ""
        }`}
      >
        {t("faq")}
      </p>
      <div className="text-2xl 480px:text-[32px] 770px:text-[40px]  990px:text-[56px]  font-bold leading-none  mb-6 990px:mb-10 hover:text-customBlue dark:hover:text-indigo-600 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
        <p className={`${locale === "en" ? "tracking-tighter" : ""}`}>
          {t("help-center")}
        </p>
      </div>
    </div>
  );
}
