"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "@/src/components/layout/SkeletonWrapper";

export default function Loading() {
  return (
    <SkeletonWrapper>
      <div className="relative flex flex-col-reverse 990px:grid 990px:grid-cols-2">
        {/* GALLERY SECTION */}
        <div className="pt-[60px] 480px:pt-20 770px:pt-[120px] px-6 480px:pb-10 770px:px-10 990px:px-[44px] pb-6 770px:pb-14 bg-bgLight dark:bg-darkModeBg flex flex-col gap-6 480px:gap-10 770px:gap-14">
          {/* Simulating multiple product images */}
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <Skeleton
                key={index}
                height={500}
                className="w-full aspect-[1/1] dark:brightness-[85%] dark:rounded-sm"
              />
            ))}
        </div>

        {/* PRODUCT DETAILS SECTION */}
        <div className="990px:h-screen transition-transform duration-300 990px:sticky 990px:top-0">
          <div className="pt-[100px] 770px:pt-[140px] 990px:pt-[165px] pb-20 770px:pb-20 px-6 770px:px-10 990px:px-[45px] font-semibold 770px:max-w-[790px] 770px:mx-auto">
            {/* Product Name Skeleton */}
            <Skeleton width="80%" height={50} className="mb-6" />

            {/* Price Skeleton */}
            <Skeleton width={120} height={30} className="mb-6 770px:mb-10" />

            {/* Product Description Skeleton (3 lines) */}
            <Skeleton
              count={3}
              className="text-lg leading-6 770px:max-w-[510px]"
            />

            {/* Form (Add to Cart + Quantity Input) */}
            <form className="grid grid-cols-1 480px:grid-cols-[2fr_1fr] gap-4 mt-12 990px:max-w-[560px]">
              {/* Add to Cart Button Skeleton */}
              <Skeleton
                borderRadius="9999px"
                height={42}
                className="w-full order-1 480px:order-none"
              />

              {/* Quantity Input Skeleton */}
              <Skeleton borderRadius="9999px" height={42} className="w-full" />
            </form>
          </div>
        </div>
      </div>
    </SkeletonWrapper>
  );
}
