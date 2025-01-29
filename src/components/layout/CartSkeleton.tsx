import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CartSkeleton = () => {
  return (
    <ul className="w-full mt-2">
      {[...Array(3)].map((_, index) => (
        <li
          key={index}
          className="grid grid-cols-[80fr_20fr] 770px:grid-cols-[70fr_15fr_15fr] items-center border-b border-gray-300 py-4 px-4"
        >
          {/* Product Link Skeleton */}
          <div className="flex items-center gap-3">
            {/* Product Image Skeleton */}
            <Skeleton width={64} height={64} className="rounded-sm" />
            <div>
              {/* Product Name Skeleton */}
              <Skeleton width={120} height={20} />
              {/* Quantity Skeleton (hidden on smaller screens) */}
              <div className="770px:hidden">
                <Skeleton width={30} height={16} />
              </div>
              {/* Total Price Skeleton */}
              <Skeleton width={50} height={20} />
            </div>
          </div>
          {/* Quantity Skeleton (visible on larger screens) */}
          <div className="hidden 770px:block">
            <Skeleton width={30} height={16} />
          </div>
          {/* Remove Button Skeleton */}
          <Skeleton width={50} height={20} />
        </li>
      ))}
    </ul>
  );
};

export default CartSkeleton;
