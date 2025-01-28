"use client";

import { useState } from "react";
import Cart from "./Cart";
import { CartItem } from "@/src/types/types";
import { useCart } from "@/src/context/CartProvider";

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-2 py-3 mr-3"
      >
        <span className="pr-[1px]">Cart</span>(
        <span className="text-xs">{cartCount}</span>)
      </button>
      <Cart isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
