"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { QuickAccessIcon } from "./icons";
import { SidebarWrap } from "./sidebar-wrap";

export const MobileToggle = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="md:hidden bg-none p-0 hover:bg-transparent dark:hover:bg-transparent">
          {/* <Menu className="h-9 w-9" /> */}
          <QuickAccessIcon className="h-6 w-6 ml-[2px] md:hidden hover:bg-none dark:hover:bg-none mb-1 cursor-pointer text-slate-900 dark:text-slate-200" />
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 flex gap-0">
        <SheetHeader className="hidden">
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <SidebarWrap />
      </SheetContent>
    </Sheet>
  );
};
