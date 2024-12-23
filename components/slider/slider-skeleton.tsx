"use client";

import { Skeleton } from "../ui/skeleton";

export const SingleSkeleton = () => {
  return (
    <div className="space-y-2 w-full">
      <Skeleton className="h-[240px] w-[231px]" />
      <Skeleton className="h-[18px] w-[210px]" />
      <Skeleton className="h-[18px] w-[40px]" />
      <Skeleton className="h-[30px] w-[100px]" />
    </div>
  );
};
export const SliderSkeleton = () => {
  return (
    <div className="flex gap-3 overflow-x-scroll hidden-scrollbar mb-7">
      <SingleSkeleton />
      <SingleSkeleton />
      <SingleSkeleton />
      <SingleSkeleton />
      <SingleSkeleton />
      <SingleSkeleton />
    </div>
  );
};
