"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "@/src/components/layout/SkeletonWrapper";

export default function Loading() {
  return (
    <SkeletonWrapper>
      <div className="h-screen flex items-center justify-center">
        <div className="flex-1 flex flex-col max-w-64 480px:max-w-96">
          <Skeleton height={35} width={150} />
          <Skeleton height={18} width={250} className="mt-2" />

          <div className="flex flex-col gap-3 mt-4">
            <Skeleton height={18} width={100} />
            <Skeleton height={54} width="100%" />

            <Skeleton height={18} width={100} />
            <Skeleton height={54} width="100%" />

            <Skeleton
              height={48}
              width="100%"
              className="mt-4"
              borderRadius={9999}
            />
          </div>

          <Skeleton
            height={48}
            width="100%"
            className="mt-20"
            borderRadius={9999}
          />
        </div>
      </div>
    </SkeletonWrapper>
  );
}
