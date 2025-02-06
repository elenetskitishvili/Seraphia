"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonWrapper from "@/src/components/layout/SkeletonWrapper";

export default function Loading() {
  return (
    <SkeletonWrapper>
      <section className="bg-bgLight dark:bg-darkModeBg grid grid-cols-1 990px:grid-cols-2 990px:h-[800px] 990px:overflow-hidden">
        {/* Content */}
        <div className="bg-bgLight dark:bg-darkModeBg pt-[100px] 770px:pt-[140px] 990px:pt-[300px] pb-[80px] 480px:pb-[60px] 770px:pb-[80px] px-6 770px:px-10 990px:px-8 text-center">
          {/* Subheading Skeleton */}
          <div className="w-full">
            <Skeleton width="50%" height={24} className="mb-6 mx-auto" />
          </div>

          {/* Heading Skeleton */}
          <div className="w-full">
            <Skeleton
              width="80%"
              height={64}
              className="mb-6 990px:mb-10 mx-auto"
            />
          </div>
        </div>

        {/* Image Skeleton */}
        <div className="relative">
          <Skeleton width="100%" height="100%" className="h-[800px] w-auto" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/30 dark:bg-transparent mix-blend-overlay" />
        </div>
      </section>
      <section className="max-w-[1360px] mx-auto">
        <div className="mx-6 770px:mx-10 pt-[60px] 480px:pt-20 770px:pt-[120px] 990px:pt-40 pb-10 770px:pb-14 grid 990px:grid-cols-3 gap-6 990px:gap-10 border-b border-b-bgBtn dark:border-b-darkModeBorder tracking-tighter">
          {/* Email Section */}
          <div className="font-bold">
            <Skeleton width="60%" height={24} className="mb-2" />{" "}
            {/* Label Skeleton */}
            <Skeleton width="80%" height={32} /> {/* Email Skeleton */}
          </div>

          {/* Office Location Section */}
          <div className="font-bold">
            <Skeleton width="50%" height={24} className="mb-2" />{" "}
            {/* Label Skeleton */}
            <Skeleton width="70%" height={32} /> {/* Location Skeleton */}
          </div>

          {/* Phone Number Section */}
          <div className="font-bold">
            <Skeleton width="50%" height={24} className="mb-2" />{" "}
            {/* Label Skeleton */}
            <Skeleton width="60%" height={32} /> {/* Phone Number Skeleton */}
          </div>
        </div>
      </section>
      <section className="max-w-[1360px] mx-auto mb-[60px] 480px:mb-20 770px:mb-[120px] 990px:mb-40 pt-10 px-6 770px:px-10">
        <div className="grid grid-cols-1 gap-10 990px:grid-cols-[31fr_69fr]">
          {/* Form Message Skeleton */}
          <div className="w-full">
            <Skeleton width="80%" height={24} className="mb-2" />
          </div>

          {/* FORM SKELETON */}
          <div className="flex flex-col gap-4">
            {/* Name Input Skeleton */}
            <div className="flex flex-col gap-[5px]">
              <Skeleton width="30%" height={20} className="mb-2" />
              <Skeleton height={56} className="w-full" />
            </div>

            {/* Email Input Skeleton */}
            <div className="flex flex-col gap-[5px]">
              <Skeleton width="30%" height={20} className="mb-2" />
              <Skeleton height={56} className="w-full" />
            </div>

            {/* Subject Dropdown Skeleton */}
            <div className="flex flex-col gap-[5px]">
              <Skeleton width="30%" height={20} className="mb-2" />
              <Skeleton height={50} className="w-full" />
            </div>

            {/* Message Textarea Skeleton */}
            <div className="flex flex-col gap-[5px]">
              <Skeleton width="30%" height={20} className="mb-2" />
              <Skeleton height={120} className="w-full" />
            </div>

            {/* Submit Button Skeleton */}
            <div className="flex flex-col min-[520px]:flex-row items-center justify-center min-[520px]:justify-end min-[520px]:gap-6 770px:gap-20 990px:gap-[120px]">
              <Skeleton width={200} height={48} borderRadius={9999} />
            </div>
          </div>
        </div>
      </section>
    </SkeletonWrapper>
  );
}
