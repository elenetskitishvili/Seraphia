"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "@/src/components/layout/SkeletonWrapper";

export default function Loading() {
  return (
    <SkeletonWrapper>
      <section className="my-[120px] max-w-lg min-[900px]:max-w-[1200px] mx-auto px-10">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-10 min-[900px]:gap-6 990px:gap-12">
          {/* FIRST CARD */}
          <div className="group perspective-1500 relative h-[520px]">
            <Skeleton className="w-full h-[520px] rounded-lg" />
          </div>

          {/* SECOND CARD */}
          <div className="group perspective-1500 relative h-[520px]">
            <Skeleton className="w-full h-[520px] rounded-lg" />
          </div>

          {/* THIRD CARD */}
          <div className="group perspective-1500 relative h-[520px]">
            <Skeleton className="w-full h-[520px] rounded-lg" />
          </div>
        </div>
      </section>
    </SkeletonWrapper>
  );
}
