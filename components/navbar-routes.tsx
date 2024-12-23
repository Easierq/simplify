"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

const NavbarRoutes = () => {
  const pathname = usePathname();
  //   const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";
  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/teacher");

  return (
    <div className="ml-auto flex gap-x-4 items-center">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button size="sm" variant="ghost">
            <LogOut className="w-4 h-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button size="sm" variant="ghost">
            Teacher mode
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NavbarRoutes;
