import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useCart } from "@/src/context/CartProvider";

const CartSkeleton = () => {
  const { cartCount } = useCart();
  return (
    <>
      <ul className="w-full mt-2">
        {[...Array(cartCount)].map((_, index) => (
          <li
            key={index}
            className="grid grid-cols-[80fr_20fr] 770px:grid-cols-[70fr_15fr_15fr] items-center border-b border-bgBtn dark:border-darkModeBorder py-4 px-4"
          >
            {/* PRODUCT LINK */}
            <div className="flex items-center gap-3">
              {/* IMAGE */}
              <Skeleton width={64} height={64} className="rounded-sm" />
              <div>
                {/* NAME */}
                <Skeleton width={120} height={20} />
                {/* QUANTITY - SMALL SCREEN */}
                <div className="770px:hidden">
                  <Skeleton width={30} height={16} />
                </div>
                {/* PRICE */}
                <Skeleton width={50} height={20} />
              </div>
            </div>
            {/* QUANTITY - LARGE SCREEN */}
            <div className="hidden 770px:block">
              <Skeleton width={30} height={16} />
            </div>
            {/* REMOVE BUTTON */}
            <Skeleton width={50} height={20} />
          </li>
        ))}
      </ul>

      <div className="p-4">
        {/* TOTAL PRICE */}
        <div className="flex justify-between text-lg font-semibold">
          <span>
            <Skeleton width={50} />
          </span>
          <span>
            <Skeleton width={80} />
          </span>
        </div>

        {/* CHECKOUT BUTTON */}
        <Skeleton height={40} className="mt-4 w-full rounded-sm" />
      </div>
    </>
  );
};

export default CartSkeleton;
