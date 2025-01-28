import { createClient } from "@/src/utils/supabase/client";

export async function addToCart({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) {
  const supabase = await createClient();
  const { data: user, error: authError } = await supabase.auth.getUser();

  if (authError || !user?.user) {
    throw new Error("User not authenticated.");
  }

  const userId = user.user.id;

  // Check if the product already exists in the cart
  const { data: existingCartItem, error: fetchError } = await supabase
    .from("cart")
    .select("id, quantity")
    .eq("user_id", userId)
    .eq("product_id", productId)
    .single();

  if (fetchError && fetchError.code !== "PGRST116") {
    throw new Error("Failed to check cart.");
  }

  if (existingCartItem) {
    // UPDATE QUANTITY IF PRODUCT IS ALREADY INSIDE CART
    const { error: updateError } = await supabase
      .from("cart")
      .update({ quantity: existingCartItem.quantity + quantity })
      .eq("id", existingCartItem.id);

    if (updateError) {
      throw new Error("Failed to update cart item.");
    }
  } else {
    // INSERT NEW PRODUCT INTO CART
    const { error: insertError } = await supabase.from("cart").insert([
      {
        user_id: userId,
        product_id: productId,
        quantity,
      },
    ]);

    if (insertError) {
      throw new Error("Failed to add to cart.");
    }
  }
}
