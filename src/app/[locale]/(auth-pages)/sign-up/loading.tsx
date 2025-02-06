"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "@/src/components/layout/SkeletonWrapper";

export default function Loading() {
  return (
    <SkeletonWrapper>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col min-w-64 480px:min-w-96 480px:max-w-96 mx-auto">
          <Skeleton height={36} width={150} />
          <Skeleton height={18} width={250} className="mt-2" />

          <div className="flex flex-col gap-3 mt-8">
            <Skeleton height={18} width={100} />
            <Skeleton height={55} width="100%" />

            <Skeleton height={18} width={100} />
            <Skeleton height={55} width="100%" />

            <Skeleton
              height={48}
              width="100%"
              className="mt-4"
              borderRadius={9999}
            />
          </div>
        </div>
      </div>
    </SkeletonWrapper>
  );
}
