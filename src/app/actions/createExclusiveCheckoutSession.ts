"use server";

import type { Stripe } from "stripe";
import { headers } from "next/headers";
import { stripe } from "@/src/lib/stripe";

export async function createExclusiveCheckoutSession(data: FormData) {
  const ui_mode = data.get(
    "uiMode"
  ) as Stripe.Checkout.SessionCreateParams.UiMode;
  const priceId = data.get("priceId") as string;
  const locale = data.get("locale") || "en";

  const origin: string =
    (await headers()).get("origin") || process.env.NEXT_PUBLIC_SITE_URL!;

  if (!priceId) {
    throw new Error(
      "Price ID is required for subscriptions but was not provided."
    );
  }

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
    {
      price: priceId,
      quantity: 1,
    },
  ];

  const successUrl = `${origin}/${locale}/pricing/result-exclusive?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${origin}/${locale}/pricing`;

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "subscription",
      success_url: successUrl,
      cancel_url: cancelUrl,
      ui_mode,
    });

  return {
    client_secret: checkoutSession.client_secret,
    url: checkoutSession.url,
  };
}
