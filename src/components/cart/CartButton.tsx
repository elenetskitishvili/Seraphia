"use client";

import { useState } from "react";
import Cart from "./Cart";
import { useCart } from "@/src/context/CartProvider";
import { useTranslations } from "next-intl";

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const t = useTranslations("Navigation");
  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-2 py-3 mr-3 hover:text-customBlue dark:hover:text-indigo-400 transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        data-cy="cart-button"
      >
        <span className="pr-[1px] text-base">{t("cart")}</span>(
        <span className="text-xs">{cartCount}</span>)
      </button>
      <Cart isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
