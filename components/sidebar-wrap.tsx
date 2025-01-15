"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";
import { Logo } from "./logo";
import { MobileDarkLight } from "./sidebar-dark-light";
import { Plus, Video } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { SheetClose } from "./ui/sheet";
import { cn } from "@/lib/utils";

export const SidebarWrap = () => {
  const { status, data: session } = useSession();

  return (
    <div className="p-6 pt-14 w-full">
      <div className="w-full flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <Logo />
          <MobileDarkLight />
        </div>
        {session?.user.isAdmin && (
          <Link
            href="/admin"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "px-2 lg:px-3 text-muted w-full h-10 font-semibold flex items-center justify-center gap-1 mb-4 bg-primary hover:bg-primary/75 hover:text-muted"
            )}
          >
            {/* <Plus className="w-4 h-4 font-bold mb-[1px]" /> */}
            {/* <p className="">Create course</p> */}
            <p className="">Admin Page</p>
          </Link>
        )}
        {/* <div className="flex flex-col mb-2">
          <p className="text-slate-400 mb-1">Courses</p>
          <div className="flex items-center gap-2 ml-1">
            <Video className="h-5 w-5" />
            <SheetClose asChild>
              <Link href={`/courses`} className="block">
                <p className="font-medium text-xs"> UI/UX</p>
              </Link>
            </SheetClose>
          </div>
        </div> */}
        <div className="flex flex-col mt-4">
          <SheetClose asChild>
            <Link href="/about" className="">
              <p className="text-slate-600 dark:text-slate-200 mb-4">
                About Us
              </p>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/pricing" className="">
              <p className="text-slate-600 dark:text-slate-200 mb-4">
                Pricing plans
              </p>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/contact"
              className="text-slate-600 dark:text-slate-200 mb-4"
            >
              <p className="">Contact Us</p>
            </Link>
          </SheetClose>
        </div>
        <div className="mt-auto">
          {status === "unauthenticated" && (
            <div className="flex w-full items-center justify-between gap-x-4">
              <Button
                size="sm"
                variant="ghost"
                className="bg-primary flex-1 hover:bg-primary/75 hover:text-muted"
                asChild
              >
                <Link href={`/login`}>
                  <span className="text-muted">Sign in</span>
                </Link>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="bg-primary flex-1 hover:bg-primary/75 hover:text-muted"
                asChild
              >
                <Link href={`/login`}>
                  <span className="text-muted">Sign up</span>
                </Link>
              </Button>
            </div>
          )}
          {status === "authenticated" && (
            <Button
              size="sm"
              variant="ghost"
              className="bg-primary flex-1 w-full hover:bg-primary/75 hover:text-muted"
              asChild
              onClick={() => signOut()}
            >
              <span className="text-muted cursor-pointer">Logout</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
