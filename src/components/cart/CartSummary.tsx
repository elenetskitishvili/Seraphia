"use client";

import { CartItem } from "@/src/types/types";
import CheckoutFormCart from "./CheckoutFormCart";

interface CartSummaryProps {
  items: CartItem[];
}

export default function CartSummary({ items }: CartSummaryProps) {
  const totalPrice = items.reduce((acc, item) => {
    console.log("quantity: ", item.quantity);
    return (
      acc + (item.product ? (item.product.price / 100) * item.quantity : 0)
    );
  }, 0);

  console.log("items: ", items);
  return (
    <div className="p-4 ">
      <div className="flex justify-between text-lg font-semibold">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <CheckoutFormCart items={items} />
    </div>
  );
}
