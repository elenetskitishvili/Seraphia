"use client";

import { z } from "zod";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import { useState } from "react";
import { createBlog } from "@/src/app/actions/createBlog";

interface ErrorMessages {
  headingEn?: string | string[];
  headingKa?: string | string[];
  contentEn?: string | string[];
  contentKa?: string | string[];
  image?: string | string[];
}

const getBlogSchema = (t: (key: string) => string) =>
  z.object({
    headingEn: z.string().min(10, { message: t("requirement-heading-en") }),
    headingKa: z.string().min(10, { message: t("requirement-heading-ka") }),
    contentEn: z.string().min(100, { message: t("requirement-content-en") }),
    contentKa: z.string().min(100, { message: t("requirement-content-ka") }),
    image: z.custom<File>((file) => file instanceof File && file.size > 0, {
      message: t("requirement-image"),
    }),
  });

export default function CreateBlogForm() {
  const t = useTranslations("CreateBlog");
  const locale = useLocale();
  const blogSchema = getBlogSchema(t);

  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<ErrorMessages>({
    headingEn: "",
    headingKa: "",
    contentEn: "",
    contentKa: "",
    image: "",
  });

  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const formValues = {
      headingEn: formData.get("headingEn") as string,
      headingKa: formData.get("headingKa") as string,
      contentEn: formData.get("contentEn") as string,
      contentKa: formData.get("contentKa") as string,
      image: formData.get("image") as File,
    };

    try {
      setErrorMessage({
        headingEn: "",
        headingKa: "",
        contentEn: "",
        contentKa: "",
        image: "",
      });

      setError(null);
      setSuccess(null);
      setLoading(true);

      const result = blogSchema.safeParse(formValues);

      if (!result.success) {
        const errorObj = result.error.flatten().fieldErrors;

        setErrorMessage(errorObj);

        return;
      }

      await createBlog(formData);
      setSuccess("Blog was added successfully");
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
    <section className="max-w-[1360px] mx-auto mb-[60px] 480px:mb-20 770px:mb-[120px] 990px:mb-40 pt-10 px-6 770px:px-10">
      <div className="grid grid-cols-1 gap-10 990px:grid-cols-[31fr_69fr]">
        <div className="flex flex-col  mt-6">
          <p className="pb-2 text-lg text-customGray font-bold tracking-tighter leading-6 max-w-[300px] border-b border-b-bgBtn">
            {t("message1")}
          </p>
          <p className="py-2 text-lg text-customGray font-bold tracking-tighter leading-6 max-w-[300px] border-b border-b-bgBtn">
            {t("message2")}
          </p>
          <p className="py-2 text-lg text-customGray font-bold tracking-tighter leading-6 max-w-[300px] border-b border-b-bgBtn">
            {t("message3")}
          </p>
          <p className="pt-2 text-lg text-customGray font-bold tracking-tighter leading-6 max-w-[300px] ">
            {t("message4")}
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* HEADING ENGLISH */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="headingEn"
              className="text-sm text-customGray font-bold tracking-tighter leading-6"
            >
              {t("heading-en")}
            </label>
            {loading ? (
              <Skeleton borderRadius={0} className="h-[50px] w-full" />
            ) : (
              <input
                type="text"
                id="headingEn"
                name="headingEn"
                defaultValue=""
                placeholder="Enter blog heading in English"
                className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
              />
            )}
          </div>

          {errorMessage?.headingEn && (
            <div className="text-orange-700 text-base">
              {Array.isArray(errorMessage.headingEn)
                ? errorMessage.headingEn.join(", ")
                : errorMessage.headingEn}
            </div>
          )}

          {/* HEADING GEORGIAN */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="headingKa"
              className="text-sm text-customGray font-bold tracking-tighter leading-6"
            >
              {t("heading-ka")}
            </label>

            {loading ? (
              <Skeleton borderRadius={0} className="h-[50px] w-full" />
            ) : (
              <input
                type="text"
                id="headingKa"
                name="headingKa"
                defaultValue=""
                placeholder="ბლოგის სათაური ქართულად"
                className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
              />
            )}
          </div>

          {errorMessage?.headingKa && (
            <div className="text-orange-700 text-base">
              {Array.isArray(errorMessage.headingKa)
                ? errorMessage.headingKa.join(", ")
                : errorMessage.headingKa}
            </div>
          )}

          {/* CONTENT ENGLISH */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="contentEn"
              className="text-sm text-customGray font-bold tracking-tighter leading-6"
            >
              {t("content-en")}
            </label>

            {loading ? (
              <Skeleton
                borderRadius={0}
                className="h-[76px] 990px:h-[166px] w-full"
              />
            ) : (
              <textarea
                id="contentEn"
                name="contentEn"
                defaultValue=""
                placeholder="Write your blog content in English"
                className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none 990px:h-[168px]"
              />
            )}
          </div>

          {errorMessage?.contentEn && (
            <div className="text-orange-700 text-base">
              {Array.isArray(errorMessage.contentEn)
                ? errorMessage.contentEn.join(", ")
                : errorMessage.contentEn}
            </div>
          )}
          {/* CONTENT GEORGIAN */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="contentKa"
              className="text-sm text-customGray font-bold tracking-tighter leading-6"
            >
              {t("content-ka")}
            </label>

            {loading ? (
              <Skeleton
                borderRadius={0}
                className="h-[76px] 990px:h-[166px] w-full"
              />
            ) : (
              <textarea
                id="contentKa"
                name="contentKa"
                defaultValue=""
                placeholder="ბლოგის ტექსტი ქართულად"
                className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none 990px:h-[168px]"
              />
            )}
          </div>

          {errorMessage?.contentKa && (
            <div className="text-orange-700 text-base">
              {Array.isArray(errorMessage.contentKa)
                ? errorMessage.contentKa.join(", ")
                : errorMessage.contentKa}
            </div>
          )}
          {/* IMAGE */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="image"
              className="text-sm text-customGray font-bold tracking-tighter leading-6"
            >
              {t("image")}
            </label>

            {loading ? (
              <Skeleton borderRadius={0} className="h-[55px] w-full" />
            ) : (
              <input
                type="file"
                accept="image/*"
                id="image"
                name="image"
                className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
              />
            )}
          </div>

          {errorMessage?.image && (
            <div className="text-orange-700 text-base">
              {Array.isArray(errorMessage.image)
                ? errorMessage.image.join(", ")
                : errorMessage.image}
            </div>
          )}

          <div className="flex flex-col min-[520px]:flex-row items-center justify-center min-[520px]:justify-end min-[520px]:gap-6 770px:gap-20 990px:gap-[120px]">
            {/* RESULT */}

            {error && (
              <p className="text-orange-700 text-lg text-center min-[520px]:mt-3">
                {t("result-fail")}
              </p>
            )}
            {success && (
              <p
                className="text-green-700 text-lg text-center text-bold min-[520px]:mt-3"
                data-cy="product-creation-success-message"
              >
                {t("result-success")}
              </p>
            )}
            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className={`w-full 480px:w-auto 480px:px-[50px]    text-customBlue bg-bgMedium font-medium py-3  rounded-full inline-block hover:bg-bgDark transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] mt-4 480px:self-end ${
                loading ? " cursor-not-allowed" : ""
              }`}
            >
              <span>
                {loading
                  ? t("creating")
                  : success
                  ? t("createAnother")
                  : error
                  ? t("retry")
                  : t("create")}
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
