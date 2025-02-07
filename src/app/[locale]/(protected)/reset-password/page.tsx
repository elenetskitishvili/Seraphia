import { resetPasswordAction } from "@/src/app/actions/authActions";
import { FormMessage, Message } from "@/src/components/form-message";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Reset password",
};

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
  params: Promise<{ locale: string }>;
}) {
  const searchParams = await props.searchParams;
  const { locale } = await props.params;
  const t = await getTranslations("Auth");
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
        <input type="hidden" name="locale" value={locale} />
        <h1
          className={`text-3xl font-medium  mb-2  ${
            locale === "en" ? "tracking-tighter" : ""
          }`}
        >
          {t("reset-password")}
        </h1>
        <p className="text-base text-foreground mt-3 mb-3 flex items-center gap-1">
          {t("enter-password-below")}
        </p>
        <label
          htmlFor="password"
          className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold  leading-6 ${
            locale === "en" ? "tracking-tighter" : ""
          }`}
        >
          {t("new-password")}
        </label>
        <input
          type="password"
          name="password"
          placeholder={t("new-password")}
          required
          className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:border-b-[3px] dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
        />
        <label
          htmlFor="confirmPassword"
          className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold  leading-6 ${
            locale === "en" ? "tracking-tighter" : ""
          }`}
        >
          {t("confirm-password")}
        </label>
        <input
          type="password"
          name="confirmPassword"
          placeholder={t("confirm-password")}
          required
          className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:border-b-[3px] dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
        />
        <button
          formAction={resetPasswordAction}
          className={`w-full text-white dark:text-darkModeText bg-customBlue dark:bg-indigo-600 font-medium py-3  rounded-full inline-block hover:bg-customBlueDarker dark:hover:bg-indigo-500 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] mt-4 480px:self-end`}
        >
          {t("reset-password")}
        </button>
        <div className="text-center">
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}
