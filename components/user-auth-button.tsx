"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { UserDropDown } from "./user-drop-down";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Plus } from "lucide-react";

export const UserAuthButton = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex items-center gap-2 md:gap-4">
      {session?.user.isAdmin && (
        // <Link
        //   href="/admin"
        //   className={cn(
        //     buttonVariants({ variant: "outline", size: "sm" }),
        //     "px-2 lg:px-3 h-8 font-semibold hidden md:flex items-center justify-center gap-1 border-2 bg-transparent border-slate-900 dark:border-slate-200"
        //   )}
        // >
        //   <Plus className="w-4 h-4 font-bold mb-[1px]" />
        //   <p className="">Create course</p>
        // </Link>
        <Link
          href="/admin"
          role="button"
          className={cn(
            buttonVariants({ variant: "default", size: "sm" }),
            "px-4 h-8 font-semibold rounded-none"
          )}
        >
          <Plus className="w-4 h-4 font-bold mb-[1px] text-white dark:text-black" />
          <p className="">Create course</p>
        </Link>
      )}
      {status === "unauthenticated" && (
        <Link
          href="/login"
          role="button"
          className={cn(
            buttonVariants({ variant: "default", size: "sm" }),
            "px-4 h-8 font-semibold bg-[#007bff] rounded-none"
          )}
        >
          Get Started
        </Link>
      )}
      {status === "authenticated" && <UserDropDown />}
    </div>
  );
};
