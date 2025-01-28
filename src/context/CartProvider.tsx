"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/src/utils/supabase/client";

interface CartContextType {
  cartCount: number;
  updateCartCount: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const supabase = createClient();

  useEffect(() => {
    async function fetchCartCount() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data: cartItems, error } = await supabase
        .from("cart")
        .select("product_id")
        .eq("user_id", user.id);

      if (error) {
        console.error("Error fetching cart count:", error);
        return;
      }

      setCartCount(cartItems.length);
    }

    fetchCartCount();

    const channel = supabase
      .channel("cart-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "cart",
        },
        fetchCartCount
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const updateCartCount = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data: cartItems, error } = await supabase
      .from("cart")
      .select("product_id")
      .eq("user_id", user.id);

    if (error) {
      console.error("Error fetching updated cart count:", error);
      return;
    }

    setCartCount(cartItems.length);
  };

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
