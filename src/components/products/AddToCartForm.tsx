"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { z } from "zod";
import { addToCart } from "@/src/app/actions/addToCart";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useCart } from "@/src/context/CartProvider";
import { createClient } from "@/src/utils/supabase/client";

interface ErrorMessages {
  quantity?: string | string[];
}

const getCartSchema = (t: (key: string) => string) =>
  z.object({
    quantity: z
      .number()
      .int({ message: t("whole-number") })
      .positive({ message: t("positive-number") })
      .max(5, { message: t("max-quantity") }),
  });

export default function AddToCartForm({ productId }: { productId: string }) {
  const t = useTranslations("ProductDetails");
  const locale = useLocale();
  const cartSchema = getCartSchema(t);
  const { updateCartCount } = useCart();
  const supabase = createClient();

  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<ErrorMessages>({
    quantity: "",
  });

  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const quantity = Number(formData.get("quantity"));

    try {
      setErrorMessage({
        quantity: "",
      });

      setError(null);
      setSuccess(null);
      setLoading(true);

      const result = cartSchema.safeParse({ quantity });

      if (!result.success) {
        const errorObj = result.error.flatten().fieldErrors;

        setErrorMessage({ quantity: errorObj.quantity?.[0] || "" });

        return;
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError("User not authenticated.");
        return;
      }

      const { data: cartItems } = await supabase
        .from("cart")
        .select("product_id")
        .eq("user_id", user.id);

      const isNewProduct = !cartItems?.some(
        (item) => item.product_id === productId
      );

      await addToCart({ productId, quantity });

      if (isNewProduct) {
        updateCartCount("increase");
      }
      setSuccess(t("cart-success"));
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
      className="grid grid-cols-1 480px:grid-cols-[2fr_1fr] gap-4 mt-12 990px:max-w-[560px]"
    >
      <button
        type="submit"
        className={`w-full py-[11px] px-4 text-white bg-customBlue rounded-full hover:bg-customBlueDarker transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
          loading ? " cursor-not-allowed opacity-70" : "opacity-100"
        } order-1 480px:order-none`}
      >
        {loading
          ? t("adding")
          : success
          ? t("added")
          : error
          ? t("retry")
          : t("add")}
      </button>
      {loading ? (
        <Skeleton borderRadius="9999px" className="h-[42px] w-full" />
      ) : (
        <input
          type="number"
          defaultValue="1"
          name="quantity"
          min="1"
          step="0.01"
          placeholder={t("quantity-placeholder")}
          className="w-full py-[10px] px-[18px] rounded-full border border-bgBtn text-customGray bg-bgLighter focus:border-customBlue focus:ring-0 outline-none"
        />
      )}

      {errorMessage?.quantity && (
        <div className="text-orange-700 text-base text-right col-span-1 480px:col-span-2">
          {Array.isArray(errorMessage.quantity)
            ? errorMessage.quantity.join(", ")
            : errorMessage.quantity}
        </div>
      )}

      {error && (
        <p className="text-orange-700 text-lg min-[520px]:mt-3 text-center 480px:text-right col-span-1 480px:col-span-2 order-last ">
          {t("result-fail")}
        </p>
      )}
      {success && (
        <p
          className="text-customBlue text-lg text-bold min-[520px]:mt-3 text-center 480px:text-right col-span-1 480px:col-span-2 order-last"
          data-cy="product-creation-success-message"
        >
          {t("result-success")}
        </p>
      )}
    </form>
  );
}
