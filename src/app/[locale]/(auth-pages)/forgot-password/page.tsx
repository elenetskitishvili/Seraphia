import { forgotPasswordAction } from "@/src/app/actions/authActions";
import { FormMessage, Message } from "@/src/components/form-message";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export const metadata = {
  title: "Forgot Password",
};

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
  params: Promise<{ locale: string }>;
}) {
  const searchParams = await props.searchParams;
  const { locale } = await props.params;
  const t = await getTranslations("Auth");

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="">
        <form className="flex-1 flex flex-col w-full gap-2 text-foreground [&>input]:mb-6 min-w-[300px] max-w-[300px] mx-auto">
          <input type="hidden" name="locale" value={locale} />
          <div>
            <h1
              className={`text-3xl font-medium  mb-2  ${
                locale === "en" ? "tracking-tighter" : ""
              }`}
            >
              {t("reset-password")}
            </h1>
            <p className="text-sm text-foreground mt-2 flex items-center gap-2">
              {t("already-account")}
              <Link
                className="text-primary underline"
                href={`/${locale}/sign-in`}
              >
                {t("sign-in")}
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-4">
            <label
              htmlFor="email"
              className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold  leading-6 ${
                locale === "en" ? "tracking-tighter" : ""
              }`}
            >
              {t("email")}
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder={t("enter-email")}
              defaultValue=""
              className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:border-b-[3px] dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
            />
            <button
              formAction={forgotPasswordAction}
              className={`w-full text-white dark:text-darkModeText bg-customBlue dark:bg-indigo-600 font-medium py-3  rounded-full inline-block hover:bg-customBlueDarker dark:hover:bg-indigo-500 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] mt-4 480px:self-end`}
            >
              {t("reset-password")}
            </button>
            <div className="text-center">
              <FormMessage message={searchParams} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
