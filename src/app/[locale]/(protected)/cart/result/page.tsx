import type { Stripe } from "stripe";
import { createClient } from "@/src/utils/supabase/server";
import { stripe } from "@/src/lib/stripe";
import { Link } from "@/src/i18n/routing";
import { getLocale, getTranslations } from "next-intl/server";

export default async function ResultPage(props: {
  searchParams: Promise<{ session_id: string }>;
}): Promise<JSX.Element> {
  const supabase = await createClient();
  const t = await getTranslations("Order");
  const locale = await getLocale();

  const searchParams = await props.searchParams;
  if (!searchParams.session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ["line_items", "payment_intent"],
    });

  const productIdsString = checkoutSession.metadata?.product_ids;
  if (!productIdsString) {
    throw new Error("No product IDs found in the session metadata.");
  }

  const itemIds = productIdsString.split(",").map((id) => parseInt(id));

  const { data: cartItems, error: cartError } = await supabase
    .from("cart")
    .select("product_id, quantity")
    .in("id", itemIds);

  const productIdsFromCart = cartItems?.map((item) => item.product_id) || [];

  const userResponse = await supabase.auth.getUser();
  const userId = userResponse.data.user?.id;

  if (!userId) throw new Error("User is not authenticated.");

  const totalPrice = checkoutSession.amount_total || 0;

  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert([
      {
        user_id: userId,
        total_price: totalPrice,
        stripe_session_id: searchParams.session_id,
      },
    ])
    .select()
    .single();

  if (orderError) {
    console.error("Error inserting order:", orderError);
    throw new Error("Failed to create order.");
  }

  const { data: products, error: productError } = await supabase
    .from("products")
    .select("*")
    .in("id", productIdsFromCart);

  if (productError) {
    throw new Error("Failed to fetch product details.");
  }

  if (!cartItems) {
    throw new Error("Cart items not found.");
  }

  const orderItemInserts = cartItems.map((cartItem) => {
    return supabase.from("order_items").insert({
      order_id: order.id,
      product_id: cartItem.product_id,
      quantity: cartItem.quantity,
      price_at_purchase:
        products.find((p) => p.id === cartItem.product_id)?.price || 0,
    });
  });

  await Promise.all(orderItemInserts);

  const { error: clearCartError } = await supabase
    .from("cart")
    .delete()
    .eq("user_id", userId);

  if (clearCartError) {
    console.error("Error clearing the cart:", clearCartError);
    throw new Error("Failed to clear cart.");
  }

  return (
    <div className="h-screen px-6 flex flex-col items-center justify-center  bg-bgLight dark:bg-darkModeBorder  tracking-tighter text-center font-bold">
      <h2
        className={`text-[32px]  770px:text-[64px] 990px:text-[80px]  mb-5 770px:mb-10 dark:text-darkModeTextTertiary ${
          locale === "en"
            ? "-tracking-[2px] 480px:-tracking-[3px] 770px:-tracking-[4px] 480px:text-5xl"
            : "min-[520px]:text-5xl"
        }`}
      >
        {t("title")}
      </h2>
      <p
        className={`text-lg text-customGray dark:text-darkModeTextTertiary mb-6 770px:mb-10   ${
          locale === "en"
            ? "tracking-tighter leading-tight max-w-[400px]"
            : "tracking-wide"
        }`}
      >
        {t("description")}
      </p>
      <Link
        href={"/account/orders"}
        className={`w-full 480px:w-auto text-base text-white bg-customBlue dark:bg-indigo-600 rounded-full py-3 px-[50px] inline-block hover:bg-customBlueDarker dark:hover:bg-indigo-500 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
          locale === "en" ? "tracking-tighter" : "tracking-wide"
        }`}
      >
        {t("button")}
      </Link>
    </div>
  );
}
