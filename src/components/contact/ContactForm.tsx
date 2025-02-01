"use client";

import { z } from "zod";

import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import { sendMessage } from "@/src/app/actions/sendMessage";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import { useState } from "react";

interface ErrorMessages {
  name?: string | string[];
  email?: string | string[];
  subject?: string | string[];
  message?: string | string[];
}

const getContactSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(2, { message: t("requirement-name") }),
    email: z.string().email({ message: t("requirement-email") }),
    subject: z
      .string()
      .refine((val) => val !== "", { message: t("requirement-subject") }),
    message: z.string().min(10, { message: t("requirement-message") }),
  });

export default function ContactForm() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const contactSchema = getContactSchema(t);

  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<ErrorMessages>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const formValues = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: (formData.get("subject") as string) || "",
      message: formData.get("message") as string,
    };

    try {
      setErrorMessage({ name: "", email: "", subject: "", message: "" });
      setError(null);
      setSuccess(null);
      setLoading(true);

      const result = contactSchema.safeParse(formValues);

      if (!result.success) {
        const errorObj = result.error.flatten().fieldErrors;

        setErrorMessage(errorObj);

        return;
      }

      await sendMessage(formData);
      setSuccess("Message was sent successfully");
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

  const renderButtonText = () => {
    if (loading) return t("sending");
    if (success)
      return (
        <>
          <span className="mr-1"> {t("send-another")}</span>
          <i className="fas fa-arrow-right"></i>
        </>
      );
    if (error) return t("retry");
    return (
      <>
        <span className="mr-1">{t("send")}</span>
        <i className="fas fa-arrow-right"></i>
      </>
    );
  };

  return (
    <section className="max-w-[1360px] mx-auto mb-[60px] 480px:mb-20 770px:mb-[120px] 990px:mb-40 pt-10 px-6 770px:px-10">
      <div className="grid grid-cols-1 gap-10 990px:grid-cols-[31fr_69fr]">
        <p
          className={`text-lg text-customGray dark:text-darkModeTextTertiary font-bold  leading-6 max-w-[300px] ${
            locale === "en" ? "tracking-tighter" : ""
          }`}
        >
          {t("form-message")}
        </p>

        {/* FORM */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="name"
              className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold  leading-6 ${
                locale === "en" ? "tracking-tighter" : ""
              }`}
            >
              {t("name")}
            </label>
            {loading ? (
              <Skeleton borderRadius={0} className="h-14 w-full" />
            ) : (
              <input
                type="text"
                id="name"
                name="name"
                defaultValue=""
                placeholder={t("name-placeholder")}
                className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:border-b-[3px] dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
              />
            )}
          </div>

          {errorMessage?.name && (
            <div className="text-orange-700 dark:text-red-500 text-base">
              {Array.isArray(errorMessage.name)
                ? errorMessage.name.join(", ")
                : errorMessage.name}
            </div>
          )}
          {/* EMAIL */}
          <div className="flex flex-col gap-[5px]">
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
                defaultValue=""
                placeholder={t("email-placeholder")}
                className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:border-b-[3px] dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
              />
            )}
          </div>

          {errorMessage?.email && (
            <div className="text-orange-700 dark:text-red-500 text-base">
              {Array.isArray(errorMessage.email)
                ? errorMessage.email.join(", ")
                : errorMessage.email}
            </div>
          )}
          {/* SUBJECT */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="subject"
              className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold  leading-6 ${
                locale === "en" ? "tracking-tighter" : ""
              }`}
            >
              {t("subject")}
            </label>
            {loading ? (
              <Skeleton borderRadius={0} className="h-[50px] w-full" />
            ) : (
              <select
                id="subject"
                name="subject"
                defaultValue=""
                className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:border-b-[3px] dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
              >
                <option value="" disabled>
                  {t("subject-default")}
                </option>
                <option value="information_request">
                  {t("subject-information")}
                </option>
                <option value="shipping_refund">{t("subject-shipping")}</option>
                <option value="premium_membership">
                  {t("subject-premium")}
                </option>
                <option value="other">{t("subject-other")}</option>
              </select>
            )}
          </div>

          {errorMessage?.subject && (
            <div className="text-orange-700 dark:text-red-500 text-base">
              {Array.isArray(errorMessage.subject)
                ? errorMessage.subject.join(", ")
                : errorMessage.subject}
            </div>
          )}

          {/* MESSAGE */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="message"
              className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold  leading-6 ${
                locale === "en" ? "tracking-tighter" : ""
              }`}
            >
              {t("message")}
            </label>
            {loading ? (
              <Skeleton
                borderRadius={0}
                className="h-20 990px:h-[168px] w-full"
              />
            ) : (
              <textarea
                id="message"
                name="message"
                defaultValue=""
                placeholder={t("message-placeholder")}
                className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:border-b-[3px] dark:focus:border-b-indigo-800 focus:ring-0 outline-none 990px:h-[168px]"
              />
            )}
          </div>

          {errorMessage?.message && (
            <div className="text-orange-700 dark:text-red-500 text-base">
              {Array.isArray(errorMessage.message)
                ? errorMessage.message.join(", ")
                : errorMessage.message}
            </div>
          )}

          <div className="flex flex-col min-[520px]:flex-row items-center justify-center min-[520px]:justify-end min-[520px]:gap-6 770px:gap-20 990px:gap-[120px]">
            {/* RESULT */}

            {error && (
              <p className="text-orange-700 dark:text-red-500 text-lg text-center min-[520px]:mt-3">
                {t("result-fail")}
              </p>
            )}
            {success && (
              <p
                className="text-green-700 dark:text-indigo-400 text-lg text-center text-bold min-[520px]:mt-3"
                data-cy="product-creation-success-message"
              >
                {t("result-success")}
              </p>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className={`w-full 480px:w-auto 480px:px-[50px]    text-customBlue dark:text-darkModeText bg-bgMedium dark:bg-indigo-600 font-medium py-3  rounded-full inline-block hover:bg-bgDark dark:hover:bg-indigo-500 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] mt-4 480px:self-end ${
                loading ? " cursor-not-allowed" : ""
              }`}
            >
              {renderButtonText()}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
