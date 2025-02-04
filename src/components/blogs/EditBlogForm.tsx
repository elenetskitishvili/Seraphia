"use client";

import { z } from "zod";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { editBlog } from "@/src/app/actions/editBlog";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { SetStateAction, useState } from "react";
import { Blog } from "@/src/types/types";
import ImageUpload from "./ImageUpload";

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

export default function CreateBlogForm({ blog }: { blog: Blog }) {
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
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (imageFile) {
      formData.set("image", imageFile);
    }

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

      await editBlog(formData);
      setSuccess("Blog was updated successfully");
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
          <p className="pb-2 text-lg text-customGray dark:text-darkModeTextTertiary font-bold tracking-tighter leading-6 max-w-[300px] border-b border-b-bgBtn dark:border-b-darkModeBorder">
            {t("message1")}
          </p>
          <p className="py-2 text-lg text-customGray dark:text-darkModeTextTertiary font-bold tracking-tighter leading-6 max-w-[300px] border-b border-b-bgBtn dark:border-b-darkModeBorder">
            {t("message2")}
          </p>
          <p className="py-2 text-lg text-customGray dark:text-darkModeTextTertiary font-bold tracking-tighter leading-6 max-w-[300px] border-b border-b-bgBtn dark:border-b-darkModeBorder">
            {t("message3")}
          </p>
          <p className="pt-2 text-lg text-customGray dark:text-darkModeTextTertiary font-bold tracking-tighter leading-6 max-w-[300px] ">
            {t("message4")}
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* HEADING ENGLISH */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="headingEn"
              className="text-sm text-customGray dark:text-darkModeTextTertiary font-bold tracking-tighter leading-6"
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
                defaultValue={blog.heading_en}
                placeholder="Enter blog heading in English"
                className="border dark:border-b-[3px] border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
              />
            )}
          </div>

          {errorMessage?.headingEn && (
            <div className="text-orange-700 dark:text-red-500 text-base">
              {Array.isArray(errorMessage.headingEn)
                ? errorMessage.headingEn.join(", ")
                : errorMessage.headingEn}
            </div>
          )}

          {/* HEADING GEORGIAN */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="headingKa"
              className="text-sm text-customGray dark:text-darkModeTextTertiary font-bold tracking-tighter leading-6"
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
                defaultValue={blog.heading_ka}
                placeholder="ბლოგის სათაური ქართულად"
                className="border dark:border-b-[3px] border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
              />
            )}
          </div>

          {errorMessage?.headingKa && (
            <div className="text-orange-700 dark:text-red-500 text-base">
              {Array.isArray(errorMessage.headingKa)
                ? errorMessage.headingKa.join(", ")
                : errorMessage.headingKa}
            </div>
          )}

          {/* CONTENT ENGLISH */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="contentEn"
              className="text-sm text-customGray dark:text-darkModeTextTertiary font-bold tracking-tighter leading-6"
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
                defaultValue={blog.content_en}
                placeholder="Write your blog content in English"
                className="border dark:border-b-[3px] border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:focus:border-b-indigo-800 focus:ring-0 outline-none 990px:h-[168px]"
              />
            )}
          </div>

          {errorMessage?.contentEn && (
            <div className="text-orange-700 dark:text-red-500 text-base">
              {Array.isArray(errorMessage.contentEn)
                ? errorMessage.contentEn.join(", ")
                : errorMessage.contentEn}
            </div>
          )}
          {/* CONTENT GEORGIAN */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="contentKa"
              className="text-sm text-customGray dark:text-darkModeTextTertiary font-bold tracking-tighter leading-6"
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
                defaultValue={blog.content_ka}
                placeholder="ბლოგის ტექსტი ქართულად"
                className="border dark:border-b-[3px] border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:focus:border-b-indigo-800 focus:ring-0 outline-none 990px:h-[168px]"
              />
            )}
          </div>

          {errorMessage?.contentKa && (
            <div className="text-orange-700 dark:text-red-500 text-base">
              {Array.isArray(errorMessage.contentKa)
                ? errorMessage.contentKa.join(", ")
                : errorMessage.contentKa}
            </div>
          )}
          {/* IMAGE */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="image"
              className="text-sm text-customGray dark:text-darkModeTextTertiary font-bold tracking-tighter leading-6"
            >
              {t("image")}
            </label>

            {loading ? (
              <Skeleton borderRadius={0} className="h-[175px] w-full" />
            ) : (
              <div className="border dark:border-b-[3px] border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:focus:border-b-indigo-800 focus:ring-0 outline-none">
                <ImageUpload
                  existingImageUrl={blog.image}
                  onImageChange={(file: SetStateAction<File | null>) =>
                    setImageFile(file)
                  }
                />
              </div>
            )}
          </div>

          {errorMessage?.image && (
            <div className="text-orange-700 dark:text-red-500 text-base">
              {Array.isArray(errorMessage.image)
                ? errorMessage.image.join(", ")
                : errorMessage.image}
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
              className={`w-full 480px:w-auto 480px:px-[50px] text-customBlue dark:text-white bg-bgMedium  dark:bg-indigo-600 font-medium py-3  rounded-full inline-block hover:bg-bgDark dark:hover:bg-indigo-500 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] mt-4 480px:self-end ${
                loading ? " cursor-not-allowed" : ""
              }`}
            >
              <span>
                {loading
                  ? t("updating")
                  : success
                  ? t("update-again")
                  : error
                  ? t("retry")
                  : t("update")}
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
