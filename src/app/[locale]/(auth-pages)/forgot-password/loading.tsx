"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "@/src/components/layout/SkeletonWrapper";

export default function Loading() {
  return (
    <SkeletonWrapper>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="flex-1 flex flex-col w-full gap-2 text-foreground min-w-[300px] max-w-[300px] mx-auto">
          <Skeleton height={35} width={200} />
          <Skeleton height={20} width={250} className="mt-2" />

          <div className="flex flex-col gap-3 mt-4">
            <Skeleton height={20} width={100} />
            <Skeleton height={54} width="100%" />
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
