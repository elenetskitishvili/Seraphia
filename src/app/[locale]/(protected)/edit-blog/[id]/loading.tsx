"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "@/src/components/layout/SkeletonWrapper";

export default function Loading() {
  return (
    <SkeletonWrapper>
      <div className="pt-[60px] 770px:pt-20 ">
        <section className="max-w-[1360px] mx-auto mb-[60px] 480px:mb-20 770px:mb-[120px] 990px:mb-40 pt-10 px-6 770px:px-10">
          <div className="grid grid-cols-1 gap-10 990px:grid-cols-[31fr_69fr]">
            {/* Left Side - Messages Skeleton */}
            <div className="flex flex-col mt-6">
              <Skeleton
                width="90%"
                height={24}
                className="pb-2 border-b border-bgBtn dark:border-darkModeBorder"
              />
              <Skeleton
                width="85%"
                height={24}
                className="py-2 border-b border-bgBtn dark:border-darkModeBorder"
              />
              <Skeleton
                width="80%"
                height={24}
                className="py-2 border-b border-bgBtn dark:border-darkModeBorder"
              />
              <Skeleton width="75%" height={24} className="pt-2" />
            </div>

            {/* FORM SKELETON */}
            <div className="flex flex-col gap-4">
              {/* Heading English */}
              <div className="flex flex-col gap-[5px]">
                <Skeleton width="30%" height={20} className="mb-2" />
                <Skeleton height={50} className="w-full" />
              </div>

              {/* Heading Georgian */}
              <div className="flex flex-col gap-[5px]">
                <Skeleton width="30%" height={20} className="mb-2" />
                <Skeleton height={50} className="w-full" />
              </div>

              {/* Content English */}
              <div className="flex flex-col gap-[5px]">
                <Skeleton width="30%" height={20} className="mb-2" />
                <Skeleton height={166} className="w-full" />
              </div>

              {/* Content Georgian */}
              <div className="flex flex-col gap-[5px]">
                <Skeleton width="30%" height={20} className="mb-2" />
                <Skeleton height={166} className="w-full" />
              </div>

              {/* Image Upload */}
              <div className="flex flex-col gap-[5px]">
                <Skeleton width="30%" height={20} className="mb-2" />
                <Skeleton height={55} className="w-full" />
              </div>

              {/* Submit Button Skeleton */}
              <div className="flex flex-col min-[520px]:flex-row items-center justify-center min-[520px]:justify-end min-[520px]:gap-6 770px:gap-20 990px:gap-[120px]">
                <Skeleton width={200} height={48} borderRadius={9999} />
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1360px] mx-auto mb-[60px] 480px:mb-20 770px:mb-[120px] 990px:mb-40 pt-10 px-6 770px:px-10">
          <div className="grid grid-cols-1 gap-10 990px:grid-cols-[31fr_69fr]">
            {/* Left Side - Messages Skeleton */}
            <div className="flex flex-col mt-6">
              <Skeleton
                width="90%"
                height={24}
                className="pb-2 border-b border-bgBtn dark:border-darkModeBorder"
              />
              <Skeleton
                width="85%"
                height={24}
                className="py-2 border-b border-bgBtn dark:border-darkModeBorder"
              />
              <Skeleton
                width="80%"
                height={24}
                className="py-2 border-b border-bgBtn dark:border-darkModeBorder"
              />
              <Skeleton width="75%" height={24} className="pt-2" />
            </div>

            {/* FORM SKELETON */}
            <div className="flex flex-col gap-4">
              {/* Heading English */}
              <div className="flex flex-col gap-[5px]">
                <Skeleton width="30%" height={20} className="mb-2" />
                <Skeleton height={50} className="w-full" />
              </div>

              {/* Heading Georgian */}
              <div className="flex flex-col gap-[5px]">
                <Skeleton width="30%" height={20} className="mb-2" />
                <Skeleton height={50} className="w-full" />
              </div>

              {/* Content English */}
              <div className="flex flex-col gap-[5px]">
                <Skeleton width="30%" height={20} className="mb-2" />
                <Skeleton height={166} className="w-full" />
              </div>

              {/* Content Georgian */}
              <div className="flex flex-col gap-[5px]">
                <Skeleton width="30%" height={20} className="mb-2" />
                <Skeleton height={166} className="w-full" />
              </div>

              {/* Image Upload */}
              <div className="flex flex-col gap-[5px]">
                <Skeleton width="30%" height={20} className="mb-2" />
                <Skeleton height={55} className="w-full" />
              </div>

              {/* Submit Button Skeleton */}
              <div className="flex flex-col min-[520px]:flex-row items-center justify-center min-[520px]:justify-end min-[520px]:gap-6 770px:gap-20 990px:gap-[120px]">
                <Skeleton width={200} height={48} borderRadius={9999} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </SkeletonWrapper>
  );
}
