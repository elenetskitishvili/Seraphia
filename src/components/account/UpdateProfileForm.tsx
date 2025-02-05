"use client";

import { signOutAction } from "@/src/app/actions/authActions";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { z } from "zod";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";
import { updateProfile } from "@/src/app/actions/updateProfile";

type UpdateProfileFormProps = {
  fullName: string | null;
  phone: string | null;
  makesJewelry: boolean;
  address: string | null;
  userId: string;
};

interface ErrorMessages {
  fullName?: string | string[];
  phone?: string | string[];
  address?: string | string[];
  userId?: string | string[];
  makesJewelry?: string | string[];
}

const getUserProfileSchema = (t: (key: string) => string) =>
  z.object({
    fullName: z
      .string()
      .min(1, { message: t("required") })
      .regex(/^\S+\s+\S+/, { message: t("invalid-full-name") }),
    phone: z
      .string()
      .min(9, { message: t("invalid-phone") })
      .max(15, { message: t("invalid-phone") })
      .regex(/^\+?\d+$/, { message: t("invalid-phone-format") }),
    address: z.string().min(20, { message: t("invalid-address") }),
    makesJewelry: z.boolean(),
  });

export default function UpdateProfileForm({
  fullName,
  phone,
  makesJewelry,
  address,
  userId,
}: UpdateProfileFormProps) {
  const t = useTranslations("Profile");
  const locale = useLocale();
  const userProfileSchema = getUserProfileSchema(t);

  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<ErrorMessages>({
    fullName: "",
    phone: "",
    makesJewelry: "",
    address: "",
  });

  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const formValues = {
      fullName: formData.get("fullName") as string,
      phone: formData.get("phone") as string,
      makesJewelry: formData.get("makesJewelry") === "on",
      address: formData.get("address") as string,
    };

    try {
      setErrorMessage({
        fullName: "",
        phone: "",
        makesJewelry: "",
        address: "",
      });

      setError(null);
      setSuccess(null);
      setLoading(true);

      const result = userProfileSchema.safeParse(formValues);

      if (!result.success) {
        const errorObj = result.error.flatten().fieldErrors;

        setErrorMessage(errorObj);

        return;
      }

      await updateProfile(formData);
      setSuccess("Profile was updated successfully");
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
      <form action={updateProfile} onSubmit={handleSubmit} className="mb-10">
        <div className="flex flex-col gap-4 px-6 770px:px-10 990px:px-3 min-[1200px]:px-6 ">
          {/* NAME */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="fullName"
              className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold  leading-6 ${
                locale === "en" ? "tracking-tight" : ""
              }`}
            >
              {t("full-name")}
            </label>
            {loading ? (
              <Skeleton borderRadius={0} className="h-[53px] w-full" />
            ) : (
              <input
                type="text"
                id="fullName"
                name="fullName"
                defaultValue={fullName || ""}
                placeholder={t("enter-full-name")}
                className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
              />
            )}
          </div>

          {errorMessage?.fullName && (
            <div className="text-orange-700 text-base">
              {Array.isArray(errorMessage.fullName)
                ? errorMessage.fullName.join(", ")
                : errorMessage.fullName}
            </div>
          )}

          {/* PHONE NUMBER */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="phone"
              className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold  leading-6 ${
                locale === "en" ? "tracking-tight" : ""
              }`}
            >
              {t("phone")}
            </label>
            {loading ? (
              <Skeleton borderRadius={0} className="h-[53px] w-full" />
            ) : (
              <input
                type="tel"
                id="phone"
                name="phone"
                defaultValue={phone || ""}
                placeholder={t("enter-phone")}
                className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none"
              />
            )}
          </div>

          {errorMessage?.phone && (
            <div className="text-orange-700 text-base">
              {Array.isArray(errorMessage.phone)
                ? errorMessage.phone.join(", ")
                : errorMessage.phone}
            </div>
          )}

          {/* MAKES JEWELRY */}
          <div className="flex items-center gap-3 py-3">
            <input
              type="checkbox"
              id="makesJewelry"
              name="makesJewelry"
              defaultChecked={makesJewelry}
              className="w-5 h-5 cursor-pointer"
              disabled={loading}
            />

            <label
              htmlFor="makesJewelry"
              className={`text-[15px] text-customGray dark:text-darkModeTextTertiary font-bold tracking-tight leading-6 cursor-pointer ${
                locale === "en" ? "tracking-tight" : ""
              }`}
            >
              {t("makes-jewelry")}
            </label>
          </div>

          {errorMessage?.makesJewelry && (
            <div className="text-orange-700 text-base">
              {Array.isArray(errorMessage.makesJewelry)
                ? errorMessage.makesJewelry.join(", ")
                : errorMessage.makesJewelry}
            </div>
          )}
          {/* ADDRESS */}
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="address"
              className={`text-sm text-customGray dark:text-darkModeTextTertiary font-bold tracking-tight leading-6 ${
                locale === "en" ? "tracking-tight" : ""
              }`}
            >
              {t("address")}
            </label>
            {loading ? (
              <Skeleton
                borderRadius={0}
                className="h-[76px] 990px:h-[163px] w-full"
              />
            ) : (
              <textarea
                id="address"
                name="address"
                placeholder={t("address")}
                defaultValue={address || ""}
                className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder py-[15px] px-4 focus:border-customBlue focus:ring-0 outline-none 990px:h-[168px]"
              />
            )}
          </div>

          {errorMessage?.address && (
            <div className="text-orange-700 text-base">
              {Array.isArray(errorMessage.address)
                ? errorMessage.address.join(", ")
                : errorMessage.address}
            </div>
          )}

          {error && (
            <p className="text-orange-700 text-lg text-center min-[520px]:mt-3">
              {t("result-fail")}
            </p>
          )}
          {success && (
            <p
              className="text-customBlue text-lg text-center text-bold min-[520px]:mt-3"
              data-cy="product-creation-success-message"
            >
              {t("result-success")}
            </p>
          )}

          {/* SUBMIT BUTTON */}
          <div className="480px:self-end">
            <button
              className={`w-full 480px:w-auto 480px:px-[50px]  text-customBlue dark:text-white bg-bgLight dark:bg-indigo-600 font-medium py-3  rounded-sm dark:rounded-full inline-block hover:bg-bgMedium dark:hover:bg-indigo-500 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] mt-4 ${
                loading ? " cursor-not-allowed" : ""
              }`}
            >
              <span>
                {loading
                  ? t("updating")
                  : success
                  ? t("updated")
                  : error
                  ? t("retry")
                  : t("update")}
              </span>
            </button>
          </div>
        </div>
      </form>

      <form
        action={signOutAction}
        className="770px:hidden py-6 px-6  border-t border-t-bgBtn 480px:flex 480px:items-center 480px:justify-center "
      >
        <input type="hidden" name="locale" value={locale} />
        <button
          type="submit"
          className="w-full 480px:w-[250px] 480px:px-[50px]  text-white bg-customBlue dark:bg-indigo-600 font-medium py-3  rounded-sm inline-block hover:bg-customBlueDarker dark:hover:bg-indigo-500 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] mt-4 "
        >
          Sign out
        </button>
      </form>
    </>
  );
}
