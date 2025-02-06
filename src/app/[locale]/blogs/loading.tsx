"use client";

import SkeletonWrapper from "@/src/components/layout/SkeletonWrapper";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <SkeletonWrapper>
      <section className="mt-20">
        {/* SECTION HEADING */}
        {/* <div className="bg-bgLight dark:bg-gradient-to-b dark:from-darkModeBgLighter dark:to-indigo-900 text-center pt-[100px] pb-20 480px:py-[240px] 770px:py-[230px] 990px:py-[210px] px-6">
          <Skeleton
            width="60%"
            height={85}
            className="mx-auto mb-6 770px:mb-10"
          />
          <Skeleton width="40%" height={24} className="mx-auto" />
        </div> */}

        {/* SEARCH INPUT */}
        <div className="py-8 px-6 border-b border-bgBtn dark:border-darkModeBorder ">
          <div className="pt-4 480px:pt-6 770px:pt-4 480px:mx-6 770px:w-[570px] 770px:mx-auto">
            <Skeleton height={48} className="w-full" />
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
        </div>

        {/* PAGINATION SKELETON */}
        <div className="mt-14 flex justify-center">
          <Skeleton width={200} height={40} />
        </div>
      </section>
    </SkeletonWrapper>
  );
}
