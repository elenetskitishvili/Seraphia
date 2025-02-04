"use client";

import { removeFromCart } from "@/src/app/actions/removeFromCart";
import { useCart } from "@/src/context/CartProvider";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface RemoveFromCartButtonProps {
  itemId: number;
  onRemove: () => void;
}

export default function RemoveFromCartButton({
  itemId,
  onRemove,
}: RemoveFromCartButtonProps) {
  const t = useTranslations("Cart");

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
      className="text-customGray dark:text-darkModeTextTertiary text-sm hover:text-customBlue dark:hover:text-indigo-600"
    >
      {loading ? t("removing") : t("remove")}
    </button>
  );
}
