"use client";

import { z } from "zod";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { editProduct } from "@/src/app/actions/editProduct";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import { useState } from "react";
import { Product } from "@/src/types/types";
import ImagesUpload from "./ImagesUpload";
import { useRouter } from "next/navigation";

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
      .array(z.union([z.string(), z.instanceof(File)]))
      .min(1, { message: t("requirement-image") }),
  });

export default function EditProductForm({ product }: { product: Product }) {
  const t = useTranslations("CreateProduct");
  const locale = useLocale();
  const productSchema = getProductSchema(t);

  const router = useRouter();

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

  const [images, setImages] = useState<(string | File)[]>(product.images || []);

  const handleImagesChange = (updatedImages: (string | File)[]) => {
    setImages(updatedImages);
  };

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
      images: images,
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

      const result = productSchema.safeParse(formValues);

      if (!result.success) {
        const errorObj = result.error.flatten().fieldErrors;

        setErrorMessage(errorObj);

        return;
      }

      formData.append("productId", product.id.toString());

      images.forEach((image) => {
        if (typeof image === "string") {
          formData.append("existingImages", image);
        } else {
          formData.append("images", image);
        }
      });

      await editProduct(formData);
      router.refresh();
      setSuccess("Product was added successfully");
      window.location.reload();
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
            <p
              className={`text-lg text-customGray dark:text-darkModeTextTertiary font-bold leading-6 max-w-[300px] ${
                locale === "en" ? "tracking-tighter" : ""
              }`}
            >
              {t("message1")}
            </p>
            <p
              className={`text-lg text-customGray dark:text-darkModeTextTertiary font-bold leading-6 max-w-[300px] ${
                locale === "en" ? "tracking-tighter" : ""
              }`}
            >
              {t("message2")}
            </p>
            <p
              className={`text-lg text-customGray dark:text-darkModeTextTertiary font-bold leading-6 max-w-[300px] ${
                locale === "en" ? "tracking-tighter" : ""
              }`}
            >
              {t("message3")}
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* ENGLISH NAME */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="nameEn"
                className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold  leading-6 ${
                  locale === "en" ? "tracking-tighter" : ""
                }`}
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
                  defaultValue={product.name_en}
                  placeholder="Enter product name in English"
                  className="border dark:border-b-[3px] border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
                />
              )}
            </div>

            {errorMessage?.nameEn && (
              <div className="text-orange-700 dark:text-red-500 text-base">
                {Array.isArray(errorMessage.nameEn)
                  ? errorMessage.nameEn.join(", ")
                  : errorMessage.nameEn}
              </div>
            )}

            {/* GEORGIAN NAME */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="nameKa"
                className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold leading-6 ${
                  locale === "en" ? "tracking-tighter" : ""
                }`}
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
                  defaultValue={product.name_ka}
                  placeholder="პროდუქტის სახელი ქართულად"
                  className="border dark:border-b-[3px] border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
                />
              )}
            </div>

            {errorMessage?.nameKa && (
              <div className="text-orange-700 dark:text-red-500 text-base">
                {Array.isArray(errorMessage.nameKa)
                  ? errorMessage.nameKa.join(", ")
                  : errorMessage.nameKa}
              </div>
            )}

            {/* PRICE */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="price"
                className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold leading-6 ${
                  locale === "en" ? "tracking-tighter" : ""
                }`}
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
                  defaultValue={product.price / 100}
                  min="0.01"
                  step="0.01"
                  placeholder={t("price-placeholder")}
                  className="border dark:border-b-[3px] border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
                />
              )}
            </div>

            {errorMessage?.price && (
              <div className="text-orange-700 dark:text-red-500 text-base">
                {Array.isArray(errorMessage.price)
                  ? errorMessage.price.join(", ")
                  : errorMessage.price}
              </div>
            )}

            {/* ENGLISH DESCRIPTION */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="descriptionEn"
                className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold leading-6 ${
                  locale === "en" ? "tracking-tighter" : ""
                }`}
              >
                {t("description-en")}
              </label>
              {loading ? (
                <Skeleton borderRadius={0} className="h-[76px] w-full" />
              ) : (
                <textarea
                  id="descriptionEn"
                  name="descriptionEn"
                  defaultValue={product.description_en}
                  placeholder="Enter product description in English"
                  className="border dark:border-b-[3px] border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
                  data-cy="product-description-input"
                />
              )}
            </div>

            {errorMessage?.descriptionEn && (
              <div className="text-orange-700 dark:text-red-500 text-base">
                {Array.isArray(errorMessage.descriptionEn)
                  ? errorMessage.descriptionEn.join(", ")
                  : errorMessage.descriptionEn}
              </div>
            )}

            {/* GEORGIAN DESCRIPTION */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="descriptionKa"
                className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold leading-6 ${
                  locale === "en" ? "tracking-tighter" : ""
                }`}
              >
                {t("description-ka")}
              </label>

              {loading ? (
                <Skeleton borderRadius={0} className="h-[76px] w-full" />
              ) : (
                <textarea
                  id="descriptionKa"
                  name="descriptionKa"
                  defaultValue={product.description_ka}
                  placeholder="პროდუქტის აღწერა ქართულად"
                  className="border dark:border-b-[3px] border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
                />
              )}
            </div>

            {errorMessage?.descriptionKa && (
              <div className="text-orange-700 dark:text-red-500 text-base">
                {Array.isArray(errorMessage.descriptionKa)
                  ? errorMessage.descriptionKa.join(", ")
                  : errorMessage.descriptionKa}
              </div>
            )}

            {/* CATEGORY */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="category"
                className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold leading-6 ${
                  locale === "en" ? "tracking-tighter" : ""
                }`}
              >
                {t("category")}
              </label>
              {loading ? (
                <Skeleton borderRadius={0} className="h-[47px] w-full" />
              ) : (
                <select
                  id="category"
                  name="category"
                  defaultValue={product.category}
                  className="border dark:border-b-[3px] border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:focus:border-b-indigo-800 focus:ring-0 outline-none"
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
              <div className="text-orange-700 dark:text-red-500 text-base">
                {Array.isArray(errorMessage.category)
                  ? errorMessage.category.join(", ")
                  : errorMessage.category}
              </div>
            )}

            {/* IMAGES */}
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="images"
                className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold leading-6 ${
                  locale === "en" ? "tracking-tighter" : ""
                }`}
              >
                {t("images")}
              </label>
              {loading ? (
                <Skeleton borderRadius={0} className="h-[175px] w-full" />
              ) : (
                <div className="border dark:border-b-[3px] border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue dark:focus:border-b-indigo-800 focus:ring-0 outline-none">
                  <ImagesUpload
                    existingImages={product.images}
                    onImagesChange={handleImagesChange}
                  />
                </div>
              )}
            </div>

            {errorMessage?.images && (
              <div className="text-orange-700 dark:text-red-500 text-base">
                {Array.isArray(errorMessage.images)
                  ? errorMessage.images.join(", ")
                  : errorMessage.images}
              </div>
            )}

            {/* PRODUCT ID */}
            <input type="hidden" name="productId" value={product.id} />

            <div className="flex flex-col min-[520px]:flex-row items-center justify-center min-[520px]:justify-end min-[520px]:gap-6 770px:gap-20 990px:gap-[120px]">
              {/* RESULT */}

              {error && (
                <p className="text-orange-700 dark:text-red-500 text-lg text-center min-[520px]:mt-3">
                  {t("update-fail")}
                </p>
              )}
              {success && (
                <p className="text-green-700 dark:text-indigo-400 text-lg text-center text-bold min-[520px]:mt-3">
                  {t("update-success")}
                </p>
              )}

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className={`w-full 480px:w-auto 480px:px-[50px] text-customBlue dark:text-white bg-bgMedium dark:bg-indigo-600 font-medium py-3  rounded-full inline-block hover:bg-bgDark dark:hover:bg-indigo-500 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] mt-4 480px:self-end ${
                  loading ? " cursor-not-allowed" : ""
                }`}
                data-cy="edit-product-button"
              >
                {loading
                  ? t("updating")
                  : success
                  ? t("updated")
                  : error
                  ? t("retry")
                  : t("update")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
