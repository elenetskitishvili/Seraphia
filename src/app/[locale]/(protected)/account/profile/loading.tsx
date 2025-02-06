"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "@/src/components/layout/SkeletonWrapper";

export default function Loading() {
  return (
    <SkeletonWrapper>
      <section className="max-w-[1100px] mx-auto pt-10 990px:pt-[90px] pb-10 480px:pb-20 770px:pb-[120px] 990px:grid 990px:grid-cols-2">
        <div className="flex flex-col gap-4 px-6 770px:px-10 990px:pl-3 min-[1200px]:px-6 pb-4 990px:order-2">
          {/* Email Skeleton */}
          <div className="flex flex-col gap-[5px]">
            <Skeleton width="30%" height={20} className="mb-2" />
            <Skeleton height={50} className="w-full" />
          </div>

          {/* Subscription Plan Skeleton */}
          <div className="flex flex-col gap-[5px]">
            <Skeleton width="30%" height={20} className="mb-2" />
            <Skeleton height={50} className="w-full" />
          </div>

          {/* Subscription Expiry Skeleton */}
          <div className="flex flex-col gap-[5px]">
            <Skeleton width="30%" height={20} className="mb-2" />
            <Skeleton height={50} className="w-full" />
          </div>

          {/* Max Items Skeleton */}
          <div className="flex flex-col gap-[5px]">
            <Skeleton width="30%" height={20} className="mb-2" />
            <Skeleton height={50} className="w-full" />
          </div>
        </div>

        {/* FORM SKELETON */}
        <div className="flex flex-col gap-4 px-6 770px:px-10 990px:px-3 min-[1200px]:px-6">
          {/* Full Name Skeleton */}
          <div className="flex flex-col gap-[5px]">
            <Skeleton width="30%" height={20} className="mb-2" />
            <Skeleton height={53} className="w-full" />
          </div>

          {/* Phone Number Skeleton */}
          <div className="flex flex-col gap-[5px]">
            <Skeleton width="30%" height={20} className="mb-2" />
            <Skeleton height={53} className="w-full" />
          </div>

          {/* Makes Jewelry Checkbox Skeleton */}
          <div className="flex items-center gap-3 py-3">
            <Skeleton width={20} height={20} className="rounded-sm" />
            <Skeleton width={150} height={20} />
          </div>

          {/* Address Skeleton */}
          <div className="flex flex-col gap-[5px]">
            <Skeleton width="30%" height={20} className="mb-2" />
            <Skeleton height={168} className="w-full" />
          </div>

          {/* Submit Button Skeleton */}
          <div className="480px:self-end">
            <Skeleton width={200} height={48} borderRadius={9999} />
          </div>
        </div>
      </section>
    </SkeletonWrapper>
  );
}
