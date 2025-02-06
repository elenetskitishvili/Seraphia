"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "@/src/components/layout/SkeletonWrapper";

export default function Loading() {
  return (
    <SkeletonWrapper>
      {/* Blog Header Section */}
      <section className="grid grid-cols-1 990px:grid-cols-2 990px:gap-x-[30px] 990px:h-[800px] 990px:overflow-hidden dark:bg-darkModeBgLighter">
        {/* Content */}
        <div className="bg-bgLight dark:bg-darkModeBgLighter h-[600px] 480px:h-[700px] 770px:h-[800px] flex flex-col items-center justify-center px-6 770px:px-10 990px:px-8 text-center tracking-tighter 990px:mx-auto">
          {/* SUBHEADING */}
          <div className="text-customGray dark:text-darkModeTextTertiary text-lg font-semibold mb-6 flex flex-col items-center justify-center 990px:flex-row 990px:gap-5">
            <div className="flex items-center justify-center gap-2">
              <Skeleton width={24} height={24} circle />{" "}
              {/* Clock Icon Placeholder */}
              <Skeleton width={80} height={24} />
            </div>
            <div className="flex items-center justify-center gap-2">
              <Skeleton width={24} height={24} circle />{" "}
              {/* Calendar Icon Placeholder */}
              <Skeleton width={100} height={24} />
            </div>
          </div>
          {/* Title Skeleton */}
          <div className="w-full flex justify-center">
            <div className="w-[90%] max-w-[600px]">
              <Skeleton height={50} className="mb-6 990px:mb-10" />
            </div>
          </div>
        </div>

        {/* Image Skeleton */}
        <div className="mt-6 mx-6 990px:mx-auto 990px:self-center flex items-center justify-center">
          <Skeleton width={700} height={560} className="" />
        </div>
      </section>

      {/* Blog Content Skeleton */}
      <section className="px-6 770px:px-10 py-[60px] 480px:py-20 770px:py-[120px] max-w-[840px] mx-auto">
        {/* Blog Heading Skeleton */}
        <Skeleton width="70%" height={40} className="mb-8" />

        {/* Blog Content Placeholder */}
        <div className="text-customGray dark:text-darkModeTextSecondary text-lg flex flex-col gap-6">
          <Skeleton count={5} />
          <Skeleton count={4} width="90%" />
          <Skeleton count={5} width="85%" />
        </div>
      </section>
    </SkeletonWrapper>
  );
}
