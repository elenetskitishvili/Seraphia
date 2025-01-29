"use client";

import { CartItem } from "@/src/types/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RemoveFromCartButton from "./RemoveFromCartButton";

interface CartListProps {
  cartItems: CartItem[];
}

export default function CartList({ cartItems }: CartListProps) {
  const [items, setItems] = useState(cartItems);

  const handleRemove = (productId: number) => {
    setItems((prev) =>
      prev.filter((i) => i.product && i.product.id !== productId)
    );
  };

  return (
    <ul className="w-full mt-2">
      {items.map((item) => {
        if (!item.product) return null;

        return (
          <li
            key={item.id}
            className="grid grid-cols-[80fr_20fr] 770px:grid-cols-[70fr_15fr_15fr] items-center border-b border-gray-300 py-4 px-4"
          >
            <Link
              href={`/products/${item.product.id}`}
              className="flex items-center gap-3"
            >
              <Image
                src={item.product.images[0] || "/images/placeholder.png"}
                alt={item.product.name_en}
                width={100}
                height={100}
                className="w-16 h-16 object-cover rounded-sm"
              />
              <div>
                <p className="font-semibold">{item.product.name_en}</p>
                <p className="text-sm text-gray-500 770px:hidden">
                  x{item.quantity}
                </p>
                <p className="text-sm font-bold">
                  ${(item.product.price / 100) * item.quantity}
                </p>
              </div>
            </Link>
            <p className="hidden 770px:block text-sm text-gray-500">
              x{item.quantity}
            </p>
            <RemoveFromCartButton
              itemId={item.product.id}
              onRemove={() => item.product && handleRemove(item.product.id)}
            />
          </li>
        );
      })}
    </ul>
  );
}
