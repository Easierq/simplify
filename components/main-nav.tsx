"use client";

import * as React from "react";
import Link from "next/link";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { SearchToggle } from "./search-toggle";
import Image from "next/image";
// import { Badge } from "./ui/badge";
// import { QuickAccessIcon } from "./icons";

export function MainNav() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center">
          {/* <span className="font-bold hidden md:block">YsDesigns</span> */}
          <Image
            src="/logo.svg"
            alt="logo"
            width={124}
            height={32}
            className="hidden md:block min-w-[124px]"
          />
        </Link>
        <div className="hidden md:flex gap-4 items-center w-full">
          {/* <Link href="/courses">
            <span className="text-sm font-semibold cursor-pointer">
              Courses
            </span>
          </Link> */}
          {/* <Link href="/pricing">
            <span className="text-sm font-semibold cursor-pointer">
              Pricing
            </span>
          </Link> */}
          {/* <div className="w-[50%]">
            <SearchToggle />
          </div> */}
        </div>
      </div>
    </div>
  );
}
