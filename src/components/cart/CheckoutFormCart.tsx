"use client";

import { createProductCheckoutSession } from "@/src/app/actions/createProductCheckoutSession";
import { CartItem } from "@/src/types/types";
import { useLocale } from "next-intl";
import { useState } from "react";

export default function CheckoutFormCart({
  items,
}: {
  items: CartItem[];
}): JSX.Element {
  const locale = useLocale();
  const [loading, setLoading] = useState<boolean>(false);

  const formAction = async (): Promise<void> => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("uiMode", "hosted");
      formData.append("locale", locale);
      formData.append(
        "lineItems",
        JSON.stringify(
          items.map((item) => ({
            id: item.id,
            price: item.product?.stripe_price_id,
            quantity: item.quantity,
          }))
        )
      );

      const { url } = await createProductCheckoutSession(formData);

      if (url) {
        window.location.assign(url);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={formAction}
        disabled={loading}
        className="mt-4 w-full text-base py-2 rounded-full text-white bg-customBlueDarker font-bold inline-block hover:bg-customBlue transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
      >
        {loading ? "Processing..." : "Checkout"}
      </button>
    </>
  );
}
