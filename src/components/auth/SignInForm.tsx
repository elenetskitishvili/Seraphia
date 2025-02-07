"use client";

import { z } from "zod";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { signInAction } from "@/src/app/actions/authActions";
import { Link } from "@/src/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

interface ErrorMessages {
  email?: string | string[];
  password?: string | string[];
}

const getSignInSchema = (t: (key: string) => string) =>
  z.object({
    email: z.string().email({ message: t("requirement-email") }),
    password: z.string().min(1, { message: t("requirement-password") }),
  });

export default function SignInForm() {
  const t = useTranslations("Auth");
  const locale = useLocale();
  const SignInSchema = getSignInSchema(t);

  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<ErrorMessages>({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const formValues = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    try {
      setErrorMessage({ email: "", password: "" });
      setError(null);
      setSuccess(null);
      setLoading(true);

      const result = SignInSchema.safeParse(formValues);

      if (!result.success) {
        const errorObj = result.error.flatten().fieldErrors;

        setErrorMessage(errorObj);

        return;
      }

      await signInAction(formData);
      setSuccess("Logged in successfully");
      form.reset();
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors.map((e) => e.message).join(", "));
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 flex flex-col min-w-64 480px:min-w-96"
    >
      <h1
        className={`text-3xl font-medium  mb-2  ${
          locale === "en" ? "tracking-tighter" : ""
        }`}
      >
        {t("sign-in")}
      </h1>
      <p className="text-sm text-foreground mt-2 flex items-center gap-2">
        <span>{t("no-account")}</span>
        <Link
          className="text-foreground font-medium underline hover:text-customBlue dark:hover:text-indigo-500 transition-colors duration-200 ease-in-out"
          href={`/sign-up`}
          data-cy="sign-up-link"
        >
          {t("sign-up")}
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-4">
        <label
          htmlFor="email"
          className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold  leading-6 ${
            locale === "en" ? "tracking-tighter" : ""
          }`}
        >
          {t("email")}
        </label>
        {loading ? (
          <Skeleton borderRadius={0} className="h-14 w-full" />
        ) : (
          <input
            type="text"
            id="email"
            name="email"
            placeholder={t("enter-email")}
            defaultValue=""
            data-cy="email-input"
            className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:border-b-[3px] dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
          />
        )}

        {errorMessage?.email && (
          <div className="text-orange-700 dark:text-red-500 text-base">
            {Array.isArray(errorMessage.email)
              ? errorMessage.email.join(", ")
              : errorMessage.email}
          </div>
        )}

        <div className="flex justify-between items-center">
          <label
            htmlFor="password"
            className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold  leading-6 ${
              locale === "en" ? "tracking-tighter" : ""
            }`}
          >
            {t("password")}
          </label>
          <Link
            className="text-sm text-foreground underline hover:text-customBlue dark:hover:text-indigo-500 transition-colors duration-200 ease-in-out"
            href={`/forgot-password`}
          >
            {t("forgot")}
          </Link>
        </div>

        {loading ? (
          <Skeleton borderRadius={0} className="h-14 w-full" />
        ) : (
          <input
            type="password"
            name="password"
            id="password"
            placeholder={t("enter-password")}
            defaultValue=""
            data-cy="password-input"
            className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:border-b-[3px] dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
          />
        )}

        {errorMessage?.password && (
          <div className="text-orange-700 dark:text-red-500 text-base">
            {Array.isArray(errorMessage.password)
              ? errorMessage.password.join(", ")
              : errorMessage.password}
          </div>
        )}

        <button
          type="submit"
          data-cy="sign-in-button"
          className={`w-full text-white dark:text-darkModeText bg-customBlue dark:bg-indigo-600 font-medium py-3  rounded-full inline-block hover:bg-customBlueDarker dark:hover:bg-indigo-500 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] mt-4 480px:self-end ${
            loading ? " cursor-not-allowed" : ""
          }`}
        >
          {loading ? t("signing-in") : t("sign-in")}
        </button>
      </div>
    </form>
  );
}
