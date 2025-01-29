"use client";

import { removeFromCart } from "@/src/app/actions/removeFromCart";
import { useCart } from "@/src/context/CartProvider";
import { useState } from "react";

interface RemoveFromCartButtonProps {
  itemId: number;
  onRemove: () => void;
}

export default function RemoveFromCartButton({
  itemId,
  onRemove,
}: RemoveFromCartButtonProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const { updateCartCount } = useCart();

  const handleRemove = async () => {
    try {
      setLoading(true);
      await removeFromCart(itemId);
      onRemove();
      await updateCartCount();
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleRemove}
      disabled={loading}
      className="text-customGray text-sm hover:text-customBlue"
    >
      {loading ? "Removing..." : "Remove"}
    </button>
  );
}
