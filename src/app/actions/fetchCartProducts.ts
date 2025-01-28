"use server";

import { createClient } from "@/src/utils/supabase/server";
import { CartItem, Product } from "@/src/types/types";

export async function fetchCartProducts() {
  try {
    const supabase = await createClient();
    const userResponse = await supabase.auth.getUser();
    const userId = userResponse.data.user?.id;
    if (!userId) throw new Error("User not authenticated.");

    // წამოვიღეთ კალათიდან აითემები რაოდენობითურთ გვიბრუნდება ობიექტების ერეი
    const { data: cartItems, error: cartError } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", userId);

    if (cartError)
      throw new Error(`Error fetching cart items: ${cartError.message}`);
    if (!cartItems || cartItems.length === 0) return [];

    // გავაკეთეთ ერეი იმ პროდუქტების, რომლებიც უნდა წამოვიღოთ.
    const productIds = cartItems.map((item) => item.product_id);

    // წამოვიღეთ პროდუქტები, რომლებიც კალათაში უნდა გამოჩნდეს, ობიექტების ერეია ესეც.
    const { data: products, error: productsError } = await supabase
      .from("products")
      .select("*")
      .in("id", productIds);

    if (productsError)
      throw new Error(`Error fetching products: ${productsError.message}`);

    // გავაკეთეთ მეფი, თითოეულ პროდუქტის აიდის თავისი პროდუქტის ინფორმაცია შევუთავსეთ
    const productMap: Record<number, Product> = {};
    products.forEach((product) => {
      productMap[product.id] = product;
    });

    // ვაბრუნებთ ქართის აითემს, სადაც დავამატეთ ფროფერთიდ შესაბამისი პროდუქტის ინფორმაცია.
    return cartItems.map((cartItem) => ({
      ...cartItem,
      product: productMap[cartItem.product_id] || null,
    }));
  } catch (err) {
    console.error("Error fetching cart products:", (err as Error).message);
    return [];
  }
}
