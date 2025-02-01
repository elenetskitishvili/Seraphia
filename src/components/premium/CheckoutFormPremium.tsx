"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import { createPremiumCheckoutSession } from "@/src/app/actions/createPremiumCheckoutSession";

export default function CheckoutFormPremium() {
  const t = useTranslations("Pricing");
  const [loading, setLoading] = useState<boolean>(false);
  const locale = useLocale();

  const formAction = async (): Promise<void> => {
    setLoading(true);

    const formData = new FormData();
    formData.append("uiMode", "hosted");
    formData.append("priceId", "price_1QnOM4DzVRyJ9zCnBtF8PM5A");
    formData.append("locale", locale);

    const { url } = await createPremiumCheckoutSession(formData);

    if (url) {
      window.location.assign(url);
    }

    setLoading(false);
  };

  return (
    <>
      <button
        onClick={formAction}
        disabled={loading}
        className="btn relative inline-block rounded-full transition-all duration-200 px-20 py-[15px] bg-white text-[#777] hover:-translate-y-[3px] active:-translate-y-[1px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
      >
        {t("premium-btn")}
      </button>
    </>
  );
}
