"use client";

import { useState } from "react";
import Cart from "./Cart";

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-2 py-3 mr-3"
      >
        <span className="pr-[1px]">Cart</span>(
        <span className="text-xs">0</span>)
      </button>
      <Cart isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
