"use client";

import { fetchCartProducts } from "@/src/app/actions/fetchCartProducts";
import { CartItem } from "@/src/types/types";
import { useEffect, useState } from "react";
import CartList from "./CartList";
import CartSkeleton from "./CartSkeleton";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface HeaderNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: HeaderNavProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function loadCart() {
      if (isOpen) {
        try {
          setLoading(true);
          const items: CartItem[] = await fetchCartProducts();
          setCartItems(items);
          setError(null);
        } catch (err) {
          console.error("Error loading cart:", err);
          setError("Failed to load cart. Please try again.");
        } finally {
          setLoading(false);
        }
      }
    }
    loadCart();
  }, [isOpen]);

  return (
    <>
      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/5 transition-opacity duration-[300ms] opacity-100 z-40"
          onClick={() => onClose()}
        ></div>
      )}

      {/* CART */}
      <div
        className={`z-50 fixed top-0 right-0 w-full 990px:w-[500px] min-h-screen flex flex-col bg-white shadow-lg transition-transform duration-[800ms] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-[cubic-bezier(0.25, 1, 0.5, 1)]`}
      >
        {/* CART HEADER (Fixed) */}
        <div className="flex items-center justify-between border-b border-b-bgBtn py-4 px-6 bg-white sticky top-0 z-10">
          <h4 className="text-xl 480px:text-2xl tracking-tighter">Your Cart</h4>
          <button
            onClick={onClose}
            className=" hover:text-customBlue transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <XMarkIcon className="w-6 h-6 " />
          </button>
        </div>

        {/* CART CONTENT (Scrollable) */}
        {error ? (
          <div className="flex-1 overflow-y-auto p-6 flex items-center justify-center">
            <p className="text-customGray text-lg text-center">{error}</p>
          </div>
        ) : loading ? (
          <CartSkeleton />
        ) : cartItems.length === 0 ? (
          <div className="flex-1 overflow-y-auto p-6 flex items-center justify-center">
            <p className="text-customGray text-lg text-center">
              No items found.
            </p>
          </div>
        ) : (
          <CartList cartItems={cartItems} />
        )}
      </div>
    </>
  );
}
