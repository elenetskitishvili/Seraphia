import { Link } from "@/src/i18n/routing";
import Image from "next/image";
import PaymentIcons from "./PaymentIcons";
import FooterLogo from "./FooterLogo";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const locale = await getLocale();

  return (
    <footer className="border-t border-t-bgBtn dark:border-t-darkModeBorder">
      {/* TOP PART - GRID CONTAINER */}
      <div
        className={`py-[60px] px-6 770px:px-10 grid grid-cols-2 990px:grid-cols-4 gap-x-6 gap-y-10 font-bold max-w-[1360px] mx-auto ${
          locale === "en" ? "tracking-tighter" : ""
        }`}
      >
        {/* 1 ITEM */}
        <div className="">
          <h2 className="mb-3 text-lg">{t("information")}</h2>
          <div className="flex flex-col gap-3 mb-3 ">
            <Link
              href={"/"}
              className="text-sm hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {t("home")}
            </Link>
            <Link
              href={"/blogs"}
              className="text-sm hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {t("blog")}
            </Link>
            <Link
              href={"/products"}
              className="text-sm hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {t("products")}
            </Link>
            <Link
              href={"/contact"}
              className="text-sm hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
        {/* 2 ITEM */}
        <div className="">
          <h2 className="mb-3 text-lg">{t("categories")}</h2>
          <div className="flex flex-col gap-3 mb-3 ">
            <Link
              href={"/products?category=necklaces&page=1"}
              className="text-sm hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {t("necklaces")}
            </Link>
            <Link
              href={"/products?category=rings&page=1"}
              className="text-sm hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {t("rings")}
            </Link>
            <Link
              href={"/products?category=bracelets&page=1"}
              className="text-sm hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {t("bracelets")}
            </Link>
            <Link
              href={"/products?category=earrings&page=1"}
              className="text-sm hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {t("earrings")}
            </Link>
          </div>
        </div>
        {/* 3 ITEM */}
        <div className="">
          <h2 className="mb-3 text-lg">{t("social")}</h2>
          <div className="flex flex-col gap-3 mb-3">
            <Link
              href={"https://www.youtube.com/"}
              target="_blank"
              className="text-sm flex items-center hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              <span className="hidden 480px:flex items-center justify-center  text-[10px] mr-2 w-6 h-6 rounded-full text-white bg-customGray">
                <i className="fab fa-youtube pt-[2px]"></i>
              </span>
              <span>YouTube</span>
            </Link>
            <Link
              href={"https://www.instagram.com/"}
              target="_blank"
              className="text-sm flex items-center hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              <span className="hidden 480px:flex items-center justify-center  text-[10px] mr-2 w-6 h-6 rounded-full text-white bg-customGray">
                <i className="fab fa-instagram pt-[2px]"></i>
              </span>
              <span>Instagram</span>
            </Link>
            <Link
              href={"https://www.facebook.com/"}
              target="_blank"
              className="text-sm flex items-center hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              <span className="hidden 480px:flex items-center justify-center  text-[10px] mr-2 w-6 h-6 rounded-full text-white bg-customGray">
                <i className="fab fa-facebook pt-[2px]"></i>
              </span>
              <span>Facebook</span>
            </Link>
            <Link
              href={"https://www.whatsapp.com/"}
              target="_blank"
              className="text-sm flex items-center hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              <span className="hidden 480px:flex items-center justify-center  text-[10px] mr-2 w-6 h-6 rounded-full text-white bg-customGray">
                <i className="fab fa-whatsapp pt-[2px]"></i>
              </span>
              <span>Whatsapp</span>
            </Link>
          </div>
        </div>
        {/* 4 ITEM */}
        <div className="">
          <h2 className="mb-3 text-lg">{t("help")}</h2>
          <div className="flex flex-col gap-3 mb-3">
            <Link
              href={"/contact"}
              className="text-sm hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {t("contact")}
            </Link>
            <Link
              href={"/contact"}
              className="text-sm hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {t("help-center")}
            </Link>
            <Link
              href={"/contact"}
              className="text-sm hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {t("terms")}
            </Link>
            <Link
              href={"/privacy-policy"}
              className="text-sm hover:text-customBlue dark:hover:text-indigo-500 duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {t("privacy")}
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM PART */}
      <div className="text-center border border-bgBtn dark:border-darkModeBorder grid grid-cols-1 770px:grid-cols-[1fr_2fr_1fr]">
        <div className="border-t text-sm border-bgBtn dark:border-darkModeBorder h-20 770px:h-[120px] flex items-center justify-center">
          <a
            href="tel:+1234567890"
            className="rounded-full border border-t-bgBtn py-[10px] px-8 w-auto"
          >
            <i className="fas fa-phone-alt mx-2"></i>
            <span> 2-967-227</span>
          </a>
        </div>
        <FooterLogo />
        <div className="border-t border-t-bgBtn dark:border-t-darkModeBorder  h-20 770px:h-[120px] flex items-center justify-center">
          <PaymentIcons />
        </div>
      </div>
    </footer>
  );
}
