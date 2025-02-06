"use client";

import SkeletonWrapper from "@/src/components/layout/SkeletonWrapper";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <SkeletonWrapper>
      <section className="px-6 770px:px-10 max-w-[1480px] mx-auto pb-[60px] 480px:pb-20 770px:pb-[120px] 990px:pb-[160px] dark:border-b dark:border-b-darkModeBorder">
        {/* Heading Section */}
        <section className="pt-[120px] 990px:pt-40 text-center">
          <Skeleton
            borderRadius={0}
            width="60%"
            height={64}
            className="mx-auto mb-6 480px:mb-9 770px:mb-10"
          />

          {/* Product Filters */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <Skeleton
                  borderRadius={100}
                  key={index}
                  width={100}
                  height={32}
                  className="rounded-full"
                />
              ))}
          </div>

          {/* Product Search */}
          <div className="pt-4 480px:pt-6 770px:pt-4 480px:mx-6 770px:w-[570px] 770px:mx-auto">
            <Skeleton
              borderRadius={100}
              height={48}
              className="w-full rounded-full"
            />
          </div>

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
        </section>

        {/* Pagination */}
        <div className="mt-14 flex justify-center">
          <Skeleton width={200} height={40} />
        </div>
      </section>
    </SkeletonWrapper>
  );
}
