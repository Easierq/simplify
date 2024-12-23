import React from "react";
import { Skeleton } from "./ui/skeleton";

const ModalSkeleton = () => {
  return (
    <div className="space-y-3 w-full flex flex-col justify-center items-center text-center">
      <Skeleton className="h-[200px] w-[200px] mb-5" />
      <Skeleton className="h-[40px] w-[210px]" />
      <Skeleton className="h-[22px] w-[60%]" />
      <div className="h-[0.5px] bg-slate-300 w-[40%] mx-auto mt-[5px]" />
      <Skeleton className="h-[30px] w-[100px]" />
      <Skeleton className="h-[22px] w-[60%]" />
      <Skeleton className="h-[80px] w-full" />
    </div>
  );
};

export default ModalSkeleton;
