import CheckoutFormExclusive from "@/src/components/premium/CheckoutFormExclusive";
import CheckoutFormPremium from "@/src/components/premium/CheckoutFormPremium";
import { Link } from "@/src/i18n/routing";
import { createClient } from "@/src/utils/supabase/server";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export const metadata = {
  title: "Pricing",
};

export default async function Pricing() {
  const t = await getTranslations("Pricing");

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userId = user ? user.id : null;

  return (
    <section className="my-[120px] max-w-lg min-[900px]:max-w-[1200px] mx-auto px-10">
      <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-10 min-[900px]:gap-6 990px:gap-12">
        {/* FIRST CARD */}
        <div className="group perspective-1500 relative h-[520px]">
          {/* FRONT SIDE */}
          <div className="w-full rounded-[3px] dark:rounded-lg overflow-hidden backface-hidden bg-white dark:bg-darkModeBorder h-[520px] transition-all duration-[800ms] ease-in-out group-hover:-rotate-y-180 absolute top-0 left-0 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            {/* CARD PICTURE */}
            <div
              className="relative h-[230px]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
            >
              <Image
                src="/images/premium/premium1.jpg"
                alt="Premium Card Image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffb900] to-[#ff7730] mix-blend-screen" />
            </div>
            {/* CARD HEADING */}
            <h3 className="text-[28px] font-light uppercase text-white absolute top-[120px] right-5 text-right w-[75%]">
              <span className="decoration-clone py-[10px] px-[15px] bg-gradient-to-tr from-[rgba(255,185,0,0.85)] to-[rgba(255,119,48,0.85)]">
                {t("standard")}
              </span>
            </h3>
            {/* CARD DETAILS */}
            <div className="p-[30px] dark:text-white">
              <ul className="w-[80%] mx-auto">
                <li className="text-center text-[15px] p-[10px] border-b border-b-darkModeTextLighter dark:border-b-darkModeTextTertiary">
                  {t("standard-feature1")}
                </li>
                <li className="text-center text-[15px] p-[10px] border-b border-b-darkModeTextLighter dark:border-b-darkModeTextTertiary">
                  {t("standard-feature2")}
                </li>
                <li className="text-center text-[15px] p-[10px] border-b border-b-darkModeTextLighter dark:border-b-darkModeTextTertiary">
                  {t("standard-feature3")}
                </li>
                <li className="text-center text-[15px] p-[10px]">
                  {t("standard-feature4")}
                </li>
              </ul>
            </div>
          </div>

          {/* BACK SIDE */}
          <div className="w-full rounded-[3px] dark:rounded-lg backface-hidden h-[520px] transition-all duration-[800ms] rotate-y-180 group-hover:rotate-y-0 absolute top-0 left-0 bg-gradient-to-br from-[#ffb900] to-[#ff7730] shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] text-center">
              <div className="mb-20 text-white">
                <p className="text-[15px]">{t("forever")}</p>
                <p className="text-[60px] font-thin">{t("free")}</p>
              </div>
              {userId ? (
                <Link
                  href="/add-product"
                  className="btn relative inline-block rounded-full transition-all duration-200 px-20 py-[15px] bg-white text-[#777] hover:-translate-y-[3px] active:-translate-y-[1px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
                >
                  {t("standard-btn")}
                </Link>
              ) : (
                <Link
                  href="/sign-in"
                  className="btn relative inline-block rounded-full transition-all duration-200 px-20 py-[15px] bg-white text-[#777] hover:-translate-y-[3px] active:-translate-y-[1px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
                >
                  {t("login-cta-btn")}
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* SECOND CARD */}
        <div className="group perspective-1500 relative h-[520px]">
          {/* FRONT SIDE */}
          <div className="w-full rounded-[3px] dark:rounded-lg overflow-hidden backface-hidden bg-white dark:bg-darkModeBorder h-[520px] transition-all duration-[800ms] ease-in-out group-hover:-rotate-y-180 absolute top-0 left-0 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            {/* CARD PICTURE */}
            <div
              className="relative h-[230px]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
              }}
            >
              <Image
                src="/images/premium/premium2.jpg"
                alt="Premium Card Image"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#7ed56f] to-[#28b485] mix-blend-screen" />
            </div>
            {/* CARD HEADING */}
            <h3 className="text-[28px] font-light uppercase text-white absolute top-[120px] right-5 text-right w-[75%]">
              <span className="decoration-clone py-[10px] px-[15px] bg-gradient-to-tr from-[rgba(126,213,111,0.85)] to-[rgba(40,180,133,0.85)]">
                {t("premium")}
              </span>
            </h3>
            {/* CARD DETAILS */}
            <div className="p-[30px] dark:text-white">
              <ul className="w-[80%] mx-auto">
                <li className="text-center text-[15px] p-[10px] border-b border-b-darkModeTextLighter dark:border-b-darkModeTextTertiary">
                  {t("premium-feature1")}
                </li>
                <li className="text-center text-[15px] p-[10px] border-b border-b-darkModeTextLighter dark:border-b-darkModeTextTertiary">
                  {t("premium-feature2")}
                </li>
                <li className="text-center text-[15px] p-[10px] border-b border-b-darkModeTextLighter dark:border-b-darkModeTextTertiary">
                  {t("premium-feature3")}
                </li>
                <li className="text-center text-[15px] p-[10px]">
                  {t("premium-feature4")}
                </li>
              </ul>
            </div>
          </div>

          {/* BACK SIDE */}
          <div className="w-full rounded-[3px] dark:rounded-lg backface-hidden h-[520px] transition-all duration-[800ms] rotate-y-180 group-hover:rotate-y-0 absolute top-0 left-0 bg-gradient-to-br from-[#7ed56f] to-[#28b485] shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] text-center">
              <div className="mb-20 text-white">
                <p className="text-[15px] font-sans">{t("monthly")}</p>
                <p className="text-[60px] font-thin font-sans">$9.99</p>
              </div>
              {userId ? (
                <CheckoutFormPremium />
              ) : (
                <Link
                  href="/sign-in"
                  className="btn relative inline-block rounded-full transition-all duration-200 px-20 py-[15px] bg-white text-[#777] hover:-translate-y-[3px] active:-translate-y-[1px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
                >
                  {t("login-cta-btn")}
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* THIRD CARD */}
        <div className="group perspective-1500 relative h-[520px]">
          {/* FRONT SIDE */}
          <div className="w-full rounded-[3px] dark:rounded-lg overflow-hidden backface-hidden bg-white dark:bg-darkModeBorder h-[520px] transition-all duration-[800ms] ease-in-out group-hover:-rotate-y-180 absolute top-0 left-0 shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            {/* CARD PICTURE */}
            <div
              className="relative h-[230px]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
              }}
            >
              <Image
                src="/images/premium/premium3.jpg"
                alt="Exclusive Card Image"
                fill
                className="object-cover object-bottom"
              />
              {/* Overlay gradient with blend mode */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2998ff] to-[#5643fa] mix-blend-screen" />
            </div>
            {/* CARD HEADING */}
            <h3 className="text-[28px] font-light uppercase text-white absolute top-[120px] right-5 text-right w-[75%]">
              <span className="decoration-clone py-[10px] px-[15px] bg-gradient-to-tr from-[rgba(41,152,255,0.85)] to-[rgba(86,67,250,0.85)]">
                {t("exclusive")}
              </span>
            </h3>
            {/* CARD DETAILS */}
            <div className="p-[30px] dark:text-white">
              <ul className="w-[80%] mx-auto">
                <li className="text-center text-[15px] p-[10px] border-b border-b-darkModeTextLighter dark:border-b-darkModeTextTertiary">
                  {t("exclusive-feature1")}
                </li>
                <li className="text-center text-[15px] p-[10px] border-b border-b-darkModeTextLighter dark:border-b-darkModeTextTertiary">
                  {t("exclusive-feature2")}
                </li>
                <li className="text-center text-[15px] p-[10px] border-b border-b-darkModeTextLighter dark:border-b-darkModeTextTertiary">
                  {t("exclusive-feature3")}
                </li>
                <li className="text-center text-[15px] p-[10px]">
                  {t("exclusive-feature4")}
                </li>
              </ul>
            </div>
          </div>

          {/* BACK SIDE */}
          <div className="w-full rounded-[3px] dark:rounded-lg backface-hidden h-[520px] transition-all duration-[800ms] rotate-y-180 group-hover:rotate-y-0 absolute top-0 left-0 bg-gradient-to-br from-[#2998ff] to-[#5643fa] shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] text-center">
              <div className="mb-20 text-white">
                <p className="text-[15px] font-sans">{t("monthly")}</p>
                <p className="text-[60px] font-thin font-sans">$29.99</p>
              </div>
              {userId ? (
                <CheckoutFormExclusive />
              ) : (
                <Link
                  href="/sign-in"
                  className="btn relative inline-block rounded-full transition-all duration-200 px-20 py-[15px] bg-white text-[#777] hover:-translate-y-[3px] active:-translate-y-[1px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
                >
                  {t("login-cta-btn")}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
