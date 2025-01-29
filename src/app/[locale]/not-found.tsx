import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("NotFound");
  const locale = await getLocale();

  return (
    <div className="h-screen px-6 flex flex-col items-center justify-center  bg-bgLight tracking-tighter text-center font-bold">
      <h2
        className={`text-[32px]  770px:text-[64px] 990px:text-[80px]  mb-5 770px:mb-10 ${
          locale === "en"
            ? "-tracking-[2px] 480px:-tracking-[3px] 770px:-tracking-[4px] 480px:text-5xl"
            : "min-[520px]:text-5xl"
        }`}
      >
        {t("title")}
      </h2>
      <p
        className={`text-lg text-customGray mb-6 770px:mb-10   ${
          locale === "en"
            ? "tracking-tighter leading-tight max-w-[400px]"
            : "tracking-wide"
        }`}
      >
        {t("description")}
      </p>
      <Link
        href={"/"}
        className={`w-full 480px:w-auto text-base text-white bg-customBlue rounded-full py-3 px-[50px] inline-block hover:bg-customBlueDarker transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
          locale === "en" ? "tracking-tighter" : "tracking-wide"
        }`}
      >
        {t("button")}
      </Link>
    </div>
  );
}
