"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "@/src/components/layout/SkeletonWrapper";

export default function Loading() {
  return (
    <SkeletonWrapper>
      <section className="p-4 770px:px-10 770px:pt-6 990px:pt-20 990px:pl-0 990px:pr-10">
        {/* Orders Heading Skeleton */}
        <Skeleton width="40%" height={36} className="990px:h-10" />
        <ul className="space-y-6">
          {Array.from({ length: 2 }).map((_, index) => (
            <li
              key={index}
              className="border-t border-t-bgBtn dark:border-t-darkModeBorder py-6"
            >
              {/* Order Info Skeleton */}
              <div className="font-medium">
                <p>
                  <Skeleton width={120} height={20} className="inline-block" />
                  <Skeleton width={100} height={20} className="inline-block" />
                </p>
              </div>

              {/* Order Items Skeleton */}
              <ul className="mt-4 space-y-4">
                {Array.from({ length: 2 }).map((_, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="border border-bgBtn dark:border-darkModeBorder dark:bg-darkModeBorder max-w-screen-lg dark:rounded-lg"
                  >
                    <div className="flex items-center gap-4 p-2">
                      {/* Product Image Skeleton */}
                      <Skeleton
                        width={100}
                        height={100}
                        className="w-20 h-20 990px:w-24 990px:h-24 object-cover rounded-sm dark:rounded-lg"
                      />
                      <div>
                        {/* Product Name Skeleton */}
                        <Skeleton width={180} height={20} className="mb-2" />
                        {/* Quantity Skeleton */}
                        <Skeleton width={100} height={16} className="mb-1" />
                        {/* Price Skeleton */}
                        <Skeleton width={80} height={16} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </SkeletonWrapper>
  );
}
