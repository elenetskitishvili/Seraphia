"use client";

import { useLocale } from "next-intl";
import React, { useState } from "react";
// import { createCheckoutSession } from "../actions/stripe";

export default function CheckoutFormPremium() {
  const [loading, setLoading] = useState<boolean>(false);
  const locale = useLocale();

  const formAction = async (): Promise<void> => {
    setLoading(true);

    const formData = new FormData();
    formData.append("uiMode", "hosted");
    formData.append("priceId", "price_1QWjnEDzVRyJ9zCn2ZqfDTWs");
    formData.append("locale", locale);
    formData.append("purchaseType", "subscription");

    // const { url } = await createCheckoutSession(formData);

    // if (url) {
    //   window.location.assign(url);
    // }

    setLoading(false);
  };

  return (
    <>
      <button
        className="block bg-purple-800 hover:bg-purple-600 transition-all text-white rounded-full px-10 py-5 mt-10 text-center"
        onClick={formAction}
        disabled={loading}
      >
        Subscribe for $19.99/month
      </button>
    </>
  );
}
