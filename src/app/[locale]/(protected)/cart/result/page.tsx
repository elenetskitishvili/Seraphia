import type { Stripe } from "stripe";
import { createClient } from "@/src/utils/supabase/server";
import { stripe } from "@/src/lib/stripe";

export default async function ResultPage(props: {
  searchParams: Promise<{ session_id: string }>;
}): Promise<JSX.Element> {
  const supabase = await createClient();

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

  console.log("cartItems🤩", cartItems);
  console.log("cartError🤩", cartError);
  console.log("productIdsFromCart🤩", productIdsFromCart);

  // if (cartError) {
  //   console.error("Error fetching products from Supabase:", cartError);
  //   throw new Error("Failed to fetch product details.");
  // }

  const userResponse = await supabase.auth.getUser();
  const userId = userResponse.data.user?.id;
  console.log("userId🤩", userId);

  if (!userId) throw new Error("User is not authenticated.");

  const totalPrice = (checkoutSession.amount_total || 0) * 100;
  console.log("totalPrice🤩", totalPrice);

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

  console.log("order🤩", order);
  console.log("orderError🤩", orderError);

  if (orderError) {
    console.error("Error inserting order:", orderError);
    throw new Error("Failed to create order.");
  }

  const { data: products, error: productError } = await supabase
    .from("products")
    .select("*")
    .in("id", productIdsFromCart);

  console.log("products🤩", products);
  console.log("productError🤩", productError);

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

  console.log("clearCartError🤩", clearCartError);

  if (clearCartError) {
    console.error("Error clearing the cart:", clearCartError);
    throw new Error("Failed to clear cart.");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className=" p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">
          Thank you for your purchase!
        </h1>
      </div>
    </div>
  );
}
