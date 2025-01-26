import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-2 990px:grid-cols-4 gap-x-6 990px:gap-x-10 gap-y-10 my-14">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="group transform duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)] flex flex-col"
        >
          {/* IMAGE */}
          <div className="overflow-hidden mb-6">
            <Skeleton
              borderRadius={0}
              className="aspect-square w-full h-[392px]"
            />
          </div>
          {/* TEXT */}
          <Skeleton borderRadius={0} className="h-6 w-3/4 mb-1" />
          <Skeleton borderRadius={0} className="h-5 w-1/2 mt-auto" />
        </div>
      ))}
    </div>
  );
}
