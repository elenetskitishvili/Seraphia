"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "@/src/components/layout/SkeletonWrapper";

export default function Loading() {
  return (
    <SkeletonWrapper>
      <div className="h-screen px-6 flex flex-col items-center justify-center bg-bgLight dark:bg-darkModeBorder tracking-tighter text-center font-bold">
        {/* Title Skeleton */}
        <div className="w-full flex justify-center">
          <Skeleton width="80%" height={80} className="mb-5 770px:mb-10" />
        </div>

        {/* Description Skeleton */}
        <div className="w-full flex justify-center">
          <Skeleton width="60%" height={24} className="mb-6 770px:mb-10" />
        </div>

        {/* Button Skeleton */}
        <Skeleton width={200} height={48} borderRadius={9999} />
      </div>
    </SkeletonWrapper>
  );
}
