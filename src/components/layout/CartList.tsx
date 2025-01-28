"use client";

import { useCart } from "@/src/context/CartProvider";

import Image from "next/image";
import Link from "next/link";
import { CartItem } from "@/src/types/types";

interface CartListProps {
  cartItems: CartItem[];
}

export default function CartList({ cartItems }: CartListProps) {
  const { updateCartCount } = useCart();

  return (
    <ul className="w-full">
      {cartItems.map((item) => {
        if (!item.product) return null;

        return (
          <li
            key={item.id}
            className="flex items-center justify-between border-b border-gray-300 py-4 px-4"
          >
            {/* Product Link */}
            <Link
              href={`/products/${item.product.id}`}
              className="flex items-center gap-4"
            >
              {/* Product Image */}
              <Image
                src={item.product.images[0] || "/images/placeholder.png"}
                alt={item.product.name_en}
                width={50}
                height={50}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                {/* Product Name */}
                <p className="font-semibold">{item.product.name_en}</p>
                {/* Quantity Displayed as "x2" */}
                <p className="text-sm text-gray-500">x{item.quantity}</p>
                {/* Total Price */}
                <p className="text-sm font-bold">
                  ${(item.product.price / 100) * item.quantity}
                </p>
              </div>
            </Link>
            {/* Remove Button */}
            <button className="text-red-500 text-sm hover:text-red-700 transition">
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
}
