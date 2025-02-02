import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";

export default async function ContactHero() {
  const t = await getTranslations("Contact");
  const locale = await getLocale();

  return (
    <section className="bg-bgLight dark:bg-darkModeBg  grid grid-cols-1 990px:grid-cols-2 990px:h-[800px] 990px:overflow-hidden">
      {/* Content */}
      <div className=" bg-bgLight dark:bg-darkModeBg pt-[100px] 770px:pt-[140px] 990px:pt-[300px] pb-[80px] 480px:pb-[60px] 770px:pb-[80px] px-6 770px:px-10 990px:px-8 text-center">
        <p
          className={`text-customBlue dark:text-indigo-600 text-lg 480px:text-xl mb-6  font-semibold ${
            locale === "en" ? "tracking-tighter" : ""
          }`}
        >
          {t("subheading")}
        </p>
        <h1
          className={`text-[32px] 480px:text-5xl 770px:text-[64px] dark:text-darkModeTextSecondary   font-bold leading-none mb-6 990px:mb-10 ${
            locale === "en"
              ? "tracking-tighter 990px:text-[80px]"
              : "990px:text-[64px]"
          }`}
        >
          {t("heading")}
        </h1>
      </div>
      {/* IMAGE */}
      <div className="">
        <img
          src="/images/contact/image1.jpeg"
          alt="contact"
          className="h-full w-auto object-cover dark:brightness-[85%]"
        />
      </div>
    </section>
  );
}
