"use client";

import { z } from "zod";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { addProduct } from "@/src/app/actions/addProduct";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import { useState } from "react";

interface ErrorMessages {
  nameEn?: string | string[];
  nameKa?: string | string[];
  descriptionEn?: string | string[];
  descriptionKa?: string | string[];
  category?: string | string[];
  price?: string | string[];
  images?: string | string[];
}

const getProductSchema = (t: (key: string) => string) =>
  z.object({
    nameEn: z
      .string()
      .min(3, { message: t("name-en-min") })
      .max(50, { message: t("name-en-max") }),
    nameKa: z
      .string()
      .min(3, { message: t("name-ka-min") })
      .max(50, { message: t("name-ka-max") }),
    descriptionEn: z
      .string()
      .min(20, { message: t("description-en-min") })
      .max(500, { message: t("description-en-max") }),
    descriptionKa: z
      .string()
      .min(20, { message: t("description-ka-min") })
      .max(500, { message: t("description-ka-max") }),
    category: z
      .string()
      .refine((val) => val !== "", { message: t("requirement-category") }),
    price: z.preprocess(
      (val) => parseFloat(val as string),
      z
        .number()
        .positive({ message: t("price-positive") })
        .min(10, { message: t("price-min") })
    ),
    images: z
      .array(
        z.instanceof(File).refine((file) => file.size > 0, {
          message: t("requirement-image-url"),
        })
      )
      .min(1, { message: t("requirement-image") }),
  });

export default function AddProductForm() {
  const t = useTranslations("CreateProduct");
  const locale = useLocale();
  const contactSchema = getProductSchema(t);

  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<ErrorMessages>({
    nameEn: "",
    nameKa: "",
    descriptionEn: "",
    descriptionKa: "",
    category: "",
    price: "",
    images: "",
  });

  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const formValues = {
      nameEn: formData.get("nameEn") as string,
      nameKa: formData.get("nameKa") as string,
      descriptionEn: formData.get("descriptionEn") as string,
      descriptionKa: formData.get("descriptionKa") as string,
      category: (formData.get("category") as string) || "",
      price: parseFloat(formData.get("price") as string) || 0,
      images: formData.getAll("images") as File[],
    };

    try {
      setErrorMessage({
        nameEn: "",
        nameKa: "",
        descriptionEn: "",
        descriptionKa: "",
        category: "",
        price: "",
        images: "",
      });

      setError(null);
      setSuccess(null);
      setLoading(true);

      const result = contactSchema.safeParse(formValues);

      if (!result.success) {
        const errorObj = result.error.flatten().fieldErrors;

        setErrorMessage(errorObj);

        return;
      }

      await addProduct(formData);
      setSuccess("Product was added successfully");
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
    <>
      <section className="max-w-[1360px] mx-auto mb-[60px] 480px:mb-20 770px:mb-[120px] 990px:mb-40 pt-10 px-6 770px:px-10">
        <div className="grid grid-cols-1 gap-10 990px:grid-cols-[31fr_69fr]">
          <div className="flex flex-col gap-[14px] mt-6">
            <p className="text-lg text-customGray font-bold tracking-tighter leading-6 max-w-[300px]">
              {t("message1")}
            </p>
            <p className="text-lg text-customGray font-bold tracking-tighter leading-6 max-w-[300px]">
              {t("message2")}
            </p>
            <p className="text-lg text-customGray font-bold tracking-tighter leading-6 max-w-[300px]">
              {t("message3")}
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* ENGLISH NAME */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="nameEn"
                className="text-sm text-customGray font-bold tracking-tighter leading-6"
              >
                {t("name-en")}
              </label>

              {loading ? (
                <Skeleton borderRadius={0} className="h-[52px] w-full" />
              ) : (
                <input
                  type="text"
                  id="nameEn"
                  name="nameEn"
                  defaultValue=""
                  placeholder="Enter product name in English"
                  className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
                />
              )}
            </div>

            {errorMessage?.nameEn && (
              <div className="text-orange-700 text-base">
                {Array.isArray(errorMessage.nameEn)
                  ? errorMessage.nameEn.join(", ")
                  : errorMessage.nameEn}
              </div>
            )}

            {/* GEORGIAN NAME */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="nameKa"
                className="text-sm text-customGray font-bold tracking-tighter leading-6"
              >
                {t("name-ka")}
              </label>
              {loading ? (
                <Skeleton borderRadius={0} className="h-[52px] w-full" />
              ) : (
                <input
                  type="text"
                  id="nameKa"
                  name="nameKa"
                  defaultValue=""
                  placeholder="პროდუქტის სახელი ქართულად"
                  className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
                />
              )}
            </div>

            {errorMessage?.nameKa && (
              <div className="text-orange-700 text-base">
                {Array.isArray(errorMessage.nameKa)
                  ? errorMessage.nameKa.join(", ")
                  : errorMessage.nameKa}
              </div>
            )}

            {/* PRICE */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="price"
                className="text-sm text-customGray font-bold tracking-tighter leading-6"
              >
                {t("price")} <span className="tracking-normal">($)</span>
              </label>
              {loading ? (
                <Skeleton borderRadius={0} className="h-[52px] w-full" />
              ) : (
                <input
                  type="number"
                  id="price"
                  name="price"
                  defaultValue=""
                  min="0.01"
                  step="0.01"
                  placeholder={t("price-placeholder")}
                  className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
                />
              )}
            </div>

            {errorMessage?.price && (
              <div className="text-orange-700 text-base">
                {Array.isArray(errorMessage.price)
                  ? errorMessage.price.join(", ")
                  : errorMessage.price}
              </div>
            )}

            {/* ENGLISH DESCRIPTION */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="descriptionEn"
                className="text-sm text-customGray font-bold tracking-tighter leading-6"
              >
                {t("description-en")}
              </label>
              {loading ? (
                <Skeleton borderRadius={0} className="h-[76px] w-full" />
              ) : (
                <textarea
                  id="descriptionEn"
                  name="descriptionEn"
                  defaultValue=""
                  placeholder="Enter product description in English"
                  className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
                />
              )}
            </div>

            {errorMessage?.descriptionEn && (
              <div className="text-orange-700 text-base">
                {Array.isArray(errorMessage.descriptionEn)
                  ? errorMessage.descriptionEn.join(", ")
                  : errorMessage.descriptionEn}
              </div>
            )}

            {/* GEORGIAN DESCRIPTION */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="descriptionKa"
                className="text-sm text-customGray font-bold tracking-tighter leading-6"
              >
                {t("description-ka")}
              </label>

              {loading ? (
                <Skeleton borderRadius={0} className="h-[76px] w-full" />
              ) : (
                <textarea
                  id="descriptionKa"
                  name="descriptionKa"
                  defaultValue=""
                  placeholder="პროდუქტის აღწერა ქართულად"
                  className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
                />
              )}
            </div>

            {errorMessage?.descriptionKa && (
              <div className="text-orange-700 text-base">
                {Array.isArray(errorMessage.descriptionKa)
                  ? errorMessage.descriptionKa.join(", ")
                  : errorMessage.descriptionKa}
              </div>
            )}

            {/* CATEGORY */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="category"
                className="text-sm text-customGray font-bold tracking-tighter leading-6"
              >
                {t("category")}
              </label>
              {loading ? (
                <Skeleton borderRadius={0} className="h-[47px] w-full" />
              ) : (
                <select
                  id="category"
                  name="category"
                  defaultValue=""
                  className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
                >
                  <option value="" disabled>
                    {t("select-default")}
                  </option>
                  <option value="necklaces">{t("select-necklaces")}</option>
                  <option value="rings">{t("select-rings")}</option>
                  <option value="bracelets">{t("select-bracelets")}</option>
                  <option value="earrings">{t("select-earrings")}</option>
                </select>
              )}
            </div>

            {errorMessage?.category && (
              <div className="text-orange-700 text-base">
                {Array.isArray(errorMessage.category)
                  ? errorMessage.category.join(", ")
                  : errorMessage.category}
              </div>
            )}

            {/* IMAGES */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="images"
                className="text-sm text-customGray font-bold tracking-tighter leading-6"
              >
                {t("images")}
              </label>
              {loading ? (
                <Skeleton borderRadius={0} className="h-[57px] w-full" />
              ) : (
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  id="images"
                  name="images"
                  className="border border-gray-400 py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
                />
              )}
            </div>

            {errorMessage?.images && (
              <div className="text-orange-700 text-base">
                {Array.isArray(errorMessage.images)
                  ? errorMessage.images.join(", ")
                  : errorMessage.images}
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
                {loading
                  ? t("creating")
                  : success
                  ? t("createAnother")
                  : error
                  ? t("retry")
                  : t("create")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
