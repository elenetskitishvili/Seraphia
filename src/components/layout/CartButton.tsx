"use client";

import { useState } from "react";
import Cart from "./Cart";
import { CartItem } from "@/src/types/types";

export default function CartButton({ cart }: { cart: CartItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-2 py-3 mr-3"
      >
        <span className="pr-[1px]">Cart</span>(
        <span className="text-xs">{cart.length}</span>)
      </button>
      <Cart isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
