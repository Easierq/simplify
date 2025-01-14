import React, { Suspense } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import { ModeToggle } from "./toggle";
import { MobileToggle } from "./mobile-toggle";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import MobileNav from "./mobile-nav";
import { MainNav } from "./main-nav";
// import { UserDropDown } from "./user-drop-down";
import { UserAuthButton } from "./user-auth-button";

const UserSuspence = () => <div className="bg-slate-500 w-[100px] h-7" />;

export const Navbar = () => {
  return (
    <header className="h-14 sticky px-[5%] md:px-[7%] flex items-center top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-[1440px] flex h-auto items-center justify-between">
        <MobileNav />
        <MainNav />
        <nav>
          <div className="md:flex">
            <div className="flex items-center gap-2 md:gap-4">
              {/* <div className="flex md:hidden">
                    <SearchToggle />
                  </div> */}
              <Link href="/pricing" className="hidden md:flex">
                <span className="text-sm font-semibold cursor-pointer hover:opacity-80">
                  Pricing
                </span>
              </Link>
              {/* <Link
                href="/admin"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "px-2 lg:px-3 h-8 font-semibold hidden md:flex items-center justify-center gap-1 border-2 border-slate-900 dark:border-slate-200"
                )}
              >
                <Plus className="w-4 h-4 font-bold mb-[1px]" />
                <p className="hidden lg:block">Create course</p>
              </Link>
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "px-4 h-8 font-semibold"
                )}
              >
                Get Started
              </Link>
              <UserDropDown /> */}
              <Suspense fallback={<UserSuspence />}>
                <UserAuthButton />
              </Suspense>
              <ModeToggle />
              <MobileToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
