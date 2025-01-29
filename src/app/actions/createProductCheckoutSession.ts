"use server";

import type { Stripe } from "stripe";
import { headers } from "next/headers";
import { stripe } from "@/src/lib/stripe";

export async function createProductCheckoutSession(data: FormData) {
  const ui_mode = data.get(
    "uiMode"
  ) as Stripe.Checkout.SessionCreateParams.UiMode;

  const origin: string =
    (await headers()).get("origin") || process.env.NEXT_PUBLIC_SITE_URL!;
  const locale = data.get("locale") || "en";

  const lineItemsRaw = data.get("lineItems");

  if (!lineItemsRaw) {
    throw new Error("Missing lineItems in request.");
  }
  let lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  let productIds: number[] = [];

  try {
    const parsedLineItems = JSON.parse(lineItemsRaw as string) as {
      price: string;
      quantity: number;
      id: number;
    }[];

    lineItems = parsedLineItems.map((item) => {
      if (!item.price) {
        throw new Error(`Missing price for product ID ${item.id}`);
      }
      return {
        price: item.price,
        quantity: item.quantity,
      };
    });

    productIds = parsedLineItems.map((item) => item.id);
  } catch (error) {
    throw new Error("Invalid line items format. Must be a JSON string.");
  }

  const successUrl = `${origin}/${locale}/cart/result?session_id={CHECKOUT_SESSION_ID}`;

  const cancelUrl = `${origin}/${locale}/cart`;

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      success_url: successUrl,
      cancel_url: cancelUrl,
      ui_mode,
      metadata: { product_ids: productIds.join(",") },
    });

  return {
    client_secret: checkoutSession.client_secret,
    url: checkoutSession.url,
  };
}
