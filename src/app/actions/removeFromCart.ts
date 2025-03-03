"use server";

import { createClient } from "@/src/utils/supabase/server";

export async function removeFromCart(itemId: number) {
  const supabase = await createClient();
  try {
    const userResponse = await supabase.auth.getUser();
    const userId = userResponse.data.user?.id;

    if (!userId) throw new Error("User not authenticated.");

    const { data: existingItem } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", userId)
      .eq("product_id", itemId)
      .single();

    const { error } = await supabase
      .from("cart")
      .delete()
      .eq("user_id", userId)
      .eq("product_id", itemId);

    if (error) {
      throw new Error("Failed to remove item from cart.");
    }
  } catch (error) {
    console.error("removeFromCart error:", error);
  }
}
