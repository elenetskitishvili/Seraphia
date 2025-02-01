import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";

export default async function ContactDetails() {
  const t = await getTranslations("Contact");
  const locale = await getLocale();
  return (
    <section className="max-w-[1360px] mx-auto">
      <div className="mx-6 770px:mx-10 pt-[60px] 480px:pt-20  770px:pt-[120px] 990px:pt-40 pb-10 770px:pb-14 grid 990px:grid-cols-3 gap-6 990px:gap-10 border-b border-b-bgBtn dark:border-b-darkModeBorder tracking-tighter ">
        <div className=" font-bold ">
          <div className="mb-2 text-lg text-customGray dark:text-darkModeTextTertiary ">
            {t("contact-email")}
          </div>
          <div className="text-xl 480px:text-2xl">contact@template.com</div>
        </div>
        <div className=" font-bold">
          <div className="mb-2 text-lg text-customGray dark:text-darkModeTextTertiary ">
            {t("office")}
          </div>
          <div className="text-xl 480px:text-2xl">{t("contact-location")}</div>
        </div>
        <div className=" font-bold">
          <div className="mb-2 text-lg text-customGray dark:text-darkModeTextTertiary ">
            {t("contact-call")}
          </div>
          <div className="text-xl 480px:text-2xl">+995 599 12 34 56</div>
        </div>
      </div>
    </section>
  );
}
