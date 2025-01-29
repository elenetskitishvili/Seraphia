"use client";

import { CartItem } from "@/src/types/types";

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
      <button className="mt-4 w-full  py-2 rounded-sm text-white bg-customBlueDarker font-bold inline-block hover:bg-customBlue transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
        Checkout
      </button>
    </div>
  );
}
