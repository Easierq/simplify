"use client";

import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { useCardModal } from "@/hooks/use-card-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { fetcher } from "@/lib/fetcher";
import { ArrowLeft } from "lucide-react";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Course } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/format";
import Link from "next/link";

export const CourseModal = () => {
  const { status, data: session } = useSession();

  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  const { data: cardData } = useQuery<Course>({
    queryKey: ["course", id],
    queryFn: () => fetcher(`/api/courses/${id}`),
  });

  if (!cardData)
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="">
          <DialogHeader className="hidden">
            <DialogTitle>course modal</DialogTitle>
            <DialogDescription>course modal</DialogDescription>
          </DialogHeader>
          <DialogPrimitive.Close className="bg-slate-200 dark:bg-slate-100 rounded-md p-1 absolute left-4 top-4 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <ArrowLeft className="h-5 w-auto text-slate-900" />
          </DialogPrimitive.Close>
          <div className="border-none overflow-scroll hidden-scrollbar w-full">
            <div className="space-y-1 md:space-y-3 pt-12 pb-6 flex flex-col justify-center items-center text-center px-4 md:px-12">
              <Skeleton className="h-[180px] w-[280px] mb-3 md:mb-5" />
              <div className="space-y-2 py-2 w-full flex flex-col justify-center items-center text-center">
                <Skeleton className="h-[40px] w-[180px]" />
                <Skeleton className="h-[22px] w-[60%]" />
                <Skeleton className="h-[1px] w-[40%] mx-auto mt-[5px]" />
              </div>
              <div className="space-y-2 py-2 w-full flex flex-col justify-center items-center text-center">
                <Skeleton className="h-[30px] w-[100px]" />
                <Skeleton className="h-[22px] w-[60%]" />
                <Skeleton className="h-[80px] w-full" />
              </div>
              <Skeleton className="h-[38px] w-[150px] mt-10" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="">
        <DialogHeader className="hidden">
          <DialogTitle>course modal</DialogTitle>
          <DialogDescription>course modal</DialogDescription>
        </DialogHeader>
        {/* <DialogPrimitive.Close className="bg-slate-200 dark:bg-slate-100 rounded-md p-1 absolute left-4 top-4 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"> */}
        <DialogPrimitive.Close className="bg-slate-200 dark:bg-slate-100 rounded-md p-1 absolute left-4 top-4">
          <ArrowLeft className="h-5 w-auto text-slate-900" />
        </DialogPrimitive.Close>
        <div className="border-none overflow-scroll hidden-scrollbar">
          <div className="space-y-3 pt-12 pb-6 flex flex-col justify-center items-center text-center px-4 md:px-12">
            <div className="rounded-md bg-slate-100 overflow-hidden aspect-video">
              {/* <Image
                width={200}
                height={200}
                src={cardData.imageUrl as string}
                alt="c-pic"
                className="object-cover h-full w-full"
              /> */}
              {/* {cardData.} */}
              <img
                width={200}
                height={200}
                src={cardData.imageUrl as string}
                alt="c-pic"
                className="object-cover h-full w-full max-h-[300px] max-w-[300px]"
              />
            </div>
            <div className="space-y-2 py-2">
              <h2 className="text-2xl text-slate-700 dark:text-slate-300 font-semibold">
                Simplify Learning
              </h2>
              <p className="text-slate-500 dark:text-slate-200 text-sm font-medium w-full">
                {cardData.title}
              </p>
              <div className="h-[0.5px] bg-slate-300 w-[60%] mx-auto" />
            </div>
            <div className="space-y-1 py-2">
              <p className="text-[12px] text-slate-400 dark:text-slate-300 font-semibold -mb-[6px]">
                Session
              </p>
              <h2 className="text-[16px] text-slate-700 dark:text-slate-300 font-semibold">
                {cardData.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-200 text-sm font-medium w-full">
                {cardData.description}
              </p>
            </div>
            {cardData.price && (
              <p className="text-2xl font-bold text-slate-700 dark:text-slate-200 mt-4">
                ₦{formatPrice(cardData.price as number)}
              </p>
            )}
            {status === "unauthenticated" && (
              <div className="flex items-center justify-between gap-x-4">
                <Button
                  onClick={onClose}
                  size="sm"
                  variant="default"
                  className="bg-primary w-full md:w-max px-12 flex-1 hover:bg-primary/75 hover:text-muted"
                  asChild
                >
                  <Link href={`/login`}>
                    <span className="text-muted">Login to continue</span>
                  </Link>
                </Button>
              </div>
            )}
            {status === "authenticated" && (
              <Button
                asChild
                variant="default"
                className="w-max px-12"
                onClick={() => {}}
              >
                <a href={cardData.calenderLink as string} target="_blank">
                  Book Now
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
