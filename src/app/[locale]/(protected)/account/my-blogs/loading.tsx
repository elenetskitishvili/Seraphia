"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "@/src/components/layout/SkeletonWrapper";

export default function Loading() {
  return (
    <SkeletonWrapper>
      <section className="p-4 770px:px-10 770px:pt-6 990px:pt-20 990px:pl-0 990px:pr-10">
        {/* Heading Skeleton */}
        <Skeleton width="40%" height={36} className="990px:h-10" />
        <ul className="grid grid-cols-2 770px:grid-cols-3 gap-x-6 990px:gap-x-10 gap-y-10 my-14">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="flex flex-col">
              {/* Image Skeleton */}
              <Skeleton className="aspect-square w-full dark:rounded-lg" />

              {/* Title Skeleton */}
              <Skeleton width="80%" height={24} className="mt-2 mb-1" />

              {/* Buttons Skeleton */}
              <div className="flex flex-col 480px:flex-row gap-3 mt-3">
                <Skeleton width={120} height={40} className="rounded-sm" />
                <Skeleton width={120} height={40} className="rounded-sm" />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </SkeletonWrapper>
  );
}
